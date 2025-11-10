<script>
	import { fly } from '$lib/utils/transitions';
	import ProcessSteps from '$lib/components/organisms/ProcessSteps.svelte';

	let expandedValue = $state(null);

	function toggleValue(index) {
		expandedValue = expandedValue === index ? null : index;
	}

	const workProcess = [
		{
			title: 'Diagnostic & Écoute',
			description:
				"Nous commençons par une analyse approfondie de votre écosystème digital, vos défis business et vos objectifs. Cette phase de découverte nous permet de comprendre vos besoins réels et d'identifier les opportunités d'amélioration.",
			icon: 'search'
		},
		{
			title: 'Stratégie & Conception',
			description:
				"Nous élaborons une stratégie sur-mesure et concevons l'architecture de votre solution. Notre approche combine design thinking, UX research et expertise technique pour créer une feuille de route claire et actionnable.",
			icon: 'compass'
		},
		{
			title: 'Développement Agile',
			description:
				"Nous développons votre solution de manière itérative, avec des points de contrôle réguliers. Cette approche agile permet d'ajuster le cap si nécessaire et de garantir que le produit final correspond exactement à vos attentes.",
			icon: 'zap'
		},
		{
			title: 'Lancement & Accompagnement',
			description:
				"Nous assurons un déploiement sans accroc de votre solution et restons à vos côtés pour garantir son succès. Notre accompagnement post-lancement inclut formation, maintenance et optimisations continues.",
			icon: 'rocket'
		}
	];
</script>

<svelte:head>
	<title>À propos - Le Labo Jaune | Agence tech et design à Cotonou</title>
	<meta
		name="description"
		content="Découvrez Le Labo Jaune, agence tech et design basée à Cotonou, Bénin. Nous accompagnons les entreprises dans leur croissance avec des solutions technologiques sur-mesure."
	/>
	<meta
		name="keywords"
		content="à propos, agence digitale, équipe créative, innovation digitale, mission, valeurs, culture d'entreprise"
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://labojaune.com/about" />
	<meta property="og:title" content="À propos - Le Labo Jaune | Agence tech et design à Cotonou" />
	<meta
		property="og:description"
		content="Découvrez Le Labo Jaune, agence tech et design basée à Cotonou, Bénin. Nous accompagnons les entreprises avec des solutions sur-mesure."
	/>
	<meta property="og:image" content="https://labojaune.com/og-image.jpg" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://labojaune.com/about" />
	<meta
		property="twitter:title"
		content="À propos - Le Labo Jaune | Agence tech et design à Cotonou"
	/>
	<meta
		property="twitter:description"
		content="Découvrez Le Labo Jaune, agence tech et design basée à Cotonou, Bénin."
	/>
	<meta property="twitter:image" content="https://labojaune.com/og-image.jpg" />

	<!-- Canonical URL -->
	<link rel="canonical" href="https://labojaune.com/about" />
</svelte:head>

<!-- Hero Section -->
<section class="bg-jaune pb-32 pt-40">
	<div class="container mx-auto px-6">
		<div class="mx-auto max-w-4xl">
			<div in:fly={{ y: 20, duration: 600, delay: 100 }}>
				<h1 class="mb-6 font-display text-5xl font-bold leading-tight md:text-6xl">
					Nous créons des expériences digitales qui transforment les entreprises.
				</h1>
			</div>
			<div in:fly={{ y: 20, duration: 600, delay: 200 }}>
				<p class="text-xl text-noir/60 md:text-2xl">
					Nous mettons les gens en premier — nos clients, nos employés et les utilisateurs que
					nous servons.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Mission Section -->
<section class="border-t border-noir/10 bg-white py-24">
	<div class="container mx-auto px-6">
		<div class="mx-auto max-w-4xl">
			<div in:fly={{ y: 20, duration: 600, delay: 100 }}>
				<h2 class="mb-8 font-display text-4xl font-bold leading-tight md:text-5xl">
					Notre mission : transformer les défis business en opportunités digitales
				</h2>
			</div>
			<div in:fly={{ y: 20, duration: 600, delay: 200 }}>
				<p class="text-xl text-noir/60 md:text-2xl">
					Au Labo Jaune, nous adoptons une approche diagnostique rigoureuse. Comme un médecin
					examine son patient avant de prescrire un traitement, nous analysons en profondeur votre
					écosystème numérique, vos défis business et vos objectifs avant de concevoir la solution
					sur-mesure adaptée à vos besoins.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Values Section -->
