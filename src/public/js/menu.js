const menu_buton = document.querySelectorAll('#menu')
const menu_content = document.querySelectorAll('#options_note')

for(i= 0; i < menu_buton.length; i++){

    const this_one = i
    
    menu_buton[i].addEventListener('click', ()=>{

        if (menu_content[this_one].style.height !== '45px') {

            menu_content[this_one].style.height= '45px'

        }
        else if(menu_content[this_one].style.height === '45px'){

            menu_content[this_one].style.height= '0px'

        }

    })

}

