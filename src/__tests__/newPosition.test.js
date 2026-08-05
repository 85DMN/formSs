import calcPositions from '../js/calcPositions.js';

describe('calcPositions', () => {
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
    const position = calcPositions(trigger, popover, 'Верх');

    expect(position.top).toBe(30);
    expect(position.left).toBe(175);
  });

  test('рассчет позиции для placement="Право"', () => {
    const position = calcPositions(trigger, popover, 'Право');

    expect(position.top).toBeCloseTo(30); // 100 -15
    expect(position.left).toBe(175);
  });

  test('рассчет позиции для placement="Низ"', () => {
    const position = calcPositions(trigger, popover, 'Низ');

    expect(position.top).toBe(30);
    expect(position.left).toBe(175); // 175
  });

  test('рассчет позиции для placement="лево"', () => {
    const position = calcPositions(trigger, popover, 'Лево');

    expect(position.top).toBeCloseTo(30); // 85
    expect(position.left).toBe(175);
  });

  test('использование default placement="Верх" при неверном значении', () => {
    const position = calcPositions(trigger, popover, 'invalid');

    console.log(position)

    expect(position.top).toBe(30);
    expect(position.left).toBe(200 + (50 - 100) / 2);
  });
});
