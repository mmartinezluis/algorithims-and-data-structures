class Node {
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}


class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
            this.length++;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
            this.length++;
         }
        return this;
    }

    // For reversing the linked list, keep track of three nodes simultaneously:
    //                              previous    source   nextReference
    //                               | A | <--> | B | <--> | C |
    // First time through:            null       head      a node 

    // Before updating the three nodes, keep a reference of the next node: "nextReference = source.next"
    // Updating the three nodes:
    //         nextReference = source.next;             store the node following source in the nextReference varibale
    //         source.next = previous;                  make source connect with left node (which is null the first time through)
    //         if(previous) previous.prev = source;     if previous is not null; then make the right connection with source
    //         previous = source;                       SHIFT the previous variable to be source
    //         source.prev = nextReference;             Connect source with nextReference to the right
    //         source = nextReference;                  SHIFT the source one step to the right;

    //                              previous    source   nextReference
    //                               | A | <--> | B | <--> | C | <--> | D |
    // First time through:            null       head      a node 

    reverse(){
        // Store the reference node in the source variable;
        let source = this.head;
        let previous = null;
        let nextReference
        this.head = this.tail;
        this.tail = source;
        let i=0
        while(i < this.length){
            nextReference = source.next;
            source.next = previous;
            if(previous) previous.prev = source;
            previous = source;
            source.prev = nextReference;
            source = nextReference;
            i++
        }
        return this;
    }
}