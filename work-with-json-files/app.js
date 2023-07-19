// через const books = require("./books"); - был сделан импорт базы с данными в текущий файл

const books = require("./books");


// Объявляем функцию invokeAction, делаем ее ассинхронной и делаем в нее передаем аргументы
const invokeAction = async ({action, id, title, author}) => {
    switch(action) {
        case "getAll":
            const allBooks = await books.getAll();
            // console.log(allBooks);
            console.log(allBooks[0]); 
            //вернут первый элемент массива

            break;
        default: 
            console.log("Unknown action");
    }
}

invokeAction({action: "getAll"});