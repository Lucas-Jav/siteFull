import { windowRegistration } from "./components/windowRegister.js"


const btnNewAccont = document.getElementById('btnNewAccont')

btnNewAccont.addEventListener('click', function() {
    windowRegistration()
})