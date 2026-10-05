// scripts/enrich-phase3.js
// Enriches Phase 3 (Month 3: Modules 7 & 8 - Lessons 7.1 to 8.4)
// with Lesson 1.2's signature deep, patient, step-by-step structure:
// - Pacing banner & learning objectives
// - Patient everyday analogies
// - Numbered step-by-step detective breakdowns (<div class="steps-grid">)
// - Side-by-side comparison grids (<div class="comparison-grid">)
// - The signature "Wait! What If..." beginner dilemma callout boxes (amber border, 🤔 icon)
// - Hands-on practice exercises & experiments
// - Common beginner myths debunked
// - Key takeaways summary checklists

const fs = require('fs');
const path = require('path');

const courseDataPath = path.join(__dirname, '../js/courseData.js');
let fileContent = fs.readFileSync(courseDataPath, 'utf8');

eval(fileContent.replace('const COURSE_DATA', 'global.COURSE_DATA'));

console.log('Enriching Phase 3: Internet, Networks & Cybersecurity...');

// =============================================================================
// MODULE 7: Internet, Networks & Wi-Fi Masterclass
// =============================================================================

// Lesson 7.1: How Networks Work: Packets, Cables, Routers & Modems
COURSE_DATA.modules[6].lessons[0].readTime = "22 min read";
COURSE_DATA.modules[6].lessons[0].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 3 • Week 9 • Lesson 7.1</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Spend 1-2 days learning packet switching, living room hardware, and undersea cables.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Explain Packet Switching: how digital data is chopped into numbered digital envelopes.</li>
              <li>Differentiate between a Modem, a Router, a Switch, and a Wireless Access Point.</li>
              <li>Understand the physical backbone of the internet: fiber-optic laser cables under the oceans.</li>
              <li>Contrast Local Area Networks (LAN) with Wide Area Networks (WAN).</li>
              <li>Solve the mystery: What does it mean when your device has 5-bar Wi-Fi but "No Internet Access"?</li>
            </ul>
          </div>

          <h3>The Global Web of Wires: How the Internet Actually Works</h3>
          <p>People often talk about the \"Cloud\" or the \"Internet\" as if it were a magical, invisible mist floating in the sky. In reality, the internet is intensely, aggressively physical: it is a colossal planetary grid of <strong>millions of miles of glass fiber-optic cables buried under city streets and laid across the ocean floor</strong>, connecting billions of computers together!</p>

          <h4>The Postal Analogy: How Data Travels in \"Packets\"</h4>
          <p>Imagine you want to mail a 1,000-page encyclopedia to a friend in Tokyo. If you try to stuff all 1,000 pages into one giant, heavy package, it will be clumsy, might get stuck in postal sorting machines, and if it falls into the ocean, the entire book is lost.</p>
          <p>The internet uses <strong>Packet Switching</strong>: it rips the book into 1,000 separate, lightweight envelopes called <strong>Packets</strong>:</p>

          <div class="steps-grid">
            <div class="step-card">
              <div class="step-num">1</div>
              <h5>1. Chopping into Packets</h5>
              <p>Your computer takes a 5 Megabyte photo and slices it into approximately 3,500 tiny packets (typically ~1,500 bytes each).</p>
              <span class="step-example">Slices: Packet 1 of 3500, Packet 2 of 3500...</span>
            </div>
            <div class="step-card">
              <div class="step-num">2</div>
              <h5>2. Addressing (Headers)</h5>
              <p>Every packet gets stamped with metadata: the Sender IP address, the Destination IP address, its sequence number, and a mathematical error-checking checksum.</p>
              <span class="step-example">Header stamped on every digital envelope.</span>
            </div>
            <div class="step-card">
              <div class="step-num">3</div>
              <h5>3. Independent Routing</h5>
              <p>Packets travel independently across global routers! Packet 1 might travel through Chicago, while Packet 2 travels through Dallas to avoid network congestion.</p>
              <span class="step-example">Dynamic multi-path travel across fiber cables.</span>
            </div>
            <div class="step-card">
              <div class="step-num">4</div>
              <h5>4. Reassembly & Verification</h5>
              <p>The destination computer collects all packets, verifies their checksums, puts them back in sequence order, and reconstructs your photo flawlessly!</p>
              <span class="step-example">If Packet #412 was dropped, it asks for a re-send.</span>
            </div>
          </div>

          <h4>The Living Room Hardware Mystery: Modem vs. Router vs. Switch</h4>
          <p>Look at the blinking plastic box in your hallway. Most people call it \"the Wi-Fi\". In modern homes, it is actually an <strong>All-In-One Gateway</strong> combining three distinct network devices in one box:</p>

          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Device</th>
                  <th>Primary Role</th>
                  <th>Analogy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Modem (Modulator / Demodulator)</strong></td>
                  <td>Translates raw signals from the street (fiber light pulses, coaxial cable radio frequencies, or telephone DSL voltages) into digital computer Ethernet data.</td>
                  <td>The <strong>Translator</strong> who speaks both street electricity and computer bits.</td>
                </tr>
                <tr>
                  <td><strong>Router</strong></td>
                  <td>Directs network traffic between your home (LAN) and the outside world (WAN). Assigns private IP addresses to your phone, laptop, and smart TV.</td>
                  <td>The <strong>Traffic Cop & Mailroom Director</strong> directing envelopes to the right rooms.</td>
                </tr>
                <tr>
                  <td><strong>Switch</strong></td>
                  <td>The cluster of 4 yellow Ethernet ports on the back that allows multiple wired computers to communicate locally at gigabit speeds.</td>
                  <td>The <strong>Local Roadway</strong> within your house.</td>
                </tr>
                <tr>
                  <td><strong>Wireless Access Point (WAP)</strong></td>
                  <td>The radio antennae that broadcast and receive Wi-Fi radio waves so laptops and phones can connect without cords.</td>
                  <td>The <strong>Radio Megaphone</strong> bridging radio waves to the wired switch.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- THE SIGNATURE CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! My Phone Shows 5 Full Bars of Wi-Fi, But Webpages Say 'No Internet Access'! How Can Wi-Fi Be Connected Without Internet?!"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                This confuses millions of people every day. <strong>Wi-Fi and the Internet are two completely separate things!</strong>
              </p>
              <ul class="styled-list">
                <li><strong>Wi-Fi:</strong> The local wireless radio connection between your smartphone and the physical plastic router sitting 15 feet away in your hallway. 5 bars simply means your phone has a fantastic radio signal to that plastic box!</li>
                <li><strong>The Internet:</strong> The physical fiber-optic glass cable running from your house down the street to your Internet Service Provider (ISP) and the rest of the world.</li>
              </ul>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                If a construction crew down the street accidentally cuts the fiber-optic cable with a backhoe, your router is still alive and happily broadcasting Wi-Fi radio waves in your house (5 bars!). But when your phone asks the router for Google, the router says: <em>\"I can hear you loud and clear, but my wire to the outside world is severed!\"</em> That is why you have full Wi-Fi bars with zero internet!
              </p>
            </div>
          </div>

          <div class="callout tip">
            <span class="callout-icon">🎯</span>
            <div>
              <strong>Hands-On Network Inspection Activity:</strong><br>
              Find your home router's internal gateway IP address right now:
              <ol style="margin-top:6px; padding-left:18px;">
                <li>Press <kbd>Win</kbd> + <kbd>R</kbd>, type <code>cmd</code>, and press <kbd>Enter</kbd> to open Command Prompt.</li>
                <li>Type <code>ipconfig</code> and press <kbd>Enter</kbd>.</li>
                <li>Look for <strong>Default Gateway</strong> (typically <code>192.168.1.1</code> or <code>192.168.0.1</code>). That is the exact internal IP address of the router sitting in your living room!</li>
              </ol>
            </div>
          </div>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li>The internet operates on <strong>Packet Switching</strong>: large files are chopped into tiny numbered envelopes routed independently.</li>
            <li>A <strong>Modem</strong> translates street signals; a <strong>Router</strong> directs traffic; a <strong>Switch</strong> connects wired devices; Wi-Fi is just the radio layer.</li>
            <li>Wi-Fi connection (local radio link to router) is completely separate from Internet connection (ISP cable to the world).</li>
          </ul>
