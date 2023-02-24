// API
import { loading } from './states.js'

// Functions
const element = (element) => {
    return document.querySelector(element)
}

// const elements = (elements) => {
//     return document.querySelector(elements)
// }

const changeTitel = (data) => {
    console.log(data)
    const text = data
    deAuteur.innerHTML = text
}

const changeQuote = (data) => {
    console.log(data)
    const quote = data
    deQuote.innerHTML = quote
}

// Variabelen
const deAuteur= element('h1')
const deQuote = element ('p')
const deButton = element ('button')

//Button om te klikken voor random data
deButton.addEventListener("click", () => {
    console.log("klik")
   fetchData()
   deButton.toggleAttribute("disabled")
   deButton.innerHTML = 'loading'
   console.log(deButton)


})

//Loading state
// const display = document.querySelector('#loading')
// display.textContent = "Loading quotes, even geduld a.u.b :)"


// Fetchen van de API
export const fetchData = () => {
    const url = 'https://opensheet.elk.sh/12nr4W-RHpvhnw76MCZZtujYHqP1qIU28ExM4oXQfzys/blad1' 
// Hieronder zijn de functies (fetch.then.then) zijn aan elkaar 
// gechaint = dit heet een method -> functie die in een object leeft
    const data = fetch(url)
            .then(response => response.json())
            .then(data => {
                loading()
                console.log(data)

                // random quotes genereren
                var index = Math.floor(Math.random()*data.length)
                console.log(index)


                // ook progressive enhancement
                setTimeout(() => {
                    // loader.classList.remove('display')
                    loading()
                    // data veranderen
                    changeTitel(data[index].author);
                    changeQuote(data[index].quote);
        
                }, 1000)
            
                // data veranderen
                // changeTitel(data[index].author);
                // changeQuote(data[index].quote);

            })
}
            //Loading state stoppen
            // .then(json => {
            //     display.textContent="";
            // })

            // }

        //      // function loading(state) {
        // const loader = document.querySelector('svg.loader')
        // if (state == 'on') {
        //    loader.classList.add(state)
        // } else {
        //     loader.classList.remove(state)
        // }
        
    


        //empty error en loading state moeten erin









        

// Random manieren van fetchen waar ik mee heb geexperimenteerd

// // Nummer 1
// //fetchen
// function fetchData (){
//     const url = 'https://quote.api.fdnd.nl/v1/quote'

// // console.log(1)
// fetchData()

// const data = fetch(url)
// //functies
//   .then(response => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log("Succes!", data);
//     return data
//   })
//   .catch(error => {
//     console.error("Something went wrong", error);
//   })
//   .then(data => {
//     // data veranderen
//     changeH1(data.data[0].text)
//   });

//   const mainHeading = element('h1')

//   function changeH1 (data) {
//     console.log(data)
//     const name = data
//     mainHeading.innerHTML = name
//   }
// }

// function element (element) {
//     return document.querySelector(element)
// }

// // const div = element('div');

// function elements (elements) {
//     return document.querySelector(elements)
// }


// Nummer 2
// Fetchen van de API
// function fetchData (){
//         const url = 'https://quote.api.fdnd.nl/v1/quote'
    
//     // console.log(1)
//     fetchData()
    
//     const data = fetch(url)

//             .then(response =>
//                 // The API call was successful!
//                 console.log ('success!', response)
//             .catch(err =>
//                 // There was an error
//                 console.warn('Something went wrong.', err)
//             )
//             .then(response => response.json())
//             .then(data => {
//                 // data veranderen
//                 changeH1(data);
//             })
        
//         )}

//         function element (element) {
//             return document.querySelector(element)
//         }
//         // const div = element('div');
//         function elements (elements) {
//             return document.querySelector(elements)
//         }

//         const mainHeading = element('h1')

//         function changeH1 (data) {
//           console.log(data)
//           const name = data
//           mainHeading.innerHTML = name
//         }



// // fetch('https://quote.api.fdnd.nl/v1/quote').then(function (response) {
// // 	// The API call was successful!
// // 	console.log('success!', response);
// // }).catch(function (err) {
// // 	// There was an error
// // 	console.warn('Something went wrong.', err);
// // });