<script setup>
import cermoniaUrl from '../assets/images/cerimonia.png'
import tavoloUrl from '../assets/images/tavolo.png'
import pernottamentoUrl from '../assets/images/pernottamento.png'
import separSxUrl from '../assets/images/separ-sx.png'
import separDxUrl from '../assets/images/separ-dx.png'
</script>

<template>
  <section class="dettagli">
    <div class="section-wrapper">
      <div class="dettagli__header">
        <img :src="separSxUrl" alt="" aria-hidden="true" class="dettagli__separ" />
        <h2 class="section-title">Dettagli</h2>
        <img :src="separDxUrl" alt="" aria-hidden="true" class="dettagli__separ" />
      </div>

      <div class="dettagli__grid">
        <!-- Cerimonia -->
        <div class="dettagli__card">
          <img :src="cermoniaUrl" alt="" aria-hidden="true" class="dettagli__icon" />
          <h3 class="dettagli__card-title">Cerimonia</h3>
          <p class="dettagli__card-text">
            La cerimonia si terrà alle ore <strong>16:00</strong><br>
            presso la chiesa di San Michele Vetere a Cremona
          </p>
          <a
            class="dettagli__link"
            href="https://maps.google.com/?q=Chiesa+San+Michele+Vetere+Cremona"
            target="_blank"
            rel="noopener"
          >come arrivarci</a>
        </div>

        <!-- Ricevimento -->
        <div class="dettagli__card">
          <img :src="tavoloUrl" alt="" aria-hidden="true" class="dettagli__icon" />
          <h3 class="dettagli__card-title">Ricevimento</h3>
          <p class="dettagli__card-text">
            Il ricevimento si svolgerà a seguito della cerimonia, presso
            <strong>Cascina Lago Scuro</strong> a Stagno Lombardo —
            Via G. Pagliari, 54
          </p>
          <a
            class="dettagli__link"
            href="https://maps.google.com/?q=Cascina+Lago+Scuro+Via+G+Pagliari+54+Stagno+Lombardo"
            target="_blank"
            rel="noopener"
          >come arrivarci</a>
        </div>

        <!-- Pernottamento -->
        <div class="dettagli__card">
          <img :src="pernottamentoUrl" alt="" aria-hidden="true" class="dettagli__icon dettagli__icon--wide" />
          <h3 class="dettagli__card-title">Pernottamento</h3>
          <p class="dettagli__card-text">
            Per chi desidera fermarsi a dormire nei pressi della location,
            abbiamo pensato a due agriturismi in zona.
            Per info e prenotazioni vi chiediamo di contattarci direttamente su Whatsapp.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.dettagli {
  padding: 56px 0 72px;
}

.dettagli__header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 52px;
}

.dettagli__separ {
  height: 32px;
  width: auto;
}

.dettagli__separ--flip {
  transform: scaleX(-1);
}

.dettagli__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 44px;
}

.dettagli__card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.dettagli__icon {
  width: 110px;
  height: 110px;
  object-fit: contain;
  margin-bottom: 14px;
}

.dettagli__icon--wide {
  width: 160px;
  height: 110px;
}

.dettagli__card-title {
  font-family: var(--font-script);
  font-size: 2.4rem;
  color: var(--color-green);
  margin: 0 0 14px;
  font-weight: 400;
}

.dettagli__card-text {
  font-family: var(--font-mono);
  font-size: 0.88rem;
  color: var(--color-green);
  margin: 0 0 14px;
  max-width: 280px;
  line-height: 1.75;
}

.dettagli__card-text strong {
  font-weight: 700;
}

.dettagli__link {
  font-family: var(--font-mono);
  font-size: 0.84rem;
  font-style: italic;
  color: var(--color-green);
  text-decoration: underline;
  margin-top: auto;
}
</style>
