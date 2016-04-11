sap.ui.jsview("hanapokers.table", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf hanapokers.table
	*/ 
	getControllerName : function() {
		return "hanapokers.table";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf hanapokers.table
	*/ 
	createContent : function(oController) {
		
		var configHeader = new sap.m.Bar({
			contentLeft: [new sap.m.Button({icon: "../img/sap-logo.png"})],
			contentMiddle: [new sap.m.Label({text: "Dublin Menu"})],  
	    	contentRight: [new sap.m.Button({icon: "../img/config.png"})]
	    });
	

		var mondayForm = new sap.ui.layout.form.Form("mForm",{
			title: new sap.ui.core.Title({text: "Monday Menu"}),
			layout: new sap.ui.layout.form.GridLayout(),
			formContainers: [
				new sap.ui.layout.form.FormContainer("F1C1",{
					title: "Monday",
					formElements: [
					        new sap.ui.commons.DatePicker({yyyymmdd: "19990909"}),
							new sap.ui.commons.Label({text:"Starters"}),
							new sap.ui.commons.TextField({value: "1"}),
							new sap.ui.commons.TextField({value: "1"}),
							new sap.ui.commons.Label({text:"Main"}),
							new sap.ui.commons.TextField({value: "1"}),
							new sap.ui.commons.TextField({value: "1"}),
							new sap.ui.commons.TextField({value: "1"}),
							new sap.ui.commons.Label({text:"Dessert"}),
							new sap.ui.commons.TextField({value: "1"})
							
							
				]})
			]
						
		});

		

		var mainPage = new sap.m.Page("dublinUpdatePage",{
			customHeader: configHeader,
 			title: "Dublin Menu",
 			backgroundDesign: sap.m.PageBackgroundDesign.List,
 			icon: "../img/sap-logo.png",
 			content : [mondayForm]});
		
		return mainPage;
	}

});