`;

// Lesson 7.2: IP Addresses, MAC Addresses & How DNS Translates Names
COURSE_DATA.modules[6].lessons[1].readTime = "22 min read";
COURSE_DATA.modules[6].lessons[1].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 3 • Week 9 • Lesson 7.2</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Spend 1-2 days learning IP addressing, MAC physical IDs, and the DNS global directory.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Differentiate between an IP Address (logical location) and a MAC Address (permanent hardware ID).</li>
              <li>Understand IPv4 vs. IPv6 and why the world ran out of 4 billion IPv4 addresses.</li>
              <li>Contrast Private IP addresses (LAN) with your single Public IP address (WAN).</li>
              <li>Trace the 5-step journey of a Domain Name System (DNS) query translating names to numbers.</li>
            </ul>
          </div>

          <h3>Digital Addresses: How Computers Find Each Other</h3>
          <p>When you send a postcard in the real world, you write the recipient's physical street address, city, and postal code. The postal service doesn't deliver mail based on someone's name alone; it relies on numbers and geography. In computer networking, every device on Earth requires both a permanent physical identity (<strong>MAC Address</strong>) and a temporary geographical mailing address (<strong>IP Address</strong>).</p>

          <h4>MAC Address vs. IP Address: The Fingerprint vs. The Street Address</h4>
          <div class="comparison-grid">
            <div class="compare-card good">
              <h5>MAC Address (Media Access Control) = The Fingerprint</h5>
              <p>A permanent 12-character hexadecimal identifier burned into your network chip at the factory:</p>
              <code>3A:8F:C2:59:10:B4</code>
              <ul class="styled-list" style="margin-top:8px;">
                <li><strong>Permanence:</strong> Unique to that specific physical hardware chip for life.</li>
                <li><strong>Scope:</strong> Used strictly on your local home network (LAN) so your router knows which packet belongs to your iPhone vs your iPad.</li>
              </ul>
            </div>
            <div class="compare-card bad" style="background:var(--bg-surface-alt); border-color:var(--border-medium);">
              <h5 style="color:var(--primary);">IP Address (Internet Protocol) = The Street Address</h5>
              <p>A temporary logical address assigned to your device by the network you connect to:</p>
              <code>192.168.1.45</code> &nbsp;or&nbsp; <code>142.250.190.46</code>
              <ul class="styled-list" style="margin-top:8px;">
                <li><strong>Dynamic:</strong> If you take your laptop to Starbucks, your IP address changes immediately to match the Starbucks network.</li>
                <li><strong>Scope:</strong> Used by routers worldwide to guide packets across continents.</li>
              </ul>
            </div>
          </div>

          <h4>IPv4 vs. IPv6: The Great Number Shortage</h4>
          <ul class=\"styled-list\">
            <li><strong>IPv4 (1981 Standard):</strong> Uses four numbers separated by dots (e.g. <code>172.217.16.206</code>). Each number ranges from 0 to 255 (32 bits total). It provides <strong>4.29 Billion total addresses</strong> ($2^{32}$). In 1981, engineers thought 4 billion was infinite! But with 8 billion humans owning phones, smartwatches, and smart lightbulbs, <em>the world officially ran out of free IPv4 addresses in 2011</em>!</li>
            <li><strong>IPv6 (Modern Standard):</strong> Uses 128-bit hexadecimal strings (e.g. <code>2001:0db8:85a3::8a2e:0370:7334</code>). It provides over <strong>340 Undecillion addresses</strong> ($3.4 \times 10^{38}$)! That is enough unique addresses to assign a separate IP to every single grain of sand on the entire planet Earth with plenty left over!</li>
          </ul>

          <!-- THE SIGNATURE CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! Why Do Almost All Home Routers Use the Exact Same IP Address: 192.168.1.1? Doesn't That Cause Massive Global Confusion?!"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                If your house uses <code>192.168.1.1</code>, and your neighbor uses <code>192.168.1.1</code>, and millions of homes across Japan, Brazil, and Germany all use <code>192.168.1.1</code>, why don't packets get mixed up?
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                The answer is <strong>Private Subnets and NAT (Network Address Translation)</strong>:
              </p>
              <ul class="styled-list">
                <li>Under internet standards, addresses starting with <code>192.168.x.x</code> and <code>10.x.x.x</code> are reserved for <strong>Private Internal Networks (LAN) only</strong>. Routers on the public internet are programmed to drop them instantly.</li>
                <li>Your home has only <strong>ONE single Public IP address</strong> assigned by your ISP to the modem. When your phone, laptop, and TV send requests, your router uses NAT to bundle them all behind that single public IP. When the reply comes back, the router remembers which private device asked for it and forwards it locally!</li>
              </ul>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                Think of your apartment building: The building has one street address on Google Maps (Public IP). Inside the building, there are apartments 101, 102, and 103 (Private IPs). Hundreds of other buildings have an \"Apartment 101\", but mail arrives at the right one because of the outer street address!
              </p>
            </div>
          </div>

          <h4>DNS (Domain Name System): The Phonebook of the Internet</h4>
          <p>Computers do not understand human names like <code>wikipedia.org</code>; they only route packets to numerical IP addresses like <code>208.80.154.224</code>. <strong>DNS</strong> is the decentralized global lookup service that translates human names into computer IP addresses in milliseconds:</p>

          <div class="steps-grid">
            <div class="step-card">
              <div class="step-num">1</div>
              <h5>1. Browser Cache Check</h5>
              <p>You type <code>wikipedia.org</code> into your browser. The browser first checks its internal cache to see if you visited recently.</p>
              <span class="step-example">Cache check: &lt;1 millisecond</span>
            </div>
            <div class="step-card">
              <div class="step-num">2</div>
              <h5>2. Resolving Name Server</h5>
              <p>If not found, your PC asks your ISP's recursive DNS resolver (or fast public DNS like Cloudflare <code>1.1.1.1</code> or Google <code>8.8.8.8</code>).</p>
              <span class="step-example">Queries ISP / Public resolver.</span>
            </div>
            <div class="step-card">
              <div class="step-num">3</div>
              <h5>3. Root & TLD Servers</h5>
              <p>The resolver asks the global <strong>Root Servers</strong> (&rarr; points to <code>.org</code>), then the <strong>TLD (Top-Level Domain) Servers</strong> for <code>.org</code>.</p>
              <span class="step-example">Navigates global domain hierarchy.</span>
            </div>
            <div class="step-card">
              <div class="step-num">4</div>
              <h5>4. Authoritative Name Server</h5>
              <p>The official authoritative DNS server for Wikipedia returns the exact answer: <code>208.80.154.224</code>!</p>
              <span class="step-example">Answer cached and browser connects!</span>
            </div>
          </div>

          <div class="callout tip">
            <span class="callout-icon">🎯</span>
            <div>
              <strong>Hands-On DNS Lookup:</strong><br>
              Ask the internet for an IP address manually!
              <ol style="margin-top:6px; padding-left:18px;">
                <li>Open Command Prompt or Terminal.</li>
                <li>Type <code>nslookup wikipedia.org</code> and press <kbd>Enter</kbd>.</li>
                <li>Notice the server IP address returned! Copy that IP into your browser address bar: Wikipedia will open directly!</li>
              </ol>
            </div>
          </div>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li><strong>MAC Addresses</strong> are permanent hardware chip fingerprints; <strong>IP Addresses</strong> are temporary network locations.</li>
            <li><strong>IPv4</strong> provides 4.2 billion addresses; <strong>IPv6</strong> expands to 340 undecillion addresses.</li>
            <li><strong>NAT</strong> allows dozens of household devices with private IPs to share one single public ISP address.</li>
            <li><strong>DNS</strong> is the global internet phonebook translating human domain names into numerical IP addresses.</li>
          </ul>
`;

