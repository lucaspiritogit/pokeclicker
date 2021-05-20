//inicial counter
let pokecount = 10000;
// pokeClick refers to the giant pokeball that we click
let pokeClick = document.getElementById("pokeClick");
let clickSound = document.getElementById("clickSound");
pokeClick.addEventListener("click", () => {
  pokecount++;
  clickSound.currentTime = 0;
  clickSound.play();
  update();
});



//save & load the game

function save() {
  localStorage.setItem("pokecount", pokecount);
  localStorage.setItem('perSecond', perSecond)
  localStorage.setItem("autoClickP", autoClickP);
  localStorage.setItem("autoClickM", autoClickM);
  localStorage.setItem("autoClickS", autoClickS);
  localStorage.setItem("autoClickPoli", autoClickPoli)
  localStorage.setItem("autoClickPoliwhirl", autoClickPoliwhirl)
  localStorage.setItem("costAutoClickP", costAutoClickP);
  localStorage.setItem("autoClickAmountM", autoClickAmountM);
  localStorage.setItem("autoClickAmountP", autoClickAmountP);
  localStorage.setItem("autoClickAmountS", autoClickAmountS);
  localStorage.setItem("autoClickAmountPoli", autoClickAmountPoli)
  localStorage.setItem("autoClickAmountPoliwhirl", autoClickAmountPoliwhirl)
  localStorage.setItem("poliwhirl", poliwhirl)
  localStorage.setItem("blackBelt", blackBelt);
  localStorage.setItem("polistate",polistate)

  update();
}

function load() {
  pokecount = localStorage.getItem("pokecount");
  pokecount = parseInt(pokecount);

  perSecond = localStorage.getItem('perSecond')


  autoClickM = localStorage.getItem("autoClickM");
  autoClickM = parseInt(autoClickM);

  autoClickP = localStorage.getItem("autoClickP");
  autoClickP = parseInt(autoClickP);

  autoClickS = localStorage.getItem("autoClickS");
  autoClickS = parseInt(autoClickS);

  autoClickPoli = localStorage.getItem("autoClickPoli")
  autoClickPoli = parseInt(autoClickPoli)

  
  autoClickPoliwhirl = localStorage.getItem("autoClickPoliwhirl")
  autoClickPoliwhirl = parseInt(autoClickPoliwhirl)

  costAutoClickP = localStorage.getItem("costAutoClickP");
  costAutoClickP = parseInt(costAutoClickP);

  autoClickAmountM = localStorage.getItem("autoClickAmountM");
  autoClickAmountM = parseInt(autoClickAmountM);

  autoClickAmountP = localStorage.getItem("autoClickAmountP");
  autoClickAmountP = parseInt(autoClickAmountP);

  autoClickAmountS = localStorage.getItem("autoClickAmountS");
  autoClickAmountS = parseInt(autoClickAmountS);


  autoClickAmountPoli = localStorage.getItem("autoClickAmountPoli")
  autoClickAmountPoli = parseInt(autoClickAmountPoli)
  autoClickAmountPoliwhirl = localStorage.getItem("autoClickAmountPoliwhirl")
  autoClickAmountPoliwhirl = parseInt(autoClickAmountPoliwhirl)
  poliwhirlClicker = localStorage.getItem("poliwhirlClicker")

  

  blackBelt = localStorage.getItem("blackBelt");



  update();
}

// dark mode
let darkMode = localStorage.getItem("darkMode");

