
class CanvasDraw {

    constructor(){
        this.canvas = document.getElementsByTagName('canvas')[0];
        this.canvasContext = this.canvas.getContext('2d');
        this.canvasHeight = this.canvas.height;
        this.canvasWidth = this.canvas.width;
        this.numOfColumns = 10;
        this.numOfRows = 20;
        this.blockHeight = this.canvasHeight / this.numOfRows;
        this.blockWidth = this.canvasWidth / this.numOfColumns;
        this.drawRect = this.drawRect.bind(this);
        this.render = this.render.bind(this);
        // this.testing = this.testing.bind(this);
        this.testx = 0;
        this.testy = 0;

    }

    drawRect(x,y){
        
        this.canvasContext.fillRect(this.blockWidth * x, 
            this.blockHeight * y, this.blockWidth - 2, this.blockHeight - 2);
        this.canvasContext.strokeRect(this.blockWidth * x, 
            this.blockHeight * y, this.blockWidth - 2, this.blockHeight - 2);
    }

    getRandomColor(){
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }


    render() {
        this.canvasContext.fillStyle = 'white';
        this.canvasContext.strokeStyle = 'red';
        this.canvasContext.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.canvasContext.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
        for (let x = 0; x < this.canvasHeight; x++) {
            for (let y = 0; y < this.canvasWidth; y++) {
                this.canvasContext.fillStyle = this.getRandomColor();
                this.drawRect(x, y);
                
            }
        }



        this.canvasContext.fillStyle = 'black';
        // setInterval(this.testing, 100);


        // this.drawRect(0,0);


        // this.drawRect();
    }

    // testing() {
    //     this.testx++;

        
    //     this.drawRect(this.testy, this.testx);
    //     if (this.testx > this.numOfRows) {
    //         this.testx = 0;
    //         this.testy++;

    //         this.canvasContext.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

    //     }
        


    // }
}

export default CanvasDraw;
