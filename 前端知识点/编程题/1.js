//判断能否只修改不多于一个数字使数组变为从大到小
function main(arr){
    var count = 0;//需要修改的的元素数
    var key = 0;//需要修改的元素下标
    //从小到大，每一个数字都应该比后一个小
    for(let i=0;i<arr.length-1;i++){
        if(arr[i] > arr[i+1]){
            if(count == 0){
                count++;
                key = i;
            }
            else{
                return false;
            }
        }
    }//end of for
    if(count == 0){
        return true;
    }
    else{
        return key;
    }
}
console.log(main([0,1,0,5,4]))