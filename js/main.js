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

//smooth scroll

const section=document.querySelectorAll('section');
const li=document.querySelectorAll('nav ul li');
let current;

window.addEventListener('scroll',function(){
    section.forEach(sec=>{
        const sectionTop=sec.offsetTop;
        const secctionHeight=sec.clientHeight;
        
        if(this.pageYOffset>=sectionTop-secctionHeight/3){
            current=sec.getAttribute('id')
        }
    })
    li.forEach(item=>{
        item.classList.remove('active');
        if(item.classList.contains(current)){
            item.classList.add('active');
        }
    })
})


//--------letter compliting for h1 header------
const text=['طراح وب','برنامه نویس وب','فرانت اند دولوپر'];
let count=0;
let index=0;
let currrentText='';
let letter='';

//self invok function
(function type(){
    console.log('run shodamm')
    if(count===text.length){
        count=0;
    }


    currrentText=text[count];
    letter=currrentText.slice(0,++index);

    document.querySelector('.type').textContent=letter;

    if(letter.length==currrentText.length){
        count++;
        index=0;
    }

    setTimeout(type, 300);
})()