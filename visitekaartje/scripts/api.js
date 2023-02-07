// // // API

// Variabelen
const mainHeading = element('h1')


// Logica console logs
console.log(1)
fetchData()


// Fetchen van de API
function fetchData (){
const url = 'https://cors-anywhere.herokuapp.com/https://whois.fdnd.nl/api/v1/member?id=cldex4vm547z80bw5iug0sdi3' 

// Hieronder zijn de functies (fetch.then.then) zijn aan elkaar 
// gechaint = dit heet een method -> functie die in een object leeft
const data = fetch(url)
            .then(response => response.json())
            .then(data => {
                // iets doen met de data
                // data h1 veranderen naar je naam
                changeH1(data)
            })
}

function changeH1 (data) {
    console.log(data)
    const name = data.member.name.surname 
    mainHeading.innerHTML = name
}


// Functions
function element (element) {
    return document.querySelector(element)
}

function elements (elements) {
    return document.querySelector(elements)
}



// AANTEKENINGEN
// Scope = waar een binding leeft 
// Function scope = staat altijd binnen een functie
// block scope = 
// { 
//    const clown = 'pipo'
// }

// hoisting = functions en variabelen declarations worden 
// naar de top van de scope gehoist(ophijsen)

// promises = belofte voor resultaat in de toekomst, dit is een
// asynchrome actie -> dit wil zeggen dat in de toekomst heb je een 
// resultaat. Als dit goed gaat word de promise uitgevoerd (?)

// function doet altijd 1 ding



