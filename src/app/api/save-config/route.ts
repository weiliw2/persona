import { NextRequest, NextResponse } from 'next/server';
import { writeFile, access, constants } from 'fs/promises';
import { join, dirname } from 'path';

export async function POST(request: NextRequest) {
  try {
    const { yaml } = await request.json();

    if (!yaml || typeof yaml !== 'string') {
      return NextResponse.json({ error: 'Invalid YAML content' }, { status: 400 });
    }

    // Write to project root
    const filePath = join(process.cwd(), 'profile.yaml');
    const dir = dirname(filePath);

    console.log('[save-config] Attempting to write to:', filePath);
    console.log('[save-config] Directory:', dir);
    console.log('[save-config] YAML length:', yaml.length);

    // Check if directory is writable
    try {
      await access(dir, constants.W_OK);
      console.log('[save-config] Directory is writable');
    } catch {
      console.error('[save-config] Directory is NOT writable:', dir);
      return NextResponse.json({ error: `Directory not writable: ${dir}` }, { status: 500 });
    }

    await writeFile(filePath, yaml, 'utf-8');
    console.log('[save-config] Successfully wrote file');

    // Write sentinel file for setup.sh to detect save completion
    const sentinelPath = join(process.cwd(), '.config-saved');
    await writeFile(sentinelPath, new Date().toISOString(), 'utf-8');
    console.log('[save-config] Wrote sentinel file');

    return NextResponse.json({ success: true, path: filePath });
  } catch (error) {
    console.error('[save-config] Failed to save profile.yaml:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: `Failed to write file: ${errorMessage}` }, { status: 500 });
  }
}
