const personReducer = (state = { name: "Amit" }, { type, payload }) => {
    if (type === 'UPDATE_PERSON') {
      return { name: payload }
    }
    return state
  }

  export default personReducer