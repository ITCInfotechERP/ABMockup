/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/itc/alturki_ui_test/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});