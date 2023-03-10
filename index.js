
function searchForValue(valueToFind, arr) {       
       let sizeOfArray = arr.length 
for (var it = 0; it < sizeOfArray ; it++) {
            if (arr[it] == valueToFind) {
                console.log("Success");
                break;
            }
        }
        if (it == sizeOfArray)
            console.log("Failure");
        return;
}
