const node = require('./node');
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
    constructor(data){
        this.head = new node(data);
    }

    getHead(){
        return this.head;
    }

    setDataItem(node,data){
        node.setData(data);
    }

    setNextNode(currentNode,nextNode){
        if(currentNode !== null && nextNode !== null){
            currentNode.setNext(nextNode);
        }else{
            throw Error ('ERROR - Null Node');
        }
        
    }

    getDataItem(node){
        if(node !== null){
            return node.getData();
        }else{
            throw Error ('ERROR - Null Node');
        }
    }

    getNextNode(currentNode){
        if(currentNode !== null){
            return currentNode.getNext();
        }else{
            throw Error ('ERROR - Null Node');
        }
    }

    hasNext(currentNode){
        if(currentNode !== null){
            return currentNode.getNext() !== null;
        }else{
            throw Error ('ERROR - Null Node');
        }
    }

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

    createNewNode(data){
        const newNode = new node(data);
        return newNode;
    }

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