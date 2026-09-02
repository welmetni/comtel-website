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

The domain has NOT been connected by creating these files. The ZIP includes CNAME for www.comtelsolutions.com. Keep the existing GitHub Pages and DNS settings.

First verify ownership of the domain in GitHub's account settings under Pages. Then, in this repository's Settings > Pages, enter comtelsolutions.com in Custom domain and save. The included CNAME file sets www.comtelsolutions.com. Do this before changing your DNS records.

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
- Service-call form uses FormSubmit to email wasimelmtni@gmail.com. One-time activation required; no SMS integration. No analytics installed.

Confirm the phone number and service areas before publishing. Change the text directly in index.html if needed. If you use a different domain, update the canonical URL, social URL, structured data, robots.txt and sitemap.xml.

## Validation

Local HTML links, fragment targets, image availability, structured JSON, XML sitemap and ZIP integrity were checked. Mobile layouts are provided in CSS. No live domain setup or browser-based visual testing was performed.


## Update the existing site and activate service requests

Upload the updated extracted files into the EXISTING comtel-website repository and commit. Include index.html, styles.css, thank-you.html and CNAME. Keep assets/comtel-company.jpg. The CNAME contains www.comtelsolutions.com. No DNS changes are needed.

This form uses https://formsubmit.co/ to forward requests to wasimelmtni@gmail.com. Visitor submissions pass through that third-party service. CAPTCHA remains enabled. Required browser fields include customer type, service, name, phone, email, address and description. Customers can choose phone or email replies. The form does not send SMS, create calendar bookings or guarantee a response time.

Activation (required before offering the form to customers):
1. Wait for the updated site to publish and HTTPS to work.
2. Open https://www.comtelsolutions.com/#service-call and submit a test using your real contact details. Put TEST — please ignore in the description.
3. Complete the FormSubmit spam check.
4. Open wasimelmtni@gmail.com and find the FormSubmit activation message, including Spam if necessary. Click its confirmation/activation link.
5. Submit a SECOND test after activation. Confirm the service request email arrives, every field is included, and Reply uses the submitted customer email. Also confirm the thank-you page opens.
6. If activation or delivery fails, customers can call or use the email fallback shown below the form. Do not treat email delivery as verified until the second test arrives.

The endpoint and field configuration have been checked locally. No live form submission, activation email, or inbox delivery test was performed by the assistant.

FormSubmit documentation: https://formsubmit.co/
