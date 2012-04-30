var emailTypo = require("../source/email-typo.js")
  , should = require("should");

describe('String', function () {
  describe('#emailTypoAlternatives()', function () {
    it("should return null when there are no alternatives", function () {

      should.not.exist("email@whatever.com".emailTypoAlternatives());
      should.not.exist("email@whatever.co.uk".emailTypoAlternatives());
    });
    
    it("should return an array of alternatives if a typo is known", function () {
      ['.com'].should.eql("email@whatever.con".emailTypoAlternatives());
      ['.co.uk'].should.eql("email@whatever.couk".emailTypoAlternatives());
    });

    it("should allow extensions to the known typos to be provided", function () {
      "email@example.examplr".emailTypoAlternatives({ 'examplr' : ['example'] }).should.eql(['.example']);
    });

    it("should only use the extensions on a per-function call basis", function () {
      should.not.exist("email@example.examplr".emailTypoAlternatives());
    })

    it("should not return alternatives if a TLD isn't present", function () {
      /*var exampleAlts = ['example', 'exemple', 'esempio']
        , exampleAltsStr = exampleAlts.map(function (x) { return '.' + x });
      */

      ['.example'].should.not.eql("email@example.example".emailTypoAlternatives({ 'examplr' : ['example'] }));
    });
  });
});
