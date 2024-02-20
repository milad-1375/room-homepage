const slider = [
    {
        imgMobile : 'images/mobile-image-hero-1.jpg',
        imgDesktop : 'images/desktop-image-hero-1.jpg',
        title : 'Discover innovative ways to decorate',
        description : 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
    },
    {
        imgMobile : 'images/mobile-image-hero-2.jpg',
        imgDesktop : 'images/desktop-image-hero-2.jpg',
        title : 'We are available all across the globe',
        description : "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
        imgMobile : 'images/mobile-image-hero-3.jpg',
        imgDesktop : 'images/desktop-image-hero-3.jpg',
        title : 'Manufactured with the best materials',
        description : "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    },
];

const nextBtn = document.querySelectorAll(".next");
const prevBtn = document.querySelectorAll(".prev");
const sliderDesktopImg = document.getElementById('sliderDesktopImg');
const sliderMobileImg = document.getElementById('sliderMobileImg');
const slidertitle = document.getElementById('slidertitle');
const sliderDesc = document.getElementById('sliderDesc');
let i = 0;

const showNextContent = () => {
    i++;
    if (i > (slider.length - 1)) {
        i = 0;
    }
    sliderDesktopImg.setAttribute("srcset", slider[i].imgDesktop);
    sliderMobileImg.setAttribute("src", slider[i].imgMobile);
    slidertitle.innerHTML = slider[i].title;
    sliderDesc.innerHTML = slider[i].description;
};

const showPrevContent = () => {
    i--;
    if (i < 0) {
        i = slider.length - 1;
    }
    sliderDesktopImg.setAttribute("srcset", slider[i].imgDesktop);
    sliderMobileImg.setAttribute("src", slider[i].imgMobile);
    slidertitle.innerHTML = slider[i].title;
    sliderDesc.innerHTML = slider[i].description;
};


nextBtn.forEach((btn) => {
    btn.addEventListener("click", showNextContent);
})
prevBtn.forEach((btn) => {
    btn.addEventListener("click", showPrevContent);
})


const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");
const menu = document.getElementsByClassName("nav__menu")[0];

const openMenuList = () => {
    menu.style.transform = `translateY(0%)`;
};
const closeMenuList = () => {
    menu.style.transform = `translateY(-100%)`;
};

hamburger.addEventListener("click", openMenuList)
close.addEventListener("click", closeMenuList)