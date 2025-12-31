# Persona

**Not a template.** AI builds a portfolio unique to *you*.

![Persona Demo](public/demo.png)

Most portfolio generators give you a template and make you fill in the blanks. Persona is different — you tell it who you are, pick some design vibes, and an AI builds something from scratch that could only belong to you.

## Quick Start

```bash
git clone https://github.com/JacbK/persona.git
cd persona
./setup.sh
```

That's it. The setup script walks you through everything:

1. **Repository** — Creates your own GitHub repo
2. **Dependencies** — Installs packages
3. **Configuration** — Opens a UI to set your preferences
4. **AI Assistant** — Configures your coding AI
5. **Launch** — AI starts building your portfolio

## Requirements

- Node.js 18+
- An AI coding assistant: [Claude Code](https://claude.ai/code), [Cursor](https://cursor.sh), [Codex](https://openai.com/codex), [Gemini CLI](https://github.com/google-gemini/gemini-cli), or [Aider](https://aider.chat)

## How It Works

1. **You configure** — Name, links, which sections you want, design preferences
2. **You upload** (optional) — Resume, headshot, project screenshots
3. **AI researches** — Pulls from your GitHub, LinkedIn, materials
4. **AI designs** — Creates a unique direction based on your taste
5. **AI builds** — Writes the actual code from scratch
6. **You deploy** — One command to go live

The result isn't a filled-in template. It's a custom site that reflects who you actually are.

## Add Your Materials (Optional)

Drop files in `/materials` before running setup:

```
materials/
├── documents/
│   └── resume.pdf       # AI extracts your experience
└── images/
    └── headshot.jpg     # Used in your portfolio
```

PDFs are automatically converted to text so the AI can read them.

## After Setup

Talk to your AI assistant naturally:

- *"Add my new project X"*
- *"Update my work experience"*
- *"Make the hero section more bold"*
- *"Deploy to Vercel"*

Run `./setup.sh` again anytime to edit your config.

## Deploy

Ask your AI, or run directly:

```bash
vercel --prod      # Vercel (recommended)
netlify deploy     # Netlify
```

GitHub Actions workflows are pre-configured in `.github/workflows/`.

## License

MIT
