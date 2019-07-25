import React from 'react';
import GetData from '../../configGame/GetData/GetData';


class GetApi extends React.Component {
    state = { 
        // apiIsActive:false
     };

    //  activateApi=() => {
    //     this.setState({apiIsActive:!this.state.apiIsActive});
    //  }

    render() {
        return (
          <GetData />
        );
    }
}


export default GetApi;

/**
 *
 * 
 */