// Lesson 7.3: Wi-Fi Radio Frequencies: 2.4 GHz vs 5 GHz vs 6 GHz
COURSE_DATA.modules[6].lessons[2].readTime = "22 min read";
COURSE_DATA.modules[6].lessons[2].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 3 • Week 10 • Lesson 7.3</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Spend 1-2 days learning wireless radio physics, frequency bands, and router optimization.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Understand the electromagnetic radio frequency spectrum behind Wi-Fi.</li>
              <li>Contrast the 3 major Wi-Fi frequency bands: 2.4 GHz, 5 GHz, and 6 GHz (Wi-Fi 6E/7).</li>
              <li>Explain why 2.4 GHz penetrates thick concrete walls while 5 GHz carries massive bandwidth.</li>
              <li>Solve the mystery: Why does your Wi-Fi stutter when someone turns on the microwave oven?</li>
            </ul>
          </div>

          <h3>Invisible Radio Waves: The Physics of Wi-Fi</h3>
          <p>Wi-Fi is simply invisible radio waves carrying digital 1s and 0s through the air between your router and device. But just like tuning a car radio between different FM stations, Wi-Fi operates across specific <strong>Frequency Bands</strong> measured in Gigahertz (GHz). Choosing the wrong band can mean the difference between laggy buffering and instant streaming.</p>

          <h4>The Core Trade-off: Range vs. Speed</h4>
          <p>In radio physics, there is an unbreakable universal rule: <strong>Lower frequencies travel farther and pass through solid obstacles easily; higher frequencies carry exponentially more data but are easily blocked by walls.</strong></p>

          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Frequency Band</th>
                  <th>Wall Penetration & Range</th>
                  <th>Maximum Real-World Speed</th>
                  <th>Interference Level</th>
                  <th>Best Used For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>2.4 GHz</strong></td>
                  <td><strong>Exceptional:</strong> Easily passes through drywall, brick, floors, and into backyards.</td>
                  <td>Slow (~50 to 150 Mbps)</td>
                  <td><strong>Extreme:</strong> Overcrowded with baby monitors, Bluetooth, microwaves, and neighbor routers.</td>
                  <td>Smart home devices (smart bulbs, security cameras, smart plugs), backyards.</td>
                </tr>
                <tr>
                  <td><strong>5.0 GHz</strong></td>
                  <td><strong>Moderate:</strong> Absorbed by brick walls, metal studs, and concrete floors.</td>
                  <td><strong>Blazing Fast (~500 to 1,200 Mbps)</strong></td>
                  <td>Low: Dozens of wide, clear channels with minimal overlap.</td>
                  <td>Laptops, 4K video streaming, gaming PCs, and tablets in the same or adjacent room.</td>
                </tr>
                <tr>
                  <td><strong>6.0 GHz (Wi-Fi 6E & Wi-Fi 7)</strong></td>
                  <td><strong>Short:</strong> Best within the same room or line-of-sight.</td>
                  <td><strong>Extreme Gigabit Speeds (2,000 to 5,000+ Mbps!)</strong></td>
                  <td><strong>Zero Interference:</strong> Pristine, pristine new frequency spectrum.</td>
                  <td>VR headsets, competitive online gaming, multi-gigabit home file transfers.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- THE MICROWAVE CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! Why Does My Video Call Freeze Every Time Someone Turns on the Kitchen Microwave Oven?!"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                This is a real, scientifically documented phenomenon!
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                Water molecules naturally vibrate and heat up when bombarded by radio waves vibrating at exactly <strong>2.45 Gigahertz</strong>. That is why every microwave oven on Earth is built to blast 1,000 Watts of 2.45 GHz radiation inside its chamber.
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                If your microwave's door seal has a tiny microscopic leak, it radiates 2.45 GHz radio noise into your kitchen. Your 2.4 GHz Wi-Fi router is operating on that exact same frequency with only 0.1 Watts of power! The microwave completely drowns out your Wi-Fi like someone screaming with a megaphone next to an acoustic whisper!<br>
                <strong>The instant fix:</strong> Connect your laptop to your router's <strong>5 GHz Wi-Fi network</strong>. The microwave doesn't touch 5 GHz at all!
              </p>
            </div>
          </div>

          <h4>Mesh Wi-Fi vs. Cheap Plug-In Extenders</h4>
          <div class="comparison-grid">
            <div class="compare-card bad" style="background:var(--bg-surface-alt); border-color:var(--border-medium);">
              <h5 style="color:var(--primary);">Cheap Wi-Fi Extenders / Repeaters ($25)</h5>
              <p>Plugs into a hallway wall outlet. Listens to your router's signal and rebroadcasts it under a different name (e.g. <code>MyHome_EXT</code>).</p>
              <ul class="styled-list">
                <li><strong>The Half-Duplex Penalty:</strong> It cannot transmit and receive at the same time on the same radio. <strong>It automatically cuts your internet speed by 50%!</strong></li>
                <li><strong>Stuck Connections:</strong> Your phone clings to the weak main router until you manually switch Wi-Fi networks in settings.</li>
              </ul>
            </div>
            <div class="compare-card good">
              <h5>Modern Mesh Wi-Fi Systems (Eero, Nest, Orbi)</h5>
              <p>Multiple synchronized smart beacons placed throughout your home forming a single blanket network.</p>
              <ul class="styled-list">
                <li><strong>Dedicated Wireless Backhaul:</strong> Uses a separate private radio channel to pass data between nodes at full gigabit speed.</li>
                <li><strong>Seamless Roaming:</strong> As you walk from your living room to your bedroom, the system handshakes your phone to the nearest node in 0.01 seconds without dropping your Zoom call!</li>
              </ul>
            </div>
          </div>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li><strong>2.4 GHz</strong> penetrates walls and reaches far, but is slow and congested; ideal for smart home IoT devices.</li>
            <li><strong>5.0 GHz</strong> delivers gigabit speeds for streaming and gaming, but struggles through dense brick and concrete.</li>
            <li>Switch to 5 GHz to permanently avoid microwave oven and Bluetooth interference.</li>
            <li><strong>Mesh Wi-Fi</strong> creates a seamless whole-home blanket without the 50% speed penalty of cheap extenders.</li>
          </ul>
