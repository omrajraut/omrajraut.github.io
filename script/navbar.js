        let burger = document.querySelector('.icon');
        let navbar = document.querySelector('.nav-bar-mobile-1');
        let closeBurger = navbar.querySelector('.close');
        let dropped = false;


        const toggleBurger = () => {
            navbar.style.display = dropped ? 'none' : 'flex';
            dropped = !dropped;
        }



        burger.onclick = toggleBurger;
        closeBurger.onclick = toggleBurger;


        let galleryBurger = document.querySelector('.gallery-show-more');
        let galleryNav = document.querySelector('.nav-bar-mobile-2');
        let galleryDropped = false;
        let back = galleryNav.querySelector('.back');
        

        const toggleGallery = () => {
            galleryNav.style.display = galleryDropped ? 'none' : 'flex';
            galleryDropped = !galleryDropped;
        }

        back.onclick = toggleGallery;


        galleryBurger.onclick = toggleGallery;
        


        // console.log("hey");


