var d=new Date();
document.write(d);
function checkWeekend ()
{
	if (d==0 || d==6)
	 {
		return("it's a weekend")

	}
	else 
	{
       return ("it's a weeday")
	}
}
console.log(checkWeekend(d))
document.write(checkWeekend(d))
