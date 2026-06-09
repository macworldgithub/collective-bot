// /**
//  * CollectiveIP Knowledge Assistant
//  * Express.js backend chatbot powered by OpenAI GPT-4o
//  * Single-file server with full chat UI served inline
//  *
//  * Usage:
//  *   1. npm install express openai cors
//  *   2. Set OPENAI_API_KEY in your environment (or .env file)
//  *   3. node index.js
//  *   4. Open http://localhost:3000
//  */

// const express = require("express");
// const { OpenAI } = require("openai");
// const cors = require("cors");

// const app = express();
// const PORT = process.env.PORT || 3030;

// const dotenv = require('dotenv')
// dotenv.config()

// // ─── OpenAI Client ────────────────────────────────────────────────────────────
// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY, // Set via environment variable
// });

// // ─── Middleware ───────────────────────────────────────────────────────────────
// app.use(cors());
// app.use(express.json());
// // ─── CollectiveIP Knowledge Base ─────────────────────────────────────────────
// const KNOWLEDGE_BASE = `
// COMPANY OVERVIEW
// ================
// Collective IP is a specialist IT infrastructure services business built exclusively for the channel.
// Headquartered at Suite 214, 1 Water Vole Way, Doncaster, South Yorkshire, DN4 5JP, UK.
// Phone: +44 (0) 204 585 8990 | Email: info@collectiveip.co.uk | Web: www.collectiveip.co.uk
// Company No. 14460737 | 250+ team members | 2000+ projects completed | 98% customer retention

// MISSION: Help channel partners expand their services portfolio, deliver efficiently, and create lasting commercial value — enhanced by intelligent automation.

// CHANNEL-FIRST APPROACH: Collective IP never competes with its partners. It enhances partner brands, extends capabilities, and delivers as if part of the partner's own team.

// VALUES: Honest, Collaborative, Supportive, Simple

// GEOGRAPHIC PRESENCE: UK & Ireland (nationwide), United States, Europe, UAE.

// ─────────────────────────────────────────────────────────────────────────────

// FOUR CORE PRACTICES
// ===================

// 1. CONNECTIVITY
//    Design-led network solutions from personal area to global wide area networks.
//    Speciality in complex wireless environments.

//    Key Capabilities:
//    - WAN connectivity and routing architecture
//    - Complex wireless network design (Ekahau-based surveys)
//    - Multi-site network rollouts with PMO coordination
//    - Network strategy and transformation
//    - Post-deployment optimisation
//    - High-level and low-level design (HLD/LLD)
//    - 802.11 Wi-Fi 4 through Wi-Fi 7
//    - PTP/PtMP wireless links; Teragraph & Zigbee
//    - Satellite: GEO (Viasat), MEO (SESnet), LEO (Starlink), HTS
//    - Cellular: 2G–5G, DAS, LTE, mmWave, MIMO, Antenna Services
//    - Fibre Cabling: Single & Multimode, PON, GPON (OS1–OM5), Dark Fibre, Campus
//    - Copper Cabling: Cat6, Cat6A, Cat7, Coax/AV
//    Sectors: Healthcare, Retail, Hospitality, Local Government, Automotive

// 2. AUTOMATION
//    Embedding automation and AI into service delivery.

//    Key Capabilities:
//    - Automated network operations
//    - Intelligent process automation
//    - Predictive analytics and insights
//    - Automated deployment pipelines
//    - Digital Front Door solutions (AI-powered pre-sales tools)
//    - Custom knowledge systems (chatbots, capability finders, qualification tools)
//    Sectors: Channel Partners, Enterprise, Public Sector, Healthcare

// 3. CLOUD, DC & COMPUTE
//    Traditional and hybrid infrastructure, on-prem and cloud platforms.

//    Key Capabilities:
//    - Public cloud: Azure (full suite), AWS (full suite), Google Cloud (full suite)
//    - Microsoft 365 full suite
//    - HPC data stack design and build
//    - Storage architecture
//    - Virtualisation: VMware, Citrix, Hyper-V, Red Hat
//    - Hybrid infrastructure integration
//    - Energy-efficient data centre design
//    - Racking & stacking, electrical & data cabling
//    - Backup & Recovery: Commvault, Veeam, Rubrik, Barracuda
//    - UC & Collaboration: Microsoft, Cisco Webex, Mitel, Avaya, 3CX, Poly, Unify
//    Sectors: Universities, Data Centre Providers, Pharmaceutical, Research, Enterprise

// 4. ENDPOINT INFRASTRUCTURE
//    Secure, policy-driven device management, access control, and endpoint protection.

//    Key Capabilities:
//    - EUC build, imaging, deployment & rollout
//    - Device management & MDM (Microsoft Intune)
//    - Endpoint Protection / Detection & Response (EDR)
//    - IoT endpoint security: LoRaWAN, energy sensors, gateways
//    - AV & Media: digital signage, video conferencing, interactive whiteboards
//    - CCTV: consultancy, design, vendor selection, PM, implementation, managed services
//    - User device lifecycle management
//    - Zero Trust Security
//    Sectors: Enterprise, Healthcare, Education, Manufacturing

// ─────────────────────────────────────────────────────────────────────────────

// SECURITY (CROSS-PRACTICE)
// ==========================
// Security is embedded across ALL practices — not a standalone service.

// Cross-Practice Security Capabilities:
// - Secure Architecture and Design
// - Identity, Access and Control (PAM, RBAC, NAC)
// - Infrastructure Hardening (config review, patching, secure build patterns)
// - Secure Deployment and Change management
// - Governance, Risk and Compliance (ITIL, ISO 9001/27001, SOC1/2, NIST, Cyber Essentials, PCI-DSS)
// - Security-Aware Automation

// Security Services Detail:
// - Evaluation: Vulnerability Scans, Risk Assessments, Pen Testing (Network & App), Gap Analysis
// - Network Security: Firewall, IDS, NAC, Anti-Virus, SIEM, Encryption, Segmentation
// - Endpoint Security: EDR, MDM, DLP, SIEM, Zero Trust
// - Cloud Security: IAM, Data Protection, Threat Detection, Disaster Recovery/BCP
// - Application Security: Microsoft Stack, Pen Testing, Security Testing, Compliance
// - Physical Security: CCTV surveillance, Access Control

// ─────────────────────────────────────────────────────────────────────────────

// PARTNER SERVICES (SIX MODELS)
// ==============================

// 1. END-TO-END PROJECT OWNERSHIP
//    Full lifecycle: discovery → solution design → PMO → delivery → handover.
//    Fixed-price models, risk/reward sharing, full commercial accountability.

// 2. TECHNICAL CONSULTANCY
//    Network, Cloud, Security, DC & Compute, Endpoint, Governance & Compliance.
//    Real-world delivery experience with commercial grounding.

// 3. MANAGED RESOURCING
//    Consultancy-level and technical resource augmentation.
//    Embedded (retained), On-Demand (rapid response), Intermittent.
//    Security clearances: NPPV3, BPSS, SC, DV; EDBS (Education).

// 4. FIELD SERVICES
//    On-site support, installation, maintenance, optimisation.
//    UK nationwide. IPAF & PASMA trained. CSCS/SSSTS/SMSTS aligned.
//    Also covers UK&I, Europe, and the US.

// 5. MASS DEPLOYMENTS
//    Assessment → standardisation → automation support → validation at scale.
//    Multi-site, consistent outcomes.

// 6. MANAGED SERVICES
//    - Network & Infrastructure Management (24/7 monitoring)
//    - Intelligent Automation as a Service
//    - Cloud Services Management (multi-cloud, cost optimisation)
//    - Help Desk & Technical Support (multi-tier SLAs)
//    - CCTV Managed Services
//    - Engineering on demand

// ─────────────────────────────────────────────────────────────────────────────

// COMPLEMENTARY SERVICES
// =======================
// - Discovery Services: Asset ID, network discovery, infrastructure audits, compliance/security discovery
// - Testing & Verification: connectivity, performance, compliance, customisation testing
//   Equipment: Fluke DSX, OTDR/OLTS/DTX 8000, Ekahau Sidekick 1 & 2, Siretta Network Analysers
// - IT Governance: ITIL, ISO 9001/27001, SOC1/2, NIST, Cyber Essentials (+), PCI-DSS
// - Ethical Asset Disposal (ITAD): NIST-compliant secure data disposal, environmentally compliant

// ─────────────────────────────────────────────────────────────────────────────

// DIGITAL FRONT DOOR / TOOLS
// ===========================
// Collective IP builds AI-powered pre-sales and sales-assist tools:
// - Knowledge Assistant (Capability & Case Study Finder)
// - Network Assessment (Infrastructure Discovery)
// - Security Posture Review (Threat & Risk Analysis)

// Demo experiences available: Collective Real Estate, Collective IP Banking, Collective IT Solutions (Softcat-style), Collective Concierge (hospitality), Collective Kiosk (self-service terminal).

// All tools are white-label, custom-trained on partner knowledge bases, deployed in days.

// ─────────────────────────────────────────────────────────────────────────────

// CASE STUDIES (HIGHLIGHTS)
// ==========================
// 1. NHS Hospital Trust – Wireless Transformation (Healthcare)
//    3,000+ concurrent devices, zero downtime across multiple clinical sites.
//    Cisco Wi-Fi 6/6E design and deployment, PMO coordination.

