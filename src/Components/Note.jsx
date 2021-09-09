import DeleteIcon from '@material-ui/icons/Delete';

function Note(props){

    console.log(props.item);

    return(
        <div className={"note"}>
            <h1 >{props.item.topic}</h1>
            <p >{props.item.content}</p>
            <button
                onClick={()=>{
                    props.remove(props.item);
                }}
            >
                <DeleteIcon/>
                </button>
        </div>
    )

}

export default Note;

