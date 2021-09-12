import React from "react";
import Navbar from "./navbar";
const Layout = (props) => {
  /**Para hacer que mis contenidos se rendericen dentro de la "etiqueta" Layout que estoy creando necesitamos usar un prop especial llamado children. En los componentes funcionales los props son su único argumento, los recibo en la función*/
  //const children = props.children
  return (
    <React.Fragment>
      <Navbar />
      {props.children}
    </React.Fragment>
  );
};

export default Layout;
