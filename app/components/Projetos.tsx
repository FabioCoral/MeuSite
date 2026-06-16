'use client';

import { useRef, useLayoutEffect, useState, MouseEvent } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export function Projetos(){
    const sectionRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [activeGameUrl, setActiveGameUrl] = useState<string | null>(null);

    useLayoutEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo('.project-card',
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const projetos = [
        {
            id: "01",
            titulo: "Monitor de Vibração",
            descricao: "Aplicativo mobile arquitetado para monitorar níveis de vibração em maquinário e registrar eventos de status crítico em tempo real.",
            tecnologias: ["Flutter", "Dart", "FireBase"],
            repo:  "https://github.com/FabioCoral/App_Vibracao",
            imagem: "/appvibracao.png",
        },
        {
            id: "02",
            titulo: "API MonitorVibração",
            descricao: "API feita em Node.js para monitorar o sensor de vibração e conectar com Aplicativo do sensor",
            tecnologias: ["Node.js"],
            repo:  "https://github.com/FabioCoral/API-App-Vibra-o",
            imagem: "/api.png",
        },

        {
            id: "03",
            titulo: "Meu Site",
            descricao: "Portfólio interativo. Desenvolvido com arquitetura modular e integração de formulário.",
            tecnologias: ["Next.js", "React", "TypeScript", "Tailwind", "GSAP", "Web3Form API"],
            repo:  "https://github.com/FabioCoral/MeuSite.git",
            imagem: "/meusite.png",
        },

        {
            id: "04",
            titulo: "Xadrez terminal",
            descricao: "Jogo de xadrez feito em java jogável pelo terminal utilizando conceitos de POO",
            tecnologias: ["Java"],
            repo:  "https://github.com/FabioCoral/chess-system-java",
            imagem: "/newchess.png",
        },
        {
            id: "05",
            titulo: "Bird Flap",
            descricao: "Jogo feito em javaScript baseado no antigo jogo FlappyBird",
            tecnologias: ["JavaScript", "HTML5", "CSS3"],
            repo:  "https://github.com/FabioCoral/FlappyBird",
            imagem: "/birdflap.png",
        },

    ];

    const scrollEsquerda = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -380, behavior: 'smooth' });
        }
    };

    const scrollDireita = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 380, behavior: 'smooth' });
        }
    };

    const handleMouseDown = (e: MouseEvent) => {
        if (!carouselRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - carouselRef.current.offsetLeft);
        setScrollLeft(carouselRef.current.scrollLeft);
    };

    const handleMouseLeave = () => setIsDragging(false);
    const handleMouseUp = () => setIsDragging(false);

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging || !carouselRef.current) return;
        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 1.5;
        carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <>
            <section id="work" ref={sectionRef} className="relative z-10 max-w-7xl mx-auto px-6 py-32">

                <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-white">
                           <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">
                               Projetos
                           </span>
                        </h2>
                        <p className="text-zinc-400 max-w-2xl text-lg">
                            Deslize para explorar uma seleção de soluções técnicas, abrangendo desde arquiteturas de backend até interfaces modernas.
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={scrollEsquerda}
                            className="w-12 h-12 border border-zinc-800 rounded flex items-center justify-center text-zinc-500 hover:text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all font-mono"
                        >
                            {'<-'}
                        </button>
                        <button
                            onClick={scrollDireita}
                            className="w-12 h-12 border border-zinc-800 rounded flex items-center justify-center text-zinc-500 hover:text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all font-mono"
                        >
                            {'->'}
                        </button>
                    </div>
                </div>

                <div
                    ref={carouselRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    className={`flex overflow-x-auto gap-6 pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${isDragging ? 'cursor-grabbing snap-none select-none' : 'cursor-grab snap-x snap-mandatory'}`}
                >
                    {projetos.map((project) => (
                        <div key={project.id} className="project-card w-[85vw] sm:w-[320px] lg:w-[360px] flex-shrink-0 snap-start bg-[#12121a] border border-zinc-800 hover:border-zinc-600 transition-colors rounded-xl p-6 flex flex-col justify-between group">

                            <div>
                                <div className="relative w-full h-48 bg-zinc-900 rounded-lg mb-6 flex items-center justify-center border border-zinc-800/50 group-hover:border-fuchsia-400/30 transition-colors overflow-hidden">
                                    {project.imagem ? (
                                        <Image
                                            src={project.imagem}
                                            alt={`Imagem do projeto ${project.titulo}`}
                                            fill
                                            className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                                            sizes="(max-width: 768px) 85vw, 360px"
                                        />
                                    ) : (
                                        <span className="font-mono text-zinc-700 text-xs z-10">{"// Image_Placeholder"}</span>
                                    )}
                                </div>

                                <h3 className="text-2xl font-bold text-zinc-100 mb-3">{project.titulo}</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed mb-6 pointer-events-none">
                                    {project.descricao}
                                </p>
                            </div>

                            <div>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tecnologias.map((techItem) => (
                                        <span key={techItem} className="px-3 py-1 bg-[#0a0a0f] border border-zinc-800 text-cyan-400 font-mono text-xs rounded-sm">
                                            <span className="text-cyan-600 mr-1">•</span>{techItem}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center pt-4 border-t border-zinc-800/50 font-mono text-xs">
                                    <a href={project.repo} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
                                        {'</>'} Repositório
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}