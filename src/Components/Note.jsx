
function Note(props){

    return(
        <div className={"note"}>
            <h1 >{props.title}</h1>
            <p >{props.des}</p>
        </div>
    )

}

export default Note;