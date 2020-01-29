/**
 *@author rashmi shehana
 * Node is the basic structure which makes the doubly linked List.
 * A node has a data item , previouse pointer and next pointer.
 */

class node{
    
    /**
     * Constructor of class node.
     * @param data - data item of node.
     * next is the pointer to next node.
     * prev is the pointer to previouse node.
     */
    constructor(data = null){
        this.data = data;
        this.next = null;
        this.prev = null;
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
     * @param nextNode - The next node of current node which needs to set.
     */
    setNext(nextNode){
        this.next = nextNode;
    }

    /**
     * This function set previouse node of current node.
     * @param nextNode - The previouse node of current node which needs to set.
     */
    setPrev(prevNode){
        this.prev = prevNode;
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

    /**
     * Get the previouse node of current node.
     */
    getPrev(){
        return this.prev
    }
}

module.exports = node;