`;

// Lesson 7.4: Bandwidth, Latency, Ping & Speedtests
COURSE_DATA.modules[6].lessons[3].readTime = "20 min read";
COURSE_DATA.modules[6].lessons[3].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 3 • Week 10 • Lesson 7.4</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Take 1 day to understand the mathematical difference between bandwidth and latency.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Contrast Bandwidth (width of the pipe) with Latency/Ping (speed of travel).</li>
              <li>Understand Jitter and Packet Loss and why they destroy Zoom calls and online gaming.</li>
              <li>Master the mathematical difference between Megabits per second (Mbps) and MegaBytes per second (MB/s).</li>
              <li>Interpret speed test results like a professional network engineer.</li>
            </ul>
          </div>

          <h3>Speed vs. Delay: Bandwidth is Not Speed</h3>
          <p>Internet service providers love advertising \"Blazing-fast 1,000 Mbps Gigabit Speed!\". But when you click a link, there is still a noticeable 1-second delay, and your video games still lag. Why? Because <strong>Bandwidth is capacity, not speed!</strong></p>

          <h4>The Water Pipe Analogy: Bandwidth vs. Latency</h4>
          <div class="comparison-grid">
            <div class="compare-card good">
              <h5>Bandwidth (The Width of the Pipe)</h5>
              <p>Measures how much data can flow through the wire at the same time, measured in <strong>Megabits per second (Mbps)</strong>.</p>
              <p><strong>Analogy:</strong> A massive 8-lane highway. It can carry 500 cars at the exact same time without traffic jams. Great for downloading massive 100 GB games or streaming 4K video simultaneously on 5 TVs!</p>
            </div>
            <div class="compare-card bad" style="background:var(--bg-surface-alt); border-color:var(--border-medium);">
              <h5 style="color:var(--primary);">Latency / Ping (The Speed Limit)</h5>
              <p>Measures how many milliseconds it takes for one single packet to travel to the server and back (Round-Trip Time / RTT), measured in <strong>milliseconds (ms)</strong>.</p>
              <p><strong>Analogy:</strong> How fast the cars are actually driving. If the highway is 8 lanes wide, but cars are only moving at 10 mph, your reaction time is terrible!</p>
            </div>
          </div>

          <!-- THE MBPS VS MB/S CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! I Pay for 1,000 Mbps Internet, Why Does Steam Download My Game at Only 125 MB/s?! Did My Provider Cheat Me?!"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                You are actually getting 100% of the maximum speed you paid for!
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                Remember Lesson 1.2: <strong>There are 8 bits in 1 single Byte!</strong>
              </p>
              <ul class="styled-list">
                <li>Internet providers sell speed in <strong>Megabits (Mbps / lowercase 'b')</strong> because the number looks 8 times bigger!</li>
                <li>Computer file downloads (Steam, Chrome, Windows) measure file sizes in <strong>MegaBytes (MB/s / uppercase 'B')</strong>.</li>
              </ul>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                To find your real download speed, simply divide by 8:<br>
                <code>1,000 Mbps ÷ 8 = 125 MegaBytes per second!</code><br>
                Your download is running at absolute maximum theoretical speed!
              </p>
            </div>
          </div>

          <h4>Understanding Ping Tiers for Real-Time Apps</h4>
          <ul class="styled-list">
            <li><strong>&lt; 20 ms (Excellent):</strong> Instantaneous. Competitive esports gaming feels telepathic; video calls feel like you are in the same physical room.</li>
            <li><strong>20–50 ms (Great):</strong> The standard for good broadband fiber/cable. Completely responsive for streaming, work, and gaming.</li>
            <li><strong>50–100 ms (Acceptable):</strong> Slight delay. Noticeable in fast-twitch shooter games, but fine for web browsing and Netflix.</li>
            <li><strong>&gt; 150 ms (Laggy):</strong> You will experience people talking over each other in Zoom calls and noticeable gameplay stutter. (Common on satellite internet like old geostationary dishes).</li>
          </ul>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li><strong>Bandwidth</strong> is volume capacity (Mbps); <strong>Latency</strong> is physical delay time (ms).</li>
            <li>Always divide your ISP's advertised Mbps by <strong>8</strong> to calculate real-world file download speed in MB/s.</li>
            <li>Low latency (&lt;30ms) is far more important for smooth video calls and online gaming than having 1,000 Mbps bandwidth.</li>
          </ul>
`;

