
var flavorID= -1;

var myLiquor="";
var myFlavor="";
var myTopping="";


var drinkOrders= []

// Choosing flavors

$.each(flavors , function(index, value ){

	flavorID++

	value.id = flavorID;

	$('.flavor-select').append('<li id='+ (flavorID) +'>'+value.name +'</li>')

})

// on click to choose flavor
$(".flavor-select li").click(function() {

	myFlavor=  flavors[this.id]

	console.log(myFlavor);


	$(".flavor-select li").css("background-color","transparent");
	$(this).css("background-color","red");	

});

// Choosing liquor
var liquorID=-1

$.each(liquors , function(index, value ){

liquorID++;

value.id=liquorID;


$('.liquor-select').append('<li id='+ (liquorID) +'>'+value.name +'</li>');

})


// on click liquor, toggle object


$(".liquor-select li").click(function() {



myLiquor=  liquors[this.id]

$(".liquor-select li").css("background-color","transparent");
$(this).css("background-color","red");	

console.log(myLiquor)

});


// Choosing Topping 

var toppingID=-1

$.each(toppings , function(index, value ){

toppingID++

value.id=toppingID


$('.topping-select').append('<li id='+ (toppingID) +'>'+value.name +'</li>')
})



// on click topping, toggle object


$(".topping-select li").click(function() {

myTopping =  toppings[this.id]

$(".topping-select li").css("background-color","transparent");
$(this).css("background-color","red");	
console.log(myTopping)

});




$("#submit").click(function(){

if(myFlavor.nickname== undefined || myLiquor.nickname== undefined ){
alert(' Please choose your flavor and your liquor of choice!')

return
} 

else if (myTopping.nickname==undefined){

var myDrinkNickname= 'Here is your '+ myFlavor.nickname+ ' '+myLiquor.nickname+'  !'
var myDrink= 'It\'s '+ myFlavor.name +' flavored '+ myLiquor.name +'. '+'Enjoy! your drink!'

} 

else 
{

var myDrinkNickname= 'Here is your '+ myFlavor.nickname+ ' '+myLiquor.nickname+' 	'+myTopping.nickname +' !'
var myDrink= 'It\'s '+ myFlavor.name +' flavored '+ myLiquor.name +' '+ myTopping.nickname+'. '+'Enjoy! your drink!'

}

console.log(myDrinkNickname);
console.log(myDrink);

$('.main h1').text(myDrinkNickname)
$('.main h2').text(myDrink)




$(".liquor-select li,.flavor-select li,.topping-select li ").css("background-color","transparent");

var drink= function( myFlavor,myLiquor,myTopping){

this.flavor= myFlavor;
this.liquor= myLiquor;
this.topping= myTopping;

}	

var myNewDrink= new drink ( myFlavor,myLiquor,myTopping)


drinkOrders.push(myNewDrink)


console.log(drinkOrders.length)

$('.my-orders li').remove();

console.log(drinkOrders)


var totalPrice=[]

for( i=0 ;  i < drinkOrders.length ; i++  ) {


var drinkPrice= drinkOrders[i].flavor.price+drinkOrders[i].liquor.price+drinkOrders[i].topping.price
var NoToppingPrice= drinkOrders[i].flavor.price+drinkOrders[i].liquor.price

if(drinkOrders[i].topping.nickname==undefined){

$('.my-orders ul').append('<li>'+ drinkOrders[i].flavor.nickname + ' '+ drinkOrders[i].liquor.nickname +'   '+ NoToppingPrice+'</li>')

totalPrice.push(NoToppingPrice)

} 

else {

$('.my-orders ul').append('<li>'+ drinkOrders[i].flavor.nickname + ' '+ drinkOrders[i].liquor.nickname+' '+drinkOrders[i].topping.nickname+'    '+ drinkPrice+'</li>')

totalPrice.push(drinkPrice)

}

console.log(totalPrice)

}
//end of For loop


myLiquor=""
myFlavor=""
myTopping=""





})


