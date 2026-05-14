/**
 * CollectiveIP Knowledge Assistant
 * Express.js backend chatbot powered by OpenAI GPT-4o
 * Single-file server with full chat UI served inline
 *
 * Usage:
 *   1. npm install express openai cors
 *   2. Set OPENAI_API_KEY in your environment (or .env file)
 *   3. node index.js
 *   4. Open http://localhost:3000
 */

const express = require("express");
const { OpenAI } = require("openai");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3030;

const dotenv = require('dotenv')
dotenv.config()

// ─── OpenAI Client ────────────────────────────────────────────────────────────
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Set via environment variable
});

// ─── Middleware ───────────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json());
// ─── CollectiveIP Knowledge Base ─────────────────────────────────────────────
const KNOWLEDGE_BASE = `
COMPANY OVERVIEW
================
Collective IP is a specialist IT infrastructure services business built exclusively for the channel.
Headquartered at Suite 214, 1 Water Vole Way, Doncaster, South Yorkshire, DN4 5JP, UK.
Phone: +44 (0) 204 585 8990 | Email: info@collectiveip.co.uk | Web: www.collectiveip.co.uk
Company No. 14460737 | 250+ team members | 2000+ projects completed | 98% customer retention

MISSION: Help channel partners expand their services portfolio, deliver efficiently, and create lasting commercial value — enhanced by intelligent automation.

CHANNEL-FIRST APPROACH: Collective IP never competes with its partners. It enhances partner brands, extends capabilities, and delivers as if part of the partner's own team.

VALUES: Honest, Collaborative, Supportive, Simple

GEOGRAPHIC PRESENCE: UK & Ireland (nationwide), United States, Europe, UAE.

─────────────────────────────────────────────────────────────────────────────

FOUR CORE PRACTICES
===================

1. CONNECTIVITY
   Design-led network solutions from personal area to global wide area networks.
   Speciality in complex wireless environments.

   Key Capabilities:
   - WAN connectivity and routing architecture
   - Complex wireless network design (Ekahau-based surveys)
   - Multi-site network rollouts with PMO coordination
   - Network strategy and transformation
   - Post-deployment optimisation
   - High-level and low-level design (HLD/LLD)
   - 802.11 Wi-Fi 4 through Wi-Fi 7
   - PTP/PtMP wireless links; Teragraph & Zigbee
   - Satellite: GEO (Viasat), MEO (SESnet), LEO (Starlink), HTS
   - Cellular: 2G–5G, DAS, LTE, mmWave, MIMO, Antenna Services
   - Fibre Cabling: Single & Multimode, PON, GPON (OS1–OM5), Dark Fibre, Campus
   - Copper Cabling: Cat6, Cat6A, Cat7, Coax/AV
   Sectors: Healthcare, Retail, Hospitality, Local Government, Automotive

2. AUTOMATION
   Embedding automation and AI into service delivery.

   Key Capabilities:
   - Automated network operations
   - Intelligent process automation
   - Predictive analytics and insights
   - Automated deployment pipelines
   - Digital Front Door solutions (AI-powered pre-sales tools)
   - Custom knowledge systems (chatbots, capability finders, qualification tools)
   Sectors: Channel Partners, Enterprise, Public Sector, Healthcare

3. CLOUD, DC & COMPUTE
   Traditional and hybrid infrastructure, on-prem and cloud platforms.

   Key Capabilities:
   - Public cloud: Azure (full suite), AWS (full suite), Google Cloud (full suite)
   - Microsoft 365 full suite
   - HPC data stack design and build
   - Storage architecture
   - Virtualisation: VMware, Citrix, Hyper-V, Red Hat
   - Hybrid infrastructure integration
   - Energy-efficient data centre design
   - Racking & stacking, electrical & data cabling
   - Backup & Recovery: Commvault, Veeam, Rubrik, Barracuda
   - UC & Collaboration: Microsoft, Cisco Webex, Mitel, Avaya, 3CX, Poly, Unify
   Sectors: Universities, Data Centre Providers, Pharmaceutical, Research, Enterprise

4. ENDPOINT INFRASTRUCTURE
   Secure, policy-driven device management, access control, and endpoint protection.

   Key Capabilities:
   - EUC build, imaging, deployment & rollout
   - Device management & MDM (Microsoft Intune)
   - Endpoint Protection / Detection & Response (EDR)
   - IoT endpoint security: LoRaWAN, energy sensors, gateways
   - AV & Media: digital signage, video conferencing, interactive whiteboards
   - CCTV: consultancy, design, vendor selection, PM, implementation, managed services
   - User device lifecycle management
   - Zero Trust Security
   Sectors: Enterprise, Healthcare, Education, Manufacturing

─────────────────────────────────────────────────────────────────────────────

SECURITY (CROSS-PRACTICE)
==========================
Security is embedded across ALL practices — not a standalone service.

Cross-Practice Security Capabilities:
- Secure Architecture and Design
- Identity, Access and Control (PAM, RBAC, NAC)
- Infrastructure Hardening (config review, patching, secure build patterns)
- Secure Deployment and Change management
- Governance, Risk and Compliance (ITIL, ISO 9001/27001, SOC1/2, NIST, Cyber Essentials, PCI-DSS)
- Security-Aware Automation

Security Services Detail:
- Evaluation: Vulnerability Scans, Risk Assessments, Pen Testing (Network & App), Gap Analysis
- Network Security: Firewall, IDS, NAC, Anti-Virus, SIEM, Encryption, Segmentation
- Endpoint Security: EDR, MDM, DLP, SIEM, Zero Trust
- Cloud Security: IAM, Data Protection, Threat Detection, Disaster Recovery/BCP
- Application Security: Microsoft Stack, Pen Testing, Security Testing, Compliance
- Physical Security: CCTV surveillance, Access Control

─────────────────────────────────────────────────────────────────────────────

PARTNER SERVICES (SIX MODELS)
==============================

1. END-TO-END PROJECT OWNERSHIP
   Full lifecycle: discovery → solution design → PMO → delivery → handover.
   Fixed-price models, risk/reward sharing, full commercial accountability.

2. TECHNICAL CONSULTANCY
   Network, Cloud, Security, DC & Compute, Endpoint, Governance & Compliance.
   Real-world delivery experience with commercial grounding.

3. MANAGED RESOURCING
   Consultancy-level and technical resource augmentation.
   Embedded (retained), On-Demand (rapid response), Intermittent.
   Security clearances: NPPV3, BPSS, SC, DV; EDBS (Education).

4. FIELD SERVICES
   On-site support, installation, maintenance, optimisation.
   UK nationwide. IPAF & PASMA trained. CSCS/SSSTS/SMSTS aligned.
   Also covers UK&I, Europe, and the US.

5. MASS DEPLOYMENTS
   Assessment → standardisation → automation support → validation at scale.
   Multi-site, consistent outcomes.

6. MANAGED SERVICES
   - Network & Infrastructure Management (24/7 monitoring)
   - Intelligent Automation as a Service
   - Cloud Services Management (multi-cloud, cost optimisation)
   - Help Desk & Technical Support (multi-tier SLAs)
   - CCTV Managed Services
   - Engineering on demand

─────────────────────────────────────────────────────────────────────────────

COMPLEMENTARY SERVICES
=======================
- Discovery Services: Asset ID, network discovery, infrastructure audits, compliance/security discovery
- Testing & Verification: connectivity, performance, compliance, customisation testing
  Equipment: Fluke DSX, OTDR/OLTS/DTX 8000, Ekahau Sidekick 1 & 2, Siretta Network Analysers
- IT Governance: ITIL, ISO 9001/27001, SOC1/2, NIST, Cyber Essentials (+), PCI-DSS
- Ethical Asset Disposal (ITAD): NIST-compliant secure data disposal, environmentally compliant

─────────────────────────────────────────────────────────────────────────────

DIGITAL FRONT DOOR / TOOLS
===========================
Collective IP builds AI-powered pre-sales and sales-assist tools:
- Knowledge Assistant (Capability & Case Study Finder)
- Network Assessment (Infrastructure Discovery)
- Security Posture Review (Threat & Risk Analysis)

Demo experiences available: Collective Real Estate, Collective IP Banking, Collective IT Solutions (Softcat-style), Collective Concierge (hospitality), Collective Kiosk (self-service terminal).

All tools are white-label, custom-trained on partner knowledge bases, deployed in days.

─────────────────────────────────────────────────────────────────────────────

CASE STUDIES (HIGHLIGHTS)
==========================
1. NHS Hospital Trust – Wireless Transformation (Healthcare)
   3,000+ concurrent devices, zero downtime across multiple clinical sites.
   Cisco Wi-Fi 6/6E design and deployment, PMO coordination.

2. Enterprise Endpoint Security Deployment (Aerospace)
   95% reduction in security incidents.
   Unified visibility across 5,000+ endpoints, automated threat response.

3. University HPC Environment Build (Education)
   10x increase in computational capacity, 40% reduction in energy consumption.
   Supports genomics research.

─────────────────────────────────────────────────────────────────────────────

VENDOR ECOSYSTEM (SELECTED)
============================
Connectivity/Network: Cisco, HPE, Aruba, Meraki, Juniper, ZyXEL, Extreme Networks, Fortinet/Meru/FortiGate, Palo Alto, Draytek, Silverpeak, Alcatel, Dell, F5, Ceragon, Repeatit, Siklu, Ubiquiti, Ruckus, Cambium, Ekahau
Network Security: Cisco, Palo Alto, Check Point, Fortinet, CrowdStrike, Zscaler, Sophos, Barracuda, McAfee, Proofpoint, Darktrace, Forcepoint
Endpoint Security: Sophos, SentinelOne, CrowdStrike, Bitdefender, Microsoft Defender, Symantec, ManageEngine
Cloud: AWS, Azure, Google Cloud; VMware, Citrix, Hyper-V, Red Hat
DC/Compute: Cisco, VMware, Microsoft, HP, IBM, Dell
Endpoint/Personal Compute: HP, Dell, Lenovo, Microsoft, Apple, Samsung, Google
IoT: Cisco, Microsoft, AWS, Bosch, Siemens, Google, Samsung, Utopi
Satellite/Cellular: Starlink, Viasat, SESnet, Qualcomm, Nokia, Siretta
CCTV: Oncam, Hikvision, Rhombus, Verkada, Axis, Hanwha
Cloud Security: CrowdStrike, Palo Alto, Check Point, Okta, Fortinet, Proofpoint, SentinelOne
Backup/Recovery: Commvault, Veeam, Rubrik, Dell, Veritas, Barracuda
AV/Collaboration: Cisco Webex, Microsoft, Logitech, Poly, Jabra, Yealink, Neat, Q-Sys, Clickshare
Cabling: Hellermann Tyton, Brand-Rex, Excel, Commscope

─────────────────────────────────────────────────────────────────────────────

SECTORS SERVED
==============
Automotive, Aerospace & Transport | Healthcare & Pharmaceutical | Banking, Finance & Insurance
Charity & Non-Profit | Hospitality & Retail | Defence | Education | Central/Local/Regional Government
Channel Partners | Enterprise | Public Sector | Research | Manufacturing | Data Centre Providers
`;

