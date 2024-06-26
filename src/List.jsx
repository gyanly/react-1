import Item from "./Item";
function List({ list }){

    // console.log(props);
    // const { list } = props; 

    return(
        <ul>
            {list.map(function (item) {
                return (
                <Item key={item.objectID} {...item} />
            );
            })}
        </ul>
    )
}

export default List;