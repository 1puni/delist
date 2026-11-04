# Deployment

Serve `dist/` from the existing 1puni VPS site provisioner. There is no build
step or application server. `deploy/sites/delist/site.yaml` declares the hostname
and loopback port 8211. Public DNS is DNS-only A → 204.168.179.65.

Operator-owned target: `delist-sites`; wrapper:
`/usr/local/libexec/1puni-targets-v48/sites-delist`.
Policy: `/etc/1puni-steward/sites/delist.yaml`, scoped to 1puni.com and port 8211.
See the host's `/opt/1puni-sites/README.md` for the authoritative driver contract.

## Verified release — 2026-11-04

Deployed commit: `9b8a013ff7a017262de03177cbeb8f38c2f7d9b7`.
The protected driver reports matching health and the current release link names
that commit. HTTPS returns 200 for `/` and `/AGENTS.md` from the VPS using normal
DNS. Independent TLS-verified requests to the VPS matched local HTML, agent
instructions and sitemap byte-for-byte. Google and Cloudflare public DNS both
return the VPS address. Local Mac VPN DNS was still returning NXDOMAIN at the
last check; this is not evidence of an unavailable origin.

A brief initial ChatGPT Sites deployment was superseded. Its custom-domain
binding and DNS validation TXT records were removed, its copy made owner-private,
and `.openai/hosting.json` removed from the public repository's current tree.
No Sites credential or dependency is required to serve this repository.

The existing controller configuration includes the new repository and target.
The first release was applied using the protected target wrapper directly, so
no running steward conversation was interrupted. The live controller has not
been restarted to load the new target; automatic reconciliation after future
pushes must be verified after its next normal restart. Until then, the operator
can fetch the published revision through the existing controller Git transport
and invoke the target's apply/observe interface with that revision, following
the host contract. Do not confuse a Git push with a deployed change.

Source checks: `node --check dist/app.js`, `git diff --check`; HTML checkbox IDs,
agent link, WebSite JSON-LD and sitemap XML validated. Checkbox count and saved
state after reload were verified in Chrome. Screenshot capture returned blank
images, so visual screenshot QA and mobile viewport QA remain unverified.
