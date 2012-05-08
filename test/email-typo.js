var EmailTypo = require("../source/email-typo.js")
  , should = require("should");

describe('String', function () {
  describe('#emailTypoAlternatives()', function () {
    it("should return null when there are no alternatives", function () {

      should.not.exist(EmailTypo.alternatives("email@whatever.com"));
      should.not.exist(EmailTypo.alternatives("email@whatever.co.uk"));
    });
    
    it("should return an array of alternatives if a typo is known", function () {
      ['.com'].should.eql(EmailTypo.alternatives("email@whatever.con"));
      ['.co.uk'].should.eql(EmailTypo.alternatives("email@whatever.couk"));
    });

    it("should allow extensions to the known typos to be provided", function () {
      EmailTypo.alternatives("email@example.examplr", { 'examplr' : ['example'] }).should.eql(['.example']);
    });

    it("should only use the extensions on a per-function call basis", function () {
      should.not.exist(EmailTypo.alternatives("email@example.examplr"));
    })

    it("should not return alternatives if a TLD isn't present", function () {
      /*var exampleAlts = ['example', 'exemple', 'esempio']
        , exampleAltsStr = exampleAlts.map(function (x) { return '.' + x });
      */

      ['.example'].should.not.eql(EmailTypo.alternatives("email@example.example", { 'examplr' : ['example'] }));
    });
  });
});
