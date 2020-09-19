const ani = document.querySelectorAll('#note')


const pop = ()=>{

    for (i = 0; i < ani.length; i++) {

        ani[i].style.transform = 'scale(1)'

        
    }

}


setTimeout(()=> pop(), 200)
