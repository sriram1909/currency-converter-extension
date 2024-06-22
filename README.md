# Currency Converter Extension

This is a Chrome extension for converting currencies using an API. The extension allows users to input an amount in GBP and convert it to another currency.

## Features

- Convert currencies using real-time exchange rates from the API Ninjas API.
- Simple and intuitive user interface.

## Installation

1. Clone the repository:
    \`\`\`bash
    git clone https://github.com/sriram1909/currency-converter-extension.git
    \`\`\`
2. Navigate to the project directory:
    \`\`\`bash
    cd currency-converter-extension
    \`\`\`
3. In the background.js file you can add your own API key to access the currency converter API:
    \`\`\`background.js
    API_KEY=your_api_key_here
    \`\`\`
4. Load the extension in Chrome:
    1. Open Chrome and go to \`chrome://extensions/\`.
    2. Enable \"Developer mode\" by toggling the switch in the top right corner.
    3. Click the \"Load unpacked\" button and select the \`dist\` directory.
5. That's all, you are set to use the extension.

## Usage

1. Open the extension by clicking on the extension icon in the Chrome toolbar.
2. Enter the amount in GBP you want to convert.
3. Enter the target currency (e.g., USD).
4. Click the \"Convert\" button to see the conversion result.
