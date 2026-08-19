import base64
photo = base64.b64encode(open('public/6F4611AC-9D3C-47F1-8BA0-49E69A35BCDE.jpeg','rb').read()).decode()
img = f"data:image/jpeg;base64,{photo}"
# Inline stroke icons (currentColor = gold via .c-ic)
_s = 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"'
IC_PHONE = f'<svg viewBox="0 0 24 24" {_s}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/></svg>'
IC_MAIL = f'<svg viewBox="0 0 24 24" {_s}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>'
IC_WEB = f'<svg viewBox="0 0 24 24" {_s}><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z"/></svg>'
IC_IN = f'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.76-1.95 4.02 0 4.76 2.5 4.76 5.76V21h-4v-5c0-1.2-.02-2.74-1.9-2.74s-2.17 1.3-2.17 2.65V21H9z"/></svg>'
IC_PIN = f'<svg viewBox="0 0 24 24" {_s}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>'
IC_CAR = f'<svg viewBox="0 0 24 24" {_s}><path d="M5 13l1.5-4.5A2 2 0 0 1 8.4 7h7.2a2 2 0 0 1 1.9 1.5L19 13m-14 0h14m-14 0v4m14-4v4M6 17h1m10 0h1"/><circle cx="7.5" cy="17" r="1.2"/><circle cx="16.5" cy="17" r="1.2"/></svg>'

