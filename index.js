// values of inventory
let fishAmount = 0;
let fishIncrement = 1;

let poleAmount = 0;
let poleIncrement = 1;
let poleCost = 30;
let poleSpeed = 10000;

let netAmount = 0;
let netIncrement = 3;
let netCost = 300;
let netSpeed = 10000;

let harpoonAmount = 0;
let harpoonIncrement = 5;
let harpoonCost = 1000;
let harpoonSpeed = 10000;

let boatAmount = 0;
let boatIncrement = 10;
let boatCost = 3000;
let boatSpeed = 10000;

let otterAmount = 0;
let otterIncrement = 20;
let otterCost = 10000;
let otterSpeed = 10000;

let sharkAmount = 0;
let sharkIncrement = 50;
let sharkCost = 20000;
let sharkSpeed = 10000;


// connection to html
const fishButton = document.getElementById('fishButton');
const fishCount = document.getElementById('fish');

const poleButton = document.getElementById('poleButton');
const poleCount = document.getElementById('poleCount');
const poleClickerButton = document.getElementById('poleClicker');

const netButton = document.getElementById('netButton');
const netCount = document.getElementById('netCount');
const netClickerButton = document.getElementById('netClicker');

const harpoonButton = document.getElementById('harpoonButton');
const harpoonCount = document.getElementById('harpoonCount');
const harpoonClickerButton = document.getElementById('harpoonClicker');

const boatButton = document.getElementById('boatButton');
const boatCount = document.getElementById('boatCount');
const boatClickerButton = document.getElementById('boatClicker');

const otterButton = document.getElementById('otterButton');
const otterCount = document.getElementById('otterCount');
const otterClickerButton = document.getElementById('otterClicker');

const sharkButton = document.getElementById('sharkButton');
const sharkCount = document.getElementById('sharkCount');
const sharkClickerButton = document.getElementById('sharkClicker');

// fish button
fishButton.addEventListener('click', function(){
    fishAmount += fishIncrement;
    fish.innerHTML = `Fish: ${fishAmount}`;
    if (fishAmount > 0) {
        fish.classList.remove('hidden');
    }
})

// fishing pole button
poleButton.addEventListener('click', function(){
    if(fishAmount >= poleCost){
        fishAmount -= poleCost;
        fish.innerHTML = `Fish: ${fishAmount}`;
        poleAmount += 1;
        poleCount.innerHTML = `Fishing Poles: ${poleAmount}`;
        setInterval(() => {
            document.getElementById("poleClicker").click();
        }, poleSpeed);
        //error.classList.add('hidden');
    } else {
        //error.classList.remove('hidden');
        //error.textContent = "You Don't Have Enough Money For A Fishing Pole!";
    }
    if (poleAmount > 0) {
        poleCount.classList.remove('hidden');
    }
})

// fishing pole clicker button
poleClickerButton.addEventListener('click', function(){
    fishAmount += poleIncrement;
    fish.innerHTML = `Fish: ${fishAmount}`;
})

// fishing net button
netButton.addEventListener('click', function(){
    if(fishAmount >= netCost){
        fishAmount -= netCost;
        fish.innerHTML = `Fish: ${fishAmount}`;
        netAmount += 1;
        netCount.innerHTML = `Fishing Nets: ${netAmount}`;
        setInterval(() => {
            document.getElementById("netClicker").click();
        }, netSpeed);
        //error.classList.add('hidden');
    } else {
        //error.classList.remove('hidden');
        //error.textContent = "You Don't Have Enough Money For A Fishing Net!";
    }
    if (netAmount > 0) {
        netCount.classList.remove('hidden');
    }
})

// fishing net clicker button
netClickerButton.addEventListener('click', function(){
    fishAmount += netIncrement;
    fish.innerHTML = `Fish: ${fishAmount}`;
})

// harpoon button
harpoonButton.addEventListener('click', function(){
    if(fishAmount >= harpoonCost){
        fishAmount -= harpoonCost;
        fish.innerHTML = `Fish: ${fishAmount}`;
        harpoonAmount += 1;
        harpoonCount.innerHTML = `Harpoon Throwers: ${harpoonAmount}`;
        setInterval(() => {
            document.getElementById("harpoonClicker").click();
        }, harpoonSpeed);
        //error.classList.add('hidden');
    } else {
        //error.classList.remove('hidden');
        //error.textContent = "You Don't Have Enough Money For A Fishing Net!";
    }
    if (harpoonAmount > 0) {
        harpoonCount.classList.remove('hidden');
    }
})

// harpoon clicker button
harpoonClickerButton.addEventListener('click', function(){
    fishAmount += harpoonIncrement;
    fish.innerHTML = `Fish: ${fishAmount}`;
})

// fishing boat button
boatButton.addEventListener('click', function(){
    if(fishAmount >= boatCost){
        fishAmount -= boatCost;
        fish.innerHTML = `Fish: ${fishAmount}`;
        boatAmount += 1;
        boatCount.innerHTML = `Fishing Boats: ${boatAmount}`;
        setInterval(() => {
            document.getElementById("boatClicker").click();
        }, boatSpeed);
        //error.classList.add('hidden');
    } else {
        //error.classList.remove('hidden');
        //error.textContent = "You Don't Have Enough Money For A Fishing Net!";
    }
    if (boatAmount > 0) {
        boatCount.classList.remove('hidden');
    }
})

// fishing boat clicker button
boatClickerButton.addEventListener('click', function(){
    fishAmount += boatIncrement;
    fish.innerHTML = `Fish: ${fishAmount}`;
})

// trained otter button
otterButton.addEventListener('click', function(){
    if(fishAmount >= otterCost){
        fishAmount -= otterCost;
        fish.innerHTML = `Fish: ${fishAmount}`;
        otterAmount += 1;
        otterCount.innerHTML = `Trained Otters: ${otterAmount}`;
        setInterval(() => {
            document.getElementById("otterClicker").click();
        }, otterSpeed);
        //error.classList.add('hidden');
    } else {
        //error.classList.remove('hidden');
        //error.textContent = "You Don't Have Enough Money For A Fishing Net!";
    }
    if (otterAmount > 0) {
        otterCount.classList.remove('hidden');
    }
})

// trained otter clicker button
otterClickerButton.addEventListener('click', function(){
    fishAmount += otterIncrement;
    fish.innerHTML = `Fish: ${fishAmount}`;
})

// trained shark button
sharkButton.addEventListener('click', function(){
    if(fishAmount >= sharkCost){
        fishAmount -= sharkCost;
        fish.innerHTML = `Fish: ${fishAmount}`;
        sharkAmount += 1;
        sharkCount.innerHTML = `Trained Sharks: ${sharkAmount}`;
        setInterval(() => {
            document.getElementById("sharkClicker").click();
        }, sharkSpeed);
        //error.classList.add('hidden');
    } else {
        //error.classList.remove('hidden');
        //error.textContent = "You Don't Have Enough Money For A Fishing Net!";
    }
    if (sharkAmount > 0) {
        sharkCount.classList.remove('hidden');
    }
})

// trained shark clicker button
sharkClickerButton.addEventListener('click', function(){
    fishAmount += sharkIncrement;
    fish.innerHTML = `Fish: ${fishAmount}`;
})