

var cards = require("./cards.json");

var clozeCards = require("./clozeCards.json")



// console.log(cards[0].front);



// if ((process.argv[2] != "BASIC")  || (process.argv[2]) != "CLOZE") {

 
// 	console.log("Enter whether you would like the basic card or the cloze card");
// 	console.log("by typing node flashcard.js BASIC or CLOZE and then the number of cards you would like to see between 1 and 5");
// }

if (process.argv[2] === "BASIC") 

{

		for (i=0; i < cards.length; i++){

		var card = new FlashCard(cards[i].front, cards[i].back);


		console.log("card front: " + card.front);
		console.log("card back " + card.back);
	}

 }



 if (process.argv[2] === "CLOZE")


 {


 		for (i=0; i < clozeCards.length; i++){

		var specialCard = new ClozeCard(clozeCards[i].fullText, clozeCards[i].clozeDeletion);

		var text = specialCard.text;

		var clozeDeletion = specialCard.cloze;

		var partial = text.replace(clozeDeletion, " ");


	
		console.log("card cloze front: " + specialCard.cloze);

		console.log("card back: " + partial);


		// CLozeCard.printThePartial();

		// ClozeCard.prototype.printThePartial = function (){

		// 		var partial = specialCard.cloze;

		// 		console.log("The partial is " + partial );




			}





	}


 


 // if (process.argv[2] === "CLOZE"); {


	// for (i=0; i < clozeCards.length; i++){

	// 	var specialCard= new ClozeCard(clozeCards[i].text, clozeCards[i].cloze);


	// 		console.log("card front: " + specialCard.text)
	// 		console.log("card back: " + specialCard.cloze)

	// 		}

 // }





function FlashCard (front, back){

	this.front = front
	this.back = back


}




function ClozeCard (text, cloze){

	this.text = text
	this.cloze = cloze

	}









