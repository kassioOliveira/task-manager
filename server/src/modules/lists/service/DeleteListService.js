const List = require("../model/List");
const Task = require("../../tasks/model/Task");


class DeleteListService {

    async DeleteList(id,user){

        try {
            const listDeleted = await List.deleteOne({user_id:user.id ,_id:id});
            const task = await Task.updateMany({user_id:user.id,list_id:id},{list_id:""});
            return listDeleted;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

module.exports = DeleteListService;