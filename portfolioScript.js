const seeMoreButton1 = document.querySelector('.SM-button1');
const seeMoreButton2 = document.querySelector('.SM-button2');
const seeMoreButton3 = document.querySelector('.SM-button3');
const MoreSection1 = document.querySelector('.more-portfolio-1');
const MoreSection2 = document.querySelector('.more-portfolio-2');
const MoreSection3 = document.querySelector('.more-portfolio-3');
seeMoreButton1.addEventListener('click', function () {
    MoreSection1.style.display = 'grid';
});
seeMoreButton2.addEventListener('click', function () {
    MoreSection2.style.display = 'grid';
});
seeMoreButton3.addEventListener('click', function () {
    MoreSection3.style.display = 'grid';
});