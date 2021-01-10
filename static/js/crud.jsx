// function addGoal(name) {
//     alert(name);
// }

// event handling for "Add" button
{/* <button type="button" onClick={ () =>
alert("Added New Goal!")
}>Add</button>

function handleSubmit(event) {
    event.preventDefault();
    PaymentResponse.addGoal("Added New Goal!")
} */}

// stating the initial state of goals
const [goals, setGoals] = useState(props.goals);

const goalsList = goals.map(goal => (
    <Goal 
        id ={goal.id}
        name={goal.name}
        completed={goal.completed}
    />
    )
);
