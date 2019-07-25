import React, {Component} from 'react';



class AdminPage extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  //componentWillMount = () => {    console.log('MainGame will mount');   }
//  componentDidMount = () => {  console.log('MainGame mounted');  }
//  componentWillReceiveProps = (nextProps) => {    console.log('MainGame will receive props', nextProps);  }
//  componentWillUpdate = (nextProps, nextState) => {    console.log('MainGame will update', nextProps, nextState);  }
//  componentDidUpdate = () => {    console.log('MainGame did update');  }
//  componentWillUnmount = () => {    console.log('MainGame will unmount');  }


  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <article className="Home">
      <h2 className="Home___title">Panel admina</h2>
      <section className="Home___text">
      <p>ADMIN TO: Stazek Olejnik</p>
      </section>
      </article>
    
      );
  }
}

export default AdminPage;
