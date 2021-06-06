'use strict';



let workinghours = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','Daily Location Total'];
let golVar = document.getElementById('main');

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

for(let v=0 ; v<workinghours.length;v++){
  this['arrayPerHour'+v] = null;
}


let tableEl = document.createElement('table');
golVar.appendChild(tableEl);
tableEl.id = 'tableId';
let arrOfObjects = [];

// for(let b=0 < b<timeArr.length;b++){
//   let eval('someArr'+b) = [];
// }

function Shops(shoploc,minCust,maxCust,avgCookie){

  this.shopLoc = shoploc;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.cookieSoldPerHour =[];
  this.totalCookiesSold = null;

  arrOfObjects.push(this);
}

Shops.prototype.randCusHor = function(){

  let randCustomers = getRndInteger(this.minCust,this.maxCust);
  return randCustomers;

};

Shops.prototype.cookiesAmount = function(){

  for (let i=0 ; i < 14 ; i++ ) {
    let cookieAmountPerH = this.randCusHor() * this.avgCookie;
    this.cookieSoldPerHour.push(Math.floor(cookieAmountPerH));
  }

};

Shops.prototype.totalCookieSoldFunc = function(){

  for(let i=0 ; i < this.cookieSoldPerHour.length ; i++){

    this.totalCookiesSold = this.totalCookiesSold + this.cookieSoldPerHour[i];

  }

  this.cookieSoldPerHour.push(this.totalCookiesSold);

};

Shops.prototype.headerRender = function () {

  let tr1 = document.createElement('tr');
  tableEl.appendChild(tr1);

  for(let i = -1 ;i< timeArr.length ; i++){

    let thEl = document.createElement('th');
    tr1.appendChild(thEl);
    thEl.textContent = timeArr[i];
  }

}

Shops.prototype.render = function(){
  
  let tr1El = document.createElement('tr');
  tableEl.appendChild(tr1El);
  let td1 = document.createElement('td');
  tr1El.appendChild(td1);
  td1.textContent = this.shopLoc;

  for(let j=0 ; j<this.cookieSoldPerHour.length;j++){

    let td2 = document.createElement('td');
    tr1El.appendChild(td2);
    td2.textContent = this.cookieSoldPerHour[j];

    // for(let i=0;i<timeArr.length;i++){
    //   if(i===j){
    //     eval('someArr'+i).push(this.cookieSoldPerHour[i])
    //   }
    // }

  }



};

Shops.prototype.footerRender = function(){

  let trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  let tdEl = document.createElement('td');
  trEl.appendChild(tdEl);
  tdEl.textContent ='Total';
  for(let i=0 ; i<timeArr.length;i++){
    let tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    let totalCell = null;
    for(let j=0;j<arrOfObjects.length;j++){
      totalCell = totalCell + arrOfObjects[j].cookieSoldPerHour[i];
    }
    tdEl.textContent = totalCell;
  }

}

Shops.prototype.footerRenderNew = function() {
  let removeRow = document.querySelector('#tableId').lastChild;
  tableEl.removeChild(removeRow);
};

let seattle = new Shops('Seattle',23,65,6.3);
let tokyo = new Shops('Tokyo',3,24,1.2);
let dubai = new Shops('Dubai',11,38,1.2);
let paris = new Shops('Paris',20,38,2.3);
let lima = new Shops('Lima',2,16,4.6);

const formStore = document.getElementById('formStore');
formStore.addEventListener('submit',submitHandle);

function submitHandle(event) {
  event.preventDefault()
  let storeName = null;
  let minn = null;
  let maxx = null;
  let avgg = null;
  storeName = event.target.storeName.value;
  minn = event.target.minNum.value;
  maxx = event.target.maxNum.value;
  avgg = event.target.avgNum.value;

  let newStore = new Shops(storeName,minn,maxx,avgg);
  newStore.footerRenderNew()
  newStore.randCusHor();
  newStore.cookiesAmount();
  newStore.totalCookieSoldFunc();
  newStore.render();
  newStore.footerRender();
  console.log(arrOfObjects)
  console.log(event);
}


seattle.headerRender();

function renderingAll(){
  for(let n=0 ; n<arrOfObjects.length;n++){
    arrOfObjects[n].randCusHor();
    arrOfObjects[n].cookiesAmount();
    arrOfObjects[n].totalCokieSoldFunc();
    arrOfObjects[n].render();
  }
}
renderingAll();

seattle.footerRender();
