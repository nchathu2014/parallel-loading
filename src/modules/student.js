 export class Student{
    constructor(id,name){
        this.id=id;
        this.name=name;
    }

     getInfo(){
        return "SSS"+this.id+"--"+this.name;
    }
}

/*
let s = new Student(100,"wdwd");
console.log(s.getInfo())*/
