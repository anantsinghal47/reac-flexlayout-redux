
import { configureStore } from '@reduxjs/toolkit'
import layout from './flexLayoutSlice'
const store = configureStore({
  reducer: {
    
    'layout' :  layout

  },
})

export default store