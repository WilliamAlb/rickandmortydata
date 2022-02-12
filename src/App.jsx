import {Route, Routes} from "react-router-dom";
import Characters from "./features/characters/Characters";

import Dashboard from "./features/dashboard/Dashboard";
import Episodes from "./features/episodes/Episodes";
import Locations from "./features/locations/Locations";
import Navbar from "./features/navbar/Navbar";

import routes from "./util/routes";


function App() {

  return (
    <div className="App">
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path={routes.dashboard} element={<Dashboard />}></Route>
          <Route path={routes.loactions} element={<Locations />}></Route>
          <Route path={routes.characters} element={<Characters />}></Route>
          <Route path={routes.episodes} element={<Episodes />}></Route>
        </Routes>
    </div>
   
  )
}

export default App
