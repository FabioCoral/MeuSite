'use client';

import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {Competencias} from '@/app/components/Competencias';
import {Historico} from '@/app/components/Historico';
import {Projetos} from '@/app/components/Projetos';
import {Connection} from '@/app/components/Connection';

gsap.registerPlugin(ScrollTrigger);


export default function Home() {

    const outerSquareRef = useRef<HTMLDivElement>(null);
    const innerSquareRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            if (!outerSquareRef.current || !innerSquareRef.current) return;

            gsap.to(outerSquareRef.current, {
                rotation: 360,
                duration: 20,
                repeat: -1,
                ease: 'none',
            });

            gsap.to(innerSquareRef.current, {
                rotation: -360,
                duration: 20,
                repeat: -1,
                ease: 'none',
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <main className="min-h-screen bg-[#0a0a0f] text-zinc-300 relative overflow-hidden font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 w-full">
                    <div className="bg-[#12121a] rounded-lg p-4 mb-8 w-100 shadow-2xl">
                        <div className="flex gap-2 mb-4">
                            <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                        </div>
                        <div className="font-mono text-sm leading-relaxed">
                            <p className="text-cyan-400">user@fabiocoral:~$ <span className="text-zinc-300">./init_stack.sh</span></p>
                            <p className="text-zinc-500">&gt; Loading Flutter engine...</p>
                            <p className="text-zinc-500">&gt; Connecting to Oracle PL/SQL...</p>
                            <p className="text-zinc-500">&gt; Booting Java Spring Boot...</p>
                            <p className="text-emerald-400 mt-2">{"// System ready."}</p>
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white">
                        Engenheiro de <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">
                            Software
                        </span>
                    </h1>

                    <p className="text-lg text-zinc-400 max-w-lg mb-10 leading-relaxed">
                        Construção de produtos digitais integrados, cobrindo desde o banco de dados até a interface final.
                        Minha atuação conecta o desenvolvimento de backend corporativo a aplicações responsivas, garantindo sistemas funcionais e de fácil manutenção.

                    </p>

                </div>

                <div ref={containerRef} className="flex-1 hidden md:flex justify-center items-center relative h-[500px]">
                    <div
                        ref={outerSquareRef}
                        className="absolute w-80 h-80 border-2 border-dashed border-zinc-800 rounded-3xl flex items-center justify-center bg-gradient-to-b from-zinc-900/50 to-transparent shadow-[0_0_60px_-15px_rgba(168,85,247,0.15)]"
                    >
                    </div>

                    <div
                        ref={innerSquareRef}
                        className="absolute w-48 h-48 border-2 border-fuchsia-400 rounded-2xl bg-[#12121a] shadow-[0_0_30px_5px_rgba(232,121,249,0.2)]"
                    >
                    </div>

                    <div className="absolute flex flex-col items-center justify-center z-10 pointer-events-none">
                        <span className="font-mono text-fuchsia-400 text-3xl font-black mb-1 tracking-tighter">{'<F/>'}</span>
                        <span className="font-mono text-zinc-500 text-[15px] tracking-widest uppercase">Fábio Coral</span>
                    </div>

                </div>
            </div>

            <Competencias />

            <Historico />

            <Projetos />

            <Connection />

        </main>
    );
}