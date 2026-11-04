# Delist — Swedish SEO opportunity review

**Site:** https://delist.1puni.com · **Date:** 2026-11-04 · **Mode:** read-only research. No repo files changed, no accounts created, no forms submitted, no DNS/deploy actions.

> **Scope of evidence.** All positional results below are **Brave Search** results (independent index), not Google. They are labelled as such and must not be reported as Google rankings. Google’s organic SERP could not be retrieved (JavaScript/consent wall), and **no keyword-volume or keyword-difficulty tool was accessible**. Volumes and KD are therefore **UNKNOWN** throughout.

---

## 1. Method, access, and what was actually verified

### 1.1 Live site

- `https://delist.1puni.com/` returns **HTTP 200**, 4,242 bytes, byte-identical to `dist/index.html`; valid TLS; HTTP/2 via nginx.
- Correct `lang="sv"`, self-referencing canonical, `robots.txt` allows all, sitemap present, five official links + operator item, no JS-dependent content.
- **Index status unknown.** The site was deployed today and no external index presence was observed. Brave’s `site:` query was rate-limited; Google SERP access was unavailable. This is not evidence of non-indexing.
- `/AGENTS.md` returns **200** but as `application/octet-stream` (browser download), not `text/plain`; a delivery nit, not a ranking issue.

### 1.2 Search access actually used

| Source | Access | Use |
|---|---|---|
| Brave Search HTML, `country=se`, `search_lang=sv`, `ui_lang=sv-SE` | Available 2026-11-04, ~15:07–15:15 UTC | Positional SERP sample; **not Google** |
| Google autocomplete, `hl=sv`, `gl=se` | Available | Phrase-existence and suggestion order only; **not volume** |
| Google organic SERP | Unavailable (JS/consent) | No Google rankings claimed |
| Google Keyword Planner / Ads | No account; unavailable | Volumes/KD **UNKNOWN** |
| Google Search Console | No property access | No impression/click data |
| Bing, DuckDuckGo, Mojeek, Ecosia, Google Trends | Bot challenge / 403 / 429 / degraded results | Discarded; not used as evidence |

**Bounded sample:** eight Swedish queries; six detailed below. Positions with gaps (e.g. 4, 10) are results Brave did not mark as organic web results; gaps are not counted as Delist opportunities.

### 1.3 Official endpoints checked today (2026-11-04)

| Service | URL checked | Result | What the official page says now |
|---|---|---|---|
| Ratsit | https://www.ratsit.se/tabort | 200 | BankID; “Det kan dröja upp till 24 timmar”; warns that deliveries, credit checks and similar services may be affected |
| Hitta | https://www.hitta.se/kontakta-oss/ta-bort-kontaktsida | 200 | Search your details and click “Ta bort”; explicitly warns: make the phone number secret with your operator, otherwise data may be republished on hitta.se and similar sites |
| Eniro | https://uppdatera.eniro.se/person | 200 | BankID; free self-service for private persons; says data can come “inklusive uppgifter från din teleoperatör”; company profiles are separate |
| MrKoll | https://mrkoll.se/om/ta-bort/ | 200 via translation proxy | BankID; remove your data; warns that services requiring address lookup/background checks may be affected; no processing time stated |
| Merinfo | https://www.merinfo.se/ta-bort-mina-uppgifter | 200 | Profile removed/unsearchable; **user account and company profiles remain** |

**MrKoll access note:** direct automated requests are blocked by Cloudflare (403), and this machine’s DNS returns a non-public address for the apex. The page was read through a Google Translate proxy on 2026-11-04. The separate MrKoll page `/om/andra-uppgifter/` is a *different* flow: hide phone number/distribution address, up to 7 days. Delist correctly links to `/om/ta-bort/`.

---

## 2. Prioritised Swedish keyword table

**Evidence codes:** **O** = observed positional Brave SERP, 2026-11-04. **A** = Google autocomplete only (phrase exists; no positions). **H** = hypothesis from intent and primary sources; no SERP captured. **X** = out of scope. Priority is fit × observed SERP weakness × demand signal — **not volume**, which is unknown.

