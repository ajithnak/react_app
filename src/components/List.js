function List(props) {
    const { item , delItem} = props;
    return (
        <div style={{
            margin: 10,
            padding: '10px 40px',
            border: '1px solid black',
            borderRadius: 10,
            marginBottom: 5,
            cursor: 'pointer',
        }}
            id={item}
            onClick={(e) => {
                document.getElementById(item).style.opacity = '30%'
                setTimeout(() => {
                    document.getElementById(item).style.opacity = '100%'
                    delItem(e)
                }, 1000)
            }}
        >
            <b>{item}</b>
            <span style={{
                position: 'absolute',
                right: '20%',
                color: 'red'
            }}>
                <sub>
                    click 2 delete
                </sub>
            </span>
        </div>
    )
}

export default List