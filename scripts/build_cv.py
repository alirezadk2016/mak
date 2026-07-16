import base64
photo = base64.b64encode(open('public/6F4611AC-9D3C-47F1-8BA0-49E69A35BCDE.jpeg','rb').read()).decode()
img = f"data:image/jpeg;base64,{photo}"
qr = open('scripts/_qr_b64.txt').read().strip()
qrimg = f"data:image/svg+xml;base64,{qr}"

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
.main {{ flex:1; padding:11mm 11mm 10mm; }}
.name {{ font-size:26pt; font-weight:800; letter-spacing:-.5px; color:#12212e; line-height:1; }}
.role {{ font-size:10.5pt; color:#c9a96e; font-weight:600; margin-top:1.5mm; letter-spacing:.3px; }}
.avail {{ font-size:8pt; color:#2f7d4f; font-weight:600; white-space:nowrap; }}
.profile {{ font-size:9pt; line-height:1.6; color:#3a3a3a; margin-top:4mm; }}
.m-h {{ font-size:14pt; font-weight:800; color:#12212e; margin:7mm 0 1mm; }}
.m-rule {{ height:2px; width:100%; background:#e4e0d8; margin-bottom:4mm; position:relative; }}
.m-rule:after {{ content:''; position:absolute; left:0; top:0; width:20mm; height:2px; background:#c9a96e; }}
.job {{ position:relative; padding-left:6mm; margin-bottom:4.5mm; }}
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
      <div class="k">Telefon</div><div class="v">+45 91 48 88 43</div>
      <div class="k">Email</div><div class="v">alirezadk2016@gmail.com</div>
      <div class="k">Web</div><div class="v">www.makvandi.dk</div>
      <div class="k">LinkedIn</div><div class="v">linkedin.com/in/alireza-makvandi</div>
      <div class="k">Adresse</div><div class="v">Aarhus, Danmark</div>
      <div class="k">Kørekort</div><div class="v">Kat. B</div>

      <div class="s-h">Uddannelse</div><div class="s-rule"></div>
      <div class="edu-y">2024 – 2026</div>
      <div class="edu-t">IT-supporter</div>
      <div class="edu-s">Aarhus Tech · færdig 19. maj 2026</div>
      <div class="edu-y">2020 – 2023</div>
      <div class="edu-t">HF &amp; VUC</div>
      <div class="edu-s">Aarhus HF &amp; VUC</div>
      <div class="edu-y">2018 – 2020</div>
      <div class="edu-t">IGU</div>
      <div class="edu-s">Nuuday A/S</div>
      <div class="edu-y">2016</div>
      <div class="edu-t">Sprogskole</div>
      <div class="edu-s">Dansk som nyt sprog</div>

      <div class="s-h">Sprog</div><div class="s-rule"></div>
      <div class="lang-row"><b>Persisk</b><span>Modersmål</span></div>
      <div class="lang-row"><b>Dansk</b><span>Flydende</span></div>
      <div class="lang-row"><b>Engelsk</b><span>Mellem</span></div>

      <div class="s-h">Kompetencer</div><div class="s-rule"></div>
      <span class="chip">Windows Server</span><span class="chip">Active Directory</span>
      <span class="chip">DNS / DHCP</span><span class="chip">Linux</span>
      <span class="chip">Netværk</span><span class="chip">Hardware</span>
      <span class="chip">Fejlfinding</span><span class="chip">Brugersupport</span>
      <span class="chip">Web Design</span><span class="chip">SEO</span>

      <div class="qr-box">
        <img class="qr" src="{qrimg}">
        <div class="qr-txt">Scan for<br>portfolio</div>
      </div>
    </div>
  </aside>

  <main class="main">
    <div class="name">Alireza Makvandi</div>
    <div class="role">IT-supporter · Aarhus &nbsp;<span class="avail">● Ledig — kan tiltræde straks</span></div>
    <p class="profile">Nyuddannet IT-supporter fra Aarhus Tech med praktisk erfaring i Windows, netværk, hardware og brugersupport. Jeg har næsten fire års erfaring med kundeservice og drift fra YouSee samt praktik hos Fourcom, hvor jeg arbejdede med opsætning, fejlfinding og reparation. Jeg lærer hurtigt, tager ansvar og trives med at hjælpe brugere på alle tekniske niveauer. Klar til at bidrage fra dag ét.</p>

    <div class="m-h">Erhvervserfaring</div><div class="m-rule"></div>

    <div class="job">
      <div class="j-y">2024 <span class="j-org">· Fourcom ApS</span></div>
      <div class="j-t">IT-support · Praktik</div>
      <ul>
        <li>Opsætning og installation af Windows samt klargøring af arbejdsstationer.</li>
        <li>Fejlfinding og reparation af hardware og komponenter.</li>
        <li>Brugersupport og teknisk dokumentation.</li>
      </ul>
    </div>

    <div class="job">
      <div class="j-y">2024 – 2026 <span class="j-org">· Aarhus Tech (del af uddannelsen)</span></div>
      <div class="j-t">Skolepraktik · IT Support</div>
      <ul>
        <li>Praktisk IT-support — bl.a. én dag om ugen på et plejehjem.</li>
        <li>Netværk, servere, sikkerhed og support i praksis.</li>
      </ul>
    </div>

    <div class="job">
      <div class="j-y">2017 – 2021 <span class="j-org">· YouSee / TDC</span></div>
      <div class="j-t">Studentermedhjælper · Kundeservice</div>
      <ul>
        <li>Kundeservice, drift og administration i næsten fire år.</li>
        <li>Bogføring og praktiske IT-opgaver i butikken.</li>
        <li>Modtog officiel anbefaling fra butikschefen.</li>
      </ul>
    </div>

    <div class="job">
      <div class="j-y">Sideløbende med studiet <span class="j-org">· Fritidsjob</span></div>
      <div class="j-t">Fritidsjob &amp; frivilligt arbejde</div>
      <ul>
        <li>Lagermedarbejder via vikarbureauet Moment (Salling Group, Søstrene Grene).</li>
        <li>Hjælpetræner i bokseklubben Champs Camp &amp; frisørassistent hos Frisør Katalina.</li>
        <li>Bred erfaring med ansvar, samarbejde og kundekontakt i danske arbejdsmiljøer.</li>
      </ul>
    </div>

    <div class="m-h">Personlige kvaliteter</div><div class="m-rule"></div>
    <ul>
      <li>Ansvarsfuld, hurtig til at lære og løsningsorienteret.</li>
      <li>Struktureret og professionel i kontakten med brugere og kunder.</li>
      <li>Tilpasningsdygtig — erfaring fra mange forskellige arbejdsmiljøer.</li>
    </ul>

    <div class="m-h">Reference</div><div class="m-rule"></div>
    <ul>
      <li>Anbefaling fra butikschef, YouSee — kan fremvises på forespørgsel.</li>
    </ul>
  </main>
</div>
</body></html>'''
open('scripts/cv.html','w').write(html)
print('written', len(html))