| # | Phrase / cluster | Intent | Fit | Observed competing result types (Brave, 2026-11-04 unless marked) | Ev. | Priority and reason |
|---|---|---|---|---|---|---|
| 1 | `ta bort mig från mrkoll` | Transactional | 5 | Official **“Ändra uppgifter” #1** (not removal); Reddit #2; Aka guide #5; Doldadress #6; Lawline #7; Riksskydd #9 | O | **P1.** Top autocomplete after `ta bort mig från`. The correct official removal page `/om/ta-bort/` is absent from the top 10; a different official page, forums and paid services fill the gap. |
| 2 | `ta bort mig från ratsit` | Transactional | 5 | Paid Riksskydd #1; official **FAQ #2**; Reddit #3; Doldadress #5; Oico guide #6; Flashback #8; official `/tabort` not top 10 | O | **P1.** High-demand brand; a paid reseller outranks the official source, and the actual official removal page is not surfaced. Direct-link gap. |
| 3 | `ta bort mig från merinfo` | Transactional | 5 | Riksskydd #1; Osynlig #2; Doldadress #5; official `/om` #6; Reddit #8; Persondatakoll #11; official removal page absent top 15 | O | **P1.** Weakest official visibility of the five; commercial guides dominate. The official scope caveat (company profiles/accounts remain) is buried. |
| 4 | `ta bort mig från eniro` | Transactional | 5 | Riksskydd #1; official Eniro #2; Doldadress #3; Aka #5; Bredband #6; DFRI #7; InfoSkydd #9 | O | **P2.** Official page is strong at #2, but four paid services appear in the top 10. Good fit, harder SERP. |
| 5 | `ta bort mig från hitta` | Transactional | 5 | Official Hitta #1; Riksskydd #2; Doldadress #5; Aftonbladet #8; Hitta support #11 | O | **P3.** Official result owns #1 and matches intent well. Low probability of displacing it; use as a trust link, not a head-term target. |
| 6 | `ta bort personuppgifter från nätet gratis` | Informational / commercial investigation | 3 | **Skatteverket #1** (explains why public data cannot simply be removed); Bredband #2; Doldadress #5; Persondatakoll #6 (“Gratis guider · Inget konto”); Infoskydd #8; Riksskydd #9 | O | **P2.** Real demand, but broad “whole internet” intent exceeds Delist’s five-site scope. Needs an explicit scope caveat, not a promise. |
| 7 | `ta bort personuppgifter från nätet` | Broad informational | 3 | Same cluster plus DFRI #12 and Osynlig #13 | O | **P2.** Authority-heavy. Support with clear copy; do not create a second page. |
| 8 | `ta bort sig från söktjänster` | Collective checklist | 5 | **IMY #1** (right to have search results removed); Bredband #2; Infoskydd #3; Polisförbundet #5; Osynliga #6; IMY FAQ #8 | O | **P1.** Best fit on the page. The regulator dominates but offers no actionable per-site checklist. |
| 9 | `ta bort sig från ratsit mrkoll merinfo` | Collective long-tail | 5 | Reddit #7 on the Ratsit SERP; Reddit #8 on the Merinfo SERP; Pocketsafe #8 on the MrKoll SERP | O | **P1.** Exact multi-site intent; forums rank because no canonical checklist does. Delist’s core use case. |
| 10 | `hur tar man bort sig från ratsit mrkoll merinfo` | Question / collective | 5 | Reddit and guides; no positional SERP captured | A/H | **P2.** Natural question phrasing; same page can satisfy it. Potential snippet/answer surface, but no evidence yet. |
| 11 | `ta bort adress från internet` | Address exposure | 3 | Doldadress blog, DFRI, general guides; no positional SERP captured | A/H | **P2.** Autocomplete confirms the phrasing and “på nätet gratis”. Delist removes five profiles, not every address on the internet. |
| 12 | `ta bort adress mrkoll` / `… ratsit` / `… eniro` | Site-specific address | 4 | Official removal pages + guides; no positional SERP captured | A/H | **P2.** Strong autocomplete variants; fits profile removal. Long-tail rather than head. |
| 13 | `ta bort telefonnummer från nätet` | Phone exposure | 4 | Operator pages + removal guides; no positional SERP captured | A/H | **P2.** Ties directly to Hitta/Eniro profiles and the operator setting. Page already has the right links. |
| 14 | `ta bort telefonnummer från hitta` | Site-specific phone | 4 | Hitta official + guides; no positional SERP captured | A/H | **P3.** Covered by the Hitta link; no separate page justified. |
| 15 | `spärra nummerupplysning` | Operator privacy | 3 | Operator support pages, IMY, forums; no positional SERP captured | H | **P3.** Google autocomplete does **not** complete this phrase naturally (it returns unrelated “spärra telefonnummer/betaltjänster” suggestions). Keep one clarifying line, do not build content around it. |
| 16 | `dolt nummer` vs `nummerupplysning` | Confusion / operator | 4 | Telenor’s “hemligt och dolt nummer” guide; operator pages | H | **P3.** Large query family (`dolt nummer iphone/telia/tele2`), but the intent is caller ID, not directory removal. Clarify; do not target. |
| 17 | `ta bort mig från google` | Google delisting | 2 | Google Support, IMY, guides | O | **P3 / X.** Adjacent but separate: removes Google Search results, not the source page. One clarifying sentence; no target page. |
| 18 | `ta bort mig från birthday.se` / `lexbase` / `upplysning.se` | Adjacent sites | 2 | DFRI, forums, official sites | H | **X.** Outside the five-site scope. Adding per-site pages would be thin doorway content. |
| 19 | `delist` / `sluta hitta mig` | Brand / navigational | 5 | None observed | H | **P3.** Brand only; no meaningful volume expected. |

