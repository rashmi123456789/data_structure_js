const node = require('./node');
/**
 *@author rashmi shehana
 * Linked list is a linear data structure. Items of it cannot be accessed directly.
 * Always It should start from head of the linked list and traverse. 
 * The time compelxity is O(n) for traversing.
 */

class linkedList{
    
    /**
     * Constructor of class linkedList
     */
    constructor(data){
        this.head = new node(data);
    }

    /**
     * This method returns the first node of linked List
     */
    getHead(){
        return this.head;
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
     * This method inserts a node after current node. If current node is not given,
     * new node will be added to front as a head.
     * @param  nextNode - newly adding node
     * @param  currentNode - new node will be added after this node
     */
    insertNode(nextNode,currentNode = null){
        if(nextNode === null){
            throw Error ('ERROR - Null Node');
        }else{
            if(this.head == null){
                this.head = nextNode;
            }else{
                if(currentNode == null){
                    const oldHead = this.head;
                    this.head = nextNode;
                    this.setNextNode(this.head,oldHead);
                }else if(this.hasNext(currentNode)){
                    const oldNextNode = this.getNextNode(currentNode);
                    this.setNextNode(currentNode,nextNode);
                    this.setNextNode(nextNode,oldNextNode);
                }else{
                    this.setNextNode(currentNode,nextNode);
                }
            }
            
        }
        
    }

    /**
     * This method removes nodes
     * @param nodeToRemove  -node to be removed
     */
    deleteNode(nodeToRemove){
        let currentNode = this.head;
        let nextNode = null;
        let found = false;
        
        while(found === false){
            if(this.getDataItem(this.head) === this.getDataItem(nodeToRemove)){
                found = true;
                if(this.hasNext(this.head)){
                    this.head = this.getNextNode(this.head);
                }else{
                    this.head = null;
                }
            }else{
                if(this.hasNext(currentNode)){
                    nextNode = this.getNextNode(currentNode);
                    if(this.getDataItem(nextNode) === this.getDataItem(nodeToRemove)){
                        found = true;
                        if(this.hasNext(nextNode)){
                            this.setNextNode(currentNode,this.getNextNode(nextNode));
                        }else{
                            this.setNextNode(currentNode,null);
                        }
                    }else{
                        currentNode = this.getNextNode(currentNode);
                    }
                }else{
                    throw Error ('ERROR - No Such Node to Delete.');
                }
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
     * This method inserts a new node at the end of the linked list.
     * @param node - new node to be added.
     */
    insertLast(node){
        if(node == null){
            throw Error ('ERROR - Null Node.');
        }else{
            let currentNode = this.head;
            if(this.head !== null){
                while(this.hasNext(currentNode) === true){
                    currentNode = this.getNextNode(currentNode);
                }
                if(this.hasNext(currentNode) === false){
                    this.insertNode(node,currentNode)
                }
            }
        }
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


module.exports = linkedList;