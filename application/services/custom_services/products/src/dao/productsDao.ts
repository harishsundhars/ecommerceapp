import * as mongoose from 'mongoose';
import productsModel from '../models/daomodels/products';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'




export class productsDao {
    private products = productsModel;

    

    constructor() { }
    
    public async Delete(productsId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into productsDao.ts: Delete');

    

    
    
    
    this.products.findByIdAndRemove(productsId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from productsDao.ts: Delete');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Search(productsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into productsDao.ts: Search');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(productsData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.products.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from productsDao.ts: Search');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async SearchForUpdate(productsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into productsDao.ts: SearchForUpdate');

    

    
    
    
    this.products.findOneAndUpdate({ _id: productsData._id }, productsData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from productsDao.ts: SearchForUpdate');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Update(productsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into productsDao.ts: Update');

    

    
    
    
    this.products.findOneAndUpdate({ _id: productsData._id }, productsData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from productsDao.ts: Update');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetEntityById(productsId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into productsDao.ts: GetEntityById');

    

    
    
    
    this.products.findById(productsId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from productsDao.ts: GetEntityById');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into productsDao.ts: GetAllValues');

    

    
    
    
    this.products.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from productsDao.ts: GetAllValues');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Create(productsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into productsDao.ts: Create');

    let temp = new productsModel(productsData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from productsDao.ts: Create');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetNounCreatedBy(productsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into productsDao.ts: GetNounCreatedBy');

    

    
    
    
    this.products.aggregate(([
                        { $match: { $and: [{ created_by: productsData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from productsDao.ts: GetNounCreatedBy');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}


}