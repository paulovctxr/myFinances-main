import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './output.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

const root = createRoot(rootElement)

import('./App.tsx')
  .then(({ default: App }) => {
    root.render(
      <StrictMode>
        <App />
      </StrictMode>,
    )
  })
  .catch((error: unknown) => {
    const message = error instanceof Error ? error.message : 'Erro desconhecido ao iniciar a aplicação'

    root.render(
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', backgroundColor: '#000000', color: '#f9fafb', fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' }}>
        <div style={{ maxWidth: '680px', width: '100%', backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '20px' }}>
          <h1 style={{ margin: 0, fontSize: '20px' }}>Falha ao iniciar o app</h1>
          <p style={{ marginTop: '12px', marginBottom: 0 }}>
            Verifique o arquivo .env na raiz com VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY.
          </p>
          <p style={{ marginTop: '10px', marginBottom: 0, color: '#b91c1c' }}>{message}</p>
        </div>
      </div>,
    )
  })
