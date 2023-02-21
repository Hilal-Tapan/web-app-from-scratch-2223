// Loading state
export const display = document.querySelector('section')
display.textContent = "Loading quotes, even geduld a.u.b :)"

//  Loading state stoppen
            .then(json => {
                display.textContent="";
            })