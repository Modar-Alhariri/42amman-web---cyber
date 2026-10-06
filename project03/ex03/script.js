let result = document.getElementById("result");

let increment = document.getElementById("increment");

let decrement = document.getElementById("decrement");

let resetButton = document.getElementById("reset");


increment.addEventListener("click", () => {
    plus(result);
});
decrement.addEventListener("click", () => {
    mines(result);
});
resetButton.addEventListener("click", () => {
    reset(result);
});



function plus(result) {
    result.textContent = Number(result.textContent) + 1;
    check(result);
}


function mines(result) {
    result.textContent = Number(result.textContent) - 1;
        check(result);

}


function reset(result) {
   result.textContent=Number(result.textContent-result.textContent);
   check(result);
}


function check(result) {
 if (result.textContent>0) {
    result.style.color="green";
 }
 else if(result.textContent<0){
    result.style.color="red";
 }
 else{
     result.style.color="gray";
 }
}