const list = [
  {
    title: "Quais são os pré-requisitos para adotar um animal?",
    description:
      "Cada grupo de adoção tem suas próprias regras e requisitos para adoção. Se você estiver interessado em um animal específico, entre em contato com o grupo de adoção que criou o anúncio para saber quais são as políticas deles.",
  },
  {
    title: "Como faço para divulgar um pet para adoção?",
    description:
      " Acesse a área 'Divulgar um pet', preencha o formulário com fotos e  informações do animal, e nossa equipe vai revisar antes de publicar.",
  },
  {
    title: "Como faço para adotar um pet?",
    description:
      "Basta ver os pets disponíveis na Página de Adoção e entrar em contato com o anunciante do pet que você deseja adotar.",
  },
  {
    title: "Como saber se fui aprovado para adotar um animal?",
    description:
      "Após enviar uma solicitação de adoção, o abrigo ou grupo de resgate responsável pelo animal de seu interesse entrará em contato com você. Você também pode entrar em contato diretamente com o abrigo ou grupo de resgate para obter mais informações.",
  },

  {
    title: "Posso adotar um animal de outro estado?",
    description:
      "Cada grupo de adoção que anuncia seus animais tem suas próprias regras e requisitos para adotá-los.",
  },

  {
    title: "Porque não fui selecionado para a adoção?",
    description:
      "Obrigado por considerar a adoção em primeiro lugar! Cada abrigo e grupo de resgate tem seu próprio processo de adoção. Não ditamos os procedimentos de adoção aos nossos membros, embora os incentivemos a fazer todo o possível para facilitar a busca de bons lares para os animais disponíveis para adoção. Esperamos que esta experiência não mude sua opinião sobre oferecer um lar amoroso a um animal necessitado. Existem muitos abrigos e grupos de resgate com muitos outros animais disponíveis para adoção esperando por um lar definitivo!",
  },
];

export function Accordion() {
  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-8 justify-evenly items-center my-8 lg:w-2/5 md:w-fit border-2 border-[var(--primary-color-light)] rounded-lg px-4 py-6">
      <img src="/questionmark.png" className="h-20" />
      <ul className="text-sm flex flex-col gap-2 w-full list-disc">
        {list.map((item, i) => (
          <li key={i}>
            <details className="group">
              <summary className="cursor-pointer font-medium list-none flex justify-between items-center">
                {item.title}
                <span className="ml-2 transition-transform group-open:rotate-180">
                  <img src="/arrow-down.png" className="h-4" />
                </span>
              </summary>
              <p className="mt-2 text-xs text-[var(--shadow)]">
                {item.description}
              </p>
            </details>
          </li>
        ))}
      </ul>
    </div>
  );
}
