let par = document.getElementById("paragraf")
let koriscenIndex = new Set() // kako bi znali da se nece ponoviti isti citat dva puta dok ne prodje kroz sve indexe u nizu 
const quotes = [
    "The only way to do great work is to love what you do.",
    "Life is what happens when you're busy making other plans." ,
    "The future belongs to those who believe in the beauty of their dreams." ,
    "It does not matter how slowly you go as long as you do not stop.",
    "In the end, it's not the years in your life that count. It's the life in your years.",
    "The purpose of our lives is to be happy.",
    "Get busy living or get busy dying.",
    "You only live once, but if you do it right, once is enough.",
    "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    "If you want to live a happy life, tie it to a goal, not to people or things." 
]


document.getElementById("Button").addEventListener("click",()=>{
    if (koriscenIndex.size >= quotes.length) {
        koriscenIndex.clear();
    }
    while (true) {
        let randomIndex = Math.floor(Math.random() * quotes.length) // floor() - zaokruzuje broj na "nize". Npr 6.78 = 6 ili 5.24 = 5. ceil() zaokruzuje na vise
    //randomIndex ce predstavljati random broj od 0 do quotes.length (zaokruzeno na dole, kako bi i poslednji index bio ubrajan)
        if (koriscenIndex.has(randomIndex)) continue
        
        const citat = quotes[randomIndex] 
        par.innerHTML = citat
        koriscenIndex.add(randomIndex)
        break
    }

    
})