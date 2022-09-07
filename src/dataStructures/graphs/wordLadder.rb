require 'pry'
# @param {String} begin_word
# @param {String} end_word
# @param {String[]} word_list
# @return {Integer}

# Strategy: build a directed graph taking the begin_word
# as the root node; use a comparator method to figure out the 
# next vertex(ices) in the graph
def ladder_length(begin_word, end_word, word_list)
    support = Support.new
    src = begin_word
    graph = {}
    graph[src] = []
    target = {}
    src.each_char {|letter| support.src_hash[letter] = :a }
    end_word.each_char {|letter| target[letter] = :a }

    while !word_list.empty?
        word = word_list.shift
        if !support.word_hash[word]
            support.word_hash[word] = {}
            if support.compare(src, word) 
                graph[src] << word 
            else
                word_list << word
            end
        else
            graph[src].each do |vertex|
                src = vertex
                graph[src] = [] if !graph[src]
                support.src_hash = support.word_hash[vertex]
                if support.compare(src, word) 
                    graph[src] << word 
                else
                    word_list << word
                end
            end
        end
    end 
    p graph
end

class Support
    attr_accessor :word_hash, :src_hash

    def initialize()
        @word_hash = {}
        @src_hash = {}
    end

    def compare(a, b)
        miss = 0
        b.each_char do |letter| 
            word_hash[b][letter] = :a
            miss += 1 if !src_hash[letter]
        end
        miss < 2 ? true : false
    end

end





def ladder_length(begin_word, end_word, word_list)
    graph = {}
    hash = {}
    seen = {}
    src = begin_word
    (word_list + [src]).each do |word|
        hash[word] = {}
        graph[word] = []
        word.each_char do |char|
            hash[word][char] = :w
        end
    end
    queue = []
    levels = 1
    return 0 if !hash[end_word]
    while !word_list.empty?
        dest = word_list.shift
        if seen[dest]
            seen = {}
            src = queue.shift
        end
        seen[dest] = true
        if match(src, dest, hash)
            graph[src] << dest
            # Do not push the end_word to queue as it is the last 
            # vertex in graph and does not need to be processed
            queue << dest if dest != end_word   
            # Recycle the end_word until using all of the vertices
            if dest == end_word && !queue.empty?
                word_list << dest
            end
        else
            word_list << dest
        end
    end
    p queue, graph
end


def ladder_length(begin_word, end_word, word_list)
    solution = Solution.new
    graph = {}
    src = begin_word
    (word_list + [src]).each do |word|
        solution.hash[word] = {} 
        solution.hash2[word] = {} 
        graph[word] = []
        word.each_char do |char|
            solution.hash2[word][char] ? solution.hash2[word][char] += 1 : solution.hash2[word][char] = 1
        end
        temp = solution.hash2[word]
        solution.hash[word] = Hash.new.merge(temp)
    end
    solution.hash2.delete src
    return 0 if !solution.hash[end_word]
    queue = [src]
    levels = 1
    done = false
    while !queue.empty?
        break if done
        length = queue.length
        levels += 1
        length.times {|i|
            break if done                
            src = queue.shift
            solution.hash2.keys.each do |key|
                dest = key
                if solution.match(src, dest)
                    graph[src] << dest if dest != begin_word
                    if dest != end_word   
                        queue << dest if dest != begin_word
                        solution.hash2.delete(dest)                        
                    else
                        done = true
                        break
                    end    
                end
            end
            solution.hash2.delete src
        }
    end
    p done ? levels : 0
end

class Solution
    attr_accessor :hash, :hash2
    def initialize
        @hash = {}
        @hash2 = {}
    end
    
    def match(src, dest)
        miss = 0
        src.chars.each_with_index do |char, index|
            if char != dest[index] || hash[dest][char] == 0 
                miss += 1 
            else 
                hash[dest][char] -= 1
            end
        end 
        hash[dest] = Hash.new.merge(hash2[dest])
        miss < 2 ? true : false
    end
end

begin_word = "hit"
end_word = "cog"
word_list = ["hot","dot","dog","lot","log","cog"]


begin_word = "lost"
end_word = "miss"
word_list= ["most","mist","miss","lost","fist","fish"]


begin_word = "leet"
end_word = "code"
word_list = ["lest","leet","lose","code","lode","robe","lost"]




ladder_length(begin_word, end_word, word_list)