<script setup>
import busteUrl from '../assets/images/buste.png'
</script>

<template>
  <section class="contatti">
    <div class="section-wrapper">
      <div class="contatti__header">
        <h2 class="section-title">Contatti</h2>
        <img :src="busteUrl" alt="" aria-hidden="true" class="contatti__buste" />
      </div>

      <div class="contatti__grid">
        <div class="contatti__person">
          <h3 class="contatti__name">CHIARA</h3>
          <ul class="contatti__list">
            <li>
              <a href="tel:+393341417671">+39 3341417671</a>
            </li>
            <li>
              <a href="https://instagram.com/chiaragorla" target="_blank" rel="noopener">IG: @chiaragorla</a>
            </li>
            <li>
              <a href="mailto:chiaragorla@icloud.com">chiaragorla@icloud.com</a>
            </li>
          </ul>
        </div>

        <div class="contatti__person">
          <h3 class="contatti__name">FEDERICO</h3>
          <ul class="contatti__list">
            <li>
              <a href="tel:+393421743752">+39 3421743752</a>
            </li>
            <li>
              <a href="https://instagram.com/chicco_arbola" target="_blank" rel="noopener">IG: @chicco_arbola</a>
            </li>
            <li>
              <a href="mailto:federico.arbola@gmail.com">federico.arbola@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contatti {
  padding: 48px 0 80px;
}

.contatti__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 40px;
}

.contatti__header .section-title {
  text-align: center;
  margin: 0;
}

.contatti__buste {
  width: 68px;
  height: auto;
}

.contatti__grid {
  display: flex;
  justify-content: space-between;
  gap: 32px;
}

.contatti__person:first-child {
  text-align: left;
}

.contatti__person:last-child {
  text-align: right;
}

.contatti__person:last-child .contatti__list {
  align-items: flex-end;
}

.contatti__name {
  font-family: var(--font-mono);
  font-size: 0.88rem;
  letter-spacing: 0.18em;
  color: var(--color-green);
  margin: 0 0 12px;
  font-weight: 700;
}

.contatti__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.contatti__list li {
  font-family: var(--font-mono);
  font-size: 0.88rem;
  color: var(--color-green);
}

.contatti__list a {
  color: var(--color-green);
  text-decoration: none;
}

.contatti__list a:hover {
  text-decoration: underline;
}
</style>
