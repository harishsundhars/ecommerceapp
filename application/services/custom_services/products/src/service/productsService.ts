import { Request, Response } from 'express';
import {productsDao} from '../dao/productsDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';

















let products = new productsDao();

export class productsService {
    
    constructor() { }
    
    public  Delete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into productsService.ts: Delete')
     let  productsId = req.params.id;
     products.Delete(productsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from productsService.ts: Delete')
             
             
            callback(response);

         });
    }
    
public  Search(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into productsService.ts: Search')
     let  productsData = req.query;
     products.Search(productsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from productsService.ts: Search')
             
             
            callback(response);

         });
    }
    
public  SearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into productsService.ts: SearchForUpdate')
     let  productsData = req.body;
     products.SearchForUpdate(productsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from productsService.ts: SearchForUpdate')
             
             
            callback(response);

         });
    }
    
public  Update(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into productsService.ts: Update')
     let  productsData = req.body;
     products.Update(productsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from productsService.ts: Update')
             
             
            callback(response);

         });
    }
    
public  GetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into productsService.ts: GetEntityById')
     let  productsId = req.params.id;
     products.GetEntityById(productsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from productsService.ts: GetEntityById')
             
             
            callback(response);

         });
    }
    
public  GetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into productsService.ts: GetAllValues')
     
     products.GetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from productsService.ts: GetAllValues')
             
             
            callback(response);

         });
    }
    
public  Create(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into productsService.ts: Create')
     let  productsData = req.body;
     products.Create(productsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from productsService.ts: Create')
             
             
            callback(response);

         });
    }
    
public  GetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into productsService.ts: GetNounCreatedBy')
     let  productsData = { created_by: req.query.createdby };
     products.GetNounCreatedBy(productsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from productsService.ts: GetNounCreatedBy')
             
             
            callback(response);

         });
    }
    
    
    
    
}