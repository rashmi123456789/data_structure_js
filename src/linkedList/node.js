/**
 *@author rashmi shehana
 * Node is a basic structure which makes a linked List.A node has a data item and next pointer.
 */

class node{
    
    /**
     * Constructor of class node.
     * @param data - data item of node.
     * next is the pointer to next node.
     */
    constructor(data = null){
        this.data = data;
        this.next = null;
    }

    /**
     * This function sets a data item to node.
     * @param data - data of the node that needs to be set
     */
    setData(data){
        this.data = data;
    }

    /**
     * This function set next node of current node.
     * @param nextNode - The next node of current node.
     */
    setNext(nextNode){
        this.next = nextNode;
    }

    /**
     * Get the data item of node
     */
    getData(){
        return this.data;
    }

    /**
     * Get the next node of current node.
     */
    getNext(){
        return this.next
    }
}

module.exports = node;