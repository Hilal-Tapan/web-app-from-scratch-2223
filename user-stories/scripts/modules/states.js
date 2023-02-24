// // Loading state
// export const display = document.querySelector('section')
// display.textContent = "Loading quotes, even geduld a.u.b :)"

// //  Loading state stoppen
//             .then(json => {
//                 display.textContent="";
//             })

const element = (element) => {
    return document.querySelector(element)
}
const deButton = element ('button')

export function startLoading() {
   deButton.setAttribute("disabled", true)
   deButton.innerHTML = 'loading'
}

export function stopLoading() {
    // const loader = document.querySelector('#loader')
        // loader.classList.add('display')
        
            // loader.classList.remove('display')
            deButton.removeAttribute("disabled")
            deButton.innerHTML = 'shuffle' 
}

export const handleFetchError = (element, error) => {
    element.innerHTML = "failed to load quotes";

    throw new Error(`Failed to fetch data: ${error}`);
    // Do something to handle the error, e.g. display an error message to the user
  };

//     loader.classList.add(state)
//     } else {
//         loader.classList.remove(state)
//     }
// }