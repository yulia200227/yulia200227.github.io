document.addEventListener("DOMContentLoaded", function(){
    
    let burger = document.querySelector(".nav-icon");

    burger.addEventListener("click", (e) => {
        burger.classList.toggle("open");
        let navigation = document.querySelector(".navigation");
        let overlay = document.querySelector(".navigation .overlay");
        navigation.classList.toggle("open");
        if ( overlay ) {
            overlay.parentNode.removeChild(overlay);
        }
        else {
            let overlay_div = document.createElement("div");
            overlay_div.classList.add("overlay");
            navigation.insertBefore(overlay_div, navigation.firstChild);
            overlay_div.addEventListener("click", (e) => {
                navigation.classList.remove("open");
                burger.classList.remove("open");
                overlay_div.parentNode.removeChild(overlay_div);
            });
        }
    });

    window.addEventListener('scroll', function() {

        let navbox = document.querySelector("nav");
        let y = window.scrollY;
        
        if (y < 100) {
            navbox.classList.remove("topfixed");
        } else {
            navbox.classList.add("topfixed");
        }
      });

    /* Зміна класу для <nav> по скролу */
});

