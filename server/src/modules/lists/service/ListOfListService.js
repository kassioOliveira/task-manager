const List = require("../model/List");


class ListOfListService {

    async showLists(user){

        try {
            const lists = await List.find({user_id:user.id});

            return lists;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

module.exports = ListOfListService;