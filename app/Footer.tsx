export function Footer() {
    return (
        <footer className="w-full border-t border-zinc-800/50 bg-black py-6 text-center font-mono text-xs text-zinc-600">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

                <p>
                    © {new Date().getFullYear()} Fabio Coral. Todos os direitos reservados.
                </p>

                <p className="flex items-center gap-2">
                    Status: <span className="text-emerald-400">System.exit(0);</span>
                </p>

            </div>
        </footer>
    );
}