// 2. Enterprise Endpoint Security Deployment (Aerospace)
//    95% reduction in security incidents.
//    Unified visibility across 5,000+ endpoints, automated threat response.

// 3. University HPC Environment Build (Education)
//    10x increase in computational capacity, 40% reduction in energy consumption.
//    Supports genomics research.

// ─────────────────────────────────────────────────────────────────────────────

// VENDOR ECOSYSTEM (SELECTED)
// ============================
// Connectivity/Network: Cisco, HPE, Aruba, Meraki, Juniper, ZyXEL, Extreme Networks, Fortinet/Meru/FortiGate, Palo Alto, Draytek, Silverpeak, Alcatel, Dell, F5, Ceragon, Repeatit, Siklu, Ubiquiti, Ruckus, Cambium, Ekahau
// Network Security: Cisco, Palo Alto, Check Point, Fortinet, CrowdStrike, Zscaler, Sophos, Barracuda, McAfee, Proofpoint, Darktrace, Forcepoint
// Endpoint Security: Sophos, SentinelOne, CrowdStrike, Bitdefender, Microsoft Defender, Symantec, ManageEngine
// Cloud: AWS, Azure, Google Cloud; VMware, Citrix, Hyper-V, Red Hat
// DC/Compute: Cisco, VMware, Microsoft, HP, IBM, Dell
// Endpoint/Personal Compute: HP, Dell, Lenovo, Microsoft, Apple, Samsung, Google
// IoT: Cisco, Microsoft, AWS, Bosch, Siemens, Google, Samsung, Utopi
// Satellite/Cellular: Starlink, Viasat, SESnet, Qualcomm, Nokia, Siretta
// CCTV: Oncam, Hikvision, Rhombus, Verkada, Axis, Hanwha
// Cloud Security: CrowdStrike, Palo Alto, Check Point, Okta, Fortinet, Proofpoint, SentinelOne
// Backup/Recovery: Commvault, Veeam, Rubrik, Dell, Veritas, Barracuda
// AV/Collaboration: Cisco Webex, Microsoft, Logitech, Poly, Jabra, Yealink, Neat, Q-Sys, Clickshare
// Cabling: Hellermann Tyton, Brand-Rex, Excel, Commscope

// ─────────────────────────────────────────────────────────────────────────────

// SECTORS SERVED
// ==============
// Automotive, Aerospace & Transport | Healthcare & Pharmaceutical | Banking, Finance & Insurance
// Charity & Non-Profit | Hospitality & Retail | Defence | Education | Central/Local/Regional Government
// Channel Partners | Enterprise | Public Sector | Research | Manufacturing | Data Centre Providers
// `;

// // ─── System Prompt ────────────────────────────────────────────────────────────
// const SYSTEM_PROMPT = `You are the Collective IP Knowledge Assistant — a professional, expert sales and technical support chatbot for Collective IP (collectiveip.co.uk), a specialist IT infrastructure services company built for the channel.

// Your role is to:
// 1. Answer questions about Collective IP's capabilities, services, practices, and partner value proposition
// 2. Match customer or partner requirements to relevant Collective IP services
// 3. Surface relevant case studies and proof points
// 4. Help qualify opportunities and guide users toward contacting the team
// 5. Maintain a professional, confident, and consultative tone

// KNOWLEDGE BASE:
// ${KNOWLEDGE_BASE}

// RESPONSE STYLE:
// - Be concise but thorough — answer the question directly, then offer relevant depth
// - Use structured responses (bullet points, sections) for capability queries
// - Always be consultative: understand the requirement, match the capability, reference proof points where relevant
// - For out-of-scope questions (non-IT, personal topics), politely redirect to relevant Collective IP services
// - When a query maps to a specific practice, reference the relevant key capabilities and sectors
// - If unsure of a very specific detail, acknowledge it and suggest contacting the team: info@collectiveip.co.uk or +44 (0) 204 585 8990
// - End complex capability answers with a suggested next step (e.g., "Would you like to discuss this requirement with our team?")

// NEVER:
// - Invent capabilities or case studies not listed in the knowledge base
// - Discuss competitor products in a negative way
// - Share pricing (advise to contact the team for commercial discussions)
// - Go off-topic into non-business areas
// `;

// // ─── In-Memory Conversation Store (per session) ──────────────────────────────
// // NOTE: For production, replace with Redis or a database
// const sessions = new Map();

// function getSession(sessionId) {
//   if (!sessions.has(sessionId)) {
//     sessions.set(sessionId, []);
//   }
//   return sessions.get(sessionId);
// }

// // ─── API Routes ───────────────────────────────────────────────────────────────

// /**
//  * POST /api/chat
//  * Body: { message: string, sessionId: string }
//  * Returns: { reply: string, sessionId: string }
//  */
// app.post("/api/chat", async (req, res) => {
//   const { message, sessionId } = req.body;

//   if (!message || typeof message !== "string" || !message.trim()) {
//     return res.status(400).json({ error: "message is required" });
//   }

//   if (!process.env.OPENAI_API_KEY) {
//     return res.status(500).json({ error: "OPENAI_API_KEY not configured on server" });
//   }

//   const sid = sessionId || `session_${Date.now()}_${Math.random().toString(36).slice(2)}`;
//   const history = getSession(sid);

//   // Add user message to history
//   history.push({ role: "user", content: message.trim() });

//   try {
//     const completion = await openai.chat.completions.create({
//       model: "gpt-4o",
//       messages: [
//         { role: "system", content: SYSTEM_PROMPT },
//         ...history,
//       ],
//       temperature: 0.4,
//       max_tokens: 1024,
//     });

//     const reply = completion.choices[0].message.content;

//     // Add assistant reply to history
//     history.push({ role: "assistant", content: reply });

//     // Trim history to last 20 turns (10 exchanges) to avoid token bloat
//     if (history.length > 20) {
//       history.splice(0, history.length - 20);
//     }

//     return res.json({ reply, sessionId: sid });
//   } catch (err) {
//     console.error("OpenAI error:", err.message);
//     const status = err.status || 500;
//     return res.status(status).json({ error: err.message || "OpenAI request failed" });
//   }
// });

// /**
//  * DELETE /api/chat/:sessionId
//  * Clears conversation history for a session
//  */
// app.delete("/api/chat/:sessionId", (req, res) => {
//   sessions.delete(req.params.sessionId);
//   res.json({ cleared: true });
// });

// /**
//  * GET /health
//  * Simple health check
//  */
// app.get("/health", (req, res) => {
//   res.json({
//     status: "ok",
//     openai: !!process.env.OPENAI_API_KEY,
//     sessions: sessions.size,
//   });
// });

// // ─── Frontend Chat UI (served at /) ──────────────────────────────────────────
// app.get("/", (req, res) => {
//   res.send(`<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <title>Collective IP — Knowledge Assistant</title>
//   <style>
//     @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Serif+Display&display=swap');

//     *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

//     :root {
//       --bg: #0d0f14;
//       --surface: #161921;
//       --surface2: #1e2230;
//       --border: #2a2e3d;
//       --accent: #00c2ff;
//       --accent2: #0077ff;
//       --text: #e8eaf0;
//       --text-muted: #7a7f96;
//       --user-bg: #0d3a6b;
//       --bot-bg: #1e2230;
//       --radius: 14px;
//       --font: 'DM Sans', sans-serif;
//     }

//     body {
//       font-family: var(--font);
//       background: var(--bg);
//       color: var(--text);
//       height: 100dvh;
//       display: flex;
//       flex-direction: column;
//     }

//     /* ── Header ── */
//     header {
//       display: flex;
//       align-items: center;
//       gap: 14px;
//       padding: 18px 24px;
//       border-bottom: 1px solid var(--border);
//       background: var(--surface);
//       flex-shrink: 0;
//     }
//     .logo-mark {
//       width: 36px; height: 36px;
//       background: linear-gradient(135deg, var(--accent2), var(--accent));
//       border-radius: 10px;
//       display: grid; place-items: center;
//       font-weight: 700; font-size: 14px;
//       color: #fff;
//       letter-spacing: -0.5px;
//     }
//     .header-text h1 {
//       font-family: 'DM Serif Display', serif;
//       font-size: 17px;
//       font-weight: 400;
//       color: var(--text);
//     }
//     .header-text p {
//       font-size: 12px;
//       color: var(--text-muted);
//       margin-top: 1px;
//     }
//     .status-dot {
//       width: 8px; height: 8px;
//       background: #22c55e;
//       border-radius: 50%;
//       margin-left: auto;
//       box-shadow: 0 0 6px #22c55e88;
//     }

//     /* ── Chat Window ── */
//     #chat {
//       flex: 1;
//       overflow-y: auto;
//       padding: 28px 0;
//       display: flex;
//       flex-direction: column;
//       gap: 16px;
//     }
//     #chat::-webkit-scrollbar { width: 4px; }
//     #chat::-webkit-scrollbar-track { background: transparent; }
//     #chat::-webkit-scrollbar-thumb { background: var(--border); border-radius: 99px; }

//     .msg-row {
//       display: flex;
//       padding: 0 24px;
//       animation: fadeUp 0.22s ease;
//     }
//     @keyframes fadeUp {
//       from { opacity: 0; transform: translateY(8px); }
//       to   { opacity: 1; transform: translateY(0); }
//     }
//     .msg-row.user { justify-content: flex-end; }
//     .msg-row.bot  { justify-content: flex-start; }