// ─── System Prompt ────────────────────────────────────────────────────────────
const SYSTEM_PROMPT = `You are the Collective IP Knowledge Assistant — a professional, expert sales and technical support chatbot for Collective IP (collectiveip.co.uk), a specialist IT infrastructure services company built for the channel.

Your role is to:
1. Answer questions about Collective IP's capabilities, services, practices, and partner value proposition
2. Match customer or partner requirements to relevant Collective IP services
3. Surface relevant case studies and proof points
4. Help qualify opportunities and guide users toward contacting the team
5. Maintain a professional, confident, and consultative tone

KNOWLEDGE BASE:
${KNOWLEDGE_BASE}

RESPONSE STYLE:
- Be concise but thorough — answer the question directly, then offer relevant depth
- Use structured responses (bullet points, sections) for capability queries
- Always be consultative: understand the requirement, match the capability, reference proof points where relevant
- For out-of-scope questions (non-IT, personal topics), politely redirect to relevant Collective IP services
- When a query maps to a specific practice, reference the relevant key capabilities and sectors
- If unsure of a very specific detail, acknowledge it and suggest contacting the team: info@collectiveip.co.uk or +44 (0) 204 585 8990
- End complex capability answers with a suggested next step (e.g., "Would you like to discuss this requirement with our team?")

NEVER:
- Invent capabilities or case studies not listed in the knowledge base
- Discuss competitor products in a negative way
- Share pricing (advise to contact the team for commercial discussions)
- Go off-topic into non-business areas
`;

