import blackRock from '../images/black-rock.png';
import whiteRock from '../images/white-rock.png';
class Rock{
    constructor(color,position){
        this.color = color;
        this.position = position;
    }
    show(){
        const rockImg = this.color === 'black'?blackRock:whiteRock;
        return <img src={rockImg}/>
    }
}


export default Rock;