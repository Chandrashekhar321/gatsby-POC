import { Router } from "@reach/router"
import * as React from "react"
import Layout from "../components/layout"
import EventDetail from "../components/event-detail/event-detail"

const App = () => (
  <Layout>
    <Router>
      <EventDetail path="/app/event-detail/:id"/>
    </Router>
  </Layout>


)

export default App