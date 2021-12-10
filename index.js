
//Start of Passenger Counter Web App

let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.innerHTML = count;
    console.log("The Increment button was clicked!")
    console.log(count)
}

function decrement() {
    count = count - 1
    countEl.innerHTML = count;
    console.log("The Decrement button was clicked!")
    console.log(count)
}

function reset() {
    count = 0
    countEl.innerHTML = count;
    console.log("The RESET button was clicked!")
    console.log(count)
}







//End of Passenger Counter Web App

