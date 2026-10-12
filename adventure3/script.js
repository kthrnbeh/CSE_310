// Create a variable that will store the entire story.
// This variable will later hold the scene the player is currently viewing.
var story;

// Create a function named getStory that accepts the player's name.
function getStory(name){
 // Return an object containing every scene in the story.
    return{
        //Identifies the first schene shown to the player.
        currentScence: "attack",
        //opening scene of the story.
        attack: {
            //text displayed as the scene heading.
            title: "Chapter 1",
            //Main story text
            story: '...${name}.',
            //choices the player can select.
            choices: [
                {
                    //Text shown beside the radio button
                    choice:"Yes, I am ready to accept",
                    //scene shown after this choice is selected.
                    destination: "battle"
                }
            ]
        },
        //battle scene with additional player choices.
        battle: {
            title: "the epic battle for cute puppistan!",
            story:"it's Avarice the angry Aaardvark, he looks pretty scary...",
            //each choice points to another scene.
            choices: [
                {
                choice: "Attack him with a sword.",
                destination: "sword"
                }
            ]
        },
         // Ending scene when the player chooses to go home.
       goHome: {
            title: "Back at home!",
            story: "Yes, you're back in comfort of your own home.",
            //image filename to display
            image:"princes_knight_wizard.png"
            //scene to use if the player does not select a choice.
            defaultDestination:"attack",
            //text displayed on the button
            buttonText:"Let's try this again"


        }
    };
       
    }
    // Wait until the HTML page has finished loading.


  // Find the Start button in the HTML.
  

  // Find the container where the story will appear.
  

  // Run this code when the Start button is clicked.
 

    // Find the player's name input.
    

    // Create the story using the player's name.
   

    // Display the first scene.
   
 


