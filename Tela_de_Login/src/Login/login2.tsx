import { Link } from "react-router-dom";

function LOGIN2() {
  return (
    <div className="min-h-screen h-screen overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex flex-col w-screen h-screen items-center mt-5 lg:mt-0 lg:flex-row-reverse lg:justify-center">
        <div className=" bg-white w-90 h-170 shadow-2xl rounded-t-2xl lg:h-110 lg:w-100 lg:rounded-r-2xl ">
          <div className="flex flex-col items-center justify-center h-170 mt-10 lg:h-110">
            <h1 className="text-3xl relative bottom-15">Cadastrar-se</h1>
            <h1 className="">EMAIL</h1>
            <input
              type="text"
              placeholder="SeuEmail@gmail.com"
              className="bg-gray-300 rounded-2xl w-80 h-8 pl-5 mb-5 lg:mb-5"
            />
            
            <h1>SENHA</h1>
            <input
              type="password"
              placeholder="SuaSenha"
              className="bg-gray-300 rounded-2xl w-80 h-8 pl-5 mb-5 lg:mb-5 "
            />
            <button className="text-blue-400 hover:text-blue-600 cursor-pointer relative right-20 lg:right-0">Esqueceu sua senha?</button>
            
            <button className="bg-blue-500 text-white w-40 h-10 rounded-2xl relative top-5 hover:bg-blue-600 text-xl lg:cursor-pointer">
              Entrar
            </button>
          </div>
        </div>
        <div className="bg-blue-500 flex w-90 h-40 rounded-b-2xl shadow-2xl lg:h-110 lg:w-60 lg:rounded-l-2xl lg:rounded-bl-2xl lg:rounded-br-none">
          <div className="flex flex-col h-40 w-90 lg:w-60 lg:h-150">
            <h1 className="text-white m-5">
              Caso você não tenha uma conta ainda, aperta no botão abaixo para criar sua conta
            </h1>
            <div className="flex justify-center lg:w-60">
              <Link to="/Cadastra-se">
                <button className="bg-white w-40 h-10 rounded-2xl cursor-pointer hover:bg-gray-300 text-xl">
                  Cadastrar-se
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LOGIN2;