const employee = {
    name: 'Rajesh',
    age: 30,
    };
    
    const name="Ram"
    // Allocates memory for object in heap.Values 
    // in object are primitive,which is why they 
    // are stored in stack.
    
    function getname(name) {
        return name;
    }
    // The function return value is given to stack after 
    // being evaluated in the heap
    
    const newEmployee = employee;
    // The newEmployee object will be stored in the stack and 
    // it will refer to the employee object in heap
    