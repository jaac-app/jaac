import HomePage from "./pages/homePage.js";

const homePage = new HomePage();

window.addEventListener('load', ()=> {
    
    const body = document.getElementById('body');

    body.innerHTML = homePage.html;

    const domBtnOthers = document.getElementById(`btnOthers`);
    const domOthers = document.getElementById(`others`);
    // test comment
    domBtnOthers.addEventListener('click', event => {
        domOthers.classList.toggle('open');
    })
})