const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnMic = $('.header__search-mic');
const btnCreate = $('.header__create');
const itemCreate = $('.header__create-menu');
const btnCreateIconWhite = $('.header__create-icon-white');
const btnCreateIconBlack = $('.header__create-icon-black');
const btnItemRights = $$('.header__right-item');

const btnMoreYTB = $('.header__moreYTB');
const itemMoreYTB = $('.header__moreYTB-list');
const btnYTBIconWhite = $('.header__moreYTB-icon-white');
const btnYTBIconBlack = $('.header__moreYTB-icon-black');

const btnNotify = $('.header__notification');
const itemNotify = $('.header__notification-container');
const btnNotifyIconWhite = $('.header__notification-white');
const btnNotifyIconBlack = $('.header__notification-black');

const btnHeaderUser = $('.header__user');
const itemHeaderUser = $('.header__user-option');
const HeaderUserAvatar = $('.header__user-container');

const containerCategoryHot = $('.header__bottom-container-category');
const categoryHot = $('.header__bottom-list');
const btnNext = $('.header-btn-next');
const btnBack = $('.header-btn-back');
const btnBackHide = $('.header__bottom-btn-move-back');
const btnNextHide = $('.header__bottom-btn-move-next');

const categoryItems = $$('.header__bottom-item-link');


btnMic.addEventListener('mousedown', () => {
    btnMic.classList.toggle('clicked');
});

btnMic.addEventListener('mouseup', () => {
    setTimeout(() => {
        btnMic.classList.toggle('clicked');
    },250);
});


btnItemRights.forEach( (btn, index) =>{
    btn.addEventListener('mousedown',()=>{
        btn.classList.toggle('clicked');
        i = index;
    });
    btn.addEventListener('mouseup',()=>{
        setTimeout(()=> {
            btn.classList.toggle('clicked');
        },200);
    });
});

btnCreate.onclick = () => {
    itemMoreYTB.classList.remove('active');
    itemCreate.classList.toggle('active');
    btnCreateIconWhite.classList.toggle('hide');
    btnCreateIconBlack.classList.toggle('hide');

    btnYTBIconWhite.classList.remove('hide');
    btnYTBIconBlack.classList.add('hide');
};

btnMoreYTB.onclick = () => {
    itemCreate.classList.remove('active');
    itemMoreYTB.classList.toggle('active');
    btnYTBIconWhite.classList.toggle('hide');
    btnYTBIconBlack.classList.toggle('hide');

    btnCreateIconBlack.classList.add('hide');
    btnCreateIconWhite.classList.remove('hide');
};

btnNotify.onclick = ()=> {
    itemCreate.classList.remove('active');
    itemMoreYTB.classList.remove('active');
    itemNotify.classList.toggle('active');
    btnNotifyIconWhite.classList.toggle('hide');
    btnNotifyIconBlack.classList.toggle('hide');

    btnCreateIconBlack.classList.add('hide');
    btnCreateIconWhite.classList.remove('hide');
    btnYTBIconWhite.classList.remove('hide');
    btnYTBIconBlack.classList.add('hide');
};

btnHeaderUser.addEventListener('click', (e)=> {
    itemMoreYTB.classList.remove('active');
    itemCreate.classList.remove('active');
    itemNotify.classList.remove('active');
    
    btnCreateIconBlack.classList.add('hide');
    btnCreateIconWhite.classList.remove('hide');
    btnYTBIconBlack.classList.add('hide');
    btnYTBIconWhite.classList.remove('hide');
    btnNotifyIconWhite.classList.remove('hide');
    btnNotifyIconBlack.classList.add('hide');

    itemHeaderUser.classList.toggle('active');
    e.stopPropagation();
});

btnHeaderUser.addEventListener('mousedown', ()=>{
    HeaderUserAvatar.classList.toggle('clicked');
});

btnHeaderUser.addEventListener('mouseup', ()=>{
    HeaderUserAvatar.classList.toggle('clicked');
});

