import { Link } from "react-router-dom";

function LOGIN2() {
  return (
    <div className="min-h-screen h-screen overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      {/*div que centraliza a tela de login no meu tela*/}
      <div className="h-screen w-screen flex items-center justify-center ">
        {/*div que cria o bloco azul da tela de login*/}
        <div className="bg-blue-500 h-80 w-35 rounded-l-2xl sm:h-100 sm:w-50 lg:h-110 lg:w-70 2xl:w-70 2xl:h-150">
          {/*div que vai orginazar a informações dentro do bloco azul*/}
          <div className="flex flex-col items-center">
            <p className="text-white text-sm mb-10 mr-2 ml-2 mt-4 sm:text-xl lg:text-2xl 2xl:text-3xl ">
              Caso você não tenho <br />
              se castrado ainda <br /> para realizar o login,
              <br /> por favor apertar no botão "Cadastra-se" para realizar seu
              cadastro.
            </p>
            <Link to="/Cadastra-se">
              <button className="bg-white w-26 h-8 relative rounded-2xl cursor-pointer hover:bg-blue-600 sm:w-36 sm:h-13 sm:text-xl  lg:w-45 lg:h-16 lg:text-xl 2xl:w-50 2xl:h-18 2xl:text-3xl 2xl:top-10 ">
                Cadastrar-se
              </button>
            </Link>
          </div>
        </div>
        {/*div que cria o bloco branco da tela de login*/}
        <div className="bg-white h-80 w-60 rounded-r-2xl shadow-2xl sm:h-100 sm:w-90 lg:h-110 lg:w-130 2xl:w-150 2xl:h-150 ">
          {/*div que vai orginazar a informações dentro do bloco branco*/}
          <div className="flex flex-col items-center h-80 justify-center sm:h-100 lg:h-110 2xl:h-150">
            <h1 className="relative bottom-15 text-2xl sm:text-4xl lg:text-6xl">
              Login
            </h1>
            <h1 className="relative right-16 sm:right-30 sm:text-xl lg:right-45 lg:text-2xl 2xl:right-60 2xl:text-2xl">
              Email
            </h1>
            <input
              type="text"
              placeholder="SeuEmail@gmail.com"
              className="mb-3 bg-gray-300 rounded-2xl h-8 pl-4 sm:h-12 sm:w-80 lg:w-110 lg:h-12 lg:text-2xl 2xl:w-140"
            />
            <h1 className="relative right-16 sm:right-30 sm:text-xl lg:right-45 lg:text-2xl 2xl:right-60 2xl:text-2xl">
              Senha
            </h1>
            <input
              type="password"
              placeholder="SuaSenha"
              className="bg-gray-300 rounded-2xl h-8 pl-4 sm:h-12 sm:w-80 lg:w-110 lg:h-12 lg:text-2xl 2xl:w-140"
            />
            <button className="relative top-9 bg-blue-500 h-8 w-30 rounded-2xl hover:bg-blue-600 cursor-pointer sm:w-36 sm:h-13 sm:text-xl sm:top-14 lg:w-45 lg:h-16 lg:text-2xl 2xl:w-50 2xl:h-18 2xl:text-3xl 2xl:top-19">
              Logar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LOGIN2;
