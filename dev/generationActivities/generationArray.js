var childrens = [
	"Alya Bakria",
	"Laly Brutin",
	"Eliot Caban",
	"Priscilla Sengulen",
	"Hugo Tonneau",
	"Yoanis Armanet",
	"Lénaïg Bar",
	"Anissa Bouabouz",
	"Léo Caus",
	"Cléo Connart-Ledoux",
	"Ela Marina Debeire",
	"Nathan Delemarle",
	"Sohan Delgrande",
	"Timéo Dillies",
	"Sasha Garcia",
	"Baptiste Gérard",
	"Lou Habera",
	"Elyne Henry",
	"Indy Hoëppe",
	"Isra Koujout",
	"Tilila Koujout",
	"Sacha Lafond",
	"Kylian Laurent",
	"Leïa Nattat",
	"Lucie Noël",
	"Emma Ricquart",
	"Syrine Souimdi",
	"Soleynn Vandenbosch"
];

var dates = [
"23/03/15",
"24/03/15",
"26/03/15",
"27/03/15",
"28/03/15",
"30/03/15",
"31/03/15",
"02/04/15",
"03/04/15",
"04/04/15",
"07/04/15",
"09/04/15",
"10/04/15",
"11/04/15",
"13/04/15",
"14/04/15",
"16/04/15",
"17/04/15",
"18/04/15",
"20/04/15",
"21/04/15",
"23/04/15",
"24/04/15",
"25/04/15"
];

var activities = [
	"Compter total",
	"Compter garçons",
	"Compter filles",
	"Date jour de la semaine",
	"Date calendrier",
	"Date jour",
	"Jeu de cartes",
	"Météo"
];
var myDates = [];
		var copyOfChildrens = [];
		for(var j = 0; j < childrens.length; j++){
			copyOfChildrens.push(childrens[j]);
		}


for(var i = 0; i < dates.length; i++){
	var myDay = [];
	myDay.push(dates[i]);
	var ulActivities =document.createElement('ul');
	var liDate = document.createElement('li');
	liDate.innerHTML = dates[i];
	liDate.className = "date";
	ulActivities.appendChild(liDate);
	for(var j = 0; j < activities.length; j++){
		var activiy = "<strong>" + activities[j] + " : </strong>" + copyOfChildrens[0];
		myDay.push(activiy);
		copyOfChildrens.shift();
		if(copyOfChildrens.length == 0){
			var copyOfChildrens = [];
			for(var k = 0; k < childrens.length; k++){
				copyOfChildrens.push(childrens[k]);
			}
		}
		var liActiviy = document.createElement('li');
		liActiviy.innerHTML = activiy;
		ulActivities.appendChild(liActiviy);
	}
	document.getElementById('myDates').appendChild(ulActivities);

}

console.log(myDates);