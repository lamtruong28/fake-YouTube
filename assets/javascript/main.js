window.addEventListener('load', ()=> {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    
    const loading = $('.loading');
    const btnSearch = $('.header__search-btn');
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
    

    btnSearch.onclick = () => {
        if(inputSearch.value.trim().length != 0) {
            loading.classList.add('active');
            setTimeout(() => {
                loading.classList.remove('active');
            },1000);
        };
    };
    
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
    
    // X??? l?? khi b???m v??o item kh??ng ???n menu:
    itemCreate.onclick = (e) => {
        e.stopPropagation();
    };
    
    itemMoreYTB.onclick = (e) => {
        e.stopPropagation();
    }; 
    
    itemNotify.onclick = (e) => {
        e.stopPropagation();
    }; 
    
    // X??? l?? khi click chu???t ra ngo??i s??? ???n menu:
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
    
            // Thay ?????i m??u icon
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
    
    
    
    btnNext.addEventListener('click', () => {
        handleMove('next');
    });
    
    btnBackHide.addEventListener('click', () => {
        handleMove('prev');
    });

    var x = 0;
    function handleMove(status) {
        if(status == 'next') {
            btnNext.classList.toggle('clicked');
            setTimeout(()=>{
                btnNext.classList.toggle('clicked');
            },250);
            btnBackHide.classList.remove('hide');
            categoryHot.classList.toggle('move');
            
            if(categoryHot.style.left == -500+'px' ) {
                categoryHot.style.left = `-750px`;
                btnNextHide.classList.add('hide');
            }else {
                categoryHot.style.left = `${x - 250}px`;
                x-=250;
            }
            return;
        }

        btnBack.classList.toggle('clicked');
        btnNextHide.classList.remove('hide');
        setTimeout(()=>{
            btnBack.classList.toggle('clicked');
        },250)
        if(categoryHot.style.left == -250+'px' ) {
            categoryHot.style.left = `0px`;
            btnBackHide.classList.add('hide');
        }else {
            categoryHot.style.left = `${x + 250}px`;
            x+=250;
        }
    }

    // JS category Item:
    categoryItems.forEach((item)=>{
        item.onclick = () => {
            $('.header__bottom-item-link.active').classList.toggle('active');
            item.classList.toggle('active');
        };
    });
    
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
            var changeBg = setTimeout(() => {
                itemContentImgs[index].src = `./assets/img/item(${index + 1}).webp`;
        
                // N???u trong tr?????ng h???p kh??ng c?? ???nh ?????ng khi hover th?? s??? d??ng ???nh n???n lu??n (???nh hi???n th??? khi load page) nh?? sau:
                itemContentImgs[index].onerror = ()=> {
                    itemContentImgs[index].src = `./assets/img/item(${index + 1})-bg.webp`;
                };
            },500);
            item.addEventListener('mouseleave' , () => {
                clearTimeout(changeBg);
            })
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
        historySearch.classList.add('active');
        inputSearch.focus();
    };
    
    btnCloseVK.onclick = (e) => {
        virtualKeyboard.classList.add('hide');
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
                        'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', "\\", // 2 d???u \\ => \
                        '', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'",
                        '', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '',
                        'Ctrl + Alt', ' ', 'Ctrl + Alt'];
    //Load k?? t??? l??n keyboard:
    btnVKs.forEach((e,i) => {
        if(i == 13 || i == 27 || i == 39 || i == 50)
            return; //k d??ng continue ???????c
        e.innerHTML = arrBtnVKNumber[i];
    });
    
    btnVKs.forEach((key,i) => {
        key.addEventListener('mousedown', () => {
            key.classList.toggle('clicked');
        });
        key.addEventListener('mouseup', () => {
            key.classList.toggle('clicked');
        });
    
        //x??? l?? g?? virtual keyboard:
        key.onclick = (e) => {
            if(i == 13 || i == 27 || i == 39 || i == 50 || i == 51 || i == 53)
                return;
            inputSearch.value += key.innerHTML;
            if(inputSearch.value.length != 0)
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
    
            if(key.classList.contains('clicked')) //ki???m tra xem btn shift c?? b???c kh??ng (c?? class clicked l?? b???c); 
                btnVKs.forEach((e,i) => {
                    if(i == 13 || i == 27 || i == 39 || i == 50)
                        return; //k d??ng continue ???????c
                    e.innerHTML = arrBtnVK[i];
                });
            else 
                btnVKs.forEach((e,i) => {
                    if(i == 13 || i == 27 || i == 39 || i == 50)
                        return; //k d??ng continue ???????c
                    e.innerHTML = arrBtnVKNumber[i];
                });
        };
    })
    
    btnBackspace.onclick = () => {
        var textCurrent = inputSearch.value;
        inputSearch.value = textCurrent.substr(0,inputSearch.value.length -1);
        if(inputSearch.value.length == 0) 
            btnClearText.classList.add('hide');
    }
    
    // Js display interface:
    
    const displays = $$('.display-content-item');
    const btnTheme = $('.menu__item-theme');
    const menuTheme = $('.interface-display');
    const btnBackTheme = $('.btn-back');
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
    
    // X??? l?? chuy???n theme:
    // const currentTheme = localStorage.getItem('theme');
    displays.forEach(e => {
        e.onclick = () => {
            $('.display-content-item.active').classList.remove('active');
            e.classList.add('active');
            menuTheme.classList.remove('active');
    
            if(e.classList.contains('theme-dark')){
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                textBtnTheme.innerHTML = 'T???i';
            }else {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                if(e.textContent.indexOf('Giao di???n s??ng') != -1)
                    textBtnTheme.innerHTML = 'S??ng';
                else
                    textBtnTheme.innerHTML = 'Giao di???n thi???t b???';
            };
        };
    });
    
    // Js x??a l???ch s??? t??m ki???m:
    const btnDeletes = $$('.header__search-history-delete');
    const contentHistorys = $$('.header__search-history-item-link');
    
    btnDeletes.forEach( (btn,i) => {
        btn.onclick = () => {
            btn.classList.add('clicked');
            handleClickBtbDel(i);
        };
    });
    
    function handleClickBtbDel (i) {
        contentHistorys[i].textContent = '???? x??a ????? xu???t';
        contentHistorys[i].style.color = "#666";
        contentHistorys[i].style.fontWeight = '400';
        contentHistorys[i].style.cursor = 'default';
    }
    
    // JS notify mobile:
    
    const btnNotifyMobile = $('.notify-mobile');
    const notifyIconWhite = $('.notification-icon-white')
    const notifyIconBlack = $('.notification-icon-black')
    
    const btnSearchMobile = $('.header__search-btn-mobile');
    const boxSearch = $('.header__search');
    const btnBackSearch = $('.btn-back-search');
    const btnCloseOptionUser = $('.header__user-option-btn-close');
    
    btnNotifyMobile.onclick = (e) => {
        itemNotify.classList.toggle('active');
        notifyIconWhite.classList.toggle('hide');
        notifyIconBlack.classList.toggle('hide');
        e.stopPropagation();
    }
    
    btnSearchMobile.onclick = (e) => {
        boxSearch.classList.add('active');
        inputSearch.focus();
        historySearch.classList.add('active');
        e.stopPropagation();
    }
    
    btnBackSearch.onclick = () => {
        boxSearch.classList.remove('active');
    }
    
    btnCloseOptionUser.onclick = () => {
        itemHeaderUser.classList.remove('active');
    }
















});