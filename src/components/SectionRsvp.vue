<script setup>
import fioriUrl from '../assets/images/fiori.png'

const emit = defineEmits(['open-modal'])
</script>

<template>
  <section class="rsvp">
    <div class="section-wrapper">
      <div class="rsvp__content">
        <div class="rsvp__left">
          <h2 class="section-title rsvp__title">Conferma la tua presenza</h2>
          <div class="rsvp__underline" aria-hidden="true"></div>
          <p class="rsvp__deadline">ENTRO IL 4 GIUGNO!</p>
          <button class="btn-primary rsvp__btn" @click="emit('open-modal')">
            CLICCA QUI
          </button>
        </div>

        <div class="rsvp__illustration" aria-hidden="true">
          <img :src="fioriUrl" alt="" class="rsvp__fiori-img" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.rsvp {
  padding: 64px 0 80px;
}

.rsvp__content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
}

.rsvp__left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.rsvp__title {
  text-align: left;
}

.rsvp__underline {
  width: 72px;
  height: 1px;
  background-color: var(--color-green);
  margin-bottom: 22px;
  opacity: 0.5;
}

.rsvp__deadline {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  letter-spacing: 0.12em;
  color: var(--color-green);
  margin: 0 0 26px;
  font-style: italic;
}

.rsvp__btn {
  font-size: 0.9rem;
}

.rsvp__illustration {
  flex-shrink: 0;
}

.rsvp__fiori-img {
  width: clamp(120px, 16vw, 180px);
  height: auto;
}

@media (max-width: 600px) {
  .rsvp__left {
    align-items: center;
  }

  .rsvp__title {
    text-align: center;
  }

  .rsvp__underline {
    margin: 0 auto 22px;
  }
}
</style>
