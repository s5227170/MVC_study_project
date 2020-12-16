import React, { Component } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import classes from './ProductForm.module.css';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
//import { updateObject, checkValidity } from '../../shared/utility';


class ProductForm extends Component {
    state={
        ProductForm: {
            Title: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter Product Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            Description: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter Description'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            Price: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Enter Price'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            Date: {
                elementType: 'input',
                elementConfig: {
                    type: 'date',
                    placeholder: 'Enter Current Date'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            ImagePath: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Product Image URL'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            Reduced: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'true', displayValue: 'Reduced'},
                        {value: 'false', displayValue: 'N0'}
                    ]
                },
                value: '',
                validation: {},
                valid: true
            }
        },
        formIsValid: false,
        loading: false
        }
        

    formHandler = ( event ) => {
        event.preventDefault();
        this.setState( { loading: true } );
        const formData = {};
        for (let formElementIdentifier in this.state.ProductForm) {
            formData[formElementIdentifier] = this.state.ProductForm[formElementIdentifier].value;
        }
        console.log(formData);
        let randId = uuidv4();
        formData.id = randId;  
        console.log(formData); 
        axios.post( 'http://localhost:5000/api/teaproducts', formData)
            .then( response => {
                this.setState( { loading: false } );
                this.props.history.push( '/' );
            } )
            .catch( error => {
                this.setState( { loading: false } );
            } );
    }

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.ProductForm
        };
        const updatedFormElement = { 
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({ProductForm: updatedOrderForm, formIsValid: formIsValid});
    }

    formCancel = () => {
        this.props.history.goBack();
    }

    render(){
        const formElementsArray = [];
        for (let key in this.state.ProductForm) {
            formElementsArray.push({
                id: key,
                config: this.state.ProductForm[key]
            });
        }

        let form = (
            <form onSubmit={this.formHandler}>
                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <Button btnType="Danger" disabled={false} clicked={this.formCancel}>Back</Button>
                <Button btnType="Success" disabled={!this.state.formIsValid}>Submit</Button>
            </form>
        );
        if ( this.state.loading ) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ProductForm}>
                <h4>Enter Product Details</h4>
                {form}
            </div>
        );
    } 
}
    


export default ProductForm;
