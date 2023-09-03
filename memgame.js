const cardArray = [
    {
        name: "dolphin",
        img: "images/dolphin.png"
    },
    {
        name: 'clown',
        img: "images/clown.png"
    },
    {
        name:"lion",
        img: "images/lion.png"
    },
    {
        name: "angel",
        img: "images/angel.png"
    },
    {
        name: "redhead",
        img: "images/redhead.png"
    },
    {
        name: "redAngel",
        img: "images/redangel.png"
    },
    {
        name: "dolphin",
        img: "images/dolphin.png"
    },
    {
        name: 'clown',
        img: "images/clown.png"
    },
    {
        name:"lion",
        img: "images/lion.png"
    },
    {
        name: "angel",
        img: "images/angel.png"
    },
    {
        name: "redhead",
        img: "images/redhead.png"
    },
    {
        name: "redAngel",
        img: "images/redangel.png"
    }
]


 cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector("#grid")
const resultDisplay = document.querySelector("#result")
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img")
        card.setAttribute('src', "images/tranc.png")
        card.setAttribute("data-id", i)
        card.addEventListener("click", flipCard)
        gridDisplay.append(card)
        console.log(card, i)
    }
}
createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

   // if (optionOneId == optionTwoId) {
     //   alert("Same Image! Match!")
      //  cards[optionOneId].setAttribute('src', 'images/tranc.png')
      //  cards[optionTwoId].setAttribute('src', 'images/tranc.png')


    //}

    if (optionOneId == optionTwoId) {
        alert('match! yayy')
       // cards[]
       cards[optionOneId].setAttribute('src', 'images/painlove.png')
       cards[optionTwoId].setAttribute('src', 'images/painlove.png')
       cards[optionOneId].removeEventListener("click", flipCard)
       cards[optionTwoId].removeEventListener("click", flipCard)
      
       cardsWon.push(cardsChosen)
    } else {

        cards[optionOneId].setAttribute('src', 'images/tranc.png')
        cards[optionTwoId].setAttribute('src', 'images/tranc.png')
        alert('Try again')
    }
    cardsChosen = []
    cardsChosenIds = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === (cardArray.length/2)) {
        resultDisplay.textContent = "Congrats! You found them All!"
    }
}

function flipCard() {
    
    let cardId = this.getAttribute("data-id")
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
console.log(cardsChosen)
if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500)
}
}