**Reading the table:** P1 clusters are those where the page exactly matches intent *and* the observed SERP leaves a real gap (official removal page missing, mis-targeted, or buried under paid/forum results). P2 clusters are good fit but have stronger official/authority competition or broader intent than the page can honestly satisfy. P3 is low fit or wrong intent; keep only a clarifying line. **No volume ranking is implied by this ordering.**

**Observed competitor pattern:** paid removal services (Riksskydd, Doldadress, Osynliga, InfoSkydd, TryggProfil, Persondatakoll, Aka), forums/Q&A (Reddit, Flashback, Lawline, SweClockers), official sites, government/regulator (Skatteverket, IMY, Konsumentverket, Polisförbundet), and media guides (Aftonbladet, SvD, PC för Alla). Delist’s differentiation is **free + official links + one checklist + no account**, not more text.

---

## 3. Observed SERP sample (six searches)

All observations: **Brave Search, country=SE, search_lang=sv, ui_lang=sv-SE, 2026-11-04**. These are Brave positions, not Google positions.

### 3.1 `ta bort mig från ratsit`

1. https://riksskydd.se/ta-bort-mig-fran-ratsit-se/ — paid service, 69 kr/month, but honestly describes the free official route first
2. https://www.ratsit.se/faq — official FAQ
3. https://www.reddit.com/r/sweden/comments/1f8kw5m/nu_finns_funktionen_ta_bort_mig_p%C3%A5_ratsit_hoppas/ — forum
5. https://www.doldadress.se/upplysningar/ratsit — paid service
6. https://oicointegrity.se/rykteshantering/ta-bort-personuppgifter-guide/ — guide
8. https://www.flashback.org/t3627568 — forum

**Gap:** the actual official removal page `ratsit.se/tabort` is **not in the top 10**; the paid reseller is #1. A free, direct link with “no account” is a genuine differentiator. **Caution:** Ratsit’s official page already warns about practical consequences (deliveries, credit checks); Delist should not pretend removal is consequence-free.

### 3.2 `ta bort mig från hitta`

