document.addEventListener('DOMContentLoaded',ready);function ready(){document.querySelector('#headerCollapseButton').addEventListener('click',headerCollapse);document.querySelector('.footer__get-in-touch__button').addEventListener('click',getInTouch);let setMailButtons=document.querySelectorAll('.footer__get-in-touch__set-mail');for(let setMailButton of setMailButtons){setMailButton.addEventListener('click',setMail);}}
function headerCollapse(){this.classList.toggle('open');document.querySelector('#headerCollapse').classList.toggle('open');}
function getInTouch(){this.classList.toggle('open');this.parentNode.classList.toggle('open');}
function setMail(){let mail=this.dataset.label;let link=document.querySelector('.footer__get-in-touch__mail-link a');link.parentNode.classList.add('open');link.innerHTML=mail;link.href=`mailto:${mail}`;document.querySelector('.footer__get-in-touch__button').classList.remove('open');document.querySelector('.footer__get-in-touch').classList.remove('open');}
$(".feature-media").fitVids();$(window).scroll(function(){var scrollTop=$(window).scrollTop();if(scrollTop>$(window).height()- $('header').height()){$("header").css({'background-color':'rgba(80, 95, 95, 0.5)','box-shadow':'0px 2px 2px rgba(80, 95, 95, 0.5)'});}else{$("header").css({'background-color':'transparent','box-shadow':'none'});}});