import React,{Component}  from 'react';
import CreatePanelGame from './CreatePanelGame/CreatePanelGame';
import Klawiatura from './Klawiatura/Klawiatura';
import UserDefault from '../const/UserDefault';
import GetPicture from './GetPicture/GetPicture';
import PanelGameOver from './PanelGameOver/PanelGameOver';
import * as getAllType from '../../helpers/typeApi';

import './MainGame.scss';

class MainGame extends Component {
  state = { 
    type:[],
    dict: [],
    klawiatura:['A','Ą','B','C','Ć','D','E','Ę','F','G','H','I','J','K','L','Ł','M','N','Ń','O','Ó','P','Q','R','S','Ś','T','U','V','W','X','Y','Z','Ż','Ź'],
    dictLengthElement:[{
      typId:0,
      elLength:0,
      esLength:0,
    }],
    wybranaLitera:'',
    wybraneHaslo: {},
    zapamietajWybraneLitery:[],
    isWybraneHaslo:false,
    clickBadCount:0,
    clickCount:0,
    isCliked:false,
    buttonClicked:false,
    gameOver:false,
    hasloIsOk:false,
    tabHaslo:[],
    tabZgadnijHaslo:[],
    isUstawieniaGry:false,
    dictLength:0,
    maxPicturesCount:10,
   }


   componentWillUnmount = () => {
    this.setState({
      dict:[],
    })
   }
 
 
  componentDidMount = async () => {
    //  this.getDictList();
    //  this.getTypesLists();
     const type = await getAllType.getAllTypes();
     const dict = await getAllType.getAllDicts();
     
     this.setState({
       type,
       dict
       })
 
  }

  componentDidUpdate = ()=>{
    if( !this.state.hasloIsOk ){
    if(this.arraysEqual(this.state.tabHaslo,this.state.tabZgadnijHaslo)){
      this.setState({
         hasloIsOk:true,
        })
      }
    }
    if(this.state.clickBadCount === this.state.maxPicturesCount){
      this.setState({
        gameOver:true,
        clickBadCount:0,
       })
    }
  }

  getDictList = () => {
  const dane = UserDefault.PATH_TO_JSON+UserDefault.DICT_FILE;
  fetch(dane)
    .then(response => response.json())
    .then(data => {
      this.setState({
        dict:data
      })
      this.getLengthElement(data);
      this.addLengthToDict(data);
  })
  .catch(err => {
    console.log("Error Reading data " + err);
  });
 
  }

  getLengthElement = data => {

  let types = [...new Set(data.map(itm => itm.typ))].sort();

  for (let i = 0; i < types.length; i++) {
    const id = types[i];
    const els = (data[i].sl).replace(/\s/g, "").length;
    let dataFiltered = data.filter(item =>  item.typ === id);
    let dataFilteredLenght = dataFiltered.length;
    
    let w = { typeId:id,
              elLength:dataFilteredLenght,
              esLength:els
            }
    this.setState({
      dictLengthElement: [...this.state.dictLengthElement,w]
    })
  }
  }

  addLengthToDict = data => {
    const {dictLengthElement} = this.state;
    
    for (let i = 0; i < data.length; i++) {
      const element = data[i].typ;
      const els = (data[i].sl).replace(/\s/g, "").length;
      const slOryginalLength = (data[i].sl).length;
      let getId = dictLengthElement.filter(item => item.typeId === element)
      
       let newDict = {
                      id:data[i].id,
                      sl:data[i].sl,
                      gt:data[i].gt,
                      pt:data[i].pt,
                      typ:data[i].typ,
                      elLength:getId[0].elLength,
                      esLength:els,
                      slOryginalLength:slOryginalLength
       }
       
       this.setState({
        dict:[...newDict]
      })
    }
      
    }
  
    getTypesLists = () => {
    const dane = UserDefault.PATH_TO_JSON+UserDefault.TYPE_FILE;
    fetch(dane)
      .then(response => response.json())
      .then(data => {
        this.addLengthTypesLists(data);
    })
    .catch(err => {
      console.log("Error Reading data " + err);
    });
    }
  
