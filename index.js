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

 
    function slideRandom()
    {
         scrSlide.src = slideImage[Math.floor(Math.random()*slideImage.length)].sourceUrl;
        
    }

    setInterval(slideRandom,3000)

    // GOALKEEPERS

    const goalKeeper = 
    [
        {
            number : 1,
            namePlayer : "DAVID DEGEA",
            imgPlayer  : "https://assets.manutd.com/AssetPicker/images/0/0/16/59/1063877/De_Gea_profile_pic_trial_edit1643296725957.jpg"
        },
        {
            number : 26,
            namePlayer : "DEAN HENDERSON",
            imgPlayer  : "https://assets.manutd.com/AssetPicker/images/0/0/16/58/1063672/Henderson_profile_picture_edit_1643204896600.jpg"
        } 
    ] 

    const defenders = 
    [
        {
            number : 1,
            namePlayer : "DAVID DEGEA",
            imgPlayer  : "https://assets.manutd.com/AssetPicker/images/0/0/16/59/1063877/De_Gea_profile_pic_trial_edit1643296725957.jpg"
        },
        {
            number : 26,
            namePlayer : "DEAN HENDERSON",
            imgPlayer  : "https://assets.manutd.com/AssetPicker/images/0/0/16/58/1063672/Henderson_profile_picture_edit_1643204896600.jpg"
        } 
    ] 
    const midfielders = 
    [
        {
            number : 1,
            namePlayer : "DAVID DEGEA",
            imgPlayer  : "https://assets.manutd.com/AssetPicker/images/0/0/16/59/1063877/De_Gea_profile_pic_trial_edit1643296725957.jpg"
        },
        {
            number : 26,
            namePlayer : "DEAN HENDERSON",
            imgPlayer  : "https://assets.manutd.com/AssetPicker/images/0/0/16/58/1063672/Henderson_profile_picture_edit_1643204896600.jpg"
        } 
    ] 
    const forwards = 
    [
        {
            number : 1,
            namePlayer : "DAVID DEGEA",
            imgPlayer  : "https://assets.manutd.com/AssetPicker/images/0/0/16/59/1063877/De_Gea_profile_pic_trial_edit1643296725957.jpg"
        },
        {
            number : 26,
            namePlayer : "DEAN HENDERSON",
            imgPlayer  : "https://assets.manutd.com/AssetPicker/images/0/0/16/58/1063672/Henderson_profile_picture_edit_1643204896600.jpg"
        } 
    ] 
     
        const goalKeeperPlayer = document.querySelector('.goalkeepers')
        console.log(goalKeeperPlayer)

        function showPlayers(postion,postionArr)

        {
            for(let i =0; i<postionArr.length;i++)
            {
                postion.innerHTML += `<div class="showplayers" style="background-image:url(${postionArr[i].imgPlayer});">
               <span class="showplayers_number" > ${postionArr[i].number}</span>
               <span class="showplayers_name" " > ${postionArr[i].namePlayer}</span>
                </div>` 
            }
        }


        showPlayers(goalKeeperPlayer,goalKeeper);
  