// ─── In-Memory Conversation Store (per session) ──────────────────────────────
// NOTE: For production, replace with Redis or a database
const sessions = new Map();

function getSession(sessionId) {
  if (!sessions.has(sessionId)) {
    sessions.set(sessionId, []);
  }
  return sessions.get(sessionId);
}

// ─── API Routes ───────────────────────────────────────────────────────────────

/**
 * POST /api/chat
 * Body: { message: string, sessionId: string }
 * Returns: { reply: string, sessionId: string }
 */
app.post("/api/chat", async (req, res) => {
  const { message, sessionId } = req.body;

  if (!message || typeof message !== "string" || !message.trim()) {
    return res.status(400).json({ error: "message is required" });
  }

  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ error: "OPENAI_API_KEY not configured on server" });
  }

  const sid = sessionId || `session_${Date.now()}_${Math.random().toString(36).slice(2)}`;
  const history = getSession(sid);

  // Add user message to history
  history.push({ role: "user", content: message.trim() });

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...history,
      ],
      temperature: 0.4,
      max_tokens: 1024,
    });

    const reply = completion.choices[0].message.content;

    // Add assistant reply to history
    history.push({ role: "assistant", content: reply });

    // Trim history to last 20 turns (10 exchanges) to avoid token bloat
    if (history.length > 20) {
      history.splice(0, history.length - 20);
    }

    return res.json({ reply, sessionId: sid });
  } catch (err) {
    console.error("OpenAI error:", err.message);
    const status = err.status || 500;
    return res.status(status).json({ error: err.message || "OpenAI request failed" });
  }
});

