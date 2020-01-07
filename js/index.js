function add() {
    let dialog = document.getElementById("dialog")
    dialog.classList.remove("hide")
}

function closeDialog() {
    console.log(1)
    let dialog = document.getElementById("dialog")
    dialog.classList.add("hide")
}