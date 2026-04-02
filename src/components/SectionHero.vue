<script setup>
import champagneUrl from '../assets/images/champagne.png'
import separSxUrl from '../assets/images/separ-sx.png'
import separDxUrl from '../assets/images/separ-dx.png'
</script>

<template>
  <section class="hero">
    <!-- Title in arc shape using SVG textPath -->
    <div class="hero__title-wrap">
      <svg viewBox="0 0 600 210" xmlns="http://www.w3.org/2000/svg" class="hero__title-svg">
        <defs>
          <path id="titleArc" d="M 30,200 A 420,420 0 0,1 570,200"/>
        </defs>
        <text class="hero__title-text" text-anchor="middle">
          <textPath href="#titleArc" startOffset="50%">Chiara e Federico</textPath>
        </text>
      </svg>
    </div>

    <!-- Champagne fountain illustration -->
    <div class="hero__illustration">
      <img :src="champagneUrl" alt="" aria-hidden="true" class="hero__champagne-img" />
    </div>

    <!-- Date and location: text ABOVE separator -->
    <div class="hero__meta">
      <div class="hero__meta-col">
        <span class="hero__date">VENERDÌ 04<br>SETTEMBRE 2026</span>
        <img :src="separSxUrl" alt="" aria-hidden="true" class="hero__separator" />
      </div>
      <div class="hero__meta-col">
        <span><p></p></span>
        <span class="hero__location">CREMONA</span>
        <img :src="separDxUrl" alt="" aria-hidden="true" class="hero__separator" />
      </div>
    </div>

    <!-- Tagline -->
    <p class="hero__tagline">SEI INVITATO AL NOSTRO MATRIMONIO!</p>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 36px 24px 24px;
  max-width: var(--max-width);
  margin: 0 auto;
}

.hero__title-wrap {
  width: 100%;
  max-width: 680px;
}

.hero__title-svg {
  width: 100%;
  height: auto;
  display: block;
}

.hero__title-text {
  font-family: 'Great Vibes', cursive;
  font-size: 80px;
  fill: var(--color-green);
  font-weight: 400;
}

.hero__illustration {
  margin: -8px 0 0;
}

.hero__champagne-img {
  width: clamp(140px, 22vw, 210px);
  height: auto;
}

/* meta: two columns side by side, each with text above separator */
.hero__meta {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 640px;
  margin-top: 16px;
  gap: 12px;
}

.hero__meta-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.hero__date,
.hero__location {
  font-family: var(--font-mono);
  font-size: 1.1rem;   /* ~20px at base 16px */
  letter-spacing: 0.06em;
  color: var(--color-green);
  line-height: 1.4;
  text-align: center;
}

.hero__separator {
  height: 32px;
  width: auto;
}

.hero__tagline {
  font-family: var(--font-mono);
  font-size: 0.88rem;
  letter-spacing: 0.12em;
  text-align: center;
  margin: 20px 0 0;
  color: var(--color-green);
}

@media (max-width: 600px) {
  .hero__title-text {
    font-size: 52px;
  }

  .hero__meta {
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px;
  }

  .hero__date,
  .hero__location {
    font-size: 0.95rem;
  }

  .hero__separator {
    height: 24px;
  }
}
</style>
