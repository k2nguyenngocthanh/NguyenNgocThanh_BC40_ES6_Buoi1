var char = document.querySelector(".heading").innerText;
var chars = [...char];
console.log("🚀 ~ file: main.js:3 ~ charStr", chars);
var contentHTML = "";

chars.forEach((char) => {
  var content = `<span>${char}</span> `;
  contentHTML += content;
});

document.getElementById("font").innerHTML = contentHTML;
