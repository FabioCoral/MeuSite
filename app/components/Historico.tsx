'use client';
import Image from 'next/image';
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Historico() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo('.about-left',
                { x: -50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );

            gsap.fromTo('.timeline-item',
                { x: 50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.3,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const historico = [
        {
            id: "01",
            cargo: "Vendedor de instrumental Cirurgico",
            empresa: "Harte Instrumentos Cirurgicos",
            periodo: "2019 - 2026",
            descricao: "Atuação no atendimento comercial a hospitais e clínicas, com foco na venda de instrumentais cirúrgicos. O trabalho envolve o levantamento das necessidades do ambiente médico para o fornecimento adequado de equipamentos, auxiliando na estruturação do fluxo de procedimentos hospitalares."
        },
        {
            id: "02",
            cargo: "Engenheiro de Software",
            empresa: "Projetos Independentes & Acadêmicos",
            periodo: "2024 - Presente",
            descricao: "Desenvolvimento de projetos full-stack, incluindo aplicativos mobile com Flutter, como ferramentas focadas em monitoramento contínuo de dados. A estruturação do backend feita com Java Spring Boot e banco de dados Oracle PL/SQL, garantindo o armazenamento seguro e a integração funcional dos sistemas."
        },
        {
            id: "03",
            cargo: "Desenvolvedor Voluntário",
            empresa: "Associação dos Amigos e Protetores dos Animais de Ubá (AAPAUBA)",
            periodo: "2026 - Presente",
            descricao: "Construção do site institucional da Associação, utilizando uma arquitetura web estática com foco em design responsivo e acessibilidade. O projeto visa estabelecer a presença digital da ONG, facilitando a divulgação das ações de bem-estar animal e a comunicação direta com a comunidade local."
        }
    ];

    return(
        <section id="about" ref={sectionRef} className="relative z-10 max-w-7xl mx-auto px-6 py-32">
            <div className="mb-16 flex items-center gap-4">
                <h2 className="text-4xl md:text-7xl font-extrabold tracking-tight text-white">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">
                        Histórico
                    </span>
                </h2>
                <span className="font-mono text-cyan-400 text-xs px-2 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded-sm hidden md:inline-block">
                        SYSTEM_ADMINISTRATOR / LEAD_DEVELOPER
                    </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                <div className="about-left lg:col-span-5">
                    <div className="w-full h-[400px] border border-zinc-800 rounded-xl bg-zinc-900/50 relative mb-8 flex items-center justify-center overflow-hidden group">
                        <Image
                            src="/FotoPerfil.jpeg"
                            alt="Foto de Perfil"
                            fill
                            className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                            sizes="(max-width: 768px) 85vw, 360px"
                        />
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400 opacity-50 m-4"></div>
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400 opacity-50 m-4"></div>
                    </div>

                    <h3 className="text-2xl font-bold text-zinc-100 mb-4">System Initialization...</h3>
                    <div className="space-y-4 text-zinc-400 text-sm leading-relaxed">
                        <p>
                            Sou um engenheiro de software focado na criação de sistemas integrados e eficientes.
                            Com uma trajetória que engloba tanto o atendimento consultivo a clientes quanto o desenvolvimento de software,
                            trago uma visão sistêmica para a tecnologia, compreendendo o código como uma ferramenta para resolver problemas reais.
                            Atuo no desenvolvimento de software com conhecimento em Flutter e Dart para a criação de aplicações multiplataforma.
                            Minha prática engloba também o desenvolvimento web com React e a construção de arquiteturas backend com Spring Boot.
                            Meu objetivo é entregar produtos digitais confiáveis, de fácil manutenção e com alto impacto.
                        </p>
                    </div>
                </div>

                <div className="lg:col-span-7 lg:pl-12">
                    <div className="mb-8 font-mono text-xs text-zinc-500 uppercase tracking-widest">
                        01. Operational History
                    </div>

                    <div className="relative border-l border-zinc-800/80 ml-3 md:ml-0 space-y-12 pb-8">
                        {historico.map((item) => (
                            <div key={item.id} className="timeline-item relative pl-8 md:pl-12 group">
                                <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-[#0a0a0f] bg-zinc-700 group-hover:bg-cyan-400 group-hover:ring-2 group-hover:ring-cyan-400/20 transition-all"></span>

                                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
                                    <span className="font-mono text-xs text-zinc-500">{item.periodo}</span>
                                    <h4 className="text-xl font-bold text-zinc-100">{item.cargo}</h4>
                                </div>
                                <div className="text-fuchsia-400 font-mono text-sm mb-4">
                                    {item.empresa}
                                </div>
                                <p className="text-zinc-400 text-sm leading-relaxed max-w-lg">
                                    {item.descricao}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}