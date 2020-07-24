import HomePage from "./pages/homePage.js";

let homePage = new HomePage(0);

window.addEventListener('load', ()=> {
    
    const body = document.getElementById('body');

    body.innerHTML = homePage.html;

    const domBtnOthers = document.getElementById(`btnOthers`);
    const domOthers = document.getElementById(`others`);
  //toggle nav bar
    domBtnOthers.addEventListener('click', event => {
        domOthers.classList.toggle('open');
    })

    const channelBtns = document.querySelectorAll('.channelBtn');
    channelBtns.forEach(button => {
      // add event listener
      button.addEventListener('click', () => {
        const splittedArray = button.id.split('_');
        const channelID = parseInt(splittedArray[splittedArray.length-1]);
        console.log(`ID: ${channelID}`);

        homePage = new HomePage(channelID);
        body.innerHTML = homePage.html;

      })
    });
    

}) 