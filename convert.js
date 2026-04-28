const fs = require('fs');
const { marked } = require('marked');

const template = (title, content) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.8;
            max-width: 900px;
            margin: 0 auto;
            padding: 40px 20px;
            background: #f5f5f7;
            color: #333;
        }
        .container {
            background: white;
            padding: 60px;
            border-radius: 12px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        h1 {
            color: #1d1d1f;
            font-size: 2.5em;
            margin-bottom: 0.3em;
            border-bottom: 3px solid #667eea;
            padding-bottom: 0.3em;
        }
        h2 {
            color: #333;
            font-size: 1.8em;
            margin-top: 1.5em;
            margin-bottom: 0.5em;
            border-bottom: 2px solid #e0e0e0;
            padding-bottom: 0.3em;
        }
        h3 {
            color: #555;
            font-size: 1.3em;
            margin-top: 1.2em;
        }
        p {
            margin-bottom: 1em;
            color: #444;
        }
        ul, ol {
            margin-bottom: 1em;
            padding-left: 2em;
        }
        li {
            margin-bottom: 0.5em;
            color: #444;
        }
        strong {
            color: #1d1d1f;
            font-weight: 600;
        }
        code {
            background: #f4f4f4;
            padding: 2px 6px;
            border-radius: 3px;
            font-family: 'SF Mono', Monaco, 'Courier New', monospace;
            font-size: 0.9em;
        }
        .back-link {
            display: inline-block;
            margin-bottom: 20px;
            color: #667eea;
            text-decoration: none;
            font-weight: 600;
        }
        .back-link:hover {
            text-decoration: underline;
        }
        blockquote {
            border-left: 4px solid #667eea;
            padding-left: 20px;
            margin-left: 0;
            color: #666;
            font-style: italic;
        }
    </style>
</head>
<body>
    <div class="container">
        <a href="index.html" class="back-link">← Back to Overview</a>
        ${content}
    </div>
</body>
</html>`;

// Convert buyer report
const buyerMd = fs.readFileSync('apple_darwinai_buyer_report.md', 'utf8');
const buyerHtml = marked.parse(buyerMd);
fs.writeFileSync('buyer_report.html', template('Apple-DarwinAI Acquisition - Buyer Perspective', buyerHtml));

// Convert target report
const targetMd = fs.readFileSync('apple_darwinai_target_report.md', 'utf8');
const targetHtml = marked.parse(targetMd);
fs.writeFileSync('target_report.html', template('Apple-DarwinAI Acquisition - Target Perspective', targetHtml));

console.log('✅ Reports converted successfully!');
