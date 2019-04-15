sap.ui.define([
	'jquery.sap.global',
	"sap/m/Popover",
	"sap/m/Button",
	"com/itc/alturki_ui_test/controller/BaseController"
], function (jQuery, Popover, Button, BaseController) {
	"use strict";

	return BaseController.extend("com.itc.alturki_ui_test.controller.View1", {

		onInit: function () {
			var oRouter = this.getRouter();

			oRouter.getRoute("RouteView1").attachMatched(this._onRouteMatched, this);
		},
		_onRouteMatched: function (oEvent) {
			var oArgs, oView;

			oArgs = oEvent.getParameter("arguments");
			oView = this.getView();

			// oView.bindElement({
			// 	path : "/Employees(" + oArgs.employeeId + ")",
			// 	events : {
			// 		change: this._onBindingChange.bind(this),
			// 		dataRequested: function (oEvent) {
			// 			oView.setBusy(true);
			// 		},
			// 		dataReceived: function (oEvent) {
			// 			oView.setBusy(false);
			// 		}
			// 	}
			// });
		},
		onSave: function () {
			this.getRouter().navTo("AddEmployees");
		},
		onNaviBack: function () {
			this.onNavBack();
		},
		onUserNamePress: function (event) {
			var popover = new Popover({
				showHeader: false,
				placement: sap.m.PlacementType.Bottom,
				content: [
					new Button({
						text: 'Feedback',
						type: sap.m.ButtonType.Transparent
					}),
					new Button({
						text: 'Help',
						type: sap.m.ButtonType.Transparent
					}),
					new Button({
						text: 'Logout',
						type: sap.m.ButtonType.Transparent
					})
				]
			}).addStyleClass('sapMOTAPopover sapTntToolHeaderPopover');

			popover.openBy(event.getSource());
		}
	});
});