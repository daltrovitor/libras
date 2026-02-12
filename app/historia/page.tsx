"use client"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Award, Users, Factory, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect } from "react"

export default function HistoriaPage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let ultimaPosicao = 0;
      window.addEventListener("scroll", () => {
        const nav: any = document.querySelector("#nav");
        let atualPosicao = window.scrollY;

        if (atualPosicao > ultimaPosicao && atualPosicao > 0) {
          // nav.classList.remove( "" );
          nav.style.transform = "translateY(-100%)";
        } else {
          // nav.classList.add( "" );
          nav.style.transform = "translateY(0%)";
        }
        if (atualPosicao < 80) {
          // nav.classList.remove( "" );
          nav.style.transform = "translateY(0%)";
          nav.style.transition = "0.5s";
        }
        ultimaPosicao = atualPosicao;
      });
    }
  }, []);
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header id="nav" className="sticky top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
        <nav className="container mx-auto flex items-center justify-between px-6 py-6">
          <Link href="#" className="flex items-center cursor-pointer gap-2">
            <Image width={224} height={67} src="/logo2.png" alt="" />
          </Link>

          <div className="flex items-center gap-4">
            <a
              href="https://loja.libraslixas.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-red-600 hover:text-red-700 transition-colors hidden md:block"
            >
              Loja Virtual
            </a>
            <Link href="/">
              <Button
                variant="outline"
                className="border-red-600 bg-transparent cursor-pointer text-red-600 hover:bg-red-600 hover:text-white"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar ao Início
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-8">
        <div className="absolute inset-0 z-0">
          <img
            src="/industrial-workshop-craftsman-sanding-wood-profess.jpg"
            alt="História Librás"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white" />
        </div>

        <div className="container relative z-10 mx-auto px-6 text-center">
          <h1 className="mb-6 font-serif text-6xl font-light leading-[1.1] tracking-tight text-balance md:text-8xl">
            Nossa <span className="text-red-600">História</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 text-balance md:text-xl">
            Mais de 40 anos transformando superfícies e construindo relações de confiança
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl space-y-16">
            {/* 1983 */}
            <div className="grid gap-8 md:grid-cols-[200px_1fr]">
              <div className="text-right">
                <div className="font-mono text-5xl font-bold text-red-600">1983</div>
                <div className="mt-2 text-sm text-gray-600">O Início</div>
              </div>
              <div className="border-l-2 border-red-600 pl-8">
                <h3 className="mb-4 text-2xl font-light">Fundação da Librás</h3>
                <p className="leading-relaxed text-gray-600">
                  A Librás nasce com o propósito de distribuir abrasivos, máquinas e ferramentas de alta qualidade para o mercado profissional brasileiro. Desde o início, firmamos o compromisso com a excelência e o melhor custo-benefício.
                </p>
              </div>
            </div>

            {/* 1995 */}
            <div className="grid gap-8 md:grid-cols-[200px_1fr]">
              <div className="text-right">
                <div className="font-mono text-5xl font-bold text-red-600">1995</div>
                <div className="mt-2 text-sm text-gray-600">Estabilidade</div>
              </div>
              <div className="border-l-2 border-red-600 pl-8">
                <h3 className="mb-4 text-2xl font-light">Consolidação no Mercado</h3>
                <p className="leading-relaxed text-gray-600">
                  Com a confiança de clientes e parceiros, ampliamos nossa presença no setor e fortalecemos nosso portfólio de produtos, tornando-nos referência em soluções abrasivas.

                </p>
              </div>
            </div>

            {/* 2005 */}
            <div className="grid gap-8 md:grid-cols-[200px_1fr]">
              <div className="text-right">
                <div className="font-mono text-5xl font-bold text-red-600">2005</div>
                <div className="mt-2 text-sm text-gray-600">Aliança</div>
              </div>
              <div className="border-l-2 border-red-600 pl-8">
                <h3 className="mb-4 text-2xl font-light">Parcerias Internacionais
                </h3>
                <p className="leading-relaxed text-gray-600">
                  Expandimos nossos horizontes e firmamos parcerias com grandes fabricantes mundiais, trazendo ao Brasil o que há de mais avançado em tecnologia e performance.


                </p>
              </div>
            </div>

            {/* 2015 */}
            <div className="grid gap-8 md:grid-cols-[200px_1fr]">
              <div className="text-right">
                <div className="font-mono text-5xl font-bold text-red-600">2015</div>
                <div className="mt-2 text-sm text-gray-600">Inovação</div>
              </div>
              <div className="border-l-2 border-red-600 pl-8">
                <h3 className="mb-4 text-2xl font-light">Centro de Distribuição</h3>
                <p className="leading-relaxed text-gray-600">
                  Inauguramos nosso moderno centro de distribuição, garantindo entregas mais rápidas e eficientes em todo o território nacional, com tecnologia de ponta em gestão e logística.
                </p>
              </div>
            </div>


            {/* 2025 */}
            <div className="grid gap-8 md:grid-cols-[200px_1fr]">
              <div className="text-right">
                <div className="font-mono text-5xl font-bold text-red-600">2025</div>
                <div className="mt-2 text-sm text-gray-600">Presente</div>
              </div>
              <div className="border-l-2 border-red-600 pl-8">
                <h3 className="mb-4 text-2xl font-light">Liderança Nacional</h3>
                <p className="leading-relaxed text-gray-600">
                  Hoje, somos referência nacional em soluções abrasivas de alta performance. Continuamos investindo em tecnologia, qualidade e atendimento para atender desde o pequeno marceneiro até os grandes complexos industriais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="border-y border-gray-200 bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-serif text-5xl font-light tracking-tight text-balance md:text-6xl">
              Nossos Valores
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 text-balance">
              Os princípios que guiam cada decisão e ação da Librás
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="border border-gray-200 bg-white p-8 text-center">
              <div className="mb-4 flex justify-center">
                <Award className="h-12 w-12 text-red-600" />
              </div>
              <h3 className="mb-3 text-xl font-light">Qualidade</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Compromisso inabalável com produtos e serviços de excelência
              </p>
            </div>

            <div className="border border-gray-200 bg-white p-8 text-center">
              <div className="mb-4 flex justify-center">
                <Users className="h-12 w-12 text-red-600" />
              </div>
              <h3 className="mb-3 text-xl font-light">Relacionamento</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Construímos parcerias duradouras baseadas em confiança
              </p>
            </div>

            <div className="border border-gray-200 bg-white p-8 text-center">
              <div className="mb-4 flex justify-center">
                <Factory className="h-12 w-12 text-red-600" />
              </div>
              <h3 className="mb-3 text-xl font-light">Expertise</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Conhecimento técnico profundo em soluções abrasivas
              </p>
            </div>

            <div className="border border-gray-200 bg-white p-8 text-center">
              <div className="mb-4 flex justify-center">
                <TrendingUp className="h-12 w-12 text-red-600" />
              </div>
              <h3 className="mb-3 text-xl font-light">Inovação</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Evolução constante para atender melhor nossos clientes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-6 font-serif text-5xl font-light tracking-tight text-balance md:text-6xl">
            Faça parte da nossa história
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 text-balance">
            Junte-se aos milhares de profissionais que confiam na Librás para seus projetos
          </p>
          <Link href="/#produtos">
            <Button size="lg" className="bg-red-600 cursor-pointer text-white hover:scale-110">
              Conheça Nossos Produtos
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-12">
        <div className="container mx-auto px-6 text-center text-sm text-gray-600">
          <p>&copy; 2025 Librás. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
