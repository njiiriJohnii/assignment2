
function convertDecToHex(dec)
{
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
