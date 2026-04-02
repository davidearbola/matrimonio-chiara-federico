import emailjs from '@emailjs/browser'
import { ref } from 'vue'

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export function useEmailJS() {
  const status = ref('idle') // 'idle' | 'loading' | 'success' | 'error'

  async function sendRsvp(nome, cognome, intolleranze, altreSegnalazioni) {
    status.value = 'loading'
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          nome,
          cognome,
          intolleranze: intolleranze || 'Nessuna',
          altre_segnalazioni: altreSegnalazioni || 'Nessuna'
        },
        PUBLIC_KEY
      )
      status.value = 'success'
    } catch {
      status.value = 'error'
    }
  }

  function reset() {
    status.value = 'idle'
  }

  return { sendRsvp, status, reset }
}
