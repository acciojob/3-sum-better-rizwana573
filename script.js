function threeSum(arr, target) {
// write your code here
  let closestSum = Number.MAX_VALUE;
	for(let i=0;i<arr.length;i++){
		for(let j=i+1;j<arr.length;j++){
			for(let k=j+1;j<arr.length;k++){
				if(Math.abs(target - closestSum) > Math.abs(target - (arr[i]+arr[j]+arr[k]))){
					closestSum = arr[i]+arr[j]+arr[k]);
				}
			}	
		}
		return closestSum;
	}
}

module.exports = threeSum;
