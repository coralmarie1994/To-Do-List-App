
//1. create a new item in the list:
function newItem() { //function for new list items
let li=$('<li></li>'); //creates the element (document.createElement)
let inputValue=$('#input').val(); //gets the value of the input field
li.append(inputValue); //adds the value to the li element
if (inputValue === '') { //if input empty alert
  alert("You must write a to-do task!");
} else {
  $('#list').append(li); //else add list item to the HTML ID List.
}
 //2. Crossing out an item from the list of items:

  function crossOut() { //create function to cross list item off on double click
    li.toggleClass("strike"); //adds a toggled class item of strike on for CSS edits
  } 
  li.on("dblclick", function crossOut() { //creates listener on list item for dbl click to run function
    li.toggleClass("strike"); //adds the event listning
  });
   
  //3(i). Adding the delete button "X": 
 let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on("click", deleteListItem);
  function deleteListItem() {
      li.addClass("delete");
  }
 // 4. Reordering the items: 
   $('#list').sortable();

}

 







// If you get stuck, you can look below for the jQuery code. However, try yourself to convert the vanilla JS code provided to jQuery first.








  /*
// jQuery Code
//1. Adding a new item to the list:

  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
  }
//2. Crossing an item out:
  function crossOut() {
		li.toggleClass("strike");
	}

	li.on("dblclick", function crossOut() {
		li.toggleClass("strike");
	});
//3. Adding a delete button
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

//   crossOutButton.on("click", deleteListItem);
//   function deleteListItem(){
// 		li.addClass("delete")
// 	}
   $('#list').sortable();
*/










