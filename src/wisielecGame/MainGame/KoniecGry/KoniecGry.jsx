import React, { PureComponent } from 'react';

class KoniecGry extends PureComponent { 

  render () {
    const {
      wybraneHaslo,
      zapamietajWybraneLitery,
      clickCount,
      gameOver,
    } = this.props; 

    return (
      <div className="Panel___down__down_kreski">
        {gameOver?
        <div className="Panel___down__down_kreski_wynikOver">
          <p> wybrane litery:  [{zapamietajWybraneLitery}] </p>
          <p> typ hasla:       '{wybraneHaslo.gt}''        </p>
          <p> haslo:           "{wybraneHaslo.sl}"         </p>
          <p> ilość wyborów:   ({clickCount})              </p>
          </div>
          :
          null
        }
      
      </div>
    );
  }
}



export default KoniecGry;
