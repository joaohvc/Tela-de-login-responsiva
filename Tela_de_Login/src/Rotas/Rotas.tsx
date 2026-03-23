import { Route, Routes } from "react-router-dom"
import LOGIN from "../Login/Login"
import CADASTRO from "../Cadastro/Cadastro"
import LOGIN2 from "../Login/login2"

function ROTAS () {
    return(
        <div>
            <Routes>
                <Route path="/Login2" element={<LOGIN/>}/>
                <Route path="/Cadastra-se" element={<CADASTRO/>}/>
                <Route path="/" element={<LOGIN2/>}/>
            </Routes>
        </div>
    )
}
export default ROTAS