/**
 *@author rashmi shehana
 * Stack is a linear data structure based on 'First In Last Out' concept.
 * This class includes push, pop, peek, isEmpty, isFull, size, printStack operations.
 * All these operations has O(1) time complexity.
 */

 export class stack {
     
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

    printStack(){
        this.stack.array.forEach(element => {
            console.log(element);
        });
    }
}