//     .bubble {
//       max-width: 72%;
//       padding: 13px 17px;
//       border-radius: var(--radius);
//       font-size: 14.5px;
//       line-height: 1.6;
//     }
//     .msg-row.user .bubble {
//       background: var(--user-bg);
//       border-bottom-right-radius: 4px;
//       color: #c8e6ff;
//     }
//     .msg-row.bot .bubble {
//       background: var(--bot-bg);
//       border: 1px solid var(--border);
//       border-bottom-left-radius: 4px;
//       color: var(--text);
//     }
//     .bubble strong { color: var(--accent); }
//     .bubble ul { padding-left: 18px; margin-top: 6px; }
//     .bubble li { margin-bottom: 3px; }

//     /* typing indicator */
//     .typing-bubble { display: flex; align-items: center; gap: 5px; padding: 14px 18px; }
//     .typing-bubble span {
//       width: 7px; height: 7px;
//       background: var(--text-muted);
//       border-radius: 50%;
//       animation: pulse 1.2s ease-in-out infinite;
//     }
//     .typing-bubble span:nth-child(2) { animation-delay: 0.2s; }
//     .typing-bubble span:nth-child(3) { animation-delay: 0.4s; }
//     @keyframes pulse {
//       0%, 80%, 100% { transform: scale(0.7); opacity: 0.4; }
//       40%            { transform: scale(1);   opacity: 1;   }
//     }

//     /* ── Suggestions ── */
//     #suggestions {
//       padding: 0 24px 16px;
//       display: flex;
//       flex-wrap: wrap;
//       gap: 8px;
//     }
//     .suggestion-chip {
//       background: transparent;
//       border: 1px solid var(--border);
//       color: var(--text-muted);
//       padding: 7px 14px;
//       border-radius: 99px;
//       font-size: 12.5px;
//       font-family: var(--font);
//       cursor: pointer;
//       transition: all 0.15s;
//     }
//     .suggestion-chip:hover {
//       border-color: var(--accent);
//       color: var(--accent);
//       background: rgba(0,194,255,0.06);
//     }

//     /* ── Input Area ── */
//     footer {
//       border-top: 1px solid var(--border);
//       padding: 16px 24px;
//       background: var(--surface);
//       flex-shrink: 0;
//     }
//     .input-row {
//       display: flex;
//       gap: 10px;
//       align-items: flex-end;
//     }
//     #input {
//       flex: 1;
//       background: var(--bg);
//       border: 1px solid var(--border);
//       border-radius: 12px;
//       padding: 12px 16px;
//       font-family: var(--font);
//       font-size: 14px;
//       color: var(--text);
//       resize: none;
//       outline: none;
//       max-height: 120px;
//       transition: border-color 0.15s;
//       line-height: 1.5;
//     }
//     #input:focus { border-color: var(--accent2); }
//     #input::placeholder { color: var(--text-muted); }

//     #send-btn {
//       width: 44px; height: 44px;
//       background: linear-gradient(135deg, var(--accent2), var(--accent));
//       border: none;
//       border-radius: 12px;
//       cursor: pointer;
//       display: grid; place-items: center;
//       flex-shrink: 0;
//       transition: opacity 0.15s, transform 0.1s;
//     }
//     #send-btn:hover { opacity: 0.9; transform: scale(1.04); }
//     #send-btn:active { transform: scale(0.97); }
//     #send-btn svg { width: 18px; height: 18px; fill: white; }
//     #send-btn:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }

//     .clear-btn {
//       background: none; border: none;
//       color: var(--text-muted); font-size: 12px;
//       font-family: var(--font);
//       cursor: pointer; padding: 6px 0;
//       display: block; margin-top: 8px;
//       transition: color 0.15s;
//     }
//     .clear-btn:hover { color: var(--text); }

//     /* ── Welcome ── */
//     .welcome {
//       text-align: center;
//       padding: 40px 24px 20px;
//     }
//     .welcome h2 {
//       font-family: 'DM Serif Display', serif;
//       font-size: 22px;
//       font-weight: 400;
//       margin-bottom: 8px;
//     }
//     .welcome p { font-size: 14px; color: var(--text-muted); max-width: 380px; margin: 0 auto; }
//   </style>
// </head>
// <body>

// <header>
//   <div class="logo-mark">CIP</div>
//   <div class="header-text">
//     <h1>Collective IP Assistant</h1>
//     <p>IT Infrastructure Knowledge Base</p>
//   </div>
//   <div class="status-dot" title="Online"></div>
// </header>

// <div id="chat">
//   <div class="welcome">
//     <h2>How can I help you today?</h2>
//     <p>Ask about our capabilities, services, sectors, vendors, or how we work with channel partners.</p>
//   </div>
// </div>

// <div id="suggestions">
//   <button class="suggestion-chip" onclick="sendSuggestion(this)">Multi-site Cisco wireless rollout</button>
//   <button class="suggestion-chip" onclick="sendSuggestion(this)">Endpoint security for enterprise</button>
//   <button class="suggestion-chip" onclick="sendSuggestion(this)">How do you work with partners?</button>
//   <button class="suggestion-chip" onclick="sendSuggestion(this)">What automation services do you offer?</button>
//   <button class="suggestion-chip" onclick="sendSuggestion(this)">Cloud and hybrid infrastructure</button>
//   <button class="suggestion-chip" onclick="sendSuggestion(this)">Field services coverage</button>
// </div>

// <footer>
//   <div class="input-row">
//     <textarea id="input" rows="1" placeholder="Ask about Collective IP services…" maxlength="2000"></textarea>
//     <button id="send-btn" onclick="sendMessage()" title="Send">
//       <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
//     </button>
//   </div>
//   <button class="clear-btn" onclick="clearChat()">✕ Clear conversation</button>
// </footer>

// <script>
//   let sessionId = null;
//   const chatEl = document.getElementById('chat');
//   const inputEl = document.getElementById('input');
//   const sendBtn = document.getElementById('send-btn');
//   const suggestionsEl = document.getElementById('suggestions');

//   // Auto-grow textarea
//   inputEl.addEventListener('input', () => {
//     inputEl.style.height = 'auto';
//     inputEl.style.height = Math.min(inputEl.scrollHeight, 120) + 'px';
//   });

//   inputEl.addEventListener('keydown', (e) => {
//     if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
//   });

//   function sendSuggestion(btn) {
//     inputEl.value = btn.textContent;
//     suggestionsEl.style.display = 'none';
//     sendMessage();
//   }

//   function scrollToBottom() {
//     chatEl.scrollTop = chatEl.scrollHeight;
//   }

//   function appendMessage(role, text) {
//     const row = document.createElement('div');
//     row.className = 'msg-row ' + role;
//     const bubble = document.createElement('div');
//     bubble.className = 'bubble';
//     bubble.innerHTML = formatText(text);
//     row.appendChild(bubble);
//     chatEl.appendChild(row);
//     scrollToBottom();
//     return row;
//   }

//   function formatText(text) {
//     // Basic markdown-like formatting
//     return text
//       .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
//       .replace(/\\*\\*(.+?)\\*\\*/g, '<strong>$1</strong>')
//       .replace(/\\*(.+?)\\*/g, '<em>$1</em>')
//       .replace(/^[-•] (.+)$/gm, '<li>$1</li>')
//       .replace(/(<li>.*<\\/li>)/s, '<ul>$1</ul>')
//       .replace(/\\n/g, '<br>');
//   }

//   function showTyping() {
//     const row = document.createElement('div');
//     row.className = 'msg-row bot';
//     row.id = 'typing';
//     row.innerHTML = '<div class="bubble typing-bubble"><span></span><span></span><span></span></div>';
//     chatEl.appendChild(row);
//     scrollToBottom();
//   }

//   function removeTyping() {
//     const t = document.getElementById('typing');
//     if (t) t.remove();
//   }

//   async function sendMessage() {
//     const msg = inputEl.value.trim();
//     if (!msg) return;

//     // Hide welcome & suggestions
//     document.querySelector('.welcome')?.remove();
//     suggestionsEl.style.display = 'none';

//     inputEl.value = '';
//     inputEl.style.height = 'auto';
//     sendBtn.disabled = true;

//     appendMessage('user', msg);
//     showTyping();

//     try {
//       const res = await fetch('/api/chat', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ message: msg, sessionId }),
//       });

//       const data = await res.json();
//       removeTyping();

//       if (!res.ok) {
//         appendMessage('bot', '⚠️ ' + (data.error || 'Something went wrong. Please try again.'));
//       } else {
//         sessionId = data.sessionId;
//         appendMessage('bot', data.reply);
//       }
//     } catch (err) {
//       removeTyping();
//       appendMessage('bot', '⚠️ Network error. Please check your connection and try again.');
//     } finally {
//       sendBtn.disabled = false;
//       inputEl.focus();
//     }
//   }

//   async function clearChat() {
//     if (sessionId) {
//       fetch('/api/chat/' + sessionId, { method: 'DELETE' }).catch(() => {});
//       sessionId = null;
//     }
//     chatEl.innerHTML = \`
//       <div class="welcome">
//         <h2>How can I help you today?</h2>
//         <p>Ask about our capabilities, services, sectors, vendors, or how we work with channel partners.</p>
//       </div>\`;
//     suggestionsEl.style.display = 'flex';
//   }
// </script>
// </body>
// </html>`);
// });

