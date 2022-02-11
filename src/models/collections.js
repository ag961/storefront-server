'use strict';

class Collections {
  constructor(model){
    this.model = model;
  }

  async read(){
    let records = await this.model.findAll({});
    return records
  }
}