<script setup>
import { ref } from 'vue'
import SectionHero from './components/SectionHero.vue'
import SectionPhotoIntro from './components/SectionPhotoIntro.vue'
import SectionDettagli from './components/SectionDettagli.vue'
import SectionListaNozze from './components/SectionListaNozze.vue'
import SectionFullwidthPhoto from './components/SectionFullwidthPhoto.vue'
import SectionRsvp from './components/SectionRsvp.vue'
import SectionContatti from './components/SectionContatti.vue'
import RsvpModal from './components/RsvpModal.vue'

const modalOpen = ref(false)
</script>

<template>
  <SectionHero />

  <div class="section-divider"><span class="section-divider__ornament">&#x2767;&nbsp;&nbsp;&#x2767;&nbsp;&nbsp;&#x2767;</span></div>

  <SectionPhotoIntro />

  <div class="section-divider"><span class="section-divider__ornament">&#x2767;&nbsp;&nbsp;&#x2767;&nbsp;&nbsp;&#x2767;</span></div>

  <SectionDettagli />

  <div class="section-divider"><span class="section-divider__ornament">&#x2767;&nbsp;&nbsp;&#x2767;&nbsp;&nbsp;&#x2767;</span></div>

  <SectionListaNozze />

  <SectionFullwidthPhoto />

  <div class="section-divider"><span class="section-divider__ornament">&#x2767;&nbsp;&nbsp;&#x2767;&nbsp;&nbsp;&#x2767;</span></div>

  <SectionRsvp @open-modal="modalOpen = true" />

  <div class="section-divider"><span class="section-divider__ornament">&#x2767;&nbsp;&nbsp;&#x2767;&nbsp;&nbsp;&#x2767;</span></div>

  <SectionContatti />

  <RsvpModal v-model="modalOpen" />
</template>

<style>
#app {
  width: 100%;
}
</style>
