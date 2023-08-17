import {ReactComponent as Check} from './check.svg';
import {ReactComponent as Deletesvg} from './delete.svg'
import './Todoicon.css'
const icontypes={
    "check": (color)=> <Check className="Icon-svg" fill={color}/>,
    "delete":(color)=> <Deletesvg className="Icon-svg" fill={color}/>,

};

function Todoicon({type, color, onClick}){
    return (
        <span 
            className={`Icon-container Icon-container-${type}`}
            onClick={onClick}
        >
            {icontypes[type](color)}
        </span>
    )
}

export {Todoicon};