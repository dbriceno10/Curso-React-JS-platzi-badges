const getID = () => {
    const url = window.location.pathname
    const id = url.slice(37)
    return id
}

export default getID