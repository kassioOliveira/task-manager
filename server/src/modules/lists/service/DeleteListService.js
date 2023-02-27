const List = require("../model/List");


class DeleteListService {

    async DeleteList(id,user){

        try {
            const listDeleted = await List.deleteOne({user_id:user.id ,_id:id});

            return listDeleted;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

module.exports = DeleteListService;