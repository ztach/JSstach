import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


class Klawiatura extends PureComponent { 
  state = {}

  render () {
    const {
      rysujKlawiature,
      gameOver,
      hasloIsOk
    } = this.props;

    let i=0;    
    const w = rysujKlawiature();
    let klawisze = w.map(item=>
      <div className="Panel___up__right_Klawiatura" key={item + i++} >
        {item}
      </div>
      )

    return (
      <div className="Panel___up__right">
        {hasloIsOk? 
            <div className="Panel___up__right_wybierz">ok!!! graj dalej</div> 
            : 
            gameOver?<div className="Panel___up__right_wybierz">game over !!!</div> :
            klawisze
            }
         }
      </div>
    );
  }
}

Klawiatura.propTypes = {
  wybraneHaslo: PropTypes.object,
};

Klawiatura.defaultProps = {
  wybraneHaslo: PropTypes.object ,
};

export default Klawiatura;
