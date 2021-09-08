import React, {useState} from "react";

function InputArea(props) {

    const [inputText, setInputText] = useState(
        {
            topic:"",
            content:""
        }
    );

    function setTextImpl(event){
        const {name,value} = event.target;

        setInputText(prev => {
            return{
                ...prev,
                [name] : value
            }
        });
    }

    return (
        <div>
            <form>
                <input onChange={setTextImpl} value={inputText.topic} name="topic" placeholder="Title"/>
                <textarea onChange={setTextImpl} value={inputText.content} name="content" placeholder="Take a note..." rows="3"/>
                <button
                    onClick={(event) => {
                        props.add(inputText);
                        event.preventDefault();
                        setInputText({topic:"",content:""});
                    }}
                >Add
                </button>
            </form>
        </div>
    );
}

export default InputArea;
