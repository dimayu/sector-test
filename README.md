# Тестовое задание

## Technologies used:
React
React-router
Axios
Redux

### ОБЩИЕ ТРЕБОВАНИЯ:

Приложение должно работать в chrome и firefox.
Разрешается использовать UI фреймворки по типу bootstrap.
Код должен быть чистым и читабельным.
Не должно быть необоснованного дублирования, всё должно распределяться по компонентам.
Код должен быть отформатирован в едином стиле.
Вёрстка должна совпадать с макетами figma.
Приложение должно быть написано на react.
Плюсом будет использование глобального state менеджера redux.
Приложение должно быть адаптировано под различные устройства.

### ОПИСАНИЕ API:
Список данных : [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)

### ОПИСАНИЕ ПРИЛОЖЕНИЯ:
При входе на страницу отображается таблица с данными.
На одной странице таблицы показывается только 10 записей.
Под таблицей располагаются элементы, показывающие количество страниц таблицы.
Кнопки “Назад” и “Далее” переключают страницы таблицы.
Переключение между страницами происходит без перезагрузки.
При нажатии на заголовки столбцов происходит сортировка записей (от большего к меньшему или по алфавиту).
В строке поиска можно ввести любое значение, и в таблице отобразится запись, в которой данное значение присутствует. Поиск по всем столбцам.
Страница таблицы должна отображаться в URL браузера.

[Макет Figma](https://www.figma.com/file/h68aleCipoiqqf6P8zDo6P/%D0%9C%D0%B0%D0%BA%D0%B5%D1%82-%D1%82%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%D1%8B-(Copy)?node-id=2%3A94&mode=dev)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

