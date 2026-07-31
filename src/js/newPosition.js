export default function newPositionz(button, popover, position) {
  const triggerRect = button.getBoundingClientRect();
  const popoverRect = popover.getBoundingClientRect();

  const triggerWidth = triggerRect.width;
  const triggerHeight = triggerRect.height;
  const popoverWidth = popoverRect.width;
  const popoverHeight = popoverRect.height;

  const scrollTop = window.scrollY;
  const scrollLeft = window.scrollX;

  let top, left;

  switch (position) {
  case 'Верх':
    top = triggerRect.top + scrollTop - popoverHeight - 10 + 5;
    left = triggerRect.left + scrollLeft + (triggerWidth - popoverWidth) / 2 + 20;
    break;

  case 'Право':
    top = triggerRect.top + scrollTop + (triggerHeight - popoverHeight) / 2;
    left = triggerRect.left + scrollLeft + triggerWidth + 10 - 5;
    break;

  case 'Низ':
    top = triggerRect.top + scrollTop + triggerHeight + 10 - 5;
    left = triggerRect.left + scrollLeft + (triggerWidth - popoverWidth) / 2;
    break;

  case 'Лево':
    top = triggerRect.top + scrollTop + (triggerHeight - popoverHeight) / 2;
    left = triggerRect.left + scrollLeft - popoverWidth - 10 + 5;
    break;

  default:
    top = triggerRect.top + scrollTop - popoverHeight - 5;
    left = triggerRect.left + scrollLeft + (triggerWidth - popoverWidth) / 2;
  }

  return {
    top: Math.round(top),
    left: Math.round(left)
  };
}