// Lesson 7.5: Search Engine Mastery: Boolean Operators & Research Skills
COURSE_DATA.modules[6].lessons[4].readTime = "20 min read";
COURSE_DATA.modules[6].lessons[4].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 3 • Week 10 • Lesson 7.5</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Practice advanced Google search operators to find research papers and technical answers in seconds.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Use exact-match quotation marks to force search engines to match specific phrases.</li>
              <li>Exclude unwanted keywords using the minus (<code>-</code>) operator.</li>
              <li>Filter search results to specific domains (<code>site:</code>) or file types (<code>filetype:pdf</code>).</li>
              <li>Combine Boolean operators (<kbd>AND</kbd>, <kbd>OR</kbd>) like a professional research investigator.</li>
            </ul>
          </div>

          <h3>Information Hunting: Becoming a Search Engine Ninja</h3>
          <p>Most everyday users search the internet like this: they type a vague 8-word conversational question into Google, scroll past the first 4 sponsored ads, click a commercial blog stuffed with affiliate links, and get frustrated. <strong>Software engineers and academic researchers find exact answers in 5 seconds using Search Operators!</strong></p>

          <h4>The Top 6 Advanced Search Operators</h4>
          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Operator</th>
                  <th>Syntax Example</th>
                  <th>What It Forces the Search Engine to Do</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Exact Match Quotes</strong></td>
                  <td><code>"blue screen of death 0x0000007B"</code></td>
                  <td>Forces Google to return pages containing that <strong>exact phrase in that exact order</strong> with zero synonyms or substituted words!</td>
                </tr>
                <tr>
                  <td><strong>Exclude Keyword (<code>-</code>)</strong></td>
                  <td><code>jaguar speed -car</code></td>
                  <td>Searches for the animal while completely purging any results mentioning the luxury car brand!</td>
                </tr>
                <tr>
                  <td><strong>Site Filter (<code>site:</code>)</strong></td>
                  <td><code>site:gov student loan forgiveness</code></td>
                  <td>Restricts results strictly to official government websites, filtering out spammy commercial blogs!</td>
                </tr>
                <tr>
                  <td><strong>Filetype Filter (<code>filetype:</code>)</strong></td>
                  <td><code>python programming fundamentals filetype:pdf</code></td>
                  <td>Directly downloads complete free academic PDF textbooks and lecture slides!</td>
                </tr>
                <tr>
                  <td><strong>OR Operator</strong></td>
                  <td><code>laptop "battery life" (Dell OR Lenovo)</code></td>
                  <td>Matches either condition inside parentheses.</td>
                </tr>
                <tr>
                  <td><strong>Number Range (<code>..</code>)</strong></td>
                  <td><code>mechanical keyboard $50..$100</code></td>
                  <td>Searches within a specific pricing or year range.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- THE SIGNATURE CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! Why Are the Top 4 Results on Google Often Sponsored Ads or Useless AI Summaries?!"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                Google makes over <strong>$200 Billion a year</strong> from search advertising.
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                Commercial marketing companies hire SEO agencies to stuff blogs with keywords to trick Google's algorithm into ranking their products #1.
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                <strong>The Pro-Researcher Secret:</strong> To find authentic, honest human opinions without affiliate marketing spam, append <code>reddit</code> or <code>forum</code> to your search! Example:<br>
                <code>best reliable laptop under 800 site:reddit.com</code><br>
                You will get real conversations from thousands of everyday consumers discussing actual repair histories and longevity!
              </p>
            </div>
          </div>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li>Use quotes (<code>"exact phrase"</code>) to bypass search engine AI guessing and find exact technical error codes.</li>
            <li>Use <code>site:</code> to search inside trusted domains (e.g. <code>site:edu</code> or <code>site:gov</code>).</li>
            <li>Use <code>filetype:pdf</code> to instantly find free manuals, cheat sheets, and academic whitepapers.</li>
          </ul>
`;

console.log('Module 7 enriched!');

// =============================================================================
// MODULE 8: Cybersecurity, Privacy & Scam Defense
// =============================================================================

// Lesson 8.1: The Malware Threat Landscape: Viruses, Trojans & Ransomware
COURSE_DATA.modules[7].lessons[0].readTime = "22 min read";
COURSE_DATA.modules[7].lessons[0].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 3 • Week 11 • Lesson 8.1</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Spend 1-2 days learning the malware taxonomy, infection vectors, and antivirus mechanics.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Differentiate between Viruses, Worms, Trojan Horses, Spyware, and Ransomware.</li>
              <li>Understand how Ransomware encrypts your entire life's work in 30 seconds using military cryptography.</li>
              <li>Debunk the famous myth that Apple Mac computers cannot get viruses.</li>
              <li>Learn why Windows Defender provides tier-1 protection and why expensive third-party antivirus is rarely needed.</li>
            </ul>
          </div>

          <h3>The Digital Battlefield: Understanding Malware</h3>
          <p>People use the word \"virus\" as a catch-all term for anything wrong with their computer. But in cybersecurity, the overarching term is <strong>Malware (Malicious Software)</strong> — any software deliberately engineered to infiltrate, damage, steal data from, or hijack a computer system without the owner's informed consent.</p>

          <h4>The 6 Major Categories of Modern Malware</h4>
          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Malware Type</th>
                  <th>How It Spreads</th>
                  <th>Destructive Action</th>
                  <th>Real-World Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Virus</strong></td>
                  <td>Attaches its malicious code to a host executable file (like an infected <code>.exe</code> or macro). Requires a human to click and launch it.</td>
                  <td>Corrupts files, deletes data, or destroys operating system files.</td>
                  <td>ILOVEYOU virus (2000)</td>
                </tr>
                <tr>
                  <td><strong>Worm</strong></td>
                  <td><strong>Self-Replicating!</strong> Does NOT require human interaction. Exploits unpatched network security holes to jump automatically from computer to computer across Wi-Fi or internet.</td>
                  <td>Floods global networks, consumes bandwidth, and installs backdoors on millions of PCs in hours.</td>
                  <td>WannaCry (2017)</td>
                </tr>
                <tr>
                  <td><strong>Trojan Horse</strong></td>
                  <td>Disguised as a desirable, legitimate download (e.g. \"Free Minecraft Mod\", \"Photoshop Crack\", or \"Speed Up PC Utility\").</td>
                  <td>Once opened, it silently installs a covert backdoor for remote hackers to control your webcam and files.</td>
                  <td>Remote Access Trojans (RATs)</td>
                </tr>
                <tr>
                  <td><strong>Ransomware</strong></td>
                  <td>Phishing emails, fake software installers, or cracked games.</td>
                  <td><strong>The Most Dangerous Threat:</strong> Silently encrypts all your photos, documents, and videos with military AES-256 ciphers, demanding $500–$5,000 in Bitcoin to unlock them!</td>
                  <td>LockBit, DarkSide</td>
                </tr>
                <tr>
                  <td><strong>Spyware & Keyloggers</strong></td>
                  <td>Bundled inside free software or malicious web browser extensions.</td>
                  <td>Silently logs every keystroke you type (including credit card numbers and passwords) and sends them to a criminal server.</td>
                  <td>Pegasus, Infostealers</td>
                </tr>
                <tr>
                  <td><strong>Rootkits</strong></td>
                  <td>Infiltrates deep into Kernel Space (Ring 0) or UEFI motherboard firmware.</td>
                  <td>Completely hides itself from Task Manager and antivirus software. It boots before Windows even turns on!</td>
                  <td>CosmicStrand</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- THE MAC MYTH CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! Do Apple Mac Computers Get Viruses, or Are Macs Truly Immune?!"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                For years, Apple commercials bragged that Macs \"don't get PC viruses\". <strong>Macs are NOT immune to malware!</strong>
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                In the 1990s and 2000s, Windows owned 95% of the worldwide desktop market, while Apple owned only 3%. Cybercriminals write malware for financial profit! If a criminal spends 6 months writing malware, they target the 95% of users (Windows) to maximize victims, not the 3%.
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                Today, as Macs have become hugely popular among wealthy corporate executives, universities, and software engineers, criminals have developed sophisticated Mac malware (such as Silver Sparrow, Shlayer, and RustBucket). Macs have great built-in protections (Gatekeeper and XProtect), but if a user enters their administrator password to install a malicious cracked app, <strong>the Mac is compromised just as easily as a PC!</strong>
              </p>
            </div>
          </div>

          <!-- THE ANTIVIRUS CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! Do I Need to Pay $80/Year for Norton or McAfee Antivirus, or Is Windows Defender Enough?"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                In the year 2005, Windows had terrible built-in security, making third-party antivirus software mandatory.
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                Today, the situation has completely flipped! <strong>Windows Defender (built into Windows 10 and 11 for free)</strong> is consistently ranked in the top tier by independent security testing labs (such as AV-TEST and AV-Comparatives). It receives automatic cloud virus signature updates multiple times a day directly from Microsoft.
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                Ironically, expensive paid third-party antivirus suites often slow down your computer, pop up aggressive marketing ads begging you to renew subscriptions, and install bloated browser toolbars that actually increase your security attack surface! <strong>Windows Defender + keeping your OS updated + common sense is all 99% of people ever need!</strong>
              </p>
            </div>
          </div>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li><strong>Malware</strong> spans viruses, self-replicating worms, deceptive Trojans, stealthy keyloggers, and devastating ransomware.</li>
            <li><strong>Ransomware</strong> encrypts your files; paying the ransom never guarantees you get the decryption key. (Your best defense is a 3-2-1 backup!).</li>
            <li>Macs are fully vulnerable to malware; never enter your administrative password for untrusted software.</li>
            <li>Built-in <strong>Windows Defender</strong> provides free, world-class antivirus protection without paying for third-party bloatware.</li>
          </ul>
`;