const darkModeToggle = document.querySelector("#dark-mode");

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add("darkMode");
  // 2. Update darkMode in localStorage
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove("darkMode");
  // 2. Update darkMode in localStorage
  localStorage.setItem("darkMode", null);
};

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === "enabled") {
  document.getElementById("dark-mode").innerHTML = "Light Mode";
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener("click", () => {
  // get their darkMode setting
  darkMode = localStorage.getItem("darkMode");

  // if it not current enabled, enable it
  if (darkMode !== "enabled") {
    document.getElementById("dark-mode").innerHTML = "Light Mode";
    enableDarkMode();
    // if it has been enabled, turn it off
  } else {
    document.getElementById("dark-mode").innerHTML = "Dark Mode";
    disableDarkMode();
  }
});

// pokeshop
//black belt
document.getElementById("blackBelt").addEventListener("click", () => {
  if (pokecount >= 300) {
    pokecount = pokecount - 300;
    pokeClick.addEventListener("click", () => {
      pokecount++;
      update();
    });    
    document.getElementById("blackBelt").remove();

  } else {
    alert("You dont have enough pokeballs to buy that item");
  }
  update();


});


// water stone
waterStoneAmount = 0;
document.getElementById('waterStone').addEventListener("click", () => {
  if (pokecount >= 500) {
      pokecount = pokecount - 300;
      document.getElementById("waterStone").remove();
      update();
  }
});

// kings rock
document.getElementById('kingsRock').addEventListener("click", () => {
  if (pokecount >= 10000) {
      pokecount = pokecount - 10000;
      document.getElementById("kingsRock").remove();
      update();
  }
});

// oran berry
oranBerry = document.getElementById('oranBerry');
oranBerry.addEventListener('click', () => {
  if (pokecount >= 5000) {
      pokecount = pokecount - 5000;
      perSecond = perSecond * 10
      
      oranBerry.remove();
      update();
  }
});


// rare candy
let rareCandy = document.getElementById("rare-candy");
let rareCandyAmount = document.getElementById("rareCandyAmount");
rareCandyAmount = 0;

rareCandy.addEventListener("click", () => {
  if (pokecount >= 1000) {
    pokecount = pokecount - 1000;
    rareCandyAmount++;
    document.getElementById(
      "rareCandyAmount"
    ).innerHTML = `You have ${rareCandyAmount} Rare Candies`;
    // evolve
  } else {
    alert("You dont have enough pokeballs to buy that item");
  }

  update();
});




// function to update values as the user clicks on the buttons

function update() {
  // counter of pokeballs
  document.getElementById("count").value = pokecount;
  document.title = pokecount + " Pokeballs";
  document.getElementById(
    "count"
  ).innerHTML = `You have ${pokecount} Pokeballs`;

  // mankey
  document.getElementById("costAutoClickM").innerHTML = `It costs ${
    (autoClickM + 1) * 12
  } Pokeballs to catch him!`;
  document.getElementById("autoClickAmountM").innerHTML =
    "You Own " + autoClickAmountM + " Auto Clickers";

  // primeape
  document.getElementById("costAutoClickP").innerHTML = `It costs ${
    (autoClickP + 1) * 24
  } Pokeballs to catch him!`;
  document.getElementById("autoClickAmountP").innerHTML =
    "You Own " + autoClickAmountP + " Auto Clickers";

  // spinda
  document.getElementById("autoClickAmountS").innerHTML =
    "You Own " + autoClickAmountS + " Auto Clickers";

 
  // mankey
  document.getElementById("costAutoClickPoli").innerHTML = `It costs ${
    (autoClickPoli + 1) * 10
  } Pokeballs to catch him!`;

  // poliwag
    document.getElementById("autoClickAmountPoli").innerHTML =
      "You Own " + autoClickAmountPoli + " Auto Clickers";


        
      document.getElementById("costAutoClickPoliwhirl").innerHTML = `It costs ${
        (autoClickPoliwhirl + 1) * 60
      } Pokeballs to catch him!`;
      document.getElementById("autoClickAmountPoliwhirl").innerHTML =
        "You Own " + autoClickAmountPoliwhirl + " Auto Clickers";
      

        

  // pokeballs per second counter

  let perSecond = autoClickM + autoClickP + autoClickS + autoClickPoli + autoClickPoliwhirl;
  document.getElementById(
    "perSecond"
  ).innerHTML = `Generating ${(perSecond)} pokeballs per second`;

// rare candy
document.getElementById(
  "rareCandyAmount"
).innerHTML = `You have ${rareCandyAmount} Rare Candies`;


};

//timer of pokeballs count and autoclickers
function timer() {
  pokecount = pokecount + autoClickP;
  pokecount = pokecount + autoClickM;
  pokecount = pokecount + autoClickS;
  pokecount = pokecount + autoClickPoli;
  pokecount = pokecount + autoClickPoliwhirl;
  update();
};
setInterval(timer, 1000);

//buy auto clickers and substract amount of pokeballs when paying

// mankey
let autoClickM = 0;
let autoClickAmountM = 0;

let mankey = document.getElementById("buyAutoClickM");
mankey.addEventListener("click", () => {
  if (pokecount >= (autoClickM + 1) * 12) {
    pokecount = pokecount - (autoClickM + 1) * 12;
    autoClickM = autoClickM + 1; //calculates how much points per second gives, ex: this one gives +1 each second
    autoClickAmountM += 1;
    update();
  } else {
    alert("You dont have enough Pokeballs to catch that pokemon!");
  }
});

// primeape clicker
let autoClickP = 0;
let autoClickAmountP = 0;

let primeape = document.getElementById("buyAutoClickP");
primeape.addEventListener("click", () => {
  if (pokecount >= (autoClickP + 1) * 24) {
    pokecount = pokecount - (autoClickP + 1) * 24;
    autoClickP = autoClickP + 2; //calculates how much points per second gives, ex: this one gives +2 each second
    autoClickAmountP += 1;
    update();
  } else {
    alert("You dont have enough Pokeballs to catch that pokemon");
  }
});

// spinda clicker

let autoClickS = 0;
let autoClickAmountS = 0;
let spindaPrices = [
  7757, 4807, 8711, 8734, 6660, 9270, 5391, 2130, 100000, 123994512, 123213,
  935412, 3214, 12421, 45421, 45421,
];
let costAutoClickS = document.getElementById("costAutoClickS");
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
  document.getElementById(
    "costAutoClickS"
  ).innerHTML = `It costs ${spindaPrices[displayIndex]} Pokeballs to catch him!`;
}, delay);

