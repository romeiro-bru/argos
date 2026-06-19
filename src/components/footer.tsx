export function Footer() {
  return (
    <footer className="border-t border-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-semibold text-lg">
              <img src="/favicon.png" className="h-6" alt="Argos" />
              Argos
            </div>

            <p className="text-sm text-gray-600 mt-3 max-w-xs">
              Conectando animais resgatados a famílias prontas para oferecer
              amor, cuidado e um novo lar.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Plataforma</h4>

            <ul className="space-y-2 text-sm">
              <li>Adotar um pet</li>
              <li>Divulgar um pet</li>
              <li>Como funciona</li>
              <li>Perguntas frequentes</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Informações</h4>

            <ul className="space-y-2 text-sm">
              <li>Sobre</li>
              <li>Parceiros</li>
              <li>Privacidade</li>
              <li>Contato</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-4 text-center text-xs text-gray-500">
          © 2026 Argos • Projeto fictício para portfólio • Não realizamos venda
          de animais.
        </div>
      </div>
    </footer>
  );
}
