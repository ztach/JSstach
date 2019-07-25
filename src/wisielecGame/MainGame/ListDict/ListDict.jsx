import React from 'react';
import RysunekKresek from '../RysunekKresek/RysunekKresek';
import PasekSrodkowy from '../PasekSrodkowy/PasekSrodkowy';
import KoniecGry from '../KoniecGry/KoniecGry';    

const ListDict = (props) => {
    const { wyborHasla,
            isWybraneHaslo,
            wybraneHaslo,
            wybranaLitera,
            zapamietajWybraneLitery,
            clickCount,
            isClicked,
            buttonClicked,
            clickBadCount,
            tabHaslo,
            gameOver,
            hasloIsOk,
            powrotDoGry,
          } = props;

    let haslo = wybraneHaslo.sl === undefined? [] : wybraneHaslo.sl.split('')

    return ( 
        <div className="Panel___down">

        {/* Panel środkowy z buttonem i podpowiedzią */}
            <PasekSrodkowy 
                haslo={haslo}  
                wyborHasla={wyborHasla}
                isWybraneHaslo={isWybraneHaslo}
                wybranaLitera={wybranaLitera}
                wybraneHaslo={wybraneHaslo}
                clickCount={clickCount}
                isClicked={isClicked}
                buttonClicked={buttonClicked}
                clickBadCount={clickBadCount}
                tabHaslo={tabHaslo}
                zapamietajWybraneLitery={zapamietajWybraneLitery}
                gameOver={gameOver}
                hasloIsOk={hasloIsOk}
                powrotDoGry={powrotDoGry}
            />
        {/* end button i podpowiedzią */}

            
      {gameOver || hasloIsOk? 
      <div className="Panel___down__down">
        <KoniecGry 
          powrotDoGry={powrotDoGry} 
          haslo={haslo}  
          wyborHasla={wyborHasla}
          isWybraneHaslo={isWybraneHaslo}
          wybranaLitera={wybranaLitera}
          wybraneHaslo={wybraneHaslo}
          clickCount={clickCount}
          isClicked={isClicked}
          buttonClicked={buttonClicked}
          clickBadCount={clickBadCount}
          tabHaslo={tabHaslo}
          zapamietajWybraneLitery={zapamietajWybraneLitery}
          gameOver={gameOver}
          hasloIsOk={hasloIsOk}
        />
        </div>
            :
        <div className="Panel___down__down">
            <RysunekKresek 
                zapamietajWybraneLitery={zapamietajWybraneLitery}
                haslo={haslo} 
                wybranaLitera={wybranaLitera} 
                clickCount={clickCount}
                isClicked={isClicked}
                buttonClicked={buttonClicked}
                clickBadCount={clickBadCount}
                tabHaslo={tabHaslo}
            />
        </div>
      }
      
        </div>
     );
}
 
export default ListDict;
