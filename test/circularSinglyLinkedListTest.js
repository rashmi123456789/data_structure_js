const CircularSinglyLinkedList = require('../src/circularSinglyLinkedList/circularSinglyLinkedList');
const assert = require('assert');
var expect = require('chai').expect;

const circularSinglyLinkedList = new CircularSinglyLinkedList(1);

describe('LinkedList', function() {

    describe('getHead() and getDataItem()', function() {
        it('should return length 2 and data item of head', function() {
            const newNode = circularSinglyLinkedList.createNewNode(2);
            circularSinglyLinkedList.insertNode(newNode,circularSinglyLinkedList.getHead());
            assert.equal(circularSinglyLinkedList.size(),2);
            assert.equal(circularSinglyLinkedList.getDataItem(circularSinglyLinkedList.getHead()),1);
        });
    });
    
    describe('deteteNode() - 1', function() {
        it('should return length 1', function() {
            const nodeToBeDeleted = circularSinglyLinkedList.findNode(1);
            circularSinglyLinkedList.deleteNode(nodeToBeDeleted);
            assert.equal(circularSinglyLinkedList.size(),1);
            assert.equal(circularSinglyLinkedList.getDataItem(circularSinglyLinkedList.getHead()),2);
        });
    });

    describe('findNode()', function() {
        it('should return error', function() {
            expect(function(){
                circularSinglyLinkedList.findNode('a');
            }).to.throw(Error,'ERROR - No Such Node.');
        });
    });

    describe('deteteNode() - 2', function() {
        it('should return length 1', function() {
            const nodeToBeDeleted = circularSinglyLinkedList.findNode(2);
            circularSinglyLinkedList.deleteNode(nodeToBeDeleted);
            assert.equal(circularSinglyLinkedList.size(),0);

            expect(function(){
                circularSinglyLinkedList.getDataItem(circularSinglyLinkedList.getHead())
            }).to.throw(Error,'ERROR - Null Node');

        });
    });

    describe('insertNode() - 2', function() {
        it('should return length 1', function() {
            const newNode = circularSinglyLinkedList.createNewNode(3);
            circularSinglyLinkedList.insertNode(newNode);
            assert.equal(circularSinglyLinkedList.size(),1);
            assert.equal(circularSinglyLinkedList.getDataItem(circularSinglyLinkedList.getHead()),3);
        });
    });

    describe('printNodes()', function() {
        it('should return data array', function() {
            const newNode = circularSinglyLinkedList.createNewNode(4);
            circularSinglyLinkedList.insertNode(newNode);
            const newNode1 = circularSinglyLinkedList.createNewNode(5);
            circularSinglyLinkedList.insertNode(newNode1);
            assert.equal(circularSinglyLinkedList.size(),3);
            assert.deepEqual(circularSinglyLinkedList.printNodes(),[5,4,3]);
        });
    });

    describe('insertLast() and printNodes()', function() {
        it('should return data array', function() {
            const newNode = circularSinglyLinkedList.createNewNode(6);
            const find5 = circularSinglyLinkedList.findNode(5);
            circularSinglyLinkedList.insertNode(newNode,find5);
            assert.equal(circularSinglyLinkedList.size(),4);
            const newNode1 = circularSinglyLinkedList.createNewNode(7);
            circularSinglyLinkedList.insertLast(newNode1);
            assert.equal(circularSinglyLinkedList.size(),5);
            assert.deepEqual(circularSinglyLinkedList.printNodes(),[5,6,4,3,7]);
        });
    });

});
