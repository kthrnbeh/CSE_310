// Create a variable that will store the entire story.
// This variable will later hold the scene the player is currently viewing.

// Create a function named getStory that accepts the player's name.
// Return an object containing every scene in the story.
// Store the name inside the opening scene so the story can greet the player.

// Add a currentScene property to identify the first scene.

// Create an attack scene with:
// - A title
// - Story text
// - A choices array
// - A destination for each choice

// Create a battle scene with choices that lead to different endings.

// Create ending scenes for the sword and candlestick choices.
// Give each ending a defaultDestination so the player can start again.

// Create a goHome scene.
// Include an image filename if this scene should display an image.
// Include buttonText if the button should have a special label.

// Wait until the HTML document has loaded.
// Find the start button and the content container using their IDs.
// Add a click event to the start button.
// When clicked, read the name input, create the story, and call renderScene.

// Create renderScene to display the current scene.
// Find the current scene from the story object.
// Prepare the title, story paragraph, image, choices, and button text.
// Replace the content container's HTML with the current scene.
// If the scene has an image, set the image source.
// Add a click event to the submit button.

// Create getInputValue to find which radio button the player selected.
// If a radio button is selected, use its data-destination value.
// Change currentScene to that destination and render the next scene.
// If no choice is selected, use the scene's defaultDestination.

// Create getInputs to build the radio buttons for the current scene.
// If the scene has no choices, return an empty result.
// Loop through the choices.
// For each choice, create a radio input and label.
// Store the destination in a data-destination attribute.
// Return all of the generated choice inputs.
