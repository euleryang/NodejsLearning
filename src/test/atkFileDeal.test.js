/**
 * Copyright (c) 2015 Meizu bigertech, All rights reserved.
 * http://www.bigertech.com/
 * @author JerryC
 * @date  15/7/23
 * @description
 *
 */
var lib = require("../atkFileDeal");
var fs = require('fs');
var muk = require("muk");
var rewire = require("rewire");

describe('module ATKFileDeal', function () {

  // 普通测试
  describe('limit', function () {
    it('limit should success', function () {
      lib.limit(10).should.be.equal(10);
      lib.limit(-1).should.be.equal(0);
      lib.limit(-2).should.be.equal(0);
    });
  });

  // 测试私有方法
  describe('add', function () {
    it('add', function () {
      var lib = rewire('../index');
      var add = lib.__get__('_adding');
      var sum = add(1, 3);
      sum.should.equal(4);
    });
  });

});