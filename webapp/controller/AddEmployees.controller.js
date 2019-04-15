sap.ui.define([
	"com/itc/alturki_ui_test/controller/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("com.itc.alturki_ui_test.controller.AddEmployees", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.itc.alturki_ui_test.view.AddEmployees
		 */
		onInit: function () {
			var oRouter = this.getRouter();

			oRouter.getRoute("AddEmployees").attachMatched(this._onRouteMatched, this);
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
		onGoToLP: function () {
			this.getRouter().getTargets().display("LandingPage");
		},
		/**
		 *@memberOf com.itc.alturki_ui_test.controller.LandingPage
		 */
		onNaviBack: function (oEvent) {
			this.onNavBack();
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.itc.alturki_ui_test.view.AddEmployees
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.itc.alturki_ui_test.view.AddEmployees
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.itc.alturki_ui_test.view.AddEmployees
		 */
		//	onExit: function() {
		//
		//	}

	});

});