1. https://www.hitta.se/kontakta-oss/ta-bort-kontaktsida — official
2. https://riksskydd.se/ta-bort-mig-fran-hitta-se/ — paid
5. https://www.doldadress.se/upplysningar/hitta — paid
8. https://www.aftonbladet.se/nyheter/a/VP03kl/sa-doljer-du-dina-uppgifter-pa-natet-steg-for-steg — paywalled media guide
11. https://support.hitta.se/faq/d%C3%B6lj-alla-mina-uppgifter-fr%C3%A5n-hitta.se — official support

**Gap:** official #1 is strong, but Hitta’s own page contains the crucial operator warning: *“Tänk på att även göra ditt telefonnummer hemligt hos din teleoperatör. Annars riskerar uppgifter att återpubliceras på hitta.se och andra liknande tjänster.”* Delist already includes that step; making it precise is a user-success advantage, not a ranking trick.

### 3.3 `ta bort mig från mrkoll`

1. https://mrkoll.se/om/andra-uppgifter/ — official, but this is **hide phone/distribution address**, not full profile removal
2. https://www.reddit.com/r/transnord/comments/1lnhn5w/ta_bort_sig_fr%C3%A5n_mrkoll_och_%C3%B6vriga_webbsidor/ — forum
5. https://www.aka.se/ta-bort-uppgifter-mrkoll/ — guide
7. https://lawline.se/answers/kan-man-ta-bort-sina-uppgifter-fran-mr-koll — Q&A
9. https://riksskydd.se/ta-bort-mig-fran-mrkoll-se/ — paid

**Gap:** the real removal page `https://mrkoll.se/om/ta-bort/` (verified 200 today, BankID) is **not in the top 10**. Brave serves the wrong official MrKoll page first. Delist’s direct link is materially more useful than the ranking result.

### 3.4 `ta bort mig från merinfo`

1. https://riksskydd.se/ta-bort-mig-fran-merinfo-se/ — paid
2. https://osynlig.se/artiklar/merinfo-ta-bort — paid/guide
5. https://www.doldadress.se/upplysningar/merinfo — paid
6. https://www.merinfo.se/om — official “about”, not removal
8. https://www.reddit.com/r/Asksweddit/comments/1mmturd/hur_tar_man_bort_sig_fr%C3%A5n_ratsit_mrkoll_merinfo/ — forum
11. https://persondatakoll.se/guider/merinfo — free-guide competitor

**Gap:** the official removal page is absent from the top 15. Merinfo’s own page says the profile disappears but **user account and company profiles remain**; that distinction belongs in Delist’s scope note, not in a new page.

### 3.5 `ta bort personuppgifter från nätet gratis`

1. https://www.skatteverket.se/privat/etjansterochblanketter/svarpavanligafragor/flyttfolkbokforing/faqfolkbokforing/kanjagfabortpubliceradepersonuppgifterpamig.5.46ae6b26141980f1e2d1b22.html — government, explains why public data is hard to remove
2. https://www.bredband.se/vanliga-fragor/ta-bort-personuppgifter-pa-natet — guide
5. https://www.doldadress.se/ — paid
6. https://persondatakoll.se/ — “Gratis guider · Inget konto · Ingen prenumeration”
8. https://infoskydd.se/artiklar/ta-bort-personuppgifter-fran-natet — guide
9. https://riksskydd.se/hur-tar-man-bort-sina-uppgifter-fran-natet/ — paid

**Gap:** the #1 result is a **scope mismatch** (government records, not site profiles), and the rest are guides/lead generation. A genuinely free checklist can compete, but must say plainly that it covers five search sites — not the whole internet, not government records.

### 3.6 `ta bort sig från söktjänster`

1. https://www.imy.se/privatperson/dataskydd/vi-guidar-dig/soktraffar/ — regulator
2. https://www.bredband.se/vanliga-fragor/ta-bort-personuppgifter-pa-natet — guide
3. https://infoskydd.se/artiklar/ta-bort-personuppgifter-fran-natet — guide
5. https://www.polisförbundet.se/arbetsmiljo-rattshjalp/hot-och-vald-mot-poliser/minska-din-synlighet-pa-internet — nonprofit guide
6. https://www.osynliga.se/ — paid
8. https://www.imy.se/vanliga-fragor-och-svar/kan-jag-krava-att-uppgifter-om-mig-tas-bort-fran-nummerupplysningstjanster-och-andra-soktjanster/ — regulator FAQ

