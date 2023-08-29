import blackBishop from '../images/black-bishop.png';
import whitBishop from '../images/white-bishop.png';

class Bishop{
    constructor(color,position){
        this.color = color;
        this.position = position;
    }
    show(){
        const bishopImg = this.color === 'black'? blackBishop:whitBishop;
        return <img src={bishopImg}/>
    }
}

export default Bishop;