<section class="border-t border-noir/10 bg-white py-24">
	<div class="container mx-auto px-6">
		<div class="mx-auto max-w-4xl">
			<div class="mb-16">
				<h2 class="font-display text-4xl font-bold leading-tight md:text-5xl">
					Nos valeurs font partie de tout ce que nous créons.
				</h2>
			</div>

			<div class="space-y-1">
				<!-- Value 1: Effectivité -->
				<div
					class="border-t border-noir/10 transition-all duration-300"
					in:fly={{ y: 20, duration: 600, delay: 100 }}
				>
					<button
						class="flex w-full items-start justify-between gap-6 py-8 text-left"
						onclick={() => toggleValue(0)}
					>
						<div class="flex-1">
							<h3 class="mb-2 text-2xl font-bold">Effectivité</h3>
							<p class="text-lg text-noir/60">
								Nous créons des solutions qui fonctionnent réellement, avec des fonctionnalités
								concrètes qui répondent aux besoins spécifiques de nos clients.
							</p>
						</div>
						<div
							class="text-xl font-light transition-transform duration-300"
							style="transform: rotate({expandedValue === 0 ? '45deg' : '0deg'})"
						>
							+
						</div>
					</button>

					{#if expandedValue === 0}
						<div class="pb-8" in:fly={{ y: -10, duration: 300 }}>
							<p class="text-lg text-noir/60">
								L'effectivité guide toutes nos décisions. Nous privilégions les solutions
								pragmatiques qui génèrent des résultats tangibles plutôt que des technologies à la
								mode sans valeur ajoutée réelle.
							</p>
						</div>
					{/if}
				</div>

				<!-- Value 2: Professionnalisme -->
				<div
					class="border-t border-noir/10 transition-all duration-300"
					in:fly={{ y: 20, duration: 600, delay: 150 }}
				>
					<button
						class="flex w-full items-start justify-between gap-6 py-8 text-left"
						onclick={() => toggleValue(1)}
					>
						<div class="flex-1">
							<h3 class="mb-2 text-2xl font-bold">Professionnalisme</h3>
							<p class="text-lg text-noir/60">
								Nous maintenons les plus hauts standards de qualité dans notre travail, avec une
								approche rigoureuse et une attention aux détails qui inspire confiance.
							</p>
						</div>
						<div
							class="text-xl font-light transition-transform duration-300"
							style="transform: rotate({expandedValue === 1 ? '45deg' : '0deg'})"
						>
							+
						</div>
					</button>

					{#if expandedValue === 1}
						<div class="pb-8" in:fly={{ y: -10, duration: 300 }}>
							<p class="text-lg text-noir/60">
								Le professionnalisme se manifeste dans notre rigueur méthodologique, notre respect
								des délais et notre communication claire à chaque étape du projet.
							</p>
						</div>
					{/if}
				</div>

				<!-- Value 3: Originalité -->
				<div
					class="border-t border-noir/10 transition-all duration-300"
					in:fly={{ y: 20, duration: 600, delay: 200 }}
				>
					<button
						class="flex w-full items-start justify-between gap-6 py-8 text-left"
						onclick={() => toggleValue(2)}
					>
						<div class="flex-1">
							<h3 class="mb-2 text-2xl font-bold">Originalité</h3>
							<p class="text-lg text-noir/60">
								Nous apportons une touche créative unique à chaque projet, en identifiant les
								solutions les plus simples, efficaces et durables pour votre contexte.
							</p>
						</div>
						<div
							class="text-xl font-light transition-transform duration-300"
							style="transform: rotate({expandedValue === 2 ? '45deg' : '0deg'})"
						>
							+
						</div>
					</button>

					{#if expandedValue === 2}
						<div class="pb-8" in:fly={{ y: -10, duration: 300 }}>
							<p class="text-lg text-noir/60">
								Notre originalité réside dans notre capacité à penser différemment, à challenger
								les conventions tout en restant ancré dans les réalités du marché africain.
							</p>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Process Section -->
<ProcessSteps steps={workProcess} title="Notre processus de travail" />

<!-- Team Section -->
<section class="border-t border-noir/10 bg-white py-32">
	<div class="container mx-auto px-6">
		<div class="mx-auto max-w-4xl">
			<div class="mb-12">
				<h2 class="font-display text-4xl font-bold leading-tight md:text-5xl">
					Une équipe soudée et passionnée
				</h2>
			</div>

			<div in:fly={{ y: 20, duration: 600, delay: 100 }}>
				<p class="mb-6 text-xl text-noir/60 md:text-2xl">
					Le Labo Jaune réunit une équipe pluridisciplinaire de talents passionnés par
					l'innovation digitale. Designers, développeurs, stratèges et chefs de projets
					travaillent ensemble pour offrir des solutions qui dépassent les attentes.
				</p>
				<p class="text-xl text-noir/60 md:text-2xl">
					Notre force réside dans notre diversité de compétences et notre approche
					collaborative. Chaque membre apporte son expertise unique pour créer des
					expériences digitales exceptionnelles, adaptées au contexte africain.
				</p>
			</div>
		</div>
	</div>
</section>

