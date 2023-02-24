
export function router() {
    // defineer de section waarin je de content wilt weergeven.

    window.addEventListener('hashchange', function(){
        const hash = window.location.hash;

        var homeSection = document.querySelector('#home')
        var aboutSection = document.querySelector('#about')
        console.log('hash has changed', hash) 

        //remove active class
        const active = document.querySelector('.active')
        if(active) {
            active.classList.remove('active');
        }

        switch (hash) {
            case "#quotes":
                // homeSection.innerHTML=''
                //add class
                homeSection.classList.add('active')
                console.log(active)
             break;

             case "#home":
                // homeSection.innerHTML=''
                //add class
                
                homeSection.classList.add('active')
                console.log(active)
             break;
         
            case "#about":
                // aboutSection.innerHTML='' 
                 //add class
                aboutSection.classList.add('active')
                console.log(active)
             break;
 
            default:
             section.innerHTML = '<h1>404 - Page Not Found</h1>';
            break;
        }
    }, false);
}

            //  section.insertAdjacentHTML('afterbegin' , '<h1>hi</h1>')
             // insertAdjacentHTML heeft 4 properties die je als eerst kan aangeven.
             // deze 4 zijn: beforebegin, afterbegin, beforeend, afterend
             // deze properties geven aan waar de content die daarnaast staat
             // in je html gaat staan.
             // Jeff :D
             // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML