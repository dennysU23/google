document.querySelector(".gb_Ue").addEventListener("click",navAction);
document.querySelector(".nav__li-submenu").addEventListener("click",navProfileAction);
let zIndex = 20;
let navClose = true;
let navProfileClose = true;
const nav = document.querySelector('.nav__li-submenu-ul');
const navProfile = document.querySelector(".nav__submenu-profile")

const navAction=()=>{
	if (navClose == true) {
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


const navProfileAction=()=>{
	if (navProfileClose == true) {
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

