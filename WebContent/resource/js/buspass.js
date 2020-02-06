
try{
$(document).ready(function() {
            $('#btnAdd').click(function() {
              /*  var num     = $('.clonedInput').length; // how many "duplicatable" input fields we currently have
                var newNum  = new Number(num + 1);      // the numeric ID of the new input field being added
 
                // create the new element via clone(), and manipulate it's ID using newNum value
                var newElem = $('#input' + num).clone().attr('id', 'input' + newNum);
 
                // manipulate the name/id values of the input inside the new element
                newElem.children(':first').attr('id', 'name' + newNum).attr('name', 'name' + newNum);
 
                // insert the new element after the last "duplicatable" input field
                $('#input' + num).after(newElem);*/
                
            	
                var len = $("#dependents").val();
                if(len>=4)
                	{
                		alert(MaximumLimitExceeds);
                		return false;
                	}
                len++;              
               
                var srNo = "<td><input type='hidden' value='0' id='StudentCB_"+len+"' name='StudentCB_"+len+"'><input type='text' id='SrNo_"+len+"' readonly  style='text-align:right;' value='"+len+"' name='SrNo_"+len+"' maxlength='3' size='4'></td>";
                var studentName = "<td><input type='text' id='StudentName_"+len+"' name='StudentName_"+len+"' ></td>";
                var studentAge = "<td><input type='text' id='StudentAge_"+len+"' name='StudentAge_"+len+"' style='text-align:right;' maxlength='2' size='4'></td>";
                var studentRelation = "<td><input type='text' id='StudentRelation_"+len+"' name='StudentRelation_"+len+"'></td>";
                var studentSchoolName = "<td><input type='text' id='StudentSchoolName_"+len+"' name='StudentSchoolName_"+len+"'></td>";
                var studentClass = "<td><input type='text' id='StudentClass_"+len+"' name='StudentClass_"+len+"' maxlength='3' size='4'></td>";
                var studentOldBusNumber = "<td><input type='text' id='StudentOldBusNumber_"+len+"' name='StudentOldBusNumber_"+len+"'></td>";	
                var studentPhoto = "<td><input type='hidden' id='StudentPhoto_"+len+"' name='StudentPhoto_"+len+"' value='' > <a href='' id='studentPhotoFile_"+len+"' target='new'></a> <input type='button' class='button' value='Choose File' id='btnUpload_"+len+"' onclick='upload("+len+");' /> </td>";
                $('#studentTable tr').last().after("<tr id='tr_'"+len+" >"+srNo+studentName+studentAge+studentRelation+studentSchoolName+studentClass+studentOldBusNumber+studentPhoto+"</tr>");
                $("#dependents").val(len);
                
                if(len>1)
                $('#btnDel').removeAttr('disabled');
               // alert( $("#dependents").val());
            });
 
            $('#btnDel').click(function() {
              
            	 	var len = $("#dependents").val();
            	 	
            	 	
            		 if($('#studentTable tr').size()>3){
            			 var dependentId = $("#StudentCB_"+len).val();
            			 if(dependentId>0)
            				 {
            				 	deleteDependent(dependentId);
            				 }
            			
            		 $('#studentTable tr:last-child').remove();
            		 len--;
             	 	$("#dependents").val(len);
            		 }else{
            			 alert('One row should be present in table');            		
            		 }
            	
            		 if($('#studentTable tr').size()==3){
            			 $('#btnDel').attr('disabled','disabled');
            		 }      
            });
 
            if($("#dependents").val()>1)
            	{
            	 $('#btnDel').removeAttr('disabled');
            	}
            else{
            	$('#btnDel').attr('disabled','disabled');
            	}
            
            
            $( "#BusPassForm" ).submit(function( event ) {
            	//alert( "Handler for .submit() called." );
            	if(doSubmit())
            		{
            		document.getElementById("BusPassForm").submit();
            		}
            	else
            		{
            		return false;
            		}
            	event.preventDefault();
            	});  
            
            
        });

}catch(e){}
function deleteDependent(dependentId)
{
	//alert("delete "+dependentId);
	$.post( "deleteDependent.htm?dependentId="+dependentId, function( data ) {
		//$( ".result" ).html( data );
		});
}
function changePassHolderType()
{
	var passHolderTypeId = $.trim($("#passHolderTypeId").val());
	 var len = $("#dependents").val();
	 
	if(passHolderTypeId==1)
		{
		 	$('#btnAdd').attr('disabled','disabled');
		 	$('#btnDel').attr('disabled','disabled');
		 	for(var i=1; i<=len; i++)
			{
		 		 $("#SrNo_"+i).attr('disabled','disabled');
				 $("#StudentName_"+i).attr('disabled','disabled');
				 $("#StudentAge_"+i).attr('disabled','disabled');
				 $("#StudentRelation_"+i).attr('disabled','disabled');
				 $("#StudentSchoolName_"+i).attr('disabled','disabled');
				 $("#StudentClass_"+i).attr('disabled','disabled');
				 $("#StudentOldBusNumber_"+i).attr('disabled','disabled');
				 $("#btnUpload_"+i).attr('disabled','disabled');
			}
		 	
		}
	else
		{
		 	$('#btnAdd').removeAttr('disabled');
		 	$('#btnDel').removeAttr('disabled');
		 	 if($('#studentTable tr').size()==3){
    			 $('#btnDel').attr('disabled','disabled');
    		 }  
		 	for(var i=1; i<=len; i++)
			{
		 		 $("#SrNo_"+i).removeAttr('disabled');
				 $("#StudentName_"+i).removeAttr('disabled');
				 $("#StudentAge_"+i).removeAttr('disabled');
				 $("#StudentRelation_"+i).removeAttr('disabled');
				 $("#StudentSchoolName_"+i).removeAttr('disabled');
				 $("#StudentClass_"+i).removeAttr('disabled');
				 $("#StudentOldBusNumber_"+i).removeAttr('disabled');
				 $("#btnUpload_"+i).removeAttr('disabled');
			}
		 	 
		}
}

