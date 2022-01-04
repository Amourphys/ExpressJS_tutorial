import * as uuid from 'uuid'   // импорт модуля для генерирования абсолютно уникальных id
import * as path from 'path'   // стандартный NodeJS модуль для работы с путями

class FileService {            // создание класса для работы с файлами
     saveFile(file) {          // создание метода для загрузки файла на компьбтер в снециально выбранную папку
        try {
            const fileName = uuid.v4() + '.jpg';                            // создание айдишника для изображения
            const filePath = path.resolve('static', fileName);   // путь для размещения файла
            file.mv(filePath);                                               // функция mv - move для перемещения файла и передача пути
            return fileName;
        } catch (e) {
            console.log(e)
        }
    }
}

export default new FileService();