// Xử lý khi bấm vào item không ẩn menu:
itemCreate.onclick = (e) => {
    e.stopPropagation();
};

itemMoreYTB.onclick = (e) => {
    e.stopPropagation();
}; 

itemNotify.onclick = (e) => {
    e.stopPropagation();
}; 

// Xử lý khi click chuột ra ngoài sẽ ẩn menu:
var i = 0;
document.addEventListener('click', function(event) {
        var isClickInside = btnItemRights[i].contains(event.target);
        var isClickInsideItemHeader = itemHeaderUser.contains(event.target);
        var isClickInsideVK = virtualKeyboard.contains(event.target)
        var isClickBtnOpenVK = btnOpenVK.contains(event.target)
        var isClickInputSearch = inputSearch.contains(event.target);
        var isClickInsideTheme = menuTheme.contains(event.target);

    if (!isClickInside) {
        itemCreate.classList.remove('active');
        itemMoreYTB.classList.remove('active');
        itemNotify.classList.remove('active');

        // Thay đổi màu icon
        btnCreateIconBlack.classList.add('hide');
        btnCreateIconWhite.classList.remove('hide');
        btnYTBIconWhite.classList.remove('hide');
        btnYTBIconBlack.classList.add('hide');
        btnNotifyIconWhite.classList.remove('hide');
        btnNotifyIconBlack.classList.add('hide');
    };

    if(!isClickInsideItemHeader) {
        itemHeaderUser.classList.remove('active');
    };
    
    if(!isClickInsideVK && !isClickBtnOpenVK && !isClickInputSearch)
        historySearch.classList.remove('active');
    
    if(!isClickInsideTheme){
        menuTheme.classList.remove('active');
    }
});



var x = -250;
btnNext.addEventListener('click', () => {
    btnNext.classList.toggle('clicked');
    setTimeout(()=>{
        btnNext.classList.toggle('clicked');
    },250);
    btnBackHide.classList.remove('hide');
    categoryHot.classList.toggle('move');
    if(x <= -500) {
        x = -754;
        setTimeout(()=> {
            btnNextHide.classList.add('hide');
        },250);
        categoryHot.style.transform = `translateX(${x}px)`;
    }else {
        x-= 250;
        categoryHot.style.transform = `translateX(${x}px)`;
    };
});

btnBackHide.addEventListener('click', () => {
    btnBack.classList.toggle('clicked');
    setTimeout(()=>{
        btnBack.classList.toggle('clicked');
    },250)
    if(x >= -500) {
        x = 0;
        setTimeout(()=>{
            btnBackHide.classList.add('hide');
        },250);
        categoryHot.style.transform = `translateX(${x}px)`;
    }else {
        x+= 250;
        btnNextHide.classList.remove('hide');
        categoryHot.style.transform = `translateX(${x}px)`;
    };
});

// JS category Item:
categoryItems.forEach((item)=>{
    item.onclick = () => {
        $('.header__bottom-item-link.active').classList.toggle('active');
        item.classList.toggle('active');
    };
});

// let pressed = false;
// let startX;
// let xx;

// containerCategoryHot.addEventListener('mousedown', e => {
//     pressed = true;
//     startX = e.offsetX - categoryHot.offsetLeft;
//     containerCategoryHot.style.cursor = 'grabbing'
// })

// containerCategoryHot.addEventListener('mouseenter', e => {
//     containerCategoryHot.style.cursor = 'grab'
// });

// containerCategoryHot.addEventListener('mouseup', e => {
//     containerCategoryHot.style.cursor = 'grab'
// });

// window.addEventListener('mouseup', ()=>{
//     pressed = false;
// })

// containerCategoryHot.addEventListener('mousemove', (e) => {
//     if(!pressed) return;
//     e.preventDefault();
//     xx = e.offsetX;
//     containerCategoryHot.style.transform = `translateX(${xx}px)`;
//     categoryHot.style.left = `${xx - startX}px`;
//     console.log(categoryHot.style.left)
// });

// JS Menu__category:

