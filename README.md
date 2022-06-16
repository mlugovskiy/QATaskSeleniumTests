# Тестовое задание QA Engineer
Тесты выполняются в браузере chrome в headless режиме(без открытия окна браузера).

## Установка

### 1. Браузер Chrome и Chromedriver

1. Должен быть установлен браузер Сhrome
2. Необходим исполняемый файл chromedriver.exe . Скачать chromedriver можно отсюда: https://chromedriver.storage.googleapis.com/index.html
Поместить исполняемый файл chromedriver.exe можно в любом предпочтительном месте в вашей системе.
3. Чтобы Selenium Webdriver смог найти chromedriver.exe, путь к исполняемому файлу chromedriver.exe должен быть добавлен в переменные среды PATH

### 2. Установка зависимостей из package.json
Для установки зависимостей из package.json, выполните команду из корневой папки проекта:
```
npm install
```

## Запуск тестов
Для запуска тестов используйте команду:
```
npm test
```