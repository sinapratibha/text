// Get the button and output elements
const showTextButton = document.getElementById('showTextButton');
const outputText = document.getElementById('outputText');
const textInput = document.getElementById('textInput');

// Add event listener to the button
showTextButton.addEventListener('click', function() {
    // Get the text from the input
    const userText = textInput.value;

    // Display the text in the output section
    if (userText) {
        outputText.textContent = userText;
    } else {
        outputText.textContent = "Please enter some text!";
    }
});
