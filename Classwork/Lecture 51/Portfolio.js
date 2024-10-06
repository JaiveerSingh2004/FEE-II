const prPic = document.querySelector("#pic")
const prName = document.querySelector("#name")
const prBio = document.querySelector("#bio")

const inputName = document.querySelector("#name-field")
const inputBio = document.querySelector("#bio-field")
const inputImage = document.querySelector("#image-link-field")
const confirmBttn = document.querySelector("#confirm-button")

confirmBttn.addEventListener("click", () => {
    if(inputImage.value !== '') {
        prPic.setAttribute("src", inputImage.value)
    }

    if(inputName.value !== '') {
        prName.innerText = inputName.value
    }

    if(inputBio.value !== '') {
        prBio.textContent = inputBio.value
    }

    inputBio.value = ''
    inputImage.value = ''
    inputName.value = ''
})