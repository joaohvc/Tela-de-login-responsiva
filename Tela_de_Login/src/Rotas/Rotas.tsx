import { Route, Routes } from "react-router-dom"


import LOGIN2 from "../Login/login2"
import CADASTRO2 from "../Cadastro/Cadastro2"

function ROTAS () {
    return(
        <div>
            <Routes>
                
                
                <Route path="/Cadastra-se" element={<CADASTRO2/>}/>
                <Route path="/" element={<LOGIN2/>}/>
            </Routes>
        </div>
    )
}
export default ROTAS