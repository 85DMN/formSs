import calcPositions from './calcPositions';

export default function showTooltip(message, element) {

  const position = {
    'login': 'south', 'email': 'north', 'credit-card': 'west', 'comments': 'east'
  };

  const tooltipElement = document.createElement('DIV');
  tooltipElement.classList.add('form-error');

  const header = element.name;
  const content = message;

  //стрелка
  const contOf = document.createElement('DIV');
  contOf.className = 'tooltipE1-arrow';
  tooltipElement.append(contOf);

  //заголовок
  if (header) {
    const first = document.createElement('h4');
    first.className = 'tooltipE1-header';
    first.textContent = header;
    tooltipElement.append(first);
  }

  //тело
  const second = document.createElement('DIV');
  second.className = 'tooltipE1-body';
  second.innerHTML = content || '';
  tooltipElement.append(second);

  const whr = position[header] || 'south';

  tooltipElement.classList.add(position[header]);

  // const id = performance.now();//время в течение которого открыта страница

  document.body.appendChild(tooltipElement);//добавление элемента подсказки
  const m = calcPositions(element,tooltipElement,whr);

  tooltipElement.style.left = m.left + 'px';
  tooltipElement.style.top = m.top + 'px';//точка по высоте
}