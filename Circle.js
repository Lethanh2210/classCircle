class Circle{
    constructor(radius,color) {
        this.radius = radius;
        this.color = color;
    }
    getRadius(){
        return this.radius;
    }
    getArea(){
        return Math.PI*Math.pow(this.radius,2);
    }
    getPeri(){
        return Math.PI*2*this.radius;
    }
}