import React, { PureComponent } from 'react';
import './PanelGameOver.scss';

class PanelGameOver extends PureComponent { 

render () {

    const { 
      zapamietajWybraneLitery,
      clickCount,
      clickBadCount,
      tabHaslo,
      powrotDoGry,
    } = this.props;

return (
    <div className="Panel___GameOverWrapper">
      <div className="Panel___GameOverWrapper___picture"></div>
      <div className="Panel___GameOverWrapper___message">
          Game Over
      </div>
      <div className="Panel___GameOverWrapper___haslo">{tabHaslo}</div>
      <div className="Panel___GameOverWrapper___zaplit">{zapamietajWybraneLitery}</div>
      <div className="Panel___GameOverWrapper___click">{clickCount}</div>
      <div className="Panel___GameOverWrapper___clickBad">{clickBadCount}</div>
      <div className="Panel___GameOverWrapper___powrot">
        <button onClick={powrotDoGry} className="Panel___GameOverWrapper___btn">Powrót do gry</button>
      </div>
      
    </div>
    );
  }
}


export default PanelGameOver;
