let target = document.querySelector("#dynamic");
let stringArr =["Learn to HTML", "Learn to CSS", "Learn to JS", "Learn to python"];
let selectString = stringArr[Math.floor[Math.random() * stringArr.length]];
console.log(selectString);

let selectStringArr = selectString.split("");

function blink(){
    //커서가 깜빡이게 처리
    target.classList.toggle("active");
}

setInterval(blink, 500); //blink를 5초 간격으로