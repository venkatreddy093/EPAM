function varExample() {
    var x = 10;
    console.log("Initial value of x:", x); // Output: 10
    if (true) {
        var x = 20; // Redeclared inside the block
        console.log("Inside block, x:", x); // Output: 20
    }
    console.log("Outside block, x:", x); // Output: 20 (var is function-scoped)
}
varExample();
