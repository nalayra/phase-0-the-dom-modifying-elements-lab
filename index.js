// Write your code here!
//const element = document.createElement("div");
const element = document.getElementById("main")
element.remove();
const newHeader = document.createElement('h1');
newHeader.id = "victory";

newHeader.textContent = "Nick is the champion"
document.body.append(newHeader);