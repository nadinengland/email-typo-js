# email-typo-js

Inspired by a [tweet](http://twitter.com/#!/jakemarsh/status/196056331441029120) from [@jakemarsh](http://twitter.com/#!/jakemarsh), email-typo-js will give you a list of alternatives if it believes that the email's [Top Level Domain](http://en.wikipedia.org/wiki/List_of_Internet_top-level_domains) isn't valid. The most common use case for this is the classic `@whatever.con`, clearly this should be `@whatever.com` (take note of the 'm' instead of 'n').

## Usage

Using email-typo-js is as simple as loading `release/email-typo.js` into your JS environment, which will add the new prototype method `String#emailTypoAlternatives`. NOTE: `String#emailTypoAlternatives` is only added if it isn't already defined, ie `=== undefined`;

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

### Email Validation

It should be noted that email-typo-js only checks the [Top Level Domain](http://en.wikipedia.org/wiki/List_of_Internet_top-level_domains), if the string doesn't end with `.x` things will go wrong. It is recommended that you validate the email prior to checking for TLD typos.

```javascript
"email".emailTypoAlternatives();        // => null
"email.con".emailTypoAlternatives();    // => ['.com']
"@email.co.uj".emailTypoAlternatives(); // => ['.uk']

// Validate first
email = "email@email.con";
if (email.match(regExp) !== null && email.emailTypoAlternatives() === null) {
  // We possibly have a valid email
}
```

### Extending Known Typo List

It is more than likely that you may need to cater for a typo that email-typo-js doesn't know about. Pass a object with typo's as keys to extend the known list for that call. Each key should have an array of alternatives.

```javascript
"email@email.examplr".emailTypoAlternatives({
  'examplr' : [
    'example',
    'exemple',
    'esempio'
  ]
});   // => ['.example', '.exemple', '.esempio']
```


## Contributions

Please fork and submit pull requests, or submit issues via github!

## To Do

- Make NodeJS package
- JSMin the code
- Actually, create a script to do the min and create a release
- create a release directory and add a release!