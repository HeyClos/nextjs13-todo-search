import Link from 'next/link'
import React from 'react'
import { Todo } from '../../../typings'

// casting Todo Type to our todo component
const fetchTodos = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/")
    const todos: Todo[] = await res.json();
    return todos
}

async function TodosList() {
    const todos = await fetchTodos()
  return <>
    {todos.map((todo) => (
        <p key={todo.id}>
            {/* link will try to prefectch so user experience is quicker */}
            <Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>
        </p>
    ))}
  </>
}

export default TodosList

// if you need to use any type of click handler
// or a hook or any interactive element
// that requires binding to an element, 
// you need to switch to a client component