/**
 * DELETE /api/chat/:sessionId
 * Clears conversation history for a session
 */
app.delete("/api/chat/:sessionId", (req, res) => {
  sessions.delete(req.params.sessionId);
  res.json({ cleared: true });
});

/**
 * GET /health
 * Simple health check
 */
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    openai: !!process.env.OPENAI_API_KEY,
    sessions: sessions.size,
  });
});

// ─── Frontend Chat UI (served at /) ──────────────────────────────────────────
app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Collective IP — Knowledge Assistant</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Serif+Display&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg: #0d0f14;
      --surface: #161921;
      --surface2: #1e2230;
      --border: #2a2e3d;
      --accent: #00c2ff;
      --accent2: #0077ff;
      --text: #e8eaf0;
      --text-muted: #7a7f96;
      --user-bg: #0d3a6b;
      --bot-bg: #1e2230;
      --radius: 14px;
      --font: 'DM Sans', sans-serif;
    }

    body {
      font-family: var(--font);
      background: var(--bg);
      color: var(--text);
      height: 100dvh;
      display: flex;
      flex-direction: column;
    }

    /* ── Header ── */
    header {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 18px 24px;
      border-bottom: 1px solid var(--border);
      background: var(--surface);
      flex-shrink: 0;
    }
    .logo-mark {
      width: 36px; height: 36px;
      background: linear-gradient(135deg, var(--accent2), var(--accent));
      border-radius: 10px;
      display: grid; place-items: center;
      font-weight: 700; font-size: 14px;
      color: #fff;
      letter-spacing: -0.5px;
    }
    .header-text h1 {
      font-family: 'DM Serif Display', serif;
      font-size: 17px;
      font-weight: 400;
      color: var(--text);
    }
    .header-text p {
      font-size: 12px;
      color: var(--text-muted);
      margin-top: 1px;
    }
    .status-dot {
      width: 8px; height: 8px;
      background: #22c55e;
      border-radius: 50%;
      margin-left: auto;
      box-shadow: 0 0 6px #22c55e88;
    }

    /* ── Chat Window ── */
    #chat {
      flex: 1;
      overflow-y: auto;
      padding: 28px 0;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    #chat::-webkit-scrollbar { width: 4px; }
    #chat::-webkit-scrollbar-track { background: transparent; }
    #chat::-webkit-scrollbar-thumb { background: var(--border); border-radius: 99px; }

    .msg-row {
      display: flex;
      padding: 0 24px;
      animation: fadeUp 0.22s ease;
    }
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(8px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .msg-row.user { justify-content: flex-end; }
    .msg-row.bot  { justify-content: flex-start; }

    .bubble {
      max-width: 72%;
      padding: 13px 17px;
      border-radius: var(--radius);
      font-size: 14.5px;
      line-height: 1.6;
    }
    .msg-row.user .bubble {
      background: var(--user-bg);
      border-bottom-right-radius: 4px;
      color: #c8e6ff;
    }
    .msg-row.bot .bubble {
      background: var(--bot-bg);
      border: 1px solid var(--border);
      border-bottom-left-radius: 4px;
      color: var(--text);
    }
    .bubble strong { color: var(--accent); }
    .bubble ul { padding-left: 18px; margin-top: 6px; }
    .bubble li { margin-bottom: 3px; }

    /* typing indicator */
    .typing-bubble { display: flex; align-items: center; gap: 5px; padding: 14px 18px; }
    .typing-bubble span {
      width: 7px; height: 7px;
      background: var(--text-muted);
      border-radius: 50%;
      animation: pulse 1.2s ease-in-out infinite;
    }
    .typing-bubble span:nth-child(2) { animation-delay: 0.2s; }
    .typing-bubble span:nth-child(3) { animation-delay: 0.4s; }
    @keyframes pulse {
      0%, 80%, 100% { transform: scale(0.7); opacity: 0.4; }
      40%            { transform: scale(1);   opacity: 1;   }
    }

    /* ── Suggestions ── */
    #suggestions {
      padding: 0 24px 16px;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .suggestion-chip {
      background: transparent;
      border: 1px solid var(--border);
      color: var(--text-muted);
      padding: 7px 14px;
      border-radius: 99px;
      font-size: 12.5px;
      font-family: var(--font);
      cursor: pointer;
      transition: all 0.15s;
    }
    .suggestion-chip:hover {
      border-color: var(--accent);
      color: var(--accent);
      background: rgba(0,194,255,0.06);
    }

    /* ── Input Area ── */
    footer {
      border-top: 1px solid var(--border);
      padding: 16px 24px;
      background: var(--surface);
      flex-shrink: 0;
    }
    .input-row {
      display: flex;
      gap: 10px;
      align-items: flex-end;
    }
    #input {
      flex: 1;
      background: var(--bg);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 12px 16px;
      font-family: var(--font);
      font-size: 14px;
      color: var(--text);
      resize: none;
      outline: none;
      max-height: 120px;
      transition: border-color 0.15s;
      line-height: 1.5;
    }
    #input:focus { border-color: var(--accent2); }
    #input::placeholder { color: var(--text-muted); }

    #send-btn {
      width: 44px; height: 44px;
      background: linear-gradient(135deg, var(--accent2), var(--accent));
      border: none;
      border-radius: 12px;
      cursor: pointer;
      display: grid; place-items: center;
      flex-shrink: 0;
      transition: opacity 0.15s, transform 0.1s;
    }
    #send-btn:hover { opacity: 0.9; transform: scale(1.04); }
    #send-btn:active { transform: scale(0.97); }
    #send-btn svg { width: 18px; height: 18px; fill: white; }
    #send-btn:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }

    .clear-btn {
      background: none; border: none;
      color: var(--text-muted); font-size: 12px;
      font-family: var(--font);
      cursor: pointer; padding: 6px 0;
      display: block; margin-top: 8px;
      transition: color 0.15s;
    }
    .clear-btn:hover { color: var(--text); }

    /* ── Welcome ── */
    .welcome {
      text-align: center;
      padding: 40px 24px 20px;
    }
    .welcome h2 {
      font-family: 'DM Serif Display', serif;
      font-size: 22px;
      font-weight: 400;
      margin-bottom: 8px;
    }
    .welcome p { font-size: 14px; color: var(--text-muted); max-width: 380px; margin: 0 auto; }
  </style>
