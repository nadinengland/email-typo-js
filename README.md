# email-typo-js

Inspired from a tweet by @jakemarsh, email-typo-js will give you a list of alternatives if it believes that the email's Top Level Domain isn't valid it will try to give you some possible alternatives. The most common use case for this is the classic `@whatever.con`, clearly this should be `@whatever.com` (take note of the 'm' instead of 'n').

## Examples `String#emailTypoAlternatives`

There are a two ways to use email-typo-js, the easiest way is to load the `release/email-typo.js` into your JS environment, allowing the new prototype method `emailTypoAlternatives` to be added to the `String` object.

### Simple

```javascript
// returns an $array% of alternatives, or %null%
var alternatives = "email@email.con".emailTypoAlternatives();
```

### jQuery Example

```javascript
$("#email").change(function (event) {
  var email = event.target.value
    , alternatives = email.emailTypoAlternatives();

  if (alternatives !== null && alternatives.length > 0) {
    alert(email + " => did you mean " + alternatives.toSentence("or") + "?";
  }
};
```

### DOM Example

```javascript
document.getElementById('email').onchange = function () {
  var email = this.value
    , alternatives = this.value.emailTypoAlternatives();

  if (alternatives !== null && alternatives.length > 0) {
    alert(this.value + " => did you mean " + alternatives.toSentence("or") + "?");
  }
};
```

## Exampes: as a function

If you are against altering the native objects (take a look at [Sugar](http://sugarjs.com) to see when it can work fantasticly), you can copy the `release/email-typo.function.js` text into your project and use it as a local function.

### Function
```javascript
var emailTypoAlternatives = (function (email) {
  // ...
}());

var alternatives = emailTypoAlternatives("email@email.con");
```
