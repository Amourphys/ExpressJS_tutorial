import Post from "./Post.js";                // импорт шаблона с запросами
import FileService from "./FileService.js";  // импорт класса для работы с файлами

class PostService {                          // создание класса для работы с запросами
    async create(post, picture) {            // метод для создания запроса
        const fileName = FileService.saveFile(picture);              // сохранение файла используя класс для работы с файлами
        const createdPost = await Post.create({...post, picture: fileName});  // добавление файла к массиву с запросами
        return  createdPost;
    }

    async getAll() {                         // метод для получения запросов с БД
        const posts = await Post.find();
        return posts;
    }

    async getOne(id) {                        // метод для получения запроса по id
        if (!id) {
            throw new Error('Id not specified')
        }
        const post = await Post.findById(id);
        return post;
    }

    async update(post) {                     //  метод для редактирования запросов
        if (!post._id) {
            throw new Error('Id not specified')
        }
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true})  // возвращение запрса с новыми данными
        return updatedPost;
    }

    async delete(id) {                         //  метод для удаления запроса из БД
        if (!id) {
            throw new Error('Id not specified')
        }
        const post = await Post.findByIdAndDelete(id)
        return post;
    }
}

export default new PostService();