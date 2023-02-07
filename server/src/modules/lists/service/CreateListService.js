const List = require("../model/List");

class CreateListService{

    async createList(listCreate){

        try {
            const list = await List.create(listCreate);

            return list;
        } catch (error) {
            console.log(error)
            throw new Error(error.message);
        }
    }

}

module.exports = CreateListService;