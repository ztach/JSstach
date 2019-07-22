import React from 'react';
import AriaModal from 'react-aria-modal';

class GetModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalActive: false
    };

    this.activateModal = this.activateModal.bind(this);
    this.deactivateModal = this.deactivateModal.bind(this);
    this.getApplicationNode = this.getApplicationNode.bind(this);
  }

  componentDidMount = () => {
    this.activateModal()  
  }

  activateModal = () => {
    this.setState({ modalActive: true });
  };

  deactivateModal = () => {
    this.setState({ modalActive: false });
  };

  getApplicationNode = () => {
    return document.getElementById('application');
  };

  render() {
    console.log('render')
    const modal = this.state.modalActive
      ? 
      <AriaModal
          titleText="demo one"
          onExit={this.deactivateModal}
          initialFocus="#demo-one-deactivate"
          getApplicationNode={this.getApplicationNode}
          underlayStyle={{ paddingTop: '2em' }}
        >
          <div id="demo-one-modal" className="modal">
            <div className="modal-body">
              <p>
                Here is a modal
                {' '}
                <a href="/">with</a>
                {' '}
                <a href="/">some</a>
                {' '}
                <a href="/">focusable</a>
                {' '}
                parts.
              </p>
            </div>
            <footer className="modal-footer">
              <button className="activate-btn" id="demo-one-deactivate" onClick={this.deactivateModal}>
                deactivate modal
              </button>
            </footer>
          </div>
        </AriaModal>
        
      : 
      null
      ;

    return (
      <div>
        {modal}
      </div>
    );
  }
}


// import React from 'react';

// import './App.css';

// function SplitPane(props) {
//   return (
//     <div className="SplitPane">
//       <div className="SplitPane-left">
//         {props.left}
//       </div>
//       <div className="SplitPane-right">
//         {props.right}
//       </div>
//     </div>
//   );
// }

// function Contacts() {
//   return <div className="Contacts" />;
// }

// function Chat() {
//   return <div className="Chat" />;
// }

// function App() {
//   return (
//     <SplitPane 
    
//       left={<Contacts /> }
//       right={<>
//             <Chat />
            
//             </>
//       } 
//       />
//   );
// }

export default GetModal;
