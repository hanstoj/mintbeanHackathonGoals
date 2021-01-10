// establish variables that are linked to he HTML
// const form = document.getElementById("form");
// const button = document.getElementById("button");
// const todo = document.getElementById("todo");

// let todoList = []; 

 // event handling when added a new todo item
// form.addEventListener("submit", function (event) {
     // cancel an event; validate the input before submitting
//     event.preventDefault();
//     addTodo();
// }); 

const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const Prompt = ReactRouterDOM.Prompt;
const Switch = ReactRouterDOM.Switch;
const Redirect = ReactRouterDOM.Redirect; 

function Homepage() {
    return <div>Goal Tracker</div>
}
function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/">
                        <Homepage />
                    </Route>
                </Switch>
            </div>

        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))