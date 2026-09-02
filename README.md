# Comtel Solutions website

A complete static website for comtelsolutions.com. No installation, npm commands, or build process needed.

## Preview on your computer

Extract the ZIP completely. Open index.html in your browser. Keep styles.css and the assets folder beside it.

## Upload to GitHub

1. Sign in to GitHub and create a new repository called comtel-website. A public repository supports GitHub Pages on GitHub Free. The files and included company photo will be public when you publish.
2. Open the repository and choose Add file > Upload files (or uploading an existing file on a new repository).
3. Drag the EXTRACTED contents into GitHub, including index.html, styles.css and the assets folder. Do not upload the ZIP itself. index.html must appear at the top level of the repository, not inside another folder.
4. Click Commit changes.
5. Go to Settings > Pages. Under Build and deployment choose Deploy from a branch. Select main and / (root), then Save.
6. Wait for GitHub to finish publishing. Open the website link shown on the Pages settings screen.

Official publishing instructions:
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Connect comtelsolutions.com

The domain has NOT been connected by creating these files. No DNS or account settings have been changed.

First verify ownership of the domain in GitHub's account settings under Pages. Then, in this repository's Settings > Pages, enter comtelsolutions.com in Custom domain and save. GitHub will create the CNAME file. Do this before changing your DNS records.

Your receipt identifies Namecheap as the registrar. In Namecheap, open Domain List > Manage for comtelsolutions.com. If Namecheap hosts your DNS, use Advanced DNS to enter the GitHub Pages records listed in the official guide below. If your nameservers point to another provider, make the changes with that provider instead. The www CNAME target must use YOUR actual GitHub username followed by .github.io, not the repository name. Keep unrelated email/MX records intact.

Official current DNS values and setup steps:
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

Domain verification:
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages

After DNS checks pass and the certificate becomes available, enable Enforce HTTPS in GitHub Pages. DNS updates may take up to 24 hours. Check both comtelsolutions.com and www.comtelsolutions.com.

## What is included

- index.html: page copy, navigation, contact links and search metadata.
- styles.css: responsive desktop and mobile layouts.
- assets/comtel-company.jpg: your supplied photo, placed at the top of the site.
- robots.txt and sitemap.xml: search crawler files for comtelsolutions.com.
- .nojekyll: optional GitHub Pages marker for serving static files directly.

## Business details

- Public business name: Comtel Solutions.
- Sales: (832) 614-0914. Accounting: (713) 517-3399. Emergency service: (832) 213-6736. Every contact button uses a real tel: link. Desktop visitors need a calling app or can dial the displayed number themselves.
- Address displayed: 13200 FM 359, Hempstead, TX 77445.
- Services: cameras, access control, gates and networks.
- No invented reviews, certifications, business hours, email inboxes or warranties.
- No contact form, backend or analytics to configure. Contact is by phone.

Confirm the phone number and service areas before publishing. Change the text directly in index.html if needed. If you use a different domain, update the canonical URL, social URL, structured data, robots.txt and sitemap.xml.

## Validation

Local HTML links, fragment targets, image availability, structured JSON, XML sitemap and ZIP integrity were checked. Mobile layouts are provided in CSS. No live domain setup or browser-based visual testing was performed.
