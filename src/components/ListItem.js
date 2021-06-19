import OneList from './List';

export function ListItem(props) {
    return (
        <div>
            {props.list.map((i, index) => 
                <OneList delItem={props.delItem} item={i} key={index} />
            )}
        </div>
    )
}