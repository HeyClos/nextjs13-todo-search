import React from 'react'
// We should always try to think of the solution in terms of a serverside component
// this helps us lose the risk of exposing keys, and we're goinng to allow the heavy lifing to happen away from the clients device
// giving us the benefits of a faster experience
// ONLY if we need to we convert it to a client component
// in this case we need an input so ppl can search, so we need a client component
// https://beta.nextjs.org/docs/rendering/server-and-client-components

const Search = () => {
  return (
    <div>Search</div>
  )
}

export default Search