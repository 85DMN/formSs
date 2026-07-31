import newPositionz from '../js/newPosition.js';

describe('newPositionz', () => {
  let trigger, popover;

  beforeEach(() => {
    trigger = document.createElement('button');
    trigger.style.position = 'absolute';
    document.body.appendChild(trigger);

    popover = document.createElement('div');
    document.body.appendChild(popover);

    // Мокируем getBoundingClientRect для trigger
    jest.spyOn(trigger, 'getBoundingClientRect').mockReturnValue({
      x: 200,
      y: 100,
      width: 50,
      height: 30,
      top: 100,
      right: 250,
      bottom: 130,
      left: 200
    });

    // Мокируем getBoundingClientRect для popover
    jest.spyOn(popover, 'getBoundingClientRect').mockReturnValue({
      x: 0,
      y: 0,
      width: 100,
      height: 60,
      top: 0,
      right: 100,
      bottom: 60,
      left: 0
    });
  });

  afterEach(() => {
    document.body.removeChild(trigger);
    document.body.removeChild(popover);
  });

  test('рассчет позиции для placement="Верх"', () => {
    const position = newPositionz(trigger, popover, 'Верх');

    expect(position.top).toBe(100 + window.scrollY - 60 - 5); 
    expect(position.left).toBe(195);
  });

  test('рассчет позиции для placement="Право"', () => {
    const position = newPositionz(trigger, popover, 'Право');

    expect(position.top).toBeCloseTo(100 + (30 - 60) / 2 + window.scrollY); // 100 -15
    expect(position.left).toBe(200 + 50 + 5); 
  });

  test('рассчет позиции для placement="Низ"', () => {
    const position = newPositionz(trigger, popover, 'Низ');

    expect(position.top).toBe(100 + 30 + 5 + window.scrollY); 
    expect(position.left).toBe(200 + (50 - 100) / 2); // 175
  });

  test('рассчет позиции для placement="лево"', () => {
    const position = newPositionz(trigger, popover, 'Лево');

    expect(position.top).toBeCloseTo(100 + (30 - 60) / 2 + window.scrollY); // 85
    expect(position.left).toBe(200 - 100 - 5);
  });

  test('использование default placement="Верх" при неверном значении', () => {
    const position = newPositionz(trigger, popover, 'invalid');

    expect(position.top).toBe(100 + window.scrollY - 60 - 5);
    expect(position.left).toBe(200 + (50 - 100) / 2);
  });
});
