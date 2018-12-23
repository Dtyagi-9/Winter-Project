var backdrop = document.querySelector('.backdrop'); 
/*console.dir(backdrop);*/
var modal= document.querySelector('.modal'); 
var selectPlanButtons= document.querySelectorAll('.plan button');
/*backdrop.style.display = 'block';*/
var nobutton=document.querySelector('.modal__action--negative');
var toggleButton=document.querySelector('.toggle-button');
var mobileNav=document.querySelector('.mobile-nav'); 
for(var i=0; i < selectPlanButtons.length; i++)
{
selectPlanButtons[i].addEventListener('click',function() {
 	modal.style.display='block'; 
	backdrop.style.display='block'; 
});
}
backdrop.addEventListener('click',function(){
    mobileNav.style.display='none';
	closemodal();
});


nobutton.addEventListener('click',closemodal);


function closemodal(){
    modal.style.display='none'; 
	backdrop.style.display='none'; 
}

toggleButton.addEventListener('click',function(){
    mobileNav.style.display='block';
    backdrop.style.display='block';

});