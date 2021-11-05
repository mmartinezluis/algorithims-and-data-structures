class Node {
    constructor(val) {
        this.val = val;
        this.next = null;   
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        let current= this.head;
        let j = 0;
        while(j !== index){
            current = current.next;
            j++;
        }
        return current;
    }
    rotate(integer){
        if(this.length ===0) return false;
        if(this.length ===1) return true;
        let tempIndex = integer % this.length;
        let index;
        tempIndex >= 0 ? index= tempIndex : index = tempIndex + this.length;
        if(index ===0) return true;
        let previous = this.get(index-1);
        let start = previous.next;
        previous.next = null;
        this.tail.next = this.head;
        this.head = start;
        this.tail = previous;
        return true;
        
    }
}
