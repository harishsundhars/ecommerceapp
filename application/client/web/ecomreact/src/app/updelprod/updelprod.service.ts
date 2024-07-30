import axios from 'axios';
import React from "react";
import { Web } from '../../shared/shared.service';



export class service extends React.Component { 



   Update=(products:any) => {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return axios.put(Web() + '/products' + `?jwt_token=${jwt_token}`, products);
    }
   Delete=(productsId:any) => {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return axios.delete(Web()+ '/products/' + productsId + `?jwt_token=${jwt_token}`);
    }
   GetEntityById=(productsId:any) => {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return axios.get(Web()+ '/products/' + productsId + `?jwt_token=${jwt_token}`);
    }
}