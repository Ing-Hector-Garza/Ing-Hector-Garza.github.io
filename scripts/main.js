/* A "Hello world!" example 
   The heading text changed to Hello world! using JavaScript.
*/
// const myheading = document.querySelector("h1"); 
// myheading.textContent="Hello World!";
/* You did this by using a function called querySelector() to grab a reference to your heading (line 4),
   and then store it in a variable called myHeading (Line 5).
   Following that, the code set the value of the myHeading variable's textContent property
   (which represents the content of the heading) to Hello world!.
*/

// START ADDING AN IMAGE CHANGER (Page 053)
const myImage = document.querySelector("img");

myImage.onclick = () => {
   const mySrc = myImage.getAttribute("src");
   if (mySrc === "images/logo-garza-business-consultant-blue.png") {
      myImage.setAttribute("src", "images/logo-garza-business-consultant-green.png");
   } else {
      myImage.setAttribute("src", "images/logo-garza-business-consultant-blue.png");
   }
}
// ENDS ADDING AN IMAGE CHANGER (Page 054)

// START ADDING A PERSONALIZED WELCOME MESSAGE (Page 055) See index.html line 57
// 2. This takes references to the new button and the heading, storing each inside variables
let myButton = document.querySelector("Button");
let myHeading = document.querySelector("h1");

// 3. Add the following function to set the personalized greeting
/*function setUserName() {
   const myName = prompt("Please enter your name.");
   localStorage.setItem("name", myName);
   myHeading.textContent = 'Consulting is cool, ' + myName;
}
*/

// A USER NAME OF NULL? (Page 057)
// Update your setUserName() function to this:
function setUserName() {
   const myName = prompt("Please enter your name.");
   if (!myName) {
      setUserName();
   } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = 'Consulting is cool, ' + myName;
   }
}

// 4. Add the following condition block. We could call this initialization code, as it structures the app when it first loads.
if (!localStorage.getItem("name")) {
   setUserName();
} else {
   const storedName = localStorage.getItem("name");
   myHeading.textContent = 'Consulting is cool, ' + storedName;
}
// 5. This onclick event handler allows the user to enter a different name by pressing the button.
myButton.onclick = () => {
   setUserName();
}
// ENDS ADDING A PERSONALIZED WELCOME MESSAGE (Page 057)