const fs = require('fs');
const { SitemapStream } = require('sitemap');

// List of routes for your website
const paths = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.7 },
    { url: '/pricing', changefreq: 'monthly', priority: 0.7 },
    { url: '/career', changefreq: 'monthly', priority: 0.6 },
    // Add more pages as needed
];

async function generateSitemap() {
    const sitemap = new SitemapStream({ hostname: 'https://hiredeasy.com' });
    const writeStream = fs.createWriteStream('sitemap.xml');

    sitemap.pipe(writeStream);

    for (const path of paths) {
        sitemap.write({ ...path, lastmodISO: new Date().toISOString() });
    }

    sitemap.end();

    writeStream.on('finish', () => {
        console.log('Sitemap generated successfully!');
    });

    writeStream.on('error', (error) => {
        console.error('Failed to generate sitemap:', error);
    });
}

generateSitemap();
