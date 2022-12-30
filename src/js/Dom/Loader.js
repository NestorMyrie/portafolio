const loader = document.getElementById("loader")

addEventListener('load',() => {
    loader.style.opacity='0'
    loader.addEventListener('transitionend',element=>element.target.style.display="none")
})