// Lesson 8.2: Social Engineering & Spotting Real-World Scams
COURSE_DATA.modules[7].lessons[1].readTime = "22 min read";
COURSE_DATA.modules[7].lessons[1].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 3 • Week 11 • Lesson 8.2</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Spend 1-2 days learning how hackers manipulate human psychology through phishing, spoofing, and fear.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Understand Social Engineering: hacking the human mind rather than the computer code.</li>
              <li>Identify the 5 red flags of a Phishing email, SMS text scam (Smishing), or phone scam (Vishing).</li>
              <li>Learn how scammers spoof legitimate company logos, bank sender names, and caller IDs.</li>
              <li>Master the Emergency 4-Step Action Plan if you accidentally click a malicious link.</li>
            </ul>
          </div>

          <h3>Hacking the Human: Social Engineering</h3>
          <p>Legendary hacker Kevin Mitnick famously stated: <em>\"It is much easier to trick someone into giving you their password than it is to spend months trying to hack into a hardened firewall.\"</em> Over <strong>90% of all successful cyberattacks and corporate data breaches</strong> begin not with elite Hollywood-style computer code, but with a simple email or text message that tricked a human being into clicking a link!</p>

          <h4>The 5 Universal Red Flags of a Phishing Scam</h4>
          <div class="steps-grid">
            <div class="step-card">
              <div class="step-num">1</div>
              <h5>1. Extreme False Urgency & Fear</h5>
              <p>Scammers want you to panic before your logical brain can think! <em>\"Your bank account is SUSPENDED! You will be arrested in 24 hours unless you click here immediately!\"</em></p>
              <span class="step-example">Artificial panic prevents critical thinking.</span>
            </div>
            <div class="step-card">
              <div class="step-num">2</div>
              <h5>2. Suspicious Sender Email Address</h5>
              <p>The display name says \"PayPal Support\", but look at the actual address behind the name: <code>service@paypa1-security-update89.cz</code>! Real companies only email from their official domain (<code>@paypal.com</code>).</p>
              <span class="step-example">Always inspect the actual email header!</span>
            </div>
            <div class="step-card">
              <div class="step-num">3</div>
              <h5>3. Generic Greetings</h5>
              <p>Real banks know your full name and address. Phishing emails use generic greetings: <em>\"Dear Customer\"</em>, <em>\"Dear Valued User\"</em>, or <em>\"Dear yourname@gmail.com\"</em>.</p>
              <span class="step-example">Mass broadcast to millions of victims.</span>
            </div>
            <div class="step-card">
              <div class="step-num">4</div>
              <h5>4. Requests for Sensitive Credentials</h5>
              <p>Legitimate organizations will NEVER email or text you asking for your password, PIN code, or two-factor SMS security code!</p>
              <span class="step-example">Immediate red flag of a credential-harvesting trap.</span>
            </div>
          </div>

          <!-- THE CALLER ID CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! How Can a Phone Scammer Make My Caller ID Display My Real Bank's Phone Number or the Police Department?!"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                Your phone rings. The caller ID literally displays: <strong>\"Chase Bank Fraud Department (1-800-935-9935)\"</strong>.
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                You verify the number on the back of your card: it matches perfectly! The caller says: <em>\"We detected $1,200 of fraud on your card! Read me the 6-digit code we just texted you to block the charge!\"</em>
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                <strong>How the trick works: Caller ID Spoofing!</strong><br>
                Modern VoIP internet phone systems allow anyone to configure the outgoing caller ID to display whatever phone number or name they want! It is as easy as writing a fake return address on a paper envelope.<br>
                <strong>The Golden Defense:</strong> NEVER trust incoming phone calls! Hang up immediately. Pick up your physical debit card, dial the official phone number printed on the plastic card yourself, and ask: <em>\"Did you just call me?\"</em> Your bank will tell you: <em>\"No, your account is fine; that was a scammer!\"</em>
              </p>
            </div>
          </div>

          <h4>Emergency Protocol: What to Do If You Clicked a Bad Link</h4>
          <ol class="styled-list">
            <li><strong>Disconnect From Wi-Fi Immediately:</strong> Turn on Airplane Mode or unplug the Ethernet cable to stop malware from transmitting data or spreading across your home network.</li>
            <li><strong>Change Your Passwords From a Separate Device:</strong> Use your phone on mobile cellular data to change passwords for your email and bank accounts immediately!</li>
            <li><strong>Log Out of All Active Sessions:</strong> In Google, Apple, and banking security settings, click <em>\"Sign out of all other devices\"</em> to invalidate any stolen session cookies.</li>
            <li><strong>Run a Full Antivirus Scan:</strong> Reconnect and run Windows Defender or Malwarebytes to quarantine any downloaded payloads.</li>
          </ol>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li><strong>Social engineering</strong> targets human emotions (fear, urgency, excitement) rather than technical software bugs.</li>
            <li>Always inspect the real sender email address, not just the friendly display name.</li>
            <li><strong>Caller ID can be effortlessly spoofed</strong>; always hang up and dial the official phone number on your card yourself.</li>
            <li>Legitimate companies will never ask you for your password or 2FA verification codes over email or phone.</li>
          </ul>