**Gap:** the regulator ranks #1 and #8 but gives rights, not a five-site action list. This is Delist’s best collective query. It should link to IMY for rights, while keeping the checklist itself minimal.

### 3.7 Freshness and staleness of third-party instructions

- **DFRI** (https://www.dfri.se/sv/engagera-dig/hur-tar-jag-bort/) has **no visible date** and still describes MrKoll as “Via webbformulär” linking to `https://mrkoll.se/om/kundservice-kundkontakt/`. MrKoll’s current removal flow is BankID at `/om/ta-bort/`. DFRI’s Ratsit link (`/redigera/dolj`) does still redirect to `/tabort`, so not every old link is broken — but the MrKoll instruction is dated.
- **Aka.se** (https://www.aka.se/ta-bort-uppgifter-ratsit/) is dated 3 November 2026 and links to `ratsit.se/tabort`; fresh.
- **Osynliga** (https://www.osynliga.se/guider/ta-bort-ratsit) shows “Uppdaterad 2026-09-13”, charges a one-time fee, and openly says the official Ratsit flow is normally free.
- **Riksskydd** (https://riksskydd.se/ta-bort-mig-fran-ratsit-se/) has 2026 dates, describes the official free route accurately, then sells a 69 kr/month service. Its “50 000+ andra” claim is unverified; Delist should not imitate unverifiable social proof.
- **Persondatakoll** (https://persondatakoll.se/) is the closest positioning competitor: “Gratis guider · Inget konto · Ingen prenumeration”, with per-site guide pages. Delist’s edge must be **direct official links + one checklist + open source + zero tracking**, not merely “free”.

---

## 4. Whole-internet removal, Google, government, company records — scope separation

| Scope | What it actually is | Can Delist do it? | Evidence / citation |
|---|---|---|---|
| **Whole-internet removal** | Removing a person from every site and copy on the internet | **No.** Delist covers five named people-search sites. No single actor can guarantee whole-internet removal. | Google’s own removal doc distinguishes removing content you host from removing other people’s pages, and says permanent removal requires changing the source, password protection or `noindex` — https://developers.google.com/search/docs/crawling-indexing/remove-information |
| **Google Search delisting** | Hiding a URL from Google Search results; the source page can remain online | **Not covered by Delist’s five links.** Separate process. | Google’s Swedish “Resultat om dig” tool finds/removes contact details from Search results — https://support.google.com/websearch/answer/12719076?hl=sv. General private-information removal — https://support.google.com/websearch/answer/9673730?hl=sv. IMY on the right to have search results removed — https://www.imy.se/privatperson/dataskydd/vi-guidar-dig/soktraffar/ |
| **Government records** | Folkbokföring/SPAR and similar public registers | **No.** Not a website-profile removal. | Skatteverket: publications under *utgivningsbevis* fall outside GDPR; once data has been disclosed, Skatteverket “har inte längre någon kontroll” and cannot stop its use. Reklamspärr and NIX are marketing blocks, not removal — https://www.skatteverket.se/privat/etjansterochblanketter/svarpavanligafragor/flyttfolkbokforing/faqfolkbokforing/kanjagfabortpubliceradepersonuppgifterpamig.5.46ae6b26141980f1e2d1b22.html |
| **Company records** | Company profiles, board roles, registered addresses | **No.** Separate from private-person profiles. | Merinfo: company profiles remain searchable even if the person removes their profile — https://www.merinfo.se/ta-bort-mina-uppgifter. Eniro: self-service applies to private persons; company profiles use a separate service — https://uppdatera.eniro.se/person |
| **Supported scope** | Five sites’ **person profiles** + one mobile-operator directory setting | **Yes** | Ratsit, Hitta, Eniro, MrKoll, Merinfo pages above. |
| **Operator setting** | Prevent the operator from supplying the number to directory/search services | **Reminder only**; Delist does not change the setting | Hitta warns that without this, data can be republished — https://www.hitta.se/kontakta-oss/ta-bort-kontaktsida. Eniro says data can come from the operator. Telenor distinguishes three settings: *hemligt nummer*, *sökbart telefonnummer* (hide from Eniro/Hitta), and *tillfälligt dolt nummer* (caller ID only) — https://www.telenor.se/support/mobiltelefoni/guider/hemligt-dolt-nummer |

**Important legal nuance:** several of these sites publish under *utgivningsbevis*, which gives constitutional protection. IMY says you can still request erasure, but **“Rätten till radering innebär dock inte att du i alla situationer har rätt att få uppgifterna borttagna”**, and IMY cannot remove the data for you. Source (updated 30 October 2026): https://www.imy.se/vanliga-fragor-och-svar/kan-jag-krava-att-uppgifter-om-mig-tas-bort-fran-nummerupplysningstjanster-och-andra-soktjanster/

This is exactly why Delist should say “gäller söksajterna” and avoid “ta bort dig från nätet” claims.

---

## 5. Search volume and keyword difficulty

**Status: UNKNOWN.** No accessible source produced real Swedish search-volume data for this task.

- Google Keyword Planner requires a Google Ads account; none was used.
- Google Search Console has no verified property for this domain.
- Google Trends returned 429; third-party volume pages either require accounts or present unverifiable estimates.
- **No number in this report is a measurement of search volume or organic difficulty.** Suggested ranges from memory or model output would be fabricated and are deliberately omitted.

**Ads competition is not organic SEO difficulty.** Keyword Planner’s “Konkurrens” column sits alongside top-of-page bid estimates and describes the advertising auction; it is not a ranking-difficulty score. Google’s Keyword Planner help lists it among ad-side filters (average monthly searches, top-of-page bids, competition, impression share) — https://support.google.com/google-ads/answer/6325025. Do not reuse it as “KD”.

### Lightweight validation plan (no signup performed)

**A. Google Search Console — primary source of truth**

1. Create a **Domain property** for `1puni.com` or `delist.1puni.com`; verify by DNS TXT (dependency: DNS control).
2. Submit `https://delist.1puni.com/sitemap.xml`; use URL Inspection on `/` and request indexing.
3. Open **Performance → Search results**, filter **Country = Sweden**, **Search type = Web**, date range 28 days (then 3 months).
4. Record per query: impressions, clicks, CTR, average position. Export to a sheet and bucket into the clusters in §2.
5. Treat missing queries as **not yet observed**, not zero demand. Search Console omits low-volume/anonymised queries.
6. Baseline now (expected near-zero until indexing), then compare 28-day windows. Do not judge a title change from a few days of data.

**B. Google Keyword Planner — volume ranges only**

1. Google Ads → Tools → Keyword Planner → “Get search volume and forecasts”.
2. Location: **Sweden**; Language: **Swedish**; Search network: **Google**; date range: last 12 months.
3. Enter the exact phrases from §2; record **“Genomsnittliga sökningar per månad”** as the range shown, plus the 3-month trend and the date.
4. For discovery, use broad match; for reporting, exact match. Save the export.
5. Record “Konkurrens” only as **ads competition**, clearly labelled; do not convert it to organic KD.
6. If Keyword Planner shows “organic impression share”, record it separately as an estimate, not a ranking.

**C. Secondary signals (not volume)**

- Google autocomplete presence/order (used here) = phrase exists; not demand size.
- Google Trends = relative interest only; unavailable today (429). Never present index values as searches.
- Search Console query data after indexing is more decision-relevant than any third-party KD score.

**Access dependencies:** DNS TXT control (Search Console), a Google account, an Ads account for Keyword Planner (optional), and 4–8 weeks of indexing time. No accounts were created in this task.

---

## 6. Recommended title, meta description, and visible copy

### Title — recommend keeping the current one

**`Ta bort dig från Ratsit, Hitta & MrKoll – gratis | Delist`** (58 characters)

Why keep it:

- Google autocomplete for `ta bort mig från` orders suggestions: **mrkoll, ratsit, hitta.se, merinfo, eniro**. The title covers the top three brand queries and fits mobile SERP width.
- “Gratis” is the right differentiator against 69 kr/month services.
- Naming all five would overrun the title and truncate the useful part. All five are in the meta description and visible body.
- “Ta bort dig” is imperative and truthful; “Ta bort mig” would imply Delist performs the removal, which it does not.

**Caveat:** Google generates title links from the title, H1 and prominent page text, and may rewrite them — https://developers.google.com/search/docs/appearance/title-link. The H1 `SLUTA HITTA MIG.` is strong brand copy; monitor whether Google uses it as the title link before changing anything.

### Meta description

**`Fem officiella borttagningslänkar: Ratsit, Hitta, Eniro, MrKoll och Merinfo. BankID, checklista och tips om nummerupplysning. Gratis, utan konto.`** (145 characters)

Why: names all five, says “officiella”, covers BankID/checklist/operator, and states free/no account. Google may ignore or rewrite it when page content is more relevant — https://developers.google.com/search/docs/appearance/snippet.

### Visible copy — three short edits

**E1 — hero paragraph**

- Now: `Ta bort dig från Ratsit, Hitta, Eniro,<br>MrKoll och Merinfo. Gratis.`
- Recommended: `Ta bort dig från Ratsit, Hitta, Eniro,<br>MrKoll och Merinfo. Officiella länkar. Gratis.`

Why: one added word signals the key difference from paid intermediaries, without adding a sentence.

**E2 — operator item**

- Now: `Stäng av delning till nummerupplysning hos din mobiloperatör.`
- Recommended: `Gör numret osökbart hos operatören (nummerupplysning). Inte samma sak som dolt nummer.`

Why: matches Telenor’s actual settings and prevents the common mistake of enabling caller-ID hiding, which “påverkar inte sökbarhet på nummerupplysningen” (Telenor). It also keeps the Swedish term “nummerupplysning” visible.

**E3 — scope note**

- Now: `Gäller söksajterna, inte myndigheternas register.`
- Recommended: `Gäller söksajterna – inte myndighetsregister, företagsprofiler eller Google.`

Why: honest scope separation for the three adjacent intents that otherwise cause disappointing clicks; it also answers the “Google?” question without building a Google page.

All three keep the page a one-screen checklist. No new sections, no keyword blocks.

---

## 7. `/AGENTS.md` and JSON-LD: discovery vs ranking

### `/AGENTS.md`

- It is a **normal crawlable URL**: linked in the footer, allowed by `robots.txt`, returns 200. Google can discover and index it as a page, so it may appear for brand/agent queries. That is **discovery of that file**, not a ranking signal for `/`.
- It has **no special Google status**. Google’s AI guidance explicitly says: *“LLMS.txt files and other ‘special’ markup: You don’t need to create new machine readable files, AI text files, markup, or Markdown to appear in Google Search … Google Search itself doesn’t use them.”* — https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- Serving it as `application/octet-stream` may make browsers download it rather than render it. If agent/human readability matters, serve `text/plain` or `text/markdown`. This is a delivery nit, not an SEO fix.

**Verdict:** `/AGENTS.md` helps agents use the checklist. It is not, and should not be presented as, an SEO ranking mechanism.

### JSON-LD `WebSite`

- The markup is valid and truthful. Google documents structured data as a way to help it understand page content and become eligible for **rich results**, not as a ranking boost — https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- Google’s AI guidance adds: *“Structured data isn’t required for generative AI search, and there’s no special schema.org markup you need to add … it helps with being eligible for rich results.”*
- This one-page checklist has no applicable `WebSite` rich result (no search action, no sitelinks search box), so expect **no visible SERP change**. Keep it because it is accurate and harmless; do not add `Review`, `AggregateRating` or `FAQPage` markup just for SEO.

**Discovery vs ranking, in one line:** sitemaps and crawlable links help Google *find* URLs; structured data helps Google *understand* pages and qualify for features; neither guarantees indexing or ranking. Google states indexing and serving are not guaranteed — https://developers.google.com/search/docs/appearance/ai-features. Ranking still depends on the page’s usefulness and the links/authority behind it.

---

## 8. Minimal next-step plan, ranked by expected usefulness

| Rank | Action | Expected usefulness | Dependency / note |
|---|---|---|---|
| 1 | Verify **Search Console** domain property, submit sitemap, inspect `/`, request indexing | **Highest.** Without indexing and query data, nothing else can be evaluated; this is the only way to see Swedish impressions/clicks/positions | DNS TXT access + Google account. Do not infer indexing from a Git push or a 200 response |
| 2 | Ship the title/meta/copy edits in §6 | High, low effort. Improves snippet clarity and click-through against paid “gratis” competitors | Repo access + V approval; keep the page tiny |
| 3 | Add a normal link from **1puni.com** (projects/homepage) to Delist, and confirm the GitHub README link | Medium-high. Discovery and a relevant owned-site link; no bought links, no directory spam | 1puni site access; GitHub repo already links out |
| 4 | Re-check all five official URLs monthly and add a visible “Senast kontrollerad 2026-11-04” line | Medium. Trust and accuracy; prevents the DFRI-style stale-instruction problem. Not a ranking factor | Manual; MrKoll needs a browser/translation-proxy check because of Cloudflare |
| 5 | After 28 days, review Search Console by query cluster; adjust title/description only where impressions exist and CTR is weak | Medium. Data-driven iteration; avoids guessing | Search Console data; 4–8 weeks |
| 6 | Keep the operator item as one precise line; add operator-specific detail only if Search Console shows real operator-query impressions | Low-medium. The page’s uniqueness includes the operator reminder, but the query family is dominated by caller-ID intent | Search Console evidence; V approval |
| 7 | Serve `/AGENTS.md` as `text/plain`/`text/markdown` | Low. Agent/browser usability; no ranking effect | Repo/deploy |

**Not in this plan:** buying links, creating per-site landing pages, mass directory submissions, review schema, or automation that creates accounts. All would violate the brief and/or Google’s spam policies.

---

## 9. What not to do

- **No per-site doorway pages.** Five thin pages “Ta bort från Ratsit”, “Ta bort från Hitta”, etc. would compete with each other and with the official sources. Google’s spam policies describe doorway pages as multiple similar pages created to rank for specific queries — https://developers.google.com/search/docs/essentials/spam-policies#doorway-pages
- **No whole-internet or Google-removal promises.** Delist removes nothing itself and covers five sites’ person profiles. Say so.
- **No fabricated reviews, ratings, “50 000+ nöjda” claims, or `AggregateRating` markup.** None of it is verifiable, and review rich results have their own eligibility rules.
- **No volume or KD numbers without a cited source, location/language, metric and date.** Ads competition is not organic difficulty.
- **No “we rank #1” or “automatic ranking” claims.** This report is an opportunity assessment, not evidence of improved rankings.
- **Do not treat Brave positions as Google positions.** They are a useful independent sample, not a Google ranking measurement.

---

## 10. Bottom line

The strongest, most honest opportunity is **not** to out-rank Ratsit, Hitta or Eniro on their own brand terms. It is to own the **collective, free, official-link checklist intent** — `ta bort sig från söktjänster`, `ta bort sig från ratsit mrkoll merinfo`, and the site-specific queries where the official removal page is missing or mis-targeted (notably MrKoll, Ratsit and Merinfo).

The page is technically clean and already well aimed. The highest-value work is: **get it indexed and measured**, **make the free/official/no-account difference visible in the snippet**, and **keep the five-link checklist tiny**. The operator line is valuable for user success but is a weak SEO target; keep it as one precise sentence, not a content section.
