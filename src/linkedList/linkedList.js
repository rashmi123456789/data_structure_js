import node from './node';
/**
 *@author rashmi shehana
 * Linked list is a linear data structure. Items of it cannot be accessed directly.
 * Always It should start from head of the linked list and traverser. 
 * The time compelxity is O(n) for traversing.
 */

class linkedList{
    
    /**
     * Constructor of class linkedList
     */
    constructor(){
        this.head = new node();
    }

    getHead(){
        return this.head;
    }

    setDataItem(node,data){
        node.setData(data);
    }

    setNextNode(currentNode,nextNode){
        currentNode.setNext(nextNode);
    }

    getDataItem(node){
        return node.getData();
    }

    getNextNode(currentNode){
        return currentNode.getNext();
    }

    hasNext(currentNode){
        return currentNode.getNext() !== null;
    }

    insertNode(currentNode,nextNode){
        if(this.hasNext(currentNode)){
            const oldNextNode = this.getNextNode(currentNode);
            this.setNextNode(currentNode,nextNode);
            this.setNextNode(nextNode,oldNextNode);
        }else{
            this.setNextNode(currentNode,nextNode);
        }
    }

    deleteNode(nodeToRemove){
        let currentNode = this.head;
        let nextNode = null;
        let found = false;
        
        while(found === false){
            if(this.hasNext(currentNode)){
                nextNode = this.getNextNode(currentNode);
            }
            if(this.getDataItem)
        }
    }


};