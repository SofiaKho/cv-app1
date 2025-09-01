# CV-applikation – Administrativa Moln 1

## 📄 Beskrivning
En enkel REST API-tjänst som visar CV-information från en PostgreSQL-databas.  
Projektet körs med Docker Compose och består av två containers:
- En Node.js-backend med Express
- En PostgreSQL-databas

---

## ▶️ Så här kör du applikationen

### 🐳 1. Starta projektet med Docker Compose
I terminalen, kör:
```bash
docker-compose up --build


---

## 📘 Del 2 – Teoretisk Analys

### 💰 Pris- och kapacitetsjämförelse: Container vs Virtuella Maskiner (VM)

**Scenario**: Vi kör backend och databas i två containers via Docker Compose. Vad skulle det kosta att istället använda två virtuella maskiner med motsvarande prestanda?

| Tjänst              | CPU/RAM         | Kostnad (Azure)     | Kostnad (Containers)  |
|---------------------|------------------|----------------------|------------------------|
| 2 x Linux VMs       | 2 vCPU, 4 GB RAM | ca 800–1000 kr/mån   | –                      |
| Docker Containers   | Samma resurser   | ca 100–200 kr/mån    | ✅ Mycket billigare     |

**Fördelar med Containers:**
- Snabb uppstart, låg overhead
- Smidigt att skala och uppdatera
- Resurssnåla (delar samma OS-kärna)

**Fördelar med VM:**
- Högre isolering och säkerhet
- Kan köra olika OS-versioner
- Passar bra för tyngre arbetslaster

### 🧠 Slutsats:
Containers är mer kostnadseffektiva och smidigare för den här typen av applikation.

---

### 🗄️ Lagring av PostgreSQL-data (25 GB)

**Scenario**:  
- Data är "het" i 2 veckor → lagras i `Hot Storage`
- Därefter arkiveras i 6 månader → flyttas till `Cool` eller `Archive` Storage

| Lagringsnivå       | Leverantör | Pris (25 GB/mån)  |
|--------------------|------------|-------------------|
| Hot Storage        | Azure      | ca 5–10 kr        |
| Cool Storage       | Azure      | ca 1–3 kr         |
| Archive Storage    | Azure      | < 1 kr            |

**Andra alternativ**: AWS S3 Glacier, Google Cloud Coldline

---

### 🧱 Teknikval och motivering

- **Node.js (Express)** – Enkelt, snabbt och passar perfekt för små REST API:er.
- **PostgreSQL** – Stabil, öppen databas med bra stöd i Docker och Node.js.
- **Docker** – Gör projektet portabelt, isolerat och lätt att köra på vilken maskin som helst.
- **Docker Compose** – Enkel sätt att hantera multi-container setups (backend + databas).

---

### ✅ Slutsats

Projektet är optimerat för enkelhet, kostnad och flexibilitet – perfekt för en DevOps- och molnkurs. Genom att använda containrar har vi byggt en portabel lösning med låg kostnad och bra prestanda.

