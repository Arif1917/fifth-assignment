const backBtn = document.getElementById('back-btn');
const calender = document.getElementById('calender-id');

if (backBtn) {
    backBtn.addEventListener('click', function () {

        window.location.href = "../index.html"
    })
}

if (calender) {
    calender.addEventListener('click', function () {
        window.location.href = "../question.html"
    })
}



// new learning
const d = new Date();
document.getElementById("running-date").innerHTML = d.toDateString();




document.getElementById('color-btn').addEventListener('click', function(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
document.body.style.backgroundColor = '#' + randomColor;
console.log('click')
})