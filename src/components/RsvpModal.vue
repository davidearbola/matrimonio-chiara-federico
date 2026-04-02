<script setup>
import { ref, watch, nextTick } from 'vue'
import { useEmailJS } from '../composables/useEmailJS.js'

const props = defineProps({
  modelValue: { type: Boolean, required: true }
})

const emit = defineEmits(['update:modelValue'])

const { sendRsvp, status, reset } = useEmailJS()

const nome = ref('')
const cognome = ref('')
const intolleranze = ref('')
const altreSegnalazioni = ref('')
const firstFocusable = ref(null)

function close() {
  emit('update:modelValue', false)
}

async function handleSubmit() {
  if (status.value === 'loading') return
  await sendRsvp(nome.value, cognome.value, intolleranze.value, altreSegnalazioni.value)
}

function onBackdropClick(e) {
  if (e.target === e.currentTarget) close()
}

function onKeydown(e) {
  if (e.key === 'Escape') close()
}

watch(() => props.modelValue, async (val) => {
  if (val) {
    await nextTick()
    firstFocusable.value?.focus()
  } else {
    if (status.value === 'success') {
      nome.value = ''
      cognome.value = ''
      intolleranze.value = ''
      altreSegnalazioni.value = ''
      reset()
    }
  }
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="modelValue"
        class="modal-backdrop"
        role="dialog"
        aria-modal="true"
        aria-label="Conferma presenza"
        @click="onBackdropClick"
        @keydown="onKeydown"
      >
        <div class="modal-card">
          <button class="modal-close" aria-label="Chiudi" @click="close">&#x2715;</button>

          <!-- Success state -->
          <div v-if="status === 'success'" class="modal-success">
            <p class="modal-success__icon" aria-hidden="true">&#10084;</p>
            <p class="modal-success__text">Grazie! Ci vediamo il 4 settembre!</p>
            <button class="btn-primary" @click="close">Chiudi</button>
          </div>

          <!-- Form state -->
          <div v-else>
            <h2 class="modal-title">Ci sarai?</h2>
            <p class="modal-subtitle">Conferma la tua presenza entro il 4 giugno!</p>

            <form @submit.prevent="handleSubmit" novalidate>
              <div class="modal-field">
                <label class="modal-label" for="rsvp-nome">Nome</label>
                <input
                  id="rsvp-nome"
                  ref="firstFocusable"
                  v-model="nome"
                  type="text"
                  class="modal-input"
                  autocomplete="given-name"
                  required
                />
              </div>

              <div class="modal-field">
                <label class="modal-label" for="rsvp-cognome">Cognome</label>
                <input
                  id="rsvp-cognome"
                  v-model="cognome"
                  type="text"
                  class="modal-input"
                  autocomplete="family-name"
                  required
                />
              </div>

              <div class="modal-field">
                <label class="modal-label" for="rsvp-intolleranze">Intolleranze / allergie</label>
                <textarea
                  id="rsvp-intolleranze"
                  v-model="intolleranze"
                  class="modal-input modal-textarea"
                  rows="2"
                ></textarea>
              </div>

              <div class="modal-field">
                <label class="modal-label" for="rsvp-segnalazioni">Altre segnalazioni</label>
                <textarea
                  id="rsvp-segnalazioni"
                  v-model="altreSegnalazioni"
                  class="modal-input modal-textarea"
                  rows="2"
                ></textarea>
              </div>

              <p v-if="status === 'error'" class="modal-error" role="alert">
                Si è verificato un errore. Riprova o contattaci direttamente.
              </p>

              <button
                type="submit"
                class="btn-primary modal-submit"
                :disabled="status === 'loading' || !nome.trim() || !cognome.trim()"
              >
                <span v-if="status === 'loading'">Invio in corso…</span>
                <span v-else>Conferma</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(30, 50, 30, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 16px;
}

.modal-card {
  background-color: var(--color-bg);
  padding: 44px 40px 40px;
  max-width: 480px;
  width: 100%;
  position: relative;
  border: 1px solid var(--color-border);
  max-height: 90vh;
  overflow-y: auto;
}

.modal-close {
  position: absolute;
  top: 14px;
  right: 16px;
  background: none;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
  color: var(--color-green-light);
  line-height: 1;
  padding: 4px 6px;
}

.modal-close:hover {
  color: var(--color-green);
}

.modal-title {
  font-family: var(--font-script);
  font-size: 2.6rem;
  color: var(--color-green);
  font-weight: 400;
  margin: 0 0 6px;
  line-height: 1.1;
}

.modal-subtitle {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  font-style: italic;
  color: var(--color-green-light);
  margin: 0 0 28px;
  letter-spacing: 0.04em;
  line-height: 1.5;
}

.modal-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 18px;
}

.modal-label {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--color-green);
  letter-spacing: 0.04em;
}

.modal-input {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--color-green);
  background-color: transparent;
  border: 1px solid var(--color-border);
  padding: 10px 14px;
  outline: none;
  transition: border-color 0.2s;
  width: 100%;
  resize: none;
}

.modal-input:focus {
  border-color: var(--color-green);
}

.modal-input::placeholder {
  color: var(--color-border);
}

.modal-textarea {
  font-size: 0.85rem;
}

.modal-error {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  color: #8B3A2E;
  margin: 0 0 16px;
  font-style: italic;
}

.modal-submit {
  width: 100%;
  margin-top: 8px;
}

.modal-submit:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.modal-success {
  text-align: center;
  padding: 20px 0;
}

.modal-success__icon {
  font-size: 2.5rem;
  margin: 0 0 12px;
  color: var(--color-green);
}

.modal-success__text {
  font-family: var(--font-script);
  font-size: 2.2rem;
  color: var(--color-green);
  margin: 0 0 28px;
  font-weight: 400;
  line-height: 1.2;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

@media (max-width: 480px) {
  .modal-card {
    padding: 36px 24px 32px;
  }
}
</style>
