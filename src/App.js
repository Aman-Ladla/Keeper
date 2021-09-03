import Header from "./Components/Header"
import Footer from "./Components/Footer";
import Note from "./Components/Note";
import notes from "./Notes";

function App() {



  return (
    <div className="App">
        <Header/>
        <Footer/>
        {notes.map(note => (
            <Note
                key = {note.key}
                title = {note.title}
                des = {(note.content)}
            />
        ))}
        {/*<Note/>*/}
    </div>
  );
}

export default App;
