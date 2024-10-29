let nums1 = [2, 4, 6, 8, 10]                                         //1
console.log(nums1.reduce((x,y) => x + y ,0));

let nums2=[1, 3, 5, 7]                                               //2
console.log(nums2.reduce((x,y) => x * y ));

let arrupper=['apple', 'banana', 'cherry']                           //3
console.log(arrupper.map(i => i.toUpperCase()));

let nums3=[1, 2, 3, 4, 5]                                             //4
console.log(nums3.map(i => i*10));

const people = [                                                       //5
    { name: 'John', age: 25 },
    { name: 'Sarah', age: 30 },
    { name: 'Mike', age: 35 }
  ];
console.log(people.map(i=>i.age));



let fruits=['apple', 'banana', 'cherry']                                //6
fruits.forEach(i=>console.log(i))


let numbers= [1, 2, 3, 4, 5, 6]                                         //7
let count=0;
numbers.forEach(i => 
    {
        if(i%2==0){
            count++
        }
    })
console.log(count);