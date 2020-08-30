/**
 * Copyright (c) 2015 Meizu bigertech, All rights reserved.
 * http://www.bigertech.com/
 * @author JerryC
 * @date  15/7/23
 * @description
 *
 */
var libATK = require("../atkFileDeal");
var lib = require("../index");
var fs = require('fs');
var muk = require("muk");
var rewire = require("rewire");
var assert = require("assert")

describe('module ATKFileDeal', function () {

  // 普通测试
  describe('limit', function () {
    it('limit should success', function () {
      assert.equal(lib.limit(10), 10);
      assert.equal(lib.limit(-1), 0);
    });
  });

  // 测试私有方法
  describe('add', function () {
    it('add', function () {
      var lib = rewire('../index');
      var add = lib.__get__('_adding');
      var sum = add(1, 3);
      assert.equal(sum, 4);
    });
  });

});