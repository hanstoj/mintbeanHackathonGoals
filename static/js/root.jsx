const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const Prompt = ReactRouterDOM.Prompt;
const Switch = ReactRouterDOM.Switch;
const Redirect = ReactRouterDOM.Redirect; 

function LogIn() {

    const [email, setEmail] = React.useState('');  //start off as empty string
    const [password, setPassword] = React.useState('');

    function handleLogin(evt) {
        evt.preventDefault();
        console.log(email)  //the value we set in the email form below ; sent email and password to server
        console.log(password)
        alert('you submitted the form')

        //how to get stuff from server? Use 'fetch'
        //fetch('/api/login') // set to a route for your own use. No user will ever go here so start with 'api' ; This is GET request, so make a POST request with a second argument 

        const data = {
            email: email,
            password: password
        }

        const options = {
            method: 'POST',
            body: JSON.stringify(data)  //turn into JSON 
        }

        fetch('/api/login', options)
    }

    function handleEmailChange(evt) {
        setEmail(evt.target.value)  //target what user puts in 


    }

    function handlePasswordChange(evt) {
        setPassword(evt.target.value)
    }

    return (
        <div>
            Hi
            <form onSubmit={}>
                Username:
                <input value={email} onChange = {handleEmailChange} type="text"></input>
                Password
                <input value={password} onChange = {handlePasswordChange} type="text"></input>
                <button></button>
            </form>
        </div>
    )
}

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/login"> Login </Link> 
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/login">
                        <LogIn />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))