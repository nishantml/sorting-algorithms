function bubbleSort(nums) {
    console.log('Before Sort')
    console.log(nums)
    for (let i = 0; i < nums.length; i++) {
        for(let j =0 ;j<nums.length-i-1;j++){
            if(nums[i]>nums[i+1]){
                let temp = nums[i];
                nums[i] = nums[i+1]
                nums[i+1] = temp;
            }
        }
    }
    console.log('After sorting ')
    console.log(nums)
}

bubbleSort([2,1,4,6,89,9])
