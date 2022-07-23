/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// first attempt-Does not work
 var isValidBST = function(root) {
    let max = min = root.val;
    return validLeftBranch(root.left, Number.MAX_SAFE_INTEGER) && validRightBranch(root.right);

    function validLeftBranch(node, max) {
        if(!node) return true;
        if((node.left && node.left.val > node.val) || (node.right && node.right.val < node.val) || node.val >= max ) return false;
        return validLeftBranch(node.left) && validLeftBranch(node.right);
    }
    function validRightBranch(node) {
        if(!node) return true;
        if((node.left && node.left.val > node.val) || (node.right && node.right.val < node.val) || node.val <= min ) return false;
        return validRightBranch(node.left) && validRightBranch(node.right);
    }
};

// Working solution; this problem is very tricky to initialize
var isValidBST = function(root) {
    return validate(root, null, null);

    function validate(node, low, high) {
        if(!node) return true;
        if(low !== null && node.val <= low) return false;
        if(high !== null && node.val >= high) return false;
        return validate(node.left, low, node.val) && validate(node.right, node.val, high);
    }
}



