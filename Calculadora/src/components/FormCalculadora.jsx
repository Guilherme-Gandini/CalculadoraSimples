import { useState } from 'react'

function FormCalculadora() {
  const [firstNumber, setFirstNumber] = useState('')
  const [secondNumber, setSecondNumber] = useState('')
  const [operation, setOperation] = useState('+')
  const [result, setResult] = useState(null)

  function handleSubmit(event) {
    event.preventDefault()

    const firstValue = Number(firstNumber)
    const secondValue = Number(secondNumber)

    if (firstNumber === '' || secondNumber === '') {
      setResult('Preencha os dois números.')
      return
    }

    if (operation === '/' && secondValue === 0) {
      setResult('Não é possível dividir por zero.')
      return
    }

    const calculations = {
      '+': firstValue + secondValue,
      '-': firstValue - secondValue,
      '*': firstValue * secondValue,
      '/': firstValue / secondValue,
    }

    setResult(calculations[operation])
  }

  function handleClear() {
    setFirstNumber('')
    setSecondNumber('')
    setOperation('+')
    setResult(null)
  }

  return (
    <form className="calculator-form" onSubmit={handleSubmit}>
      <div className="form-fields">
        <label htmlFor="first-number">
          Primeiro número
          <input
            id="first-number"
            type="number"
            value={firstNumber}
            onChange={(event) => setFirstNumber(event.target.value)}
          />
        </label>

        <label htmlFor="second-number">
          Segundo número
          <input
            id="second-number"
            type="number"
            value={secondNumber}
            onChange={(event) => setSecondNumber(event.target.value)}
          />
        </label>

        <label htmlFor="operation">
          Operação
          <select
            id="operation"
            value={operation}
            onChange={(event) => setOperation(event.target.value)}
          >
            <option value="+">Adição (+)</option>
            <option value="-">Subtração (-)</option>
            <option value="*">Multiplicação (*)</option>
            <option value="/">Divisão (/)</option>
          </select>
        </label>
      </div>

      <div className="form-actions">
        <button type="submit">Calcular</button>
        <button type="button" className="secondary-button" onClick={handleClear}>
          Limpar
        </button>
      </div>

      <output className="result" aria-live="polite">
        <span>Resultado</span>
        <strong>{result ?? '—'}</strong>
      </output>
    </form>
  )
}

export default FormCalculadora
