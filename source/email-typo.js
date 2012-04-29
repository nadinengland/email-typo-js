(function () {
  var suggestions, typosPattern;

  if (String.prototype.emailTypoAlternatives !== undefined) return;

  suggestions = {
    'con' : ['com'],
    'couk' : ['co.uk']
  };

  typosPattern = new RegExp("(" + Object.keys(suggestions).join('|') + ")");

  String.prototype.emailTypoAlternatives = function () {
    var tld = this.slice(this.lastIndexOf('.') + 1);

    if (tld.match(typosPattern) !== null) {
      // a typo may have occured

      return "." + suggestions[tld];
    }

    return null;
  };
}());