/**
 * This function will validate form fields of Bus Pass Request.
 * @returns {Boolean}
 */
function doSubmit() {
	try{
		var letters = /^[A-Za-z]+$/;  
	//var emptyCheck = 0;
	//var dateOfRequest = $.trim($("#DateOfRequest").val());
	var passHolderTypeId = $.trim($("#passHolderTypeId").val());
	var startDate = $.trim($("#startDate").val());
	var endDate = $.trim($("#endDate").val());
	var source = $.trim($("#source").val());
	var destination = $.trim($("#destination").val());
	var fullName = $.trim($("#fullName").val());
	var designation = $.trim($("#designation").val());
	var departmentId = $.trim($("#departmentId").val());
	var employeeNo = $.trim($("#employeeNumber").val());
	var approverName = $.trim($("#approverName").val());
	var salaryDeduction = $.trim($("#salaryDeduction").val());
	var costCode = $.trim($("#costCode").val());
	var nearestBusStop = $.trim($("#nearestBusStop").val());
	var currentAddress = $.trim($("#currentAddress").val());
	var mobileTelephoneNo = $.trim($("#mobileTelephoneNo").val());
	var oldBusPassNo = $.trim($("#oldBusPassNo").val());
	var statusId = $.trim($("#statusId").val());
	
	
	if(passHolderTypeId==0)
	{
		alert(EmptyPassHolderType);
		$("#passHolderTypeId").focus();
		return false;
	}
	if(isEmpty(startDate))
		{
			alert(EmptyStartDate);
			$("#startDate").focus();
			return false;
		}
	if(isEmpty(endDate))
	{
		alert(EmptyEndDate);
		$("#endDate").focus();
		return false;
	}
	if(isEmpty(source))
	{
		alert(EmptySource);
		$("#source").focus();
		return false;
	}
	if(!source.match(letters))
	{
		alert(OnlyAlphabetsAllowed);
		$("#source").focus();
		return false;
	}
	if(isEmpty(destination))
	{
		alert(EmptyDestination);
		$("#destination").focus();
		return false;
	}
	if(!destination.match(letters))
	{
		alert(OnlyAlphabetsAllowed);
		$("#destination").focus();
		return false;
	}
	if(isEmpty(fullName))
	{
		alert(EmptyFullName);
		$("#fullName").focus();
		return false;
	}
	if(isEmpty(designation))
	{
		alert(EmptyDesignation);
		$("#designation").focus();
		return false;
	}
	if(isEmpty(departmentId))
	{
		alert(EmptyDeparmentName);
		$("#departmentId").focus();
		return false;
	}
	if(isEmpty(employeeNo))
	{
		alert(EmptyEmployeeNo);
		$("#employeeNumber").focus();
		return false;
	}
	if(isEmpty(salaryDeduction))
	{
		alert(EmptySalaryDeduction);
		$("#salaryDeduction").focus();
		return false;
	}
	if(isEmpty(costCode))
	{
		alert(EmptyCostCode);
		$("#costCode").focus();
		return false;
	}	
	if(isEmpty(nearestBusStop))
	{
		alert(EmptyNearestBusStop);
		$("#nearestBusStop").focus();
		return false;
	}
	if(isEmpty(currentAddress))
	{
		alert(EmptyCurrentAddress);
		$("#currentAddress").focus();
		return false;
	}
	if(isEmpty(mobileTelephoneNo))
	{
		alert(EmptyMobileTelephoneNo);
		$("#mobileTelephoneNo").focus();
		return false;
	}
	if(isEmpty(statusId))
	{
		alert(EmptyStatus);
		$("#statusId").focus();
		return false;
	}
	if(statusId==8 && isEmpty(oldBusPassNo))
	{
		alert(EmptyOldBusPassNo);
		$("#oldBusPassNo").focus();
		return false;
	}
	if(isEmpty(approverName))
	{
		alert(EmptyApproversName);
		$("#approverName").focus();
		return false;
	}
	
	if($("#passHolderTypeId").val()>1){
	if(validateStudent())
		{
		return true;
		}
	else{
		return false;
	}
	}
	return true;
	
	}catch(e){
		alert(e.message);
		}
	
}

