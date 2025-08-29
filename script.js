let lovee=document.getElementsByClassName("love");

let fav=document.getElementById("fav");
    for(let i=0;i<lovee.length;i++)
    {
        lovee[i].addEventListener("click",function()
    {


        let path=this.querySelector("path");
        if(path.getAttribute("fill") ==="red")
            {path.setAttribute("fill","#5C5C5C");
                let txt=parseInt(fav.innerText);
        txt=txt-1;
            fav.innerText=txt;
            }
        else
        {
            path.setAttribute("fill","red");
            let txt=parseInt(fav.innerText);
            txt=txt+1;
            fav.innerText=txt;
        }
    })
    }


let coin=document.getElementById("coin");

    let calls=document.getElementsByClassName("call");
    let ser=document.getElementsByClassName("service");
    let num=document.getElementsByClassName("num");
let hist=document.getElementById("history");
let number_name=document.getElementsByClassName("number");
let img=document.getElementsByClassName("icn");
    


    for(let i=0;i<calls.length;i++)
    {
        calls[i].addEventListener("click",function()
    {
       
            let coin_txt=parseInt(coin.innerText);
            if(coin_txt<20)
            {
                window.alert("Insufficient Coin to Make a Call");
                return;
            }
            else
            {

                 let service_nam=ser[i].innerText;
                 let number_nam=number_name[i].innerText;
                let numb=num[i].innerText;
                let pic=img[i].getAttribute("src");



        window.alert("\n\n"+number_nam+"\n"+service_nam+"\n"+numb);
               coin_txt=coin_txt-20;
               coin.innerText=coin_txt;


               let new_his=document.createElement("div");
               new_his.classList.add("flex","justify-between","items-center","mb-[8px]","bg-gray-100","p-[16px]","rounded-[8px]");
               let ser_num=document.createElement("div");

               let new_ser=document.createElement("h2");
               new_ser.classList.add("font-semibold", "font-inter", "text-[18px]");
               new_ser.innerText=number_nam;

               let new_num=document.createElement("p");
               new_num.classList.add("text-[16px]","font-hind");
               new_num.innerText=numb;

               let new_img=document.createElement("img");
              new_img.classList.add("w-6","h-6");
               new_img.src=pic;

                ser_num.appendChild(new_img);
                ser_num.appendChild(new_ser);
                ser_num.appendChild(new_num);
                new_his.appendChild(ser_num);
                let time=document.createElement("p");
                time.classList.add("font-hind");
                let now=new Date();
let currentTime=now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

                time.innerText=currentTime;
                new_his.appendChild(time);
              
               hist.prepend(new_his);

              


            }
        
    });
    }


    let clr=document.getElementById("clear");
    clr.addEventListener("click",function()
{
    hist.innerHTML="";
});

    
let cpy=document.getElementsByClassName("cpy");
let c_count=document.getElementsByTagName("span");

for(let i=0;i<cpy.length;i++)
{
    cpy[i].addEventListener("click",function()
{
    
    let c=parseInt(c_count[0].innerText);
    c+=1;
    c_count[0].innerText=c;


    let numb=num[i].innerText;
    window.alert("Copied"+ " "+ numb );
    navigator.clipboard.writeText(numb);
    
});
}




let btn=document.getElementById("mobile_btn");
let hid=document.getElementsByClassName("hide");
btn.addEventListener("click",function()
{
    
    

    if(btn.innerText==="Call History")
    {
       btn.innerText="Exit History";
        for(let i=0;i<hid.length;i++)
     {
         hid[i].classList.add("hidden");
     }
    let call_his=document.getElementById("call-history");
    call_his.classList.remove("hidden");
    call_his.classList.add("w-full");
    }

    else
    {
         btn.innerText="Call History";
        for(let i=0;i<hid.length;i++)
     {
         hid[i].classList.remove("hidden");
     }
    let call_his=document.getElementById("call-history");
    call_his.classList.add("hidden");
   

    }

    

});