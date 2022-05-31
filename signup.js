    // SIGNUP
    let userPerson = [];
    let signUpModalClose = document.querySelector(".signupmodal__close")
    let modalSignUp = document.querySelector(".signupmodal")
    let userName= document.querySelector(".users-name")
    let userId= document.querySelector(".users-id")
    let userPass= document.querySelector(".users-password")
    let confirmPass= document.querySelector(".confirm-password")
    let checkid = document.querySelector(".check-user-name")
    let checkpassword =document.querySelector(".check-password")
    let confirmpassword =document.querySelector(".check-confirm")
    let checkAll = document.querySelector(".check-all")
    let signUp = document.querySelector(".singup-bnt")
    let checkName  = document.querySelector(".check-name")
    console.log(modalSignUp);
    console.log(userId.value.length);
    console.log(checkid);
    console.log(userPerson);
    
    signUpModalClose.addEventListener("click",()=>
    {
        modalSignUp.style.display ="none" ;
    })
    let check1 =0;
    let check2 =0;
    let check3 =0;
    let check4 = 0;
    userName.addEventListener("change",()=>
    {   
        console.log(userName.value.length);
        if ( userName.value.length == 0)
        {
            checkName.innerHTML = `<span>Name can't blank</span>`;
            check4 =0;
           
        }
        else
        {   
            
            checkName.innerHTML ="";
            // checkid.style.display = "none";
             check4 =1;
        }
    })
    userId.addEventListener("change",()=>
    {   
        console.log(userId.value.length);
        if ( userId.value.length == 0)
        {
            checkid.innerHTML = `<span>Username can't blank</span>`;
            check1 =0;
            console.log("123")
            
        }
        else
        {   
            
            checkid.innerHTML ="";
            // checkid.style.display = "none";
             check1 =1;
        }
    })


    userPass.addEventListener("change",() =>
    {
        if ( userPass.value.length <8)
        {
            checkpassword.innerHTML  = "<span>password less than 8 character</span>"
            check2=0;
        }
        else {
            checkpassword.style.display = "none";
            check2 =1;
        }
    })

    confirmPass.addEventListener("change",() =>
    {
        if(userPass.value===confirmPass.value)
            {
                check3 =1;
                confirmpassword.style.display = "none"
            }
        else
        {
            confirmpassword.innerHTML =`<span>confirmPass is't like password </span>`
            check3=0;
        }
    })

    signUp.addEventListener ("click" ,() =>
    {
        if (check1===1 && check2===1 && check3 === 1 && check4===1)
        {
            userPerson.push({ name : userName.value,
                user : userId.value,
                pass : userPass.value,
            })
            console.log(userPerson);
            modalSignUp.style.display = "none";
        }
        else 
        {
            checkAll.innerHTML ="<span>something wrong</span>"
        }
    })