const Stack = require('../src/stack/stack');
const assert = require('assert');
var expect = require('chai').expect;


const stack = new Stack();

describe('Stack', function() {

  describe('push()', function() {
    it('should return length 1 when 1 item is pushed', function() {
        stack.push(1);
        assert.equal(stack.size(),1);
    });
  });

  describe('pop()', function() {
    it('should return 1 when pushed element is popped', function() {
        assert.equal(stack.pop(),1);
    });
  });

  describe('pop()', function() {
    it('should throw an error when empty array is popped', function() {
        expect(function(){
            stack.pop()
        }).to.throw(Error,'The Stack is Empty, Unable to pop()');
    });
  });

  describe('isEmpty()', function() {
    it('should return true when run isEmpty() when there are no elements in stack', function() {
        assert.equal(stack.isEmpty(),true);
    });
  });

  describe('size()', function() {
    it('should return length 4 when 4 item is pushed', function() {
        stack.push('a');
        stack.push('b');
        stack.push('c');
        stack.push('d');
        assert.equal(stack.size(),4);
    });
  });

  describe('isEmpty()', function() {
    it('should return false when run isEmpty() when having elements in stack', function() {
        assert.equal(stack.isEmpty(),false);
    });
  });

  describe('printStack()', function() {
    it('should return all elements in stack', function() {
        assert.equal(stack.printStack().toString(),'a,b,c,d');
    });
  });

  describe('printStack()', function() {
    it('should return elements begining with from value to end with to value in stack', function() {
        assert.equal(stack.printStack(1,3).toString(),'b,c');
    });
  });





});