import { Request, Response, NextFunction } from "express";
import { productsController } from '../controller/productsController';


export class Routes {
    private products: productsController = new productsController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/products/:id').delete(this.products.Delete);
app.route('/products/get/search').get(this.products.Search);
app.route('/products/get/update').put(this.products.SearchForUpdate);
app.route('/products').put(this.products.Update);
app.route('/products/:id').get(this.products.GetEntityById);
app.route('/products').get(this.products.GetAllValues);
app.route('/products').post(this.products.Create);
app.route('/products/userid/created_by').get(this.products.GetNounCreatedBy);
     }

}