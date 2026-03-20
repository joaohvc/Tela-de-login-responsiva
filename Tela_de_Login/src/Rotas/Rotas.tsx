import { Route, Routes } from "react-router-dom"
import LOGIN from "../Login/Login"
import CADASTRO from "../Cadastro/Cadastro"

function ROTAS () {
    return(
        <div>
            <Routes>
                <Route path="/" element={<LOGIN/>}/>
                <Route path="/Cadastra-se" element={<CADASTRO/>}/>
            </Routes>
        </div>
    )
}
export default ROTAS