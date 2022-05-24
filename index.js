const slideImage = [
    {
        id : 1,
        sourceUrl: "https://wallpapercave.com/wp/wp3293644.jpg"
    },
    {   
        id : 2,
        sourceUrl : "https://wallpapercave.com/wp/wp2884230.jpg"
    },
    {   
        id : 3,
        sourceUrl : "https://wallpapercave.com/wp/wp3293769.jpg"
    },
    {   
        id : 4,
        sourceUrl : "https://wallpapercave.com/wp/wp3293772.jpg"
    },
]
 const scrSlide = document.querySelector('.slide__img')
 console.log(scrSlide.scr);
 
    function slideRandom()
    {
         scrSlide.src = slideImage[Math.floor(Math.random()*slideImage.length)].sourceUrl;
        
    }

    setInterval(slideRandom,5000)

  