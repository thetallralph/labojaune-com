import { chromium } from 'playwright';

async function analyzePage() {
	const browser = await chromium.launch({ headless: false });
	const page = await browser.newPage();

	console.log('📱 Visiting Instrument About page...');
	await page.goto('https://www.instrument.com/about/', { waitUntil: 'networkidle' });

	// Wait a bit for animations
	await page.waitForTimeout(2000);

	console.log('\n📋 Page Structure Analysis:\n');

	// Get page title
	const title = await page.title();
	console.log(`Title: ${title}`);

	// Get main sections
	const sections = await page.$$eval('section, [role="region"], main > div', (elements) =>
		elements.map((el, i) => ({
			index: i,
			tag: el.tagName,
			classes: el.className,
			id: el.id,
			textPreview: el.innerText?.slice(0, 100) || 'No text'
		}))
	);

	console.log('\n🏗️  Main Sections:');
	sections.forEach((section) => {
		console.log(
			`  [${section.index}] ${section.tag} ${section.id ? '#' + section.id : ''} ${section.classes ? '.' + section.classes.split(' ').join('.') : ''}`
		);
		console.log(`      Preview: ${section.textPreview.replace(/\n/g, ' ')}`);
	});

	// Get heading structure
	const headings = await page.$$eval('h1, h2, h3, h4', (elements) =>
		elements.map((el) => ({
			level: el.tagName,
			text: el.innerText,
			classes: el.className
		}))
	);

	console.log('\n📝 Heading Structure:');
	headings.forEach((h) => {
		console.log(`  ${h.level}: "${h.text}"`);
	});

	// Get color scheme
	const colors = await page.evaluate(() => {
		const styles = window.getComputedStyle(document.body);
		return {
			background: styles.backgroundColor,
			color: styles.color,
			fontFamily: styles.fontFamily
		};
	});

	console.log('\n🎨 Design System:');
	console.log(`  Background: ${colors.background}`);
	console.log(`  Text Color: ${colors.color}`);
	console.log(`  Font Family: ${colors.fontFamily}`);

	// Capture screenshot
	await page.screenshot({ path: 'static/instrument-about-analysis.png', fullPage: true });
	console.log('\n📸 Screenshot saved to static/instrument-about-analysis.png');

	// Get animation/transition patterns
	const animations = await page.evaluate(() => {
		const elements = document.querySelectorAll('*');
		const transitionElements = [];
		elements.forEach((el) => {
			const styles = window.getComputedStyle(el);
			if (styles.transition !== 'all 0s ease 0s' && styles.transition !== '') {
				transitionElements.push({
					tag: el.tagName,
					transition: styles.transition
				});
			}
		});
		return transitionElements.slice(0, 10); // First 10 examples
	});

	console.log('\n✨ Animation Patterns (sample):');
	animations.forEach((anim) => {
		console.log(`  ${anim.tag}: ${anim.transition}`);
	});

	console.log('\n\n✅ Analysis complete! Press Ctrl+C to close browser...');

	// Keep browser open for manual inspection
	await page.waitForTimeout(300000); // 5 minutes

	await browser.close();
}

analyzePage().catch(console.error);
