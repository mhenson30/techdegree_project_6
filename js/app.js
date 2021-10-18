
// variables

const keyboard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const overlay = document.getElementById('overlay');
const startBtn = document.getElementsByClassName('btn__reset')[0];
let missed = 0;

startBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});


// phrases array
const phrases = [
  "beep boop",
  "coding",
  "hello there",
  "boolean value",
  "team treehouse"
];

const getRandomPhraseAsArray = arr => {
  let randomPhrase = arr[Math.floor(Math.random() * arr.length)];
  const letterArray = randomPhrase.split('');
  return letterArray;
};

const phraseArray = getRandomPhraseAsArray(phrases);


const addPhraseToDisplay = arr => {
 // do stuff any arr that is passed in, and add to `#phrase ul`
 const ul = phrase.querySelector('ul');
    for (i = 0; i < arr.length; i++) {
      const li = document.createElement('li');
      li.textContent = arr[i];
      ul.appendChild(li);

      if(li.textContent != " "){
        li.classList.add("letter");
      } else {
        li.classList.add("space");
      }
        }
  }


addPhraseToDisplay(phraseArray);

const checkLetter = clicked => {
  let currentPhrase = document.getElementsByClassName('letter');
  let match = null;
    for(let i=0; i < currentPhrase.length; i++){
      if(currentPhrase[i].innerHTML.toLowerCase() === clicked){
        match = clicked;
        currentPhrase[i].classList.add("show");
      }
    }
    return match;
}

keyboard.addEventListener('click', (e) => {

  let letterFound = checkLetter(e.target.innerHTML);

    if(e.target.tagName === 'BUTTON'){

        e.target.classList.add("chosen");
        e.target.disabled = true;

}

    if(letterFound === null) {
        document.querySelectorAll('img')[missed].src = "images/lostHeart.png";
        missed += 1;
    }
    checkWin();
});

const checkWin = () => {
  let classShow = document.querySelectorAll('.show');
  let classLetter = document.querySelectorAll('.letter');
  if(classShow.length === classLetter.length){
    overlay.className = ("win");
    overlay.h2.textContent = "You Win";
    overlay.style.display = 'flex';
  } else if (missed > 4){
    overlay.className = ('lose');
    overlay.h2.textContent = "Game Over";
    overlay.style.display = 'flex';
  }

}
