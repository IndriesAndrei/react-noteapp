import Card from './includes/Card';

export default function List({list, deleteListItem, currentSelected, cloningInitialised}) {
    return (
        <>
            <div className="container">
                <div className="col-md-8 offset-2 mt-5">
                    {list.map((item) => (
                        // passing deleteListItem to Card component
                       <Card item={item} 
                            key={item.id} 
                            deleteListItem={deleteListItem}
                            cloneListItem={currentSelected}
                            cloneInit={cloningInitialised}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}