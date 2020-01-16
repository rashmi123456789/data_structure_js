const Queue = require('../src/queue/queue');
const assert = require('assert');
var expect = require('chai').expect;


const queue = new Queue();
const queueWithMaxSize = new Queue(2);

describe('Queue', function() {

  describe('enqueue()', function() {
    it('should return length 1 when 1 item is enqueue', function() {
        queue.enqueue(1);
        assert.equal(queue.actualSize(),1);
    });
  });

  describe('dequeue()', function() {
    it('should return 1 when pushed element is popped', function() {
        assert.equal(queue.dequeue(),1);
        assert.equal(queue.isEmpty(),true);
    });
  });

  describe('dequeue()', function() {
    it('should throw an error when empty queue is dequeue', function() {
        expect(function(){
            queue.dequeue()
        }).to.throw(Error,'The Queue is Empty, Unable to dequeue()');
    });
  });

  describe('isEmpty()', function() {
    it('should return true when run isEmpty() when there are no elements in queue', function() {
        assert.equal(queue.isEmpty(),true);
    });
  });

  describe('size()', function() {
    it('should return length 4 when 4 item is enqueued', function() {
        queue.enqueue('a');
        queue.enqueue('b');
        queue.enqueue('c');
        queue.enqueue('d');
        assert.equal(queue.size(),5);
    });
  });

  describe('isEmpty()', function() {
    it('should return false when run isEmpty() when having elements in queue', function() {
        assert.equal(queue.isEmpty(),false);
    });
  });

  describe('printQueue()', function() {
    it('should return all elements in queue', function() {
        assert.equal(queue.printQueue().toString(),'a,b,c,d');
    });
  });

//   describe('isFull()', function() {
//     it('should return true when run isFull() while having maximum number of elements in queue', function() {
//         assert.equal(queue.isFull(),false);
//     });
//   });

//   describe('enqueue()', function() {
//     it('should throw an error when enqueue to the queue more than maximum capacity', function() {
//         expect(function(){
//             queueWithMaxSize.enqueue('a');
//             queueWithMaxSize.enqueue('b');
//             queueWithMaxSize.enqueue('c');
//         }).to.throw(Error,'The queue is overflowing.');
//     });
//   });

//   describe('front()', function() {
//     it('should return frontmost element in queue', function() {
//         assert.equal(queue.frontElement(),'a');
//     });
//   });

//   describe('dequeue()', function() {
//     it('should return rear element in queue, size should be 3 and front element should be b', function() {
//         assert.equal(queue.dequeue(),'a');
//         assert.equal(queue.size(),3);
//         assert.equal(queue.frontElement(),'b');
//         assert.equal(queue.rearElement(),'d');
//     });
//   });
  
});