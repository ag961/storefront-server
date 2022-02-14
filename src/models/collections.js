'use strict';

class Collections {
  constructor(model){
    this.model = model;
  }

  async read(){
    let records = await this.model.findAll({
      order: [['id', 'ASC']]
    });
    return records
  }

  async create(json){
    let createdRecord = await this.model.create(json);
    return createdRecord;
  }

  async update(id, json){
    let record = await this.model.findOne({where: {id}})
    let updatedRecord = await record.update(json);
    return updatedRecord;
  }
}

module.exports = Collections;