// Q : Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


// 使用hashMap结构 复杂度为O(n)
var twoSum1 = function(nums, target) {
    let newMap = new Map()
    for(let i = 0; i < nums.length; i++){
        newMap.set(nums[i],i)
    }
    
    for(let i = 0; i < nums.length; i++){
        if(newMap.has(target-nums[i]) && (newMap.get(target-nums[i]) !== i)){
            return [i,newMap.get(target-nums[i])]
        }
    }
    return false
    
};

// 使用双循环数组结构 复杂度为O(n^2)
var twoSum2 = function(nums, target) {
    let arr = nums;
    let arrs = new Array()
    for(let i =  0; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length; j++){
            if ( arr[i] + arr[j] === target) {
                arrs.push(i, j)
                return arrs
            }
        }
    }
    return false
}

// 创建测试用的数据，number控制数组的length
const getRandom = function(number){
    let arryList = []
    while(number-- > 0 ){
        arryList.push(Math.floor(Math.random()*number))
    }
    return arryList
}

let a = getRandom(1000000)
let b = 888

console.time('1')
// 数据量足够大时，方法一的时间明显短于2
let c = twoSum1(a,b)
console.log(c);
console.timeEnd('1')

console.time('2')
let d = twoSum2(a,b)
console.log(d);
console.timeEnd('2')