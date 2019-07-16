import React from 'react';
import GetData from '../GetData/GetData';


class GetApi extends React.Component {
    state = { 
        apiIsActive:false
     };

     activateApi=() => {
        this.setState({apiIsActive:!this.state.apiIsActive});
     }

    render() {
        return (
            <div>
            {this.state.apiIsActive
            ? 
            <GetData />
            :
            <button className="activate-btn" 
            onClick={this.activateApi}>
                activate Api
            </button>
            }

            </div>
        );
    }
}


export default GetApi;

/**
 *
 * 
 */