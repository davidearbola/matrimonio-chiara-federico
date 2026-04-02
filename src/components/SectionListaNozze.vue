<script setup>
import macchinaUrl from "../assets/images/macchina.png";
</script>

<template>
	<section class="lista-nozze">
		<div class="section-wrapper">
			<div class="lista-nozze__deco">
				<img :src="macchinaUrl" alt="" aria-hidden="true" class="lista-nozze__deco-img" />
			</div>

			<h2 class="section-title">Lista Nozze</h2>

			<p class="lista-nozze__body">
				Non abbiamo bisogno di doni materiali: ciò che conta davvero è festeggiare insieme a voi. La vostra presenza sarà per noi il dono più
				grande.<br /><br />
				Per chi lo desidera, sarà possibile contribuire a rendere indimenticabile il nostro viaggio di nozze. Grazie di cuore!
			</p>

			<div class="lista-nozze__payments">
				<div class="lista-nozze__payment-col">
					<p class="lista-nozze__payment-line">
						<span class="lista-nozze__label">IBAN:</span>
						<span class="lista-nozze__code">IT61L0200801619000421430863</span>
					</p>
					<p class="lista-nozze__payment-line">
						<span class="lista-nozze__label">INTESTATO A:</span>
						Chiara Gorla Federico Arbola
					</p>
					<p class="lista-nozze__payment-line">
						<span class="lista-nozze__label">CAUSALE:</span>
						Regalo di nozze
					</p>
				</div>
				<div class="lista-nozze__divider" aria-hidden="true">/</div>
				<div class="lista-nozze__payment-col">
					<p class="lista-nozze__payment-line">
						<span class="lista-nozze__label">PAYPAL:</span>
						<a href="https://paypal.me/chiaragorla" target="_blank" rel="noopener" class="lista-nozze__code">paypal.me/chiaragorla</a>
					</p>
					<p class="lista-nozze__payment-line">
						<span class="lista-nozze__label">CAUSALE:</span>
						Regalo di nozze
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.lista-nozze {
	padding: 64px 0 72px;
}

.lista-nozze__deco {
	display: flex;
	justify-content: center;
	margin-bottom: 8px;
}

.lista-nozze__deco-img {
	width: clamp(140px, 20vw, 200px);
	height: auto;
}

.lista-nozze__body {
	font-family: var(--font-mono);
	font-size: 0.9rem;
	text-align: center;
	max-width: 540px;
	margin: 20px auto 48px;
	line-height: 1.85;
	color: var(--color-green);
}

/* No box/border — just the content freely laid out */
.lista-nozze__payments {
	display: flex;
	align-items: flex-start;
	justify-content: center;
	gap: 0;
	max-width: 700px;
	margin: 0 auto;
	flex-wrap: wrap;
}

.lista-nozze__payment-col {
	flex: 1 1 240px;
}

.lista-nozze__divider {
	font-family: var(--font-serif);
	font-size: 2.5rem;
	color: var(--color-green);
	padding: 0 32px;
	align-self: center;
	opacity: 0.4;
}

.lista-nozze__payment-line {
	margin: 0 0 10px;
	font-family: var(--font-mono);
	font-size: 0.88rem;
	color: var(--color-green);
	line-height: 1.6;
}

.lista-nozze__label {
	font-weight: 700;
	letter-spacing: 0.04em;
	margin-right: 6px;
}

.lista-nozze__code {
	word-break: break-all;
	color: var(--color-green);
	text-decoration: none;
}

a.lista-nozze__code {
	text-decoration: underline;
}

@media (max-width: 600px) {
	.lista-nozze__payments {
		flex-direction: column;
		align-items: center;
	}

	.lista-nozze__divider {
		padding: 8px 0;
		align-self: center;
	}

	.lista-nozze__payment-col {
		flex: 1 1 auto;
		width: 100%;
		text-align: center;
	}
}
</style>
