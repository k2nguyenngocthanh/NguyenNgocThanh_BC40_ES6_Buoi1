// const colorList =["palette", "viridian", "pewter", "cerulean", "vermillion", "lavender","celadon", "saffron", "fuschia", "cinnabar"];

const colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];

let colorContainer = document.getElementById("colorContainer");
let arr = [];

const handleChangeColor = (event, color) => {
  let house = document.getElementById("house");

  house.className = "";
  house.className = "house";

  const colorClassList = house.classList;
  colorClassList.add(color);

  const activeElenments= document.querySelector(".active");
  if(activeElenments!=null){
    activeElenments.classList.remove("active");

  }
  event.target.classList.add("active");
};

for (let i = 0; i < colorList.length; i++) {
  let button = document.createElement("button");
  button.className = colorList[i];
  const list = button.classList;
  list.add("color-button");
  button.addEventListener(
    "click",

    (event) => handleChangeColor(event,colorList[i]),
    false
  );

  arr.push(button);
}
console.log(arr);
colorContainer.append(...arr);