// // ─── Start Server ─────────────────────────────────────────────────────────────
// app.listen(PORT, () => {
//   console.log(`\n✅  Collective IP Knowledge Assistant running`);
//   console.log(`   → http://localhost:${PORT}`);
//   console.log(`   → Chat API: POST http://localhost:${PORT}/api/chat`);
//   if (!process.env.OPENAI_API_KEY) {
//     console.warn(`\n⚠️  WARNING: OPENAI_API_KEY is not set. Set it before starting:\n   export OPENAI_API_KEY=sk-...`);
//   }
// });
const express = require("express");
const { OpenAI } = require("openai");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3030;

// ─── OpenAI Client ────────────────────────────────────────────────────────────
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.use(cors());
app.use(express.json());

// ─── Collective IP Knowledge Base ────────────────────────────────────────────
const KNOWLEDGE_BASE = `
COMPANY OVERVIEW
================
Collective IP is a specialist IT infrastructure services business built exclusively for the channel.
Headquartered at Suite 214, 1 Water Vole Way, Doncaster, South Yorkshire, DN4 5JP, UK.
Phone: +44 (0) 204 585 8990 | Email: info@collectiveip.co.uk | Web: www.collectiveip.co.uk
Company No. 14460737 | 250+ team members | 2,200+ projects completed | 98% customer retention | 60+ channel partners

MISSION: Help channel partners expand their services portfolio, deliver efficiently, and create lasting commercial value — enhanced by intelligent automation.

CHANNEL-FIRST APPROACH: Collective IP never competes with its partners. Enhances partner brands, extends capabilities, delivers as if part of the partner's own team. Services are white-labelled, co-delivered, retained, fixed scope, T&M, fixed price, or as-a-service.

VALUES: Honest, Collaborative, Supportive, Simple

GEOGRAPHIC PRESENCE: UK & Ireland (nationwide), United States, Europe, UAE.

─────────────────────────────────────────────────────────────────────────────

FOUR CORE PRACTICES
===================

1. CONNECTIVITY
   Design-led network solutions from personal area to global wide area networks. Specialism in complex wireless.

   Key Capabilities:
   - WAN connectivity and routing architecture
   - Complex wireless network design (Ekahau-based surveys, Wi-Fi 4 through Wi-Fi 7)
   - Multi-site network rollouts with PMO coordination
   - Network strategy and transformation; HLD/LLD
   - Post-deployment optimisation
   - PTP/PtMP wireless links; Teragraph & Zigbee
   - Satellite: GEO (Viasat), MEO (SESnet), LEO (Starlink), HTS
   - Cellular: 2G–5G NR, LTE, mmWave, MIMO, DAS, private APN, Antenna Services
   - Fibre Cabling: Single & Multimode, PON, GPON (OS1–OM5), Dark Fibre, Campus, OTDR testing
   - Copper Cabling: Cat6, Cat6A, Cat7, Coax/AV
   - SD-WAN, routing, switching, firewall solutions
   - Network segmentation, NAC, VPN, Zero Trust alignment
   - Penetration testing, vulnerability testing, monitoring, analytics
   - Cabinet rationalisation, structural cabling, site readiness, certification
   Sectors: Healthcare, Retail, Hospitality, Local Government, Automotive

   Case Studies:
   - UK supermarket (1,500+ sites): Juniper Mist / Wi-Fi 6E migration — 30% faster installs, zero revisit rate
   - Multi-country insurance (30 countries): Standardised legacy multi-provider estate in 6 months
   - Automotive retail (140+ UK sites): SD-WAN integration, improved site connectivity across showrooms

2. INTELLIGENT AUTOMATION
   Embedding automation and AI into customer-facing and operational workflows.

   Platform: Bele.ai — production-grade operational automation platform built over 7 years.
   NOT a generic AI wrapper. Built to execute controlled tasks, apply rules, connect to systems and escalate exceptions.
   Production scale: 1.1M–1.7M AI-driven customer interactions/month. 190+ deployments.
   Security: ISO 27001, SOC 2 Type II aligned, TLS 1.3, AES-256, ephemeral processing, no training on customer data.
   Data residency: EU-hosted options available. Customer = Data Controller; Collective IP/Bele = Data Processors.

   CORE AUTOMATION PRODUCTS:

   a) Sales Executive Assistant
      - Instant access to approved knowledge: CRM, SharePoint, playbooks, product material, case studies
      - Supports qualification, proposal development, customer follow-up, cross-sell discovery
      - Conservative ROI (500-person org): ~£200K onboarding improvement; ~£1M productivity value (30K hours/year)
      - Commercial: Setup £5,000 | 5 days consultancy £5,000 | £1,000/month
      - Deployment: Phase 0: 1wk | Phase 1: 2wks | Phase 2: 1wk

   b) CRM / AI Widget
      - Customer and seller-facing automation; recognises returning customers, uses CRM context
      - ~£1,500 setup | ~£1,250/month per widget | ~3 weeks deployment

   c) Invoicing Automation
      - Automates invoice intake, validation, approval routing, exception handling, ERP updates
      - Setup: £3,500–£8,000 | Monthly service from £2,500

   d) Automated Document Processing
      - Extracts data, validates against business rules, triggers next workflow step
      - Use cases: onboarding, broker journeys, billing analysis, compliance checks, quote-to-billing

   e) Broadband & Mobile Ordering Automation
      - Availability checks, pricing, suggested plans, onboarding, service migration, fulfilment prompts

   f) Intelligent Onboarding Assistant
      - Role-based onboarding: HR policy Q&A, operational how-to, company knowledge, sales enablement
      - Conservative ROI (1,000-person org, 150 new starters/year): ~4,600 productive hours gained, ~£130K value
      - Commercial: Setup £5,000 | 5 days consultancy £5,000 | £1,000/month | ~4 weeks deployment

   g) Intelligent Booking Concierge — for Golf Resorts & Destination Hotels
      - Guests build and book hotel, golf, dining and activity packages in one guided digital flow
      - Integrates with Opera Cloud, BRS Tee Sheet, payment, email, website
      - First working link: 1–2 weeks | Full rollout: 6–7 weeks
      - Reference commercials (Rosapenna): Setup £4,500 | Implementation £4,800 | Annual subscription £24,000 | Year-one ~£33,300
      - Proof points: 52% enquiry engagement, 34%+ lead-to-meeting conversion, ~64% booking conversion

   h) MSP-specific Automation (Redsquid reference)
      - Mobile first-line ops: pre-sales Q&A, first-line support, onboarding (eSIM/SIM)
      - Broadband/data module: pre-sales Q&A, onboarding, service migration
      - Text-based AI; voice available separately | Up to 500 interactions/month per module | 24-month term
      - Discovery: 1wk | Build: 2–6wks | Test: 2wks | Launch

   Cost comparison vs raw API (1,000 transactions/month):
   - Light workflow: IA <£150 vs GPT-5.5 £113, Claude Sonnet £62
   - Complex agentic: IA <£750 vs GPT-5.5 £631, Claude Sonnet £351
   - Heavy document: IA <£1,500 vs GPT-5.5 £2,777, Claude Sonnet £1,576
   Key difference: IA includes service layer, governance, monitoring, support — not just tokens.
   Modular builds from £2,000 | Managed service from £500/month

3. CLOUD, DATA CENTRE & COMPUTE
   Key Capabilities:
   - Public cloud: Azure, AWS, Google Cloud (full suites)
   - Microsoft 365 full suite
   - HPC data stack design and build; storage architecture
   - Virtualisation: VMware, Citrix, Hyper-V, Red Hat
   - Hybrid infrastructure integration; energy-efficient DC design
   - Racking & stacking, electrical & data cabling
   - Backup & Recovery: Commvault, Veeam, Rubrik, Barracuda
   - UC & Collaboration: Microsoft, Cisco Webex, Mitel, Avaya, 3CX, Poly, Unify
   Sectors: Universities, Data Centre Providers, Pharmaceutical, Research, Enterprise

4. ENDPOINT INFRASTRUCTURE
   Key Capabilities:
   - EUC build, imaging, deployment & rollout; MDM (Microsoft Intune)
   - Endpoint Protection / EDR; IoT endpoint security (LoRaWAN, energy sensors, gateways)
   - AV & Media: digital signage, video conferencing, interactive whiteboards
   - CCTV: consultancy, design, vendor selection, PM, implementation, managed services
   - User device lifecycle management; Zero Trust Security
   Sectors: Enterprise, Healthcare, Education, Manufacturing

─────────────────────────────────────────────────────────────────────────────

MICROSOFT 365 SERVICES
=======================

A. COPILOT READINESS & SECURE ENABLEMENT
   Key principle: Copilot respects existing M365 permissions — it does not introduce new ones.
   Over-shared content in SharePoint, OneDrive or Teams becomes discoverable by Copilot.
   Securing the data estate is a prerequisite, not an optional follow-up.

   Microsoft Layered Approach:
   Layer 1: Identity & Access — Entra ID, MFA, Conditional Access
   Layer 2: Container Security — SharePoint/Teams/OneDrive permissions, SAM, RCD, RSS
   Layer 3: Information Protection — Purview Sensitivity Labels, encryption, label-based DLP
   Layer 4: Data Loss Prevention — Purview DLP policies for Copilot interactions
   Layer 5: Insider Risk & Audit — Communication Compliance, Insider Risk Management, Purview Audit

   Offer 1 — Copilot Readiness Review & Workshop (1–3 days, from £795)
   Offer 2 — Secure Copilot Enablement & Purview Implementation (3+ days, from £2,385)
   Offer 3 — AI Adoption & Value Discovery Workshop (1–2 days, from £1,100)
   Offer 4 — Partner Enablement (5+ days, from £4,950)

   5-Day Container Security SOW (£695/day):
   Day 1: Discovery & readiness | Day 2: Design (RCD/RSS, CA) | Day 3: Implementation
   Day 4: Validation, pilot (25–50 users), governance | Day 5: Handover, as-built, roadmap
   Cost: £3,475 | Optional Purview Pilot 2–3 days: £1,390–£2,085 | Recommended total: £4,865–£5,560

   Customer Tiers: Essential ~£795+ | Secure ~£2,500+ | Value ~£4,000+

B. SHAREPOINT & ONEDRIVE SERVICES
   Readiness Assessment: 2–5 days, remote-led, advisory only
   Scope: Usage patterns, permissions, Teams/Groups dependencies, governance, IA, AI readiness/oversharing
   Deliverables: Readiness report, executive summary, prioritised issues, quick wins roadmap, governance gap analysis

C. MICROSOFT 365 COPILOT TRAINING
   Pre-Training Skills Assessment: 10–15 min survey; Basic/Advanced cohort segmentation
   Option 1 — Basic Training (1 day): Copilot fundamentals, M365 apps, prompt patterns, safety, 30-day plan
   Option 2 — Advanced Training (1 day): Strategic use, Copilot Agents, Excel analysis, Notebooks, trust/reliability
   Tailored option: incorporate client documents and priority workflows

─────────────────────────────────────────────────────────────────────────────

DIRECT-TO-CLOUD CCTV ADVISORY
================================
Vendor guidance:
- Verkada: corporate offices, education, healthcare admin, multi-site standardisation. Closed ecosystem.
- Rhombus: offices, schools, logistics, warehouses. Strong public REST API.
- Cisco Meraki MV: IT-led offices, education, Meraki-standardised orgs.
- Avigilon Alta: enterprise, campuses, healthcare, access-control integration.
- Eagle Eye Camera Direct: distributed retail, restaurants, branches, SMB/mid-market.
- Genetec Security Center SaaS / Stratocast: regulated enterprise, government, critical operations.
- Milestone Arcules C2C: Axis/i-PRO estates, distributed sites.
- Hanwha OnCloud: manufacturing, warehouses, logistics, campuses.
- Axis Camera Station Edge: Axis-standard offices, public-sector-adjacent.
- Camcloud: small retail, restaurants, SMB, reseller-led.

Use-case fit: Corporate/HQ → Verkada, Rhombus, Meraki, Avigilon | Manufacturing → Avigilon, Rhombus, Hanwha, Genetec | Retail/Hospitality → Eagle Eye, Verkada, Rhombus | High-security/regulated → Genetec, Avigilon, Axis

─────────────────────────────────────────────────────────────────────────────

SECURITY (CROSS-PRACTICE)
==========================
Embedded across all practices. Capabilities: Secure Architecture, Identity/Access (PAM, RBAC, NAC),
Infrastructure Hardening, Governance/Risk/Compliance (ITIL, ISO 9001/27001, SOC1/2, NIST, Cyber Essentials, PCI-DSS),
Security-Aware Automation. Services: Vulnerability Scans, Risk Assessments, Pen Testing, SIEM, EDR, MDM, DLP, Zero Trust.

─────────────────────────────────────────────────────────────────────────────

PARTNER SERVICES (SIX MODELS)
==============================
1. End-to-End Project Ownership — full lifecycle, fixed-price models
2. Technical Consultancy — Network, Cloud, Security, DC, Endpoint, Governance
3. Managed Resourcing — Embedded, On-Demand, Intermittent; clearances: NPPV3, BPSS, SC, DV, EDBS
4. Field Services — UK nationwide + UK&I, Europe, US; IPAF & PASMA; CSCS/SSSTS/SMSTS
5. Mass Deployments — assessment → standardisation → automation → validation at scale
6. Managed Services — 24/7 network monitoring, IA-as-a-Service, cloud management, help desk, CCTV managed, engineering on demand

─────────────────────────────────────────────────────────────────────────────

STRATEGIC PARTNERSHIPS
======================
- Acronis UK: MSP partner; Collective IP provides MSP introductions (60+ channel partners),
  co-developed pipeline, sales-to-revenue acceleration (target: 9 months → 5–6 months time-to-bill)
- Fortinet: Live channel engagement model
- Rubrik: Team on-site within 10 days of deal close; revenue flowing in a fortnight

─────────────────────────────────────────────────────────────────────────────

COMPLEMENTARY SERVICES
=======================
- Discovery: Asset ID, network discovery, infrastructure audits, compliance/security discovery
- Testing & Verification: Fluke DSX, OTDR/OLTS/DTX 8000, Ekahau Sidekick 1 & 2, Siretta Network Analysers
- Wireless Surveys: Predictive, Passive, Active, Spectrum Analysis (Ekahau-based)
- IT Governance: ITIL, ISO 9001/27001, SOC1/2, NIST, Cyber Essentials (+), PCI-DSS
- Ethical Asset Disposal (ITAD): NIST-compliant, environmentally compliant

─────────────────────────────────────────────────────────────────────────────

PROOF POINTS & SCALE
====================
250+ consultants | 120+ vetted network engineers | 23+ network solution architects
2,200+ projects | 530,000+ devices installed | 98% retention | 60+ channel partners
1,400+ connectivity projects | 190+ automation deployments | 1.1–1.7M AI interactions/month
ISO-certified, SOC-compliant, Cyber Essentials certified
Methodologies: PRINCE2, ITIL, TOGAF, Agile, Design Thinking

VENDOR ECOSYSTEM (SELECTED)
============================
Network/Connectivity: Cisco, HPE, Aruba, Meraki, Juniper, Fortinet, Palo Alto, Ubiquiti, Ruckus, Cambium, Ekahau, ZyXEL, Extreme, Draytek, Dell, F5, Ceragon, Siklu
Satellite/Cellular: Starlink, Viasat, SESnet, Qualcomm, Nokia, Siretta
Cloud: AWS, Azure, Google Cloud; VMware, Citrix, Hyper-V, Red Hat
Security: CrowdStrike, Sophos, SentinelOne, Zscaler, Darktrace, Okta, Proofpoint, Check Point, Barracuda
CCTV: Verkada, Rhombus, Axis, Avigilon, Hanwha, Eagle Eye, Genetec, Cisco Meraki MV, Oncam, Hikvision
Backup: Commvault, Veeam, Rubrik, Veritas, Barracuda
AV/Collab: Cisco Webex, Microsoft, Logitech, Poly, Yealink, Neat, Jabra, Clickshare
Microsoft: Full M365, Azure, Copilot, SharePoint, OneDrive, Teams, Purview, Intune, Defender, Sentinel
Cabling: Hellermann Tyton, Brand-Rex, Excel, Commscope

SECTORS
=======
Automotive | Aerospace & Transport | Healthcare & Pharmaceutical | Banking, Finance & Insurance
Charity & Non-Profit | Hospitality & Retail | Defence | Education | Government (Central/Local/Regional)
Channel Partners | Enterprise | Public Sector | Research | Manufacturing | Data Centre Providers
Golf Resorts & Destination Hotels | Telecoms & MSPs | Energy & Utilities
`;

