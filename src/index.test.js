/**
 * Copyright (c) 2015 Meizu bigertech, All rights reserved.
 * http://www.bigertech.com/
 * @author JerryC
 * @date  15/7/23
 * @description
 *
 */
var lib = require("./index");
var fs = require('fs');
var muk = require("muk");
var rewire = require("rewire");
var assert = require("assert");

describe('Array', function(){
    describe('#indexOf()', function(){
          it('should return -1 when the value is not present', function(){
            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        })
    })
});

describe('module', function () {

  // 普通测试
  describe('limit', function () {
    it('limit should success', function () {
      assert.equal(lib.limit(10), 10);
      assert.equal(lib.limit(-1), 0);
      //lib.limit(10).should.be.equal(10);
      //lib.limit(-1).should.be.equal(0);
    });
  });

  // 异步测试
  describe('async', function () {
    it('async', function (done) {
      lib.async(function (result) {
        done();
      });
    });
  });

  // 异常测试
  describe("getContent", function () {
    before(function () {
      muk(fs, 'readFile', function(path, encoding, callback) {
        process.nextTick(function () {
          callback(new Error("mock readFile error"));
        });
      });
    });
    it('getContent', function (done) {
      lib.getContent('text.txt', function (err, file) {
        assert.ok(err);
        //err.should.be.ok();
        done();
      })
    });
    after(function () {
      muk.restore();
    });
  });

  // 测试私有方法
  describe('add', function () {
    it('add', function () {
      var lib = rewire('../index');
      var add = lib.__get__('_adding');
      var sum = add(1, 3);
      assert.equal(sum, 4);
      //sum.should.equal(4);
    });
  });
});