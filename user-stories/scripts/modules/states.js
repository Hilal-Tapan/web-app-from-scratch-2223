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

export function loading() {
    // const loader = document.querySelector('#loader')
        // loader.classList.add('display')
        setTimeout(() => {
            // loader.classList.remove('display')
            deButton.removeAttribute("disabled")
            deButton.innerHTML = 'shuffle'

        }, 1000)
    
}


    // loader.classList.add(state)
    // } else {
    //     loader.classList.remove(state)
    // }
// }