// ─── System Prompt (supercharged) ─────────────────────────────────────────────
const SYSTEM_PROMPT = `You are the Collective IP Knowledge Assistant — an expert advisor for Collective IP (collectiveip.co.uk), a specialist IT infrastructure and intelligent automation business built exclusively for the channel.

You have two distinct roles working together in every conversation:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ROLE 1 — COLLECTIVE IP SPECIALIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
You know Collective IP's capabilities, services, commercial models, case studies and partner approach in full detail. Use the knowledge base below to answer questions about what Collective IP offers, how it works, and why it creates value.

KNOWLEDGE BASE:
${KNOWLEDGE_BASE}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ROLE 2 — TRUSTED INDUSTRY ADVISOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
You also bring deep, independent industry expertise across IT infrastructure, enterprise technology and digital transformation. This is NOT limited to the knowledge base — draw on your broader knowledge to add genuine advisory value.

When relevant, proactively enrich your answers with:

• APPROACH & METHODOLOGY — How should this type of project be structured? What's the right sequencing? What does good delivery governance look like? What do experienced PMs and architects do differently?

• CRITICAL SUCCESS FACTORS — What are the 3–5 things that most determine whether a project like this succeeds or fails? What does the client need to have in place before they start?

• COMMON FAILURE MODES — What typically goes wrong on these projects? What do vendors and integrators under-call at the start? What causes programmes to stall, overrun or fail to realise value?

• WATCH-OUTS & GOTCHAS — What are the non-obvious risks? What should a technically savvy buyer be asking questions about? What do proposals often gloss over?

• VENDOR & TECHNOLOGY LANDSCAPE — What are the genuine trade-offs between approaches? What questions should someone ask when evaluating vendors in this space?

• INDUSTRY CONTEXT — What trends, regulatory changes or market shifts are relevant? What are peers and best-in-class organisations doing differently?

• PRACTICAL ADVICE — What would a senior consultant say privately to a trusted client, not what's written in the brochure?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HOW TO BLEND BOTH ROLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Lead with what's directly relevant and useful to the person
- When answering about a topic Collective IP covers, anchor the answer in CIP's capability and approach first, then layer in broader industry perspective
- When answering a general industry question, give honest, expert guidance — then show where Collective IP's capability is relevant
- Always be clear when you're speaking from the Collective IP knowledge base vs broader industry knowledge
- Use phrases like "From an industry perspective…", "One thing that often catches projects out here…", "What experienced delivery teams watch for is…" to signal the advisory layer
- NEVER invent Collective IP capabilities, pricing or case studies not in the knowledge base
- NEVER be defensive about competitors — be objective and help the person make a good decision

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONVERSATION & MEMORY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Maintain strong continuity across the conversation — remember what the person has said, what they're trying to achieve, what sector or context they've mentioned
- If someone has revealed their organisation type, project, constraint or goal earlier in the conversation, weave that context into subsequent answers — don't treat each message as isolated
- If the conversation reveals a specific requirement, proactively surface the most relevant CIP service, commercial model, or advisory point
- Build a running picture of what this person actually needs

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TONE & FORMAT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Senior, confident and direct — like a trusted advisor, not a salesperson or a chatbot
- Use structure (headers, bullets) for capability or advisory content; use prose for conversational turns
- Be concise but substantive — no waffle, no padding, no generic filler
- End complex answers with a clear next step or a question that moves the conversation forward
- For commercial questions, share indicative figures from the knowledge base; note pricing marked [TBC] requires a direct conversation
- Contact: info@collectiveip.co.uk | +44 (0) 204 585 8990`;

