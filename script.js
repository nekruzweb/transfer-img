const slides = document.querySelector(".slides")
const PrevBtn = document.querySelector(".fa-angle-left")
const NextBtn = document.querySelector(".fa-angle-right")
const Box = document.querySelectorAll(".box")


let i = 0

let InterVal = setInterval( () => {
    i++
    if (i === Box.length) {
        i = 0
    }
    ChangeSlides()
},3000)


PrevBtn.addEventListener("click",() => {
    if (i === 0) {
        i = Box.length
    }
    i--
    ChangeSlides()

    clearInterval(InterVal)
})

NextBtn.addEventListener("click",() => {
    i++
    if (i === Box.length) {
        i = 0
    }
    ChangeSlides()

    clearInterval(InterVal)
})

const ChangeSlides = () => {
    slides.style.transform = `translateX(-${i*1000}px)`
}