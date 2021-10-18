class HashTable{
    constructor(size=4){
        this.keymap = new Array(size)
    }

    _hash(key){
        let total = 0;
        let WEIRD_PRIME = 31;
        for(let i =0; i< Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total + WEIRD_PRIME + value) % this.keymap.length;
        }
        return total;
    }

    set(key, value){
        let index = this._hash(key);
        if(!this.keymap[index]){
            this.keymap[index] = [];
        } 
        this.keymap[index].push([key,value]);
    }
    get(ley){
        
    }


    
}

// ht.set("trdfdfdfes","tresprimo")
// ht.set("ddfdeeeos","dosprmo")
// ht.set("ufdfdfno","uno prmo")
// ht
// let ht = new HashTable();