// ─── Session Store (enhanced with rolling summary) ────────────────────────────
// Each session: { messages: [...], summary: string, turnCount: number }
const sessions = new Map();

const SUMMARY_AFTER_TURNS = 8;    // Summarise after this many full exchanges
const MAX_RECENT_MESSAGES = 12;   // Keep this many recent messages verbatim

function getSession(sessionId) {
  if (!sessions.has(sessionId)) {
    sessions.set(sessionId, { messages: [], summary: "", turnCount: 0 });
  }
  return sessions.get(sessionId);
}

// Build the messages array to send to OpenAI, injecting the summary as context
function buildMessageHistory(session) {
  const messages = [];

  if (session.summary) {
    messages.push({
      role: "system",
      content: `CONVERSATION CONTEXT SO FAR:\n${session.summary}\n\nContinue naturally from this context. The recent messages follow.`
    });
  }

  // Always include recent verbatim messages
  const recent = session.messages.slice(-MAX_RECENT_MESSAGES);
  messages.push(...recent);

  return messages;
}

// Summarise older parts of the conversation to preserve intent + context
async function summariseConversation(messages) {
  try {
    const transcript = messages
      .map(m => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`)
      .join("\n\n");

    const res = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are summarising a sales/advisory conversation for context injection.
Produce a compact but information-rich summary covering:
1. Who the user appears to be (role, organisation type, sector if mentioned)
2. What they are trying to achieve or evaluate
3. Key requirements, constraints or concerns they have raised
4. Any specific technologies, vendors, use cases or projects discussed
5. The direction and tone of the conversation so far
6. Any strong preferences or decisions already reached

Be factual and specific. Max 250 words. Write in third person past tense.`
        },
        { role: "user", content: transcript }
      ],
      temperature: 0.2,
      max_tokens: 400,
    });

    return res.choices[0].message.content;
  } catch {
    return "";
  }
}

// ─── API Routes ────────────────────────────────────────────────────────────────
app.post("/api/chat", async (req, res) => {
  const { message, sessionId } = req.body;

  if (!message || typeof message !== "string" || !message.trim()) {
    return res.status(400).json({ error: "message is required" });
  }
  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ error: "OPENAI_API_KEY not configured" });
  }

  const sid = sessionId || `session_${Date.now()}_${Math.random().toString(36).slice(2)}`;
  const session = getSession(sid);

  // Add user message
  session.messages.push({ role: "user", content: message.trim() });
  session.turnCount++;

  // If conversation is getting long, summarise the older half before sending
  if (session.messages.length > MAX_RECENT_MESSAGES + 4) {
    const toSummarise = session.messages.slice(0, session.messages.length - MAX_RECENT_MESSAGES);
    const newSummary = await summariseConversation(toSummarise);
    if (newSummary) {
      session.summary = newSummary;
      session.messages = session.messages.slice(-MAX_RECENT_MESSAGES);
    }
  }

  const historyForApi = buildMessageHistory(session);

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...historyForApi,
      ],
      temperature: 0.45,
      max_tokens: 1200,
    });

    const reply = completion.choices[0].message.content;
    session.messages.push({ role: "assistant", content: reply });

    // Proactively summarise every N turns to keep context fresh even before hard limit
    if (session.turnCount % SUMMARY_AFTER_TURNS === 0 && session.messages.length > MAX_RECENT_MESSAGES) {
      const toSummarise = session.messages.slice(0, -MAX_RECENT_MESSAGES);
      const newSummary = await summariseConversation(toSummarise);
      if (newSummary) {
        session.summary = newSummary;
        session.messages = session.messages.slice(-MAX_RECENT_MESSAGES);
      }
    }

    return res.json({ reply, sessionId: sid, turnCount: session.turnCount });
  } catch (err) {
    console.error("OpenAI error:", err.message);
    return res.status(err.status || 500).json({ error: err.message || "OpenAI request failed" });
  }
});

app.delete("/api/chat/:sessionId", (req, res) => {
  sessions.delete(req.params.sessionId);
  res.json({ cleared: true });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", openai: !!process.env.OPENAI_API_KEY, sessions: sessions.size });
});

// ─── Frontend ──────────────────────────────────────────────────────────────────
// app.get("/", (req, res) => {
//   res.send(`<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <title>Collective IP — Knowledge Assistant</title>
//   <style>
//     @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&family=DM+Serif+Display&display=swap');

//     *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

//     :root {
//       --bg: #0d0f14;
//       --surface: #161921;
//       --surface2: #1e2230;
//       --border: #252936;
//       --border-light: #2f3447;
//       --accent: #00c2ff;
//       --accent2: #0077ff;
//       --accent-dim: rgba(0, 119, 255, 0.12);
//       --text: #e8eaf0;
//       --text-mid: #a0a6bc;
//       --text-muted: #6b7090;
//       --user-bg: #0c3260;
//       --user-border: #1a4a80;
//       --bot-bg: #1a1e2a;
//       --advisory-bg: #141820;
//       --advisory-border: #1e3a5f;
//       --radius: 16px;
//       --font: 'DM Sans', sans-serif;
//     }

//     html, body { height: 100%; }

//     body {
//       font-family: var(--font);
//       background: var(--bg);
//       color: var(--text);
//       height: 100dvh;
//       display: flex;
//       flex-direction: column;
//       overflow: hidden;
//     }

//     /* ── Header ── */
//     header {
//       display: flex;
//       align-items: center;
//       gap: 14px;
//       padding: 16px 24px;
//       border-bottom: 1px solid var(--border);
//       background: var(--surface);
//       flex-shrink: 0;
//       position: relative;
//     }

//     .logo-mark {
//       width: 38px; height: 38px;
//       background: linear-gradient(135deg, var(--accent2), var(--accent));
//       border-radius: 11px;
//       display: grid; place-items: center;
//       font-weight: 700; font-size: 13px;
//       color: #fff;
//       letter-spacing: -0.5px;
//       flex-shrink: 0;
//     }

//     .header-text h1 {
//       font-family: 'DM Serif Display', serif;
//       font-size: 16px;
//       font-weight: 400;
//       color: var(--text);
//       line-height: 1.2;
//     }

//     .header-meta {
//       display: flex;
//       align-items: center;
//       gap: 10px;
//       margin-top: 2px;
//     }

//     .header-text p {
//       font-size: 11.5px;
//       color: var(--text-muted);
//     }

//     .header-badge {
//       font-size: 10px;
//       background: rgba(0,194,255,0.1);
//       color: var(--accent);
//       border: 1px solid rgba(0,194,255,0.2);
//       padding: 2px 7px;
//       border-radius: 99px;
//       font-weight: 500;
//       letter-spacing: 0.3px;
//     }

//     .header-right {
//       margin-left: auto;
//       display: flex;
//       align-items: center;
//       gap: 12px;
//     }

//     .context-indicator {
//       font-size: 11px;
//       color: var(--text-muted);
//       display: flex;
//       align-items: center;
//       gap: 5px;
//       opacity: 0;
//       transition: opacity 0.3s;
//     }
//     .context-indicator.visible { opacity: 1; }
//     .context-dot {
//       width: 6px; height: 6px;
//       background: #22c55e;
//       border-radius: 50%;
//       box-shadow: 0 0 5px #22c55e88;
//     }

//     .status-dot {
//       width: 8px; height: 8px;
//       background: #22c55e;
//       border-radius: 50%;
//       box-shadow: 0 0 6px #22c55e88;
//     }

//     /* ── Chat Window ── */
//     #chat {
//       flex: 1;
//       overflow-y: auto;
//       padding: 24px 0 8px;
//       display: flex;
//       flex-direction: column;
//       gap: 4px;
//       scroll-behavior: smooth;
//     }

