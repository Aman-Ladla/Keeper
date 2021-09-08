import Header from "./Components/Header"
import Footer from "./Components/Footer";
import Note from "./Components/Note";
import InputArea from "./Components/InputArea";
import React, {useState} from "react";

function App() {

    const[todos, setTodo] = useState([]);

    function addTodoImpl(todo){
        setTodo((prev)=>{
            return [
                ...prev,
                todo
            ]
        });
        //console.log(todos);
    }

    function removeTodo(todo){
        setTodo((prev)=>{
            return prev.filter((item) => {
                return todo !== item;
            });
        });
    }

    return (
        <div>
            <Header />
            <InputArea add={addTodoImpl}/>
            {todos.map((todo,index)=>(
                <Note
                    key={index}
                    id={index}
                    item={todo}
                    remove={removeTodo}
                />
            ))}
            {/*<Note key={1} title="Note title" content="Note content" />*/}
            <Footer />
        </div>
    );
}

export default App;
