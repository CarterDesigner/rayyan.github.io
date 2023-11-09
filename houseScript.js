window.addEventListener('load', () => {
    window.scrollTo(0, 0);
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

const loadingScreen = document.querySelector('.loading-screen');
window.addEventListener('load', () => {
    setTimeout(function () {
        loadingScreen.style.opacity = '0';
        setTimeout(function () {
            loadingScreen.style.display = 'none';
        }, 200);
    }, 0);
});

const dropMenuButton = document.querySelector('.drop-menu-button');
const dropMenuButtonLine1 = document.querySelector('.drop-menu-line1');
const dropMenuButtonLine2 = document.querySelector('.drop-menu-line2');
const dropMenuButtonLine3 = document.querySelector('.drop-menu-line3');
const dropMenu = document.querySelector('.drop-navigation');
const navigation = document.querySelector('.navigation');
const dropOptions = document.querySelectorAll('.drop-option');
const dropOption1 = document.querySelector('.drop-option1');
const dropOption2 = document.querySelector('.drop-option2');
const dropOption3 = document.querySelector('.drop-option3');
const dropOption4 = document.querySelector('.drop-option4');
const dropOption5 = document.querySelector('.drop-option5');
const dropOption6 = document.querySelector('.drop-option6');
dropMenuButton.addEventListener('click', () => {
    dropMenu.classList.toggle('drop-menu-displayed');
    navigation.classList.toggle('nav-background-none');
    dropMenuButtonLine1.classList.toggle('button-line-rotatedXLEFT');
    dropMenuButtonLine3.classList.toggle('button-line-rotatedXRIGHT');
    dropMenuButtonLine2.classList.toggle('button-line-hidden');
});
dropOption1.addEventListener('click', () => {
    dropMenu.classList.remove('drop-menu-displayed');
});
dropOption2.addEventListener('click', () => {
    dropMenu.classList.remove('drop-menu-displayed');
});
dropOption3.addEventListener('click', () => {
    dropMenu.classList.remove('drop-menu-displayed');
});
dropOption4.addEventListener('click', () => {
    dropMenu.classList.remove('drop-menu-displayed');
});
dropOption5.addEventListener('click', () => {
    dropMenu.classList.remove('drop-menu-displayed');
});
dropOption6.addEventListener('click', () => {
    dropMenu.classList.remove('drop-menu-displayed');
});

//button animations

const heroOpeningLink1 = document.querySelector('.opening-link-1');
const OL1_letter1 = document.querySelector('.OL1-letter1');
const OL1_letter2 = document.querySelector('.OL1-letter2');
const OL1_letter3 = document.querySelector('.OL1-letter3');
const OL1_letter4 = document.querySelector('.OL1-letter4');
const OL1_letter5 = document.querySelector('.OL1-letter5');
const OL1_letter6 = document.querySelector('.OL1-letter6');
const OL1_letter7 = document.querySelector('.OL1-letter7');
const OL1_letter8 = document.querySelector('.OL1-letter8');
const OL1_letter9 = document.querySelector('.OL1-letter9');
function OL1_animation() {
    OL1_letter1.classList.add('button-letter-animation');
    setTimeout(() => {
        OL1_letter1.classList.remove('button-letter-animation');
    }, 250);
    setTimeout(() => {
        OL1_letter2.classList.add('button-letter-animation');
        setTimeout(() => {
            OL1_letter2.classList.remove('button-letter-animation');
        }, 250);
        setTimeout(() => {
            OL1_letter3.classList.add('button-letter-animation');
            setTimeout(() => {
                OL1_letter3.classList.remove('button-letter-animation');
            }, 250);
            setTimeout(() => {
                OL1_letter4.classList.add('button-letter-animation');
                setTimeout(() => {
                    OL1_letter4.classList.remove('button-letter-animation');
                }, 250);
                setTimeout(() => {
                    OL1_letter5.classList.add('button-letter-animation');
                    setTimeout(() => {
                        OL1_letter5.classList.remove('button-letter-animation');
                    }, 250);
                    setTimeout(() => {
                        OL1_letter6.classList.add('button-letter-animation');
                        setTimeout(() => {
                            OL1_letter6.classList.remove('button-letter-animation');
                        }, 250);
                        setTimeout(() => {
                            OL1_letter7.classList.add('button-letter-animation');
                            setTimeout(() => {
                                OL1_letter7.classList.remove('button-letter-animation');
                            }, 250);
                            setTimeout(() => {
                                OL1_letter8.classList.add('button-letter-animation');
                                setTimeout(() => {
                                    OL1_letter8.classList.remove('button-letter-animation');
                                }, 250);
                                setTimeout(() => {
                                    OL1_letter9.classList.add('button-letter-animation');
                                    setTimeout(() => {
                                        OL1_letter9.classList.remove('button-letter-animation');
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

const heroOpeningLink2 = document.querySelector('.opening-link-2');
const OL2_letter1 = document.querySelector('.OL2-letter1');
const OL2_letter2 = document.querySelector('.OL2-letter2');
const OL2_letter3 = document.querySelector('.OL2-letter3');
const OL2_letter4 = document.querySelector('.OL2-letter4');
const OL2_letter5 = document.querySelector('.OL2-letter5');
const OL2_letter6 = document.querySelector('.OL2-letter6');
const OL2_letter7 = document.querySelector('.OL2-letter7');
const OL2_letter8 = document.querySelector('.OL2-letter8');
const OL2_letter9 = document.querySelector('.OL2-letter9');
function OL2_animation() {
    OL2_letter1.classList.add('button-letter-animation');
    setTimeout(() => {
        OL2_letter1.classList.remove('button-letter-animation');
    }, 250);
    setTimeout(() => {
        OL2_letter2.classList.add('button-letter-animation');
        setTimeout(() => {
            OL2_letter2.classList.remove('button-letter-animation');
        }, 250);
        setTimeout(() => {
            OL2_letter3.classList.add('button-letter-animation');
            setTimeout(() => {
                OL2_letter3.classList.remove('button-letter-animation');
            }, 250);
            setTimeout(() => {
                OL2_letter4.classList.add('button-letter-animation');
                setTimeout(() => {
                    OL2_letter4.classList.remove('button-letter-animation');
                }, 250);
                setTimeout(() => {
                    OL2_letter5.classList.add('button-letter-animation');
                    setTimeout(() => {
                        OL2_letter5.classList.remove('button-letter-animation');
                    }, 250);
                    setTimeout(() => {
                        OL2_letter6.classList.add('button-letter-animation');
                        setTimeout(() => {
                            OL2_letter6.classList.remove('button-letter-animation');
                        }, 250);
                        setTimeout(() => {
                            OL2_letter7.classList.add('button-letter-animation');
                            setTimeout(() => {
                                OL2_letter7.classList.remove('button-letter-animation');
                            }, 250);
                            setTimeout(() => {
                                OL2_letter8.classList.add('button-letter-animation');
                                setTimeout(() => {
                                    OL2_letter8.classList.remove('button-letter-animation');
                                }, 250);
                                setTimeout(() => {
                                    OL2_letter9.classList.add('button-letter-animation');
                                    setTimeout(() => {
                                        OL2_letter9.classList.remove('button-letter-animation');
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

const heroParalaxContainer = document.querySelector('.logo-title');
const heroBackImage = document.querySelector('.logo-big');
window.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;
    heroBackImage.style.transform = `translateY(${scrollValue * 0.4}px)`;
});