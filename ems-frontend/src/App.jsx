import './App.css'
import ListYarnComponent from "./components/ListYarnComponent.jsx";
import {HeaderComponent} from "./components/HeaderComponent.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import YarnComponent from "./components/YarnComponent.jsx";
function App() {

  return (
    <>
        <BrowserRouter>
        <HeaderComponent />
        <Routes>
            {/*!// base url*/}
            <Route path={'/'} element={<ListYarnComponent />} ></Route>
            {/*!// /yarns url*/}
            <Route path={'/yarns'} element={<ListYarnComponent />} ></Route>
            {/*!// /addYarn url*/}
            <Route path={'/addYarn'} element={<YarnComponent />} ></Route>
            {/*!// /updateYarn url*/}
            <Route path={'/updateYarn/:id'} element={<YarnComponent />} ></Route>
            {/*!// /deleteYarn url*/}
            <Route path={'/deleteYarn/:id'} element={<ListYarnComponent />} ></Route>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
