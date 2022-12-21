import React from "react"
import TodosList from "./TodosList";
//This can be our resources page

function Todos() {
    return (
        <div>
            {/* @ts-ignore */}
            <TodosList />
        </div>
    )
}

export default Todos;