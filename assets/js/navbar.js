burgerBtn = document.querySelector(".nav-button")
closeBtn = document.querySelector(".close-btn-wrapper")

navMobile = document.querySelector(".nav-mobile")


burgerBtn.onclick = () => {
    console.log("Clicked on burger btn!")
    navMobile.style.display = 'flex';
    burgerBtn.style.display = 'none';
    // closeBtn.style.display = 'flex';
}


closeBtn.onclick = () => {
    console.log("Clicked on close btn!");
    navMobile.style.display = 'none';
    burgerBtn.style.display = 'flex';
}

