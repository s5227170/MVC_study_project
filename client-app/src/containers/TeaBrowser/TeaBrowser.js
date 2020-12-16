import React, { Component } from 'react';
import axios from 'axios';

import classes from './TeaBrowser.module.css';
import TeaItem from '../../components/TeaItem/TeaItem';

class TeaBrowser extends Component {
    //The Tea Browser will be inside this class, it will include requests
    //to get the data about the different types of tea and will set the
    //state to be the response. First a database is required and a tea submission
    //form, which will be created with a specific link that will recirect the admin
    //to a form submission page.
    state = {
        products: []
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/teaproducts')
            .then(response => {
                this.setState({ products: response.data });
            })
    }

    render() {
        const teaItems = this.state.products.map(item => {
            return <TeaItem img={item.imagePath} name={item.title} price={item.price}/>
        })
        return (
            <div className={classes.TeaBrowser}>
                {teaItems}
            </div>
        );
    }
}

export default TeaBrowser;