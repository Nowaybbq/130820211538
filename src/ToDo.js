function ToDo({ todo }) {
    return (
        <div key={todo.id}>
                {todo.task}
            </div>
    )
}

export default ToDo