let header_menu=document.querySelector('.menu_header');
console.log(pageYOffset)
window.addEventListener('scroll',()=>{
    if(pageYOffset>50){
        header_menu.classList.add('sticky');
    }
    else{
        header_menu.classList.remove('sticky');
    }
    if(pageYOffset>568){
        header_menu.classList.add('black_them');
    }
    else{
        header_menu.classList.remove('black_them');
    }
})


// sample box
const imgBox=document.querySelectorAll('.sample-img-box');
imgBox.forEach(popup=>popup.addEventListener('click',function(){
    popup.classList.toggle('active');
}))
