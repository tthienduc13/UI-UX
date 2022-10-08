const countGroup = document.querySelectorAll('.list .item').length;
let active = 0;

const load = () => {
    let itemDefault = document.getElementById('item_' + (active - 2 == -2 ? countGroup -2 : active - 2 == -1 ? countGroup - 1 : active -2 ))
    itemDefault.classList.remove('hide')
    let itemHide = document.getElementById('item_' + (active - 1 < 0 ? countGroup - 1 : active -1))
    itemHide.classList.remove('active')
    itemHide.classList.add('hide')
    let itemActive = document.getElementById('item_' + active)
    itemActive.classList.add('active');
    itemActive.classList.remove('hide');
}


document.getElementById('next').onclick = () => {
    active = active + 1 >= countGroup ? 0 :active +1;
    load()
}