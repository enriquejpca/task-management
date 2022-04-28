import ReactDOM from "react-dom";
import Main from "./components/main";

ReactDOM.render(<App />, document.querySelector("main"));

function App() {
    return (
        <div>
            <Main />
        </div>
    );
}

export default App;
