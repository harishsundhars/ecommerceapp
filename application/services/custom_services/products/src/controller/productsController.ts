import { Request, Response } from 'express';
import { productsService } from '../service/productsService';
import { CustomLogger } from '../config/Logger'
let products = new productsService();

export class productsController {
    
    constructor() { }
    
    public Delete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    products.Delete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into productsController.ts: Delete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from productsController.ts: Delete');
    })}
public Search(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    products.Search(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into productsController.ts: Search');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from productsController.ts: Search');
    })}
public SearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    products.SearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into productsController.ts: SearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from productsController.ts: SearchForUpdate');
    })}
public Update(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    products.Update(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into productsController.ts: Update');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from productsController.ts: Update');
    })}
public GetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    products.GetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into productsController.ts: GetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from productsController.ts: GetEntityById');
    })}
public GetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    products.GetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into productsController.ts: GetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from productsController.ts: GetAllValues');
    })}
public Create(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    products.Create(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into productsController.ts: Create');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from productsController.ts: Create');
    })}
public GetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    products.GetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into productsController.ts: GetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from productsController.ts: GetNounCreatedBy');
    })}


}