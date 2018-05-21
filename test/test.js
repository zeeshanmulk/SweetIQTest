var assert = require('assert');

//Note that on non-Windows platform, the pathing could be different to the 'app.js' file.
var app = require('./../app.js');


describe('Basic operations test', function()
{
    it('Standard operations', function(done)
    {
        assert.equal(app.doOps('+',1,1), 2);
        assert.equal(app.doOps('-',100,-100), 200);
        assert.equal(app.doOps('/',1,1), 1);
        assert.equal(app.doOps('*',10,10), 100);
        done();
    });
});

describe('Invalid tests', function()
{
    it('Invalids', function(done)
    {
        assert.equal(app.doOps('abcd',9007199254740991,-9007199254740991), "Invalid operator passed.");
        assert.equal(app.doOps('a',9007199254740991,-9007199254740991), "Invalid operator passed.");
        assert.equal(app.doOps('/',1,0), "Division by zero.");
        assert.equal(app.doOps('*',-10,10), -100);
        done();
    });
});