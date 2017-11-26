import React from 'react';
import ReactDOM from 'react-dom';
// import BrowserHeader from './BrowserHeader';

class Browser extends React.Component
{
//     constructor(props) {
//         super(props);
// console.log(props);
//         // this.state = {
//         //     total: null,
//         //     next: null,
//         //     operation: null,
//         // };
//     }
    render() {
        return (
            <div className="component-app">
                <BrowserHeader cloudName="{this.prop.cloudName}" />

            </div>
        );
    }
}

export default Browser;
