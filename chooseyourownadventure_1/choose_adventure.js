// Finds the heading where the current story text will be displayed.
const adventureText = document.querySelector("#adventure-text");

// Finds the container where the current choice buttons will be displayed.
const characterButtons = document.querySelector("#character-buttons");

// Stores every scene in the adventure using a unique number as its key.
const textNodes = {
    // Scene 1 displays the character-selection choices.
    1: {
        // Text shown when the player returns to the beginning.
        text: "Choose your character:",
        // Each option contains button text and the scene to open next.
        options: [
            // Sends the player to the princess scene.
            { text: "Choose the princess", nextText: 2 },
            // Sends the player to the wizard scene.
            { text: "Choose the wizard", nextText: 3 },
            // Sends the player to the knight scene.
            { text: "Choose the knight", nextText: 4 },
        ],
    },

    // Scene 2 describes the princess character and her choices.
    2: {
        text: "You are a brave princess on a quest to save your kingdom!",
        options: [
            // Continues the character's journey.
            { text: "Continue your journey", nextText: 5 },
            // Returns to the character-selection scene.
            { text: "Return to the forest entrance", nextText: 1 },
            // Opens the resting scene.
            { text: "Rest for a while", nextText: 6 },
            // Opens the exploration scene.
            { text: "Explore the surroundings", nextText: 7 },
        ],
    },

    // Scene 3 describes the wizard character and his choices.
    3: {
        text: "You are a wise wizard seeking ancient knowledge!",
        options: [
            { text: "Continue your journey", nextText: 5 },
            { text: "Return to the forest entrance", nextText: 1 },
            { text: "Rest for a while", nextText: 6 },
            { text: "Explore the surroundings", nextText: 7 },
        ],
    },

    // Scene 4 describes the knight character and his choices.
    4: {
        text: "You are a valiant knight defending the realm!",
        options: [
            { text: "Continue your journey", nextText: 5 },
            { text: "Return to the forest entrance", nextText: 1 },
            { text: "Rest for a while", nextText: 6 },
            { text: "Explore the surroundings", nextText: 7 },
        ],
    },

    // Scene 5 describes the player's continued journey.
    5: {
        text: "You continue your journey through the forest, facing various challenges and making new discoveries.",
        options: [
            { text: "Return to the forest entrance", nextText: 1 },
            { text: "Rest for a while", nextText: 6 },
        ],
    },

    // Scene 6 describes the result of resting.
    6: {
        text: "You rest beneath a large tree and regain your strength.",
        options: [
            // Sends the player back to the journey scene.
            { text: "Continue your journey", nextText: 5 },
        ],
    },

    // Scene 7 describes the result of exploring the surroundings.
    7: {
        text: "You discover a hidden path leading deeper into the forest.",
        options: [
            // Sends the player back to the journey scene.
            { text: "Continue your journey", nextText: 5 },
        ],
    },
};

// Displays a story scene and creates buttons for all of its choices.
function showTextNode(nodeId) {
    // Gets the scene data that matches the requested scene number.
    const textNode = textNodes[nodeId];

    // Updates the heading with the current scene's text.
    adventureText.textContent = textNode.text;

    // Removes buttons from the previous scene before adding new ones.
    characterButtons.replaceChildren();

    // Loops through every choice in the current scene.
    textNode.options.forEach((option) => {
        // Creates a new button element for the choice.
        const button = document.createElement("button");

        // Prevents the button from submitting a form if one is added later.
        button.type = "button";
        // Places the choice text on the button.
        button.textContent = option.text;
        // Opens the next scene when the player clicks the button.
        button.addEventListener("click", () => showTextNode(option.nextText));
        // Adds the finished button to the page.
        characterButtons.appendChild(button);
    });
}

// Starts the game at the character-selection scene.
showTextNode(1);
