const arr1=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const arr2=[1,2,3,4,5,6,7,8,9,10]

for(i=arr2.length; i<arr1.length;i++){
    arr2.push(Math.floor((Math.random()*10)+1))

    console.log(arr1, arr2)
}