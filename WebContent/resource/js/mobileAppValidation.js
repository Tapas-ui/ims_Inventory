
//Form Validation
$(document).ready(function() {
	function validte(){
		var  employeeName=$('#employeeName').val();
		if(employeeName==""){
			var msg = "Please Enter your name;" 
		   alert(msg);
			return  false;
		}
		return true;
	}
	
});
	