/**
 * This function will validate if the user has entered data for all dependents
 * @returns {Boolean}
 */
function validateStudent()
{
	var len = $("#dependents").val();
	var numbers = /^[0-9]+$/;
	for(var i=1; i<=len; i++)
	{
		 if(isEmpty($("#StudentName_"+i).val()))
			 {
			 	alert(EmptyStudentName);
			 	$("#StudentName_"+i).focus();
			 	return false;
			 	
			 }
		 if(isEmpty($("#StudentAge_"+i).val()))
		 {
		 	alert(EmptyStudentAge);
		 	$("#StudentAge_"+i).focus();
		 	return false;
		 	
		 }
		 if(isNaN($("#StudentAge_"+i).val()))
		 {
		 	alert(InvalidStudentAge);
		 	$("#StudentAge_"+i).focus();
		 	return false;
		 	
		 }
		 if(isEmpty($("#StudentRelation_"+i).val()))
		 {
		 	alert(EmptyStudentRelation);
		 	$("#StudentRelation_"+i).focus();
		 	return false;
		 	
		 }
		 if(isEmpty($("#StudentSchoolName_"+i).val()))
		 {
		 	alert(EmptyStudentSchoolName);
		 	$("#StudentSchoolName_"+i).focus();
		 	return false;
		 	
		 }
		 if(isEmpty($("#StudentClass_"+i).val()))
		 {
		 	alert(EmptyStudentClass);
		 	$("#StudentClass_"+i).focus();
		 	return false;
		 	
		 }
		 if(isEmpty($("#StudentOldBusNumber_"+i).val()))
		 {
		 	alert(EmptyStudentOldBusNumber);
		 	$("#StudentOldBusNumber_"+i).focus();
		 	return false;
		 	
		 }
		 return true;
	}
	 
	 
}


/**
 * To modify Bus Pass Request
 * @param requestId
 */
function modifyRequest(requestId)
{

	window.location.href = "editBusPass.htm?requestId="+requestId;
}

/**
 * To submit Bus Pass Request
 * @param requestId
 */
function submitRequest(requestId)
{
	window.location.href = "submitBusPassRequest.htm?requestId="+requestId;
}

/**
 * To close Bus Pass Request
 * @param requestId
 */
function closeBusPassRequest(requestId)
{
	window.location.href = "closeBusPassRequest.htm?requestId="+requestId;
}

/**
 * To approve Bus Pass Request
 * @param requestId
 */
function approveRequest(requestId)
{
	window.location.href = "approveBusPassRequest.htm?requestId="+requestId+"&remarks="+$.trim($("#remarks").val());
}

/**
 * To print Bus Pass
 * @param requestId
 */
