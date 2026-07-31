import newElement from './newElement';
import newPositionz from './newPosition';

export default class StartPage {
  constructor() {
    this.elementR;
  }

  static get markup() {
    return ` 
          <h1>Элементы для проверки</h1>              
          <button class="popoverz" 
                  data-toggle="popover" 
                  data-title="Заголовок popover" 
                  data-content="Содержимое popover -  любой HTML контент.">Верх</button>

          <button class="popoverz" 
                  data-toggle="popover" 
                  data-title="Важное сообщение" 
                  data-content="Правая сторона - другое содержимое.">Право</button>

          <button class="popoverz" 
                  data-toggle="popover" 
                  data-title="Информация" 
                  data-content="Низ. Важные данные.">Низ</button>

          <button class="popoverz" 
                  data-toggle="popover" 
                  data-title="Подсказка" 
                  data-content="Левая сторона. Прочтите это!">Лево</button>
       
          <h1>Проверка popover при прокрутке страницы</h1>
          <div>
              Все началось с шороха: легкого царапанья ботинка о каменно-кирпичный фасад дома № 283 
              по Восточной 17-й улице, принадлежавшего доктору Ласло Крайцлеру. Шорох этот — 
              знакомый всякому сорванцу с таким же детством, какое выпало мне, — легко достиг
              моего слуха сквозь закрытые окна моей комнаты. Случилось сие поздним воскресным
              вечером 20-го июня 1897 года — двадцать два года назад, чуть ли не ночь в ночь. 
              Я валялся на своей узкой койке, пытаясь учиться — но безуспешно. Тот вечер тоже 
              был чересчур напоен ветерками и ароматами весны, слишком омыт лунным светом, чтобы 
              всерьез рассматривать какое бы то ни было мышление (или же сон). Как это часто 
              бывает в Нью-Йорке, ранняя весна выпала сырой и холодной, недвусмысленно давая 
              понять, что далее нам опять уготована от силы неделя-другая хорошей погоды, прежде 
              чем на город обрушится летний зной. В то воскресенье поначалу прошел хороший дождь, 
              но уже к вечеру распогодилось, и природа по всему предвещала наступление погожих 
              деньков — жаль только недолгих. Так что если кому-то из вас придет в голову, что мне 
              посчастливилось уловить этот шорох снаружи отчасти потому, что я просто ждал 
              удобного повода улизнуть на улицу, я не стану этого отрицать. Однако ж, сколько 
              себя помню, я всегда очень внимательно прислушивался к звукам ночи, в какое бы 
              место меня ни заносило.
              Моя комната располагалась наверху — на четвертом этаже, который от роскошных 
              докторских гостиной и столовой отделяли два этажа и полмира, а от величественной, 
              однако несколько спартански обставленной спальни на третьем этаже — двенадцать 
              футов по вертикали. В мансардной простоте верхнего этажа (которую большинство, 
              не задумываясь, окрестило бы «покоями прислуги»), слуховыми окнами во двор 
              смотрела комната Сайруса Монтроуза, который делил со мной кучерские, равно как и 
              прочие домашние обязанности, а чуть сбоку имелась комнатка поменьше, кою мы 
              использовали под кладовую.
          </div>  
          `;
  }

  bindToDOM() {
    this.parentEl = document.querySelector('body');
    this.parentEl.innerHTML = StartPage.markup;
    this.revision();
  }

  jumpScreen(positionz){
    this.elementR.style.top = `${positionz.top}px`;
    this.elementR.style.left = `${positionz.left}px`;
  }

  revision() {
    const control = document.querySelectorAll('body');
    control[0].addEventListener('click', (event) => {
      event.preventDefault();
      if (this.elementR) {
        this.elementR.remove();
      }

      if (event.target.tagName == 'BUTTON') {
        this.elementR = newElement(event.target);
        this.elementR.classList.add('vision');

        const placeShow = event.target.textContent;
        const newPosition = newPositionz(event.target,this.elementR,placeShow);
        this.jumpScreen(newPosition);
      }
    });
  }
}