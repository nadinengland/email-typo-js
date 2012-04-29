# email-typo-js

Inspired from a [tweet](http://twitter.com/#!/jakemarsh/status/196056331441029120) by [@jakemarsh](http://twitter.com/#!/jakemarsh), email-typo-js will give you a list of alternatives if it believes that the email's [Top Level Domain](http://en.wikipedia.org/wiki/List_of_Internet_top-level_domains) isn't valid. The most common use case for this is the classic `@whatever.con`, clearly this should be `@whatever.com` (take note of the 'm' instead of 'n').

## Usage

There are a two ways to use email-typo-js, the easiest way is to load the `release/email-typo.js` into your JS environment, allowing the new prototype method `emailTypoAlternatives` to be added to the `String` object. NOTE: `String#emailTypoAlternatives` is only added if it isn't already defined, ie `=== undefined`;

### Simple

```javascript
// returns an %array% of alternatives, or %null%
var alternatives = "email@email.con".emailTypoAlternatives(); // => ['.com']
```

### DOM Example

```html
<input id='email' type='email' value='email@email.con' />
```
```javascript
document.getElementById('email').onchange = function () {
  var email = this.value
    , alternatives = this.value.emailTypoAlternatives();

  if (alternatives !== null && alternatives.length > 0) {
    alert(this.value + " => did you mean " + alternatives.toSentence("or") + "?");
    // email@email.con => did you mean .com?
  }
};
```

### Non-native function

If you are against altering the native objects (take a look at [Sugar](http://sugarjs.com) to see when it can work fantasticly), you can copy the `release/email-typo.function.js` text into your project and use it as a local function. Just don't forget the license!

### Function
```javascript
var emailTypoAlternatives = (function (email) {
  // ...
}());

var alternatives = emailTypoAlternatives("email@email.con");
```