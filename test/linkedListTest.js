const LinkedList = require('../src/linkedList/linkedList');
const assert = require('assert');
var expect = require('chai').expect;

const linkedList = new LinkedList(1);

describe('LinkedList', function() {

    describe('getHead() and getDataItem()', function() {
        it('should return length 2 and data item of head', function() {
            const newNode = linkedList.createNewNode(2);
            linkedList.insertNode(newNode,linkedList.getHead());
            assert.equal(linkedList.size(),2);
            assert.equal(linkedList.getDataItem(linkedList.getHead()),1);
        });
    });
    
    describe('deteteNode() - 1', function() {
        it('should return length 1', function() {
            const nodeToBeDeleted = linkedList.findNode(1);
            linkedList.deleteNode(nodeToBeDeleted);
            assert.equal(linkedList.size(),1);
            assert.equal(linkedList.getDataItem(linkedList.getHead()),2);
        });
    });

    describe('findNode()', function() {
        it('should return error', function() {
            expect(function(){
                linkedList.findNode('a');
            }).to.throw(Error,'ERROR - No Such Node.');
        });
    });

    describe('deteteNode() - 2', function() {
        it('should return length 1', function() {
            const nodeToBeDeleted = linkedList.findNode(2);
            linkedList.deleteNode(nodeToBeDeleted);
            assert.equal(linkedList.size(),0);

            expect(function(){
                linkedList.getDataItem(linkedList.getHead())
            }).to.throw(Error,'ERROR - Null Node');

        });
    });

    describe('insertNode() - 2', function() {
        it('should return length 1', function() {
            const newNode = linkedList.createNewNode(3);
            linkedList.insertNode(newNode);
            assert.equal(linkedList.size(),1);
            assert.equal(linkedList.getDataItem(linkedList.getHead()),3);
        });
    });

    describe('printNodes()', function() {
        it('should return data array', function() {
            const newNode = linkedList.createNewNode(4);
            linkedList.insertNode(newNode);
            const newNode1 = linkedList.createNewNode(5);
            linkedList.insertNode(newNode1);
            assert.equal(linkedList.size(),3);
            assert.deepEqual(linkedList.printNodes(),[5,4,3]);
        });
    });

    describe('insertLast() and printNodes()', function() {
        it('should return data array', function() {
            const newNode = linkedList.createNewNode(6);
            const find5 = linkedList.findNode(5);
            linkedList.insertNode(newNode,find5);
            const newNode1 = linkedList.createNewNode(7);
            linkedList.insertLast(newNode1);
            assert.equal(linkedList.size(),5);
            assert.deepEqual(linkedList.printNodes(),[5,6,4,3,7]);
        });
    });

});
