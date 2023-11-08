const openingLinksContainer = document.querySelector('.hero-opening-links');
const openingLink1 = document.querySelector('.opening-link-1');
const openingLink2 = document.querySelector('.opening-link-2');
const openingText = document.querySelector('.hero-opening-title');
const clientScrollBar = document.querySelector('.TR-clients');
window.addEventListener('load', function () {
    openingLinksContainer.style.opacity = '1.0';
    openingText.style.transform = 'none';
    openingText.style.opacity = '1.0';
    clientScrollBar.style.opacity = '1.0';
});

const heroParalaxContainer = document.querySelector('.hero');
const heroBackImage = document.querySelector('.hero-background-image');
window.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;
    heroBackImage.style.transform = `translateY(${scrollValue * 0.4}px)`;
});

const loadingScreen = document.querySelector('.loading-screen');
window.addEventListener('load', () => {
    setTimeout(function () {
        loadingScreen.style.opacity = '0';
        setTimeout(function () {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 0);
});

window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

const dropMenuButton = document.querySelector('.drop-menu-button');
const dropMenuButtonLine1 = document.querySelector('.drop-menu-line1');
const dropMenuButtonLine2 = document.querySelector('.drop-menu-line2');
const dropMenuButtonLine3 = document.querySelector('.drop-menu-line3');
const dropMenu = document.querySelector('.drop-navigation');
const navigation = document.querySelector('.navigation');
const dropOption1 = document.querySelector('.drop-option1');
const dropOption2 = document.querySelector('.drop-option2');
const dropOption3 = document.querySelector('.drop-option3');
const dropOption4 = document.querySelector('.drop-option4');
const dropOption5 = document.querySelector('.drop-option5');
dropMenuButton.addEventListener('click', () => {
    dropMenu.classList.toggle('drop-menu-displayed');
    navigation.classList.toggle('nav-background-none');
    dropMenuButtonLine1.classList.toggle('button-line-rotatedXLEFT');
    dropMenuButtonLine3.classList.toggle('button-line-rotatedXRIGHT');
    dropMenuButtonLine2.classList.toggle('button-line-hidden');
});

const toTopButton = document.querySelector('.toTop-button');
toTopButton.addEventListener('click', () => {
    window.scrollTo(0, 0);
});
toTopButton.addEventListener('mouseover', () => {
    toTopButton.classList.add('toTop-button-spinRIGHT');
    toTopButton.classList.remove('toTop-button-spinLEFT');
});
toTopButton.addEventListener('mouseout', () => {
    toTopButton.classList.add('toTop-button-spinLEFT');
    toTopButton.classList.remove('toTop-button-spinRIGHT');
});

const reviewPortButton = document.querySelector('.reviews-port-button');
const RB_Letter1 = document.querySelector('.RB-letter1');
const RB_Letter2 = document.querySelector('.RB-letter2');
const RB_Letter3 = document.querySelector('.RB-letter3');
const RB_Letter4 = document.querySelector('.RB-letter4');
const RB_Letter5 = document.querySelector('.RB-letter5');
const RB_Letter6 = document.querySelector('.RB-letter6');
const RB_Letter7 = document.querySelector('.RB-letter7');
const RB_Letter8 = document.querySelector('.RB-letter8');
const RB_Letter9 = document.querySelector('.RB-letter9');
function RB_animation () {
    RB_Letter1.classList.add('button-letter-animation');
    setTimeout(() => {
        RB_Letter1.classList.remove('button-letter-animation');
    }, 250);
    setTimeout(() => {
        RB_Letter2.classList.add('button-letter-animation');
        setTimeout(() => {
            RB_Letter2.classList.remove('button-letter-animation');
        }, 250);
        setTimeout(() => {
            RB_Letter3.classList.add('button-letter-animation');
            setTimeout(() => {
                RB_Letter3.classList.remove('button-letter-animation');
            }, 250);
            setTimeout(() => {
                RB_Letter4.classList.add('button-letter-animation');
                setTimeout(() => {
                    RB_Letter4.classList.remove('button-letter-animation');
                }, 250);
                setTimeout(() => {
                    RB_Letter5.classList.add('button-letter-animation');
                    setTimeout(() => {
                        RB_Letter5.classList.remove('button-letter-animation');
                    }, 250);
                    setTimeout(() => {
                        RB_Letter6.classList.add('button-letter-animation');
                        setTimeout(() => {
                            RB_Letter6.classList.remove('button-letter-animation');
                        }, 250);
                        setTimeout(() => {
                            RB_Letter7.classList.add('button-letter-animation');
                            setTimeout(() => {
                                RB_Letter7.classList.remove('button-letter-animation');
                            }, 250);
                            setTimeout(() => {
                                RB_Letter8.classList.add('button-letter-animation');
                                setTimeout(() => {
                                    RB_Letter8.classList.remove('button-letter-animation');
                                }, 250);
                                setTimeout(() => {
                                    RB_Letter9.classList.add('button-letter-animation');
                                    setTimeout(() => {
                                        RB_Letter9.classList.remove('button-letter-animation');
                                    }, 250);
                                }, 50);
                            }, 50);
                        }, 50);
                    }, 50);
                }, 50);
            }, 50);
        }, 50);
    }, 50);
};

const reviewItemMoveLEFT1 = document.querySelectorAll('.review-row-item-MOVELEFT1');
const reviewItemMoveRIGHT1 = document.querySelectorAll('.review-row-item-MOVERIGHT1');
const reviewItemMoveLEFT2 = document.querySelectorAll('.review-row-item-MOVELEFT2');
window.addEventListener('load', function () {
    reviewItemMoveLEFT1.forEach((element1) => {
        element1.classList.add('reviewMoveLeft-animation1');
    });
    reviewItemMoveRIGHT1.forEach((element2) => {
        element2.classList.add('reviewMoveRight-animation2');
    });
    reviewItemMoveLEFT2.forEach((element3) => {
        element3.classList.add('reviewMoveLeft-animation3');
    })
});

const question1TitleContainer = document.querySelector('.qt1');
const question1TitlePlus = document.querySelector('.mb1');
const question2TitleContainer = document.querySelector('.qt2');
const question2TitlePlus = document.querySelector('.mb2');
const question3TitleContainer = document.querySelector('.qt3');
const question3TitlePlus = document.querySelector('.mb3');
const answer1 = document.querySelector('.a1');
const answer2 = document.querySelector('.a2');
const answer3 = document.querySelector('.a3');
let clicked1 = false;
let clicked2 = false;
let clicked3 = false;
question1TitleContainer.addEventListener('click', function () {
    clicked1 = !clicked1;
    clicked2 = false;
    clicked3 = false;

    question1TitlePlus.classList.toggle('question-title-plus-rotated');
    question2TitlePlus.classList.remove('question-title-plus-rotated');
    question3TitlePlus.classList.remove('question-title-plus-rotated');

    if (clicked1) {
        answer1.style.display = 'flex';
        answer2.style.display = 'none';
        answer3.style.display = 'none';
    } else {
        answer1.style.display = 'none';
    }
});

question2TitleContainer.addEventListener('click', function () {
    clicked2 = !clicked2;
    clicked1 = false;
    clicked3 = false;

    question2TitlePlus.classList.toggle('question-title-plus-rotated');
    question3TitlePlus.classList.remove('question-title-plus-rotated');
    question1TitlePlus.classList.remove('question-title-plus-rotated');

    if (clicked2) {
        answer2.style.display = 'flex';
        answer1.style.display = 'none';
        answer3.style.display = 'none';
    } else {
        answer2.style.display = 'none';
    }
});

question3TitleContainer.addEventListener('click', function () {
    clicked3 = !clicked3;
    clicked1 = false;
    clicked2 = false;

    question3TitlePlus.classList.toggle('question-title-plus-rotated');
    question2TitlePlus.classList.remove('question-title-plus-rotated');
    question1TitlePlus.classList.remove('question-title-plus-rotated');

    if (clicked3) {
        answer3.style.display = 'flex';
        answer1.style.display = 'none';
        answer2.style.display = 'none';
    } else {
        answer3.style.display = 'none';
    }
});

const scrollBarLine = document.querySelectorAll('.scroll-bar-line');
window.addEventListener('load', () => {
    scrollBarLine.forEach((line) => {
        line.classList.add('scroll-bar-line-animation');
    });
});
let scrollDistance = 5;
window.addEventListener('scroll', () => {
    if (window.scrollY > scrollDistance) {
        scrollBarLine.style.opacity = '0';
    } else {
        scrollBarLine.style.opacity = '1.0';
    }
});