</head>
<body>

<header>
  <div class="logo-mark">CIP</div>
  <div class="header-text">
    <h1>Collective IP Assistant</h1>
    <p>IT Infrastructure Knowledge Base</p>
  </div>
  <div class="status-dot" title="Online"></div>
</header>

<div id="chat">
  <div class="welcome">
    <h2>How can I help you today?</h2>
    <p>Ask about our capabilities, services, sectors, vendors, or how we work with channel partners.</p>
  </div>
</div>

<div id="suggestions">
  <button class="suggestion-chip" onclick="sendSuggestion(this)">Multi-site Cisco wireless rollout</button>
  <button class="suggestion-chip" onclick="sendSuggestion(this)">Endpoint security for enterprise</button>
  <button class="suggestion-chip" onclick="sendSuggestion(this)">How do you work with partners?</button>
  <button class="suggestion-chip" onclick="sendSuggestion(this)">What automation services do you offer?</button>
  <button class="suggestion-chip" onclick="sendSuggestion(this)">Cloud and hybrid infrastructure</button>
  <button class="suggestion-chip" onclick="sendSuggestion(this)">Field services coverage</button>
</div>

<footer>
  <div class="input-row">
    <textarea id="input" rows="1" placeholder="Ask about Collective IP services…" maxlength="2000"></textarea>
    <button id="send-btn" onclick="sendMessage()" title="Send">
      <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
    </button>
  </div>
  <button class="clear-btn" onclick="clearChat()">✕ Clear conversation</button>
