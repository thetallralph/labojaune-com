import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projects = [
	{
		id: 'fdfa',
		url: 'https://fondationfdfa.org',
		filename: 'fdfa.jpg'
	},
	{
		id: 'le-belier',
		url: 'https://agencelebelier.com',
		filename: 'le-belier.jpg'
	},
	{
		id: 'toguna-world',
		url: 'https://togunaworld.com',
		filename: 'toguna-world.jpg'
	},
	{
		id: 'iwaria',
		url: 'https://iwaria.com',
		filename: 'iwaria.jpg'
	},
	{
		id: 'flotpilot',
		url: 'https://flotpilot.com',
		filename: 'flotpilot.jpg'
	},
	{
		id: 'back-to-bac-2006',
		url: 'https://backtobac2006.com',
		filename: 'back-to-bac-2006.jpg'
	},
	{
		id: 'ar-cco',
		url: 'https://arcco-bj.vercel.app',
		filename: 'ar-cco.jpg'
	}
];

// Optionnel : `node scripts/capture-screenshots.js flotpilot ar-cco` ne capture que ces projets.
const only = process.argv.slice(2);

const outputDir = path.join(__dirname, '..', 'static', 'images', 'projects');

async function captureScreenshots() {
	console.log('Launching browser...');
	const browser = await chromium.launch({ headless: true });
	const context = await browser.newContext({
		viewport: { width: 1920, height: 1080 },
		deviceScaleFactor: 1
	});

	for (const project of projects.filter((p) => !only.length || only.includes(p.id))) {
		console.log(`\nCapturing ${project.id}...`);
		console.log(`  URL: ${project.url}`);

		const page = await context.newPage();

		try {
			await page.goto(project.url, {
				waitUntil: 'networkidle',
				timeout: 60000
			});

			// Wait a bit more for any animations to settle
			await page.waitForTimeout(2000);

			const outputPath = path.join(outputDir, project.filename);

			await page.screenshot({
				path: outputPath,
				type: 'jpeg',
				quality: 90
			});

			console.log(`  ✓ Saved to ${outputPath}`);
		} catch (error) {
			console.error(`  ✗ Error capturing ${project.id}:`, error.message);
		}

		await page.close();
	}

	await browser.close();
	console.log('\nDone!');
}

captureScreenshots();