`;

// Lesson 8.3: Password Fortresses, Managers & Two-Factor Authentication (2FA)
COURSE_DATA.modules[7].lessons[2].readTime = "22 min read";
COURSE_DATA.modules[7].lessons[2].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 3 • Week 12 • Lesson 8.3</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Spend 1-2 days auditing your passwords, setting up a password manager, and securing accounts with 2FA.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Understand Password Entropy: why password length beats complexity every time.</li>
              <li>Learn how Password Managers (like Bitwarden) eliminate the need to memorize passwords.</li>
              <li>Differentiate between SMS 2FA, Authenticator Apps (TOTP), and FIDO Passkeys.</li>
              <li>Understand the danger of \"Credential Stuffing\" and why reusing one password is digital suicide.</li>
            </ul>
          </div>

          <h3>Fortifying the Gates: Modern Authentication Science</h3>
          <p>The average internet user maintains over <strong>100 different online accounts</strong>: banking, email, shopping, streaming, school, healthcare, and gaming. Because human brains cannot memorize 100 complex strings, most people commit the single most dangerous mistake in cybersecurity: <strong>they reuse the exact same password (or slight variations like <code>Password2024!</code>) across dozens of websites!</strong></p>

          <h4>Why Password Reuse is Digital Suicide: Credential Stuffing</h4>
          <p>Imagine you use the password <code>SuperSecret123!</code> for your bank account, your personal Gmail, and a tiny online pizza shop where you ordered pizza once in 2021.</p>

          <div class="steps-grid">
            <div class="step-card">
              <div class="step-num">1</div>
              <h5>1. The Pizza Shop Breach</h5>
              <p>The small pizza website gets hacked because its web developer didn't update their server. Hackers steal 50,000 customer emails and passwords.</p>
              <span class="step-example">Your email + password are dumped on dark web.</span>
            </div>
            <div class="step-card">
              <div class="step-num">2</div>
              <h5>2. Automated Credential Stuffing</h5>
              <p>Hackers run automated bots that test that stolen email/password combination against <strong>Chase, PayPal, Amazon, Netflix, and Apple</strong>!</p>
              <span class="step-example">Millions of login attempts per second.</span>
            </div>
            <div class="step-card">
              <div class="step-num">3</div>
              <h5>3. Total Account Takeover</h5>
              <p>Because you reused that same password on PayPal, the hacker logs into your PayPal account in seconds without ever hacking PayPal's servers!</p>
              <span class="step-example">Your bank account is emptied.</span>
            </div>
            <div class="step-card">
              <div class="step-num">4</div>
              <h5>4. The Solution: Unique Passwords</h5>
              <p>If every single account has a completely unique, randomized 20-character password, a breach at the pizza shop only compromises the pizza shop!</p>
              <span class="step-example">Zero risk to your bank or email.</span>
            </div>
          </div>

          <!-- THE PASSWORD LENGTH VS COMPLEXITY CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! Is 'Tr0ub4dor&3' Really Better Than 'correct-horse-battery-staple'?! The Math of Password Cracking!"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                For 20 years, companies forced users to make short, annoying passwords like <code>P@ssw0rd!</code> with capital letters, numbers, and symbols.
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                In mathematics, <strong>LENGTH beats complexity every single time!</strong>
              </p>
              <ul class="styled-list">
                <li><code>P@ss1!</code> (7 characters, complex): Automated hacker graphics cards testing 100 billion guesses a second can crack this in <strong>under 3 milliseconds</strong>!</li>
                <li><code>correct-horse-battery-staple</code> (28 characters, 4 simple dictionary words separated by hyphens): Easy for a human to visualize and remember, but mathematically contains so many combinatorial possibilities that a supercomputer would take <strong>millions of years to crack it!</strong></li>
              </ul>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                Whenever you must memorize a password, use a <strong>Passphrase</strong> of 4 random words!
              </p>
            </div>
          </div>

          <h4>Two-Factor Authentication (2FA): The Three Tiers of Defense</h4>
          <p>Even if a hacker steals your password, <strong>Two-Factor Authentication (2FA)</strong> stops them dead in their tracks by requiring a second physical key:</p>

          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>2FA Method</th>
                  <th>How It Works</th>
                  <th>Security Level</th>
                  <th>Vulnerability</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>SMS Text Message 2FA</strong></td>
                  <td>The bank texts a 6-digit code to your phone number.</td>
                  <td>Good baseline (Better than nothing!)</td>
                  <td><strong>SIM Swapping:</strong> A hacker can bribe or trick your cellular phone carrier (Verizon, T-Mobile) into transferring your phone number to their SIM card, intercepting your text codes!</td>
                </tr>
                <tr>
                  <td><strong>Authenticator Apps (TOTP)</strong></td>
                  <td>Apps like Google Authenticator or Bitwarden generate a new 6-digit code every 30 seconds locally on your device without cellular service.</td>
                  <td><strong>High Security (Recommended!)</strong></td>
                  <td>Cannot be intercepted over cell towers. Immune to SIM swapping.</td>
                </tr>
                <tr>
                  <td><strong>Hardware Keys & Passkeys (FIDO2)</strong></td>
                  <td>A physical USB key (YubiKey) or biometric fingerprint (Apple Touch ID / Windows Hello Passkeys).</td>
                  <td><strong>Military-Grade Maximum Defense</strong></td>
                  <td><strong>100% Phishing-Proof!</strong> Cryptographically bound to the real domain name; will never transmit codes to fake phishing websites!</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="callout tip">
            <span class="callout-icon">🎯</span>
            <div>
              <strong>Action Step: Get a Free Password Manager Today!</strong><br>
              Stop writing passwords in paper notebooks or using the same password everywhere:
              <ul style="margin-top:6px; padding-left:18px;">
                <li>Download a verified open-source password manager like <strong>Bitwarden</strong> (100% free for unlimited devices).</li>
                <li>You only ever memorize <strong>ONE single strong Master Passphrase</strong>. Bitwarden generates and autofills 20-character gibberish passwords (<code>&zK9#mQ2$pL8@vW5!</code>) for every website you visit!</li>
              </ul>
            </div>
          </div>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li>Never reuse passwords across accounts; a single data breach at one website allows hackers to compromise all your other accounts.</li>
            <li><strong>Password length</strong> is far more resistant to brute-force cracking than short complex substitutions.</li>
            <li>Use a <strong>Password Manager (Bitwarden)</strong> to generate and store unique random passwords for every account.</li>
            <li>Enable <strong>Authenticator App 2FA</strong> or <strong>Passkeys</strong> to protect against password theft.</li>
          </ul>
`;