    addLengthTypesLists = (data) => {
    const {dictLengthElement} = this.state;
    dictLengthElement.shift();
    for (let i = 0; i < data.length; i++) {
      const element = data[i].id;
      let getId = dictLengthElement.filter(item => item.typeId === element)
      let w = getId[0] === undefined ? 0 : getId[0].elLength;
      let newTyp = {
        id:data[i].id,
        typ:data[i].typ,
        elLength:w
      }
      this.setState({
      type:[...this.state.type,newTyp]
      })
    }
    }
  

   getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

   wyborHasla = () => {
     let id = this.getRandomInt(0,this.state.dict.length)
     let w = this.state.dict[id];
    
    let haslo = w['sl'] === undefined? [] : w['sl'].split('')
    haslo=haslo.map(item=>item.toUpperCase());
    haslo=haslo.filter((item) => item !== ' ');

     this.setState({
       wybraneHaslo:w,
       klawiatura:['A','Ą','B','C','Ć','D','E','Ę','F','G','H','I','J','K','L','Ł','M','N','Ń','O','Ó','P','Q','R','S','Ś','T','U','V','W','X','Y','Z','Ż','Ź'],
       tabHaslo:haslo,
       wybranaLitera:'',
       isWybraneHaslo:true,
       zapamietajWybraneLitery:[],
       clickCount:0,
       clickBadCount:0,
       isCliked:false,
       buttonClicked:false,
       tabZgadnijHaslo:[],
       gameOver:false,
       hasloIsOk:false,
        })
   }

  powrotDoGry = () => {
    this.setState({
      klawiatura:['A','Ą','B','C','Ć','D','E','Ę','F','G','H','I','J','K','L','Ł','M','N','Ń','O','Ó','P','Q','R','S','Ś','T','U','V','W','X','Y','Z','Ż','Ź'],
      wybraneHaslo: {},
      wybranaLitera:'',
      zapamietajWybraneLitery:[],
      isWybraneHaslo:false,
      clickBadCount:0,
      clickCount:0,
      isCliked:false,
      buttonClicked:false,
      gameOver:false,
      hasloIsOk:false,
      tabHaslo:[],
      tabZgadnijHaslo:[],
    })
   }

   isCreateSuccessTable = () => {
     const {tabHaslo,wybranaLitera} = this.state;
     let wynik=[...this.state.tabZgadnijHaslo];

     if(wynik.length === 0){ 
       for (let i = 0; i < tabHaslo.length; i++) {
         wynik.push('');
         }
     }
    
     for (let i = 0; i < tabHaslo.length; i++) {
       const element = tabHaslo[i];
       if(element === wybranaLitera){
         wynik[i]=wybranaLitera
       }
     }

     this.setState({
        tabZgadnijHaslo:wynik
      })
   }

