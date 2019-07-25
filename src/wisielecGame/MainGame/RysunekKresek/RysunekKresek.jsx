import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

let i=0;
class RysunekKresek extends PureComponent { 
  
 rysujKreski = (it,wl)=> {
      const zgadlem=<span key={i++} className="Panel___down__down_kreski_litera"> {wl[0]} </span>;
      const spacja=<span key={i++} className="Panel___down__down_kreski_spacja"> </span>;
      const litera= <span key={i++} className="Panel___down__down_kreski_kreska"> </span>
      return it === ' '? spacja : it === wl[0] ? zgadlem : litera
 }


render() {
    const {haslo,zapamietajWybraneLitery} = this.props;
    let wynik=[];
    const druk = haslo.map(item=>{ 
        const l=item.toUpperCase();
        let w = zapamietajWybraneLitery.filter(it => it === l);

        wynik.push(w[0]);
        let ww = this.rysujKreski(l,w);
        return ww
      }
    )
      
    return (
      <div className="Panel___down__down_kreski">
        {druk}
      </div>
      )
  }
}

RysunekKresek.propTypes = {
  // bla: PropTypes.string,
  haslo:PropTypes.array,
  wybranaLitera:PropTypes.string,
  zapamietajWybraneLitery:PropTypes.array,
};

RysunekKresek.defaultProps = {
  // bla: 'test',
};

export default RysunekKresek;
