"use client"

import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle2,
  Award,
  Package,
  Star,
  Truck,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  X,
  ShoppingCart,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import { useEffect } from "react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)




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
          <div className="flex items-center gap-2">
            <a href="#" className="cursor-pointer" >
              <Image width={224} height={67} src="/logo2.png" alt="" />
            </a>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#produtos" className="text-sm hover:text-primary text-gray-600 transition-colors hover:text-gray-900">
              Produtos
            </a>
            <a href="#aplicacoes" className="text-sm hover:text-primary text-gray-600 transition-colors hover:text-gray-900">
              Aplicações
            </a>
            <a href="#empresa" className="text-sm hover:text-primary text-gray-600 transition-colors hover:text-gray-900">
              Empresa
            </a>
            <a href="#contato" className="text-sm hover:text-primary text-gray-600 transition-colors hover:text-gray-900">
              Contato
            </a>
            <a
              href="https://loja.libraslixas.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-red-600 hover:text-red-700 transition-colors flex items-center gap-1"
            >
              Loja Virtual <ShoppingCart className="h-4 w-4" />
            </a>
          </div>

          <Button
            variant="outline"
            className="hidden border-red-600 cursor-pointer bg-transparent text-red-600 hover:bg-red-600 hover:text-white md:flex"
            onClick={() => window.open('https://wa.me/5562982714849?text=Ol%C3%A1%20tudo%20bom%3F%20Gostaria%20de%20fazer%20um%20or%C3%A7amento ', '_blank')}
          >
            Solicitar Orçamento
          </Button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center text-gray-900 md:hidden"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="border-t border-gray-200 bg-white md:hidden">
            <div className="container mx-auto px-6 py-4">
              <div className="flex flex-col gap-4">
                <a
                  href="#produtos"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-gray-600 hover:text-primary cursor-pointer transition-colors hover:text-gray-900"
                >
                  Produtos
                </a>
                <a
                  href="#aplicacoes"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-gray-600 hover:text-primary cursor-pointer transition-colors hover:text-gray-900"
                >
                  Aplicações
                </a>
                <a
                  href="#empresa"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-gray-600 hover:text-primary cursor-pointer transition-colors hover:text-gray-900"
                >
                  Empresa
                </a>
                <a
                  href="#contato"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-gray-600 hover:text-primary cursor-pointer transition-colors hover:text-gray-900"
                >
                  Contato
                </a>
                <Button
                  variant="outline"
                  className="w-full border-red-600 bg-transparent cursor-pointer text-red-600 hover:bg-red-600 hover:text-white"
                  onClick={() => window.open('https://wa.me/5562982714849?text=Ol%C3%A1%20tudo%20bom%3F%20Gostaria%20de%20fazer%20um%20or%C3%A7amento ', '_blank')}

                >
                  Solicitar Orçamento
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden pt-16 pb-32 md:pt-20 md:pb-40">
        <div className="absolute inset-0 z-0">
          <img
            src="/industrial-sandpaper-abrasive-texture-close-up-met.jpg"
            alt="Textura de lixa industrial"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white" />
        </div>

        <div className="container relative z-10 mx-auto px-6 text-center">
          <h1 className="mb-6 font-serif text-5xl font-light leading-[1.1] tracking-tight text-balance sm:text-6xl md:mb-8 md:text-7xl lg:text-8xl xl:text-9xl">
            Transforme superfícies
            <br />
            <span className="text-red-600">em perfeição</span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-600 text-balance md:mb-12 md:text-xl">
            Soluções abrasivas de alta performance para indústria, marcenaria, marmoraria, cutelaria, vidraçaria, metalurgia, fabrica de panelas, funilaria/pintura e construção civil. Precisão e
            durabilidade em cada grão.
          </p>

          <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row md:mb-20">
            <a href="#produtos">

              <Button size="lg" className="bg-red-600 text-white hover:scale-110 cursor-pointer">
                Conheça Nossos Produtos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 bg-transparent text-gray-900 hover:bg- cursor-pointer hover:text- hover:scale-110"
              onClick={() => window.open('https://wa.me/5562982714849?text=Ol%C3%A1%20tudo%20bom%3F%20Gostaria%20de%20fazer%20um%20or%C3%A7amento ', '_blank')}
            >
              Fale com Especialista
            </Button>
          </div>
        </div>

        <div
          id="linha"
          className="absolute bottom-12 left-1/2 hidden -translate-x-1/2 animate-bounce md:block md:bottom-16"
        >
          <div className="h-12 w-[1px] bg-gradient-to-b from-red-600 to-transparent" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-gray-200 bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-3 flex justify-center">
                <Award className="h-10 w-10 text-red-600" />
              </div>
              <div className="mb-2 font-mono text-4xl font-bold text-red-600 md:text-5xl">40+</div>
              <div className="text-sm text-gray-600">Anos de experiência</div>
            </div>
            <div className="text-center">
              <div className="mb-3 flex justify-center">
                <Package className="h-10 w-10 text-red-600" />
              </div>
              <div className="mb-2 font-mono text-4xl font-bold text-red-600 md:text-5xl">1000+</div>
              <div className="text-sm text-gray-600">Produtos disponíveis</div>
            </div>
            <div className="text-center">
              <div className="mb-3 flex justify-center">
                <Star className="h-10 w-10 text-red-600" />
              </div>
              <div className="mb-2 font-mono text-4xl font-bold text-red-600 md:text-5xl">99.9%</div>
              <div className="text-sm text-gray-600">Satisfação dos clientes</div>
            </div>
            <div className="text-center">
              <div className="mb-3 flex justify-center">
                <Truck className="h-10 w-10 text-red-600" />
              </div>
              <div className="mb-2 font-mono text-4xl font-bold text-red-600 md:text-5xl">24h</div>
              <div className="text-sm text-gray-600">Entrega expressa</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-serif text-5xl font-light tracking-tight text-balance md:text-6xl">
              Linha completa de abrasivos
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 text-balance">
              Do acabamento fino ao desbaste pesado, temos a solução ideal para cada aplicação
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Lixas em Folha",
                slug: "lixas-em-folha",
                description: "Para acabamento manual de madeira, metal e massa corrida",
                image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSTsPGxcz4Oa0PO0Q35-gxFNRuRyeqiLJ5umKeJbf2-DcNjE4cSePeEYc9KBITX",
                grits: "Grãos 36 a 3000",
              },
              {
                title: "Discos Abrasivos",
                slug: "discos-abrasivos",
                description: "Alta performance para lixadeiras orbitais e roto-orbitais",
                image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTTF21cTCcOG2IS3Si_8_HN9oV4oWtC47GM-bxPehGBq02wAtYaf-ndSjtWKFGn",
                grits: "Grãos 16 a 3000",
              },
              {
                title: "Cintas de Lixa ",
                slug: "cintas-de-lixa",
                description: "Resistência superior para lixadeiras de cinta industriais",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_q_ZBldkI9FhK3COaA64KuKIC7NCrUrSIysdLvflrWvaFdkdi5Lef_cBkrSQe",
                grits: "Grãos 36 a 1000",
              },
              {
                title: "Rolos de Lixa",
                slug: "rolos-de-lixa",
                description: "Versatilidade para grandes superfícies e produção contínua",
                image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ5r2IG9TuBvqpT91fNefF_HX9Nlfx6Mu8HXhZhvUekVBY0N07l0q24AWwZLl72",
                grits: "Grãos 16 a 1000",
              },
              {
                title: "Esponjas Abrasivas",
                slug: "esponjas-abrasivas",
                description: "Flexibilidade para superfícies irregulares e cantos",
                image: "https://decortintasbrusque.com.br/image/cache/data/Produtos/ES/Esponja-Abrasiva-Grao-Medio-10-Unidades-COR-NO-DEFINIDA-31F7E600-1-1000x1000.jpg.webp",
                grits: "Fino, Médio, Grosso",
              },
              {
                title: "Roda PG",
                slug: "roda-pg",
                description: "As Rodas PG são ideais para uma ampla variedade de remoção de solda, rebarbação, acabamento e polimento.",
                image: "https://www.janox.com.br/wp-content/uploads/2023/01/Roda-PG.jpg",
                grits: "Grãos 36 a 1000",
              },
              {
                title: "Lixa Taquinho",
                slug: "lixa-taquinho",
                description: "Ideal para acabamento de jeans e tecidos com sistema de velcro",
                image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSR2Mdakel6min6q_wMhkVjwC4nEnuAEyDb7XzoA4rfprH7qkSdxwNK9lu8PZ1F",
                grits: "Diversos grãos",
              },
              {
                title: "Lixa Taco",
                slug: "lixa-taco",
                description: "Especializada para acabamento de granitina em disco e rolo",
                image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ5kQyfLKUlld0AQ5TQATuBXtwU-EFIOxs_yUy40WrZzJkNlOr_diXGNo4Tpl0t",
                grits: "Grãos específicos",
              }, {
                "title": "Máquinas Pneumáticas",
                "slug": "maquinas-pneumaticas",
                "description": "Ferramentas de ar comprimido para trabalhos profissionais e industriais",
                "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSFt4efInMQoTprR4hR_em0HCL-N71nZIetRKklRXbOJF2DwRCHTdgeuKCKLWIS",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="group relative cursor-pointer overflow-hidden border border-gray-200 bg-white transition-all hover:border-red-600 hover:shadow-lg"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 font-mono text-xs text-red-600">{product.grits}</div>
                  <h3 className="mb-3 text-2xl font-light">{product.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600">{product.description}</p>
                  <Link href={`/produtos/${product.slug}`}>
                    <Button variant="link" className="p-0 text-red-600 hover:text-red-700 cursor-pointer">
                      Ver detalhes <ArrowRight className="ml-2 h-4 w-4 " />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Promotion Section */}
      <section className="bg-red-600 py-16 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-red-500 rounded-full blur-3xl opacity-50" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 tracking-tight">
                Toda nossa linha de abrasivos <br />
                <span className="font-bold">agora a um clique de você</span>
              </h2>
              <p className="text-xl text-red-100 mb-8 leading-relaxed">
                Acesse nossa nova loja virtual e compre com praticidade, segurança e a qualidade que você já conhece. Entrega rápida para todo o Brasil.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://loja.libraslixas.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-red-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition-all flex items-center gap-2 group"
                >
                  Ir para a Loja <ShoppingCart className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl skew-y-3 md:skew-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <Package className="text-red-600 h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Catálogo Completo</div>
                    <div className="text-red-100 text-sm">Milhares de produtos online</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <Truck className="text-red-600 h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Entrega Expressa</div>
                    <div className="text-red-100 text-sm">Receba no seu endereço</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <Star className="text-red-600 h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Compra Segura</div>
                    <div className="text-red-100 text-sm">Tecnologia de ponta em pagamentos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section id="aplicacoes" className="border-y border-gray-200 bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-serif text-5xl font-light tracking-tight text-balance md:text-6xl">
              Aplicações industriais
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 text-balance">
              Soluções especializadas para cada segmento
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Indústria",
                items: [
                  "Corte e desbaste de materiais diversos",
                  "Acabamento de peças industriais",
                  "Remoção de rebarbas",
                  "Preparação de superfícies metálicas",
                ],
              },
              {
                title: "Marcenaria",
                items: [
                  "Acabamento de móveis e peças de madeira",
                  "Preparação para verniz e pintura",
                  "Lixamento entre demãos",
                  "Restauração e polimento de madeira",
                ],
              },
              {
                title: "Marmoraria",
                items: [
                  "Corte e desbaste de mármore e granito",
                  "Acabamento e polimento de pedras",
                  "Correção de imperfeições superficiais",
                  "Preparação para assentamento",
                ],
              },
              {
                title: "Cutelaria",
                items: [
                  "Afiamento de lâminas",
                  "Acabamento e polimento de facas e ferramentas",
                  "Remoção de marcas de solda",
                  "Preparação para tratamento térmico",
                ],
              },
              {
                title: "Vidraçaria",
                items: [
                  "Acabamento de bordas de vidro",
                  "Correção de imperfeições",
                  "Polimento de superfícies",
                  "Preparação de peças para montagem",
                ],
              },
              {
                title: "Metalurgia",
                items: [
                  "Desbaste e acabamento de soldas",
                  "Remoção de ferrugem e oxidação",
                  "Polimento de metais",
                  "Preparação de superfícies para pintura",
                ],
              },
              {
                title: "Fábrica de Panelas",
                items: [
                  "Polimento e brilho final de superfícies metálicas",
                  "Remoção de rebarbas",
                  "Acabamento interno e externo de panelas",
                  "Correção de imperfeições de fundição",
                ],
              },
              {
                title: "Funilaria e Pintura",
                items: [
                  "Remoção de tinta e ferrugem",
                  "Lixamento de superfícies automotivas",
                  "Preparação para pintura e retoque",
                  "Acabamento final e nivelamento",
                ],
              },
              {
                title: "Construção Civil",
                items: [
                  "Preparação de paredes e tetos",
                  "Acabamento de massa e reboco",
                  "Lixamento de concreto e gesso",
                  "Preparação de superfícies para pintura",
                ],
              },
            ]
              .map((application, index) => (
                <div key={index} className="border border-gray-200 bg-white p-8">
                  <h3 className="mb-6 text-2xl font-light">{application.title}</h3>
                  <ul className="space-y-3">
                    {application.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section id="empresa" className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-serif text-5xl font-light tracking-tight text-balance md:text-6xl">
                Excelência em cada grão
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-600">
                <p>
                  Desde 1983, a Librás é sinônimo de confiança e excelência na distribuição de abrasivos, máquinas e ferramentas para o mercado profissional.
                  Com foco em qualidade e na melhor relação custo-benefício, unimos tradição e inovação para entregar soluções que impulsionam a produtividade e a performance de nossos clientes.
                </p>
                <p>
                  Atuamos ao lado dos principais fabricantes do setor, garantindo produtos que atendem aos mais altos padrões da indústria nacional.
                  Da oficina artesanal ao grande parque industrial, nossa missão é oferecer as ferramentas ideais para transformar desafios em resultados de precisão.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/historia">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-red-600 bg-transparent cursor-pointer text-red-600 hover:bg-red-600 hover:text-white"
                  >
                    Conheça Nossa História
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden border border-gray-200">
                <img
                  src="/industrial-workshop-craftsman-sanding-wood-profess.jpg"
                  alt="Profissional trabalhando"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-y border-gray-200 bg-gray-50 py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-6 font-serif text-5xl font-light tracking-tight text-balance md:text-6xl">
            Pronto para elevar seu acabamento?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 text-balance">
            Fale com nossos especialistas e descubra a solução abrasiva ideal para seu projeto
          </p>
          <Button size="lg" className="bg-red-600 text-white hover:scale-110 cursor-pointer" onClick={() => window.open('https://wa.me/5562982714849?text=Ol%C3%A1%20tudo%20bom%3F%20Gostaria%20de%20fazer%20um%20or%C3%A7amento ', '_blank')}>
            Solicitar Orçamento
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="border-t border-gray-200 bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Image width={224} height={67} src="/logo2.png" alt="" />
              </div>
              <p className="text-sm text-gray-600">
                Soluções abrasivas de alta performance para profissionais exigentes.
              </p>
              <div className="mt-6 flex gap-3">
                <a
                  href="https://www.facebook.com/p/Libr%C3%A1s-A-Casa-Das-Lixas-100064505036066/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors hover:border-red-600 hover:bg-red-600 hover:text-white"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/libras.casadaslixas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors hover:border-red-600 hover:bg-red-600 hover:text-white"
                >
                  <Instagram className="h-5 w-5" />
                </a>

                <a
                  href="mailto:adm@libraslixas.com.br"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors hover:border-red-600 hover:bg-red-600 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Produtos</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="/produtos/lixas-em-folha" className="hover:text-red-600">
                    Lixas em Folha
                  </a>
                </li>
                <li>
                  <a href="/produtos/discos-abrasivos" className="hover:text-red-600">
                    Discos Abrasivos
                  </a>
                </li>
                <li>
                  <a href="/produtos/cintas-de-lixa" className="hover:text-red-600">
                    Cintas de Lixa
                  </a>
                </li>
                <li>
                  <a href="#produtos" className="hover:text-red-600">
                    Catálogo Completo
                  </a>
                </li>
                <li>
                  <a
                    href="https://loja.libraslixas.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 font-semibold hover:text-red-700"
                  >
                    Loja Online
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="/historia" className="hover:text-red-600">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#produtos" className="hover:text-red-600">
                    Produtos
                  </a>
                </li>
                <li>
                  <a href="#aplicacoes" className="hover:text-red-600">
                    Aplicações
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600" onClick={() => window.open('https://wa.me/5562982714849?text=Ol%C3%A1%20tudo%20bom%3F%20Gostaria%20de%20fazer%20um%20or%C3%A7amento ', '_blank')}>
                    Orçamento
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Contato</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>(62) 3235-7122</li>
                <li>adm@libraslixas.com.br</li>
                <li>Seg-Sex: 8h às 18h</li>
                <li>Sáb: 8h às 12h</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
            <p>&copy; 2025 Librás. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
