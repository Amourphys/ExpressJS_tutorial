import express from 'express' // импорт фрэймворка express.js
import mongoose from 'mongoose' // библиотека для работы с базой данных MongoDB
import  router from './router.js'
import fileupload from 'express-fileupload' // библиотека для работы с файлами

const PORT = 5000;                 // установка порта

const app = express()              // инициализация переменной для работы с express.js
const DB_URL = 'mongodb+srv://Iliya:gymantolof@cluster0.ndhrb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'  // адрес кластера базы данных MongoDB

app.use(express.json())           // use - функция для использования различных методов express, подключение пакета JSON
app.use(express.static('static'))  // подключение метода static
app.use(fileupload({}))  // подключение fileupload
app.use('/api', router)  // подключение маршрутизации

async function startApp() {  // функция для работы с БД
    try {
        await mongoose.connect(DB_URL) // соединение с БД через обертку mongoose
        app.listen(PORT, () => console.log('server started on port ' + PORT)) // прослушка работы с сервером
    } catch (e) {
        console.log(e)
    }
}

startApp(); // запуск функции для работы с БД



