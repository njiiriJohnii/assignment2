var input=prompt("Enter a number between 0 to 15:")//get user input
input=parseInt(input)
//console.log(input)
 /** if (input>=0 && input<=15)
 {
 alert("you entered" + input)
 }
else
{
input=prompt("bad input!! TRy again must be 0-15")
alert("you entered"+input)
}*/
//check for a valid input
while (input<0  || input>15 || isNaN(input))
{
  input=prompt("bad input! try again must be between 0 to 15")
   input=parseInt(input)
}
alert("you have entered " + input)
//console.log(typeof(input))
//console.log(input)
//convert to hex


/**function convertDecToHex(dec)
{
var local ="the function did" + dec
console.log(local)
return local
}
var hex=convertDecToHex(input);*/
function convertDecToHex(dec)
{//var local ="the function did" + dec
   //  console.log(local)
	if (dec>=0 && dec<=9)
	 {
		return dec
	}
 else if (dec==10)
 {
 	return ("A");
 }
  else if (dec==11) {
  	return ("B");
  }
  else if (dec==12)
  {
  	return ("C");
  }
  else if(dec=13)
  {
  	return ("D");
  }
  else if (dec=14)
  {
  	return ("E");
  }
  else
  {
  	return ("F");
  }
}
var hex=convertDecToHex(input);
document.write(input+ " is " + hex + " in hex")