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

    