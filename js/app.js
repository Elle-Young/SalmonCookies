'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var thead = document.getElementsByTagName('thead')[0];
var tbody = document.getElementsByTagName('tbody')[0];
var tfoot = document.getElementsByTagName('tfoot')[0];


var shopObject= [];

function Shop(name, minCustomer, maxCustomer, avgSales){
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgSales = avgSales;
  this.total = 0;
  this.hourlysales = [];
  this.createSales();
  shopObject.push(this);

}


Shop.prototype.random= function(){

  var range = this.maxCustomer - this.minCustomer;
  var randomNum = Math.random()*range;
  randomNum= Math.floor(randomNum);
  return this.minCustomer + randomNum;

};

Shop.prototype.createSales= function (){
  for(var i = 0; i < hours.length; i++){
    var customers = this.random();
    var cookiesales = customers * this.avgSales;
    cookiesales = Math.floor(cookiesales);
    this.hourlysales.push(cookiesales);
    this.total= this.total + cookiesales;

  }
};
Shop.prototype.renderSales= function(){
  var tr = addElement('tr', '', tbody);
  addElement('td', this.name, tr);
  console.log(this.sales);
  for (var i = 0; i < hours.length; i++){
    addElement('td', this.hourlysales[i], tr);
  }
  // renderList(this.hourlysales);
};

function renderList(sales){
  var id= document.getElementById('list');
  var ul = document.createElement('ul');
  id.append(ul);
  var ulel= document.getElementsByTagName('ul')[0];
  console.log(ulel);
  for (var i = 0; i<sales.length; i++){
    var li = document.createElement('li');
    var data = document.createTextNode(`Sales data ${sales[i]}`);
    li.appendChild(data);
    ulel.append(li);
    console.log(sales[i]);
  }
}

function addElement (element, text, parent){
  var newElement = document.createElement(element);
  var newText = document.createTextNode(text);
  newElement.appendChild(newText);
  parent.appendChild(newElement);
  return newElement;
}


//header cell for each hour

function createTheader (){
  console.log(thead);
  var row = addElement('tr', '', thead);
  addElement('th', '', row)
  for (var i =0; i < hours.length; i++ ){
    addElement('th', hours[i], row);
  }
  console.log(row);
}


function createTbody (){
  for(var i = 0; i < shopObject.length; i++){
    console.log(shopObject);
    shopObject[i].renderSales();

  }
}




var pike = new Shop('1st and Pike', 23, 65, 6.3);
var sea = new Shop('SeaTac', 3, 24, 1.2);
var center = new Shop('Seattle Center', 11, 38, 3.7);
var cap = new Shop('Capitol Hill', 20, 38, 2.3);
var alki = new Shop('Alki', 2, 16, 4.6);


// renderList(pike.hourlysales);

//we will then need to create a form to add a new row to our table via the constructor function
//create td's to be inputs so we can change info on table

//footer = totals (total + hoursly sales = actual total)


createTheader();
createTbody();
