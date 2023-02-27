const List = require("../model/List");

class DeleteManyListService {

    async deleteManyList(ids,user){

        try {
            const lists = await List.deleteMany({user_id:user.id,_id:{$in:ids}});

            return lists;
        } catch (error) {
            throw new Error({error:error.message});
        }
    }
}

module.exports = DeleteManyListService;