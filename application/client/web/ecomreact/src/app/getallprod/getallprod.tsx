import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./getallprod.scss";
import  {service}   from './getallprod.service';

class Getallprod extends React.Component<any, any> {
    columnDefs: any = [
        { headerName: 'name', field: 'name' },
        { headerName: 'description', field: 'description' },
        { headerName: 'price', field: 'price' },
        { headerName: 'availability', field: 'availablity' },
        { headerName: 'specifications', field: 'specifications' },
    ];
    gridApi: any;
    gridColumnApi: any;
    test = new service ("");
    constructor(props:any){
    super(props);
    this.onRowSelected = this.onRowSelected.bind(this)
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
    this.GetAllValues();
    }
    GetAllValues  () {
    this.test.GetAllValues().then((data:any) => {
    this.setState({rowData:data.data})
    },
    (error:any) => {
    console.log('Error', error);
    });
    }
    onRowSelected(event:any)
    {
    this.props.history.push({pathname:"/updelprod",state:{id : event.data}})
    }
    onGridReady(params :any)
    {
    this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }

    render(){
    return(
    <>
        <h2 className="screen-align">getallprod</h2>
        <div>
    <div id="template-ioxd">
        <div id="template-ir5s" onClick={()=>this.GetAllValues()}className="ag-theme-material" style={{height: '500px',
            width: '100%'}} >
            <AgGridReact columnDefs={this.columnDefs} pagination={true}
            onGridReady={this.onGridReady} paginationPageSize={5} domLayout={
            "autoHeight"} animateRows={true}defaultColDef={{sortable: true, filter: true }} rowData={this.state.rowData}
            rowSelection={ "single"} onRowSelected={this.onRowSelected }></AgGridReact>
        </div>
    </div>
</div>
    </>
    );
    };
    };

    export default Getallprod;