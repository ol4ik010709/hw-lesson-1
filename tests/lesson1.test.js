const { task1Answer, task2Answer, task3Answer } = require('../solution/solution');

describe('Урок 1 — Змінні та типи даних', () => {

  test('Задача 1: правильна назва змінної', () => {
    expect(task1Answer).not.toBeNull();
    expect(task1Answer).toBe(3);
  });

  test('Задача 2: помилка при переприсвоєнні const', () => {
    expect(task2Answer).not.toBeNull();
    expect(task2Answer).toBe(true);
  });

  test('Задача 3: конкатенація числа та рядка', () => {
    expect(task3Answer).not.toBeNull();
    expect(String(task3Answer)).toBe('2020');
  });

});
