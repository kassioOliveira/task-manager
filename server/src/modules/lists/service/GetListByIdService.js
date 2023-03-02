const List = require("../model/List");

class GetListByIdService {

  async  listById(id,user) {

    try {
       const list = await List.findOne({user_id:user.id,_id:id});
       
       return list;
    } catch (error) {
        throw new Error(error.message);
    }
  }
}

module.exports = GetListByIdService;