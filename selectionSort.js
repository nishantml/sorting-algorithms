function selectionSort(nums) {
    console.log('Selection Sort')
    console.log('Before Sort')
    console.log(nums)
    for (let i = 0; i < nums.length; i++) {
        let imin = i
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[imin]) {
                imin = j;
            }
        }
        let temp = nums[i];
        nums[i] = nums[imin];
        nums[imin] = temp;
    }
    console.log('After sorting ')
    console.log(nums)
}

selectionSort([-2, 1, 4, 6, 89, 9])
