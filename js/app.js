'use strict';


var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var thead = document.getElementsByTagName('thead')[0];
var tbody = document.getElementsByTagName('tbody')[0];
var tfoot = document.getElementsByTagName('tfoot')[0];

var form = document.getElementsByTagName('form')[0];

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
  for (var i = 0; i < hours.length; i++){
    addElement('td', this.hourlysales[i], tr);
  }
  addElement('td', this.total, tr);

  // renderList(this.hourlysales);
};

// function renderList(sales){
//   var id= document.getElementById('list');
//   var ul = document.createElement('ul');
//   id.append(ul);
//   var ulel= document.getElementsByTagName('ul')[0];
//   for (var i = 0; i<sales.length; i++){
//     var li = document.createElement('li');
//     var data = document.createTextNode(`Sales data ${sales[i]}`);
//     li.appendChild(data);
//     ulel.append(li);
//   }
// }

function addElement (element, text, parent){
  var newElement = document.createElement(element);
  var newText = document.createTextNode(text);
  newElement.appendChild(newText);
  parent.appendChild(newElement);
  return newElement;
}


//header cell for each hour

function createTheader (){
  var row = addElement('tr', '', thead);
  addElement('th', '', row);
  for (var i =0; i < hours.length; i++ ){
    addElement('th', hours[i], row);
  }
}


function createTbody (){
  for(var i = 0; i < shopObject.length; i++){
    shopObject[i].renderSales();

  }
}

function createTfooter(){
  tfoot.innerHTML= '';
  var totalRow= addElement('tr', '', tfoot);
  addElement('th', 'Total', totalRow);
  var total = 0;
  for (var i = 0; i < hours.length; i++){
    var sum = 0;
    for (var j = 0; j < shopObject.length; j++){
      sum = sum + shopObject[j].hourlysales[i];
      console.log(sum);
      total = total + shopObject[j].hourlysales[i];
    }
    addElement('td', sum, totalRow);
  }
  addElement('td', total, totalRow);  
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
function newShopObject(event){
  event.preventDefault();
  console.log(event.target.name.value);
  var newName = event.target.name.value;
  var minCus = event.target.minCus.value;
  var maxCus = event.target.maxCus.value;
  var avgSales = event.target.avgSales.value;

  var newShop = new Shop(newName, minCus, maxCus, avgSales);
  newShop.renderSales();
  console.log(newShop);
  createTfooter();
}
form.addEventListener('submit', newShopObject);


createTheader();
createTbody();
createTfooter();
