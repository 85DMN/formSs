import newElement from '../js/newElement.js';

describe('newElement', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  test('создание Dom element с базовыми классами', () => {
    const element = document.createElement('button');
    element.dataset.toggle = 'popover';

    const popover = newElement(element);

    expect(popover).toBeInstanceOf(HTMLDivElement);
    expect(popover.className).toContain('popover');
    expect(popover.querySelector('.popover-arrow')).toBeInTheDocument();
  });

  test('добавление заголовка при наличии data-title', () => {
    const element = document.createElement('button');
    element.dataset.title = 'Спец проверка';
    element.dataset.content = 'test';

    const popover = newElement(element);
    const header = popover.querySelector('.popover-header');

    expect(header).toBeInTheDocument();
    expect(header.textContent).toBe('Спец проверка');
  });

  test('не добавление заголовка, если нет data-title', () => {
    const element = document.createElement('button');
    element.dataset.content = 'test';

    const popover = newElement(element);
    const header = popover.querySelector('.popover-header');

    expect(header).not.toBeInTheDocument();
  });

  test('добавление контента в тело', () => {
    const element = document.createElement('button');
    element.dataset.content = '<strong>Жирный текст</strong>';

    const popover = newElement(element);
    const body = popover.querySelector('.popover-body');

    expect(body).toBeInTheDocument();
    expect(body.innerHTML).toBe('<strong>Жирный текст</strong>');
  });

  test('добавление класса позиционирования', () => {
    const element = document.createElement('button')
    element.textContent = 'Низ';    

    const popover = newElement(element);

    expect(popover.classList.contains('north')).toBe(true);
  });
});
