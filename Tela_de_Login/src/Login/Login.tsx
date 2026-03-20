import { Link } from "react-router-dom";

function LOGIN() {
  return (
    <div>
      {/*Div principal, que define a sistema de rolagem*/}
      <div className="min-h-screen h-screen overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className="min-h-screen w-screen flex items-center justify-center ">
          <div className="bg-blue-500 h-100 w-50 rounded-l-2xl flex flex-col items-center justify-center">
            <h1 className="text-white text-3xl mb-7">Bem Vindo</h1>
            <p className="text-white mb-10 mr-2 ml-2">
              Caso você não tenho <br />
              se castrado ainda <br /> para realizar o login,
              <br /> por favor apertar no botão "Cadastra-se" para realizar seu
              cadastro.
            </p>
            <div className="flex justify-center">
              <Link to="/Cadastra-se">
                <button className="bg-blue-600 text-white cursor-pointer w-35 h-10 rounded-2xl hover:bg-blue-700">
                  Cadastra-se
                </button>
              </Link>
            </div>
          </div>
          <div className="bg-white-500 h-100 w-110 rounded-r-2xl shadow-2xl flex justify-center flex-col items-center ">
            <h1>Email</h1>
            <input
              className="bg-gray-300 w-70 h-10 pl-3 mb-5"
              type="text"
              placeholder="SeuEmail@gmail.com"
            />
            <h1>Senha</h1>
            <input
              className="bg-gray-300 w-70 h-10 pl-3"
              type="password"
              placeholder="SuaSenha"
            />
            <button className="mt-8 w-40 h-10 rounded-2xl bg-blue-500 cursor-pointer hover:bg-blue-600">
              Entrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LOGIN;
