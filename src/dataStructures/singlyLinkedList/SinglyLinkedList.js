class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SingleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current
        while(current.next){
            newTail = current;
            current =current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;        
    }
    shift(){
        if(!this.head) return undefined;
        let oldHead = this.head;
        this.head = null;
        this.head = oldHead.next;
        this.length--;
//   Optional code
//         if(this.length === 0){
//             this.tail = null;
//         }
        return oldHead;
    }
    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
           newNode.next = this.head;
           this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        let current = this.head;
        let counter = 0;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index, val){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        } 
        return false;
    }
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.unshift(val);
        if(index === 0) return !!this.unshift(val);
        let newNode = new Node(val);
        let prev = this.get(index -1);
        let after = prev.next;
        prev.next = newNode;
        newNode.next = after;
        this.length++;
        return true;
    }
    remove(index, val){
        if(index < 0 || index >= this.length) return null;
        if(index === this.length -1) return this.pop();
        if(index === 0) return this.shift();
        let previousNode = this.get(index -1);
        let removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }
    reverse(){
        let current = this.head;
        let previous = null;
        let nextReference;
        this.head = this.tail;
        this.tail = current;
        let i = 0;
        while(i < this.length){
            nextReference = current.next;
            current.next = previous;
            previous = current;
            current = nextReference;            
            i++;
        }
        return this;
    }
    reverse(){
        let curr = this.head;
        let previous = null
        while(head) {
            head = head.next;
            curr.next = previous;
            previous = curr;
            if(head) curr = head;
        }
        return curr;
    }
}
// let list = new SingleLinkedList();
// list.push(1)
// list.push(2)
// list.push(3)
// list.push(4)
// list.push(5)
// list.reverse()
// list
// list.remove(3)
// list.insert(4, "Another member")
// list.set(2, "GREAT!!!!")
// list.get(333);
// list.unshift(444)
// list.shift()
// list.pop()

