import blackPawn from '../images/black-pawn.png';
import whitPawn from '../images/white-pawn.png';
class Pawn{
    constructor(color,position){
        this.color = color;
        this.position = position;
    }
    show(){
        const pawnImg = this.color === 'black'?blackPawn:whitPawn;
        return <img src={pawnImg} alt=''/>
    }
}

export default Pawn;