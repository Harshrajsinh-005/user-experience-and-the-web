window.addEventListener("load", () => {
    const dialog =  document.getElementById("cookies")
    const acceptButton = document.getElementById("acceptCookies")
    const rejectButton = document.getElementById("rejectCookies")
    let cookiesSet = dialog.className

    if ((cookiesSet == "false")) {
        dialog.showModal()
    }

    acceptButton.addEventListener("click", () => {
        dialog.close()
        dialog.className = "true"
    })

    rejectButton.addEventListener("click", () => {
        dialog.close()
        dialog.className = "true"
    })
})