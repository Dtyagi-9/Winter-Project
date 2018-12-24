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
 	//modal.style.display='block'; 
	//backdrop.style.display='block'; 
    backdrop.classList.add('open');
    modal.classList.add('open');
});
}
backdrop.addEventListener('click',function(){
    //mobileNav.style.display='none';
	 mobileNav.classList.remove('open');
	closemodal();							

});							
							
if(nobutton){


nobutton.addEventListener('click',closemodal);
}						
    				
function closemodal(){
  //  modal.style.display='none'; 
	//backdrop.style.display='none'; 
    backdrop.classList.remove('open');
    modal.classList.remove('open');
}

toggleButton.addEventListener('click',function(){
//    mobileNav.style.display='block';
//    backdrop.style.display='block';
	 mobileNav.classList.add('open');
	 backdrop.classList.add('open');

});