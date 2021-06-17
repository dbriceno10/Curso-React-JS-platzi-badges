import React from "react"
import { Switch, Route, HashRouter } from "react-router-dom"
//Estamos eliminando BrowserRouter y lo vamos a sustitir por HashRouter
//import BadgeNew from "../pages/badgeNew"
import Badges from "../pages/badges"
//import BadgeEdit from "../pages/badgeEdit"
import BadgeDetails from "../pages/badgeDetails"
import Layout from "./layout"
import NotFound from "../pages/notFound"
import Home from "../pages/Home"

const App = () => {
    return (
        <HashRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/badges" component={Badges} />
                    {/* <Route exact path="/badges/new" component={BadgeNew} /> */}
                    {/* <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} /> */}
                    <Route exact path="/badges/:badgeId" component={BadgeDetails} />
                    <Route component={NotFound}/> {/**Esta sería una página de "Error404", si ningún elemento coincide con las rutas, tomará este componente de "error4" */}
                </Switch>
            </Layout>
        </HashRouter>
    )
}

export default App