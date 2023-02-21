import { fetchData } from  './modules/api.js'
import { router } from './modules/router.js'

// import { display } from  './api.js'

fetchData()

window.onload = router(); /* als de pagina laadt, voer dan de router functie uit */

window.addEventListener('hashchange', function () {
    router()
}, false);

