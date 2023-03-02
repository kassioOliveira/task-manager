const List = require("../model/List");
const Task = require("../../tasks/model/Task");

class DeleteManyListService {

    async deleteManyList(ids,user){

        try {
            const lists = await List.deleteMany({user_id:user.id,_id:{$in:ids}});

            const tasks = await Task.updateMany({user_id:user.id,list_id:{$in:ids}},{list_id:""});


            return lists;
        } catch (error) {
            throw new Error({error:error.message});
        }
    }
}

module.exports = DeleteManyListService;