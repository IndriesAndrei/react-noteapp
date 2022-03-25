import { FaTimes, FaPencilAlt } from 'react-icons/fa';
import CardStyle from './CardStyle';

export default function Card({item, deleteListItem, cloneListItem, cloneInit}) {
    return (
        <>
        <CardStyle>
            <div className="position-relative">
                <div className="position-absolute top-0 end-0 p-2">
                    <a href="#" 
                        onClick={() => deleteListItem(item.id)}
                    >
                        <FaTimes />
                    </a>
                    <a href="#" 
                        className="p-3"
                        onClick={() => {cloneListItem(item.id)
                            cloneInit(true)
                        }}
                    >
                        <FaPencilAlt />
                    </a>
                </div>
            </div>
        
            <h5>{item.text}</h5>
            <p>{item.description}</p>
        </CardStyle>
        </>
    )
}