// Lesson 8.4: Web Privacy, Cookies, Trackers, Incognito Mode & VPNs
COURSE_DATA.modules[7].lessons[3].readTime = "22 min read";
COURSE_DATA.modules[7].lessons[3].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 3 • Week 12 • Lesson 8.4</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Spend 1-2 days learning digital privacy, tracking cookies, incognito myths, and VPN reality.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Contrast First-Party Cookies (essential convenience) with Third-Party Tracking Cookies.</li>
              <li>Understand Browser Fingerprinting: how websites identify you without using cookies.</li>
              <li>Bust the widespread myth of what Incognito / Private Browsing actually does.</li>
              <li>Learn when a Virtual Private Network (VPN) is truly useful vs. marketing hype.</li>
            </ul>
          </div>

          <h3>The Surveillance Economy: Web Privacy Deconstructed</h3>
          <p>Have you ever searched for a pair of running shoes on Google, and for the next three weeks, every news site, social media feed, and mobile game you opened displayed advertisements for those exact running shoes? You are not being paranoid: <strong>the modern commercial web is built on a multi-billion dollar surveillance advertising economy</strong> designed to track your every click, scroll, and purchase.</p>

          <h4>Understanding Cookies: First-Party vs. Third-Party</h4>
          <p>A <strong>Cookie</strong> is a tiny text file (typically a few Kilobytes) that a web server asks your browser to store on your computer.</p>

          <div class="comparison-grid">
            <div class="compare-card good">
              <h5>First-Party Cookies (Helpful & Essential)</h5>
              <p>Created by the actual website you are directly visiting (e.g. <code>amazon.com</code>).</p>
              <ul class="styled-list">
                <li><strong>Purpose:</strong> Remembers your shopping cart items, keeps you logged in between page clicks, and remembers your dark mode preference.</li>
                <li>Without first-party cookies, you would have to type your username and password on every single click!</li>
              </ul>
            </div>
            <div class="compare-card bad" style="background:var(--bg-surface-alt); border-color:var(--border-medium);">
              <h5 style="color:var(--primary);">Third-Party Tracking Cookies (The Digital Spy)</h5>
              <p>Placed by outside advertising networks (like Google AdSense or Meta Pixel) embedded inside thousands of different websites.</p>
              <ul class="styled-list">
                <li><strong>How It Stalks You:</strong> When you read an article on Site A, Site B, and Site C, the same ad network reads its third-party cookie across all three, stitching together a complete dossier of your political views, health concerns, and shopping habits!</li>
              </ul>
            </div>
          </div>

          <!-- THE INCOGNITO MYTH CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! Does 'Incognito Mode' or 'Private Browsing' Make Me Completely Invisible and Anonymous on the Internet?!"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                <strong>NO! Absolutely NOT!</strong> In 2024, Google settled a <strong>$5 Billion class-action lawsuit</strong> because millions of consumers falsely believed Incognito Mode made them invisible.
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                Here is the absolute truth about what Incognito Mode does and does NOT do:
              </p>
              <ul class="styled-list">
                <li><strong>What Incognito Mode DOES Do:</strong> When you close the window, it deletes your browsing history, cookies, and temporary forms <em>from your local computer</em>. It is fantastic for checking airline tickets or buying a surprise birthday gift so your family members who share the computer don't see your history!</li>
                <li><strong>What Incognito Mode DOES NOT Do:</strong> It provides <strong>zero anonymity to the outside world!</strong> Your Internet Service Provider (Comcast, AT&T), your employer's office IT department, your university Wi-Fi admin, and the websites you visit can still see 100% of the domain names you browse!</li>
              </ul>
            </div>
          </div>

          <h4>Virtual Private Networks (VPNs): Reality vs. Marketing Myths</h4>
          <p>YouTube creators constantly advertise VPNs with wild claims like: <em>\"A VPN makes you completely untraceable, blocks all hackers, and stops all spying!\"</em> Let's separate reality from marketing hype:</p>

          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>What a VPN ACTUALLY Does</th>
                  <th>What a VPN CANNOT Do</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Creates an encrypted tunnel between your device and the VPN server, hiding your activity from snooping on <strong>unsecured public airport/hotel Wi-Fi</strong>.</td>
                  <td>Does NOT protect you from phishing scams or stop you from downloading malware viruses.</td>
                </tr>
                <tr>
                  <td>Hides your true physical IP address and location from websites you visit, letting you bypass regional streaming geographic blackouts.</td>
                  <td>Does NOT stop Google, Facebook, or Amazon from tracking you if you are logged into your accounts!</td>
                </tr>
                <tr>
                  <td>Hides the specific websites you visit from your home Internet Service Provider (ISP).</td>
                  <td><strong>Free VPN Danger:</strong> \"Free\" VPN companies often log and sell your entire browsing history to advertisers to pay for their servers!</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="callout tip">
            <span class="callout-icon">🎯</span>
            <div>
              <strong>Hands-On Privacy Test: Check Your Browser Fingerprint!</strong><br>
              Even without cookies, websites can identify your unique device using your screen resolution, GPU graphics card driver, and installed system fonts.
              <ol style="margin-top:6px; padding-left:18px;">
                <li>Visit the non-profit Electronic Frontier Foundation test site: <code>coveryourtracks.eff.org</code>.</li>
                <li>Click <strong>Test Your Browser</strong>.</li>
                <li>Notice your fingerprint uniqueness: it will show you how identifiable your specific combination of hardware and software is to tracking companies!</li>
              </ol>
            </div>
          </div>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li><strong>First-party cookies</strong> are essential for website logins and carts; <strong>third-party cookies</strong> track you across different websites.</li>
            <li><strong>Incognito Mode</strong> only hides history from people sharing your physical machine; your ISP and network admins can still see what sites you visit.</li>
            <li><strong>VPNs</strong> encrypt your network tunnel on public Wi-Fi and mask your IP address, but do not make you immune to scams or malware.</li>
            <li>Never use untrusted \"free\" VPN services that monetize by selling your personal internet traffic.</li>
          </ul>
`;

console.log('Module 8 enriched!');

const updatedContent = 'const COURSE_DATA = ' + JSON.stringify(COURSE_DATA, null, 2) + ';\n';
fs.writeFileSync(courseDataPath, updatedContent, 'utf8');
console.log('Updated courseData.js successfully with Phase 3 enrichments!');
