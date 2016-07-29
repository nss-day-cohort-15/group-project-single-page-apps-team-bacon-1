
var clearAll = document.getElementById("clear_message");
var baconMsg = document.getElementById("text_input");

var baconMsgBoard = document.querySelector(".dump");

var baconMsgString = "";

baconMsg.addEventListener("keyup", function(event) {
if (event.keyCode === 13){
  console.log("whats up")
  clearAll.removeAttribute("disabled");

  var message = baconMsg.value;
  console.log("muhDood")
  //stringMessage (message);//
  console.log(message);

    var newElement = document.createElement('LI');

      newElement.innerHTML += message + "<button class='delete'> Delete</button>";

      newElement.setAttribute("id", "entry");

      baconMsgBoard.appendChild(newElement);
      //call this function to clear the input in the enter message box

      baconMsg.value = "";
    }
});

//check to see if the delete button in the messages box has been clicked.  if true, delete the string from the msgBox.innerHTML

document.querySelector("body").addEventListener("click", function(event) {
    if (event.target.className === "delete") {
        console.log("you clicked on a delete button");
      // Delete div element including message and button
      console.log("parentNode ", event.target.parentNode)
       event.target.parentNode.remove();
    }
});

// Clear all messages on the board

clearAll.addEventListener("click", function() {
    console.log("clearing input");
    baconMsgBoard.innerHTML = "";
    document.getElementById("clear_message").checked = false;
    clear_message.setAttribute("disabled", true);
});

    var allThings = document.getElementById("message_container");
;

// var messBoxBorder = document.getElementById("messageBox");  //doesn't work

   document.getElementById("dark_theme").addEventListener("click", function() {
       allThings.classList.toggle("dark_theme");
       //messBoxBorder.classList.toggle("lightBorder");  //this part doesn't work
       });

   document.getElementById("large_text").addEventListener("click", function() {
       allThings.classList.toggle("large_text");
       });



