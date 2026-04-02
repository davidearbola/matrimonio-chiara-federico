<script setup>
import img1 from '../assets/images/immagine1.jpeg'
import img2 from '../assets/images/immagine2.jpeg'
import img3 from '../assets/images/immagine3.jpeg'

const photos = [img1, img2, img3]
</script>

<template>
  <section class="photo-intro">
    <p class="photo-intro__text photo-intro__text--top">Vogliamo celebrare il nostro amore</p>

    <div class="photo-intro__gallery">
      <div class="photo-intro__img-wrap" v-for="(src, i) in photos" :key="i">
        <img :src="src" :alt="`Foto ${i + 1}`" class="photo-intro__img" />
      </div>
    </div>

    <p class="photo-intro__text photo-intro__text--bottom">Insieme alle persone più importanti della nostra vita</p>
  </section>
</template>

<style scoped>
.photo-intro {
  padding: 48px 24px 64px;
  max-width: var(--max-width);
  margin: 0 auto;
  text-align: center;
}

.photo-intro__text {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: clamp(1.15rem, 3vw, 1.55rem);
  color: var(--color-green);
  margin: 0;
  line-height: 1.4;
}

.photo-intro__text--top {
  margin-bottom: 32px;
}

.photo-intro__text--bottom {
  margin-top: 32px;
}

.photo-intro__gallery {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.photo-intro__img-wrap {
  flex: 0 0 calc(33.333% - 14px);
  min-width: 200px;
  max-width: 320px;
}

.photo-intro__img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  display: block;
  filter: grayscale(100%);
}

@media (max-width: 680px) {
  .photo-intro__img-wrap {
    flex: 0 0 calc(50% - 10px);
  }
}

@media (max-width: 440px) {
  .photo-intro__img-wrap {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>
