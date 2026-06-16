'use client';

import Image from 'next/image';
import { useState, FormEvent } from 'react';

export function Connection(){
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('idle');

        const form = e.currentTarget;
        const formData = new FormData(form);

        formData.append("access_key", "f9f41339-768e-4de3-89f0-f61a4102130f");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Accept": "application/json"
                },
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                form.reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Erro no envio:", error);
            setStatus('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setStatus('idle'), 5000);
        }
    }

    return (
        <section id="contact" className="relative z-10 max-w-7xl mx-auto px-6 py-32">
            <div className="flex flex-col md:flex-row gap-16 items-start">
                <div className="flex-1 w-full">
                    <div className="flex items-center gap-2 mb-6 font-mono text-sm">
                        <div className="w-2 h-2 bg-cyan-400 animate-pulse"></div>
                        <span className="text-cyan-400">System Status: Online</span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white leading-tight">
                        Entre em <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">
                            Contato
                        </span>
                    </h2>

                    <p className="text-lg text-zinc-400 max-w-md mb-10 leading-relaxed">
                        Vamos construir algo juntos? Se você precisa de ajuda com desenvolvimento de software, tem uma proposta de projeto ou quer discutir soluções técnicas, entre em contato. Será um prazer conversar e entender como posso agregar.
                    </p>

                    <div className="flex gap-4 font-mono text-sm">
                        <a
                            href="https://github.com/FabioCoral"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center justify-center w-24 h-24 border border-zinc-800 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-colors bg-[#12121a] group"
                        >
                            <Image
                                src="/git.png"
                                alt="Logo GitHub"
                                width={32}
                                height={32}
                                className="mb-2 opacity-70 group-hover:opacity-100 transition-opacity object-contain"
                            />
                            Github
                        </a>

                        <a
                            href="https://www.linkedin.com/in/fabio-dellaspora-6092bb345/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center justify-center w-24 h-24 border border-zinc-800 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-colors bg-[#12121a] group"
                        >
                            <Image
                                src="/linkedin.avif"
                                alt="Logo LinkedIn"
                                width={32}
                                height={32}
                                className="mb-2 opacity-70 group-hover:opacity-100 transition-opacity object-contain rounded-sm"
                            />
                            LinkedIn
                        </a>

                        <a
                            href="https://wa.me/5516992947258"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center justify-center w-24 h-24 border border-zinc-800 rounded-lg hover:border-emerald-400 hover:text-emerald-400 transition-colors bg-[#12121a] group"
                        >
                            <Image
                                src="/whats.jpeg"
                                alt="Logo WhatsApp"
                                width={32}
                                height={32}
                                className="mb-2 opacity-70 group-hover:opacity-100 transition-opacity object-contain rounded-full"
                            />
                            WhatsApp
                        </a>
                    </div>
                </div>

                <div className="flex-1 w-full">
                    <div className="bg-[#12121a] border border-zinc-800 rounded-xl overflow-hidden shadow-2xl">
                        <div className="flex justify-between items-center px-4 py-3 border-b border-zinc-800/50 bg-[#0a0a0f]/50">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                            </div>
                            <span className="font-mono text-xs text-zinc-600">contact.sh</span>
                        </div>
                        <div className="p-6 md:p-8">
                            <form onSubmit={handleSubmit} className="space-y-6 flex flex-col">
                                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                                <div>
                                    <label className="block font-mono text-xs text-zinc-500 uppercase tracking-widest mb-2">E-mail</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="Seu e-mail"
                                        className="w-full bg-[#0a0a0f] border border-zinc-800 rounded p-3 font-mono text-sm text-zinc-300 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-zinc-700"
                                    />
                                </div>

                                <div>
                                    <label className="block font-mono text-xs text-zinc-500 uppercase tracking-widest mb-2">Assunto</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        required
                                        placeholder="Entre como o assunto do e-mail"
                                        className="w-full bg-[#0a0a0f] border border-zinc-800 rounded p-3 font-mono text-sm text-zinc-300 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-zinc-700"
                                    />
                                </div>

                                <div>
                                    <label className="block font-mono text-xs text-zinc-500 uppercase tracking-widest mb-2">Mensagem</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={4}
                                        placeholder="Corpo do e-email"
                                        className="w-full bg-[#0a0a0f] border border-zinc-800 rounded p-3 font-mono text-sm text-zinc-300 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-zinc-700 resize-none"
                                    ></textarea>
                                </div>

                                <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-zinc-800/50 mt-4">
                                    <div className="flex items-center gap-2 font-mono text-xs text-zinc-600">
                                        {status === 'idle' && <><span className="text-zinc-500">🔒</span> End-to-end encrypted</>}
                                        {status === 'success' && <><span className="text-emerald-400">✓</span> Transmissão concluída!</>}
                                        {status === 'error' && <><span className="text-rose-400">✗</span> Erro na transmissão.</>}
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full md:w-auto px-8 py-3 font-bold font-mono text-sm rounded transition-all flex items-center justify-center gap-2 ${
                                            isSubmitting
                                                ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                                                : 'bg-fuchsia-400 hover:bg-fuchsia-300 text-[#0a0a0f]'
                                        }`}
                                    >
                                        {isSubmitting ? 'Transmitindo...' : 'Enviar'} {!isSubmitting && <span>▷</span>}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}