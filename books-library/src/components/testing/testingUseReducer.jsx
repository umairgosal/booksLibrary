import React, { useReducer } from 'react'

const TestingUseReducer = () => { // main function

    // initial state
    const initialState = {
        age: 10
    }

    // reducer function
    function reducer(state, action){
        if(action.type === 'increment_age'){
            return {
                age: state.age + 1
            }
        }  
        throw Error('unknow error') 
    }

    // defining useReducer hook
    const [state, dispatch] = useReducer(reducer, initialState)

    // calling to update state
    const handleChange = (e)=> {
        e.preventDefault();
        dispatch({type: 'increment_age'})
    }
    
    // returning html render
    return (
      <div>
          <form>
              <button className='btn' onClick={handleChange}>increment age</button>
              <h2>{state.age}</h2>
          </form>
      </div>
    )
}

export default TestingUseReducer