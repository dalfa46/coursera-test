
 function getvalue() {
	number1 = document.getElementById('number1').value;
	number2 = document.getElementById('number2').value;

	 resultobject = {
	 	"number1": number1,
	 	"number2": number2
	 }
	 return resultobject;
}



	//plusoperation
	plusbutton = document.getElementById('plusbutton');
plusoperation = function() {

numbervalue = getvalue();
	sum = parseInt(numbervalue.number1) + parseInt(numbervalue.number2);

	var result = document.getElementById('result');
	result.innerText = sum;
}


plusbutton.addEventListener("click", plusoperation);



//minus operation
minusbutton = document.getElementById('minusbutton');
minusoperation = function() {

numbervalue = getvalue();
	difference = parseInt(numbervalue.number1) - parseInt(numbervalue.number2);

	var result = document.getElementById('result');
	result.innerText = difference;
}


minusbutton.addEventListener("click", minusoperation);


//multiplication operation


multbutton = document.getElementById('multbutton');
multoperation = function() {

numbervalue = getvalue();
	of = parseInt(numbervalue.number1) * parseInt(numbervalue.number2);

	var result = document.getElementById('result');
	result.innerText = of;
}


multbutton.addEventListener("click", multoperation);

//division
divbutton = document.getElementById('divbutton');
divoperation = function() {

numbervalue = getvalue();
	ans = parseInt(numbervalue.number1) / parseInt(numbervalue.number2);

	var result = document.getElementById('result');
	result.innerText = ans;
}


divbutton.addEventListener("click", divoperation);
