 
var flavorID= -1;

var myLiquor="";
var myFlavor="";
var myTopping="";









	// Choosing flavors

	$.each(flavors , function(index, value ){

	  flavorID++

	value.id = flavorID;

	$('.flavor-select').append('<li id='+ (flavorID) +'>'+value.name +'</li>')

	})

 // on click to choose flavor
	$(".flavor-select li").click(function() {

    myFlavor=  flavors[this.id]

	console.log(myFlavor)


$(".flavor-select li").css("background-color","transparent");
 $(this).css("background-color","red");	

	});

// Choosing liquor
var liquorID=-1

	$.each(liquors , function(index, value ){

	  liquorID++

	value.id=liquorID


	$('.liquor-select').append('<li id='+ (liquorID) +'>'+value.name +'</li>')



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
   	} 

    else if (myTopping.nickname==undefined){

   		var myDrinkNickname= 'Here is your '+ myFlavor.nickname+ ' '+myLiquor.nickname+'  !'
    var myDrink= 'It\'s '+ myFlavor.name +' flavored '+ myLiquor.name +'. '+'Enjoy! your drink!'

   	} 
   
   else 
   {

   		var myDrinkNickname= 'Here is your '+ myFlavor.nickname+ ' '+myLiquor.nickname+' '+myTopping.nickname +' !'
    var myDrink= 'It\'s '+ myFlavor.name +' flavored '+ myLiquor.name +' '+ myTopping.nickname+'. '+'Enjoy! your drink!'

   	}
   	
    console.log(myDrinkNickname);
   	console.log(myDrink);


		myLiquor=""
		myFlavor=""
		myTopping=""

		$(".liquor-select li,.flavor-select li,.topping-select li ").css("background-color","transparent");

   })


     
///////============================////

// var drink= function(flavor,liquor,topping){

// 	 this.liquor = liquor
// 	 this.flavor = flavor
// 	 this.topping = topping

// 	this.info = function(){
// 		console.log ('Your drink is composed of  '+ liquor + " , "+ flavor + " with " +topping )
// 	}


// }




// $('#submit').click(function(){


// var myDrink = new drink(flavor,liquor ,topping);

//   myDrink.info();




// })


// drink.prototype.nickname= function(){

// 		if(this.flavor =='Apple'){
// 		flavor='Cinder'
// 		} 
// 		if(this.flavor =='Passion Fruit'){
// 		flavor='Sunny'
// 		}
// 		if(this.flavor =='Coke'){
// 		flavor='Ruby'
// 		}
// 		if(this.flavor == 'Lime'){

// 		flavor='Citrus'
// 		}


// 	    if(this.liquor=='Vodka'){
// 	    	liquor= 'Spike'
// 	    }	    
// 	    if(this.liquor=='Gin'){
// 	    	liquor= 'Jenny'
// 	    }
// 	    if(this.liquor=='Whiskey'){
// 	    	liquor= 'Tan'
// 	    }
// 	    if(this.liquor=='Tequila'){
// 	    	liquor= 'Merry'
// 	    }

//      console.log( 'Your Drink is a ' + flavor+ ' '+liquor+' with '+ this.topping)
// }

// myDrink.nickname();


