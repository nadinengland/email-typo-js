var emailTypo = require("../source/email-typo.js")
  , assert = require("assert");

(function () {
  assert.notEqual("email@whatever.con".emailTypoAlternatives(), null, ".con should have alternatives");
  assert.notEqual("email@whatever.couk".emailTypoAlternatives(), null, ".couk should have alternatives");
  
  assert.equal("email@whatever.con".emailTypoAlternatives(), ['.com'], ".con should return ['.com']");
  assert.equal("email@whatever.couk".emailTypoAlternatives(), ['.co.uk'], ".couk should return ['.co.uk']");
  
  assert.notEqual("email@con".emailTypoAlternatives(), ['.com'], "*@con should not equal ['.com']");
  assert.notEqual("email@couk".emailTypoAlternatives(), ['.co.uk'], "*@con should not equal ['.co.uk']");
}());
