const DoublyLinkedList = require('../src/doublyLinkedList/doublyLinkedList');
const assert = require('assert');
var expect = require('chai').expect;

const doublyLinkedList = new DoublyLinkedList(1);

describe('DoublyLinkedList', function() {

    describe('getHead() and getDataItem()', function() {
        it('should return length 2 and data item of head', function() {
            const newNode = doublyLinkedList.createNewNode(2);
            doublyLinkedList.insertNext(newNode,doublyLinkedList.getHead());

            assert.equal(doublyLinkedList.size(),2);
            assert.equal(doublyLinkedList.getDataItem(doublyLinkedList.getHead()),1);
        });
    });

    
    describe('deteteNode() - 1', function() {
        it('should return length 1', function() {
            const nodeToBeDeleted = doublyLinkedList.findNode(1);
            doublyLinkedList.deleteNode(nodeToBeDeleted);
            assert.equal(doublyLinkedList.size(),1);
            assert.equal(doublyLinkedList.getDataItem(doublyLinkedList.getHead()),2);
        });
    });

    describe('findNode()', function() {
        it('should return error', function() {
            expect(function(){
                doublyLinkedList.findNode('a');
            }).to.throw(Error,'ERROR - No Such Node.');
        });
    });

    describe('deteteNode() - 2', function() {
        it('should return length 1', function() {

            assert.equal(doublyLinkedList.size(),1);
            const nodeToBeDeleted = doublyLinkedList.findNode(2);
            doublyLinkedList.deleteNode(nodeToBeDeleted);
            assert.equal(doublyLinkedList.size(),0);

            expect(function(){
                doublyLinkedList.getDataItem(doublyLinkedList.getHead())
            }).to.throw(Error,'ERROR - Null Node');

        });
    });

    describe('insertHead(),size() - 2', function() {
        it('should return length 1', function() {
            const newNode = doublyLinkedList.createNewNode(3);
            doublyLinkedList.insertHead(newNode);
            assert.equal(doublyLinkedList.size(),1);
            assert.equal(doublyLinkedList.getDataItem(doublyLinkedList.getHead()),3);
        });
    });

    describe('InsertTail(),size(),printNodes()', function() {
        it('should return data array', function() {
            const newNode = doublyLinkedList.createNewNode(4);
            doublyLinkedList.insertTail(newNode);
            assert.equal(doublyLinkedList.size(),2);
            assert.deepEqual(doublyLinkedList.printNodes(),[3,4]);
            const newNode1 =doublyLinkedList.createNewNode(5);
            doublyLinkedList.insertTail(newNode1);
            const newNode2 =doublyLinkedList.createNewNode(6);
            doublyLinkedList.insertHead(newNode2);
            assert.equal(doublyLinkedList.size(),4);
            assert.deepEqual(doublyLinkedList.printNodes(),[6,3,4,5]);
        });
    });

    describe('insertNext() and printNodes()', function() {
        it('should return data array', function() {
            const newNode = doublyLinkedList.createNewNode(7);
            const find5 = doublyLinkedList.findNode(3);
            doublyLinkedList.insertNext(newNode,find5);
            assert.equal(doublyLinkedList.size(),5);
            assert.deepEqual(doublyLinkedList.printNodes(),[6,3,7,4,5]);
        });
    });

});
