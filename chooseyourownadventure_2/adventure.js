const textElement = document.getElementById('text');
const optionButtons = document.getElementById('options-buttons');
let state = {};

const textNodes = [
  {
    id: 1,
    text: 'You wake up in a strange place and see a jar of blue goo near you.',
    options: [
      { text: 'Take the goo', nextText: 2 },
      { text: 'Leave the goo', nextText: 3 }
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
  
}

function selectOption(option) {
 
}

startGame();