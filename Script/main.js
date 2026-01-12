
function navcolor() {
    const NAVTHING = document.getElementById("navthing");
    let g = 40;
    if (g === 40) {
        g = 80;
    } else {
        g = 40;
    }

	setTimeout(function() {
		navcolor();
	}, 5000);

	NAVTHING.style.background = 'rgb('+g+','+g+','+g+')';
}

navcolor();

const woclick = document.getElementById("woclick");
let enabled = true;
function woappear() {
    woclick.style.display = "block";
    if (enabled === true) {
        enabled = false;
        setTimeout(() => {
            woclick.style.display = "none"
            enabled = true;
        }, 2000);
    }
}

const ATHING = document.getElementById("athing");
function scrollButton() {
    const SCROLLTHING = document.getElementById("scrollTo");
    SCROLLTHING.scrollIntoView({ behavior: "smooth", block: "end"})
}

function scroller(x) {
    let unit = document.documentElement.scrollHeight / 100;
    switch(x) {
        case 1:
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
            break;
        case 2:
            window.scrollTo({
                top: 25 * unit,
                left: 0,
                behavior: "smooth"
            });
            break;
        case 3:
            window.scrollTo({
                top: 50 * unit,
                left: 0,
                behavior: "smooth"
            });
            break;
        case 4:
            window.scrollTo({
                top: 75 * unit,
                left: 0,
                behavior: "smooth"
            });
            break;
        case 5:
            window.scrollTo({
                top: 100 * unit,
                left: 0,
                behavior: "smooth"
            });
            break;
        default:
            return false;
    }
}