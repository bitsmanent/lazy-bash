function collects(elems) {
	var len = elems.length, name, i, ret = {};
	for(i = 0; i < len; ++i) {
		name = elems[i].getAttribute('name');

		/* handle [] */
		if(name.indexOf('[]') != -1) {
			name = name.replace('[]', '');
			if(typeof ret[name] == 'undefined')
				ret[name] = [];
			ret[name].push(elems[i].value);
		}
		else
			ret[name] = elems[i].value;
	}
	return ret;
}

function serialize(obj, _name) {
	var i, pfx, str = [];
	if(!obj)
		return _name;
	if(obj.length && typeof obj[i] != 'string') { /* arrays */
		for(i = 0; i < obj.length; ++i) {
			pfx = (_name ? _name+'['+i+']' : i);
			str.push(pfx+'='+obj[i]);
		}
	}
	else { /* objects */
		for(i in obj) {
			pfx = (_name ? _name+'['+i+']' : i);
			if(typeof obj[i] == 'string' || typeof obj[i] == 'number') {
				if(obj[i].replace)
					str.push(pfx+'='+obj[i].replace(/&/g, '%26'));
				else
					str.push(pfx+'='+obj[i]);
			}
			else
				str.push(serialize(obj[i], (_name ? _name+'['+i+']' : i)));
		}
	}
	return str.join('&');
}

function xhr(method, action, data, callback) {
	var r = new XMLHttpRequest();

	r.onreadystatechange = function() {
		if(r.readyState == 4 && r.status == 200)
			callback(JSON.parse(r.responseText)); /* always expect JSON */
	};

	//r.overrideMimeType('text/plain; charset=x-user-defined');
	switch(method.toUpperCase()) {
		case 'POST':
			r.open(method, action, true);
			r.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
			data = serialize(data);
			break;
		case 'GET':
			if(data) {
				data = serialize(data);
				action += ((action.indexOf('?') == -1) ? '?' : '&')+data;
				data = null;
			}
			r.open(method, action, true);
					break;
		default:
			console.err(method+': method not supported');
			return;
	}
	r.send(data);
}
