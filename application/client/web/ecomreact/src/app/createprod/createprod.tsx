import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import "./createprod.scss";
import  {service}   from './createprod.service';

class Createprod extends React.Component<any, any> {
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
    }
    Create  () {
    this.test.Create(this.state.products).then((data:any) => {
        this.setState({
            products : {
            name: '',
            price: '',
            description: '',
            specifications: '',
            availablity: '',
            }});
    },
    (error:any) => {
    console.log('Error', error);
    });
    }

    render(){
    return(
    <>
        <h2 className="screen-align">createprod</h2>
        <div id="template-ivxf">
    <div id="template-i8ci" className="gjs-row">
        <div id="template-ivvd" className="gjs-cell">
            <label id="template-i3h5d">Name</label>
            <input type="text" id="template-iykiy" onChange={this.handlechange}
            name="name" value={this.state.products.name}className="form-control " />
        </div>
        <div id="template-il1d" className="gjs-cell">
            <label id="template-ip8li">description</label>
            <input type="text" id="template-i1jmj" onChange={this.handlechange}
            name="description" value={this.state.products.description}className="form-control "
            />
        </div>
        <div id="template-ijkh" className="gjs-cell">
            <label id="template-i3ygv">price</label>
            <input type="text" id="template-icbcs" onChange={this.handlechange}
            name="price" value={this.state.products.price}className="form-control "
            />
        </div>
    </div>
    <div id="template-iixg" className="gjs-row">
        <div id="template-iz9a" className="gjs-cell">
            <label id="template-iw02w">availabilty
                <br id="template-i5wjr"></br>
            </label>
            <input type="text" id="template-ios1i" onChange={this.handlechange} name="availablity"
            value={this.state.products.availablity}className="form-control " />
            <button type="button" id="template-i58bi" onClick={()=>this.Create()} className="btn btn-primary "> Create</button>
        </div>
        <div id="template-ixj3" className="gjs-cell">
            <label id="template-i89he">specifications</label>
            <div id="template-i981h">
                <CKEditor id="ckeditorspan" editor={ClassicEditor} data={ this.state.products.specifications}
                config={{ removePlugins: [ "EasyImage", "ImageUpload", "MediaEmbed"] }}
                onChange={ ( event: any, editor: { getData: () => any; } )=>this.setState({products:{...this.state.products,specifications:editor.getData()}})}>
                    <textarea
                    name="content" id="ckeditortextarea"></textarea>
                </CKEditor>
            </div>
        </div>
        <div id="template-ijkh" className="gjs-cell"></div>
    </div>
</div>
    </>
    );
    };
    };

    export default Createprod;