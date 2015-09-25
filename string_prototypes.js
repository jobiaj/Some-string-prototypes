String.prototype.startsWith = function(str) {
	return this.indexOf(str) === 0;
};

String.prototype.endsWith = function(suffix) {
	return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

String.prototype.isAlpha = function() {
	if (this.search(/[^A-Za-z\s]/) == -1) {
		return true;
	}
	else {
		return false;
	}
}

String.prototype.isAlphaNumeric = function() {
	if (this.search(/[^A-Za-z0-9\s]/) == -1) {
		if(this.isAlpha() || this.isNumeric()) {
			return false;
		}
		return true;
	}
	else {
		return false;
	}
}

String.prototype.isNumeric = function() {
	if (this.search(/[^0-9\s]/) == -1) {
		return true;
	}
	else {
		return false;
	}
}

String.prototype.isUpper = function() {
	if (this.search(/[^A-Za-z\s]/) == -1) {
		if(this == this.toUpperCase()) {
			return true;
		}
		else {
			return false;
		}
	}
	else {
		return false;
	}
}

String.prototype.isLower = function() {
	if (this.search(/[^A-Za-z\s]/) == -1) {
		if(this == this.toLowerCase()) {
			return true;
		}
		else {
			return false;
		}
	}
	else {
		return false;
	}
}

String.prototype.contains = function(str) {
	return ''.indexOf.call(this, str) !== -1;
}

String.prototype.collapseWhitespace = function() {
	return this.replace(/\s+/g, ' ');
}

String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
}

String.prototype.escapeHTML = function() {
	var tagsToReplace = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;'
	}
	return this.replace(/[&<>]/g, function(tag) {
		return tagsToReplace[tag] || tag;
	});
}