import blackQueen from '../images/black-queen.png';
import whiteQueen from '../images/white-queen.png';
class Queen{
    constructor(color,position){
        this.color = color;
        this.position = position;
    }
    show(){
        const queenImg = this.color === 'black'?blackQueen:whiteQueen;
        return <img src={queenImg}/>
    }
}

export default Queen;