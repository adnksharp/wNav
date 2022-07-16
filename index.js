let menu = document.getElementById('menu'),
    nmenu = document.getElementById('nmenu'),
    nav = document.querySelector('nav'),
    show = false;

function SHNB() {
    show = !show;
    if (show)
        nav.removeAttribute('hidden');
    else
        nav.setAttribute('hidden', 'hidden');

}

menu.addEventListener('click', SHNB);
nmenu.addEventListener('click', SHNB);