const slideImage = [
    {
        id : 1,
        sourceUrl: "https://store.manutd.com/content/ws/all/98037179-163e-4916-b889-9736c8d4347a__1370X450.png"
    },
    {   
        id : 2,
        sourceUrl : "//assets.manutd.com/AssetPicker/images/0/0/16/20/1053936/Unknown_21638979613416_xlarge.webp"
    },
    {   
        id : 3,
        sourceUrl : "//assets.manutd.com/AssetPicker/images/0/0/10/168/698393/JP_541528114708571_xlarge.jpg"
    },
    {   
        id : 4,
        sourceUrl : "https://store.manutd.com/content/ws/all/854f4068-b804-4fee-a878-91c8f313fc41__1600X612.png"
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
  
        //shop

        
       const shopItems = 
        [
            {
                itemsImg : "https://images.footballfanatics.com/manchester-united/manchester-united-home-shirt-2021-22_ss4_p-12052601+u-at664r59yn8qgpq61tz1+v-206a8d38ca49417f845b1e6711c02106.jpg?_hv=1&w=340",
                itemsReduced: "25$",
                itemsRegular: "64$",
                itemsName : "Manchester United Home Shirt 2021-22",
            },
            {
                itemsImg : "https://images.footballfanatics.com/manchester-united/manchester-united-home-shirt-2021-22-with-ronaldo-7-printing_ss4_p-12093042+u-oicxhbrseyxzlvk6sx92+v-be807a6e8fbf495fac17b4421e57f043.jpg?_hv=1&w=900",
                itemsReduced: "40$",
                itemsRegular: "79$",
                itemsName : "Manchester United Home Shirt 2021-22 with Ronaldo 7 printing",
            },
            {
                itemsImg : "https://images.footballfanatics.com/manchester-united/manchester-united-third-shirt-2021-22_ss4_p-12052548+u-11j173tm5vq2ycw9fyvr+v-2f47135b2bc64b3a8d5cc4b1f32349ad.jpg?_hv=1&w=900",
                itemsReduced: "25$",
                itemsRegular: "64$",
                itemsName : "Manchester United Third Shirt 2021-22",
            },
            {
                itemsImg : "https://images.footballfanatics.com/manchester-united/manchester-united-away-shirt-2021-22_ss4_p-12052603+u-b7sp7qmu31as2usy5man+v-765af7e8dd784446a6249a8959f37917.jpg?_hv=1&w=900",
                itemsReduced: "40$",
                itemsRegular: "79$",
                itemsName : "Manchester United Cup Home Shirt 2021-22 with Ronaldo 7 printing",
            },
            {
                itemsImg : "https://images.footballfanatics.com/manchester-united/manchester-united-cup-home-shirt-2021-22-with-ronaldo-7-printing_ss4_p-12093052+u-1ep8mddmd2rktpu3u302+v-149c3800d6d049d1a7f7e375c48d3860.jpg?_hv=1&w=900",
                itemsReduced: "25$",
                itemsRegular: "64$",
                itemsName : "Manchester United Home Shirt 2021-22",
            },
            // {
            //     itemsImg : "https://images.footballfanatics.com/manchester-united/manchester-united-away-shirt-2021-22-kids_ss4_p-12052547+u-11d5qeoiu7aa40hdm741+v-610317aacad740379f0bd105a0c06e0b.jpg?_hv=1&w=900",
            //     itemsReduced: "20$",
            //     itemsRegular: "49$",
            //     itemsName : "Manchester United Away Shirt 2021-22-Kids",
            // },
            // {
            //     itemsImg : "https://images.footballfanatics.com/manchester-united/manchester-united-cup-third-shirt-2021-22-with-ronaldo-7-printing_ss4_p-12093058+u-1hjs4qhpgr3afx5fx00q+v-47c054dbd1cd45849b6d359094a81b04.jpg?_hv=1&w=900",
            //     itemsReduced: "40$",
            //     itemsRegular: "79$",
            //     itemsName : "Manchester United Cup Third Shirt 2021-22 with Ronaldo 7 printing",
            // },
            // {
            //     itemsImg : "https://images.footballfanatics.com/manchester-united/manchester-united-home-shirt-2021-22-kids_ss4_p-12052529+u-vckymczol65lc48x06zt+v-dca95c842fe948599175a8ffc12edcd6.jpg?_hv=1&w=900",
            //     itemsReduced: "22$",
            //     itemsRegular: "49$",
            //     itemsName : "Manchester United Home Shirt 2021-22-Kids",
            // }
          
        ]
        
       const shopItemsShow = document.querySelector(".shop")

       function showShop(items,shop)
       {
        for(let i =0; i<items.length;i++)
        {
            shop.innerHTML += `<div class="shop__items" >
            <a href=""><div class="shop__items--img" style="background-image:url(${items[i].itemsImg});" ></div></a>
            
            <div class="shop__items--name">
            <span class="shop__items--reduced"> Reduced: ${items[i].itemsReduced}</span>
            <span class="shop__items--regular"> Regular: ${items[i].itemsRegular}</span>
            <span>${items[i].itemsName}</span>
            </div>
            </div>`
        }
        
       }
       showShop(shopItems,shopItemsShow);
