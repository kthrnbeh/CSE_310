const textElement = document.getElementById('text');
const optionButtons = document.getElementById('options-buttons');
let state = {};

const textNodes = [
  {
    id: 1,
    text: 'You wake up in a strange place and see a jar of blue goo near you.',
    options: [
      {
        text: 'Take the goo',
        setState: { blueGoo: true },
        nextText: 2
      },
      { text: 'Leave the goo', nextText: 2 }
    ]
  },
  {
    id: 2,
    
    
  },
  {
    id: 3,
    
  },
  {
    id: 4,
   
    
  }
];

function startGame() {
  state = {};
  showTextNode(1);
}

function showTextNode(textNodeIndex) {
    const textNode =textNodes.find(textNode=> textNode.id === textNodeIndex)
    textElement.innerText =textNode.text
    while(optionButtonElement.firstChild){
        optionButtonElement.removeChild(optionButtonsElement.firstChild)
    }
    textNode.options.forEach(option=>{
        if(showOption(option)) {
            const button = document.createElement ('button')
            button.innerText =option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonElement.appendChild(button)
        }

    })
}
  

function showOption(option){
    return true
}

function selectOption(option) {
 
}

startGame();