// const getData = async () => {
//     this.setState({ loading: true, error: null })
//     try {
//         const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`)
//         const data = await response.json()

//         this.setState({
//             loading: false,
//             data: {
//                 info: data.info,
//                 results: [].concat(this.state.data.results, data.results)
//             },
//             nextPage: this.state.nextPage + 1
//         })
//     } catch (error) {
//         console.error(error)
//         this.setState({ loading: false, error: error})
//     }

// }

// export default getData

// const getData = async () => {
//     this.setState({ loading: true, error: null });//estamos cargando datos

//     try {
//         const response = await fetch(
//         `https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`//luego le vamos a estar pasando el número de la siguiente página
//         );
//         const data = await response.json();

//         this.setState({//vamos a guardar los datos acá
//             loading: false,
//             data: {
//             info: data.info,
//             results: [].concat(this.state.data.results, data.results)//aquí estamos concatenando (concat) los resultados nuevos que llegaron con los que ya estaban antes, para sí mostrarlos todos en la misma página
//             },
//             nextPage: this.state.nextPage + 1//aumentamos el valor de la página en 1
//         });
//     } catch (error) {
//         this.setState({ loading: false, error: error })
//     }
// }

// export default getData

const API = "https://rickandmortyapi.com/api/character/";

const getData = async (id) => {
  const apiURL = id ? `${API}${id}` : API;
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch Error", error);
  }
};

export default getData;