function printBusPass(requestId)
{
	window.open("printBusPass.htm?requestId="+requestId+"&remarks="+$.trim($("#remarks").val()),"printBusPass","");
}

/**
 * To generate Demand Note for Bus Pass Request
 * @param requestId
 */
function generateDemandNote(requestId)
{
	window.open("generateDemandNote.htm?requestId="+requestId+"&remarks="+$.trim($("#remarks").val()),"generateDemandNote","");
}

/**
 * To reject Bus Pass Request
 * @param requestId
 * @returns {Boolean}
 */
function rejectRequest(requestId)
{
	var remarks = $.trim($("#remarks").val());
	if(isEmpty(remarks))
		{
			alert(EmptyRemarks);
			return false;
		}
	else
		{
			window.location.href = "rejectBusPassRequest.htm?requestId="+requestId+"&remarks="+remarks;
		}
	
}
/**
 * To issue Bus Pass
 * @param requestId
 */
function issueBusPass(requestId)
{
	var newBusPassNo = $.trim($("#newBusPassNo").val());
	var busPassCost = $.trim($("#busPassCost").val());
	var dateOfIssue = $.trim($("#dateOfIssue").val());
	var dateOfExpiry = $.trim($("#dateOfExpiry").val());
	var dependents = $.trim($("#dependents").val()); 
	var numbers = /[-+][0-9]+\.[0-9]+$/;
	var salaryDeduction = $("#salaryDeduction").val();
	
	if($("#passHolderTypeId").val()>1){
		
			for(i=1; i<=dependents; i++)
				{
				if(isEmpty($.trim($("#dependentNewBPNo_"+i).val())))
					{
					alert(EmptyDependentNewPassNo);				
					$("#dependentNewBPNo_"+i).focus();
					return false;
					}
				}
	}
	else
		{
		if(isEmpty(newBusPassNo))
		{
			alert(EmptyNewPassNo);
			$("#newBusPassNo").focus();
			return false;
		}
		}
	if(isEmpty(busPassCost))
	{
		alert(EmptyBusPassCost);
		$("#busPassCost").focus();
		return false;
	}
	if(isNaN(busPassCost))  
		{  
		      alert(OnlyNumbersAllowed);  
		      $("#busPassCost").focus();
		      return false;  
	  }  
		
	if(isEmpty(dateOfIssue))
	{
		alert(EmptyDateOfIssue);
		$("#dateOfIssue").focus();
		return false;
	}
	if(isEmpty(dateOfExpiry))
	{
		alert(EmptyDateOfExpiry);
		$("#dateOfExpiry").focus();
		return false;
	}
	if('No' == salaryDeduction)
		{
		var recieptNo = $.trim($("#recieptNo").val());
		var dateOfPayment = $.trim($("#dateOfPayment").val()); 
			if(isEmpty(recieptNo))
			{
				alert(EmptyRecieptNo);
				$("#recieptNo").focus();
				return false;
			}
			if(isEmpty(dateOfPayment))
			{
				alert(EmptyDateOfPayment);
				$("#dateOfPayment").focus();
				return false;
			}
		}
	
	document.getElementById("BusPassForm").action = "issueBusPass.htm?requestId="+requestId;	
	document.getElementById("BusPassForm").submit();
}


function saveBusPassCost(requestId)
{
	var busPassCost = $.trim($("#busPassCost").val());
	var numbers = /[-+][0-9]+\.[0-9]+$/;
	
	if(isEmpty(busPassCost))
	{
		alert(EmptyBusPassCost);
		$("#busPassCost").focus();
		return false;
	}
	if(isNaN(busPassCost))  
		{  
		      alert(OnlyNumbersAllowed);  
		      $("#busPassCost").focus();
		      return false;  
	  }  
	
	document.getElementById("BusPassForm").action = "saveBusPassCost.htm?requestId="+requestId;	
	document.getElementById("BusPassForm").submit();
}

function upload(index)
{

	win = window.open("uploadDependentPhoto.htm?index="+index,"File_Upload","width=400px, height=200px");
	win.focus();
	}
function clearForm() {
	
	$(':input', '#NewBusPassForm').each(function() {
		var type = this.type;
		var tag = this.tagName.toLowerCase();
		if (type == 'text' || tag == 'textarea')
			this.value = "";
	});
}






