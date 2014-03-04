var input=prompt("give me a number that is between 0 and 15  to pad")
    console.log(input)
          var output=padTo4Digits(input)
      console.log(output)
function convertDecToHex(dec)
{
  var local="the function did convert " +  dec
  console.log(local)
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
 var hex=convertDecToHex(input).toString()
 function padTo4Digits(toPad)
{
    if (toPad.length==1)
  {
      toPad= "000"+toPad
      return toPad;
  }
    else if (toPad.length==2)
  {
      toPad="00"+toPad
      return toPad;
  }
   else if (toPad.length==3)
  {
      toPad="0"+toPad
      return toPad;
  }
    else if (toPad.length>=4)
  {
      return toPad;
  }
}
console.log(padTo4Digits(hex));