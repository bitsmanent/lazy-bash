(function() {
function $(s) {
	return document.querySelector(s);
}

function $$(s) {
	return document.querySelectorAll(s);
}

function sanitize(s) {
	return s.replace(/\\\\/g, '%5c');
}

function sanitizeall() {
	var elems, len, i;

	elems = $$('a[href]');
	len = elems.length;
	for(i = 0; i < len; ++i)
		elems[i].setAttribute('href', sanitize(elems[i].getAttribute('href')));
}

function fixlinks() {
	var elems, len, i;

	elems = $$('a[href]');
	len = elems.length;
	for(i = 0; i < len; ++i)
		elems[i].setAttribute('target', 'remote');
}

function main() {
	sanitizeall();
	fixlinks();
}

window.addEventListener('DOMContentLoaded', main);
})();
