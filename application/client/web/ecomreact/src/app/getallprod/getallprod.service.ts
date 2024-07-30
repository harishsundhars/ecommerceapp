import axios from 'axios';
import React from "react";
import { Web } from '../../shared/shared.service';



export class service extends React.Component { 



   GetAllValues= () => {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return axios.get(Web() + '/products' + `?jwt_token=${jwt_token}`);
    }
}