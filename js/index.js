// --> Coding.js da funksiya ishlamadi lekin brouzerda ishlayabdi
function front3(text) {
var firstLetter = text.slice(0, 3)
var secondLetter = text.slice(0, 2)
if(text.length > 2){
  for (let i = 1; i <= 2; i++) {
    firstLetter += text.slice(0, 3)
  }
  console.log(firstLetter)
}else if(text.length === 2){
  for (let index = 1; index <= 2; index++) {
   secondLetter += text.slice(0, 2)
    
  }
  console.log(secondLetter)
}else{
  console.log(text)
}
}
front3(prompt("So'z kiriting"))