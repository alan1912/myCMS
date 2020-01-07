function add() {
    let dialog = document.getElementById("dialog")
    dialog.classList.remove("hide")
}

function closeDialog() {
    let dialog = document.getElementById("dialog")
    dialog.classList.add("hide")
}

function showSearch() {
    let search = document.getElementById("search")
    let isShow = search.classList.contains('show')
    if (isShow) {
        search.classList.remove("show")
    } else {
        search.classList.add("show")
    }
}

function showUserMenu() {
    let profile = document.getElementById("profile")
    let isShow = profile.classList.contains('show')
    if (isShow) {
        profile.classList.remove("show")
    } else {
        profile.classList.add("show")
    }
}