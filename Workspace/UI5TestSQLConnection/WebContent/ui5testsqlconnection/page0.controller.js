sap.ui
		.controller(
				"ui5testsqlconnection.page0",
				{

					/**
					 * Called when a controller is instantiated and its View
					 * controls (if available) are already created. Can be used
					 * to modify the View before it is displayed, to bind event
					 * handlers and do other one-time initialization.
					 * 
					 * @memberOf ui5testsqlconnection.page0
					 */
					onInit : function() {
						var oModel = new sap.ui.model.json.JSONModel(
								"http://services.odata.org/V3/Northwind/Northwind.svc/Customers");
						sap.ui.getCore().setModel(oModel);
						debugger;
					},

					/**
					 * Similar to onAfterRendering, but this hook is invoked
					 * before the controller's View is re-rendered (NOT before
					 * the first rendering! onInit() is used for that one!).
					 * 
					 * @memberOf ui5testsqlconnection.page0
					 */
					// onBeforeRendering: function() {
					//
					// },
					/**
					 * Called when the View has been rendered (so its HTML is
					 * part of the document). Post-rendering manipulations of
					 * the HTML could be done here. This hook is the same one
					 * that SAPUI5 controls get after being rendered.
					 * 
					 * @memberOf ui5testsqlconnection.page0
					 */
					// onAfterRendering: function() {
					//
					// },
					/**
					 * Called when the Controller is destroyed. Use this one to
					 * free resources and finalize activities.
					 * 
					 * @memberOf ui5testsqlconnection.page0
					 */
					// onExit: function() {
					//
					// }
					getCustomers : function() {

						/*
						 * var oModel = new sap.ui.model.json.JSONModel(
						 * "http://services.odata.org/V3/Northwind/Northwind.svc/Customers");
						 * 
						 * $.ajax({ url :
						 * "http://services.odata.org/V3/Northwind/Northwind.svc/Customers",
						 * dataType : 'json', success : function(response) { var
						 * data = response.value; oModel.setData(data); } });
						 
						sap.ui.getCore().setModel(oModel); */
					}
				});
