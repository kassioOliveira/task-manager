const List = require("../model/List");

class UpdateListService {

    async updateList(id,user,data){

        try {
            const list = await List.updateOne({_id:id,user_id:user.id},data);

            return list;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

module.exports = UpdateListService;