let spinda = document.getElementById("buyAutoClickS");

spinda.addEventListener("click", () => {
  if (pokecount >= spindaPrices[displayIndex]) {
    pokecount = pokecount - spindaPrices[displayIndex];
    autoClickS = autoClickS + Math.floor(spindaPrices[displayIndex] / 18);
    autoClickAmountS += 1;
    update();
  } else {
    alert("You dont have enough Pokeballs to catch that pokemon");
  }
});

// poliwag
let autoClickPoli = 0;
let autoClickAmountPoli = 0;

let poliwag = document.getElementById("buyAutoClickPoli");

poliwag.addEventListener("click", () => {
  if (pokecount >= (autoClickPoli + 1) * 10) {    
    pokecount = pokecount - (autoClickPoli + 1) * 10;
    autoClickPoli = autoClickPoli + 1; //calculates how much points per second gives
    autoClickAmountPoli += 1;
    update();
  } else {
    alert("You dont have enough Pokeballs to catch that pokemon");
  }



  
});

// poliwhirl
    
let autoClickPoliwhirl = 0;
let autoClickAmountPoliwhirl = 0;
let poliwhirl = document.getElementById("buyAutoClickPoliwhirl");

document.getElementById('evolveButtonPoli').addEventListener('click', () => {

  if (rareCandyAmount >= 1) {
    rareCandyAmount--;
    document.getElementById("poliwagClicker").style.display="none"; 
    document.getElementById("poliwhirlClicker").style.display="block";
    
    

 
    poliwhirl.addEventListener("click", () => {
      if (pokecount >= (autoClickPoliwhirl + 1) * 60) {
        pokecount = pokecount - (autoClickPoliwhirl + 1) * 60;
        autoClickPoliwhirl = autoClickPoliwhirl + 5; //calculates how much points per second gives, ex: this one gives +2 each second
        autoClickAmountPoliwhirl += 1;
       
        
      document.getElementById("costAutoClickPoliwhirl").innerHTML = `It costs ${
        (autoClickPoliwhirl + 1) * 60
      } Pokeballs to catch him!`;
      document.getElementById("autoClickAmountPoliwhirl").innerHTML =
        "You Own " + autoClickAmountPoliwhirl + " Auto Clickers";
        
          update()
       
      } else {
        alert("You dont have enough Pokeballs to catch that pokemon");
      };
    });

  } else {
    alert('You dont have enough rare candies')
  };

});


// poliwrath

let autoClickPoliwrath = 0;
let autoClickAmountPoliwrath = 0;
let poliwrath = document.getElementById("buyAutoClickPoliwrath");

document.getElementById('evolveButtonPoliwhirl').addEventListener('click', () => {

  if (rareCandyAmount >= 1) {
    rareCandyAmount--;
    document.getElementById("poliwhirlClicker").style.display="none"; 
    document.getElementById("poliwrathClicker").style.display="block";
    

 
    poliwrath.addEventListener("click", () => {
      if (pokecount >= (autoClickPoliwrath + 1) * 60) {
        pokecount = pokecount - (autoClickPoliwrath + 1) * 60;
        autoClickPoliwrath = autoClickPoliwrath + 5; //calculates how much points per second gives, ex: this one gives +2 each second
        autoClickAmountPoliwrath += 1;
       
        
      document.getElementById("costAutoClickPoliwrath").innerHTML = `It costs ${
        (autoClickPoliwrath + 1) * 60
      } Pokeballs to catch him!`;
      document.getElementById("autoClickAmountPoliwrath").innerHTML =
        "You Own " + autoClickAmountPoliwrath + " Auto Clickers";
        
          update()
       
      } else {
        alert("You dont have enough Pokeballs to catch that pokemon");
      };
    });

  } else {
    alert('You dont have enough rare candies')
  };

});


