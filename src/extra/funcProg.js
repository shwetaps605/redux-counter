import { pipe } from 'lodash'
import { Map } from 'immutable'
  
  
  let input = "Hello world   "
  const trim = str => str.trim()
  const toLowerCase = str => str.toLowerCase()
  const wrapInDiv = str => `<div>${str}</div>`

  const transformedValue = compose(wrapInDiv,toLowerCase,trim)
  console.log(transformedValue)

  const transform = pipe(trim, toLowerCase, wrapInDiv)
  console.log(transform)

  //Currying
  const add = a => b => c => a+b-c
  console.log(add(1)(8)(2))

  const book = Map({title:'Harry Potter'})
  console.log(book)

