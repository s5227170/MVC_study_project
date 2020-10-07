import React, { Component } from 'react';

import classes from './TeaBrowser.module.css';
import TeaItem from '../../components/TeaItem/TeaItem';

class TeaBrowser extends Component{
    //The Tea Browser will be inside this class, it will include requests
    //to get the data about the different types of tea and will set the
    //state to be the response. First a database is required and a tea submission
    //form, which will be created with a specific link that will recirect the admin
    //to a form submission page.
    state = {

    }
    render() {
        return(
            <div className={classes.TeaBrowser}>
                <TeaItem img='' name='Tea 1' price='1$'/>
                <TeaItem img='' name='Tea 2' price='2$'/>
                <TeaItem img='' name='Tea 3' price='3$'/>
                <TeaItem img='' name='Tea 4' price='4$'/>
                <TeaItem img='' name='Tea 1' price='1$'/>
                <TeaItem img='' name='Tea 2' price='2$'/>
                <TeaItem img='' name='Tea 3' price='3$'/>
                <TeaItem img='' name='Tea 4' price='4$'/>
                <TeaItem img='' name='Tea 1' price='1$'/>
                <TeaItem img='' name='Tea 2' price='2$'/>
                <TeaItem img='' name='Tea 3' price='3$'/>
                <TeaItem img='' name='Tea 4' price='4$'/>
                <TeaItem img='' name='Tea 1' price='1$'/>
                <TeaItem img='' name='Tea 2' price='2$'/>
                <TeaItem img='' name='Tea 3' price='3$'/>
                <TeaItem img='' name='Tea 4' price='4$'/>
                <TeaItem img='' name='Tea 1' price='1$'/>
                <TeaItem img='' name='Tea 2' price='2$'/>
                <TeaItem img='' name='Tea 3' price='3$'/>
                <TeaItem img='' name='Tea 4' price='4$'/>
                <TeaItem img='' name='Tea 1' price='1$'/>
                <TeaItem img='' name='Tea 2' price='2$'/>
                <TeaItem img='' name='Tea 3' price='3$'/>
                <TeaItem img='' name='Tea 4' price='4$'/>
            </div>
        );
    }
}

export default TeaBrowser;