import blackKnight from '../images/black-knight.png';
import whiteKnight from '../images/white-knight.png';
class Knight{
    constructor(color,position){
        this.color = color;
        this.position = position;
    }
    show(){
        const knightImg = this.color === 'black'?blackKnight:whiteKnight;
        return <img src={knightImg}/> 
    }
}

export default Knight;