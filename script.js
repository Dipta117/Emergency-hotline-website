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
                 let service_nam=ser[i-1].innerText;
        let numb=num[i-1].innerText;
        window.alert(service_nam+"\n\n"+numb);
               coin_txt=coin_txt-20;
               coin.innerText=coin_txt;
            }
        
    });
    }

    
    