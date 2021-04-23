let buttons = document.querySelectorAll(".buttons button")
let results = document.querySelector(".results >span")
let input = document.getElementById("input")

let input1 = document.getElementById("input1")


buttons.forEach((element) => {

    element.addEventListener(("click"), (e) => {
        checkInput()
        if (e.target.classList.contains("check-item")) {
            checkItem()
        } else if (e.target.classList.contains("add-item")) {
            addItem()
        } else if (e.target.classList.contains("delete-item")) {
            deleteItem()
        } else if (e.target.classList.contains("show-item")) {
            showItem()
        }
    })
})

function checkInput() {
    results.innerHTML = "There is no results to show"
}

function checkItem() {
    if (input.value && input1.value) {
        if (localStorage.getItem(input.value)) {
            results.innerHTML = `Found Item In The Local Storage called<span> "${input.value}"</span>`
        } else { results.innerHTML = `There Is No Item In The Local Storage called -<span> ${input.value}</span>` }
    } else { checkInput() }

}
function addItem() {
    if (input.value && input1.value) {
        localStorage.setItem(input.value, input1.value)
        results.innerHTML = `Local Sorage Item called <span>${input.value}</span> added`
        input.value = ""
    } else { checkInput() }
}
function deleteItem() {
    if (input.value && input1.value) {
        if (localStorage.getItem(input.value)) {
            localStorage.removeItem(input.value, input1.value)
            results.innerHTML = `Local Sorage Item called <span>${input.value}</span> deleted`

        } else { results.innerHTML = `There Is No Item called -<span> ${input.value}</span> to delete` }
    } else { checkInput() }
}
function showItem() {
    results.innerHTML = ""
    if (localStorage.length) {
        for (let [key, value] of Object.entries(localStorage))
            results.innerHTML += `<div class=show >Item key -<span> ${key} </span> Item Value - <span> ${value} </span></div>`
    } else {
        results.innerHTML = "Local storage is empty"
    }

}
