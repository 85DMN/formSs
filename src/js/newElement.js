export default function newElement(newPart) {
  const connect = {
    'Верх': 'south', 'Низ': 'north', 'Лево': 'west', 'Право': 'east'
  };

  const popover = document.createElement('div');
  popover.className = 'popover';

  const title = newPart.dataset.title;
  const content = newPart.dataset.content;
  const placement = connect[newPart.textContent] || 'south';

  const arrow = document.createElement('div');
  arrow.className = 'popover-arrow';
  popover.append(arrow);

  if (title) {
    const header = document.createElement('h3');
    header.className = 'popover-header';
    header.textContent = title;
    popover.append(header);
  }

  const body = document.createElement('div');
  body.className = 'popover-body';
  body.innerHTML = content || '';
  popover.append(body);

  popover.classList.add(placement);//##

  document.body.append(popover);//###

  return popover;
}