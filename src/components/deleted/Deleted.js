function Deleted({deletedTodos}) {
    return (
        <div className="list">
            <ul>
                {deletedTodos.map((todo, id) => (    //to show the delete tasks
                <li key={id}>{todo}</li>
                ))}
            </ul>
        </div>
    )
}

export default Deleted
