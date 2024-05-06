function indexOF(arr,element){
    for(let x=0;x<arr.length;x++){
        if(arr[x]==element){return x;}
    }
}

const index=indexOF([1,3,5,6,5,4,3,5,9],5);
console.log(`index of the given element is ${index}`);