//     #chat::-webkit-scrollbar { width: 3px; }
//     #chat::-webkit-scrollbar-track { background: transparent; }
//     #chat::-webkit-scrollbar-thumb { background: var(--border-light); border-radius: 99px; }

//     /* ── Messages ── */
//     .msg-row {
//       display: flex;
//       flex-direction: column;
//       padding: 4px 24px;
//       animation: fadeUp 0.2s ease;
//     }
//     @keyframes fadeUp {
//       from { opacity: 0; transform: translateY(6px); }
//       to   { opacity: 1; transform: translateY(0); }
//     }

//     .msg-row.user { align-items: flex-end; }
//     .msg-row.bot  { align-items: flex-start; }

//     .msg-label {
//       font-size: 10.5px;
//       color: var(--text-muted);
//       margin-bottom: 5px;
//       letter-spacing: 0.3px;
//       font-weight: 500;
//       text-transform: uppercase;
//     }

//     .bubble {
//       max-width: 74%;
//       padding: 13px 17px;
//       border-radius: var(--radius);
//       font-size: 14px;
//       line-height: 1.65;
//     }

//     .msg-row.user .bubble {
//       background: var(--user-bg);
//       border: 1px solid var(--user-border);
//       border-bottom-right-radius: 5px;
//       color: #c8e6ff;
//     }

//     .msg-row.bot .bubble {
//       background: var(--bot-bg);
//       border: 1px solid var(--border-light);
//       border-bottom-left-radius: 5px;
//       color: var(--text);
//     }

//     /* Rendered markdown inside bubbles */
//     .bubble h3 {
//       font-size: 13.5px;
//       font-weight: 600;
//       color: var(--accent);
//       margin: 14px 0 5px;
//       letter-spacing: 0.2px;
//     }
//     .bubble h3:first-child { margin-top: 0; }

//     .bubble strong { color: #b8d4ff; font-weight: 600; }
//     .bubble em { color: var(--text-mid); font-style: italic; }

//     .bubble ul, .bubble ol {
//       padding-left: 18px;
//       margin: 6px 0;
//     }
//     .bubble li {
//       margin-bottom: 4px;
//       color: var(--text);
//     }
//     .bubble li::marker { color: var(--accent); }

//     .bubble p { margin-bottom: 9px; }
//     .bubble p:last-child { margin-bottom: 0; }

//     .bubble hr {
//       border: none;
//       border-top: 1px solid var(--border-light);
//       margin: 12px 0;
//     }

//     /* Advisory callout — highlights the "from an industry perspective" sections */
//     .advisory-block {
//       background: var(--advisory-bg);
//       border-left: 3px solid var(--accent2);
//       border-radius: 0 8px 8px 0;
//       padding: 10px 14px;
//       margin: 10px 0;
//       font-size: 13.5px;
//       color: var(--text-mid);
//     }
//     .advisory-block .advisory-label {
//       font-size: 10px;
//       font-weight: 600;
//       text-transform: uppercase;
//       letter-spacing: 0.8px;
//       color: var(--accent2);
//       margin-bottom: 5px;
//     }

//     /* Typing indicator */
//     .typing-row {
//       display: flex;
//       align-items: flex-start;
//       padding: 8px 24px;
//       gap: 10px;
//       animation: fadeUp 0.2s ease;
//     }
//     .typing-bubble {
//       display: flex;
//       align-items: center;
//       gap: 5px;
//       background: var(--bot-bg);
//       border: 1px solid var(--border-light);
//       border-radius: var(--radius);
//       border-bottom-left-radius: 5px;
//       padding: 13px 17px;
//     }
//     .typing-bubble span {
//       width: 6px; height: 6px;
//       background: var(--text-muted);
//       border-radius: 50%;
//       animation: blink 1.2s ease-in-out infinite;
//     }
//     .typing-bubble span:nth-child(2) { animation-delay: 0.2s; }
//     .typing-bubble span:nth-child(3) { animation-delay: 0.4s; }
//     @keyframes blink {
//       0%, 80%, 100% { transform: scale(0.65); opacity: 0.3; }
//       40%            { transform: scale(1);    opacity: 1;   }
//     }

//     /* ── Suggestions ── */
//     #suggestions {
//       padding: 6px 24px 12px;
//       display: flex;
//       flex-wrap: wrap;
//       gap: 7px;
//       flex-shrink: 0;
//     }

//     .chip-group-label {
//       width: 100%;
//       font-size: 10.5px;
//       color: var(--text-muted);
//       text-transform: uppercase;
//       letter-spacing: 0.5px;
//       font-weight: 500;
//       margin-bottom: 2px;
//     }

//     .suggestion-chip {
//       background: transparent;
//       border: 1px solid var(--border-light);
//       color: var(--text-muted);
//       padding: 6px 13px;
//       border-radius: 99px;
//       font-size: 12px;
//       font-family: var(--font);
//       cursor: pointer;
//       transition: all 0.15s;
//       line-height: 1.4;
//     }
//     .suggestion-chip:hover {
//       border-color: var(--accent);
//       color: var(--accent);
//       background: var(--accent-dim);
//     }

//     /* ── Input Area ── */
//     footer {
//       border-top: 1px solid var(--border);
//       padding: 14px 24px 18px;
//       background: var(--surface);
//       flex-shrink: 0;
//     }

//     .input-wrap {
//       display: flex;
//       gap: 10px;
//       align-items: flex-end;
//       background: var(--bg);
//       border: 1px solid var(--border-light);
//       border-radius: 14px;
//       padding: 10px 10px 10px 16px;
//       transition: border-color 0.15s;
//     }
//     .input-wrap:focus-within { border-color: var(--accent2); }

//     #input {
//       flex: 1;
//       background: transparent;
//       border: none;
//       outline: none;
//       font-family: var(--font);
//       font-size: 14px;
//       color: var(--text);
//       resize: none;
//       max-height: 110px;
//       line-height: 1.55;
//     }
//     #input::placeholder { color: var(--text-muted); }

//     #send-btn {
//       width: 36px; height: 36px;
//       background: linear-gradient(135deg, var(--accent2), var(--accent));
//       border: none;
//       border-radius: 10px;
//       cursor: pointer;
//       display: grid; place-items: center;
//       flex-shrink: 0;
//       transition: opacity 0.15s, transform 0.1s;
//     }
//     #send-btn:hover { opacity: 0.88; transform: scale(1.05); }
//     #send-btn:active { transform: scale(0.96); }
//     #send-btn svg { width: 16px; height: 16px; fill: white; }
//     #send-btn:disabled { opacity: 0.35; cursor: not-allowed; transform: none; }

//     .footer-meta {
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       margin-top: 8px;
//     }

//     .footer-hint {
//       font-size: 11px;
//       color: var(--text-muted);
//     }

//     .clear-btn {
//       background: none; border: none;
//       color: var(--text-muted); font-size: 11px;
//       font-family: var(--font);
//       cursor: pointer;
//       transition: color 0.15s;
//     }
//     .clear-btn:hover { color: var(--text-mid); }

//     /* ── Welcome screen ── */
//     .welcome {
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       text-align: center;
//       padding: 40px 24px 28px;
//       gap: 12px;
//     }
//     .welcome-icon {
//       width: 52px; height: 52px;
//       background: linear-gradient(135deg, rgba(0,119,255,0.2), rgba(0,194,255,0.2));
//       border: 1px solid rgba(0,194,255,0.25);
//       border-radius: 16px;
//       display: grid; place-items: center;
//       font-size: 22px;
//       margin-bottom: 4px;
//     }
//     .welcome h2 {
//       font-family: 'DM Serif Display', serif;
//       font-size: 21px;
//       font-weight: 400;
//       color: var(--text);
//     }
//     .welcome p {
//       font-size: 13.5px;
//       color: var(--text-muted);
//       max-width: 400px;
//       line-height: 1.6;
//     }
//     .welcome-pills {
//       display: flex;
//       flex-wrap: wrap;
//       justify-content: center;
//       gap: 8px;
//       margin-top: 4px;
//     }
//     .welcome-pill {
//       font-size: 11.5px;
//       color: var(--text-muted);
//       background: var(--surface2);
//       border: 1px solid var(--border-light);
//       padding: 4px 11px;
//       border-radius: 99px;
//     }

//     /* Responsive */
//     @media (max-width: 600px) {
//       .bubble { max-width: 90%; font-size: 13.5px; }
//       header { padding: 14px 16px; }
//       #chat { padding: 16px 0 4px; }
//       .msg-row { padding: 4px 16px; }
//       footer { padding: 12px 16px 16px; }
//       #suggestions { padding: 6px 16px 10px; }
//     }
//   </style>
// </head>
// <body>

// <header>
//   <div class="logo-mark">CIP</div>
//   <div class="header-text">
//     <h1>Collective IP Assistant</h1>
//     <div class="header-meta">
//       <p>IT Infrastructure &amp; Intelligent Automation</p>
//       <span class="header-badge">Industry Advisor</span>
//     </div>
//   </div>
//   <div class="header-right">
//     <div class="context-indicator" id="ctxIndicator">
//       <div class="context-dot"></div>
//       <span>Context active</span>
//     </div>
//     <div class="status-dot" title="Online"></div>
//   </div>
// </header>

