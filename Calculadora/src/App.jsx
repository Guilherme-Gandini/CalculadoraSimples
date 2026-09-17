import './App.css'
import FormCalculadora from './components/FormCalculadora'

function App() {
  return (
    <main className="app-shell">
      <section className="calculator-card" aria-labelledby="calculator-title">
        <div className="calculator-header">
          <p className="eyebrow">Operações básicas</p>
          <h1 id="calculator-title">Calculadora simples</h1>
          <p className="subtitle">Informe os valores e escolha uma operação.</p>
        </div>
        <FormCalculadora />
      </section>
    </main>
  )
}

export default App
