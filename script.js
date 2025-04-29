document.addEventListener('DOMContentLoaded', () => {
    // Get references to HTML elements
    const dynamicTextElement = document.getElementById('dynamic-text');
    const styleButton = document.getElementById('style-button');
    const addButton = document.getElementById('add-button');
    const container = document.getElementById('container');

    // Function to change text content dynamically
    function changeText() {
        const newText = "The text has been updated by JavaScript!";
        dynamicTextElement.textContent = newText;
    }

    // Function to modify CSS styles
    function applyStyles() {
        dynamicTextElement.style.color = 'green';
        dynamicTextElement.style.fontWeight = 'bold';
        dynamicTextElement.style.backgroundColor = 'lightyellow';
        dynamicTextElement.style.padding = '10px';
        dynamicTextElement.style.borderRadius = '5px';
    }

    // Function to add a new paragraph element
    function addParagraph() {
        const newParagraph = document.createElement('p');
        newParagraph.textContent = `New paragraph added at ${new Date().toLocaleTimeString()}.`;
        newParagraph.classList.add('dynamic-paragraph'); // Add a class for potential styling
        container.appendChild(newParagraph);

        // Add a remove button for each added paragraph
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function() {
            container.removeChild(newParagraph);
        });
        newParagraph.appendChild(removeButton);
    }

    // Event listeners
    setTimeout(changeText, 2000); // Change text after 2 seconds

    styleButton.addEventListener('click', applyStyles);

    addButton.addEventListener('click', addParagraph);
});
