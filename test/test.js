var assert = require('assert');

//Note that on non-Windows platform, the pathing could be different to the 'app.js' file.
var app = require('./../app.js');


describe('Basic operations test', function()
{
    it('Standard operations', function(done)
    {
        assert.equal(app.doOps('+',4,6), 10);
        assert.equal(app.doOps('-',100,-100), 200);
        assert.equal(app.doOps('/',1,1), 1);
        assert.equal(app.doOps('/',0,1), 0);
        assert.equal(app.doOps('*',10,-10), -100);
        done();
    });

    it('Float operations', function(done)
    {
        assert.equal(app.doOps("/", 1.01, 100), 0.0101);
        assert.equal(app.doOps("+", 1.01, 100), 101.01);
        assert.equal(app.doOps("-", 100, 0.01), 99.99);
        assert.equal(app.doOps("*", 1, 0.1), 0.1);
        done();
    });
});

describe('Invalid tests', function()
{
    it('Invalids', function(done)
    {
        assert.equal(app.doOps('abcd',2,3), "Invalid operator passed.");
        assert.equal(app.doOps('a',4,-5), "Invalid operator passed.");
        assert.equal(app.doOps('/',1,0), "Division by zero.");
        done();
    });
});