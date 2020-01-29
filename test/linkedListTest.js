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

});
