export interface SInterface {

  getAll():Array<any>;

  getOne(id: string):any|null;

  getby(object: any):any|Array<any>|null

  postOne(object: any):boolean

}
