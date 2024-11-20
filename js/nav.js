const gb_Ue = document.querySelector(".gb_Ue");
const nav_sub_menu = document.querySelector(".nav__li-submenu");

// Agregando eventos!
gb_Ue.addEventListener("click",navAction);
nav_sub_menu.addEventListener("click",navProfileAction);


let zIndex = 20;
let navClose = true;
let navProfileClose = true;
const nav = document.querySelector('.nav__li-submenu-ul');
const navProfile = document.querySelector(".nav__submenu-profile")

function navAction(){
	if (navClose){
		nav.style.display = "block";
		navClose = false;
		nav.style.zIndex = zIndex;
		zIndex++;
		navProfile.style.display = "none";
		navProfileClose = true;
	} else {
		nav.style.display = "none";
		navClose = true;
	}
}


function navProfileAction(){
	if (navProfileClose) {
		navProfile.style.display = "block";
		navProfileClose = false;
		navProfile.style.zIndex = zIndex;
		zIndex++;
		nav.style.display = "none";
		navClose = true;
	} else {
		navProfile.style.display = "none";
		navProfileClose = true;
	}
}

