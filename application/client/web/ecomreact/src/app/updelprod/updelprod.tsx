import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import "./updelprod.scss";
import  {service}   from './updelprod.service';

class Updelprod extends React.Component<any, any> {
    queryId: any;
    test = new service ("");
    constructor(props:any){
    super(props);
    this.state={
    products : {
    name: '',
    price: '',
    description: '',
    specifications: '',
    availablity: '',
    },
    
    rowData :[]
    } }


    handlechange = (e: any) => {
    if(e?.target){
    this.setState({ products: { ...this.state.products, [e.target.name]: e.target.value } })
    }
    }


    componentDidMount() {
    this.state.products.created_by = sessionStorage.getItem('email')||'{}';
    if(this.props.location.state){
 	 	this.queryId = this.props.location.state.id._id;
 	 	this.GetEntityById();
 	 	};
    }
    Update  () {
    this.test.Update(this.state.products).then((data:any) => {
        this.setState({
            products : {
            name: '',
            price: '',
            description: '',
            specifications: '',
            availablity: '',
            }});
            this.props.history.push({pathname:"/getallprod"})
    },
    (error:any) => {
    console.log('Error', error);
    });
    }
    Delete  () {
    this.test.Delete(this.queryId).then((data:any) => {
    // this.GetEntityById();
        this.setState({
            products : {
            name: '',
            price: '',
            description: '',
            specifications: '',
            availablity: '',
            }});
            this.props.history.push({pathname:"/getallprod"})
    },
    (error:any) => {
    console.log('Error', error);
    });
    }
    GetEntityById  () {
    this.test.GetEntityById(this.queryId).then((data:any) => {
    this.setState({products:data.data})
    },
    (error:any) => {
    console.log('Error', error);
    });
    }

    render(){
    return(
    <>
        <h2 className="screen-align">updelprod</h2>
        <div id="template-ighj">
    <div id="template-i4jb" className="gjs-row">
        <div id="template-ik3g" className="gjs-cell">
            <label id="template-iuhmq">name</label>
            <input type="text" id="template-i5m2o" onChange={this.handlechange}
            name="name" value={this.state.products.name}className="form-control " />
        </div>
        <div id="template-isnj" className="gjs-cell">
            <label id="template-i1i3k">description</label>
            <input type="text" id="template-ieyxx" onChange={this.handlechange}
            name="description" value={this.state.products.description}className="form-control "
            />
        </div>
        <div id="template-isbp" className="gjs-cell">
            <label id="template-ibbaz">price</label>
            <input type="text" id="template-icz1y" onChange={this.handlechange}
            name="price" value={this.state.products.price}className="form-control "
            />
        </div>
    </div>
    <div id="template-i9m7" className="gjs-row">
        <div id="template-i3eg" className="gjs-cell">
            <label id="template-iaggg">availability</label>
            <input type="text" id="template-iaab3" onChange={this.handlechange}
            name="availablity" value={this.state.products.availablity}className="form-control "
            />
            <button type="button" id="template-i58td" onClick={()=>this.Update()} className="btn btn-primary ">Update</button>
            <button type="button"
            id="template-i0ito" onClick={()=>this.Delete()} className="btn btn-primary "> delete</button>
        </div>
        <div id="template-izrh" className="gjs-cell">
            <label id="template-ihbzi">specifications</label>
            <div id="template-igcyg">
                <CKEditor id="ckeditorspan" editor={ClassicEditor} data={ this.state.products.specifications}
                config={{ removePlugins: [ "EasyImage", "ImageUpload", "MediaEmbed"] }}
                onChange={ ( event, editor )=>this.setState({products:{...this.state.products,specifications:editor.getData()}})}>
                    <textarea
                    name="content" id="ckeditortextarea"></textarea>
                </CKEditor>
            </div>
        </div>
        <div id="template-isbp" className="gjs-cell"></div>
    </div>
</div>
    </>
    );
    };
    };

    export default Updelprod;