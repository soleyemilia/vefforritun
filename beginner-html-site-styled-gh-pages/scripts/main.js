const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";




const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/volcano5.jpg");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};