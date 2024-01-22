//inicial counter
let pokecount = 0;
let pokeClick = document.getElementById("pokeClick");
let clickSound = document.getElementById("clickSound");
pokeClick.addEventListener("click", () => {
  pokecount++;
  clickSound.currentTime = 0;
  clickSound.play();
  update();
});

function update() {
  // counter of pokeballs
  document.getElementById("count").value = pokecount;
  document.title = pokecount + " Pokeballs";
  document.getElementById("count").innerHTML = `You have ${pokecount} Pokeballs`;

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

  perSecond = autoClickM + autoClickP + autoClickS + autoClickPoli + autoClickPoliwhirl;
  document.getElementById("perSecond").innerHTML = `Generating ${perSecond} pokeballs per second`;

  // rare candy
  document.getElementById("rareCandyAmount").innerHTML = `You have ${rareCandyAmount} Rare Candies`;
}

//save & load the game

function save() {
  sessionStorage.setItem("pokecount", pokecount);
  sessionStorage.setItem("perSecond", perSecond);
  sessionStorage.setItem("autoClickP", autoClickP);
  sessionStorage.setItem("autoClickM", autoClickM);
  sessionStorage.setItem("autoClickS", autoClickS);
  sessionStorage.setItem("autoClickPoli", autoClickPoli);
  sessionStorage.setItem("autoClickPoliwhirl", autoClickPoliwhirl);
  sessionStorage.setItem("costAutoClickP", costAutoClickP);
  sessionStorage.setItem("autoClickAmountM", autoClickAmountM);
  sessionStorage.setItem("autoClickAmountP", autoClickAmountP);
  sessionStorage.setItem("autoClickAmountS", autoClickAmountS);
  sessionStorage.setItem("autoClickAmountPoli", autoClickAmountPoli);
  sessionStorage.setItem("autoClickAmountPoliwhirl", autoClickAmountPoliwhirl);
  sessionStorage.setItem("poliwhirlClicker", poliwhirlClicker);
  sessionStorage.setItem("blackBelt", blackBelt);

  update();
}

function load() {
  pokecount = sessionStorage.getItem("pokecount");
  pokecount = parseInt(pokecount);

  if (!pokecount) {
    pokecount = 0;
  }

  perSecond = sessionStorage.getItem("perSecond");
  perSecond = parseInt(perSecond);

  if (!perSecond) {
    perSecond = 0;
  }

  autoClickM = sessionStorage.getItem("autoClickM");
  autoClickM = parseInt(autoClickM);

  if (!autoClickM) {
    autoClickM = 0;
  }

  autoClickP = sessionStorage.getItem("autoClickP");
  autoClickP = parseInt(autoClickP);

  if (!autoClickP) {
    autoClickP = 0;
  }

  autoClickS = sessionStorage.getItem("autoClickS");
  autoClickS = parseInt(autoClickS);

  if (!autoClickS) {
    autoClickS = 0;
  }

  autoClickPoli = sessionStorage.getItem("autoClickPoli");
  autoClickPoli = parseInt(autoClickPoli);

  if (!autoClickPoli) {
    autoClickPoli = 0;
  }

  autoClickPoliwhirl = sessionStorage.getItem("autoClickPoliwhirl");
  autoClickPoliwhirl = parseInt(autoClickPoliwhirl);

  if (!autoClickPoliwhirl) {
    autoClickPoliwhirl = 0;
  }

  costAutoClickP = sessionStorage.getItem("costAutoClickP");
  costAutoClickP = parseInt(costAutoClickP);

  if (!costAutoClickP) {
    costAutoClickP = 0;
  }

  autoClickAmountM = sessionStorage.getItem("autoClickAmountM");
  autoClickAmountM = parseInt(autoClickAmountM);

  if (!autoClickAmountM) {
    autoClickAmountM = 0;
  }

  autoClickAmountP = sessionStorage.getItem("autoClickAmountP");
  autoClickAmountP = parseInt(autoClickAmountP);

  if (!autoClickAmountP) {
    autoClickAmountP = 0;
  }

  autoClickAmountS = sessionStorage.getItem("autoClickAmountS");
  autoClickAmountS = parseInt(autoClickAmountS);

  if (!autoClickAmountS) {
    autoClickAmountS = 0;
  }

  autoClickAmountPoli = sessionStorage.getItem("autoClickAmountPoli");
  autoClickAmountPoli = parseInt(autoClickAmountPoli);

  if (!autoClickAmountPoli) {
    autoClickAmountPoli = 0;
  }

  autoClickAmountPoliwhirl = sessionStorage.getItem("autoClickAmountPoliwhirl");
  autoClickAmountPoliwhirl = parseInt(autoClickAmountPoliwhirl);

  if (!autoClickAmountPoliwhirl) {
    autoClickAmountPoliwhirl = 0;
  }

  poliwhirlClicker = sessionStorage.getItem("poliwhirlClicker");

  if (!poliwhirlClicker) {
    poliwhirlClicker = 0;
  }

  blackBelt = sessionStorage.getItem("blackBelt");

  if (!blackBelt) {
    blackBelt = 0;
  }

  update();
}

