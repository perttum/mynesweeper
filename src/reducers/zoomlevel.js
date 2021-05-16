const zoomLevelReducer = (state = 2, action) => {
  switch(action.type){
  case 'SET_ZOOM_LEVEL':
    return action.data

  default: return state
  }
}

export const setZoomLevel = (zoomLevel) => {
  return{
    type: 'SET_ZOOM_LEVEL',
    data: zoomLevel
  }
}

export default zoomLevelReducer