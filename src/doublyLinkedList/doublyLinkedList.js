const node = require('./node');
/**
 *@author rashmi shehana
 * Doubly Linked list is a linear data structure. Items of it cannot be accessed directly.
 * Always It should start from head or tail of the linked list and traverse. 
 * The time compelxity is O(n) for traversing.
 */

class doublyLinkedList{
    
    /**
     * Constructor of class doublyLinkedList
     */
    constructor(data){
        this.head = new node(data);
        this.tail = this.head;
    }

    /**
     * This method returns the first node of doubly linked List
     */
    getHead(){
        return this.head;
    }

    /**
     * This method returns the last node of doubly linked List
     */
    getTail(){
        return this.tail;
    }

    /**
     * This method sets data item to a node
     * @param node - node which need to set data
     * @param data - data item
     */
    setDataItem(node,data){
        if(node !== null){
            node.setData(data);
        }else{
            throw Error ('ERROR - Null Node');
        }
    }

    /**
     * This method sets node's 'next' pointer
     * @param currentNode - current node
     * @param nextNode  - newly adding node
     */
    setNextNode(currentNode,nextNode){
        if(currentNode !== null && nextNode !== null){
            currentNode.setNext(nextNode);
        }else{
            throw Error ('ERROR - Null Node');
        }
        
    }

    /**
     * This method sets node's 'previous' pointer
     * @param currentNode - new node will be added previouse this node
     * @param prevNode  - newly adding node
     */
    setPrevNode(currentNode,prevNode){
        if(currentNode !== null ){
            currentNode.setPrev(prevNode);
        }else{
            throw Error ('ERROR - Null Node');
        }
        
    }

    /**
     * This method returns the data item of given node.
     * @param  node - node, which needs to return data item
     */
    getDataItem(node){
        if(node !== null){
            return node.getData();
        }else{
            throw Error ('ERROR - Null Node');
        }
    }

    /**
     * Returs the next node of given node
     * @param currentNode - current node
     */
    getNextNode(currentNode){
        if(currentNode !== null){
            return currentNode.getNext();
        }else{
            throw Error ('ERROR - Null Node');
        }
    }

    /**
     * Returs the previous node of given node
     * @param currentNode - current node
     */
    getPrevNode(currentNode){
        if(currentNode !== null){
            return currentNode.getPrev();
        }else{
            throw Error ('ERROR - Null Node');
        }
    }

    /**
     * Checks wether there is a node next to any given node
     * @param  currentNode - current node
     */
    hasNext(currentNode){
        if(currentNode !== null){
            return currentNode.getNext() !== null;
        }else{
            throw Error ('ERROR - Null Node');
        }
    }

    /**
     * Checks wether there is a previous node for any given node
     * @param  currentNode - current node
     */
    hasPrev(currentNode){
        if(currentNode !== null){
            return currentNode.getPrev() !== null;
        }else{
            throw Error ('ERROR - Null Node');
        }
    }

    /**
     * Insert new node previous to the current node in doubly linked list
     * @param newNode - newly adding node 
     * @param currentNode - current node
     */
    insertPrevious(newNode,currentNode){
        if(newNode === null || currentNode === null){
            throw Error ('ERROR - Null Node');
        }else{
            if(this.hasPrev(currentNode) === false){
                this.insertHead(newNode);
            }else{
                const prevPrevToCurrent = this.getPrevNode(this.getPrevNode(currentNode));

            this.setNextNode(prevPrevToCurrent,newNode);
            this.setPrevNode(newNode,prevPrevToCurrent);

            this.setNextNode(newNode,currentNode);
            this.setPrevNode(currentNode,newNode);
            }
        }
    }

    /**
     * Insert new node next of the current node in doubly linked list
     * @param newNode - newly adding node 
     * @param currentNode - current node
     */
    insertNext(newNode,currentNode){
        if(newNode === null || currentNode === null){
            throw Error ('ERROR - Null Node');
        }else{
            if(this.hasNext(currentNode) === false){
                this.insertTail(newNode);
            }else{
                const nextToCurrent = this.getNextNode(currentNode);

            this.setNextNode(newNode,nextToCurrent);
            this.setPrevNode(nextToCurrent,newNode);

            this.setNextNode(currentNode,newNode);
            this.setPrevNode(newNode,currentNode);
            }
        }
    }

    /**
     * Insert new node into front of the doubly linked list
     * @param newNode - newly adding node 
     */
    insertHead(newNode){
        if(newNode === null){
            throw Error ('ERROR - Null Node');
        }else{
            const oldHead = this.getHead();
            if(oldHead === null){
                this.head = this.tail = newNode
            }else{
                this.setNextNode(newNode,oldHead);
                newNode.setPrev(null);
                this.setPrevNode(oldHead,newNode);
                this.head = newNode;
            }
        }
    }

    /**
     * Insert new node into end of the doubly linked list
     * @param newNode - newly adding node 
     */
    insertTail(newNode){
        if(newNode === null){
            throw Error ('ERROR - Null Node');
        }else{
            const oldTail = this.getTail();

            this.setNextNode(oldTail,newNode);
            newNode.setNext(null);
            this.setPrevNode(newNode,oldTail);
            this.tail = newNode; 
        }
    }

    /**
     * This method removes nodes
     * @param nodeToRemove  -node to be removed
     */
    deleteNode(nodeToRemove){
        if(nodeToRemove === null){
            throw Error ('ERROR - Null Node');
        }else{
            if(this.hasPrev(nodeToRemove)){
                if(this.hasNext(nodeToRemove)){
                    const prevToBeRemoved = this.getPrevNode(nodeToRemove);
                    this.setNextNode(prevToBeRemoved,this.getNextNode(nodeToRemove));
                    this.setPrevNode(this.getNextNode(nodeToRemove),prevToBeRemoved);
                }else{
                    const prevToDelete = this.getPrevNode(nodeToRemove);
                    this.tail = prevToDelete;
                }
            }else if(this.hasNext(nodeToRemove)){
                this.head = this.getNextNode(nodeToRemove);
                this.setPrevNode(this.head , null);
            }else{
                this.head = null;
                this.tail = null;
            }
        }   
    }

    /**
     * This method traverse and finds node with given data item and return
     * If there are multiple occurences of given data item, this method returns first occurrence.
     * @param data - data item of the node which needs to find.
     */
    findNode(data){
        let found = false;
        let currentNode = this.head;
        while (found === false){
            if(this.getDataItem(currentNode) === data){
                found = true;
                return currentNode;
            }else{
                if(this.hasNext(currentNode)){
                    currentNode = this.getNextNode(currentNode);
                }else{
                    throw Error ('ERROR - No Such Node.');
                }
            }
        }
    }

    /**
     * Create a new node
     * @param  data - data item of node
     */
    createNewNode(data){
        const newNode = new node(data);
        return newNode;
    }

    /**
     * This returns the length of the linked List
     */
    size(){
        let count = 1;
        if(this.head !== null){
            let currentNode = this.head;
            while(this.hasNext(currentNode)){
                count = count + 1;
                currentNode = this.getNextNode(currentNode);
            }
            return count;
        }
        return 0;
    }

    /**
     * Print the data item of the nodes in linked list from the head node.
     */
    printNodes(){
        const dataArray = [];
        if(this.head !== null){
            let currentNode = this.head;
            while(currentNode){
                dataArray.push(this.getDataItem(currentNode));
                currentNode = this.getNextNode(currentNode);
            }
        }
        return dataArray;
    }
}


module.exports = doublyLinkedList;