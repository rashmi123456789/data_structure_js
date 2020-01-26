const CircularQueue = require('../src/circularQueue/circularQueue');
const assert = require('assert');
var expect = require('chai').expect;

const circularQueue = new CircularQueue(4);

describe('CircularQueue', function() {

  describe('enqueue()', function() {
    it('should return length 1 when 1 item is enqueued', function() {
        circularQueue.enqueue(1);
        assert.equal(circularQueue.size(),1);
    });
  });

  describe('dequeue()', function() {
    it('should return 1 when enqueued element is dequeued', function() {
        assert.equal(circularQueue.dequeue(),1);
        assert.equal(circularQueue.isEmpty(),true);
    });
  });

  describe('dequeue()', function() {
    it('should throw an error when empty circularQueue is dequeue', function() {
        expect(function(){
            circularQueue.dequeue()
        }).to.throw(Error,'The Circular Queue is Empty, Unable to dequeue()');
    });
  });

  describe('isEmpty()', function() {
    it('should return true when run isEmpty() when there are no elements in circularQueue', function() {
        assert.equal(circularQueue.isEmpty(),true);
    });
  });

  describe('size()', function() {
    it('should return length 4 when 4 item is encircularQueued', function() {
        circularQueue.enqueue('a');
        circularQueue.enqueue('b');
        circularQueue.enqueue('c');
        circularQueue.enqueue('d');
        assert.equal(circularQueue.size(),4);
    });
  });

  describe('isEmpty()', function() {
    it('should return false when run isEmpty() when having elements in circular Queue', function() {
        assert.equal(circularQueue.isEmpty(),false);
    });
  });

  describe('printCircularQueue()', function() {
    it('should return all elements in circularQueue', function() {
        assert.equal(circularQueue.printCircularQueue().toString(),'a,b,c,d');
    });
  });

  describe('isFull()', function() {
    it('should return true when run isFull() while having maximum number of elements in circularQueue', function() {
        assert.equal(circularQueue.isFull(),true);
    });
  });

  describe('enqeue()', function() {
    it('should throw an error when enqueue to the circularQueue more than maximum capacity', function() {
        expect(function(){
            circularQueue.enqueue('a');
        }).to.throw(Error,'The Circular Queue is overflowing.');
    });
  });

  describe('getFrontElement()', function() {
    it('should return frontmost element in circularQueue', function() {
        assert.equal(circularQueue.getFrontElement(),'a');
    });
  });

  describe('getRearElement()', function() {
    it('should return last element in circular Queue', function() {
        assert.equal(circularQueue.getRearElement(),'d');
    });
  });

  describe('dequeue()', function() {
    it('should return rear element in circularQueue, size should be 3 and front element should be b', function() {
        assert.equal(circularQueue.dequeue(),'a');
        assert.equal(circularQueue.size(),3);
        assert.equal(circularQueue.getFrontElement(),'b');
        assert.equal(circularQueue.getRearElement(),'d');
    });
  });

  describe('dequeue()', function() {
    it('should return rear element in circularQueue, size should be 3 and front element should be b', function() {
        assert.equal(circularQueue.dequeue(),'b');
        assert.equal(circularQueue.printCircularQueue(),'c,d');
        assert.equal(circularQueue.size(),2);
        assert.equal(circularQueue.getFrontElement(),'c');
        assert.equal(circularQueue.getRearElement(),'d');
        circularQueue.enqueue('e');
        assert.equal(circularQueue.printCircularQueue(),'c,d,e');
        circularQueue.enqueue('f');
        assert.equal(circularQueue.printCircularQueue(),'c,d,e,f');
    });
  });
  
});