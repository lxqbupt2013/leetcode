// https://leetcode.com/problems/implement-trie-prefix-tree/

// 字典树：
// 1. 根节点不包含任何字符，其余节点包含一个字符
// 2. 根到该节点的路劲连起来是这个节点对应的字符串
// 3. 没有重复路径

// charCodeAt() 方法返回指定位置的Unicode编码

/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.root = new TriNode();
};

var TriNode = function () {
    this.next = new Array(26);
    this.word = null;
}
/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
        if (!curr.next[word[i].charCodeAt(0) - 97]) {
            curr.next[word[i].charCodeAt(0) - 97] = new TriNode();
        }
        curr = curr.next[word[i].charCodeAt(0) - 97];
    }
    curr.word = word;    
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
        if (!curr.next[word[i].charCodeAt(0) - 97]) return false;
        curr = curr.next[word[i].charCodeAt(0) - 97];
    }
    if (curr.word === word) return true;
    return false;    
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let curr = this.root;
    for (let i = 0; i < prefix.length; i++) {
        if (!curr.next[prefix[i].charCodeAt(0) - 97]) return false;
        curr = curr.next[prefix[i].charCodeAt(0) - 97];
    }
    return true;    
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */