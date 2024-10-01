function LinkedList() {
    let head  = {nextNode: null} 
    function Node() {
        return {value: null, nextNode: null}
    }

    function iterator(obj) {
        if(obj.nextNode === null) return obj
        else return iterator(obj.nextNode)
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

    return {head, iterator, append, prepend, listSize}
}

