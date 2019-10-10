function insertionSort(nums) {
    console.log('Before sorting')
    console.log(nums)
    for (let i =1;i<nums.length;i++){
        let value = nums[i];
        let hole = i-1;
        while(hole>=0 && nums[hole] > value){
            nums[hole + 1 ] = nums[hole];
            hole -=1;
        }
        nums[hole +1 ] = value
    }
    console.log('After sorting')
    console.log(nums)
}

insertionSort([3,10,4,6,1,8])
