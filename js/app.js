'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


var shopObject= [];

function Shop(name, minCustomer, maxCustomer, avgSales){
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgSales = avgSales;
  this.total = 0;
  this.hourlysales = [];
  shopObject.push(this);
  this.createSales();

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
  renderList(this.hourlysales);
};

function renderList(sales){  //where is this getting it's paramiter? what is sales?
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

var thead = document.getElementsByTagName(thead) [0];
var tbody = document.getElementsByTagName(tbody) [0];
var tfoot = document.getElementsByTagName(tfoot) [0];


var pike = new Shop('1st and Pike', 23, 65, 6.3);
var sea = new Shop('SeaTac', 3, 24, 1.2);
var center = new Shop('Seattle Center', 11, 38, 3.7);
var cap = new Shop('Capitol Hill', 20, 38, 2.3);
var alki = new Shop('Alki', 2, 16, 4.6);


// renderList(pike.hourlysales);

// we want to render a table to show our sales data for each store. There will be 6 rows and a column for every hour in hours array. the totals for all hours will be added in a footer row
//this table will also need to update with random data per cell each time the page is refreshed. 
//we will then need to create a form to add a new row to our table via the constructor function