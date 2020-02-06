<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
   pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<html>
   <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <title>
         <tiles:insertAttribute name="title" ignore="true" />
      </title>
      <script type="text/javascript" src="jquery.js"></script>
      <link rel="stylesheet" href="/ims_Inventory/resource/css/LeftNav/style.css">
      <link rel="stylesheet" href="/ims_Inventory/resource/css/LeftNav/treeestyle.css">
      <link rel="stylesheet" href="//code.jquery.com/ui/1.11.0/themes/smoothness/jquery-ui.css">
      <script src="//code.jquery.com/jquery-1.10.2.js"></script>
      <script src="//code.jquery.com/ui/1.11.0/jquery-ui.js"></script>
      <link rel="stylesheet" href="/ims_Inventory/resource/css/homepage/style.css">
      <script  src="/ims_Inventory/resource/js/LeftNav/TreeMenu.js" type="text/javascript"></script>
      <link rel="stylesheet" href="//code.jquery.com/ui/1.11.0/themes/smoothness/jquery-ui.css">
      <!-- 	 <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js"></script> -->
      <link href="/ims_Inventory/resource/css/homepage/bloa.css" rel="stylesheet">
      <script src="/ims_Inventory/resource/js/jquery.autocomplete.js"></script>
      <script type="text/javascript" src="/ims_Inventory/resource/js/jquery.validate.js"></script>
      <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
   </head>
   <body>
      <tiles:insertAttribute name="header" />
      <div class="">
         <div class="col-md-3 padl0">
            <tiles:insertAttribute name="leftMenu" />
         </div>
         <div class="col-md-9 padl0 padr0">
            <div id="main-content">
               <tiles:insertAttribute name="body" />
            </div>
         </div>
      </div>
      <tiles:insertAttribute name="footer" />
   </body>
</html>
