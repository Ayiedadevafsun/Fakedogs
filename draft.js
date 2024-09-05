// Установка начального количества билетов
let vouchersLeft = 2902;

// Функция, которая будет уменьшать количество билетов и обновлять отображаемое значение на странице
function decreaseVouchers() {
  const decreaseBy = Math.floor(Math.random() * 3) + 1; // Генерация случайного числа от 1 до 3
  vouchersLeft -= decreaseBy; // Уменьшение количества билетов
  updateVouchersDisplay(); // Обновление отображаемого значения
}

// Функция для обновления отображаемого значения количества билетов на странице
function updateVouchersDisplay() {
  const vouchersDisplay = document.querySelector('.text-1xl.py-2.text-center'); // Выбор элемента на странице
  vouchersDisplay.textContent = `${vouchersLeft} Vouchers left`; // Обновление текста
}

// Установка интервала для вызова функции уменьшения билетов
setInterval(decreaseVouchers, Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000); // Вызов каждые 2-5 секунд
document.addEventListener('DOMContentLoaded', function() {

  const minNumber = 100000;
  const maxNumber = 500000;
  const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
  const roundedNumber = Math.round(randomNumber / 1000) * 1000;
  const formattedNumber = roundedNumber.toLocaleString('ru-RU', {
      useGrouping: true
  });

  // Сохранение сгенерированного числа в cookie-файлы
  const cookieName = 'generated_number';
  const cookieValue = formattedNumber;
  const cookieExpiration = new Date(new Date().getTime() + (7 * 24 * 60 * 60 * 1000)); // Срок действия cookie - 7 дней
  document.cookie = `${cookieName}=${cookieValue}; expires=${cookieExpiration.toUTCString()}; path=/`;

  const textElement = document.getElementById('dogs_value');
  textElement.textContent = formattedNumber;

});