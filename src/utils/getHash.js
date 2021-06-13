const getHash = async () => 
    window.location.hash.slice(1).toLocaleLowerCase().split("/")[1] || "/"

export default getHash