let oldestBtn
let newestBtn

function getQueryValue(name) {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get(name)
}

function setQueryValue(name, value) {
    const urlParams = new URLSearchParams(window.location.search)
    urlParams.set(name, value)
    window.history.pushState({}, '', `${window.location.pathname}?${urlParams.toString()}`);
}

window.onload = () => {
    oldestBtn = document.getElementById("oldest")
    newestBtn = document.getElementById("newest")

    const urlParams = new URLSearchParams(window.location.search)
    const sortValue = getQueryValue("sort") || ''
    urlParams.set("sort", sortValue)

    oldestBtn.addEventListener("click", () => { setQueryValue("sort", "oldest") })
    newestBtn.addEventListener("click", () => { setQueryValue("sort", "newest") })
}