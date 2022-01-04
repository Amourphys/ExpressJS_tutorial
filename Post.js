import mongoose from 'mongoose' // импорт mongoose для работы с БД MongoDB

const Post = new mongoose.Schema({  // схема отправки запроса в БД
    author: {type: String, required: true},  // необходимые поля в виде объектов с ключ-значение
    title: {type: String, required: true},
    content: {type: String, required: true},
    picture: {type: String}
})

export  default mongoose.model('Post', Post)  // модель для отправки запроса