const ADD = "tasks/ADD"
const REMOVE = "tasks/REMOVE"
const UPDATE_COMPLETED = "tasks/UPDATE_COMPLETED"

const initialState = {
  tasks: [],
}

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        tasks: [...state.tasks, { completed: false, title: action.title }],
      }
    case REMOVE:
      return {
        ...state,
        tasks: state.tasks.filter((task, index) => {
          return index !== action.id
        }),
      }
    case UPDATE_COMPLETED:
      return {
        ...state,
        tasks: state.tasks.map((task, index) => {
          if (index === action.id) {
            task.completed = action.completed
          }
          return task
        }),
      }
    default:
      return state
  }
}

export const addTask = (title) => {
  return { type: ADD, title: title }
}

export const removeTask = (index) => {
  return { type: REMOVE, id: index }
}

export const updateCompletedTask = (value, index) => {
  return { type: UPDATE_COMPLETED, completed: value, id: index }
}

export default tasksReducer
