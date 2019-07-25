import React from 'react';

const PasekSrodkowy = props => {
  const {wyborHasla,
        powrotDoGry,
        isWybraneHaslo,
        wybraneHaslo,
        clickCount,
        clickBadCount,
        zapamietajWybraneLitery,
        gameOver,
        hasloIsOk
      } = props;
  
  return(
  <div className="Panel___down__up">
  <div className="Panel___down__up__sciaga">
      {!isWybraneHaslo? <div className="Panel___down__up__sciaga_message" >NAJPIERW WYBIERZ HASŁO!!!!</div>:

    <div className="Panel___down__up__sciaga_opis" >

     {gameOver? null :
        <>
        {hasloIsOk?
          <div style={{width:'100%',height:'200px', fontSize:'35px' }} >
          <p> BRAWO </p>
          <p> SZUKANE HASŁO TO:  "{wybraneHaslo.sl}"     </p>
          <p> KLIKNIĄŁEŚ:  {clickCount}  razy            </p>
          {clickBadCount<=0? 
              null 
              :
              <p> 
              {clickBadCount===1? 
                      `I: 1 RAZ WALNĄŁEŚ W PŁOT` 
                      : 
                      <>{clickBadCount < 7?
                      `I: ${clickBadCount} RAZY W PŁOT !!!` 
                      :
                      `NO TOŚ PRAWIE WISIAŁ`
                      }</>
              } 
              </p> 
          }
          </div>
          :
          <div>
          <span> UŻYTE LITERY:  [{zapamietajWybraneLitery}] </span>
          <span> ILOŚĆ KLIKNIĘĆ:   ({clickCount})           </span>
          <span> BŁĘDNE KLIKNIĘCIA: [{clickBadCount}]  </span>   
          <span style={{fontSize:'20px'}} > TYP HASŁA:       '{wybraneHaslo.gt}''      </span>
          </div>
          }
          </>
        }
          
          </div>

          }
      </div>
      {gameOver?
      <button  className="Panel___down__up__btn" onClick={powrotDoGry} >POWRÓT DO GRY</button>
      :
      <button className="Panel___down__up__btn" onClick={wyborHasla}>WYBIERZ HASŁO</button>
      }    
  </div>

  )
}

export default PasekSrodkowy;
