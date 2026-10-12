const textElement = document.getElementById('text');
const optionButtons = document.getElementById('options-buttons');
let state = {};
function showOption(option){
    return option.requiredState == null || option.requiredState(state)
}
function selectOption(option) {
    const nextTextNodeId = option.nextText
    state = Object.assign(state,option.setState)
    showTextNode(nextTextNodeId)

 
}

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
    text: 'You venture forth in search of answers to where you are when you come across a merchant.',
    options: [
        {
            text: 'Trade the goo for a shield',
            requiredState:(currentState) => currentState.blueGoo,
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
  





startGame();