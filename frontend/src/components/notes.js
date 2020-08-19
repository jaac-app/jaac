//Simplify my function:

// function myNotes({
//   var popup = document.getElementById("myPopup");
//   popup.classList.toggle("show");
// })


Mynotes(){


  return `<div class="user" id="user">
        <div class="user-inner">
          <div class="notes">
            <div class="holder">
              <div class="with-line">
                <label type="text"><b>Untitled</b></label>
                <input type="text" placeholder="Write your notes">
              </div>
              <div class="grid-container">
                <button class="button1 red grid-item">cancel</button>
                <button class="button1 green grid-item">save</button>
              </div>
            </div>
  
          </div>
  
        </div>
      </div>
  
  `
  };

  export default Mynotes;
  