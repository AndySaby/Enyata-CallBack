// console.log("hello")
// var yodasay = require('yodasay');
 
// console.log(yodasay.say({
//   text : 'Sabina has been able to download this package'
// }));

let grow = document.getElementById("grow")
let shrink = document.getElementById("shrink")
let round = document.getElementById("round")
let box = document.getElementById("box")
let delay = document.getElementById("delay")
let size = document.getElementById("size")

function increase(){
    let seconds = Number(delay.value) * 1000;
    setTimeout( () =>{
     box.style.height = (size.value).concat('px')
     box.style.width = (size.value).concat('px');
     box.style.backgroundColor = "aqua"
    }, seconds)
}

// function reset(){
//     let resetTime = Number(seconds) +1000;
//     setTimeout( () => {
//         box.style.height = "50px";
//         box.style.weight = "50px";
//         box.style.backgroundColor = "red"
//      }, resetTime)
//      console.log("hey");
// }

grow.addEventListener("click", (event) =>{
    event.preventDefault()
    increase()
    // reset();
    
})


shrink.addEventListener("click", (event) => {
    event.preventDefault();
    let seconds = Number(delay.value) * 1000;
    setTimeout( () =>{
     box.style.height = (size.value).concat('px')
     box.style.weight = (size.value).concat('px')
     box.style.backgroundColor = "aqua"
    }, seconds)

    // reset()
})


round.addEventListener("click", (event) =>{
    event.preventDefault();
    let seconds = Number(delay.value) * 1000;
    setTimeout( () =>{
    box.style.backgroundColor = "aqua"
     box.style.borderRadius = "30px"
    }, seconds)

    // reset()
})




