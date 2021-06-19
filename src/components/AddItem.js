export function AddItem(props) {
    return (
        <div style={{
            paddingLeft: '30%',
            paddingTop: '5%'
        }} >
            <input type="text" id='addItem' />&nbsp;&nbsp;
            <button type="button" onClick={() => {
                props.insertItem(document.getElementById('addItem').value)
                document.getElementById('addItem').value = ""
            }} id='addBtn'>Add Item</button>
        </div>
    )
}