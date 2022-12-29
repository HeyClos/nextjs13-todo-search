import React from 'react'
import { Todo } from '../../../../typings'
import { notFound } from 'next/navigation'

export const dynamicParams = true // true by default, this is a keyword we can export that tells nextjs that we want to try to SSR a page

type PageProps = {
    params: {
        todoId: string
    }
}

const fetchTodo = async (todoId: string) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${todoId}`,
        { next: { revalidate:60  } } //this will update SSR pages in the cacheevery 60seconds
    )
    const todo: Todo = await res.json()
    return todo
}

async function TodoPage({ params: { todoId }}: PageProps) {
    const todo = await fetchTodo(todoId)
    if (!todo.id) return notFound()

  return (
    <div className='p-10 bg-yellow-200 border-2 m-2 shadow-lg'>
        <p>
            #{todo.id}: {todo.title}
        </p>
        <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
        <p className='border-t border-black mt-5 text-right'>
            By User: {todo.userId}
        </p>
    </div>
  )
}

export default TodoPage

export async function generateStaticParams () {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/")
    const todos: Todo[] = await res.json();

    // if you need to rate limit at anypoint and not preload EVERY result
    // const limitedResults = todos.splice(0,10)
    // mapt this ^ instead

    return todos.map(todo => ({
        todoId: todo.id.toString(),
    }))
}