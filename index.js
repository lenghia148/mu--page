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
            firstName : "DAVID",
            lastName : "DEGEA",
            imgPlayer  : "https://assets.manutd.com/AssetPicker/images/0/0/16/59/1063877/De_Gea_profile_pic_trial_edit1643296725957.jpg"
        },
        {
            number : 26,
            firstName : "DEAN",
            lastName : "HENDERSON",
            imgPlayer  : "//assets.manutd.com/AssetPicker/images/0/0/16/58/1063672/Henderson_profile_picture_edit_1643204896600.jpg"
        } ,
        {
            number : 13,
            firstName : "LEE",
            lastName : "GRANT",
            imgPlayer  : "https://assets.manutd.com/AssetPicker/images/0/0/15/128/1015859/Lee_Grant31643195718205.jpg"
        },
        {
            number : 22,
            firstName : "TOM",
            lastName : "HEATON",
            imgPlayer  : "https://assets.manutd.com/AssetPicker/images/0/0/16/60/1063955/Tom_Heaton_profile_picture_11643362367120.webp"
        },
    ] 
    // DEFENDERS
    const defenders = 
    [
        {
            number : 2,
            firstName : "VICTOR",
            lastName : "LINDELOF",
            imgPlayer  : "//assets.manutd.com/AssetPicker/images/0/0/15/128/1015882/Victor_Lindelof21643197572333.jpg"
        },
        {
            number : 3,
            firstName : "ERIC",
            lastName : "BAILLY",
            imgPlayer  : "//assets.manutd.com/AssetPicker/images/0/0/16/59/1063682/Bailly_profile_picture_edit_1643207603635.jpg"
        } ,
        {
            number : 4,
            firstName : "PHIL",
            lastName : "JONES",
            imgPlayer  : "//assets.manutd.com/AssetPicker/images/0/0/15/128/1015871/Phil_Jones21643196247392.jpg"
        },
        {
            number :5,
            firstName : "HARRY",
            lastName : "MAGUIRE",
            imgPlayer  : "//assets.manutd.com/AssetPicker/images/0/0/16/60/1063949/Harry_Maguire_profile_picture_11643362474267.jpg"
        } ,
        {
            number :19,
            firstName : "RAPHAEL",
            lastName : "VARANE",
            imgPlayer  : "//assets.manutd.com/AssetPicker/images/0/0/16/59/1063686/Varane_profile_picture_edit1643207687872.jpg"
        } ,
        {
            number :20,
            firstName : "DIOGO",
            lastName : "DALOT",
            imgPlayer  : "//assets.manutd.com/AssetPicker/images/0/0/15/128/1015843/Diogo_Dalot11643198925553.jpg"
        } ,
        {
            number :23,
            firstName : "LUKE",
            lastName : "SHAW",
            imgPlayer  : "//assets.manutd.com/AssetPicker/images/0/0/16/60/1063951/Luke_Shaw_profile_picture_11643362589210.jpg"
        } ,
        {
            number :27,
            firstName : "ALLEX",
            lastName : "TELLES",
            imgPlayer  : "//assets.manutd.com/AssetPicker/images/0/0/16/60/1063946/Alex_Telles_profile_picture_11643362683236.jpg"
        } ,
    ] 
    const midfielders = 
    [
        {
            number : 6,
            firstName : "PAUL",
            lastName : "POGBA",
            imgPlayer  : "//assets.manutd.com/AssetPicker/images/0/0/15/128/1015869/Paul_Pogba21643198667759.jpg"
        },
        {
            number : 8,
            firstName : "JOAN",
            lastName : "MATA",
            imgPlayer  : "//assets.manutd.com/AssetPicker/images/0/0/16/60/1063950/Juan_Mata_profile_picture_11643362803704.jpg"
        } ,
        {
            number : 14,
            firstName : "JEESE",
            lastName : "LINGARD",
            imgPlayer  : "//assets.manutd.com/AssetPicker/images/0/0/15/240/1044639/THFC_v_MUFC_1621643708305886.jpg"
        },
        {
            number :17,
            firstName : "PAULA",
            lastName : "FRED",
            imgPlayer  : "//assets.manutd.com/AssetPicker/images/0/0/15/128/1015848/Fred21643199569180.jpg"
        } ,
        {
            number :18,
            firstName : "BRUNO",
            lastName : "FERNANDES",
            imgPlayer  : "//assets.manutd.com/AssetPicker/images/0/0/16/60/1063948/Bruno_Fernandes_profile_picture_11643362903480.jpg"
        } ,
        {
            number :31,
            firstName : "NEMANJA",
            lastName : "MATIC",
            imgPlayer  : "//assets.manutd.com/AssetPicker/images/0/0/16/60/1063952/Nemanja_Matic_profile_picture_11643363011966.jpg"
        } ,
        {
            number :34,
            firstName : "DONNY",
            lastName : "VANDEBECK",
            imgPlayer  : "//assets.manutd.com/AssetPicker/images/0/0/15/128/1015846/Donny_van_de_Beek21643199885481.jpg"
        } ,
        {
            number :39,
            firstName : "SCOTT",
            lastName : "MACTOMINAY",
            imgPlayer  : "//assets.manutd.com/AssetPicker/images/0/0/16/60/1063953/Scott_McTominay_profile_picture_11643363103000.jpg"
        } ,
    ] 
    const forwards = 
    [
        {
            number : 7,
            firstName : "CRISTIANO",
            lastName : "RONALDO",
            imgPlayer  : "//assets.manutd.com/AssetPicker/images/0/0/16/59/1063692/Ronaldo_profile_pic_11643209005392.webp"
        },
        {
            number : 10,
            firstName : "MARCUS",
            lastName : "RASHFORD",
            imgPlayer  : "//assets.manutd.com/AssetPicker/images/0/0/15/65/999870/Men_s_Images_4x5_Rashford11643708471395.jpg"
        }, 
        {
            number : 21,
            firstName : "EDISON",
            lastName : "CAVANI",
            imgPlayer  : "//assets.manutd.com/AssetPicker/images/0/0/16/133/1082814/Edinson_Cavani_grid_image_April_20221649701223556.jpg"
        }, 
        {
            number : 25,
            firstName : "JADON",
            lastName : "SANCHO",
            imgPlayer  : "//assets.manutd.com/AssetPicker/images/0/0/15/128/1015854/Jadon_Sancho21643200934183.jpg"
        }, 
    ] 
     
        const goalKeeperPlayer = document.querySelector('.goalkeepers')
        const defendersPlayer = document.querySelector('.defenders')
        const midfieldersPlayer = document.querySelector('.midfielders')
        const forwardsPlayer = document.querySelector('.forwards')
        console.log(goalKeeperPlayer)

        function showPlayers(postion,postionArr)

        {
            for(let i =0; i<postionArr.length;i++)
            {
                postion.innerHTML += `<div class="showplayers" style="background-image:url(${postionArr[i].imgPlayer});">
               <span class="showplayers_number" > ${postionArr[i].number}</span>
               <span class="showplayers_firstName" > ${postionArr[i].firstName}</span>
               <span class="showplayers_lastName" " > ${postionArr[i].lastName}</span>
                </div>` 
            }
        }

        showPlayers(goalKeeperPlayer,goalKeeper);
        showPlayers(defendersPlayer,defenders);
        showPlayers(midfieldersPlayer,midfielders);
        showPlayers(forwardsPlayer,forwards);
  
