"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useEffect } from "react"
import { ArrowLeft, CheckCircle2, Ruler, Layers } from 'lucide-react'

interface Product {
    title: string
    description: string
    image: string
    fullDescription: string
    features: string[]
    applications: string[]
    specifications: { label: string; value: string }[]
    varieties?: { name: string; description: string; image: string }[]
}

export default function ProductClientPage({ product, slug }: { product: Product, slug: string }) {
    useEffect(() => {
        if (typeof window !== "undefined") {
            // Inject JSON-LD Product schema for Google Rich Results
            try {
                const ld = {
                    "@context": "https://schema.org",
                    "@type": "Product",
                    name: product.title,
                    description: product.fullDescription || product.description,
                    image: [product.image],
                    offers: {
                        "@type": "Offer",
                        url: window.location.href,
                    }
                }

                const script = document.createElement('script')
                script.type = 'application/ld+json'
                script.text = JSON.stringify(ld)
                document.head.appendChild(script)
            } catch (e) {
                // ignore
            }

            let ultimaPosicao = 0;
            const handleScroll = () => {
                const nav: any = document.querySelector("#nav");
                if (!nav) return;

                let atualPosicao = window.scrollY;

                if (atualPosicao > ultimaPosicao && atualPosicao > 0) {
                    nav.style.transform = "translateY(-100%)";
                } else {
                    nav.style.transform = "translateY(0%)";
                }
                if (atualPosicao < 80) {
                    nav.style.transform = "translateY(0%)";
                    nav.style.transition = "0.5s";
                }
                ultimaPosicao = atualPosicao;
            };

            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }
    }, [product]);

    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* Header */}
            <header id="nav" className="sticky top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
                <nav className="container mx-auto flex items-center justify-between px-6 py-6">
                    <Link href="/" className="flex cursor-pointer items-center gap-2">
                        <Image width={224} height={67} src="/logo2.png" alt="Librás Logo" />
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
                        <Button
                            variant="outline"
                            className="border-red-600 bg-transparent text-red-600 cursor-pointer hover:bg-red-600 hover:text-white"
                            onClick={() => window.open('https://wa.me/5562982714849?text=Ol%C3%A1%20tudo%20bom%3F%20Gostaria%20de%20fazer%20um%20or%C3%A7amento ', '_blank')}
                        >
                            Solicitar Orçamento
                        </Button>
                    </div>
                </nav>
            </header>

            {/* Back Button */}
            <div className="container mx-auto px-6 pt-16">
                <Link href="/#produtos">
                    <Button variant="ghost" className="mb-8 text-gray-600 cursor-pointer">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Voltar para produtos
                    </Button>
                </Link>
            </div>

            {/* Product Hero */}
            <section className="container mx-auto px-6 pb-16">
                <div className="grid gap-12 lg:grid-cols-2">
                    <div className="aspect-square overflow-hidden border border-gray-200">
                        <img src={product.image || "/placeholder.svg"} alt={product.title} className="h-full w-full object-cover" />
                    </div>

                    <div className="flex flex-col justify-center">
                        <h1 className="mb-4 font-serif text-5xl font-light tracking-tight md:text-6xl">{product.title}</h1>
                        <p className="mb-8 text-xl leading-relaxed text-gray-600">{product.description}</p>
                        <p className="mb-8 leading-relaxed text-gray-600">{product.fullDescription}</p>

                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Button size="lg" className="bg-red-600 text-white hover:scale-110 cursor-pointer"
                                onClick={() => window.open('https://wa.me/5562982714849?text=Ol%C3%A1%20tudo%20bom%3F%20Gostaria%20de%20fazer%20um%20or%C3%A7amento ', '_blank')}>
                                Solicitar Orçamento
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="border-y border-gray-200 bg-gray-50 py-16">
                <div className="container mx-auto px-6">
                    <h2 className="mb-8 text-center font-serif text-3xl font-light">Características</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {product.features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                                <span className="text-gray-600">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Applications */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid gap-12 lg:grid-cols-2">
                        <div>
                            <div className="mb-6 flex items-center gap-3">
                                <Layers className="h-8 w-8 text-red-600" />
                                <h2 className="font-serif text-3xl font-light">Aplicações</h2>
                            </div>
                            <ul className="space-y-3">
                                {product.applications.map((application, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                                        <span className="text-gray-600">{application}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <div className="mb-6 flex items-center gap-3">
                                <Ruler className="h-8 w-8 text-red-600" />
                                <h2 className="font-serif text-3xl font-light">Especificações Técnicas</h2>
                            </div>
                            <div className="space-y-4">
                                {product.specifications.map((spec, index) => (
                                    <div key={index} className="border-b border-gray-200 pb-3">
                                        <div className="mb-1 text-sm font-semibold text-gray-900">{spec.label}</div>
                                        <div className="text-gray-600">{spec.value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Varieties */}
            {product.varieties && product.varieties.length > 0 && (
                <section className="border-y border-gray-200 bg-gray-50 py-16">
                    <div className="container mx-auto px-6">
                        <h2 className="mb-4 text-center font-serif text-4xl font-light tracking-tight">Variedades Disponíveis</h2>
                        <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600">
                            Conheça nossa linha completa, cada uma desenvolvida para aplicações específicas
                        </p>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {product.varieties.map((variety, index) => (
                                <div
                                    key={index}
                                    className="group overflow-hidden border border-gray-200 bg-white transition-all hover:shadow-lg"
                                >
                                    <div className="aspect-square overflow-hidden">
                                        <img
                                            src={variety.image || "/placeholder.svg"}
                                            alt={variety.name}
                                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="mb-3 font-serif text-xl font-light">{variety.name}</h3>
                                        <p className="text-sm leading-relaxed text-gray-600">{variety.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
            {/* CTA */}
            <section className="border-y border-gray-200 bg-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="mb-4 font-serif text-4xl font-light tracking-tight">Interessado neste produto?</h2>
                    <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
                        Fale com nossos especialistas e receba um orçamento personalizado
                    </p>
                    <Button size="lg" className="bg-red-600 text-white hover:scale-110 cursor-pointer " onClick={() => window.open('https://wa.me/5562982714849?text=Ol%C3%A1%20tudo%20bom%3F%20Gostaria%20de%20fazer%20um%20or%C3%A7amento ', '_blank')}>
                        Falar com Especialista
                    </Button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-gray-200 bg-gray-50 py-12">
                <div className="container mx-auto px-6 text-center text-sm text-gray-600">
                    <p>&copy; 2025 Librás. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    )
}
