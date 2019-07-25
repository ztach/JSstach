import React, { PureComponent } from 'react';


class MyNewApi extends PureComponent { 
    state = {
      text:[],
      hasError: false,
      isInsert:false
    }

  onClickGetNewApi = () =>{
      fetch(`http://localhost:3002/testApi`)
        .then(res => res.json())
        .then(res => 
          this.setState({
            text: res,
            hasError: true,
          })
        )
        .catch(error => this.setState({ error, hasError: false }));
  }

  onClickAddNewApi = () =>{
    fetch(`http://localhost:3002/testApi`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: {
        text:'ala ma kota'
      }
  })
  .then(response => {
    if(response.ok){
      this.setState({isInsert:!this.state.isInsert})
      }
   })
  }


  render () {

    return (
      <div className="MyNewApiWrapper">
        <button onClick={this.onClickGetNewApi}>Kontakt z api</button>
        <button onClick={this.onClickAddNewApi}>Dodaj coś do api</button>
        <p>wynik</p>
        <p>{this.state.text}</p>
      </div> 
    );
  }
}

export default MyNewApi;
