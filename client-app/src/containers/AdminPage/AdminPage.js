import React, { Component } from 'react';

import classes from './AdminPage.module.css';
import axios from 'axios';
import ProductListTable from '../../components/ProductListTable/ProductListTable';
import Modal from '../../components/UI/Modal/Modal';
import UploadButton from '../../components/UI/UploadProductButton/UploadProductButton';
import ImageUploader from '../ImageUploader/ImageUploader';
//In order to change the styling go to logo.module.css and textlogo.module.css
//There you can adjust the logo background color
//Implement Flexbox

class AdminPage extends Component{
    state={
        Products: [],
        UploadProduct: {
            Id: '0'
        },
        viewing: false

    };

    modalViewHandler = () => {
        this.setState({viewing: true});
    }

    modalViewCancelHandler = () => {
        this.setState({viewing: false});
    }

    componentDidMount(){
        axios.get('http://localhost:5000/api/TeaProducts').then(response => {
            this.setState({
                Products: response.data
            });
        });
    }

    render(){
        return(
            <div className={classes.AdminLayout}>
                <div className={classes.AdminLayoutNavigation}>   
                    <UploadButton clicked={this.modalViewHandler}/>
                    <div className={classes.AdminNavbarItems}>
                        <input type="text"/>
                        <p><button>Search</button></p>      
                    </div>    
                </div>
                <div className={classes.AdminLayoutBody}>
                    <Modal 
                        show={this.state.viewing}
                        modalClosed={this.modalViewCancelHandler}>
                            <ImageUploader/>
                    </Modal>
                    <ProductListTable data={this.state.Products}/>
                </div>
            </div>
        )
    }
}

export default AdminPage;