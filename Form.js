class Form{
    constructor(){
        this.button = createButton('Save');
        this.button.style('width','100px');
        this.button.style('height','50px');
        this.button.style('font-size','15px');
        this.button.style('background-color','red');
    }
    display(){
        this.button.position(1100,650);
    }
}