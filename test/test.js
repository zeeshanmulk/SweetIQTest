var assert = require('assert');
var app = require('./../app.js');


describe('Ops test', function()
{
    it('returns 1+1 = 2', function(done)
    {
        assert.equal(app.doOps('+',1,1), 2);
        done();
    });

    it('returns 2/0 = 0', function(done)
    {
        assert.equal(app.doOps('/',2,0), 0);
        done();
    });


});