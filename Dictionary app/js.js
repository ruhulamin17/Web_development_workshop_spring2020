{
	var x = document.getElementById("t");
	x.addEventListener("focusin", FocusIn);
	x.addEventListener("focusout", FocusOut);

	function FocusIn(x) {
	  document.getElementById("txdig").style.display = 'block';
	}

	function FocusOut(x) {
	  document.getElementById("txdig").style.display = 'none';  
	}
	
}
{
	var y = document.getElementById("t");
	y.addEventListener("focusin", FocusIn);
	y.addEventListener("focusout", FocusOut);
	function FocusIn(y) {
	  document.getElementById("tx").style.display = 'none';
	}
	function FocusOut(y) {
	  document.getElementById("tx").style.display = 'block';  
	}
}	
