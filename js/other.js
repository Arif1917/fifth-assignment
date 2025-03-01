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

const d = new Date();
document.getElementById("running-date").innerHTML = d.toDateString();
