(function (w) {
  var defaultTypoCollection
    , defaultTypoPattern
    , EmailTypo;

  if (String.prototype.emailTypoAlternatives !== undefined) return;

  defaultTypoCollection = {
    'con' : ['com'],
    'couk' : ['co.uk'],
    'ik' : ['uk'],
    'uj' : ['uk']
  };

  function createTypoPattern(typos) {
    return new RegExp("(" + Object.keys(typos).join('|') + ")")
  }

  function mergedObject(a, b){
    var c = {};

    Object.keys(a).forEach(function (key) {
      c[key] = a[key];
    });
    
    Object.keys(b).forEach(function (key) {
      c[key] = b[key];
    })
    
    return c;
  }

  defaultTypoPattern = createTypoPattern(defaultTypoCollection);

  EmailTypo = {
    alternatives: function (email, extensions) {
      var tld = email.slice(email.lastIndexOf('.') + 1)
        , typoCollection = defaultTypoCollection
        , typoPattern = defaultTypoPattern;

      if (extensions !== undefined) {
        // Merge the collections, with the extensions overriding the defaults
        typoCollection = mergedObject(defaultTypoCollection, extensions);
        typoPattern = createTypoPattern(typoCollection);
      }
      
      if (tld.match(typoPattern) !== null) {
        // a typo may have occured
        return typoCollection[tld].map(function (x) {
          return "." + x;
        });
      }

      // Not a typo that we're aware of
      return null;
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    // Node enviroment
    module.exports = EmailTypo;
  } else {
    // Browser Enviroment
    w['EmailTypo'] = EmailTypo
  }
}(this));