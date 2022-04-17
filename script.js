const span = document.querySelector("#value");
const decreaseBtn = document.querySelector(".decrease");
const resetBtn = document.querySelector(".reset")
const increaseBtn = document.querySelector(".increase");

let count = 0;


decreaseBtn.addEventListener("click",function() {
    count--
    span.innerText = count;
})
resetBtn.addEventListener("click",function() {
    count = 0
    span.innerText = count;
})
increaseBtn.addEventListener("click",function() {
    count++
    span.innerText = count;
})

