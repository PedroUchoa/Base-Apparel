document.getElementById('button-submit').addEventListener("click", ()=>{
    let emailValue = document.getElementById("input-email").value
    let button = document.getElementById("img-button")
    let paragraph = document.querySelector(".please")
    if (emailValue == ""|| emailValue.indexOf('@') == -1 || emailValue.indexOf('.') == -1) {
        button.classList.remove('show')
        paragraph.classList.remove('show')
    }
})