function check_all(val) {
	//alert("Hello");
	if(val.checked) { // check select status
		$('.checkbox1').each(function() { //loop through each checkbox
			this.checked = true;  //select all checkboxes with class "checkbox1"               
		});
	}else{
		$('.checkbox1').each(function() { //loop through each checkbox
			this.checked = false; //deselect all checkboxes with class "checkbox1"                       
		});         
	}
}