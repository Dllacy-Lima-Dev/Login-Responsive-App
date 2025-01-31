import Link from "next/link";
import { Input } from "./Input";
import { Checkbox } from "./Checkbox";
import { Button } from "./Button";
import { SocialLoginButton } from "./SocialLoginButton";
import { Divider } from "./Divider";

export function Card() {
  return (
    <main className="border border-gray-300 rounded-lg shadow-md p-6 md:p-12 bg-white w-full max-w-[500px] mx-4 md:mx-auto">
      {/* Campo Nome */}
      <Input id="name" name="name" type="text" placeholder="Digite seu nome" label="Nome" />

      {/* Campo Senha */}
      <Input id="password" name="password" type="password" placeholder="Digite sua senha" label="Senha" />

      {/* Div com "Lembrar senha" e "Esqueceu a senha?" */}
      <div className="flex items-center justify-between mt-6">
        <Checkbox id="remember" name="remember" label="Lembrar senha" />
        <Link href="/recuperar-senha" className="text-sm text-blue-500 hover:text-blue-700">
          Esqueceu a senha?
        </Link>
      </div>

      {/* Botão Entrar */}
      <Button type="button" className="mt-6">
        Entrar
      </Button>

      {/* Divider com "Ou" */}
      <Divider />

      {/* Botões do Google e GitHub */}
      <div className="flex gap-2">
        <SocialLoginButton icon="https://www.google.com/favicon.ico" alt="Google">
          Google
        </SocialLoginButton>
        <SocialLoginButton icon="https://github.githubassets.com/favicon.ico" alt="GitHub">
          GitHub
        </SocialLoginButton>
      </div>
    </main>
  );
}