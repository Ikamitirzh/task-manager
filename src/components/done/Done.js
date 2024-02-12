function Done({completedTodos}) {
    return (
        <div className="list">
            <ul>
        {completedTodos.map((todo, id) => (       // to show the Done tasks
          <li key={id}>{todo}</li>
        ))}
      </ul>
        </div>
    )
}

export default Done