const btnMenus = $$('.header__btn-menu');
const MenuCategory = $('.menu__category');
const madal = $('.modal');

const btnMore = $('.menu__category-item-link-more');
const btnHide = $('.menu__category-item-link-hide');
const itemMore = $('.menu__category-list-more');

btnMenus.forEach(btn=>{
    btn.onmouseup = () => {
        MenuCategory.classList.toggle('hide');
        madal.classList.toggle('hide');
        btn.classList.remove('clicked');
    };
    btn.addEventListener('mousedown', () => {
        btn.classList.add('clicked');
    });

});

madal.onclick = () => {
    MenuCategory.classList.toggle('hide');
    madal.classList.toggle('hide');
};

btnMore.onclick = () => {
    itemMore.classList.toggle('hide');
    btnMore.classList.toggle('hide');
};

btnHide.onclick = () => {
    itemMore.classList.toggle('hide');
    btnMore.classList.toggle('hide');
};

// JS body content:

const itemContents = $$('.content-item');
const itemContentImgs = $$('.content-item-img .img');

itemContents.forEach( (item,index) => {
    item.addEventListener('mouseenter', () => {
        itemContentImgs[index].src = `./assets/img/item(${index + 1}).webp`;

        // Nếu trong trường hợp không có ảnh động khi hover thì sẽ dùng ảnh nền luôn (ảnh hiển thị khi load page) như sau:
        itemContentImgs[index].onerror = ()=> {
            itemContentImgs[index].src = `./assets/img/item(${index + 1})-bg.webp`;
        };
    });
    item.addEventListener('mouseleave', () => {
        itemContentImgs[index].src = `./assets/img/item(${index + 1})-bg.webp`;
        itemContentImgs[index].onerror = ()=> {
            itemContentImgs[index].src = '';
        };
    });

    item.addEventListener('mousedown', () => {
        item.classList.add('down');
    });
    item.addEventListener('mouseup', () => {
        setTimeout(()=>{
            item.classList.remove('down');
        },100);
    });
});

// JS btn show more content:
const btnShowMores = $$('.show-more');
const contentMiddle = $('.content-middle');
btnShowMores.forEach( btn => {
    btn.onclick = () => {
        btn.classList.add('clicked');
        contentMiddle.style.height = 'auto';
    };
})

// JS virtual keyboard:
const btnOpenVK = $('.header__search-key');
const btnCloseVK = $('.btn-close-vk');
const virtualKeyboard = $('.virtual-keyboard');
const inputSearch = $('.header__search-box');
const btnClearText = $('.header__search-key-clear');
const btnVKs = $$('.vk-btn');
const btnCapslock = $('.btn-capslock');
const btnShifts = $$('.btn-shift');
const btnBackspace = $('.btn-delete');

const historySearch = $('.header__search-history');

historySearch.onclick = e => {
    e.stopPropagation();
}

inputSearch.onclick = () => {
    historySearch.classList.add('active');
}

inputSearch.addEventListener('input', e => {
    if(inputSearch.value != "")
        btnClearText.classList.remove('hide');
    else
        btnClearText.classList.add('hide');
});

btnClearText.onclick = e => {
    btnClearText.classList.add('hide');
    inputSearch.value = '';
    inputSearch.focus();
    e.stopPropagation();
}

btnOpenVK.onclick = () => {
    virtualKeyboard.classList.toggle('hide');
    inputSearch.focus();
};

btnCloseVK.onclick = (e) => {
    virtualKeyboard.classList.add('hide');
    // inputSearch.focus();
    e.stopPropagation();
};

virtualKeyboard.onclick = () => {
    historySearch.classList.add('active');
}

const arrBtnVK = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '',
                    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|',
                    '', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"',
                    '', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '',
                    'Ctrl + Alt', '', 'Ctrl + Alt'];
const arrBtnVKNumber = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '',
                    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', "\\", // 2 dấu \\ => \
                    '', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'",
                    '', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '',
                    'Ctrl + Alt', ' ', 'Ctrl + Alt'];
