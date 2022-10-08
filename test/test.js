var assert = require('assert');
var getScholarship = require('../index');
describe('Scholarship testing', function () {
  describe('Kiem thu dong dieu khien C2', function () {
    it('Test 1', function () {
      assert.equal(getScholarship(5, 3.0, 6.5), 'Không hợp lệ');
    });
    it('Test 2', function () {
      assert.equal(getScholarship(2, 2.5, 6.0), 'Không được học bổng');
    });
    it('Test 3', function () {
      assert.equal(getScholarship(3, 3.4, 7.0), 'Học bổng 50%');
    });
    it('Test 4', function () {
      assert.equal(getScholarship(3, 3.8, 7.5), 'Học bổng 100%');
    });
  });
});
