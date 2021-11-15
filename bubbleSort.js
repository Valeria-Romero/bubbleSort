function bubbleSort(arr) {
    for(let j=0;j<arr.length;j++) {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i]>arr[i+1]) {
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    }      
    return arr;
}


console.log(bubbleSort([6,2,3,7,5,4]));
console.log(bubbleSort([8,2,1,30,5]));
console.log(bubbleSort([3,97,45,41,15]));