export const initialState = {
  user: null,
  playLists: [],
  playing: false,
  item: null,
  // Remove after finishing developing
  token: 'BQAEQ3FUXJyeiwjNwoFM7OKV5v3_3EKVVaIBJhWAU68RfGmn1bC6AIUsFROyrqI83EBA4nUtzvWzJ4zFZ7IgDHuCi1MTdVKc80jmBUQAGn8Jo9E135ley4ZsqUFzNWOK6hLlmH0IcRUo1eKmVdkNMRofKphWpw'
}

const reducer = (state, action) => {
  console.log(action)

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token
      }
    default:
      return state
  }
}

export default reducer

