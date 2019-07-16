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
  for(let i = 0; i < hours.length; i++){
    var customers = this.random();
    var cookiesales = customers * this.avgSales;
    cookiesales = Math.floor(cookiesales);
    this.hourlysales.push(cookiesales);
    console.log(this.hourlysales);
    this.total= this.total + cookiesales;
    console.log('total', this.total);
  }

};

var thead = document.getElementsByTagName(thead) [0];
var tbody = document.getElementsByTagName(tbody) [0];
var tfoot = document.getElementsByTagName(tfoot) [0];


var pike = new Shop('1st and Pike', 23, 65, 6.3);
var sea = new Shop('SeaTac', 3, 24, 1.2);
var center = new Shop('Seattle Center', 11, 38, 3.7);
var cap = new Shop('Capitol Hill', 20, 38, 2.3);
var alki = new Shop('Alki', 2, 16, 4.6);



