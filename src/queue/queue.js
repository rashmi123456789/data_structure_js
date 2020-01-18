/**
 *@author rashmi shehana
 * Queue is a linear data structure based on 'Last In First Out' concept.
 * This class includes enqueue, dequeue, isEmpty, size, isFull, printQueue, getFront, getRear operations.
 * All these operations has O(1) time complexity.
 */

class queue {
    
    /**
     * Constructor of class queue.
     * @param maxCapaity - Maximum capacity of the queue.
     *  If maxCapacity is not set when initializing the queue,
     * then the queue doesn't have a maximum capacity and it will dinamically grow.
     */
    constructor(maxCapaity = undefined){
        this.front = 0;
        this.rear = -1;
        this.queue = [];
        this.maxSize = maxCapaity;
    }

    /**
     * Adding elements to the end of the queue.
     * @param element - element to be added
     */
    enqueue(element) {
        if (this.maxSize){
            if(this.rear+1 == this.maxSize){
                throw Error ('The queue is overflowing.');
            }
        }
        this.rear +=1;
        this.queue[this.rear] =element;
    }

    /**
     * Print the queue elements.
     */
    printQueue(){
        return this.queue.slice(this.front,this.rear+1);
    }

    /**
     * Return a boolean value which indicate the queue is empty or not
     */
    isEmpty(){
        return (this.rear +1 === this.front);
    }

    /**
     * Remove the earliest added element from queue and return it.
     * Throw an error when the queue is empty
     */
    dequeue(){
        if(this.isEmpty()){
            throw Error ('The Queue is Empty, Unable to dequeue()');
        }else{
            const removingElement = this.queue[this.front];
            this.front +=1;
            return removingElement;
        }
    }

    /**
     * Return the length of the queue
     */
    size(){
    return this.rear-this.front + 1;
    }

    /**
     * Return a boolean value which indicate the queue is full or not
     * when maxSize is not giving, this method always return false 
     */
    isFull(){
        if(this.maxSize){
            return this.size() === this.maxSize;
        }
        else{
            return false;
        }
    }

    /**
     * Return the front element in the queue
     */
    getFrontElement(){
        return this.queue[this.front];
    }

    /**
     * Return the rear element in the queue
     */
    getRearElement(){
        return this.queue[this.rear];
    }

}
module.exports = queue;