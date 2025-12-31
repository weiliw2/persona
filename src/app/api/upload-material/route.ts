import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import PDFParser from 'pdf2json';

// Extract text from PDF buffer using pdf2json
async function extractPdfText(buffer: Buffer): Promise<string> {
  return new Promise((resolve, reject) => {
    const pdfParser = new PDFParser();

    pdfParser.on('pdfParser_dataError', (errData: { parserError: Error }) => {
      reject(errData.parserError);
    });

    pdfParser.on('pdfParser_dataReady', (pdfData: { Pages?: Array<{ Texts?: Array<{ R?: Array<{ T?: string }> }> }> }) => {
      try {
        // Extract text from all pages
        const text = pdfData.Pages?.map(page => {
          return page.Texts?.map(textItem => {
            return textItem.R?.map(r => decodeURIComponent(r.T || '')).join('') || '';
          }).join(' ') || '';
        }).join('\n\n') || '';

        resolve(text);
      } catch (e) {
        reject(e);
      }
    });

    pdfParser.parseBuffer(buffer);
  });
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const folder = formData.get('folder') as string | null;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // Determine target folder (documents or images)
    const targetFolder = folder === 'images' ? 'images' : 'documents';
    const materialsPath = join(process.cwd(), 'materials', targetFolder);

    // Ensure directory exists
    await mkdir(materialsPath, { recursive: true });

    // Get file buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Sanitize filename
    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
    const filePath = join(materialsPath, safeName);

    await writeFile(filePath, buffer);

    // If it's a PDF, extract text and save as .txt for AI parsing
    let extractedTextPath: string | null = null;
    if (safeName.toLowerCase().endsWith('.pdf')) {
      try {
        const text = await extractPdfText(buffer);
        if (text && text.trim().length > 0) {
          const txtName = safeName.replace(/\.pdf$/i, '.txt');
          const txtPath = join(materialsPath, txtName);
          await writeFile(txtPath, text);
          extractedTextPath = `materials/${targetFolder}/${txtName}`;
        }
      } catch (pdfError) {
        console.error('Failed to extract PDF text:', pdfError);
        // Continue without text extraction - not a fatal error
      }
    }

    return NextResponse.json({
      success: true,
      path: `materials/${targetFolder}/${safeName}`,
      name: safeName,
      extractedText: extractedTextPath
    });
  } catch (error) {
    console.error('Failed to upload file:', error);
    return NextResponse.json({ error: 'Failed to upload file' }, { status: 500 });
  }
}
