let operator = document.querySelectorAll(".btn-operator")
console.log(operator)
operator.forEach((item)=>{
     item.addEventListener("click",()=>{
     if(screen1.innerText.includes(item.innerText)){
        item.classList.add("if-depressed")
     }else{screen1.innerText+=item.innerText}
     })
    })


let screen1=document.querySelector(".screen1")
function shownumber(n){
    console.log(screen1.innerText.length)
    if(screen1.innerText==0){
        screen1.innerText=n;
    }else{
        screen1.innerText+=n;
    }
}
    

    function remove(){screen1.innerText=0;}
    
    function backspace(){
        if(screen1.innerText.length>1){
            screen1.innerText=screen1.innerText.substring(0,screen1.innerText.length-1)
        }
    }

    let screen2 =document.querySelector(".screen2")

    // function to(){
    //     screen2.innerText+=screen1.innerText
    // }
    // to()
    
    // console.log(eval(-7+55))

       function equals(){
        screen2.innerText=eval(screen1.innerText)
        screen2.innerText="=  "+eval(screen1.innerText)
       }
       
    //    function unshift(){
    //     screen1.innerText=eval(-1*screen1.innerText)
    //    }
    let unshift=document.querySelector(".unshift")
       unshift.addEventListener("click",()=>{
        myarray=[]
        if(screen1.innerText>=1){
            myarray.push(screen1.innerText)
            myarray.unshift("-")
            screen.innerText=myarray.join("")
        }else{
            screen1.innerText=screen1.innerText;
        }
        })
        
       
       
       
    