html = f'''<!doctype html>
<html lang="da"><head><meta charset="utf-8">
<style>
@page {{ size: A4; margin: 0; }}
* {{ margin:0; padding:0; box-sizing:border-box; }}
html,body {{ font-family:'Helvetica Neue',Arial,sans-serif; color:#1c1c1c; -webkit-print-color-adjust:exact; print-color-adjust:exact; }}
.page {{ width:210mm; min-height:297mm; display:flex; }}
/* Sidebar */
.side {{ width:70mm; background:#12212e; color:#e8e2d8; padding:0 0 5mm; }}
.photo-wrap {{ background:#0d1922; padding:6mm 0 5mm; text-align:center; }}
.photo {{ width:33mm; height:33mm; border-radius:50%; object-fit:cover; border:2px solid #c9a96e; }}
.side-inner {{ padding:0 8mm; }}
.s-h {{ font-size:12pt; font-weight:700; letter-spacing:.5px; margin:4mm 0 1.5mm; color:#fff; }}
.s-h:first-of-type {{ margin-top:4mm; }}
.s-rule {{ height:2px; width:14mm; background:#c9a96e; margin-bottom:3.5mm; }}
.k {{ font-size:9.5pt; font-weight:700; color:#fff; margin-top:2mm; }}
.v {{ font-size:8.5pt; color:#b9c4cd; line-height:1.5; word-break:break-word; }}
.c-item {{ display:flex; align-items:flex-start; gap:2.5mm; margin-top:2.6mm; }}
.c-ic {{ flex-shrink:0; width:3.6mm; height:3.6mm; margin-top:.4mm; color:#c9a96e; }}
.c-ic svg {{ width:100%; height:100%; display:block; }}
.c-k {{ font-size:8pt; font-weight:700; color:#fff; letter-spacing:.2px; }}
.c-v {{ font-size:8pt; color:#b9c4cd; line-height:1.4; word-break:break-word; display:block; text-decoration:none; }}
a.c-v {{ color:#b9c4cd; }}
.sk-g {{ font-size:7.5pt; font-weight:700; color:#c9a96e; letter-spacing:.4px; text-transform:uppercase; margin:3mm 0 1.5mm; }}
.sk-g:first-of-type {{ margin-top:0; }}
.edu-y {{ font-size:8pt; color:#c9a96e; font-weight:600; margin-top:2.3mm; }}
.edu-t {{ font-size:9pt; font-weight:700; color:#fff; line-height:1.35; }}
.edu-s {{ font-size:8pt; color:#b9c4cd; }}
.lang-row {{ display:flex; justify-content:space-between; font-size:8.5pt; margin-top:2.5mm; }}
.lang-row b {{ color:#fff; font-weight:600; }}
.lang-row span {{ color:#b9c4cd; }}
.chip {{ display:inline-block; font-size:7.5pt; color:#d8cfc0; border:1px solid #3a4b58; border-radius:20px; padding:1.5mm 3mm; margin:0 1.5mm 1.5mm 0; }}
.qr-box {{ display:flex; align-items:center; gap:3mm; margin-top:3.5mm; padding-top:3mm; border-top:1px solid #2a3a47; }}
.qr {{ width:17mm; height:17mm; background:#fff; padding:1mm; border-radius:2mm; }}
.qr-txt {{ font-size:8pt; color:#c9a96e; font-weight:600; line-height:1.4; }}
/* Main */
.main {{ flex:1; padding:10mm 11mm 8mm; }}
.name {{ font-size:26pt; font-weight:800; letter-spacing:-.5px; color:#12212e; line-height:1; }}
.role {{ font-size:10.5pt; color:#c9a96e; font-weight:600; margin-top:1.5mm; letter-spacing:.3px; }}
.avail {{ font-size:7.5pt; color:#2f7d4f; font-weight:700; white-space:nowrap; background:#e8f3ec; border:1px solid #bfe0cc; border-radius:20px; padding:1mm 2.5mm; letter-spacing:.2px; }}
.profile {{ font-size:9pt; line-height:1.55; color:#3a3a3a; margin-top:3mm; }}
.m-h {{ font-size:13.5pt; font-weight:800; color:#12212e; margin:2.8mm 0 1mm; }}
.m-rule {{ height:2px; width:100%; background:#e4e0d8; margin-bottom:2.4mm; position:relative; }}
.m-rule:after {{ content:''; position:absolute; left:0; top:0; width:20mm; height:2px; background:#c9a96e; }}
.job {{ position:relative; padding-left:6mm; margin-bottom:2.8mm; }}
.job:before {{ content:''; position:absolute; left:0; top:1.5mm; width:2.5mm; height:2.5mm; border-radius:50%; background:#c9a96e; }}
.job:after {{ content:''; position:absolute; left:1.1mm; top:4mm; bottom:-3mm; width:1px; background:#e0dcd3; }}
.job:last-child:after {{ display:none; }}
.j-y {{ font-size:8pt; font-weight:700; color:#12212e; }}
.j-org {{ font-size:8.5pt; color:#8a8a8a; }}
.j-t {{ font-size:10.5pt; font-weight:700; color:#1c1c1c; margin:.5mm 0 1.5mm; }}
.j-t span {{ font-weight:400; color:#c9a96e; font-size:9pt; }}
ul {{ margin-left:4mm; }}
li {{ font-size:8.5pt; line-height:1.5; color:#3a3a3a; margin-bottom:.8mm; }}
</style></head>
<body>
<div class="page">
  <aside class="side">
    <div class="photo-wrap"><img class="photo" src="{img}"></div>
    <div class="side-inner">
      <div class="s-h">Kontakt</div><div class="s-rule"></div>
      <div class="c-item"><span class="c-ic">{IC_PHONE}</span><div><div class="c-k">Telefon</div><a class="c-v" href="tel:+4591488843">+45 91 48 88 43</a></div></div>
      <div class="c-item"><span class="c-ic">{IC_MAIL}</span><div><div class="c-k">Email</div><a class="c-v" href="mailto:alirezadk2016@gmail.com">alirezadk2016@gmail.com</a></div></div>
      <div class="c-item"><span class="c-ic">{IC_WEB}</span><div><div class="c-k">Web</div><a class="c-v" href="https://www.makvandi.dk">www.makvandi.dk</a></div></div>
      <div class="c-item"><span class="c-ic">{IC_IN}</span><div><div class="c-k">LinkedIn</div><a class="c-v" style="word-break:normal;overflow-wrap:break-word;font-size:7.5pt" href="https://dk.linkedin.com/in/alireza-makvandi-446704301">linkedin.com/in/<wbr>alireza-makvandi-<wbr>446704301</a></div></div>
      <div class="c-item"><span class="c-ic">{IC_PIN}</span><div><div class="c-k">Adresse</div><div class="c-v">Aarhus N, 8200</div></div></div>

      <div class="s-h">Uddannelse</div><div class="s-rule"></div>
      <div class="edu-y">2024 – 2026</div>
      <div class="edu-t">IT-supporter</div>
      <div class="edu-s">Aarhus Tech · færdig 19. maj 2026</div>
      <div class="edu-y">2020 – 2023</div>
      <div class="edu-t">HF &amp; VUC</div>
      <div class="edu-s">Aarhus HF &amp; VUC</div>
      <div class="edu-y">2018 – 2020</div>
      <div class="edu-t">IGU</div>
      <div class="edu-s">Nuuday A/S (YouSee)</div>
      <div class="edu-y">2016</div>
      <div class="edu-t">Sprogskole</div>
      <div class="edu-s">Dansk som andetsprog</div>

      <div class="s-h">Sprog</div><div class="s-rule"></div>
      <div class="lang-row"><b>Persisk</b><span>Modersmål</span></div>
      <div class="lang-row"><b>Dansk</b><span>Flydende</span></div>
      <div class="lang-row"><b>Engelsk</b><span>Flydende</span></div>

      <div class="s-h">Kompetencer</div><div class="s-rule"></div>
      <div class="sk-g">Support</div>
      <span class="chip">Førstelinjesupport</span><span class="chip">Fejlfinding</span>
      <span class="chip">Windows 10/11</span><span class="chip">Microsoft 365</span>
      <span class="chip">Hardware</span>
      <div class="sk-g">Systemer &amp; Netværk</div>
      <span class="chip">Windows Server</span><span class="chip">Active Directory</span>
      <span class="chip">DNS / DHCP</span><span class="chip">TCP/IP</span>
      <span class="chip">LAN / Wi-Fi</span>
    </div>
  </aside>

  <main class="main">
    <div class="name">Alireza Makvandi</div>
    <div class="role">IT-Supporter · Aarhus</div>
    <div style="margin:1.5mm 0 0"><span class="avail">Kan tiltræde straks</span></div>
    <p class="profile"><b>Fra kundeservice hos YouSee til at bygge netværk fra bunden — jeg løser det, uanset om problemet sidder hos en bruger eller i en switch.</b> Jeg er nyuddannet IT-supporter fra Aarhus Tech. Under uddannelsen har jeg ydet support til brugere på bl.a. plejehjem og skoler, og til min svendeprøve byggede jeg et komplet netværk med Windows Server og Active Directory. Jeg har desuden næsten fire års erfaring med kundeservice fra YouSee, så jeg er vant til at hjælpe mennesker, også når der er travlt. Jeg søger en stilling som IT-supporter eller servicedesk-medarbejder.</p>

    <div class="m-h">Erhvervserfaring</div><div class="m-rule"></div>

    <div class="job">
      <div class="j-y">2024 – 2026 <span class="j-org">· Aarhus Tech (del af uddannelsen)</span></div>
      <div class="j-t">Skoleoplæring · IT-support</div>
      <ul>
        <li>Førstelinjesupport ved skolens Tech Desk, typisk 5-20 henvendelser om dagen: Wi-Fi, login, printere og Windows.</li>
        <li>Reparation af skolens computere og klargøring af netværksudstyr til elevprojekter.</li>
        <li>Ydede IT-support på plejehjem én dag om ugen i flere måneder samt teknisk support under eksamener.</li>
      </ul>
    </div>

    <div class="job">
      <div class="j-y">aug. – okt. 2024 <span class="j-org">· Fourcom ApS</span></div>
      <div class="j-t">IT-support · Praktik</div>
      <ul>
        <li>Klargjorde arbejdsstationer med Windows-installation, ofte over 40 maskiner om dagen.</li>
        <li>Fejlfinding og reparation af hardware, typisk 3-10 maskiner om dagen.</li>
        <li>Brugersupport og teknisk dokumentation.</li>
      </ul>
    </div>

    <div class="job">
      <div class="j-y">2017 – 2021 <span class="j-org">· YouSee / TDC</span></div>
      <div class="j-t">Kundeservice &amp; Administration · IGU-forløb og deltidsjob</div>
      <ul>
        <li>Kundeservice, drift og administration i butikken i næsten fire år (2017-2021).</li>
        <li>Bogføring og praktiske IT-opgaver i butikken.</li>
        <li>Resultat: fastholdt gennem hele perioden og modtog en skriftlig anbefaling fra butikschefen for min indsats.</li>
      </ul>
    </div>

    <div class="job">
      <div class="j-y">Sideløbende med studiet <span class="j-org">· Fritidsjob</span></div>
      <div class="j-t">Servicejob &amp; lagerarbejde</div>
      <ul>
        <li>Bl.a. hos Palmgren Erhvervsrengøring og vikarbureauet Moment (Salling Group, Søstrene Grene).</li>
      </ul>
    </div>

    <div class="m-h">Projekter</div><div class="m-rule"></div>
    <div class="job">
      <div class="j-y">2026 <span class="j-org">· Svendeprøve</span></div>
      <div class="j-t">Netværksinfrastruktur fra bunden</div>
      <ul>
        <li>Opsætning af komplet netværk med Windows Server, Active Directory, DNS/DHCP samt brugere og afdelinger.</li>
        <li>Dokumentation og fejlfinding af hele opsætningen.</li>
      </ul>
    </div>

    <div class="m-h">Personlige kvaliteter</div><div class="m-rule"></div>
    <ul>
      <li>Rolig og struktureret, også når der er travlt og mange henvendelser.</li>
      <li>Vant til at forklare teknik i et forståeligt sprog for alle brugere.</li>
      <li>Analytisk tilgang: jeg kan godt lide at finde ud af, hvorfor noget ikke virker.</li>
    </ul>

    <div class="m-h">Referencer</div><div class="m-rule"></div>
    <ul>
      <li>Skriftlige anbefalinger fra <b>Aarhus Tech</b>, <b>Fourcom ApS</b> og <b>YouSee</b> kan fremvises på forespørgsel.</li>
    </ul>
  </main>
</div>
</body></html>'''
open('scripts/cv.html','w').write(html)
print('written', len(html))
