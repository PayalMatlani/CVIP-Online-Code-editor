// Get references to the textareas and the output iframe
const htmlTextarea = document.getElementById('html-code');
const cssTextarea = document.getElementById('Css-code');
const jsTextarea = document.getElementById('javascript-code');
const outputIframe = document.getElementById('Output');

// Function to update the iframe content
function updateOutput() {
    const htmlCode = htmlTextarea.value;
    const cssCode = `<style>${cssTextarea.value}</style>`;
    const jsCode = `<script>${jsTextarea.value}</script>`;

    const iframeContent = `
        <html>
        <head>
            ${cssCode}
        </head>
        <body>
            ${htmlCode}
            ${jsCode}
        </body>
        </html>
    `;

    outputIframe.contentDocument.open();
    outputIframe.contentDocument.write(iframeContent);
    outputIframe.contentDocument.close();
}

// Attach the run function to textarea keyup events
htmlTextarea.addEventListener('keyup', updateOutput);
cssTextarea.addEventListener('keyup', updateOutput);
jsTextarea.addEventListener('keyup', updateOutput);
