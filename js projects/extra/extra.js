const emails = ['VASYA@gmAil.com', 'iGoR@yandex.RU', 'netiD@hot.CoM'];

// => [ 'VASYA@gmAil.com', 'iGoR@yandex.RU', 'netiD@hot.CoM' ]

for (let i = 0; i < emails.length; i += 1) {
  const email = emails[i];

  // toLowerCase() — стандартный метод js,
  // преобразующий строку в нижний регистр
  const normalizedEmail = email.toLowerCase();
  // Заменяем значение
  emails[i] = normalizedEmail;
}

console.log(emails);