<script setup>
import angeloSxUrl from '../assets/images/angelo-sx.png'
import angeloDxUrl from '../assets/images/angelo-dx.png'
import img4 from '../assets/images/immagine4.jpeg'
</script>

<template>
  <section class="fullwidth-photo">
    <div class="section-wrapper">

      <!-- Angels + framed photo -->
      <div class="fullwidth-photo__row">

        <img :src="angeloSxUrl" alt="" aria-hidden="true" class="fullwidth-photo__angel fullwidth-photo__angel--left" />

        <div class="fullwidth-photo__frame">
          <img :src="img4" alt="Chiara e Federico" class="fullwidth-photo__placeholder" />

          <!--
            Scalloped SVG border touching the image edge.
            viewBox: -16 -16 832 632 → covers 800×600 image + 16px outward margin all sides.
            Top/Bottom: 20 scallops × 40px, amplitude 12px outward.
            Left/Right: 12 scallops × 50px, amplitude 12px outward.
          -->
          <svg
            class="fullwidth-photo__border"
            viewBox="-16 -16 832 632"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M 0,0
                Q 20,-12 40,0 Q 60,-12 80,0 Q 100,-12 120,0 Q 140,-12 160,0 Q 180,-12 200,0
                Q 220,-12 240,0 Q 260,-12 280,0 Q 300,-12 320,0 Q 340,-12 360,0 Q 380,-12 400,0
                Q 420,-12 440,0 Q 460,-12 480,0 Q 500,-12 520,0 Q 540,-12 560,0 Q 580,-12 600,0
                Q 620,-12 640,0 Q 660,-12 680,0 Q 700,-12 720,0 Q 740,-12 760,0 Q 780,-12 800,0
                Q 812,25 800,50 Q 812,75 800,100 Q 812,125 800,150 Q 812,175 800,200
                Q 812,225 800,250 Q 812,275 800,300 Q 812,325 800,350 Q 812,375 800,400
                Q 812,425 800,450 Q 812,475 800,500 Q 812,525 800,550 Q 812,575 800,600
                Q 780,612 760,600 Q 740,612 720,600 Q 700,612 680,600 Q 660,612 640,600
                Q 620,612 600,600 Q 580,612 560,600 Q 540,612 520,600 Q 500,612 480,600
                Q 460,612 440,600 Q 420,612 400,600 Q 380,612 360,600 Q 340,612 320,600
                Q 300,612 280,600 Q 260,612 240,600 Q 220,612 200,600 Q 180,612 160,600
                Q 140,612 120,600 Q 100,612 80,600 Q 60,612 40,600 Q 20,612 0,600
                Q -12,575 0,550 Q -12,525 0,500 Q -12,475 0,450 Q -12,425 0,400
                Q -12,375 0,350 Q -12,325 0,300 Q -12,275 0,250 Q -12,225 0,200
                Q -12,175 0,150 Q -12,125 0,100 Q -12,75 0,50 Q -12,25 0,0 Z"
              fill="none"
              stroke="#5B8A48"
              stroke-width="2.5"
            />
          </svg>
        </div>

        <img :src="angeloDxUrl" alt="" aria-hidden="true" class="fullwidth-photo__angel fullwidth-photo__angel--right" />

      </div>

    </div>
  </section>
</template>

<style scoped>
.fullwidth-photo {
  padding: 32px 0 48px;
  overflow: hidden;
}

/* row: angel — photo — angel */
.fullwidth-photo__row {
  display: flex;
  align-items: center;
  gap: 24px;
}

.fullwidth-photo__angel {
  flex: 0 0 auto;
  width: clamp(80px, 10vw, 140px);
  height: auto;
}

/* photo frame: relative so the SVG border sits on top */
.fullwidth-photo__frame {
  flex: 1;
  position: relative;
  /* slight inset so angels overlap the scalloped edge */
  margin: 16px -8px;
}

.fullwidth-photo__placeholder {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  display: block;
  filter: grayscale(100%);
}

/* SVG border: absolutely covers the image + 16px margin on all sides */
.fullwidth-photo__border {
  position: absolute;
  top: -16px;
  left: -16px;
  width: calc(100% + 32px);
  height: calc(100% + 32px);
  pointer-events: none;
  overflow: visible;
}

/* text below */
.fullwidth-photo__title {
  margin-top: 40px;
  margin-bottom: 16px;
}

.fullwidth-photo__captions {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
}

.fullwidth-photo__caption {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: clamp(1rem, 2.5vw, 1.35rem);
  color: var(--color-green);
  margin: 0;
  max-width: 45%;
  line-height: 1.4;
}

.fullwidth-photo__caption--left {
  text-align: left;
}

.fullwidth-photo__caption--right {
  text-align: right;
}

@media (max-width: 600px) {
  .fullwidth-photo__row {
    flex-direction: column;
    align-items: center;
  }

  .fullwidth-photo__angel {
    width: 70px;
  }

  .fullwidth-photo__frame {
    margin: 8px 0;
    width: 100%;
  }

  .fullwidth-photo__captions {
    flex-direction: column;
    gap: 12px;
  }

  .fullwidth-photo__caption {
    max-width: 100%;
  }

  .fullwidth-photo__caption--right {
    text-align: left;
  }
}
</style>
