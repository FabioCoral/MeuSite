import Link from 'next/link';

export function Navbar() {
    return (
        <nav className="w-full border-b border-zinc-800/50 bg-[#0a0a0f]/80 backdrop-blur-md fixed top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between font-mono text-sm">
                <Link href="/" className="text-white font-bold text-lg flex items-center gap-2 tracking-tighter">
                    <span className="text-fuchsia-400">{'<'}</span>
                    FabioCoral
                    <span className="text-fuchsia-400">{'/>'}</span>
                </Link>
                <div className="hidden md:flex gap-8 text-zinc-400">
                    <Link href="#work" className="hover:text-cyan-400 transition-colors border-b-2 border-transparent hover:border-cyan-400 pb-1">
                        Projetos
                    </Link>
                    <Link href="#about" className="hover:text-cyan-400 transition-colors border-b-2 border-transparent hover:border-cyan-400 pb-1">
                        Historico
                    </Link>
                    <Link href="#contact" className="hover:text-cyan-400 transition-colors border-b-2 border-transparent hover:border-cyan-400 pb-1">
                        Contato
                    </Link>
                </div>
                <a className="px-4 py-2 border border-zinc-700 text-zinc-300 hover:border-fuchsia-400 hover:text-fuchsia-400 transition-all rounded-sm bg-zinc-900/50"
                   href="/curriculo.pdf"
                   target="_blank"
                   rel="noopener noreferrer"
                >
                    Resume
                </a>

            </div>
        </nav>
    );
}