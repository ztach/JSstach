import React, { PureComponent } from 'react';
import ListDict from '../ListDict/ListDict';

import  './CreatePanelGame.scss';

class CreatePanelGame extends PureComponent {
state={}

render() {

const {wyborHasla,
      wybraneHaslo,
      wybranaLitera,
      zapamietajWybraneLitery,
      isWybraneHaslo,
      clickCount,
      isClicked,
      buttonClicked,
      clickBadCount,
      tabHaslo,
      gameOver,
      hasloIsOk,
      powrotDoGry,
      maxPicturesCount
      } = this.props;

return (
        <ListDict 
            wyborHasla={wyborHasla} 
            wybraneHaslo={wybraneHaslo} 
            wybranaLitera={wybranaLitera}
            zapamietajWybraneLitery={zapamietajWybraneLitery}
            isWybraneHaslo={isWybraneHaslo}
            clickCount={clickCount}
            isClicked={isClicked}
            buttonClicked={buttonClicked}
            clickBadCount={clickBadCount}
            tabHaslo={tabHaslo}
            gameOver={gameOver}
            hasloIsOk={hasloIsOk}
            powrotDoGry={powrotDoGry}
            maxPicturesCount={maxPicturesCount}
            />
    ); 
  }
}


export default CreatePanelGame;

