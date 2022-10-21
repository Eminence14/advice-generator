const adviceCard = document.querySelector('.advice_card')
const dice = document.querySelector('.dice')

dice.addEventListener('click', async () => {
    
    const advice = await getAdvice()
    adviceCard.innerHTML = `
        <h6>Advice #${advice.id}</h6>
    <blockquote>
      <q>
        ${advice.advice}
      </q>
    </blockquote>
    <img src="./images/pattern-divider-mobile.svg">
    <img class="dice" src="./images/icon-dice.svg">
    `

    console.log('another')
})

async function getAdvice() {
    const response = await fetch('	https://api.adviceslip.com/advice')
    const data = await response.json()
    return data.slip
}