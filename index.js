let title = document.getElementById("title")
let author = document.getElementById("author")
let image = document.getElementById("image")
let date = document.getElementById("date")
let explanation = document.getElementById("explanation")
// console.log(title, author, image, date, explanation)

fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(res => res.json())
    .then(data => {
        title.textContent = data.title;
        author.textContent = data.copyright;
        image.src = data.url;
        date.textContent = data.date;
        explanation.textContent = data.explanation
    })