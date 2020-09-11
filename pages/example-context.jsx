import { useContext } from 'react';
import { Context } from 'context/store'

const Index = () => {
  const context = useContext(Context);

  return (
    <>
      <h1>Index</h1>
      <p>Hello My name {context.state.name}</p>
      <p>Count: {context.state.count}</p>
      <button onClick={() => context.dispatch({ type: 'PLUS_COUNT' })}>Plus!</button>
      <button onClick={() => context.dispatch({ type: 'REDUCE_COUNT' })}>Reduce!</button>
      <button onClick={() => context.dispatch({ type: 'RESET_COUNT' })}>Reset!</button>
    </>
  )
}

export default Index