const button = document.getElementById("button")
const bubble = document.getElementById("speech")



async function getAdvice(){
    
    const url = "https://api.adviceslip.com/advice"

    let advice = ""

    try{
        const response = await fetch(url)
        const data = await response.json()
        const adviceNumber = data.slip.id
        const adviceText = data.slip.advice
        bubble.innerHTML = `<p><strong>ADVICE:</strong> #${adviceNumber}</p><p>${adviceText}</p>`;
        bubble.innerHTML = `<p><strong>ADVICE:</strong> #${adviceNumber}</p><p>${adviceText}</p>`;
    }
    catch (e) {
        console.error("Error fetching advice:",e);

    }

    renderAdvice (advice)

}


function tellMeAdvice (advice) {
    VoiceRSS.speech({
        key: '5ff4b1b6ab8143f488a977bc3a2f2a9c',
        src: advice,
        hl: 'en-us',
        v: 'Linda',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });

}


button.addEventListener('click', getAdvice)