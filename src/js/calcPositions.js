export default function calcPositions(element,tooltip,whr) {
  const elementRect = element.getBoundingClientRect();
  const tooltipRect = tooltip.getBoundingClientRect();

  // Извлекаем базовые размеры и позиции
  const triggerWidth = elementRect.width;
  const triggerHeight = elementRect.height;
  const popoverWidth = tooltipRect.width;
  const popoverHeight = tooltipRect.height;

  const scrollTop = window.scrollY;
  const scrollLeft = window.scrollX;

  let top, left;

  switch (whr) {
  case 'south':
    // Popover над element, по центру горизонтально
    top = elementRect.top + scrollTop - popoverHeight - 10;
    left = elementRect.left + scrollLeft + (triggerWidth - popoverWidth) / 2;
    break;

  case 'east':
    // Popover справа от element, по центру вертикально
    top = elementRect.top + scrollTop + (triggerHeight - popoverHeight) / 2;
    left = elementRect.left + scrollLeft + triggerWidth + 10;
    break;

  case 'north':
    // Popover под element, по центру горизонтально
    top = elementRect.top + scrollTop + triggerHeight + 10;
    left = elementRect.left + scrollLeft + (triggerWidth - popoverWidth) / 2;
    break;

  case 'west':
    // Popover слева от element, по центру вертикально
    top = elementRect.top + scrollTop + (triggerHeight - popoverHeight) / 2;
    left = elementRect.left + scrollLeft - popoverWidth - 10;
    break;

  default:
    // По умолчанию — как для 'top'
    top = elementRect.top + scrollTop - popoverHeight - 10;
    left = elementRect.left + scrollLeft + (triggerWidth - popoverWidth) / 2;
  }

  return {
    top: Math.round(top), // Округляем до целых пикселей
    left: Math.round(left) // для стабильного позиционирования
  };

}