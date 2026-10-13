// This file controls the second choose-your-own-adventure game.
// The game uses scenes, buttons, and state to remember items the player collects.

// Finds the HTML element where the current scene's text will be shown.
const textElement = document.getElementById('text');
// Finds the container where buttons for the current choices will be added.
const optionButtons = document.getElementById('options-buttons');
// Stores information about items the player has collected.
let state = {};

// Resets the player's items and begins the game at the first scene.
function startGame() {
  // Clearing state makes a restart behave like a brand-new game.
  state = {};
  // Scene 1 is the opening scene in the textNodes array.
  showTextNode(1);
}

// Displays a scene and creates buttons for all choices available in it.
function showTextNode(textNodeIndex) {
    // Finds the scene whose id matches the requested scene number.
    const textNode =textNodes.find(textNode=> textNode.id === textNodeIndex)
    // Replaces the old story text with the text for this scene.
    textElement.innerText =textNode.text
    // Removes buttons from the previous scene so choices do not pile up.
    while(optionButtons.firstChild){
        optionButtons.removeChild(optionButtons.firstChild)
    }
    // Makes one button for each choice in the current scene.
    textNode.options.forEach(option=>{
        // Hidden choices are skipped unless the player has the required item.
        if(showOption(option)) {
            // Creates the button that the player will click.
            const button = document.createElement ('button')
            // Adds the choice's words to the button.
            button.innerText =option.text
            // Gives the button the CSS class used to style game buttons.
            button.classList.add('btn')
            // Selects the choice and moves to its destination when clicked.
            button.addEventListener('click', () => selectOption(option))
            // Places the finished button on the page.
            optionButtons.appendChild(button)
        }

    })
}

// Decides whether a choice should be shown to the player.
function showOption(option){
    // Choices without requirements are always visible; other choices need their requirement to pass.
    return option.requiredState == null || option.requiredState(state)
}

// Applies a selected choice and moves the player to the next scene.
function selectOption(option) {
    // Reads the id of the scene connected to the selected choice.
    const nextTextNodeId = option.nextText
    // A non-positive id means the story has ended and should restart.
    if(nextTextNodeId <= 0){
      return startGame();
    }
    // Adds or changes items in the player's state, such as the sword or blue goo.
    state = Object.assign(state,option.setState)
    // Shows the scene connected to the selected choice.
    showTextNode(nextTextNodeId)

 
}

// Contains every scene in the game. Each scene has text and choices that lead to other scenes.
const textNodes = [
  {
    // The id lets showTextNode() find this scene.
    id: 1,
    // This text is displayed when the scene begins.
    text: 'You wake up in a strange place and see a jar of blue goo near you.',
    // Each option contains button text, optional state changes, and a destination scene.
    options: [
      {
        text: 'Take the goo',
        // Remembering the goo makes later goo-related choices available.
        setState: { blueGoo: true },
        nextText: 2
      },
      { text: 'Leave the goo', nextText: 2 }
    ]
  },
  {
    id: 2,
    text: 'You venture forth in search of answers to where you are when you come across a merchant.',
    options: [
        {
            text: 'Trade the goo for a shield',
            // This choice is available only when the player took the goo.
            requiredState:(currentState) => currentState.blueGoo,
            // The goo is removed and the shield is added after the trade.
            setState:{blueGoo: false, sword:true},
            nextText:3
        },
        {
            text: 'Ignore the merchant',
            nextText:3
        }
    ]

    
    
  },
  {
    id: 3,
    text: 'After leaving the merchant you start to feel tired and stumble upon a small town next to a dangerous looking castle.',
    options: [
      {
        text: 'Explore the castle',
        nextText: 4
      },
      {
        text: 'Find a room to sleep at in the town',
        nextText: 5
      },
      {
        text: 'Find some hay in a stable to sleep in',
        nextText: 6
      }
    ]

    
  },
  {
    id: 4,
    text: 'You are so tired that you fall asleep while exploring the castle and are killed by some terrible monster in your sleep.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
   {
    id: 5,
    text: 'Without any money to buy a room you break into the nearest inn and fall asleep. After a few hours of sleep the owner of the inn finds you and has the town guard lock you in a cell.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    text: 'You wake up well rested and full of energy ready to explore the nearby castle.',
    options: [
      {
        text: 'Explore the castle',
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    text: 'While exploring the castle you come across a horrible monster in your path.',
    options: [
      {
        text: 'Try to run',
        nextText: 8
      },
      {
        text: 'Attack it with your sword',
        // The sword choice is shown only if the player traded for a sword.
        requiredState: (currentState) => currentState.sword,
        nextText: 9
      },
      {
        text: 'Hide behind your shield',
        // The shield choice is shown only if the player has a shield.
        requiredState: (currentState) => currentState.shield,
        nextText: 10
      },
      {
        text: 'Throw the blue goo at it',
        // The goo choice is shown only if the player still has the goo.
        requiredState: (currentState) => currentState.blueGoo,
        nextText: 11
      }
    ]
  },
  {
    id: 8,
    text: 'Your attempts to run are in vain and the monster easily catches.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 9,
    text: 'You foolishly thought this monster could be slain with a single sword.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: 'The monster laughed as you hid behind your shield and ate you.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'You threw your jar of goo at the monster and it exploded. After the dust settled you saw the monster was destroyed. Seeing your victory you decide to claim this castle as your and live out the rest of your days there.',
    options: [
      {
        text: 'Congratulations. Play Again.',
        nextText: -1
      }
    ]
  }
];

// Start the game immediately after the script loads.
startGame();
