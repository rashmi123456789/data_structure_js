/**
 *@author rashmi shehana
 * Stack is a linear data structure based on 'First In Last Out' concept.
 * This class includes push, pop, peek, isEmpty, size, isFull printStack operations.
 * All these operations has O(1) time complexity.
 */

class stack {
    
    /**
     * Constructor of class stack.
     * @param maxCapaity - Maximum capacity of the stack.
     *  If maxCapacity is not set when initializing the stack,
     * then the stack doesn't have a maximum capacity and it will dinamically grow.
     */
    constructor(maxCapaity = undefined){
        this.top = -1;
        this.stack = [];
        this.maxSize = maxCapaity;
    }
    
    /**
     * Adding elements to the front of the stack.
     * @param element - element to be pushed 
     */
    push(element) {
        if (this.maxSize){
            if(this.top+1 == this.maxSize){
                throw Error ('The stack is overflowing.');
            }
        }
        this.stack.push(element);
        this.top +=1;
    }

    /**
     * Print the stack elements from the given index to given index.
     * @param  from - (Optional, default value is 0) from which index of the element ,the stack should be print
     * @param  to - (Optional, default value is stack length-1) until which index of the element ,the stack should be print
     */
    printStack(from=0,to=this.stack.length){
        return this.stack.slice(from,to);
    }

    /**
     * Return a boolean value which indicate the stack is empty or not
     */
    isEmpty(){
        return(this.top === -1);
    }

    /**
     * Remove the most recently added element from stack and return it.
     * Throw an error when the stack is empty
     */
    pop(){
        if(this.isEmpty()){
            throw Error ('The Stack is Empty, Unable to pop()');
        }else{
            this.top -=1;
            return this.stack.pop();
        }
    }

    /**
     * Return the length of the stack
     */
    size(){
        return this.stack.length;
    }

    /**
     * Return a boolean value which indicate the stack is full or not
     * when maxSize is not giving, this method always return false 
     */
    isFull(){
        if(this.maxSize){
            return this.top + 1 === this.maxSize;
        }
        else{
            return false;
        }
    }

    /**
     * Return the topmost element in the stack
     */
    peek(){
        return this.stack[this.top];
    }
}
module.exports = stack;