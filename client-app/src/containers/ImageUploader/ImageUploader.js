import React,{ Component } from 'react';
import { storage } from '../../firebase/index';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import classes from './ImageUploader.module.css';

class ImageUploader extends Component{
    state={
        image: null,
        url: '',
        progress: 0        
    }

    fileHandler = async e =>{
        console.log(e.target.files[0])
        if(e.target.files[0]){
            await this.setState({image: e.target.files[0]});
        }
        else console.log("error"); 
        console.log("image: " + this.state.image)       
    };
    
    submitHandler = () =>{
        const uploadTask = storage.ref(`images/${this.state.image.name}`).put(this.state.image);
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                this.setState({progress: progress});
            },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref("images")
                    .child(this.state.image.name)
                    .getDownloadURL()
                    .then(url => {
                        //from here you should copy the image to clipboard
                        this.setState({url: url})
                        alert("SUCCESS!")
                    });
            }
        )
        //Add a Success alert and make a "Continue" button in order to open
        //the final part of the form. Dont forget to add a "Copy to clipboard"
        //button as well for the next step, however the  URL may be passed for
        //copying as a prop to the form container as well
    };

    //In this handler implement the "Continue Event, routing is required"
    continueHandler = () => {
        this.props.history.push('/ProductForm');      
    }

    alertConfirm = () => {
        if(this.state.image){
            alert("Copied to clipboard");
        }
        else{
            alert("No file has been uploaded");
        }
    }

    render(){
        return(
            <div className={classes.ImageUploaderModal}>
                <div className={classes.ImageUpload}>
                    <input type="file" onChange={this.fileHandler}/>
                    <button style={{width: "83px"}} onClick={this.submitHandler}>Upload</button>
                </div>
                <div className={classes.Progress}>
                    <label>Progress</label>
                    <div className={classes.progressBar}>
                        <progress value={this.state.progress} max="100"/>
                    </div>
                </div>                                       
                
                <hr className={classes.Line}/>
                <div className={classes.Continue}>
                    {
                        //on the onClick of the div bellow add functionalities for
                        //copying the url and forwarding to the full form
                    }
                    <CopyToClipboard text={this.state.url}>
                    <div className={classes.Continue}>
                        <label onClick={this.alertConfirm}>Copy to Clipboard</label>
                        <span className="material-icons">content_copy</span>
                    </div>
                    </CopyToClipboard>
                    {
                        //add onClick on the div bellow and add functionalities for
                        //copying the url and forwarding to the full form
                    }
                    <div className={classes.Continue} onClick={this.continueHandler}>
                        <label>Continue to Form</label>
                        <span className="material-icons">forward</span>
                    </div>
                </div>
            </div>
        )
    }

}

export default ImageUploader;