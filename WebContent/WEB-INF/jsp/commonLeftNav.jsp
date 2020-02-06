
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<div id="">
	<div id="left-nav" class="left-nav">

		<div class="caption">
			<h1>Data Enter Section</h1>
		</div>
		 <div class="menu">
			<ul id="example">
				<li><p>Profile</p>
					<ul>
						<li><a
							href="<%=request.getContextPath()%>/public/membership.htm">Membership</a></li>
						<li><a
							href="<%=request.getContextPath()%>/#">Personal information</a>
						<li><a
							href="<%=request.getContextPath()%>/#">Passport
								Details</a></li>
						<li><a
							href="<%=request.getContextPath()%>/#">Skile Set</a></li>
						<li><a
							href="<%=request.getContextPath()%>/#">Languages</a></li>
				        <li><a  href="<%=request.getContextPath()%>/#">Work
					          Experience</a></li>
			</ul>
		</li>

			<li><p>Billing Section</p>
					<ul>
						<li><a
							href="<%=request.getContextPath()%>/public/billingUpload.htm">Upload
								BSNL Bill From Here</a></li>
						<li><a
							href="<%=request.getContextPath()%>/public/searchInvoice.htm">Search
								Invoices</a>
					</ul></li>
				<li><p>Back UP Section</p>
					<ul>
						<li><a
							href="<%=request.getContextPath()%>/public/backupdata.htm">Backup
								Data</a></li>
					</ul></li>

				<li><p>Master data</p>
					<ul>
						<li><a
							href="<%=request.getContextPath()%>/public/designatinMaster.htm">Designation
								Master</a></li>
						<li><a
							href="<%=request.getContextPath()%>/public/officeMaster.htm">Office
								Master</a></li>

					</ul></li>

				<li><p>Report section</p>
					<ul>
						<li><a
							href="<%=request.getContextPath()%>/public/mobileNumberwiseBill.htm">Mobile
								Number wise Bill </a></li>
						<li><a
							href="<%=request.getContextPath()%>/public/recoveryDetails.htm">Recovery
								Details</a></li>
						<li><a
							href="<%=request.getContextPath()%>/public/CurrentSIMHoldersReport">Current
								SIM Holder's Report</a></li>
					</ul></li>
			</ul> 
			<script type="text/javascript">
				make_tree_menu('example');
			</script>
		</div>

	</div>
</div>
