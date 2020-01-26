/**
 *@author rashmi shehana
 * Circular Queue is a not a linear data structure. It is based on 'Last In First Out' concept.
 * This class includes enqueue, dequeue, isEmpty, size, isFull, printQueue, getFront, getRear operations.
 * All these operations has O(1) time complexity.
 * Even though the queue data struture can become full without max number of elements,
 *  Circular Queue will be not full without maximum amount of elements
 * If Circular queue is empty, rear is -1 and if queue is full,  rear = front.
 */

class circularQueue {
    
    /**
     * Constructor of class circularQueue.
     * @param maxCapaity - Maximum capacity of the circularQueue.
     */
    constructor(maxCapaity){
        this.front = -1;
        this.rear = -1;
        this.circularQueue = [];
        this.maxSize = maxCapaity;
    }

    /**
     * Adding elements to the end of the circularQueue.
     * @param element - element to be added
     */
    enqueue(element) {
        if(this.isFull()){
            throw Error ('The Circular Queue is overflowing.');
        }
        this.rear = (this.rear + 1) % this.maxSize;
        this.circularQueue[this.rear] =element;
    }

    /**
     * Print the queue elements.
     */
    printCircularQueue(){
        if(this.front < this.rear){
            return this.circularQueue.slice(this.front + 1, this.rear +1);
        }else{
            return this.circularQueue.slice(this.front+1, this.maxSize) +','+this.circularQueue.slice(0, this.rear + 1);
        }
    }

    /**
     * Return a boolean value which indicate the queue is empty or not
     */
    isEmpty(){
        return(this.rear === -1);
    }

    /**
     * Remove the earliest added element from queue and return it.
     * Throw an error when the queue is empty
     */
    dequeue(){
        if(this.isEmpty()){
            throw Error ('The Circular Queue is Empty, Unable to dequeue()');
        }else{
            this.front = (this.front + 1)% this.maxSize;
            const remove = this.circularQueue[this.front];
            if(this.rear === this.front){
                this.reset();
            }
            return remove;
        }
    }

    /**
     * Return the length of the Circular Queue
     */
    size(){
        if(this.isEmpty()){
            return 0;
        }else if(this.rear === this.front){
            return maxSize;
        }else if(this.front < this.rear){
            return(Math.abs(this.front - this.rear));
        }else{
            return(this.maxSize - this.front + this.rear);
        }
    }

    /**
     * Return a boolean value which indicate the Circular Queue is full or not
     */
    isFull(){
        return this.size() === this.maxSize;
    }

    /**
     * Return the front element in the Circular Queue
     */
    getFrontElement(){
        if(!this.isEmpty()){
            if(this.front === -1){
                return this.circularQueue[0];
            }
            return this.circularQueue[this.front + 1];
        }
    }

    /**
     * Return the rear element in the Circular Queue
     */
    getRearElement(){
        if(!this.isEmpty()){
            return this.circularQueue[this.rear];
        }
    }

    /**
     * Reset the Circular Queue
     */
    reset(){
        this.rear = -1;
        this.front = -1;
    }


}
module.exports = circularQueue;