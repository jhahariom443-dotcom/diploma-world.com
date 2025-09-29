alert("Due to some issue in this time this website is only enegiable for one to third semester")
// Function to change the background color randomly
function changeColor() {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}

document.getElementById('login').addEventListener('click', function () {
    window.location.href = 'login.html';
});

document.getElementById('content').addEventListener('click', function () {
    window.location.href = 'home.html';
});

document.getElementById('about-us').addEventListener('click', function () {
    window.location.href = 'HTMLPage2.html';
});

document.getElementById('contact-us').addEventListener('click', function () {
    window.location.href = 'HTMLPage4.html';
});
document.getElementById('link').addEventListener('click', function () {
    window.location.href = 'link.html';
});

