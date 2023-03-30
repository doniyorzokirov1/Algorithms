var text = prompt("So'zni kiriting")
function frontBack(text) {
  var firstLetter = text.charAt(0)
  var secondLetter = text.at(-1)
 if(text.length >1){
    return secondLetter + text.slice(1,-1) + firstLetter
 }else{
    return text
 }
}
console.log(frontBack(text))