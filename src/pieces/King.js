import blackKing from '../images/black-king.png';
import whiteKing from '../images/white-king.png';
class King{
    constructor(color,position){
        this.color = color;
        this.position = position;
    }
    show(){
        const kingImg = this.color === 'black'?blackKing:whiteKing;
        return <img src={kingImg}/>
    }
}

export default King;