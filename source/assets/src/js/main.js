
var feature = {
	addEventListener : !!window.addEventListener,
	querySelectorAll : !!document.querySelectorAll,
};




if (feature.addEventListener && feature.querySelectorAll) {

	var App = window.App || {};

	App.main = (function(window, document) {

	}(this, this.document));


}