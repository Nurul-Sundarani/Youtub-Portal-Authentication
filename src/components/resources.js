import React, { Component } from 'react';
import Header from './header';

class Resources extends Component{
    render(){
        return(
            <div>
                <Header />
                <ul className="list-group">
                    <li className="list-group-item">Instructions : This is the Home Page. Click on Sign In Button to access the YouTube Portal.</li>
                    <li className="list-group-item">If the button displays Sign In. Try Clicking YouTube Portal , You won't be allowed to view it.</li>
                    <li className="list-group-item">If the button displays Sign Out , i.e you are logged in try to access YouTube Portal. You will be allowed to acces it.</li>
                    <li className="list-group-item">If you click Sign Out , you will be kicked out to Home Page.</li>
                </ul>   
            </div>
        )
    }
}

export default Resources;