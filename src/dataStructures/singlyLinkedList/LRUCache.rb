class LRUCache

    =begin
        :type capacity: Integer
    =end
        def initialize(capacity)
            this.map = {}
            this.set = Set.new
        end
    
    
    =begin
        :type key: Integer
        :rtype: Integer
    =end
        def get(key)
            if hash[key]

                return hash[key]
            end
            return -1
        end
    
    
    =begin
        :type key: Integer
        :type value: Integer
        :rtype: Void
    =end
        def put(key, value)
            if hash[key]
        end
    
    
    end
    
    # Your LRUCache object will be instantiated and called as such:
    # obj = LRUCache.new(capacity)
    # param_1 = obj.get(key)
    # obj.put(key, value)