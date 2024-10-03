function LinkedList() {
    let head  = {nextNode: null} 
    function Node() {
        return {value: null, nextNode: null}
    }

    function iterator(node) {
        if(node.nextNode === null) return node
        else return iterator(node.nextNode)
    }
    
    function append(val) {
        let obj = Node()
        obj.value = val
        let lastNode = iterator(head)
        lastNode.nextNode = obj
    }

    function prepend(value) {
        let reference = head.nextNode
        let newNode = Node()
        newNode.value = value
        head.nextNode = newNode
        newNode.nextNode = reference
    }

    function listSize(head, n = 0) {
        if(head.nextNode === null) return n
        else {
            return listSize(head.nextNode, n += 1)
        }     
    }

    function returnHeadTail(node) {
        if(node === "head") return head.nextNode
        else if (node === "tail") return iterator(head)
    }

    function at(node, index, n = 0) {
        if(n === index) return node
        else {
            return at(node.nextNode, index, n += 1)
        }
    }

    function pop(node) {
        if(node.nextNode === null) return 1
        else {
            let ref = pop(node.nextNode)
            if (ref === 1) node.nextNode = null            
            return
        }
    }

    function contains(node, value) {
        if(node.value === value) return true
        else if (node.nextNode === null && node.value !== value) return false
        else return contains(node.nextNode, value)

    }

    function find(node, value, n = 0) {
        if(node.value === value) return n
        else if(node.value !== value && node.nextNode === null) return null
        else return find(node.nextNode, value, n += 1)
    }


    function toString(node, n = "") {
        
        if(node === null) return n += "null"
        else return toString(node.nextNode, n += `(${node.value}) => `) 
    }

    return {head, iterator, append, prepend, listSize, returnHeadTail, at, pop, contains, find, toString}
}


