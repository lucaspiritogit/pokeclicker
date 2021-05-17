//inicial counter
let pokecount = 300;
// pokeClick refers to the giant pokeball that we click
let pokeClick = document.getElementById('pokeClick')
let clickSound = document.getElementById('clickSound')
pokeClick.addEventListener('click', () => {
    pokecount++;
    clickSound.currentTime = 0;
    clickSound.play();
    update()
})


//save & load the game

function save() {
localStorage.setItem("pokecount", pokecount);
localStorage.setItem("autoClickP", autoClickP);
localStorage.setItem("autoClickM", autoClickM);
localStorage.setItem("autoClickS", autoClickS);
localStorage.setItem("costAutoClickP", costAutoClickP);
localStorage.setItem("autoClickAmountM", autoClickAmountM);
localStorage.setItem("autoClickAmountP", autoClickAmountP);
localStorage.setItem("autoClickAmountS", autoClickAmountS);
};

function load() {
pokecount = localStorage.getItem("pokecount");
pokecount = parseInt(pokecount);

autoClickM = localStorage.getItem("autoClickM");
autoClickM = parseInt(autoClickM);

autoClickP = localStorage.getItem("autoClickP");
autoClickP = parseInt(autoClickP);

autoClickS = localStorage.getItem("autoClickS");
autoClickS = parseInt(autoClickS);

costAutoClickP = localStorage.getItem("costAutoClickP");
costAutoClickP = parseInt(costAutoClickP);

autoClickAmountM = localStorage.getItem("autoClickAmountM");
autoClickAmountM = parseInt(autoClickAmountM);

autoClickAmountP = localStorage.getItem("autoClickAmountP");
autoClickAmountP = parseInt(autoClickAmountP);

autoClickAmountS = localStorage.getItem("autoClickAmountS");
autoClickAmountS = parseInt(autoClickAmountS);


update()
};


// dark mode

document.getElementById('dark-mode').addEventListener('click', () => {
    document.body.style.backgroundImage = "url(stylesheet/wallpaper-dark.png)";
    document.body.style.color = "#F1FFFA";
    document.body.style.textShadow = "1px 1px 10px #000000, 10px 10px 15px #000000";
})


// store
document.getElementById('black-belt').addEventListener('click', () => {
    if (pokecount >= 300) {
        pokecount = pokecount - 300;
        pokeClick.addEventListener('click', () => {
            pokecount++;
            update()
        })
        document.getElementById('black-belt').remove();
    } else {
        alert('You dont have enough pokeballs to buy that item')
    }
})



// function to update values as the user clicks on the buttons

function update () {
    // counter of pokeballs
    document.getElementById('count').value = pokecount;
    document.title = pokecount + " Pokeballs";
    document.getElementById('count').innerHTML = `You have ${pokecount} pokeballs`

    // mankey
    document.getElementById('costAutoClickM').innerHTML = `It costs ${((autoClickM + 1) * 12)} Pokeballs to catch him!`;
    document.getElementById('autoClickAmountM').innerHTML = "You Own " + autoClickAmountM + " Auto Clickers"

    // primeape
    document.getElementById('costAutoClickP').innerHTML = `It costs ${((autoClickP + 1) * 24)} Pokeballs to catch him!`;
    document.getElementById('autoClickAmountP').innerHTML = "You Own " + autoClickAmountP + " Auto Clickers"

    
    // spinda
    document.getElementById('autoClickAmountS').innerHTML = "You Own " + autoClickAmountS + " Auto Clickers";

    // pokeballs per second counter
    perSecond = autoClickM + autoClickP + autoClickS;
    document.getElementById("perSecond").innerHTML = `Generating ${perSecond} pokeballs per second`
};






//timer of pokeballs count and autoclickers
function timer() {
    pokecount = pokecount + autoClickP;
    pokecount = pokecount + autoClickM;
    pokecount = pokecount + autoClickS;
    update()
}
        
    setInterval(timer, 1000);




//buy auto clickers and substract amount of pokeballs when paying

// mankey
let autoClickM = 0;
let autoClickAmountM = 0;

let mankey = document.getElementById("buyAutoClickM")
mankey.addEventListener('click', () => {
        if (pokecount >= ((autoClickM + 1) * 12)) {
            pokecount = pokecount - ((autoClickM + 1) * 12);
            autoClickM = autoClickM + 1; //calculates how much points per second gives, ex: this one gives +1 each second
            autoClickAmountM += 1;
            update()
        } else {
            alert('You dont have enough Pokeballs to catch that pokemon!')
        }
    
});



// primeape clicker
let autoClickP = 0;
let autoClickAmountP = 0;

let primeape = document.getElementById("buyAutoClickP");
primeape.addEventListener('click', () => {

    if (pokecount >= ((autoClickP + 1) * 24)) {
        pokecount = pokecount - ((autoClickP + 1) * 24);
        autoClickP = autoClickP + 2; //calculates how much points per second gives, ex: this one gives +2 each second
        autoClickAmountP += 1;
        update()
    } else {
        alert('You dont have enough Pokeballs to catch that pokemon')
    }
    
});

// spinda clicker

let autoClickS = 0;
let autoClickAmountS = 0;
let spindaPrices = [7757, 4807, 8711, 8734, 6660, 9270, 5391, 2130, 100000, 123994512, 123213, 935412, 3214, 12421, 45421, 45421,];
let costAutoClickS = document.getElementById('costAutoClickS');
let delay = 1000; // 1 second delay
let displayIndex = 0;

setInterval(() => {
  if (costAutoClickS) {
    costAutoClickS.innerHTML = spindaPrices[displayIndex];
  }
  
  // Move to the next item in dialog
  displayIndex++;
  
  // If display index goes out of index range, start again
  if (displayIndex >= spindaPrices.length) {
    displayIndex = 0;
  }
  document.getElementById('costAutoClickS').innerHTML = `It costs ${spindaPrices[displayIndex]} Pokeballs to catch him!`;
}, delay);

  
let spinda = document.getElementById('buyAutoClickS');

spinda.addEventListener('click', () => {

    if (pokecount >= spindaPrices[displayIndex]) {
        pokecount = pokecount - spindaPrices[displayIndex];
        autoClickS = autoClickS + Math.floor((spindaPrices[displayIndex]) / 18);
        autoClickAmountS += 1;
        update()
    } else {
        alert('You dont have enough Pokeballs to catch that pokemon')
    }

});

