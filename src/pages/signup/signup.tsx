import { useState } from "react";
import { supabase } from "../../../supabase-client";

export function Signup() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload = { name, email, password };

    // add o nome da table 'users' criada no supabase e envia dados
    const { data, error } = await supabase
      .from("users")
      .insert(payload)
      .single();

    console.log(data, error);

    setLoading(false);
  };

  return (
    <main>
      <div className="flex gap-2 mb-8 items-center">
        <h1>Criar conta</h1>
        <p className="flex w-fit m-auto gap-2 items-center font-semibold text-xs text-[var(--subtitle)] border bg-[#fff] rounded-sm p-2">
          <img src="/user-yellow.png" className="h-4" />É necessário criar uma
          conta antes de cadastrar um animal para adoção.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mb-8">
        <section className="flex flex-wrap gap-4 bg-[var(--card-bg)] shadow-[var(--shadow)] shadow-md rounded-lg p-4 mb-4">
          <fieldset>
            <label className="flex flex-col mb-2 font-semibold" htmlFor="email">
              E-mail:
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              className="p-2 rounded-lg text-sm w-full"
              required
            />
          </fieldset>
          {isSignUp ? (
            ""
          ) : (
            <fieldset>
              <label
                className="flex flex-col mb-2 font-semibold"
                htmlFor="name"
              >
                Nome:
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
                className="p-2 rounded-lg text-sm w-full"
                required
              />
            </fieldset>
          )}

          <fieldset>
            <label
              className="flex flex-col mb-2 font-semibold"
              htmlFor="password"
            >
              Senha:
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              minLength={6}
              className="p-2 rounded-lg text-sm w-full"
              required
            />
          </fieldset>
        </section>
        <button
          onClick={() => setIsSignUp(!isSignUp)}
          className="cursor-pointer border-2 border-[var(--secondary-color)] text-[var(--secondary-color)] shadow-md rounded-lg py-2 px-4 mr-2"
        >
          Trocar para {isSignUp ? "Criar conta" : "Logar"}
        </button>
        <button
          disabled={loading}
          type="submit"
          className="cursor-pointer bg-[var(--secondary-color)] shadow-md font-semibold text-white rounded-lg py-2 px-6"
        >
          {isSignUp ? "Logar conta" : "Criar conta"}
        </button>
      </form>
    </main>
  );
}
