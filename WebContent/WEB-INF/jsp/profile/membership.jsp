<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%-- <%@taglib tagdir="" prefix="" %> --%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Membership</title>
</head>
<body>
<body>
	<h2 align="center">Member Ship Registered from</h2>
	<form>

		<table  align="center" border="1" height="280" width="400">
			<tr>
				<td>First Name</td>
				<td><input type="text" name="FirstName" id="FirstName"></td>
			</tr>
			<tr>
				<td>Last Name</td>
				<td><input type="text" name="lastName"></td>
			</tr>
			<tr>
				<td>Employee Working Status</td>
				<td><select id="status" name="status">
						<option value="yes">Select</option>
						<option value="yes">yes</option>
						<option value="No">No</option>
				</select></td>
			</tr>
			<tr>
				<td>Mobile Number</td>
				<td><input type="text" name="mobileNumber"></td>
			</tr>
			<tr>
				<td>Date</td>
				<td><input type="text" name="datepicker"></td>
			</tr>
			 
		</table>
		<div>
         <input type="submit" class="button"  value="Submit" > 
         </div> 
	</form>
</body>
</html>