// This file controls the third choose-your-own-adventure game.
// It waits for the player to enter a name, then displays story scenes and choices.

// Store the complete story and the scene the player is currently viewing.
var story;
// This variable will later hold the story object returned by getStory().
var content;
// This variable will refer to the HTML element where each scene is displayed.

// Create and return the story scenes.
function getStory(name) {
    // The name argument comes from the player's input in adventure.html.
    // Returning an object lets the program organize the story into separate scenes.
    return {
        // Identify the first scene shown to the player.
        currentScene: "attack",

        // Opening scene of the story.
        attack: {
            // Each scene has a title that becomes the heading on the page.
            title: "Chapter 1",
            // Backticks create a template literal, allowing ${name} to be replaced with the player's name.
            story: `Once upon a time, the village of Cute Puppistan lived in peace. Until one day, it was attacked by Avarice the Angry Aardvark. The Premier of Cute Puppistan said there's only one person who can save us: ${name}.`,
            // The choices array stores every option available in this scene.
            choices: [
                {
                    // This is the text the player will read beside the choice button.
                    choice: "Yes, I'm ready to accept!",
                    // This must match the name of another scene in the story object.
                    destination: "battle"
                },
                {
                    choice: "Meh, I think I'd rather just play video games instead.",
                    destination: "goHome"
                }
            ]
        },

        // Battle scene with additional player choices.
        battle: {
            title: "The epic battle for Cute Puppistan!",
            story: "It's Avarice the Angry Aardvark. He looks pretty scary...",
            choices: [
                {
                    choice: "Attack him with a sword.",
                    destination: "sword"
                },
                {
                    choice: "Attack him with a candlestick.",
                    destination: "candleStick"
                }
            ]
        },

        // Ending scenes for the battle choices.
        sword: {
            // This scene has no choices, so it is an ending scene.
            title: "Victory!",
            story: "You defeat Avarice with your sword and save Cute Puppistan!",
            // This is used when the player clicks the button without selecting a radio choice.
            defaultDestination: "attack",
            // This changes the text shown on the scene's button.
            buttonText: "Play again"
        },
        candleStick: {
            title: "A Surprising Victory!",
            story: "The candlestick works! You defeat Avarice and save the village.",
            defaultDestination: "attack",
            buttonText: "Play again"
        },

        // Ending scene for the player who chooses to go home.
        goHome: {
            title: "Back at home!",
            story: "Yes, you're back in the comfort of your own home. Someone else took care of the problem.",
            image: "princes_knight_wizard.png",
            defaultDestination: "attack",
            buttonText: "Let's try this again"
        }
    };
}

// Wait until the HTML page has finished loading.
document.addEventListener("DOMContentLoaded", function () {
    // DOMContentLoaded makes sure the HTML elements exist before JavaScript searches for them.
    // Find the Start button and story content container.
    var button = document.querySelector("#start-button");
    content = document.querySelector("#content");

    // Start the story when the player clicks the button.
    button.addEventListener("click", function () {
        // This function runs only after the player clicks the Start button.
        var name = document.querySelector("#name-input");
        // name.value reads the text typed into the input box.
        story = getStory(name.value);
        // This draws the first scene after the story has been created.
        renderScene();
    });
});

// Display the current scene.
function renderScene() {
    // Use currentScene as a key to retrieve the correct scene from the story object.
    var currentScene = story[story.currentScene];
    // The || operator uses "Next" when the scene does not provide buttonText.
    var text = currentScene.buttonText || "Next";
    // Start with an empty image string because most scenes do not have an image.
    var image = "";

    // Add an image only when the current scene has one.
    if (currentScene.image) {
        // Only create an image element when the scene includes an image filename.
        image = '<img alt="Story image">';
    }

    // Replace the content with the current scene.
    content.innerHTML = `
        <!-- These expressions insert the current scene's values into the HTML. -->
        <h1>${currentScene.title}</h1>
        <p>${currentScene.story}</p>
        ${image}
        ${getInputs()}
        <button id="submit-button">${text}</button>
    `;

    // Set the image source when an image is present.
    if (currentScene.image) {
        // Set the image's source to the image stored in the current scene.
        document.querySelector("img").src = `./img/${currentScene.image}`;
    }

    // Move to the next scene when the button is clicked.
    var button = document.querySelector("#submit-button");
    button.addEventListener("click", function () {
        getInputValue();
    });
}

// Find the choice selected by the player.
function getInputValue() {
    // querySelectorAll returns every radio button currently displayed on the page.
    var inputs = document.querySelectorAll('input[type="radio"]');

    // Start at index 0 and check each radio button one at a time.
    for (var i = 0; i < inputs.length; i++) {
        // The checked property is true only for the option selected by the player.
        if (inputs[i].checked) {
            // Read the destination stored in the selected input's data attribute.
            story.currentScene = inputs[i].getAttribute("data-destination");
            // Display the scene connected to that destination.
            renderScene();
            // Stop the loop after finding the selected option.
            return;
        }
    }

    // Use the default destination when the scene has no radio choice.
    story.currentScene = story[story.currentScene].defaultDestination;
    renderScene();
}

// Create the radio buttons for the current scene's choices.
function getInputs() {
    // This string will hold the HTML for all choices in the current scene.
    var input = "";
    // Retrieve the choices array from the scene currently being displayed.
    var choices = story[story.currentScene].choices;

    // Ending scenes do not have choices, so there is no radio-button HTML to return.
    if (!choices) {
        return "";
    }

    // Repeat once for every choice in the current scene.
    for (var i = 0; i < choices.length; i++) {
        // Add one choice's HTML to the input string during each loop.
        input += `
            <div>
                <!-- data-destination remembers which scene this choice should open. -->
                <!-- id uniquely identifies this radio button. -->
                <!-- type radio makes this a selectable option. -->
                <!-- The shared name makes the choices act as one group. -->
                <input data-destination="${choices[i].destination}" id="radio${i}" type="radio" name="choices">
                <!-- The label displays the choice text and connects to the radio button by id. -->
                <label for="radio${i}">${choices[i].choice}</label>
            </div>
        `;
    }

    // Send the completed HTML string back to renderScene().
    return input;
}
