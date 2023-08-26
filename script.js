const adviceNumber = document.getElementById('js-advicenumber');
const errorDisplay = document.querySelector('.error')
const advice = document.getElementById('advice');
const btn = document.querySelector('.js-btn');

const adviceUrl = 'https://api.adviceslip.com/advice';

function removeError() {
    setTimeout(() => {
        errorDisplay.style.display = 'none';
    }, 2000);
}

async function adviceGenerator() {
    try {
        let request = await fetch(adviceUrl);
        let response = await request.json();
        adviceNumber.innerText = response.slip.id;
        advice.innerText = response.slip.advice;
    } catch (error) {
        errorDisplay.style.display = 'block';
        removeError()
    }
    
}


btn.addEventListener ('click', () => {
    adviceGenerator()
})

adviceGenerator()