// <div id="chat">
//   <div class="welcome" id="welcome">
//     <div class="welcome-icon">⚡</div>
//     <h2>How can I help you today?</h2>
//     <p>Ask about Collective IP's services, get practical industry advice, or explore how to approach your project. I remember the full context of our conversation.</p>
//     <div class="welcome-pills">
//       <span class="welcome-pill">CIP Capabilities</span>
//       <span class="welcome-pill">Industry best practice</span>
//       <span class="welcome-pill">Project approach</span>
//       <span class="welcome-pill">Vendor selection</span>
//       <span class="welcome-pill">Risk &amp; watch-outs</span>
//     </div>
//   </div>
// </div>

// <div id="suggestions">
//   <div class="chip-group-label">Suggested topics</div>
//   <button class="suggestion-chip" onclick="sendSuggestion(this)">Multi-site wireless — what to watch out for</button>
//   <button class="suggestion-chip" onclick="sendSuggestion(this)">Microsoft Copilot readiness</button>
//   <button class="suggestion-chip" onclick="sendSuggestion(this)">Intelligent automation for MSP operations</button>
//   <button class="suggestion-chip" onclick="sendSuggestion(this)">How CIP works with channel partners</button>
//   <button class="suggestion-chip" onclick="sendSuggestion(this)">Cloud CCTV vendor selection</button>
//   <button class="suggestion-chip" onclick="sendSuggestion(this)">Sales Executive Assistant ROI</button>
//   <button class="suggestion-chip" onclick="sendSuggestion(this)">Purview and Copilot security</button>
//   <button class="suggestion-chip" onclick="sendSuggestion(this)">Critical success factors for network refresh</button>
// </div>

// <footer>
//   <div class="input-wrap">
//     <textarea id="input" rows="1" placeholder="Ask anything — CIP services, industry advice, project approach…" maxlength="3000"></textarea>
//     <button id="send-btn" onclick="sendMessage()" title="Send">
//       <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
//     </button>
//   </div>
//   <div class="footer-meta">
//     <span class="footer-hint">Press Enter to send &nbsp;·&nbsp; Shift+Enter for new line</span>
//     <button class="clear-btn" onclick="clearChat()">✕ Clear conversation</button>
//   </div>
// </footer>

// <script>
//   let sessionId = null;
//   let turnCount = 0;

//   const chatEl = document.getElementById('chat');
//   const inputEl = document.getElementById('input');
//   const sendBtn = document.getElementById('send-btn');
//   const suggestionsEl = document.getElementById('suggestions');
//   const ctxIndicator = document.getElementById('ctxIndicator');

//   // ── Auto-grow textarea ──
//   inputEl.addEventListener('input', () => {
//     inputEl.style.height = 'auto';
//     inputEl.style.height = Math.min(inputEl.scrollHeight, 110) + 'px';
//   });

//   inputEl.addEventListener('keydown', e => {
//     if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
//   });

//   function sendSuggestion(btn) {
//     inputEl.value = btn.textContent.trim();
//     hideSuggestions();
//     sendMessage();
//   }

//   function hideSuggestions() {
//     suggestionsEl.style.display = 'none';
//   }

//   function scrollToBottom() {
//     chatEl.scrollTo({ top: chatEl.scrollHeight, behavior: 'smooth' });
//   }

//   // ── Markdown renderer ──
//   function renderMarkdown(text) {
//     // Sanitise
//     let html = text
//       .replace(/&/g, '&amp;')
//       .replace(/</g, '&lt;')
//       .replace(/>/g, '&gt;');

//     // Headers (### and ##)
//     html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
//     html = html.replace(/^## (.+)$/gm, '<h3>$1</h3>');

//     // Bold and italic
//     html = html.replace(/\\*\\*\\*(.+?)\\*\\*\\*/g, '<strong><em>$1</em></strong>');
//     html = html.replace(/\\*\\*(.+?)\\*\\*/g, '<strong>$1</strong>');
//     html = html.replace(/\\*(.+?)\\*/g, '<em>$1</em>');

//     // Horizontal rule
//     html = html.replace(/^---+$/gm, '<hr>');

//     // Advisory callouts — lines starting with "From an industry perspective" etc.
//     // We detect "advisory" paragraphs and wrap them
//     const advisoryTriggers = [
//       'From an industry perspective',
//       'From a delivery perspective',
//       'One thing that often catches',
//       'What experienced',
//       'A common failure',
//       'Worth noting',
//       'Watch-out:',
//       'Critical success',
//       'Industry note:',
//       'Practically speaking',
//     ];
//     const advisoryPattern = new RegExp(
//       '(' + advisoryTriggers.map(t => t.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&')).join('|') + ')',
//       'gi'
//     );
   

//     // Process line by line for lists and advisory
//     const lines = html.split('\\n');
//     let inUl = false, inOl = false;
//     const processed = [];

//     for (let i = 0; i < lines.length; i++) {
//       let line = lines[i];

//       // Bullet list
//       if (/^[\\-•] (.+)$/.test(line)) {
//         if (!inUl) { processed.push('<ul>'); inUl = true; }
//         if (inOl) { processed.push('</ol>'); inOl = false; }
//         processed.push('<li>' + line.replace(/^[\\-•] /, '') + '</li>');
//         continue;
//       }
//       // Numbered list
//       if (/^\\d+\\.\\s+(.+)$/.test(line)) {
//         if (!inOl) { processed.push('<ol>'); inOl = true; }
//         if (inUl) { processed.push('</ul>'); inUl = false; }
//         processed.push('<li>' + line.replace(/^\\d+\\.\\s+/, '') + '</li>');
//         continue;
//       }
//       // Close open lists
//       if (inUl) { processed.push('</ul>'); inUl = false; }
//       if (inOl) { processed.push('</ol>'); inOl = false; }

//       if (line.trim() === '') {
//         processed.push('<br>');
//       } else {
//         processed.push('<p>' + line + '</p>');
//       }
//     }
//     if (inUl) processed.push('</ul>');
//     if (inOl) processed.push('</ol>');

//     return processed.join('');
//   }

//   function appendMessage(role, text) {
//     const row = document.createElement('div');
//     row.className = 'msg-row ' + role;

//     if (role === 'bot') {
//       const label = document.createElement('div');
//       label.className = 'msg-label';
//       label.textContent = 'Collective IP';
//       row.appendChild(label);
//     }

//     const bubble = document.createElement('div');
//     bubble.className = 'bubble';
//     bubble.innerHTML = renderMarkdown(text);
//     row.appendChild(bubble);

//     chatEl.appendChild(row);
//     scrollToBottom();
//     return row;
//   }

//   function showTyping() {
//     const row = document.createElement('div');
//     row.className = 'typing-row';
//     row.id = 'typing';
//     row.innerHTML = '<div class="typing-bubble"><span></span><span></span><span></span></div>';
//     chatEl.appendChild(row);
//     scrollToBottom();
//   }

//   function removeTyping() {
//     document.getElementById('typing')?.remove();
//   }

//   async function sendMessage() {
//     const msg = inputEl.value.trim();
//     if (!msg) return;

//     // Remove welcome screen
//     document.getElementById('welcome')?.remove();
//     hideSuggestions();

//     inputEl.value = '';
//     inputEl.style.height = 'auto';
//     sendBtn.disabled = true;

//     appendMessage('user', msg);
//     showTyping();

//     try {
//       const res = await fetch('/api/chat', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ message: msg, sessionId }),
//       });

//       const data = await res.json();
//       removeTyping();

//       if (!res.ok) {
//         appendMessage('bot', '⚠️ ' + (data.error || 'Something went wrong. Please try again.'));
//       } else {
//         sessionId = data.sessionId;
//         turnCount = data.turnCount || turnCount + 1;
//         appendMessage('bot', data.reply);

//         // Show context active indicator after a couple of turns
//         if (turnCount >= 2) {
//           ctxIndicator.classList.add('visible');
//         }
//       }
//     } catch {
//       removeTyping();
//       appendMessage('bot', '⚠️ Network error. Please check your connection and try again.');
//     } finally {
//       sendBtn.disabled = false;
//       inputEl.focus();
//     }
//   }

//   async function clearChat() {
//     if (sessionId) {
//       fetch('/api/chat/' + sessionId, { method: 'DELETE' }).catch(() => {});
//       sessionId = null;
//     }
//     turnCount = 0;
//     ctxIndicator.classList.remove('visible');

//     chatEl.innerHTML = \`
//       <div class="welcome" id="welcome">
//         <div class="welcome-icon">⚡</div>
//         <h2>How can I help you today?</h2>
//         <p>Ask about Collective IP's services, get practical industry advice, or explore how to approach your project. I remember the full context of our conversation.</p>
//         <div class="welcome-pills">
//           <span class="welcome-pill">CIP Capabilities</span>
//           <span class="welcome-pill">Industry best practice</span>
//           <span class="welcome-pill">Project approach</span>
//           <span class="welcome-pill">Vendor selection</span>
//           <span class="welcome-pill">Risk &amp; watch-outs</span>
//         </div>
//       </div>\`;

//     suggestionsEl.style.display = 'flex';
//   }
// </script>
// </body>
// </html>`);
// });

// ─── Start ────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n✅  Collective IP Knowledge Assistant (v2) running`);
  console.log(`   → http://localhost:${PORT}`);
  console.log(`   → Chat API: POST http://localhost:${PORT}/api/chat`);

  if (!process.env.OPENAI_API_KEY) {
    console.warn(
      `\n⚠️  WARNING: OPENAI_API_KEY not set. Run: export OPENAI_API_KEY=sk-...`
    );
  }
});
