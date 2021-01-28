const age = 25;
const isFemale = true;
const driverStatus = "bob";
const name = "Bram";
const totalAmount = 26;

if (age >= 18) {
  console.log("Welkom, kom binnen");
} else {
  console.log("Helaas, je bent te jong. Blijf buiten.");
}

if (isFemale) {
  console.log("Veel plezier bij onze ladies night!");
} else {
  console.log("Helaas, deze avond is alleen voor vrouwen. Zien we je een andere avond?");
}

if (driverStatus == "bob") {
  console.log("Jij bent de bob. Breng iedereen veilig thuis en rij voorzichtig");
} else {
  console.log("Je mag niet rijden. Zoek de bob en hij of zij brengt je naar huis.");
}

// Deel 1: 50% korting
if (age >= 18 && age <= 25) {
  console.log("Je krijgt 50% korting!");
} else {
  console.log("Er is geen korting van toepassing");
}

// Deel 2: Ludieke actie! 
if (name === "Sarah" || name === "Bram") {
  console.log("Wij zijn jarig en jij krijgt 1 gratis biertje!");
} else {
  console.log("Geen gratis bier, maar je bent wel bij een knalfuif!");
}

// Deel 3: Jubileum korting 
if (totalAmount > 25 && totalAmount <= 50) {
  console.log("Je krijgt een gratis portie (vega)bitterballen!");
} else if (totalAmount > 50 && totalAmount < 100) {
  console.log("Je krijgt een gratis portie nachos!");
} else if (totalAmount >= 100) {
  console.log("Je krijgt een gratis flesje champagne!");
} else {
  console.log("Bestel voor meer dan 25, 50 of 100 euro en je krijgt gratis een portie (vega)bitterballen, een portie nachos of een gratis fles champagne!");
}
