sap.ui.jsview("odatawithjs.ODataWithJS", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf odatawithjs.ODataWithJS
	 */
	getControllerName : function() {
		return "odatawithjs.ODataWithJS";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf odatawithjs.ODataWithJS
	 */
	createContent : function(oController) {
		var oTable = new sap.ui.table.Table({
			tableID : "new",
			visibleRowCount : 5,
			editable : false
		});
		var oControl = new sap.ui.commons.TextView({text:"{ContactName}"})
		
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Contact Name"}),
			visible: true,
			template:oControl
		} ))
		
		oTable.bindRows("/value");
		return oTable;
	}
});