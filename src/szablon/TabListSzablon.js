import React from 'react';
 
/**
 * zmienna: 'tbodyr' jest tabelą sformatowaną z bodytab
 * zmienna 'theader' jest listą nagłówków tabeli (format array)
 * @param {tbodyr,theader} props 
 */     
const TabListSzablon = (props) => {
  const {tbodyr,theader} = props;
  //const styl="tabType___head_th";
  // className={styl + '_' + idx}
  const mheader=theader.map((i,idx)=> <th key={idx}>{i}</th> )
  return (  
    <div className="tabType">
    <table className="paleBlueRows">
    <thead>
    <tr>
    {mheader}
    </tr>
    </thead>
    
    <tbody>
      {tbodyr}
    </tbody>
    </table>
    </div>
  );
}
 
export default TabListSzablon;