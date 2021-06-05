## CIT 281 p6

## Outcome:    
   
This project focused on experimenting with classes.    
We started by creating a class for *shape* and then extended it to define different types of shapes such as *Triangles* and *Rectangles*.   
It was explicitly stated that this project can be completed in 60 lines of code or less and was stressed that we should as much as possible refer back to the origonal class *shape* for as much information as possible inorder to cut back on how much is repeated. 
    
**[p6 Repo](https://github.com/Myles-P-D/cit281-p6)**   
   
## Code:    
   
Here is a link to the project code:    
   
**[p6 code](https://github.com/Myles-P-D/cit281-p6/blob/main/p6.js)**     
     
Below is an excerpt from the project code.    
   
```javascript
class Rectangle extends Shape {
  constructor(length = 0, width = 0) {
    super([length, length, width, width]);
    this.length = length;
    this.width = width;
  }
  area = () => this.length * this.width;
}
```
    
## Images:    
    
Here is an image of the console output for shape dimenssions specified in the project rubric.   
   
![output](https://github.com/Myles-P-D/cit281-p6/blob/main/p6Output.png?raw=true "output")     

