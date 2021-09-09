import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import {Zoom} from "@material-ui/core";

function InputArea(props) {

    const [inputText, setInputText] = useState(
        {
            topic: "",
            content: ""
        }
    );

    const [isExpanded, setExpanded] = useState(false);

    function setTextImpl(event) {
        const {name, value} = event.target;

        setInputText(prev => {
            return {
                ...prev,
                [name]: value
            }
        });
    }

    function setExpandedImpl() {
        setExpanded(true);
    }

    return (
        <div onClick={setExpandedImpl}>
            <form className="create-note">
                {isExpanded && <input
                    onChange={setTextImpl}
                    value={inputText.topic}
                    name="topic"
                    placeholder="Title"
                />}
                <textarea
                    onChange={setTextImpl}
                    value={inputText.content}
                    name="content"
                    placeholder="Take a note..."
                    rows={isExpanded ? "3" : "1"}
                />
                <Zoom in={isExpanded}>
                    <Fab
                        onClick={(event) => {
                            props.add(inputText);
                            event.preventDefault();
                            setInputText({topic: "", content: ""});
                        }}
                    >
                        <AddIcon/>
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default InputArea;
