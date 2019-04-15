sap.ui.define(["com/itc/alturki_ui_test/controller/BaseController"], function (BaseController) {
	"use strict";
	return BaseController.extend("com.itc.alturki_ui_test.controller.LandingPage", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.itc.alturki_ui_test.view.LandingPage
		 */
		onInit: function () {
			var oRouter, oTarget;
			oRouter = this.getRouter();
			oTarget = oRouter.getTarget("LandingPage");
			oTarget.attachDisplay(this._onRouteMatched, this);
			// oRouter.getRoute("home").attachMatched(this._onRouteMatched, this);
		},
		onCreateAB: function () {
			this.getRouter().navTo("CreateActivityBook");
		},
		_onRouteMatched: function (oEvent) {
			var oArgs, oView;
			oArgs = oEvent.getParameter("arguments");
			oView = this.getView(); // oView.bindElement({
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
		/**
		 *@memberOf com.itc.alturki_ui_test.controller.LandingPage
		 */
		onNaviBack: function (oEvent) {
			this.onNavBack();
		}
	});
});