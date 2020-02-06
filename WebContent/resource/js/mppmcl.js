/* Customer Search */
function doSubmit() {
	var emptyCheck = 0;
	$(':input[type=text]', '#searchForm').each(function() {
		this.value = $.trim(this.value);
		if (this.value != "") {
			emptyCheck = 1;
		}
	});
	if (emptyCheck == 0) {
		$('#errorAlert').text('Please enter at least one field');
		return false;
	}
}
function clearForm() {
	
	$(':input', '#searchForm').each(function() {
		var type = this.type;
		var tag = this.tagName.toLowerCase();
		if (type == 'text' || tag == 'textarea')
			this.value = "";
	});
}