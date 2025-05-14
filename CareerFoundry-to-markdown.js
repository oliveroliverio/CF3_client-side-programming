(function () {

    //-- helper functions---

    function cleanCell(cell) {
        let text = '';
        cell.childNodes.forEach(child => {
            if (child.nodeType === Node.TEXT_NODE) {
                text += child.textContent;
            } else if (child.tagName?.toLowerCase() === 'code') {
                text += `\`${child.textContent.trim()}\``;
            } else if (child.nodeType === Node.ELEMENT_NODE) {
                text += child.textContent.trim();
            }
        });
        return text.trim().replace(/\|/g, '\\|'); // escape pipes for Markdown
    }
    //--------------start-----------------------

    // Get the container div
    const container = document.getElementById("day_contents");
    console.log('Container:', container);  // Log the container element
    console.log('Container children:', container.children);

    if (!container) {
        console.error("Div not found.");
        return;
    }

    let markdown = '';

    // Process all elements within the container in the correct order
    container.querySelectorAll('*').forEach(node => {
        if (!(node instanceof Element)) return; // Skip non-element nodes
        if (
            node.closest('.w-css-reset') ||
            node.closest('.w-vulcan-overlays-table')
        ) {
            console.log('Skipped node inside .w-css-reset:', node.tagName);
            return;
        }
        // Log each node to see what's being processed
        console.log('Processing node:', node.tagName, node.className || '', node);

        switch (node.tagName.toLowerCase()) {
            case 'h4': {
                // Check if it's a "storyTitle"
                markdown += `# ${node.textContent.trim()}\n\n`;
                break;
            }
            case 'h5': {
                // Check if it's a "storyTitle"
                markdown += `## ${node.textContent.trim()}\n\n`;
                break;
            }
            case 'strong': {
                markdown += `**${node.textContent.trim()}**\n\n`
                break;
            }
            case 'p': {
                console.log('Matched <p>:', node.textContent.trim());
                markdown += `${node.textContent.trim()}\n\n`;
                break;
            }
            case 'ul': {
                const listItems = node.querySelectorAll('li');
                if (listItems.length > 0) {
                    console.log('Matched <ul>: ', listItems.length, 'items');
                    listItems.forEach(li => {
                        const liText = li.textContent.trim();
                        console.log('List item text:', liText);
                        markdown += `- ${liText}\n`;
                    });
                }
                markdown += '\n';
                break;
            }
            case 'blockquote': {
                let text = node.innerText.trim();

                // Replace each <a> with Markdown link format
                node.querySelectorAll('a').forEach(a => {
                    const href = a.getAttribute('href');
                    const linkText = a.textContent.trim();
                    const markdownLink = `[${linkText}](${href})`;

                    // Replace the plain text version of the link in `text` with markdown
                    text = text.replace(linkText, markdownLink);
                });

                // Prefix each line with '>' for blockquote
                const quote = text.split('\n').map(line => `> ${line}`).join('\n');
                markdown += `${quote}\n\n`;
                break;
            }
            case 'img': {
                const src = node.getAttribute('src');
                const alt = node.getAttribute('alt') || '';
                if (src) {
                    markdown += `![${alt}](${src})\n\n`;
                    console.log(`Processed <img>: ![${alt}](${src})`);
                }
                break;
            }
            case 'table': {
                const rows = Array.from(node.querySelectorAll('tr'));
                if (rows.length === 0) break;

                let tableMarkdown = '';
                const headerCells = rows[0].querySelectorAll('th, td');
                const columnCount = headerCells.length;

                // Header row
                const headerRow = Array.from(headerCells).map(cell => cleanCell(cell)).join(' | ');
                const separatorRow = Array(columnCount).fill('---').join(' | ');
                tableMarkdown += `${headerRow}\n${separatorRow}\n`;

                // Data rows
                rows.slice(1).forEach(tr => {
                    const cells = tr.querySelectorAll('td, th');
                    const rowText = Array.from(cells).map(cell => cleanCell(cell)).join(' | ');
                    tableMarkdown += `${rowText}\n`;
                });

                markdown += `\n${tableMarkdown}\n`;
                break;
            }

            default: {
                console.log('Ignored node:', node.tagName);  // Log ignored nodes
                break;
            }
        }
    });

    // Ensure markdown output is valid, log the markdown regardless
    console.log('Final markdown before check:', markdown);
    if (!markdown.trim()) {
        console.warn('No markdown content extracted.');
        return;
    }

    // Log the generated markdown to the console
    console.log('Generated Markdown:');
    console.log(markdown);

    // // Wait 3 seconds before copying to clipboard (allows time to focus)
    // setTimeout(() => {
    //   navigator.clipboard.writeText(markdown)
    //     .then(() => {
    //       console.log('Markdown copied to clipboard!');
    //     })
    //     .catch(err => {
    //       console.error('Failed to copy markdown:', err);
    //     });
    // }, 3000);
})();