//Load ký tự lên keyboard:
btnVKs.forEach((e,i) => {
    if(i == 13 || i == 27 || i == 39 || i == 50)
        return; //k dùng continue được
    e.innerHTML = arrBtnVKNumber[i];
});

btnVKs.forEach((key,i) => {
    key.addEventListener('mousedown', () => {
        key.classList.toggle('clicked');
    });
    key.addEventListener('mouseup', () => {
        key.classList.toggle('clicked');
    });

    //xử lý gõ virtual keyboard:
    key.onclick = (e) => {
        if(i == 13 || i == 27 || i == 39 || i == 50 || i == 51 || i == 53)
            return;
        inputSearch.value += key.textContent;
        if(inputSearch.value != "")
            btnClearText.classList.remove('hide');
        else
        btnClearText.classList.add('hide');
    }
}); 

btnCapslock.onclick = () => {
    btnCapslock.classList.toggle('clicked');
    btnVKs.forEach(key => {
        key.classList.toggle('uppercase');
    });
};

btnShifts.forEach( key => {
    key.onclick = () => {
        btnShifts[0].classList.toggle('clicked');
        btnShifts[1].classList.toggle('clicked');

        if(key.classList.contains('clicked')) //kiểm tra xem btn shift có bậc không (có class clicked là bậc); 
            btnVKs.forEach((e,i) => {
                if(i == 13 || i == 27 || i == 39 || i == 50)
                    return; //k dùng continue được
                e.innerHTML = arrBtnVK[i];
            });
        else 
            btnVKs.forEach((e,i) => {
                if(i == 13 || i == 27 || i == 39 || i == 50)
                    return; //k dùng continue được
                e.innerHTML = arrBtnVKNumber[i];
            });
    };
})

btnBackspace.onclick = () => {
    var textCurrent = inputSearch.value;
    inputSearch.value = textCurrent.substr(0,inputSearch.value.length -1);
}


// Kéo thả VK




// Js display interface:

const displays = $$('.display-content-item');
const btnTheme = $('.menu__item-theme');
const menuTheme = $('.interface-display');
const btnBackTheme = $('.btn-back');
const themDark = $('.theme-dark');
const themLight = $('.theme-light');
const header = $('#header');
const textBtnTheme = $('.item-theme-text');

btnTheme.onclick = (e) => {
    itemHeaderUser.classList.remove('active');
    menuTheme.classList.add('active');
    e.stopPropagation();
}

btnBackTheme.onclick = (e) => {
    btnBackTheme.classList.toggle('clicked');
    setTimeout(()=> {
        btnBackTheme.classList.toggle('clicked');
        itemHeaderUser.classList.add('active');
        menuTheme.classList.remove('active');
    },200);
    e.stopPropagation();
}

// Xử lý chuyển theme:
const currentTheme = localStorage.getItem('theme');
displays.forEach(e => {
    e.onclick = () => {
        $('.display-content-item.active').classList.remove('active');
        e.classList.add('active');
        menuTheme.classList.remove('active');

        if(e.classList.contains('theme-dark')){
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            textBtnTheme.innerHTML = 'Tối';
        }else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            if(e.textContent.indexOf('Giao diện sáng') != -1)
                textBtnTheme.innerHTML = 'Sáng';
            else
                textBtnTheme.innerHTML = 'Giao diện thiết bị';
        }

    }
});

// Js xóa lịch sử tìm kiếm:
const btnDeletes = $$('.header__search-history-delete');
const contentHistorys = $$('.header__search-history-item-link');

btnDeletes.forEach( (btn,i) => {
    btn.onclick = () => {
        btn.classList.add('clicked');
        handleClickBtbDel(i);
    }
})

function handleClickBtbDel (i) {
    contentHistorys[i].textContent = 'Đã xóa đề xuất';
    contentHistorys[i].style.color = "#666";
    contentHistorys[i].style.fontWeight = '400';
    contentHistorys[i].style.cursor = 'default';
}