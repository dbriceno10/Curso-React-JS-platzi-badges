const getID = () => {
    const url = window.location.pathname
    const id = url.slice(8)
    return id
}

export default getID