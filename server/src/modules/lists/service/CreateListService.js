const List = require("../model/List");

class CreateListService{

    async createList(list){

        try {
            const list = await List.create(list);

            return list;
        } catch (error) {
            throw new Error(error.message);
        }
    }

}

module.exports = CreateListService;