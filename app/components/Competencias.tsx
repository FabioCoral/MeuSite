export function Competencias(){
    return(
        <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
            <div className="mb-8">
                    <span className="font-mono text-cyan-400 text-sm font-semibold tracking-wider uppercase">
                        // Competências
                    </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#12121a] border border-zinc-800   rounded-xl p-6 hover:border-zinc-700 transition-colors">
                    <div className="w-8 h-8 rounded bg-amber-500/10 flex items-center justify-center mb-6 border border-amber-500/20">
                        <span className="text-amber-500 text-lg">⚙️</span>
                    </div>
                    <h3 className="text-xl font-bold text-zinc-100 mb-4">Backend & Database</h3>
                    <ul className="space-y-3 font-mono text-xs text-zinc-400">
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> Java Spring Boot</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> Oracle PL/SQL & Relational DBs</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> RESTful API Architecture</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> Maven & Version Control</li>
                    </ul>
                </div>

                <div className="bg-[#12121a] border border-zinc-800  rounded-xl p-6 hover:border-zinc-700 transition-colors">
                    <div className="w-8 h-8 rounded bg-fuchsia-500/10 flex items-center justify-center mb-6 border border-fuchsia-500/20">
                        <span className="text-fuchsia-500 text-lg">⚛️</span>
                    </div>
                    <h3 className="text-xl font-bold text-zinc-100 mb-4">Mobile & Frontend UI</h3>
                    <ul className="space-y-3 font-mono text-xs text-zinc-400">
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> Flutter & Dart Ecosystem</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> Next.js & React Frameworks</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> TypeScript Integration</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> Tailwind CSS Styling</li>
                    </ul>
                </div>

                <div className="bg-[#12121a] border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors flex flex-col justify-between">
                    <div>
                        <div className="w-8 h-8 rounded bg-emerald-500/10 flex items-center justify-center mb-6 border border-emerald-500/20">
                            <span className="text-emerald-500 text-lg">📄</span>
                        </div>
                        <h3 className="text-xl font-bold text-zinc-100 mb-4">Curriculum Vitae</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                            Acesse o meu Curriculum completo em formato PDF para conferir minha trajetória, formação acadêmica e certificações.
                        </p>
                    </div>

                    <a
                        href="/curriculo.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 bg-[#0a0a0f] border border-zinc-800 hover:border-emerald-400 hover:text-emerald-400 text-zinc-400 font-mono text-sm flex justify-center items-center gap-2 rounded transition-all"
                    >
                        Download_CV.pdf <span className="animate-bounce">↓</span>
                    </a>
                </div>

            </div>
        </section>
    )
}