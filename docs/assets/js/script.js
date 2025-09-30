
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark')
    }


    var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});


 const swiper1 = new Swiper('.swiper1', {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
          nextEl: '.swiper-button-next1',
          prevEl: '.swiper-button-prev1',
        },
        breakpoints: {
          0: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 3 }
        }
      });


       const swiper2 = new Swiper('.swiper2', {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
          nextEl: '.swiper-button-next2',
          prevEl: '.swiper-button-prev2',
        },
        breakpoints: {
          0: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 3 }
        }
      });




    // Animation  
ScrollReveal().reveal('.headline' , {
    delay: 200,
    duration:800,
    distance:"50px",
    origin:'right',
    easing:'ease-in-out'

});

ScrollReveal().reveal('.Ani-img' , {
    delay: 200,
    duration:800,
    distance:"50px",
    origin:'left',
    easing:'ease-in-out'

});

ScrollReveal().reveal('.hero-Features' , {
    delay: 200,
    duration:800,
    distance:"50px",
    origin:'bottom',
    easing:'ease-in-out'

});

ScrollReveal().reveal('.hero-top' , {
    delay: 200,
    duration:800,
    distance:"50px",
    origin:'top',
    easing:'ease-in-out'

});
    // Animation  



  