export type GlossaryTerm = {
  slug: string
  name: string
  full?: string
  category: { da: string; en: string }
  accent: string
  what: { da: string; en: string }
  why: { da: string; en: string }
  how: { da: string; en: string }
  related: string[]
}

export const glossary: GlossaryTerm[] = [
  {
    slug: 'dhcp',
    name: 'DHCP',
    full: 'Dynamic Host Configuration Protocol',
    category: { da: 'Netværk', en: 'Networking' },
    accent: '#3E9BD6',
    what: {
      da: 'DHCP er den service, der automatisk giver hver enhed på et netværk en IP-adresse, så den kan kommunikere med andre. Uden DHCP skulle man taste adresser ind manuelt på hver eneste computer, printer og telefon.',
      en: 'DHCP is the service that automatically gives every device on a network an IP address so it can communicate with others. Without DHCP you would have to type in addresses manually on every single computer, printer and phone.',
    },
    why: {
      da: 'Tænk på DHCP som en receptionist på et hotel: Hver gæst (enhed) får automatisk tildelt et ledigt værelsesnummer (IP-adresse), når de tjekker ind. Det sparer tid og forhindrer, at to enheder får den samme adresse — hvilket ellers ville skabe konflikter på netværket.',
      en: 'Think of DHCP as a hotel receptionist: every guest (device) automatically gets a free room number (IP address) when checking in. It saves time and prevents two devices getting the same address — which would otherwise create conflicts on the network.',
    },
    how: {
      da: 'I min svendeprøve satte jeg en DHCP-server op på Windows Server, som automatisk tildelte IP-adresser til klienter i flere forskellige VLAN’er — med reservationer til servere og korrekt scope-opsætning pr. afdeling.',
      en: 'In my final exam project I set up a DHCP server on Windows Server that automatically assigned IP addresses to clients across several VLANs — with reservations for servers and correct scope configuration per department.',
    },
    related: ['dns', 'vlan', 'windows-server'],
  },
  {
    slug: 'dns',
    name: 'DNS',
    full: 'Domain Name System',
    category: { da: 'Netværk', en: 'Networking' },
    accent: '#3E9BD6',
    what: {
      da: 'DNS oversætter navne, mennesker kan huske (som yousee.dk), til IP-adresser, computere bruger. Hver gang du åbner en hjemmeside, slår din computer først navnet op via DNS.',
      en: 'DNS translates names humans can remember (like yousee.dk) into IP addresses computers use. Every time you open a website, your computer first looks up the name via DNS.',
    },
    why: {
      da: 'DNS er internettets telefonbog. Virker DNS ikke, føles det som om “internettet er nede” — selvom forbindelsen er fin. Derfor er DNS-fejlfinding (fx med nslookup) en af de første ting, en IT-supporter tjekker.',
      en: 'DNS is the phone book of the internet. If DNS fails, it feels like “the internet is down” — even though the connection is fine. That is why DNS troubleshooting (e.g. with nslookup) is one of the first things an IT supporter checks.',
    },
    how: {
      da: 'I min svendeprøve konfigurerede jeg DNS på Windows Server med forward- og reverse lookup-zoner og testede navneopslag med nslookup — både navn-til-IP og IP-til-navn.',
      en: 'In my final exam project I configured DNS on Windows Server with forward and reverse lookup zones and tested name resolution with nslookup — both name-to-IP and IP-to-name.',
    },
    related: ['dhcp', 'active-directory', 'windows-server'],
  },
  {
    slug: 'active-directory',
    name: 'Active Directory',
    full: 'Microsoft Active Directory (AD)',
    category: { da: 'Server', en: 'Server' },
    accent: '#C9A96E',
    what: {
      da: 'Active Directory er Microsofts system til at styre brugere, computere og rettigheder centralt i en virksomhed. Én database holder styr på, hvem der må logge ind, og hvad de må få adgang til.',
      en: 'Active Directory is Microsoft’s system for managing users, computers and permissions centrally in a company. One database keeps track of who can log in and what they can access.',
    },
    why: {
      da: 'Uden AD skulle IT-afdelingen oprette brugere manuelt på hver enkelt maskine. Med AD kan en ny medarbejder logge ind på alle virksomhedens computere fra dag ét — og mister man sin adgang, lukkes den ét sted. Det er rygraden i næsten alle danske virksomheders IT.',
      en: 'Without AD, the IT department would have to create users manually on every single machine. With AD a new employee can log in on all company computers from day one — and access is revoked in one place. It is the backbone of IT in almost every Danish company.',
    },
    how: {
      da: 'I min svendeprøve byggede jeg et komplet AD-miljø med domæne, organisatoriske enheder (OU’er) pr. afdeling, brugere, sikkerhedsgrupper og fællesmapper med korrekte rettigheder — plus en ekstra domænecontroller (DC02) som backup.',
      en: 'In my final exam project I built a complete AD environment with a domain, organizational units (OUs) per department, users, security groups and shared folders with correct permissions — plus a second domain controller (DC02) as backup.',
    },
    related: ['windows-server', 'gpo', 'dns'],
  },
  {
    slug: 'windows-server',
    name: 'Windows Server',
    category: { da: 'Server', en: 'Server' },
    accent: '#C9A96E',
    what: {
      da: 'Windows Server er Microsofts styresystem til servere — de maskiner, der leverer services som login, filer, print og netværksstyring til alle virksomhedens computere.',
      en: 'Windows Server is Microsoft’s operating system for servers — the machines that deliver services like login, files, print and network management to all company computers.',
    },
    why: {
      da: 'Hvor en almindelig pc betjener én bruger, betjener en server hele organisationen på én gang. Roller som Active Directory, DNS og DHCP kører typisk på Windows Server — derfor er det et af de vigtigste værktøjer for en IT-supporter at kende.',
      en: 'Where a normal PC serves one user, a server serves the whole organization at once. Roles like Active Directory, DNS and DHCP typically run on Windows Server — which makes it one of the most important tools for an IT supporter to know.',
    },
    how: {
      da: 'Jeg har installeret og konfigureret Windows Server i mit svendeprøve-miljø: to domænecontrollere, filserver med fællesmapper og private mapper samt DNS- og DHCP-roller — alt sammen virtualiseret på ESXi.',
      en: 'I installed and configured Windows Server in my final exam environment: two domain controllers, a file server with shared and private folders, and DNS and DHCP roles — all virtualized on ESXi.',
    },
    related: ['active-directory', 'virtualisering', 'gpo'],
  },
  {
    slug: 'gpo',
    name: 'GPO',
    full: 'Group Policy Objects',
    category: { da: 'Server', en: 'Server' },
    accent: '#C9A96E',
    what: {
      da: 'GPO’er er regler, man sætter centralt i Active Directory, som automatisk gælder for brugere og computere. Fx: skrivebordsbaggrund, adgangskodekrav, eller hvilke programmer der må installeres.',
      en: 'GPOs are rules set centrally in Active Directory that automatically apply to users and computers. For example: desktop wallpaper, password requirements, or which programs may be installed.',
    },
    why: {
      da: 'Forestil dig at skulle ændre en indstilling på 200 computere manuelt. Med en GPO gør du det én gang, og reglen ruller automatisk ud til alle. Det sparer enormt meget tid og sikrer, at alle maskiner følger virksomhedens sikkerhedspolitik.',
      en: 'Imagine changing a setting on 200 computers manually. With a GPO you do it once, and the rule rolls out to everyone automatically. It saves enormous time and ensures every machine follows company security policy.',
    },
    how: {
      da: 'I min svendeprøve oprettede jeg GPO’er til bl.a. drevtilknytning af fællesmapper pr. afdeling og grundlæggende sikkerhedsindstillinger — testet med gpupdate og gpresult.',
      en: 'In my final exam project I created GPOs for department share drive mapping and basic security settings — tested with gpupdate and gpresult.',
    },
    related: ['active-directory', 'windows-server'],
  },
  {
    slug: 'vlan',
    name: 'VLAN',
    full: 'Virtual Local Area Network',
    category: { da: 'Netværk', en: 'Networking' },
    accent: '#3E9BD6',
    what: {
      da: 'Et VLAN opdeler ét fysisk netværk i flere adskilte, logiske netværk. Selvom alle sidder på samme switch, kan fx administration, salg og gæster holdes helt adskilt fra hinanden.',
      en: 'A VLAN divides one physical network into several separate, logical networks. Even if everyone is on the same switch, administration, sales and guests can be kept completely separate.',
    },
    why: {
      da: 'VLAN’er handler om sikkerhed og orden: En gæst på gæstenetværket skal ikke kunne nå økonomiafdelingens filer. Samtidig begrænser VLAN’er broadcast-trafik, så netværket kører mere effektivt.',
      en: 'VLANs are about security and order: a guest on the guest network should not be able to reach the finance department’s files. VLANs also limit broadcast traffic, so the network runs more efficiently.',
    },
    how: {
      da: 'I min svendeprøve konfigurerede jeg VLAN’er pr. afdeling på switchen med tilhørende gateways og routing via pfSense — inkl. fejlfinding af et VLAN-mismatch, der skulle rettes, før forbindelserne virkede.',
      en: 'In my final exam project I configured VLANs per department on the switch with matching gateways and routing via pfSense — including troubleshooting a VLAN mismatch that had to be fixed before connections worked.',
    },
    related: ['firewall', 'dhcp', 'lan-wlan'],
  },
  {
    slug: 'vpn',
    name: 'VPN',
    full: 'Virtual Private Network',
    category: { da: 'Sikkerhed', en: 'Security' },
    accent: '#2E7D32',
    what: {
      da: 'En VPN skaber en krypteret “tunnel” mellem din enhed og et andet netværk — fx virksomhedens. Alt, der sendes gennem tunnelen, er beskyttet mod at blive aflyttet.',
      en: 'A VPN creates an encrypted “tunnel” between your device and another network — e.g. the company’s. Everything sent through the tunnel is protected from eavesdropping.',
    },
    why: {
      da: 'Hjemmearbejde er i dag normalt i Danmark — og VPN er det, der gør det sikkert. Medarbejderen kan nå interne systemer hjemmefra, som om de sad på kontoret, uden at data ligger åbent på internettet.',
      en: 'Working from home is normal in Denmark today — and VPN is what makes it secure. Employees can reach internal systems from home as if they were in the office, without data being exposed on the internet.',
    },
    how: {
      da: 'Gennem min uddannelse på Aarhus Tech har jeg arbejdet med opsætning af VPN-forbindelser og forstår principperne bag kryptering, tunneling og fjernadgang til virksomhedsnetværk.',
      en: 'Through my education at Aarhus Tech I have worked with setting up VPN connections and understand the principles of encryption, tunneling and remote access to company networks.',
    },
    related: ['firewall', 'vlan'],
  },
  {
    slug: 'firewall',
    name: 'Firewall',
    category: { da: 'Sikkerhed', en: 'Security' },
    accent: '#2E7D32',
    what: {
      da: 'En firewall er netværkets dørmand: Den kigger på al trafik, der vil ind eller ud, og tillader kun det, reglerne siger god for. Alt andet bliver blokeret.',
      en: 'A firewall is the network’s doorman: it inspects all traffic going in or out and only allows what the rules approve. Everything else is blocked.',
    },
    why: {
      da: 'Uden firewall står virksomhedens netværk åbent for angreb udefra. Med gennemtænkte regler kan man fx tillade hjemmesidetrafik, men blokere alt andet — og styre præcist, hvilke afdelinger der må tale med hinanden.',
      en: 'Without a firewall the company network is open to attacks from outside. With well-designed rules you can allow web traffic but block everything else — and control exactly which departments may talk to each other.',
    },
    how: {
      da: 'I min svendeprøve installerede og konfigurerede jeg pfSense som firewall og router mellem VLAN’erne og internettet — inkl. regler for, hvilken trafik der måtte passere mellem afdelingerne.',
      en: 'In my final exam project I installed and configured pfSense as firewall and router between the VLANs and the internet — including rules for which traffic could pass between departments.',
    },
    related: ['vlan', 'vpn', 'backup'],
  },
  {
    slug: 'backup',
    name: 'Backup',
    category: { da: 'Sikkerhed', en: 'Security' },
    accent: '#2E7D32',
    what: {
      da: 'Backup er en ekstra kopi af data, gemt et andet sted, så intet går tabt, hvis en disk dør, en fil slettes ved en fejl — eller virksomheden rammes af ransomware.',
      en: 'Backup is an extra copy of data stored somewhere else, so nothing is lost if a disk dies, a file is deleted by mistake — or the company is hit by ransomware.',
    },
    why: {
      da: 'En god tommelfingerregel er 3-2-1: tre kopier af data, på to forskellige typer lagring, hvoraf én ligger et andet sted. Backup er forskellen på et lille uheld og en katastrofe — og noget af det første, en seriøs IT-afdeling har styr på.',
      en: 'A good rule of thumb is 3-2-1: three copies of data, on two different types of storage, one of them off-site. Backup is the difference between a small mishap and a disaster — and one of the first things a serious IT department gets right.',
    },
    how: {
      da: 'I mit svendeprøve-miljø fungerede DC02 som backup-domænecontroller, så login og rettigheder stadig virkede, selv hvis den primære server gik ned — et princip om redundans, der gælder al drift.',
      en: 'In my final exam environment DC02 acted as a backup domain controller, so login and permissions kept working even if the primary server went down — a redundancy principle that applies to all operations.',
    },
    related: ['windows-server', 'firewall'],
  },
  {
    slug: 'virtualisering',
    name: 'Virtualisering',
    full: 'ESXi · VMware',
    category: { da: 'Server', en: 'Server' },
    accent: '#C9A96E',
    what: {
      da: 'Virtualisering lader én fysisk server køre mange “virtuelle” maskiner på samme tid. Hver virtuel maskine opfører sig som en selvstændig computer med eget styresystem.',
      en: 'Virtualization lets one physical server run many “virtual” machines at the same time. Each virtual machine behaves like an independent computer with its own operating system.',
    },
    why: {
      da: 'I stedet for at købe fem fysiske servere kører man fem virtuelle på én maskine — billigere, nemmere at administrere og hurtigt at genskabe fra snapshots, hvis noget går galt. Stort set alle moderne serverrum er virtualiserede.',
      en: 'Instead of buying five physical servers you run five virtual ones on a single machine — cheaper, easier to manage and quick to restore from snapshots if something goes wrong. Practically all modern server rooms are virtualized.',
    },
    how: {
      da: 'Hele min svendeprøve kørte på en fysisk server med VMware ESXi, hvor jeg oprettede de virtuelle maskiner til domænecontrollere, filserver og pfSense — inkl. fejlfinding af manglende VLAN-adgang til management.',
      en: 'My entire final exam ran on a physical server with VMware ESXi, where I created the virtual machines for domain controllers, file server and pfSense — including troubleshooting missing VLAN access to management.',
    },
    related: ['windows-server', 'vlan'],
  },
  {
    slug: 'lan-wlan',
    name: 'LAN & WLAN',
    full: 'Kablet og trådløst netværk',
    category: { da: 'Netværk', en: 'Networking' },
    accent: '#3E9BD6',
    what: {
      da: 'LAN er det kablede netværk i en bygning — computere forbundet via netværkskabler og switches. WLAN er det samme netværk, bare trådløst via Wi-Fi-accesspunkter.',
      en: 'LAN is the wired network in a building — computers connected via network cables and switches. WLAN is the same network, just wireless via Wi-Fi access points.',
    },
    why: {
      da: 'Kabel giver stabilitet og hastighed (vigtigt til stationære arbejdspladser og servere), mens Wi-Fi giver frihed (mødelokaler, bærbare, gæster). En god IT-supporter ved, hvornår man vælger hvad — og hvordan man fejlfinder begge dele.',
      en: 'Cable gives stability and speed (important for fixed workstations and servers), while Wi-Fi gives freedom (meeting rooms, laptops, guests). A good IT supporter knows when to choose which — and how to troubleshoot both.',
    },
    how: {
      da: 'Fra kabling og switch-opsætning i svendeprøven til hjælp med Wi-Fi-problemer for ældre borgere i Folkehuse Aarhus — jeg har arbejdet med netværk i både serverrummet og ude hos brugerne.',
      en: 'From cabling and switch setup in my final exam to helping elderly citizens with Wi-Fi problems at Folkehuse Aarhus — I have worked with networks both in the server room and out with users.',
    },
    related: ['vlan', 'dhcp', 'pc-hardware'],
  },
  {
    slug: 'pc-hardware',
    name: 'PC-hardware',
    full: 'Komponenter og fejlfinding',
    category: { da: 'Hardware', en: 'Hardware' },
    accent: '#7C5CBF',
    what: {
      da: 'PC-hardware er computerens fysiske dele: CPU (hjernen), RAM (korttidshukommelsen), SSD (lageret), bundkort, strømforsyning og grafikkort. Fejl i én komponent kan give symptomer, der ligner softwareproblemer.',
      en: 'PC hardware is the computer’s physical parts: CPU (the brain), RAM (short-term memory), SSD (storage), motherboard, power supply and graphics card. A fault in one component can cause symptoms that look like software problems.',
    },
    why: {
      da: 'En IT-supporter, der kender hardware, kan hurtigt afgøre, om en langsom pc skal have mere RAM, en ny SSD — eller bare en oprydning. Det sparer virksomheden penge og brugeren frustration.',
      en: 'An IT supporter who knows hardware can quickly decide whether a slow PC needs more RAM, a new SSD — or just a cleanup. That saves the company money and the user frustration.',
    },
    how: {
      da: 'Hos Fourcom arbejdede jeg med reparation og klargøring af arbejdsstationer, og privat har jeg bygget min egen gaming-pc fra bunden — komponentvalg, kompatibilitet, samling og konfiguration.',
      en: 'At Fourcom I repaired and prepared workstations, and privately I built my own gaming PC from scratch — component selection, compatibility, assembly and configuration.',
    },
    related: ['lan-wlan', 'windows-server'],
  },
]

export const glossaryBySlug = Object.fromEntries(glossary.map((t) => [t.slug, t]))
