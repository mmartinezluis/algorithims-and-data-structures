class HashTable{
    constructor(size=11){
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
    get(key){
        let index = this._hash(key);
        if(this.keymap[index]){
            for(let i=0; i< this.keymap[index].length; i++){
                if(this.keymap[index][i][0] === key){
                    return this.keymap[index][i][1];    
                }
            }
        }
        return undefined;
    }
    keys(){
        let data=[];
        for(let i =0; i < this.keymap.length; i++){
            if(this.keymap[i]){
                let j=0;
                while( j < this.keymap[i].length){
                    if(!data.includes(this.keymap[i][j][0])){
                        data.push(this.keymap[i][j][0])
                        j++;
                    }
                }    
            }
            
        }
        return data;
    }
    values(){
        let data = [];
        for(let i=0; i< this.keymap.length; i++){
            if(this.keymap[i]){
                for(let j=0; j < this.keymap[i].length; j++){
                    if(!data.includes(this.keymap[i][j][1])){
                        data.push(this.keymap[i][j][1])
                    }
                }
            }
        }
        return data;
    }

    
}
// ht.values()
// ht.keys()
// ht.get("uno")
// ht.set("uno","tresprimo")
// ht.set("dos","dosprmo")
// ht.set("tres","uno prmo")
// ht
// let ht = new HashTable(7);
