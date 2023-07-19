const books = require("./books");

const invokeAction = async ({action, id, title, author}) => {
    switch(action) {
        case "getAll":
            const allBooks = await books.getAll();
            console.log(allBooks);
            console.log(allBooks[0]);
            break;
        case "getById": 
            const oneBook = await books.getById(id);
            console.log(oneBook);
            break;
        case "add":
            const newBook = await books.add({title, author});
            console.log(newBook);
            break;
        case "updateById":
            const updateBook = await books.updateById(id, {title, author});
            console.log(updateBook);
            break;
        // case "removeById":
        //     const deleteBook = await books.removeById(id);
        //     console.log(deleteBook);
        //     break;
        default: 
            console.log("Unknown action");
    }
}

invokeAction({action: "getAll"});
invokeAction({action: "getById", id: "YxhM4QDxPeA3SmPHcEZPJ"});
invokeAction({action: "add", title: "Worm", author: "Джон"});
invokeAction({action: "updateById", id: "EFTT2Z1Qxwd9RLSiRGPvI", title: "Ward", author: "Джон Маккрей"});
// invokeAction({action: "removeById", id: "EFTT2Z1Qxwd9RLSiRGPvI"})