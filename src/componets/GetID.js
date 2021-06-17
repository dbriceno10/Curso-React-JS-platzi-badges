const getID = () => {
    const url = window.location.hash
    //sustituimos el método de window.location.pathname por windon.location.hash
    const id = url.slice(9)
    return id
}

export default getID