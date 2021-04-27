const saveToStorage = (key, value) => {
  window.localStorage.setItem(key, value)
}

const getFromStorage = (key) => {
  const data = window.localStorage.getItem(key)
  return data
}

const clearStorage = () => {
  window.localStorage.clear()
}

export default { saveToStorage, getFromStorage, clearStorage }