/*------------------------------arrow----------------------------------*/
const btn_active = document.querySelector('.footer__change-language-btn.active');
const btn_no_active = document.querySelector('.footer__change-language-btn.no-active');
const active_lang = document.querySelector('.active-lang');
const arrow = document.querySelector('.footer__arrow-pic');

btn_active.addEventListener('click', () => {
    if (arrow.style.transform === 'rotate(0deg)') {
        arrow.style.transform = 'rotate(90deg)';
        btn_no_active.style.height = '0';
    } else {
        arrow.style.transform = 'rotate(0deg)';
        btn_no_active.style.height = '120px';
    }
});

btn_no_active.addEventListener('click', (event) => {
    let target = event.target;
    console.log(target);
    if (target.getAttribute('class') === 'footer__language') {
        let target_text = target.textContent;
        target.textContent = active_lang.textContent;
        active_lang.textContent = target_text;
        arrow.style.transform = 'rotate(90deg)';
        btn_no_active.style.height = '0';
    }
});