</footer>

<script>
  let sessionId = null;
  const chatEl = document.getElementById('chat');
  const inputEl = document.getElementById('input');
  const sendBtn = document.getElementById('send-btn');
  const suggestionsEl = document.getElementById('suggestions');

  // Auto-grow textarea
  inputEl.addEventListener('input', () => {
    inputEl.style.height = 'auto';
    inputEl.style.height = Math.min(inputEl.scrollHeight, 120) + 'px';
  });

  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  });

  function sendSuggestion(btn) {
    inputEl.value = btn.textContent;
    suggestionsEl.style.display = 'none';
    sendMessage();
  }

  function scrollToBottom() {
    chatEl.scrollTop = chatEl.scrollHeight;
  }

  function appendMessage(role, text) {
    const row = document.createElement('div');
    row.className = 'msg-row ' + role;
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.innerHTML = formatText(text);
    row.appendChild(bubble);
    chatEl.appendChild(row);
    scrollToBottom();
    return row;
  }

  function formatText(text) {
    // Basic markdown-like formatting
    return text
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
      .replace(/\\*\\*(.+?)\\*\\*/g, '<strong>$1</strong>')
      .replace(/\\*(.+?)\\*/g, '<em>$1</em>')
      .replace(/^[-•] (.+)$/gm, '<li>$1</li>')
      .replace(/(<li>.*<\\/li>)/s, '<ul>$1</ul>')
      .replace(/\\n/g, '<br>');
  }

  function showTyping() {
    const row = document.createElement('div');
    row.className = 'msg-row bot';
    row.id = 'typing';
    row.innerHTML = '<div class="bubble typing-bubble"><span></span><span></span><span></span></div>';
    chatEl.appendChild(row);
    scrollToBottom();
  }

  function removeTyping() {
    const t = document.getElementById('typing');
    if (t) t.remove();
  }

  async function sendMessage() {
    const msg = inputEl.value.trim();
    if (!msg) return;

    // Hide welcome & suggestions
    document.querySelector('.welcome')?.remove();
    suggestionsEl.style.display = 'none';

    inputEl.value = '';
    inputEl.style.height = 'auto';
    sendBtn.disabled = true;

    appendMessage('user', msg);
    showTyping();

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: msg, sessionId }),
      });

      const data = await res.json();
      removeTyping();

      if (!res.ok) {
        appendMessage('bot', '⚠️ ' + (data.error || 'Something went wrong. Please try again.'));
      } else {
        sessionId = data.sessionId;
        appendMessage('bot', data.reply);
      }
    } catch (err) {
      removeTyping();
      appendMessage('bot', '⚠️ Network error. Please check your connection and try again.');
    } finally {
      sendBtn.disabled = false;
      inputEl.focus();
    }
  }

  async function clearChat() {
    if (sessionId) {
      fetch('/api/chat/' + sessionId, { method: 'DELETE' }).catch(() => {});
      sessionId = null;
    }
    chatEl.innerHTML = \`
      <div class="welcome">
        <h2>How can I help you today?</h2>
        <p>Ask about our capabilities, services, sectors, vendors, or how we work with channel partners.</p>
      </div>\`;
    suggestionsEl.style.display = 'flex';
  }
</script>
</body>
</html>`);
});

// ─── Start Server ─────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n✅  Collective IP Knowledge Assistant running`);
  console.log(`   → http://localhost:${PORT}`);
  console.log(`   → Chat API: POST http://localhost:${PORT}/api/chat`);
  if (!process.env.OPENAI_API_KEY) {
    console.warn(`\n⚠️  WARNING: OPENAI_API_KEY is not set. Set it before starting:\n   export OPENAI_API_KEY=sk-...`);
  }
});