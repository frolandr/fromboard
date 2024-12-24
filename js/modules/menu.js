/*============ Перемещение подчеркивания выбранного пункта меню =============*/
const burgerInput = document.querySelector(".burger__input");                  //выбираем
const overlay = document.querySelector('.overlay');                            //выбираем
const menu = document.querySelector('.menu');                                  //выбираем
const headerInfo = document.querySelector('.header__info');                    //выбираем

burgerInput.addEventListener('click', function () {                            //
    overlay.classList.toggle("active");                                        //меняем класс .active
    menu.classList.toggle("active");
    headerInfo.classList.toggle("active");
});


window.addEventListener('resize', () => {                                      //обработчик изменение размера
    if (window.innerWidth > 807) {
        if (overlay.classList.contains("active")) {                            //если найден, то
            burgerInput.checked = "";        
            overlay.classList.remove("active");                                         //
            menu.classList.remove("active");                                         //
            headerInfo.classList.remove("active");                                         //
        }
    }
});
   

// if (window.innerWidth < 768) {
// 	const burgerInput = document.querySelector(".burger__input");
// 	const menu = document.querySelector('.menu');
// 	const info = document.querySelector('.header__info');
// 	const butt = document.querySelector('.button--header');

// 	burgerInput.addEventListener('click', function () {
// 		//menu.classList.toggle('active');
// 		if (burgerInput.checked) {
// 			menu.style.display = "block";
// 			info.style.display = "block";
// 			//butt.style.display = "block";
// 			//console.log(burgerInput);
// 		}
// 		else {
// 			menu.style.display = "none";
// 			info.style.display = "none";
// 			//butt.style.display = "none";
// 		}

// 	});
// }

// console.log(burgerInput);

// if (burgerInput.checked) {
// 	console.log(burgerInput);
// 	console.log("dcfdsa");
// 	menu.style.display = "block";
// }


// console.log(burgerInput);
// if (burgerInput.checked == true) {
//     console.log(burgerInput);

//     // .menu {
// 	// 	order: 3;

// 		// margin-top: 11px;
// 		// padding: 11px 0;

// 		// border-top: 2px solid $color-purple400;
// 		// border-bottom: 2px solid $color-purple400;
// }


// (function() {
//     const menuItems = document.querySelectorAll(".menu__item");                //все пункты меню
//     const menuActive = document.querySelector('.menu__item--active');          //активный пункт меню
//     const menuEffect = document.querySelector('.menu__effect');                //подчеркивание
//     const menuInput = document.querySelector('.burger__input');                //input

//     function RecalcEffect(target) {                                            //функция для выделенного элемента
//         if (window.innerWidth < 768) {
//             menuEffect.style.display = "none";
//             //menuEffect.style.left = "-200px";
//         }
//         else {            
//             menuEffect.style.display = "block";                                //иначе размер дисплея > 767px
//             menuEffect.style.top = "auto";                                     //Top
//             menuEffect.style.left = target.offsetLeft + 'px';                  //Left
//             menuEffect.style.width = target.offsetWidth + 'px';                //Width
//         }
//     }
//     /*-----------------------------------------------------------------------*/
//     menuItems.forEach(item => {                                                //перебираем все пункты меню
//         item.addEventListener('click', function(event) {                       //вешаем на них обработчики "click"
//             menuItems.forEach(el => {                                          //перебираем и
//                 el.classList.remove("menu__item--active");                     //удаляем класс активного пункта
//             });
//             item.classList.toggle("menu__item--active");                       //устанавливаем класс активного пункта
//             RecalcEffect(item);                                                //двигаем подчеркивание
//         });
//     });
//     /*-----------------------------------------------------------------------*/
//     window.addEventListener('resize', () => {                                  //обработчик изменение размера
//         const menuActive = document.querySelector('.menu__item--active');      //выбираем активный пункт меню
//         if (menuActive)                                                        //если найден, то
//             RecalcEffect(menuActive);                                          //подстраиваем подчеркивающую линию
//     });
//     /*-----------------------------------------------------------------------*/
//     if (menuActive) 
//         RecalcEffect(menuActive);                                              //омечаем активный элемент
// })();
/*===========================================================================*/