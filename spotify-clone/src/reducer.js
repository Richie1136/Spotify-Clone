export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  discover_weekly: null,
  // Remove after finishing developing
  // token: 'BQAEQ3FUXJyeiwjNwoFM7OKV5v3_3EKVVaIBJhWAU68RfGmn1bC6AIUsFROyrqI83EBA4nUtzvWzJ4zFZ7IgDHuCi1MTdVKc80jmBUQAGn8Jo9E135ley4ZsqUFzNWOK6hLlmH0IcRUo1eKmVdkNMRofKphWpw'
}

const reducer = (state, action) => {
  console.log(action)

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playLists: action.playLists
      }
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token
      }
    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly
      }
    default:
      return state
  }
}

export default reducer