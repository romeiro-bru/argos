import { Link } from "react-router-dom";
import { NoData } from "../../components/noData";
import { WarningTag } from "../../components/warningTag";
import { appRoutes } from "../../routes";

export function UserNotAllowed() {
  return (
    <section>
      <h1 className="mb-6">Usuário não autenticado</h1>

      <WarningTag
        message="É necessário criar uma
          conta antes de cadastrar um animal para adoção."
      />

      <NoData
        text="É necessário estar logado na plataforma para cadastrar um animal para adoção."
        supportText={
          <>
            Vá até a página de{" "}
            <Link to={appRoutes.SIGN_UP.path} className="text-blue-500 underline">
              login ou cadastro
            </Link>{" "}
            para criar uma conta.
          </>
        }
      />
    </section>
  );
}
