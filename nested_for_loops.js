/*
Nested for Loops
Let's say that you and a friend would like to go on vacation together. You've both made arrays of your favorite places and you want to compare to see if any of them match. This is a job for loops!

The big idea is that we can run a for loop inside another for loop to compare the items in two arrays.

Every time the outer for loop runs once, the inner for loop will run completely.

These are called nested for loops and we can use them to check to see if any of your vacation spots match your friend's spots.*/
let myPlaces = ['Beijing', 'HongKong', 'Shanghai'];
let friendPlaces =['Beijing','Guiyang','Chengdu'];
for(let myPlacesIndex = 0;myPlacesIndex < myPlaces.length; myPlacesIndex++){
  console.log(myPlaces[myPlacesIndex]);

  for(let friendPlacesIndex =0; friendPlacesIndex < friendPlaces.length;friendPlacesIndex++){
    if(myPlacesIndex===friendPlacesIndex){
      if(myPlaces[myPlacesIndex]===friendPlaces[friendPlacesIndex]){
         console.log("we have same place, whcih is "+ myPlaces[myPlacesIndex])
         }
       // console.log(friendPlaces[friendPlacesIndex]);
       }
   // console.log(friendPlaces[friendPlacesIndex]+'8');
  }
}
