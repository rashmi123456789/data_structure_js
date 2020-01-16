/**
 *@author rashmi shehana
 * Stack is a linear data structure based on 'First In Last Out' concept.
 * This class includes push, pop, peek, isEmpty, size, printStack operations.
 * All these operations has O(1) time complexity.
 */

class stack {
     
    constructor(maxCapaity = undefined){
        this.top = -1;
        this.stack = [];
        this.maxSize = maxCapaity;
    }
    
    push(element) {
        if (this.maxSize){
            if(this.top+1 == this.maxSize){
                throw Error ('The stack is overflowing.');
            }
        }
        this.stack.push(element);
        this.top +=1;
    }

    printStack(from=0,to=this.stack.length){
        return this.stack.slice(from,to);
    }

    isEmpty(){
        return(this.top === -1);
    }

    pop(){
        if(this.isEmpty()){
            throw Error ('The Stack is Empty, Unable to pop()');
        }else{
            this.top -=1;
            return this.stack.pop();
        }
    }

    size(){
        return this.stack.length;
    }
}
module.exports = stack;



