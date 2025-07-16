<script>
	export let type = 'Organization';
	export let data = {};

	const organizationSchema = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'Labo Jaune',
		alternateName: 'Labo Jaune Digital Agency',
		url: 'https://labojaune.com',
		logo: 'https://labojaune.com/logo.png',
		description:
			"Agence digitale créative spécialisée dans la transformation numérique pour l'Afrique",
		foundingDate: '2023',
		address: {
			'@type': 'PostalAddress',
			addressCountry: 'SN',
			addressRegion: 'Dakar'
		},
		contactPoint: {
			'@type': 'ContactPoint',
			contactType: 'customer service',
			email: 'contact@labojaune.com',
			availableLanguage: ['French', 'English']
		},
		sameAs: [
			'https://twitter.com/labojaune',
			'https://linkedin.com/company/labojaune',
			'https://instagram.com/labojaune'
		],
		offers: {
			'@type': 'Offer',
			itemOffered: {
				'@type': 'Service',
				name: 'Services Digitaux',
				description: 'Stratégie, Design, Développement et Marketing Digital'
			}
		}
	};

	const websiteSchema = {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: 'Labo Jaune',
		url: 'https://labojaune.com',
		potentialAction: {
			'@type': 'SearchAction',
			target: {
				'@type': 'EntryPoint',
				urlTemplate: 'https://labojaune.com/search?q={search_term_string}'
			},
			'query-input': 'required name=search_term_string'
		}
	};

	const serviceSchema = {
		'@context': 'https://schema.org',
		'@type': 'Service',
		serviceType: data.serviceType || 'Digital Services',
		provider: {
			'@type': 'Organization',
			name: 'Labo Jaune'
		},
		areaServed: {
			'@type': 'Place',
			name: 'Africa'
		},
		description: data.description || '',
		name: data.name || ''
	};

	const breadcrumbSchema = {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: data.breadcrumbs || []
	};

	let schema;
	switch (type) {
		case 'Service':
			schema = serviceSchema;
			break;
		case 'BreadcrumbList':
			schema = breadcrumbSchema;
			break;
		case 'WebSite':
			schema = websiteSchema;
			break;
		default:
			schema = organizationSchema;
	}

	const jsonLd = JSON.stringify(schema);
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>
