function App() {
  const stages = [
    {
      icon: '🔍',
      title: 'Etapa 1 — Lint',
      desc: 'ESLint revisa el código buscando errores de estilo y bugs comunes. Si hay errores, el pipeline se detiene.',
    },
    {
      icon: '🔨',
      title: 'Etapa 2 — Build',
      desc: 'Vite compila la aplicación y genera los archivos listos para producción en la carpeta dist/.',
    },
    {
      icon: '🚀',
      title: 'Etapa 3 — Deploy',
      desc: 'Si el build fue exitoso y el push fue a main, Vercel publica automáticamente la nueva versión.',
    },
  ]

  return (
    <div className="container">
      <header>
        <span className="badge">Proyecto Universitario</span>
        <h1>Pipeline CI/CD 2</h1>
        <p>
          Este proyecto demuestra un pipeline de <strong>Integración y Entrega Continua</strong>{' '}
          usando <strong>GitHub Actions</strong> y <strong>Vercel</strong>. Cada push al
          repositorio dispara automáticamente lint, build y deploy.
        </p>
      </header>

      <div className="stages">
        {stages.map((s) => (
          <div className="stage-card" key={s.title}>
            <span className="icon">{s.icon}</span>
            <div>
              <h2>{s.title}</h2>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flow">
        <h3>Flujo del pipeline</h3>
        <div className="flow-steps">
          <div className="flow-step">
            <span className="dot dot-blue" />
            Push a cualquier rama → GitHub Actions corre Lint + Build (CI)
          </div>
          <div className="flow-step">
            <span className="dot dot-yellow" />
            Push a main → Lint + Build + Deploy a Vercel (CD)
          </div>
          <div className="flow-step">
            <span className="dot dot-green" />
            Deploy exitoso → app disponible en la URL de producción de Vercel
          </div>
        </div>
      </div>

      <footer>
        Desplegado automáticamente con GitHub Actions + Vercel
      </footer>
    </div>
  )
}

export default App