// dark mode
let darkMode = sessionStorage.getItem("darkMode");

const darkModeToggle = document.querySelector("#dark-mode");

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add("darkMode");
  // 2. Update darkMode in sessionStorage
  sessionStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove("darkMode");
  // 2. Update darkMode in sessionStorage
  sessionStorage.setItem("darkMode", null);
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
  darkMode = sessionStorage.getItem("darkMode");

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

//timer of pokeballs count and autoclickers
function timer() {
  pokecount = pokecount + autoClickM;
  pokecount = pokecount + autoClickP;
  pokecount = pokecount + autoClickS;
  pokecount = pokecount + autoClickPoli;
  pokecount = pokecount + autoClickPoliwhirl;
  update();
}
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
  7757, 4807, 8711, 8734, 6660, 9270, 5391, 2130, 100000, 123994512, 123213, 935412, 3214, 12421,
  45421, 45421,
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

document.getElementById("evolveButtonPoli").addEventListener("click", () => {
  if (rareCandyAmount >= 1) {
    rareCandyAmount--;
    document.getElementById("poliwagClicker").classList.add("hidden");
    document.getElementById("poliwhirlClicker").classList.remove("hidden");

    poliwhirl.addEventListener("click", () => {
      if (pokecount >= (autoClickPoliwhirl + 1) * 60) {
        pokecount = pokecount - (autoClickPoliwhirl + 1) * 60;
        autoClickPoliwhirl = autoClickPoliwhirl + 5; //calculates how much points per second gives
        autoClickAmountPoliwhirl += 1;

        document.getElementById("costAutoClickPoliwhirl").innerHTML = `It costs ${
          (autoClickPoliwhirl + 1) * 60
        } Pokeballs to catch him!`;
        document.getElementById("autoClickAmountPoliwhirl").innerHTML =
          "You Own " + autoClickAmountPoliwhirl + " Auto Clickers";

        update();
      } else {
        alert("You dont have enough Pokeballs to catch that pokemon");
      }
    });
  } else {
    alert("You dont have enough rare candies");
  }
});

// poliwrath

// let autoClickPoliwrath = 0;
// let autoClickAmountPoliwrath = 0;
// let poliwrath = document.getElementById("buyAutoClickPoliwrath");

// document.getElementById('evolveButtonPoliwhirl').addEventListener('click', () => {

//   if (rareCandyAmount >= 1) {
//     rareCandyAmount--;
//     document.getElementById("poliwhirlClicker").style.display="none";
//     document.getElementById("poliwrathClicker").style.display="block";

//     poliwrath.addEventListener("click", () => {
//       if (pokecount >= (autoClickPoliwrath + 1) * 60) {
//         pokecount = pokecount - (autoClickPoliwrath + 1) * 60;
//         autoClickPoliwrath = autoClickPoliwrath + 5; //calculates how much points per second gives, ex: this one gives +2 each second
//         autoClickAmountPoliwrath += 1;

//       document.getElementById("costAutoClickPoliwrath").innerHTML = `It costs ${
//         (autoClickPoliwrath + 1) * 60
//       } Pokeballs to catch him!`;
//       document.getElementById("autoClickAmountPoliwrath").innerHTML =
//         "You Own " + autoClickAmountPoliwrath + " Auto Clickers";

//           update()

//       } else {
//         alert("You dont have enough Pokeballs to catch that pokemon");
//       };
//     });

//   } else {
//     alert('You dont have enough rare candies')
//   };

// });