   testHasloIsOk = () => {
    let stan = 0
    for (let i = 0; i < this.state.tabHaslo.length; i++) {
      if(this.state.tabHaslo[i] === this.state.tabZgadnijHaslo[i]){
        stan=stan+1
      }
      if(stan === this.state.tabHaslo.length){ 
        this.setState({
           gameOver:true,
          hasloIsOk:true,
        })
        
      }
    }
   }


arraysEqual = (a, b) => {
    if (a.length === 0 || b.length === 0 ) return false;
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
  
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

   btnWybranaLitera = l => {
     if(this.state.isWybraneHaslo){
      const {tabHaslo,wybranaLitera,klawiatura,zapamietajWybraneLitery} = this.state;
    

      let litera=wybranaLitera.toString();
      let idx = tabHaslo.findIndex(elem => elem.toUpperCase() === litera );
      let isSaved = zapamietajWybraneLitery.findIndex(item => item.toUpperCase() === litera);

      if(idx === -1 ){
      this.setState({
        clickBadCount:this.state.clickBadCount+1,
        })
      }
      if(isSaved === -1 ){
        this.setState({
          clickCount:this.state.clickCount+1,
          buttonClicked:false,
          isClicked:true,
          zapamietajWybraneLitery:[...this.state.zapamietajWybraneLitery,l],
        })
      } 
      let mklawiatura=klawiatura.filter((item) => item !== wybranaLitera);
      this.setState({
        klawiatura:mklawiatura
      })

      this.isCreateSuccessTable();
    }
  }

  butthonFocused = e => {
    const value = e.target.value;
    this.setState({
      wybranaLitera:value,
    })

  }

  rysujKlawiature = ()=> {
    const tabKlawiatura = [...this.state.klawiatura];
    let tabPomoc=[];
    let tabWynik=[];
    
    for (let j = 0; j < tabKlawiatura.length; j+=6) {
      tabPomoc=[];
      for(let i=j; i<j+6; i++){
        const el = tabKlawiatura[i];
        if(el !== undefined){
        tabPomoc.push(  <button 
                          type="button"
                          key={i} 
                          value={el}
                          onFocus={this.butthonFocused}
                          
                          onClick={() => this.btnWybranaLitera(el)} 
                          className="Panel___up__right_Klawiatura_btn" 
                          >
                          {el}
                          </button>  
                      )
        }
      }
      tabWynik.push(tabPomoc)
      
    }
    return tabWynik;
  }

  
  render() { 
    const {dict,
          wybraneHaslo,
          wybranaLitera,
          isWybraneHaslo,
          zapamietajWybraneLitery,
          clickCount,
          clickBadCount,
          isClicked,
          buttonClicked,
          tabHaslo,
          tabZgadnijHaslo,
          gameOver,
          hasloIsOk,
          maxPicturesCount
        } = this.state;
    
      
    return ( 



<>
{gameOver? <PanelGameOver  
  isWybraneHaslo={isWybraneHaslo}
  wybraneHaslo={wybraneHaslo}
  wybranaLitera={wybranaLitera}
  zapamietajWybraneLitery={zapamietajWybraneLitery}
  clickCount={clickCount}
  isClicked={isClicked}
  buttonClicked={buttonClicked}
  clickBadCount={clickBadCount}
  tabHaslo={tabHaslo}
  gameOver={gameOver}
  hasloIsOk={hasloIsOk}
  powrotDoGry={this.powrotDoGry}
  /> 
  :       

<div id="PanelGlowny" className="Panel">

  <div className="Panel___up">

  <div className="Panel___up__left">
    <GetPicture 
        wybraneHaslo={wybraneHaslo} 
        zapamietajWybraneLitery={zapamietajWybraneLitery}
        isWybraneHaslo={isWybraneHaslo}
        clickCount={clickCount}
        clickBadCount={clickBadCount}
        tabHaslo={tabHaslo}
        gameOver={gameOver}
        hasloIsOk={hasloIsOk}
        maxPicturesCount={maxPicturesCount}     
    />
      <div className="Panel___up__left_data">
      
      </div>
  </div>

        <Klawiatura 
          rysujKlawiature={this.rysujKlawiature} 
          wybranaLitera={wybranaLitera} 
          wybraneHaslo={wybraneHaslo} 
          clickCount={clickCount}
          isClicked={isClicked}
          buttonClicked={buttonClicked}
          clickBadCount={clickBadCount}
          gameOver={gameOver}
          hasloIsOk={hasloIsOk}          
        />
    

  </div>
      
      <CreatePanelGame 
          dict={dict} 
          wyborHasla={this.wyborHasla} 
          wybraneHaslo={wybraneHaslo} 
          wybranaLitera={wybranaLitera}
          zapamietajWybraneLitery={zapamietajWybraneLitery}
          isWybraneHaslo={isWybraneHaslo}
          clickCount={clickCount}
          isClicked={isClicked}
          buttonClicked={buttonClicked}
          clickBadCount={clickBadCount}
          tabHaslo={tabHaslo}
          tabZgadnijHaslo={tabZgadnijHaslo}
          gameOver={gameOver}
          hasloIsOk={hasloIsOk}
          powrotDoGry={this.powrotDoGry}
          maxPicturesCount={maxPicturesCount}
          />
    
      </div>
    } 
    </>
  );
 }
}

 
export default MainGame;

/**
 * 
 * 
 * 
 * 
 *
 * 
 * 
 *
 * 
 * schemat paneli
 * | --------------|-----------------|-Panel
 * |         Panel___up              |
 * |               |                 |
 * |Panel___up_left|Panel___up_right |
 * |               |                 |
 * |---------------|-----------------|
 * |                                 |
 * |         Panel___down            |
 * |                                 |
 * |---------------------------------| 
 * 
 */
