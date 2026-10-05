// scripts/enrich-phase4.js
// Enriches Phase 4 (Month 4: Modules 9, 10, 11, 12 - Lessons 9.1 to 12.5)
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

console.log('Enriching Phase 4: Troubleshooting, Office, Web & SEO...');

// =============================================================================
// MODULE 9: Troubleshooting, Maintenance & Computer Care
// =============================================================================

// Lesson 9.1: The Scientific Troubleshooting Method: How Tech Pros Think
COURSE_DATA.modules[8].lessons[0].readTime = "22 min read";
COURSE_DATA.modules[8].lessons[0].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 4 • Week 13 • Lesson 9.1</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Spend 1-2 days mastering the systematic, scientific diagnostic method used by IT pros worldwide.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Master the 5-Stage Scientific Troubleshooting Method.</li>
              <li>Learn to isolate variables by changing only one setting or cable at a time.</li>
              <li>Understand the crucial importance of reproducing a bug before trying to fix it.</li>
              <li>Solve the mystery: Why does "turning it off and on again" actually fix 90% of computer glitches?</li>
            </ul>
          </div>

          <h3>The Diagnostic Mindset: How Tech Pros Solve Any Problem</h3>
          <p>When an untrained user encounters a computer glitch, they often panic, click random buttons furiously, change 15 settings simultaneously, download suspicious \"cleanup\" software from Google ads, and make the problem ten times worse! <strong>Professional IT engineers never guess.</strong> They approach computer problems like medical doctors or forensic detectives: using a calm, disciplined <strong>Scientific Troubleshooting Loop</strong>.</p>

          <h4>The 5-Step Diagnostic Troubleshooting Flowchart</h4>
          <div class="steps-grid">
            <div class="step-card">
              <div class="step-num">1</div>
              <h5>1. Identify the Exact Symptoms</h5>
              <p>Gather precise facts without vague assumptions. Instead of saying <em>\"My internet is broken\"</em>, ask: <em>\"Can my laptop load Google? Can my phone load Google? Are router lights green?\"</em></p>
              <span class="step-example">Narrow down the symptom scope.</span>
            </div>
            <div class="step-card">
              <div class="step-num">2</div>
              <h5>2. Check the Simplest, Physical Things First</h5>
              <p>Over 50% of computer \"breakdowns\" are trivial physical issues: a loose HDMI cable, a power strip switch bumped by someone's foot, or a wireless mouse with a dead battery!</p>
              <span class="step-example">Always verify power, physical cables, and switches!</span>
            </div>
            <div class="step-card">
              <div class="step-num">3</div>
              <h5>3. Isolate Variables (Change One Thing at a Time)</h5>
              <p>If you change 4 settings, replace a cable, and reinstall an app all at once, you will never know which change fixed the issue or which change caused new bugs! Test one single variable at a time.</p>
              <span class="step-example">Change variable A &rarr; test &rarr; revert if unhelpful.</span>
            </div>
            <div class="step-card">
              <div class="step-num">4</div>
              <h5>4. Reproduce & Verify the Solution</h5>
              <p>Once you implement a fix, test it repeatedly. Can you reliably reproduce the original error? Does the fix survive a computer restart?</p>
              <span class="step-example">Confirm the underlying cause is resolved.</span>
            </div>
          </div>

          <!-- THE REBOOT SECRET CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! Why Do Tech Support Pros ALWAYS Tell Me to 'Turn It Off and On Again'?! Is That Just a Lazy Cop-Out?!"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                Every sitcom and meme makes fun of tech support saying: <em>\"Hello, IT. Have you tried turning it off and on again?\"</em>
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                It is NOT a lazy cop-out — <strong>it is based on rigorous electrical and software science!</strong>
              </p>
              <ul class="styled-list">
                <li><strong>Purging Volatile RAM:</strong> As your computer runs for days, applications leak memory (Memory Leaks). When you restart, power to RAM is completely cut, draining all residual capacitors and wiping corrupted memory tables 100% clean!</li>
                <li><strong>Re-Initializing Hardware Controllers:</strong> When a Wi-Fi card or Bluetooth chip encounters an unexpected voltage spike or deadlock, its tiny internal microcontroller freezes. A reboot forces hardware chips to reload their factory firmware cleanly from scratch!</li>
              </ul>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                Restarting fixes over <strong>80% to 90% of all temporary software glitches</strong> in seconds!
              </p>
            </div>
          </div>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li>Never panic or change multiple settings at once; change <strong>one single variable at a time</strong>.</li>
            <li>Always inspect physical power cables, wall plugs, and switches before assuming software failure.</li>
            <li>Restarting flushes temporary memory leaks and re-initializes frozen hardware microcontrollers cleanly.</li>
          </ul>
`;

// Lesson 9.2: Task Manager Mastery: Diagnosing Slowdowns & Freezes
COURSE_DATA.modules[8].lessons[1].readTime = "20 min read";
COURSE_DATA.modules[8].lessons[1].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 4 • Week 13 • Lesson 9.2</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Take 1 day to master Task Manager columns, process termination, and 100% disk usage diagnosis.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Launch Task Manager instantly using universal keyboard shortcuts.</li>
              <li>Read the 4 Columns of Truth: CPU, Memory, Disk, and Network percentages.</li>
              <li>Diagnose the infamous Windows "100% Disk Usage" slowdown bug.</li>
              <li>Force-quit frozen "Not Responding" programs safely without crashing Windows.</li>
            </ul>
          </div>

          <h3>The X-Ray Machine: Windows Task Manager</h3>
          <p>When your computer suddenly slows to a crawl, fans roar, and your mouse cursor turns into a spinning circle, you don't have to guess what is happening. <strong>Task Manager</strong> is your computer's built-in X-ray machine, revealing exactly which application is hogging your CPU, swallowing your RAM, or thrashing your storage drive.</p>

          <h4>The 4 Columns of Truth</h4>
          <p>Press <strong><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Esc</kbd></strong> to launch Task Manager instantly. Look at the top of the Processes tab:</p>

          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Resource Column</th>
                  <th>Healthy Normal State</th>
                  <th>Critical Red Alert (&gt;90%)</th>
                  <th>What It Means</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>CPU</strong></td>
                  <td>1% to 15% when idle</td>
                  <td><strong>Spiking at 100%</strong></td>
                  <td>An application is stuck in an infinite calculation loop or exporting heavy video. Sort by CPU to find the culprit!</td>
                </tr>
                <tr>
                  <td><strong>Memory (RAM)</strong></td>
                  <td>40% to 75%</td>
                  <td><strong>Spiking at 95%+</strong></td>
                  <td>You have too many apps/tabs open, or an app has a \"memory leak\". System will begin laggy disk thrashing (paging).</td>
                </tr>
                <tr>
                  <td><strong>Disk</strong></td>
                  <td>0% to 5%</td>
                  <td><strong>Stuck at 100%</strong></td>
                  <td><strong>The Infamous Bottleneck!</strong> Your storage drive is overwhelmed with read/write requests. Extremely common on older mechanical hard drives!</td>
                </tr>
                <tr>
                  <td><strong>Network</strong></td>
                  <td>0% to 1%</td>
                  <td><strong>Sustained High %</strong></td>
                  <td>A background software update (like Windows Update or Steam) is consuming all your bandwidth.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- THE END TASK CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! What Actually Happens When I Click 'End Task'? Will It Damage My Computer?!"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                When a program freezes and displays <em>\"Not Responding\"</em>, many beginners are afraid to click \"End Task\" for fear of breaking their computer.
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                <strong>Clicking 'End Task' will NOT damage your computer or operating system!</strong>
              </p>
              <ul class="styled-list">
                <li>Remember User Space (Ring 3) from Module 4: regular applications are sandboxed.</li>
                <li>When you click \"End Task\", Windows sends an immediate termination signal (SIGKILL) telling the CPU: <em>\"Stop scheduling cycles for this frozen process, wipe its sandbox from RAM, and reclaim its memory!\"</em></li>
              </ul>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                The only thing you lose is any unsaved text inside that specific frozen application. Windows itself remains 100% unharmed!
              </p>
            </div>
          </div>

          <div class="callout tip">
            <span class="callout-icon">🎯</span>
            <div>
              <strong>Hands-On Task Manager Exercise:</strong><br>
              Learn how to kill a frozen app right now:
              <ol style="margin-top:6px; padding-left:18px;">
                <li>Open Task Manager (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Esc</kbd>).</li>
                <li>Click the <strong>CPU column header</strong> to sort apps from highest to lowest usage.</li>
                <li>Click on an open browser or Notepad window, and click the <strong>End task</strong> button in the top right. Watch the app vanish instantly!</li>
              </ol>
            </div>
          </div>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li>Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Esc</kbd> to launch Task Manager in 1 millisecond.</li>
            <li>Sort by CPU, Memory, or Disk columns to immediately catch rogue runaway applications.</li>
            <li><strong>End Task</strong> safely closes frozen programs without harming your operating system.</li>
          </ul>
`;

// Lesson 9.3: The Top 5 Most Common Computer Headaches & Step-by-Step Fixes
COURSE_DATA.modules[8].lessons[2].readTime = "22 min read";
COURSE_DATA.modules[8].lessons[2].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 4 • Week 14 • Lesson 9.3</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Spend 1-2 days learning step-by-step solutions to the 5 most common computer emergencies.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Troubleshoot a computer that powers on but displays a completely black screen.</li>
              <li>Fix internet connections that say "Connected, no internet" using DNS cache flushes.</li>
              <li>Diagnose loud screaming fans and thermal throttling issues.</li>
              <li>Solve sudden audio loss and correct misplaced default playback devices.</li>
            </ul>
          </div>

          <h3>The First-Aid Field Guide: The Top 5 Headaches Solved</h3>
          <p>Throughout your life, you and your family will encounter the same 5 universal computer emergencies over and over. Here are the exact battle-tested steps professional technicians use to resolve them in minutes:</p>

          <div class="steps-grid">
            <div class="step-card">
              <div class="step-num">1</div>
              <h5>Headache 1: Black Screen (PC is on, screen is black)</h5>
              <p><strong>Fix:</strong> Check monitor power cord &rarr; check video cable is plugged into lower GPU port, not top motherboard port &rarr; check monitor input source (HDMI 1 vs DP) &rarr; reseat RAM memory sticks!</p>
              <span class="step-example">Loose RAM sticks account for 70% of black screens on desktops.</span>
            </div>
            <div class="step-card">
              <div class="step-num">2</div>
              <h5>Headache 2: "Connected, No Internet"</h5>
              <p><strong>Fix:</strong> Unplug modem and router for 30 seconds &rarr; open Command Prompt and type <code>ipconfig /flushdns</code> &rarr; toggle Airplane mode &rarr; restart PC.</p>
              <span class="step-example">Flushes stale DNS IP cache.</span>
            </div>
            <div class="step-card">
              <div class="step-num">3</div>
              <h5>Headache 3: Screaming Fans & Scalding Hot Laptop</h5>
              <p><strong>Fix:</strong> Never use a laptop on a bed blanket or pillow (blocks intake vents!) &rarr; use compressed air can to blow dust out of heatsink fins &rarr; check Task Manager for runaway background apps.</p>
              <span class="step-example">Restores cooling airflow and prevents thermal throttling.</span>
            </div>
            <div class="step-card">
              <div class="step-num">4</div>
              <h5>Headache 4: Audio Stopped Working</h5>
              <p><strong>Fix:</strong> Click the speaker icon in taskbar &rarr; click the sound output selector arrow &rarr; Windows often accidentally switches default output to a plugged-in monitor or VR headset instead of your headphones!</p>
              <span class="step-example">Switch default audio output device.</span>
            </div>
          </div>

          <!-- THE BLANKET CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! Why Should I NEVER Rest My Laptop on a Soft Bed Blanket or Duvet?!"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                Most laptops have cooling intake air slots on the <strong>bottom metal plate</strong>.
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                When you place a laptop on a hard desk, tiny rubber feet elevate the chassis by 2 millimeters so fans can suck cool air underneath.
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                When you place a laptop on a soft plush bed blanket or pillow, the heavy laptop sinks in! The soft fabric acts like a suffocating blanket over the vents, while simultaneously sucking microscopic blanket dust and lint directly into the internal fans! Within 15 minutes, your CPU hits 95°C and throttles its speed down to a crawl. Always place your laptop on a lap desk or hard book when working in bed!
              </p>
            </div>
          </div>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li>For black screens, always verify monitor input source and reseat RAM sticks before assuming hardware death.</li>
            <li>Flush DNS (<code>ipconfig /flushdns</code>) when internet connections act strange or refuse to load specific domains.</li>
            <li>Never block bottom cooling vents on laptops; suffocation triggers immediate thermal throttling.</li>
          </ul>
`;

// Lesson 9.4: Routine PC Maintenance, Disk Cleanup & Physical Hygiene
COURSE_DATA.modules[8].lessons[3].readTime = "20 min read";
COURSE_DATA.modules[8].lessons[3].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 4 • Week 14 • Lesson 9.4</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Take 1 day to clean out junk temporary files and physically dust your computer safely.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Reclaim 20 to 50 Gigabytes of wasted storage using built-in Windows Storage Sense.</li>
              <li>Safely clean computer screens without destroying sensitive anti-glare coatings.</li>
              <li>Use compressed air to clean dust from cooling fans and heatsink fins safely.</li>
              <li>Establish a quarterly computer maintenance checklist.</li>
            </ul>
          </div>

          <h3>Computer Care: Preventive Maintenance</h3>
          <p>Just like changing the oil in your car or brushing your teeth, a computer requires routine digital and physical maintenance. Giving your PC 10 minutes of TLC every few months will prevent sudden hardware failure, quiet down roaring cooling fans, and free up dozens of gigabytes of wasted storage space.</p>

          <h4>Digital Maintenance: Windows Storage Sense</h4>
          <p>Over months of normal use, Windows accumulates massive hidden piles of junk files: old Windows Update installation backups (often 25+ GB!), temporary browser caches, crash dump logs, and thumbnail caches.</p>

          <div class="steps-grid">
            <div class="step-card">
              <div class="step-num">1</div>
              <h5>Open Storage Settings</h5>
              <p>Press <kbd>Win</kbd> + <kbd>I</kbd> &rarr; <strong>System</strong> &rarr; <strong>Storage</strong>.</p>
              <span class="step-example">Visual breakdown of your SSD usage.</span>
            </div>
            <div class="step-card">
              <div class="step-num">2</div>
              <h5>Enable Storage Sense</h5>
              <p>Toggle <strong>Storage Sense ON</strong>. Windows will automatically delete temporary junk and empty the Recycle Bin every 30 days.</p>
              <span class="step-example">Automated silent maintenance.</span>
            </div>
            <div class="step-card">
              <div class="step-num">3</div>
              <h5>Clean Temporary Files</h5>
              <p>Click on <strong>Temporary files</strong>. Check <strong>Previous Windows installations</strong> and <strong>Delivery Optimization Files</strong>, then click <strong>Remove files</strong>.</p>
              <span class="step-example">Instantly frees 10 to 40 GB of SSD space!</span>
            </div>
            <div class="step-card">
              <div class="step-num">4</div>
              <h5>Keep OS Updated</h5>
              <p>Run Windows Update / macOS Software Update to patch critical zero-day security vulnerabilities.</p>
              <span class="step-example">Patches security holes.</span>
            </div>
          </div>

          <!-- THE WINDEX CALLOUT -->
          <div class="callout warning" style="margin: 24px 0; border-left: 4px solid #ef4444; background: rgba(239, 68, 68, 0.08);">
            <span class="callout-icon">⚠️</span>
            <div>
              <strong style="font-size: 1.08rem; color: #dc2626;">CRITICAL RULE: NEVER Spray Household Glass Cleaner (Windex) on a Computer Screen!</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                Household glass cleaners like Windex contain harsh ammonia, bleach, and alcohol solvents designed for thick architectural window glass.
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                Modern computer monitors and laptop screens are coated with delicate microscopic chemical layers: <strong>anti-glare matte coatings, polarizers, and oleophobic oil-resistant films</strong>.
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                Spraying Windex dissolves and strips these protective coatings, leaving permanent cloudy streaks and ruined spots! Furthermore, liquid can drip into the lower bezel seams, frying the high-voltage backlight circuitry!<br>
                <strong>The Safe Way:</strong> Turn off the monitor. Use a dry, clean <strong>Microfiber cloth</strong>. If fingerprints persist, lightly dampen the cloth with pure distilled water (never spray the screen directly!).
              </p>
            </div>
          </div>

          <h4>Physical Hygiene: Dusting Fans with Compressed Air</h4>
          <p>Every 6 months, buy a $5 can of canned compressed air. Take your desktop or laptop near an open window and blow short bursts of air through the intake and exhaust vents. <strong>Crucial safety tip:</strong> Use a wooden toothpick or pencil to hold the fan blades still while blowing air — spinning fan blades too fast with compressed air can act like a generator and send unwanted electrical current back into the motherboard!</p>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li>Enable <strong>Storage Sense</strong> to automatically purge gigabytes of temporary junk files from your SSD.</li>
            <li>Never use chemical window cleaners on monitors; clean screens exclusively with a damp microfiber cloth.</li>
            <li>Clean dust vents quarterly to keep cooling fans silent and temperatures low.</li>
          </ul>
`;

console.log('Module 9 enriched!');

// =============================================================================
// MODULE 10: Digital Workplace & Office Productivity
// =============================================================================

// Lesson 10.1: Word Processing & Document Design Hierarchy
COURSE_DATA.modules[9].lessons[0].readTime = "20 min read";
COURSE_DATA.modules[9].lessons[0].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 4 • Week 14 • Lesson 10.1</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Spend 1-2 days learning semantic document hierarchy, typography rules, and professional layouts.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Understand Semantic Heading Styles (Heading 1, Heading 2, Normal text) vs. manual formatting.</li>
              <li>Learn why automatic Tables of Contents, Navigation Panes, and Screen Readers require styles.</li>
              <li>Master Page Breaks (<kbd>Ctrl</kbd> + <kbd>Enter</kbd>) to eliminate pressing Enter 25 times!</li>
              <li>Apply professional typography standards: serif vs. sans-serif, margins, and line spacing.</li>
            </ul>
          </div>

          <h3>Document Architecture: Beyond Basic Typing</h3>
          <p>Most people use word processors (Microsoft Word, Google Docs) like an electric typewriter: they type text, highlight it with a mouse, click Bold, make the font size 18, and press the Enter key 25 times to force text onto the next page. <strong>This creates brittle, amateur documents that break the instant you add a new paragraph!</strong> Professional document designers use <strong>Semantic Styles and Structural Breaks</strong>.</p>

          <h4>Semantic Heading Hierarchy (H1, H2, H3)</h4>
          <div class="comparison-grid">
            <div class="compare-card bad" style="background:var(--bg-surface-alt); border-color:var(--border-medium);">
              <h5 style="color:var(--primary);">Amateur Formatting (Manual Tweaks)</h5>
              <p>User highlights a sentence, selects Arial 16pt, and clicks Bold.</p>
              <ul class="styled-list">
                <li><strong>The Flaw:</strong> To the computer, that sentence is still just \"dumb body text\".</li>
                <li>The computer cannot generate an automatic Table of Contents.</li>
                <li>Screen readers for visually impaired people cannot announce it as a chapter header.</li>
                <li>If your boss asks to change header colors, you must manually edit 50 headers by hand!</li>
              </ul>
            </div>
            <div class="compare-card good">
              <h5>Professional Formatting (Semantic Styles)</h5>
              <p>User places cursor on headline and clicks <strong>Heading 1</strong> or <strong>Heading 2</strong> in the Styles toolbar.</p>
              <ul class="styled-list">
                <li><strong>The Superpower:</strong> Instantly generates a clickable 1-click Table of Contents!</li>
                <li>Enables the <strong>Navigation Pane</strong> to jump between chapters in 1 click.</li>
                <li>Modify the \"Heading 1\" style once, and all 50 headers update globally across the entire 100-page document instantly!</li>
              </ul>
            </div>
          </div>

          <!-- THE PAGE BREAK CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! Please Stop Pressing 'Enter' 25 Times to Move to the Next Page! Use Ctrl + Enter!"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                Everyone has done this: you finish Chapter 1 halfway down page 3, and you want Chapter 2 to start on page 4. So you tap <kbd>Enter</kbd> 20 times until Chapter 2 reaches the top of page 4.
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                <strong>The Catastrophe:</strong> Two days later, you add one single sentence to Chapter 1. Suddenly, those 20 invisible Enter characters get pushed down, and Chapter 2 is pushed into the awkward middle of page 5! Your entire 20-page document layout is destroyed!
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                <strong>The Pro Secret: Page Break (<kbd>Ctrl</kbd> + <kbd>Enter</kbd>)!</strong><br>
                Press <strong><kbd>Ctrl</kbd> + <kbd>Enter</kbd></strong> (or <kbd>⌘</kbd> + <kbd>Enter</kbd> on Mac). It inserts an invisible structural boundary. No matter how much text you add or delete in Chapter 1, Chapter 2 is locked permanently to the exact top of the next page!
              </p>
            </div>
          </div>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li>Always format titles and chapters with <strong>Heading Styles (H1, H2)</strong> rather than manual font resizing.</li>
            <li>Press <kbd>Ctrl</kbd> + <kbd>Enter</kbd> to insert clean <strong>Page Breaks</strong> that preserve document layout.</li>
            <li>Use <strong>Sans-serif fonts (Calibri, Inter, Arial)</strong> for digital screens and <strong>Serif fonts (Times New Roman, Garamond)</strong> for long printed books.</li>
          </ul>
`;

// Lesson 10.2: Spreadsheets & Data Mastery: Formulas (=SUM, =AVERAGE, =COUNT, =IF)
COURSE_DATA.modules[9].lessons[1].readTime = "22 min read";
COURSE_DATA.modules[9].lessons[1].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 4 • Week 15 • Lesson 10.2</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Spend 1-2 days practicing coordinate grids, core formulas, and cell locking in our spreadsheet sandbox!</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Understand the Spreadsheet Coordinate Grid: Columns (Letters), Rows (Numbers), and Cells.</li>
              <li>Master the Golden Rule of Spreadsheets: Every formula begins with the equals sign (<code>=</code>).</li>
              <li>Write essential mathematical functions: <code>=SUM</code>, <code>=AVERAGE</code>, <code>=COUNT</code>, and logical <code>=IF</code>.</li>
              <li>Differentiate between Relative Cell References (<code>A1</code>) and Absolute Locked References (<code>$A$1</code>).</li>
              <li>Decipher common spreadsheet errors: <code>#DIV/0!</code>, <code>#VALUE!</code>, and <code>######</code>.</li>
            </ul>
          </div>

          <h3>The World's Most Powerful Business Tool: The Spreadsheet</h3>
          <p>More global business, corporate finance, science, and government policy runs on spreadsheets (Microsoft Excel and Google Sheets) than virtually any other software in human history. A spreadsheet is an infinite mathematical grid that turns numbers into automated living calculation engines.</p>

          <h4>The Anatomy of a Spreadsheet Grid</h4>
          <ul class="styled-list">
            <li><strong>Columns:</strong> Vertical bars identified by <strong>Letters</strong> (A, B, C, D... Z, AA, AB).</li>
            <li><strong>Rows:</strong> Horizontal bars identified by <strong>Numbers</strong> (1, 2, 3, 4...).</li>
            <li><strong>Cell:</strong> The intersection of a Column and Row. For example, <strong>Cell B4</strong> is Column B, Row 4.</li>
            <li><strong>Range:</strong> A rectangular block of cells written with a colon: <code>A1:A10</code> means <em>\"Every cell from A1 down through A10\"</em>.</li>
          </ul>

          <h4>The 4 Core Essential Formulas Every Human Must Know</h4>
          <p><strong>The Golden Rule:</strong> If you type <code>5 + 5</code> into a cell, the spreadsheet treats it as plain text. You MUST type the <strong>equals sign (<code>=</code>)</strong> first to tell the computer: <em>\"Calculate this math!\"</em></p>

          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Formula</th>
                  <th>Syntax Example</th>
                  <th>What It Calculates</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>=SUM</code></td>
                  <td><code>=SUM(B2:B20)</code></td>
                  <td>Adds up all numbers in that range in 1 millisecond.</td>
                </tr>
                <tr>
                  <td><code>=AVERAGE</code></td>
                  <td><code>=AVERAGE(C2:C50)</code></td>
                  <td>Adds all numbers and divides by the count (arithmetic mean).</td>
                </tr>
                <tr>
                  <td><code>=COUNT</code></td>
                  <td><code>=COUNT(A1:A100)</code></td>
                  <td>Counts how many cells contain numerical data (ignores empty cells).</td>
                </tr>
                <tr>
                  <td><code>=IF</code></td>
                  <td><code>=IF(B2 >= 70, "Pass", "Fail")</code></td>
                  <td><strong>Logical Decision Engine:</strong> Tests if a condition is true. If test score in B2 is 70 or higher, displays \"Pass\"; otherwise displays \"Fail\"!</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- THE SPREADSHEET ERRORS CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! My Cell Turned Into '######' or '#DIV/0!'! Did I Break the Entire Spreadsheet?!"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                Don't panic! Spreadsheet errors look scary, but they are simple diagnostic hints:
              </p>
              <ul class="styled-list">
                <li><code>######</code>: <strong>The column is just too narrow!</strong> The number is so long that it physically cannot fit inside the column width. Double-click the line between Column headers A and B to expand the column, and your number will appear!</li>
                <li><code>#DIV/0!</code>: You wrote a formula that attempted to divide by zero or divide by a blank empty cell. (Mathematics forbids division by zero!).</li>
                <li><code>#VALUE!</code>: You tried to do math on a word! (e.g. <code>=A1 + B1</code>, but cell A1 contains the word \"Apples\").</li>
                <li><code>#REF!</code>: You wrote a formula pointing to a cell, and then someone physically deleted that row or column from the sheet!</li>
              </ul>
            </div>
          </div>

          <h4>Relative vs. Absolute Cell References (The $ Dollar Sign Secret)</h4>
          <p>When you write <code>=A1 * 1.05</code> and drag the formula down to the next row, Excel automatically changes it to <code>=A2 * 1.05</code>. This is a <strong>Relative Reference</strong>.</p>
          <p>What if you have a tax rate in cell <strong>$F$1</strong> that every row must multiply by? Put <strong>dollar signs</strong> in front of the letter and number: <code>=A1 * $F$1</code>. The dollar signs \"lock\" the reference so it never drifts when dragged!</p>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li>Every formula begins with the <strong>equals sign (<code>=</code>)</strong>.</li>
            <li>Master the Big Four: <code>=SUM</code>, <code>=AVERAGE</code>, <code>=COUNT</code>, and <code>=IF</code>.</li>
            <li>Use dollar signs (<code>$A$1</code>) to lock absolute cell references when dragging formulas down columns.</li>
          </ul>
`;

// Lesson 10.3: Spreadsheet Data Visualization: Charts, Sorting & Filtering
COURSE_DATA.modules[9].lessons[2].readTime = "20 min read";
COURSE_DATA.modules[9].lessons[2].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 4 • Week 15 • Lesson 10.3</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Take 1 day to learn how to choose the right chart and sort data safely without corrupting rows.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Select the correct chart type for your data: Bar, Line, Pie, or Scatter Plot.</li>
              <li>Avoid the classic pie chart disaster (never more than 5 slices!).</li>
              <li>Filter large data tables to isolate specific records in seconds.</li>
              <li>Avoid the catastrophic sorting mistake that scrambles customer records.</li>
            </ul>
          </div>

          <h3>Visual Storytelling: Turning Rows of Numbers into Insight</h3>
          <p>No human being can look at a wall of 5,000 numbers in a spreadsheet and instantly spot patterns, anomalies, and seasonal growth trends. <strong>Data visualization</strong> converts numerical tables into intuitive visual shapes (bars, lines, and slices) that human brains process in a split-second.</p>

          <h4>The Chart Selection Matrix: Which Chart Should You Use?</h4>
          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Chart Type</th>
                  <th>Best Used For</th>
                  <th>Worst Used For (Common Pitfall)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Bar / Column Chart</strong></td>
                  <td>Comparing discrete categories (e.g. Sales by Product: Shoes vs Shirts vs Hats).</td>
                  <td>Showing continuous trends over time with 50 data points (use a Line chart instead).</td>
                </tr>
                <tr>
                  <td><strong>Line Chart</strong></td>
                  <td>Tracking continuous change over time (e.g. Company revenue from January to December).</td>
                  <td>Comparing unrelated categories (e.g. Apples vs Bananas on a connected line makes no sense!).</td>
                </tr>
                <tr>
                  <td><strong>Pie Chart</strong></td>
                  <td>Parts of a single whole adding up to exactly 100% (e.g. Budget breakdown: 50% Rent, 30% Food, 20% Savings).</td>
                  <td><strong>Never use for more than 5 slices!</strong> A pie chart with 20 tiny slivers is unreadable garbage.</td>
                </tr>
                <tr>
                  <td><strong>Scatter Plot</strong></td>
                  <td>Finding mathematical correlations between two continuous variables (e.g. Hours Studied vs Exam Score).</td>
                  <td>Simple categorical lists.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- THE SCRAMBLE SORT CALLOUT -->
          <div class="callout warning" style="margin: 24px 0; border-left: 4px solid #ef4444; background: rgba(239, 68, 68, 0.08);">
            <span class="callout-icon">⚠️</span>
            <div>
              <strong style="font-size: 1.08rem; color: #dc2626;">DANGER: The Catastrophic Spreadsheet Sorting Mistake!</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                Imagine you have a customer table with Column A (Customer Name), Column B (Address), and Column C (Credit Card Balance).
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                You want to sort by Name alphabetically. You highlight <em>only Column A</em> with your mouse, right-click, and choose \"Sort A-Z\".
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                <strong>The Nightmare:</strong> Column A rearranged alphabetically, but Columns B and C stayed in their original spots! You just attached John's credit card and address to Sarah, and Sarah's to Bob! You just permanently scrambled and corrupted your company's entire database!<br>
                <strong>The Golden Rule:</strong> Always select the <strong>entire table</strong> (or click one single cell and use <strong>Data &rarr; Filter</strong>) so that all rows stay locked together when sorting!
              </p>
            </div>
          </div>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li>Use <strong>Bar charts</strong> for categories, <strong>Line charts</strong> for trends over time, and <strong>Pie charts</strong> only for &le; 5 slices adding to 100%.</li>
            <li>Never sort a single isolated column; always sort the whole table to prevent data corruption.</li>
            <li>Use <strong>Data Filters</strong> to dynamically search and isolate records without altering data order.</li>
          </ul>
`;

// Lesson 10.4: Cloud Collaboration & Professional Communication
COURSE_DATA.modules[9].lessons[3].readTime = "20 min read";
COURSE_DATA.modules[9].lessons[3].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 4 • Week 15 • Lesson 10.4</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Spend 1 day learning cloud co-authoring, version history rollbacks, and professional email standards.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Understand real-time Cloud Collaboration (Google Docs, Microsoft 365).</li>
              <li>Use Version History to roll back accidental deletions with 1 click.</li>
              <li>Master email addressing: To, CC (Carbon Copy), and BCC (Blind Carbon Copy).</li>
              <li>Avoid the dreaded "Reply-All" corporate disaster.</li>
            </ul>
          </div>

          <h3>The Modern Workplace: Cloud Collaboration & Communication</h3>
          <p>In the past, collaborating on a report meant writing a draft, saving it as <code>Report_v1.docx</code>, emailing it to 3 coworkers, getting back three conflicting files (<code>Report_v1_BobEdits.docx</code>, <code>Report_Final.docx</code>, <code>Report_REAL_FINAL.docx</code>), and spending hours trying to merge them. Modern cloud tools allow dozens of people to co-author the exact same live document simultaneously.</p>

          <h4>Version History: The Ultimate Safety Net</h4>
          <p>Have you ever worked on a shared document with a coworker who accidentally selected your entire 10-page chapter and pressed Backspace, then clicked Save? <strong>Do not panic!</strong></p>
          <p>In Google Docs and Microsoft 365, click <strong>File &rarr; Version History</strong>. The cloud records a complete snapshot of your document every few minutes. You can see who made each edit, what text was deleted, and click <strong>\"Restore this version\"</strong> to roll back time instantly!</p>

          <h4>Email Addressing Standards: To vs. CC vs. BCC</h4>
          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Field</th>
                  <th>Full Name</th>
                  <th>Who Belongs Here</th>
                  <th>Who Can See Their Email Address</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>To:</strong></td>
                  <td>Direct Recipient</td>
                  <td>The primary person or people who are expected to read and take direct action.</td>
                  <td>Visible to everyone on the email thread.</td>
                </tr>
                <tr>
                  <td><strong>CC:</strong></td>
                  <td>Carbon Copy</td>
                  <td>People who need to be kept \"in the loop\" for awareness, but are not expected to reply (e.g. your manager).</td>
                  <td>Visible to everyone on the email thread.</td>
                </tr>
                <tr>
                  <td><strong>BCC:</strong></td>
                  <td>Blind Carbon Copy</td>
                  <td>Recipients whose identity and email addresses are <strong>completely hidden</strong> from all other recipients!</td>
                  <td><strong>100% Invisible to To and CC recipients!</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- THE BCC CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! When MUST I Use BCC? The Nightmare of the 500-Person 'Reply-All' Storm!"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                Whenever you email a group of people who do not all personally know each other (such as a school club, church newsletter, or company-wide announcement): <strong>PUT THEIR ADDRESSES IN BCC!</strong>
              </p>
              <ul class="styled-list">
                <li><strong>Privacy Protection:</strong> Putting 100 people in \"To\" exposes everyone's private personal email address to 99 strangers.</li>
                <li><strong>Preventing the Reply-All Storm:</strong> If one recipient replies: <em>\"Thanks!\"</em> and clicks \"Reply-All\", that useless \"Thanks\" notification is blasted into the inboxes of all 100 people! Then people reply-all shouting <em>\"Please stop replying all!\"</em>, creating an inbox avalanche!</li>
              </ul>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                By using <strong>BCC</strong>, each person receives their own private copy, and hitting Reply-All only sends the email back to you!
              </p>
            </div>
          </div>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li>Cloud co-authoring eliminates the nightmare of conflicting multiple file versions.</li>
            <li>Use <strong>Version History</strong> to inspect changes and roll back accidental deletions instantly.</li>
            <li>Always use <strong>BCC</strong> when emailing mass groups to protect privacy and prevent Reply-All storms.</li>
          </ul>
`;

console.log('Module 10 enriched!');

// =============================================================================
// MODULE 11: Web Fundamentals: How Websites Actually Work
// =============================================================================

// Lesson 11.1: The Web vs The Internet & The Client-Server Model
COURSE_DATA.modules[10].lessons[0].readTime = "20 min read";
COURSE_DATA.modules[10].lessons[0].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 4 • Week 16 • Lesson 11.1</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Spend 1-2 days learning the difference between the Internet and the Web, and the Client-Server model.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Differentiate between the Internet (the physical infrastructure) and the World Wide Web (the service).</li>
              <li>Understand the Client-Server model: clients request resources, servers deliver them.</li>
              <li>Explain HTTP vs HTTPS and what the browser padlock icon actually encrypts.</li>
              <li>Trace the history of Tim Berners-Lee inventing the Web at CERN in 1989.</li>
            </ul>
          </div>

          <h3>The Highway vs. The Traffic: Web vs. Internet</h3>
          <p>Many people use the words \"Internet\" and \"Web\" interchangeably. In reality, they are two completely different layers of technology:</p>

          <div class="comparison-grid">
            <div class="compare-card good">
              <h5>The Internet (The Physical Highway Network)</h5>
              <p>The global physical network of wires, fiber-optic undersea cables, satellites, and routers invented in 1969 (ARPANET).</p>
              <p>It carries many different types of traffic: Email (SMTP), File Transfers (FTP), Voice Calls (VoIP), Online Gaming, and the Web!</p>
            </div>
            <div class="compare-card bad" style="background:var(--bg-surface-alt); border-color:var(--border-medium);">
              <h5 style="color:var(--primary);">The World Wide Web (The Cars & Shops)</h5>
              <p>An application system running on top of the internet, invented in 1989 by Sir Tim Berners-Lee at CERN.</p>
              <p>It consists of billions of multimedia documents connected together by <strong>clickable Hyperlinks</strong> and viewed in web browsers via HTTP/HTTPS.</p>
            </div>
          </div>

          <h4>The Client-Server Model: The Restaurant Architecture</h4>
          <p>Every interaction on the World Wide Web follows the <strong>Client-Server Architecture</strong>:</p>

          <div class="steps-grid">
            <div class="step-card">
              <div class="step-num">1</div>
              <h5>The Client (The Customer)</h5>
              <p>Your web browser (Chrome, Safari, Edge, Firefox) running on your laptop or phone. It issues requests: <em>\"Please send me the home page of Wikipedia!\"</em></p>
              <span class="step-example">Initiates web requests.</span>
            </div>
            <div class="step-card">
              <div class="step-num">2</div>
              <h5>The Network Pipeline (The Waiter)</h5>
              <p>HTTP/HTTPS protocols guide the request across routers and undersea cables to the destination server.</p>
              <span class="step-example">Carries requests and responses.</span>
            </div>
            <div class="step-card">
              <div class="step-num">3</div>
              <h5>The Server (The Kitchen)</h5>
              <p>A powerful computer sitting in a climate-controlled data center (Google, Amazon AWS) that listens 24/7 for incoming requests and serves files.</p>
              <span class="step-example">Processes logic and delivers data.</span>
            </div>
            <div class="step-card">
              <div class="step-num">4</div>
              <h5>The Response Delivered</h5>
              <p>The server sends back an HTTP response containing HTML code, CSS stylesheets, images, and JavaScript to the client.</p>
              <span class="step-example">Browser paints the page on your screen!</span>
            </div>
          </div>

          <!-- THE HTTPS PADLOCK CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! What Does That Little Padlock Icon and 'HTTPS' in My Browser Address Bar Actually Mean?!"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                The difference between <strong>HTTP</strong> and <strong>HTTPS</strong> is the letter <strong>S (Secure / TLS Encryption)</strong>!
              </p>
              <ul class="styled-list">
                <li><strong>Plain HTTP (Unencrypted):</strong> When you type a password or credit card on an old HTTP site, data travels across the Wi-Fi airwaves in clear, readable plain English text. Anyone sitting in Starbucks running free packet-sniffer software can read your password out of thin air!</li>
                <li><strong>HTTPS (Encrypted with TLS):</strong> Your browser and the server negotiate a secret cryptographic key. Everything you send (passwords, credit cards, messages) is scrambled into unbreakable mathematical cipher gibberish! Anyone intercepting the packets sees only random noise.</li>
              </ul>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                <strong>Crucial Warning:</strong> The padlock means your connection to the server is encrypted. <em>It does NOT mean the website is honest!</em> A scammer can easily put HTTPS on their fake bank phishing website. Always check the domain name!
              </p>
            </div>
          </div>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li>The <strong>Internet</strong> is the global network hardware; the <strong>Web</strong> is the system of linked pages running on it.</li>
            <li>In the <strong>Client-Server model</strong>, your browser (Client) requests resources from remote data centers (Servers).</li>
            <li><strong>HTTPS</strong> encrypts data in transit using TLS, preventing eavesdropping on public Wi-Fi.</li>
          </ul>
`;

// Lesson 11.2: What Happens When You Type a URL? The Life of a Web Request
COURSE_DATA.modules[10].lessons[1].readTime = "22 min read";
COURSE_DATA.modules[10].lessons[1].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 4 • Week 16 • Lesson 11.2</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Spend 1-2 days learning the 6-stage lifecycle of a web request and play with the Website Lifecycle Simulator below!</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Trace the 6 millisecond stages that occur when you press Enter on a URL.</li>
              <li>Understand the TCP 3-Way Handshake (SYN, SYN-ACK, ACK).</li>
              <li>Learn how TLS cryptographic handshakes establish secure session keys.</li>
              <li>Decode HTTP Status Codes: <code>200 OK</code>, <code>301 Redirect</code>, <code>404 Not Found</code>, and <code>500 Server Error</code>.</li>
            </ul>
          </div>

          <h3>The 500-Millisecond Odyssey: The Life of a Web Request</h3>
          <p>You click your address bar, type <code>https://example.com</code>, and tap <kbd>Enter</kbd>. Within half a second, text, images, and interactive buttons bloom onto your screen. It seems instantaneous, but that single tap triggered a dizzying chain of planetary coordination across protocols, fiber optics, and cryptographic algorithms. Let us trace the journey step-by-step.</p>

          <h4>The 6 Stages of a Web Request</h4>
          <div class="steps-grid">
            <div class="step-card">
              <div class="step-num">1</div>
              <h5>1. DNS Resolution</h5>
              <p>The browser doesn't know where \"example.com\" lives. It asks DNS resolvers for its numerical IP address (e.g. <code>93.184.216.34</code>).</p>
              <span class="step-example">Lookup completed in ~15 ms.</span>
            </div>
            <div class="step-card">
              <div class="step-num">2</div>
              <h5>2. TCP 3-Way Handshake</h5>
              <p>Client sends <strong>SYN</strong> &rarr; Server replies <strong>SYN-ACK</strong> &rarr; Client replies <strong>ACK</strong>. A reliable, error-checked two-way pipe is opened.</p>
              <span class="step-example">Connection established.</span>
            </div>
            <div class="step-card">
              <div class="step-num">3</div>
              <h5>3. TLS Cryptographic Handshake</h5>
              <p>The browser verifies the server's SSL/TLS digital certificate, checks encryption keys, and creates a unique session key.</p>
              <span class="step-example">End-to-end encryption activated.</span>
            </div>
            <div class="step-card">
              <div class="step-num">4</div>
              <h5>4. HTTP GET Request</h5>
              <p>Browser sends: <code>GET / HTTP/2</code>. The web server reads the request, checks its database, and generates the HTML document.</p>
              <span class="step-example">Server processes page request.</span>
            </div>
            <div class="step-card">
              <div class="step-num">5</div>
              <h5>5. HTTP Response & Status Code</h5>
              <p>Server replies: <code>HTTP/2 200 OK</code> and streams the HTML payload packets across the internet to your device.</p>
              <span class="step-example">Delivers HTML, CSS, and images.</span>
            </div>
            <div class="step-card">
              <div class="step-num">6</div>
              <h5>6. Browser DOM Rendering Engine</h5>
              <p>The browser parses HTML tags into a DOM tree, applies CSS stylesheet rules, executes JavaScript, and paints pixels on your screen!</p>
              <span class="step-example">Complete interactive webpage rendered!</span>
            </div>
          </div>

          <!-- THE HTTP STATUS CODES CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! What Do All Those HTTP Status Codes Mean? (200, 301, 404, 500) - The Restaurant Analogy!"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                Every time a server replies to your browser, it includes a 3-digit status code. Think of it like ordering food at a restaurant:
              </p>
              <ul class="styled-list">
                <li><strong>200 OK:</strong> <em>\"Here is your food, freshly cooked!\"</em> (The page exists and loaded successfully).</li>
                <li><strong>301 Moved Permanently:</strong> <em>\"Our restaurant moved down the street; follow me to the new building!\"</em> (Redirects you to a new URL).</li>
                <li><strong>403 Forbidden:</strong> <em>\"You are trying to enter the private staff kitchen without a security badge!\"</em> (Permission denied / login required).</li>
                <li><strong>404 Not Found:</strong> <em>\"You ordered a dish that is not on our menu!\"</em> (You clicked a broken link or mistyped the URL).</li>
                <li><strong>500 Internal Server Error:</strong> <em>\"The kitchen just caught on fire!\"</em> (The server crashed or encountered a programming code bug).</li>
              </ul>
            </div>
          </div>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li>Web requests execute in milliseconds: <strong>DNS</strong> &rarr; <strong>TCP Handshake</strong> &rarr; <strong>TLS Encryption</strong> &rarr; <strong>HTTP GET</strong> &rarr; <strong>DOM Paint</strong>.</li>
            <li>HTTP status codes categorize server responses: <strong>200s</strong> = Success, <strong>300s</strong> = Redirects, <strong>400s</strong> = Client errors (404), <strong>500s</strong> = Server crashes.</li>
          </ul>
`;

// Lesson 11.3: HTML, CSS & JavaScript: The Three Pillars of Every Webpage
COURSE_DATA.modules[10].lessons[2].readTime = "22 min read";
COURSE_DATA.modules[10].lessons[2].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 4 • Week 16 • Lesson 11.3</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Spend 1-2 days learning the syntax, anatomy, and roles of HTML, CSS, and JavaScript.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Understand the specific roles of HTML (Structure), CSS (Style), and JavaScript (Interactivity).</li>
              <li>Master the anatomy of an HTML element: opening tag, attributes, content, and closing tag.</li>
              <li>Learn the 8 most essential HTML tags: <code>h1</code>, <code>p</code>, <code>a</code>, <code>img</code>, <code>ul</code>, <code>button</code>, <code>div</code>.</li>
              <li>Understand the CSS Box Model: Margin, Border, Padding, and Content.</li>
              <li>Discover how to view and edit the live code of ANY website using Chrome DevTools (Inspect Element)!</li>
            </ul>
          </div>

          <h3>The Three Pillars: The Building Analogy</h3>
          <p>Every website you have ever visited in your life — from a simple local bakery website to massive platforms like YouTube, Amazon, and Wikipedia — is constructed from three core languages interpreted directly inside your web browser:</p>

          <div class="comparison-grid">
            <div class="compare-card good">
              <h5>1. HTML (HyperText Markup Language)</h5>
              <p><strong>The Raw Structural Framing & Bricks:</strong> Defines <em>what</em> elements exist on the page using markup tags.</p>
              <code>&lt;button class=\"cta\"&gt;Subscribe Now&lt;/button&gt;</code>
              <p style="margin-top:6px; font-size:0.88rem;\">Tells the browser: \"Place a clickable button right here with this text.\"</p>
            </div>
            <div class="compare-card good">
              <h5>2. CSS (Cascading Style Sheets)</h5>
              <p><strong>The Paint, Interior Design & Layout:</strong> Defines <em>how</em> things look visually (colors, fonts, borders, animations, mobile responsiveness).</p>
              <code>.cta { background: #10b981; color: white; border-radius: 8px; }</code>
              <p style="margin-top:6px; font-size:0.88rem;\">Turns the plain grey browser button into a modern, glowing green rounded button!</p>
            </div>
            <div class="compare-card bad" style="background:var(--bg-surface-alt); border-color:var(--border-medium);">
              <h5 style="color:var(--primary);">3. JavaScript (JS)</h5>
              <p><strong>The Electrical Wiring & Smart Automation:</strong> A real programming language running inside your browser that makes pages alive and interactive!</p>
              <code>button.addEventListener('click', playSound);</code>
              <p style="margin-top:6px; font-size:0.88rem;\">Opens dropdown menus, validates form passwords, and updates feeds without refreshing the page!</p>
            </div>
          </div>

          <h4>The Anatomy of an HTML Tag</h4>
          <p>HTML uses angle brackets (<code>&lt; &gt;</code>) to wrap tags. Notice the 4 distinct parts:</p>
          <div style="font-family:'JetBrains Mono', monospace; font-size:1.05rem; background:var(--bg-surface-alt); padding:14px; border-radius:8px; border:1px solid var(--border-medium); text-align:center; margin:14px 0;">
            <span style="color:#ef4444;">&lt;a</span> <span style="color:#3b82f6;">href=</span><span style="color:#10b981;">\"https://google.com\"</span><span style="color:#ef4444;">&gt;</span>Visit Google Search<span style="color:#ef4444;">&lt;/a&gt;</span>
          </div>
          <ul class="styled-list">
            <li><code>&lt;a</code> = <strong>Opening Tag:</strong> Tells the browser this is an anchor hyperlink.</li>
            <li><code>href=\"...\"</code> = <strong>Attribute:</strong> Provides extra configuration instructions (where the link points).</li>
            <li><code>Visit Google Search</code> = <strong>Content:</strong> The human-readable text you see on screen.</li>
            <li><code>&lt;/a&gt;</code> = <strong>Closing Tag:</strong> The forward slash <code>/</code> signals that the link element is finished.</li>
          </ul>

          <h4>The CSS Box Model: How Spacing Works</h4>
          <p>Every single element on a webpage (every paragraph, image, card, and button) is enclosed in an invisible rectangular box consisting of 4 nested layers:</p>

          <div class="steps-grid">
            <div class="step-card">
              <div class="step-num">1</div>
              <h5>1. Content</h5>
              <p>The actual text, icon, or image itself inside the box.</p>
              <span class="step-example">e.g. The words "Click Me"</span>
            </div>
            <div class="step-card">
              <div class="step-num">2</div>
              <h5>2. Padding (Inner Breathing Room)</h5>
              <p>The space between the text and the button's border. Increasing padding makes buttons larger and easier to click!</p>
              <span class="step-example">Internal breathing room.</span>
            </div>
            <div class="step-card">
              <div class="step-num">3</div>
              <h5>3. Border</h5>
              <p>The physical outline line wrapping the padding and content (can be solid, dashed, rounded, or invisible).</p>
              <span class="step-example">Visual outline edge.</span>
            </div>
            <div class="step-card">
              <div class="step-num">4</div>
              <h5>4. Margin (Outer Buffer)</h5>
              <p>The empty space outside the border that pushes neighboring buttons and paragraphs away so they don't collide.</p>
              <span class="step-example">External spacing between elements.</span>
            </div>
          </div>

          <!-- THE INSPECT ELEMENT CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! Can I See and Edit the Secret Code of ANY Website on Earth Right Now?! (Inspect Element!)"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                Yes! Absolutely! Because HTML, CSS, and JavaScript run locally inside <em>your own web browser</em>, your browser has already downloaded 100% of the frontend code!
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                <strong>Try it right now:</strong>
              </p>
              <ol style="margin-top:6px; padding-left:18px;">
                <li>Right-click any headline on this webpage (or any news website like BBC or CNN).</li>
                <li>Click <strong>Inspect</strong> (or press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd>).</li>
                <li>Chrome DevTools will open, highlighting the exact HTML tag in the Elements panel!</li>
                <li>Double-click the headline text, type <em>\"Alex is the Greatest Hacker on Earth!\"</em>, and press <kbd>Enter</kbd>!</li>
                <li>Look up at your screen: the live webpage headline changes instantly! (Don't worry — you didn't hack their server; you only edited the local copy inside your computer's RAM. Refresh the page to restore it!).</li>
              </ol>
            </div>
          </div>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li><strong>HTML</strong> creates structure, <strong>CSS</strong> controls styling and responsive layouts, and <strong>JavaScript</strong> provides interactive logic.</li>
            <li>The <strong>CSS Box Model</strong> governs all element spacing: Content &rarr; Padding &rarr; Border &rarr; Margin.</li>
            <li>Use <strong>Inspect Element</strong> in any web browser to explore, debug, and learn from real-world website code.</li>
          </ul>
`;

// Lesson 11.4: Frontend vs Backend vs Database: Full Stack Architecture
COURSE_DATA.modules[10].lessons[3].readTime = "22 min read";
COURSE_DATA.modules[10].lessons[3].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 4 • Week 16 • Lesson 11.4</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Spend 1-2 days learning how Full-Stack web architecture connects frontends, backend servers, and databases.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Differentiate between Frontend (Client-side), Backend (Server-side), and Database layers.</li>
              <li>Understand the Restaurant Analogy: Dining Room, Waiter (API), Kitchen, and Pantry.</li>
              <li>Explain what an Application Programming Interface (REST API) actually is.</li>
              <li>Solve the mystery: Why can't we just store all passwords and user data in frontend HTML?</li>
            </ul>
          </div>

          <h3>The Full-Stack Pyramid: How Modern Web Apps Work</h3>
          <p>When you use an app like Netflix, Uber, or Instagram, you are interacting with three synchronized technological layers working as a unified team. This three-tier architecture is known throughout software engineering as <strong>Full-Stack Architecture</strong>.</p>

          <h4>The Restaurant Analogy: The Three Tiers</h4>
          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Layer</th>
                  <th>The Restaurant Equivalent</th>
                  <th>Technologies Used</th>
                  <th>Primary Duty</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Frontend (Client-Side)</strong></td>
                  <td>The <strong>Dining Room</strong> with menus, comfortable tables, ambient lighting, and decor.</td>
                  <td>HTML, CSS, JavaScript, React, Vue, mobile iOS/Android apps.</td>
                  <td>What the user directly sees and touches on their screen. Renders visual UI and captures input clicks.</td>
                </tr>
                <tr>
                  <td><strong>Backend (Server-Side)</strong></td>
                  <td>The <strong>Kitchen & Chef</strong> working behind closed doors.</td>
                  <td>Node.js, Python, Java, C#, Go, Ruby.</td>
                  <td>Private business logic: processing payments, verifying passwords, sending emails, generating receipts.</td>
                </tr>
                <tr>
                  <td><strong>Database</strong></td>
                  <td>The <strong>Pantry & Walk-in Refrigerator</strong>.</td>
                  <td>PostgreSQL, MySQL, MongoDB, Redis.</td>
                  <td>Permanent structured storage: user profiles, hashed passwords, transaction histories, inventory counts.</td>
                </tr>
                <tr>
                  <td><strong>API (Application Programming Interface)</strong></td>
                  <td>The <strong>Waiter</strong> carrying food orders back and forth.</td>
                  <td>REST APIs, JSON, GraphQL, HTTPS.</td>
                  <td>The structured communication messenger carrying requests from the frontend to the backend and returning data.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- THE SECURITY CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! Why Can't We Just Put the Database and Passwords Directly Inside the Frontend HTML Code?!"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                A beginner might ask: <em>\"Why do we need a complicated backend server? Why can't my JavaScript code just connect directly to the database and check passwords on the webpage?\"</em>
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                Because of what you learned in Lesson 11.3: <strong>ANYONE CAN RIGHT-CLICK AND INSPECT FRONTEND CODE!</strong>
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                If your frontend contained database credentials or password-checking code, any user on Earth could press <kbd>F12</kbd>, view your database password, read all customer credit card numbers, or change the JavaScript code from <code>if (password == 'correct')</code> to <code>if (true)</code> to bypass login completely!<br>
                <strong>The Golden Rule of Security:</strong> NEVER trust the frontend! The frontend is public enemy territory. All security checks, card processing, and password verifications must occur behind secure walls on the <strong>Backend Server</strong>.
              </p>
            </div>
          </div>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li><strong>Frontend:</strong> The user-facing visual client (HTML/CSS/JS).</li>
            <li><strong>Backend:</strong> The secure server-side logic and business rules (Python/Node.js).</li>
            <li><strong>Database:</strong> The permanent data store (SQL / MongoDB).</li>
            <li><strong>REST APIs:</strong> Standardized messengers carrying JSON data between clients and servers.</li>
          </ul>
`;

// Lesson 11.5: Hands-On Project: Building Your Very First Webpage from Scratch
COURSE_DATA.modules[10].lessons[4].readTime = "22 min read";
COURSE_DATA.modules[10].lessons[4].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 4 • Week 16 • Lesson 11.5</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Spend 1-2 days following this step-by-step tutorial to create and launch your very first custom webpage!</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Create a complete, valid HTML5 document using only basic built-in text editors.</li>
              <li>Structure headings, paragraphs, cards, styled buttons, and clickable hyperlinks.</li>
              <li>Apply internal CSS styling for colors, modern typography, shadows, and padding.</li>
              <li>Open and view your custom webpage locally inside Google Chrome or Microsoft Edge.</li>
              <li>Avoid the classic Notepad ".txt" extension trap!</li>
            </ul>
          </div>

          <h3>You Are Now a Web Creator: Building Page #1</h3>
          <p>You do not need to buy expensive software, pay monthly subscriptions, or install heavy developer tools to build a webpage. Every computer comes with everything you need right out of the box! Let's write real code and launch your first website in 4 simple steps.</p>

          <h4>Step 1: Open a Plain Text Editor</h4>
          <ul class="styled-list">
            <li><strong>Windows:</strong> Press <kbd>Win</kbd>, type <code>Notepad</code>, and press <kbd>Enter</kbd>.</li>
            <li><strong>Mac:</strong> Open <code>TextEdit</code> (Ensure you click <strong>Format &rarr; Make Plain Text</strong>!).</li>
          </ul>

          <h4>Step 2: Type (or Copy) This Clean HTML & CSS Code</h4>
          <p>Copy the following code into your blank text editor:</p>

          <pre style="background:var(--bg-surface-alt); padding:16px; border-radius:8px; border:1px solid var(--border-medium); font-family:'JetBrains Mono', monospace; font-size:0.9rem; overflow-x:auto;">
&lt;!DOCTYPE html&gt;
&lt;html lang=\"en\"&gt;
&lt;head&gt;
  &lt;meta charset=\"UTF-8\"&gt;
  &lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"&gt;
  &lt;title&gt;My Official Webpage&lt;/title&gt;
  &lt;style&gt;
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: linear-gradient(135deg, #0f172a, #1e293b);
      color: #f8fafc;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 20px;
    }
    .profile-card {
      background: rgba(30, 41, 59, 0.85);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 36px;
      border-radius: 16px;
      max-width: 440px;
      text-align: center;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
    }
    h1 { color: #38bdf8; margin-top: 0; font-size: 1.8rem; }
    p { color: #94a3b8; line-height: 1.6; font-size: 1rem; }
    .badge {
      display: inline-block;
      background: #10b981;
      color: #064e3b;
      font-weight: 700;
      padding: 4px 12px;
      border-radius: 9999px;
      font-size: 0.8rem;
      margin-bottom: 12px;
    }
    .btn {
      display: inline-block;
      background: #0284c7;
      color: white;
      text-decoration: none;
      font-weight: 600;
      padding: 12px 24px;
      border-radius: 8px;
      margin-top: 16px;
      transition: background 0.2s;
    }
    .btn:hover { background: #0369a1; }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div class=\"profile-card\"&gt;
    &lt;span class=\"badge\"&gt;🚀 Certified Web Builder&lt;/span&gt;
    &lt;h1&gt;Hello World!&lt;/h1&gt;
    &lt;p&gt;I am currently completing the 4-Month Computer &amp; Web Fundamentals Masterclass. I wrote this beautiful responsive webpage myself using pure HTML and CSS!&lt;/p&gt;
    &lt;a href=\"https://www.wikipedia.org\" target=\"_blank\" class=\"btn\"&gt;Explore the World Wide Web &rarr;&lt;/a&gt;
  &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
          </pre>

          <!-- THE NOTEPAD TRAP CALLOUT -->
          <div class="callout warning" style="margin: 24px 0; border-left: 4px solid #ef4444; background: rgba(239, 68, 68, 0.08);">
            <span class="callout-icon">⚠️</span>
            <div>
              <strong style="font-size: 1.08rem; color: #dc2626;">BEWARE: The Classic Notepad ".txt" Extension Trap!</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                When you click <strong>File &rarr; Save As</strong> in Notepad, Notepad secretly tries to save it as: <code>my_page.html.txt</code>!
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                If it ends in <code>.txt</code>, your browser will treat it as plain text and display raw code instead of rendering your webpage!
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                <strong>Follow these steps exactly:</strong>
              </p>
              <ol style="margin-top:6px; padding-left:18px;">
                <li>In Notepad, click <strong>File &rarr; Save As</strong>.</li>
                <li>In the <strong>\"Save as type\"</strong> dropdown, change it from <em>Text Documents (*.txt)</em> to <strong>All Files (*.*)</strong>!</li>
                <li>In the File name box, type: <code>index.html</code>.</li>
                <li>Save it to your <strong>Desktop</strong>.</li>
              </ol>
            </div>
          </div>

          <h4>Step 4: Launch It in Your Web Browser!</h4>
          <p>Go to your Desktop. Notice that the file icon has changed to your browser's logo (Chrome, Edge, or Safari)! <strong>Double-click <code>index.html</code>.</strong></p>
          <p>Your browser opens and displays your dark-mode glassmorphic card with gradient backgrounds, green badge, and working button! Look at the address bar: it reads <code>file:///C:/Users/.../Desktop/index.html</code>. <strong>Congratulations — you have officially crossed the threshold from consumer to creator!</strong></p>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li>Any computer with a simple text editor and web browser can create and test functional HTML/CSS webpages offline.</li>
            <li>Always select <strong>All Files (*.*)</strong> when saving in Notepad to ensure the <code>.html</code> extension is preserved.</li>
            <li>Double-clicking local <code>.html</code> files opens them directly in your browser using the <code>file://</code> protocol.</li>
          </ul>
`;

console.log('Module 11 enriched!');

// =============================================================================
// MODULE 12: Domains, Web Hosting, Cloud & SEO Essentials
// =============================================================================

// Lesson 12.1: Domain Names, Registrars & DNS Records (A, CNAME, MX, TXT)
COURSE_DATA.modules[11].lessons[0].readTime = "22 min read";
COURSE_DATA.modules[11].lessons[0].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 4 • Week 16 • Lesson 12.1</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Spend 1-2 days learning domain registration, TLD hierarchies, and DNS record management.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Understand the anatomy of a Domain Name: Subdomain, Second-Level Domain, and Top-Level Domain (TLD).</li>
              <li>Differentiate between Domain Registrars (Namecheap, Porkbun, Cloudflare) and Web Hosting providers.</li>
              <li>Master the 4 essential DNS Records: <code>A</code>, <code>CNAME</code>, <code>MX</code>, and <code>TXT</code>.</li>
              <li>Solve the mystery: What does "DNS Propagation" mean, and why can it take 24 hours?</li>
            </ul>
          </div>

          <h3>Owning Your Slice of the Web: Domain Names</h3>
          <p>When you build a webpage on your desktop, only you can see it. To share your brand with 5 billion internet users, you need two things: a unique registered name (<strong>Domain Name</strong>) and an online computer that serves your files 24/7 (<strong>Web Hosting</strong>). Let us master the domain architecture and DNS routing records that make websites discoverable.</p>

          <h4>The Anatomy of a Complete URL</h4>
          <p>Consider the address: <code>https://blog.mycompany.com</code></p>
          <ul class=\"styled-list\">
            <li><code>https://</code> = <strong>Protocol:</strong> The encrypted communication language.</li>
            <li><code>blog.</code> = <strong>Subdomain:</strong> An optional separate compartment or branch of your website.</li>
            <li><code>mycompany</code> = <strong>Second-Level Domain (SLD):</strong> Your unique registered brand name.</li>
            <li><code>.com</code> = <strong>Top-Level Domain (TLD):</strong> The root category extension (e.g. <code>.org</code> for non-profits, <code>.edu</code> for universities, <code>.io</code> for tech startups).</li>
          </ul>

          <h4>The 4 Essential DNS Records Every Webmaster Must Know</h4>
          <p>When you buy a domain at a registrar (like Cloudflare or Namecheap), you manage its DNS records table to connect different services:</p>

          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Record Type</th>
                  <th>Example Record</th>
                  <th>What It Does</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>A Record (Address)</strong></td>
                  <td><code>mycompany.com &rarr; 198.51.100.45</code></td>
                  <td>Points your domain name directly to the IPv4 address of your web server.</td>
                </tr>
                <tr>
                  <td><strong>CNAME Record (Canonical Name)</strong></td>
                  <td><code>www.mycompany.com &rarr; mycompany.com</code></td>
                  <td>An <strong>Alias</strong> that forwards one name to another (so both <code>www</code> and non-www work!).</td>
                </tr>
                <tr>
                  <td><strong>MX Record (Mail Exchange)</strong></td>
                  <td><code>mycompany.com &rarr; aspmx.l.google.com</code></td>
                  <td>Tells the world which mail server handles incoming business emails (like Google Workspace or Microsoft 365).</td>
                </tr>
                <tr>
                  <td><strong>TXT Record (Text)</strong></td>
                  <td><code>v=spf1 include:_spf.google.com ~all</code></td>
                  <td>Proves you own the domain and configures anti-spam verification (SPF, DKIM, DMARC) so your emails don't land in spam folders!</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- THE PROPAGATION CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! Why Does It Take '24 to 48 Hours' for a New Domain Name to Work Worldwide?! (DNS Propagation)"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                You buy a new domain name, connect it to your hosting server, and try to visit it on your phone: <em>\"Page Not Found\"</em>. You panic: <em>\"Did my payment fail?!\"</em>
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                Your domain is fine! You are simply experiencing <strong>DNS Propagation</strong>:
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                There are thousands of internet service providers (Comcast, Vodafone, Verizon) and millions of DNS cache servers around the planet. To save bandwidth, these resolvers cache answers for hours (governed by the <strong>TTL - Time to Live</strong> setting). When you update your DNS record, it takes time for those millions of cache servers across Tokyo, London, and New York to expire their old cached memory and query the new authoritative server!
              </p>
            </div>
          </div>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li><strong>Domain Registrars</strong> sell domain names; <strong>Web Hosts</strong> provide server storage for website files.</li>
            <li><strong>A Records</strong> map domains to IP addresses; <strong>CNAME Records</strong> create aliases; <strong>MX Records</strong> route corporate email.</li>
            <li><strong>DNS Propagation</strong> is the natural delay as global DNS cache servers refresh their records.</li>
          </ul>
`;

// Lesson 12.2: Web Hosting, CDNs & Cloud Infrastructure
COURSE_DATA.modules[11].lessons[1].readTime = "20 min read";
COURSE_DATA.modules[11].lessons[1].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 4 • Week 16 • Lesson 12.2</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Learn about cloud servers, Content Delivery Networks (CDNs), and modern static web hosts.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Contrast Shared Hosting, Virtual Private Servers (VPS), and Dedicated Cloud Servers.</li>
              <li>Learn how Content Delivery Networks (CDNs like Cloudflare) accelerate global website speed.</li>
              <li>Discover free modern hosting platforms for frontend code (GitHub Pages, Vercel, Netlify).</li>
              <li>Solve the mystery: Can you host a public website on your living room laptop for free?</li>
            </ul>
          </div>

          <h3>The Digital Real Estate: Web Hosting & CDNs</h3>
          <p>A website file sitting on your desktop is offline to the world. <strong>Web Hosting</strong> is the service of renting space on a computer server connected to redundant gigabit fiber-optic lines and backup generators that remains powered on 24 hours a day, 365 days a year.</p>

          <h4>The 3 Major Hosting Architectures</h4>
          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Hosting Type</th>
                  <th>How It Works</th>
                  <th>Cost Range</th>
                  <th>Best Used For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Shared Hosting</strong></td>
                  <td>Hundreds of different websites share the CPU, RAM, and drive of a single server.</td>
                  <td>$3 to $10 / month</td>
                  <td>Basic personal blogs, hobby projects, low-traffic portfolios. (Slow if a neighbor site spikes!).</td>
                </tr>
                <tr>
                  <td><strong>Virtual Private Server (VPS)</strong></td>
                  <td>A physical server is split into isolated virtual machines with dedicated CPU cores and RAM (DigitalOcean, Linode).</td>
                  <td>$5 to $40 / month</td>
                  <td>Growing businesses, custom Node.js/Python backends, custom database setups.</td>
                </tr>
                <tr>
                  <td><strong>Modern Static Edge Cloud (Vercel, Netlify, GitHub Pages)</strong></td>
                  <td>Distributes pre-built HTML/CSS/JS files across global edge CDN networks with automated Git deployments.</td>
                  <td><strong>100% Free for beginners!</strong></td>
                  <td><strong>The Gold Standard for modern websites, React apps, and portfolios!</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- THE CDN CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! What is a CDN (Content Delivery Network)? Why Does Speed Drop Across the Ocean?!"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                Even traveling at near the speed of light through fiber optics, physical distance creates latency:
              </p>
              <ul class="styled-list">
                <li>If your web server is located in New York, a visitor in London or Tokyo must send packets around the curvature of the Earth, taking <strong>200 to 300 milliseconds</strong> per round trip! Multiply that by 50 images on your page, and the website takes 6 seconds to load!</li>
              </ul>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                A <strong>Content Delivery Network (CDN like Cloudflare or Fastly)</strong> operates over <strong>300 edge data centers worldwide</strong>! It copies your photos, CSS, and HTML onto servers in Tokyo, Sydney, London, and São Paulo. When a user in Tokyo clicks your site, they download the files from a local server 3 miles away in <strong>8 milliseconds</strong>!
              </p>
            </div>
          </div>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li><strong>Shared Hosting</strong> is cheap but shared; <strong>VPS</strong> provides dedicated virtual resources.</li>
            <li>Modern platforms like <strong>Vercel, Netlify, and GitHub Pages</strong> offer free, instant global hosting for static websites.</li>
            <li><strong>CDNs (Cloudflare)</strong> cache website files globally to deliver sub-second load times regardless of visitor geography.</li>
          </ul>
`;

// Lesson 12.3: Search Engine Optimization (SEO) & How Google Ranks Sites
COURSE_DATA.modules[11].lessons[2].readTime = "22 min read";
COURSE_DATA.modules[11].lessons[2].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 4 • Week 16 • Lesson 12.3</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Spend 1-2 days learning how search engines crawl, index, and rank websites.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Understand the 3 stages of search engines: Crawling, Indexing, and Ranking.</li>
              <li>Master the Beginner's On-Page SEO Checklist: Title tags, Meta descriptions, and H1 hierarchy.</li>
              <li>Understand the vital importance of Image Alt Text for visually impaired users and Google rankings.</li>
              <li>Learn why Google uses Mobile-First Indexing and evaluates Core Web Vitals page speed.</li>
            </ul>
          </div>

          <h3>Being Discovered: Search Engine Optimization (SEO)</h3>
          <p>You can build the most beautiful, groundbreaking website in human history, but if nobody can find it on Google, your website is as invisible as a billboard in the middle of a dark desert. <strong>Search Engine Optimization (SEO)</strong> is the science and practice of structuring your website so search engine algorithms understand your content and rank you at the top of search results.</p>

          <h4>The 3-Step Google Machine</h4>
          <div class="steps-grid">
            <div class="step-card">
              <div class="step-num">1</div>
              <h5>1. Crawling (Googlebot)</h5>
              <p>Automated web spiders (crawlers) traverse the internet 24/7, following billions of links from page to page and discovering new content.</p>
              <span class="step-example">Discovers new and updated web pages.</span>
            </div>
            <div class="step-card">
              <div class="step-num">2</div>
              <h5>2. Indexing</h5>
              <p>Google downloads your HTML, analyzes every word, image, and topic, and stores it in a gigantic global database encyclopedia (The Google Index).</p>
              <span class="step-example">Cataloged into searchable database.</span>
            </div>
            <div class="step-card">
              <div class="step-num">3</div>
              <h5>3. Ranking Algorithm</h5>
              <p>When a human types a query, Google evaluates over <strong>200 signals in 0.1 seconds</strong> (relevance, backlinks, page speed, mobile responsiveness) to rank the best answers!</p>
              <span class="step-example">Delivers top results on Page 1.</span>
            </div>
          </div>

          <h4>The Essential Beginner's On-Page SEO Checklist</h4>
          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>SEO Element</th>
                  <th>Golden Rule</th>
                  <th>Why Google Cares</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Title Tag (<code>&lt;title&gt;</code>)</strong></td>
                  <td>Under <strong>60 characters</strong>; put your most important keyword first.</td>
                  <td>This is the clickable blue headline displayed on Google search results!</td>
                </tr>
                <tr>
                  <td><strong>Meta Description</strong></td>
                  <td>Between <strong>120 and 155 characters</strong> with an engaging call-to-action.</td>
                  <td>The preview blurb under your headline that convinces humans to click your link instead of your competitors!</td>
                </tr>
                <tr>
                  <td><strong>Single <code>&lt;h1&gt;</code> Tag</strong></td>
                  <td>Every page must have <strong>exactly one H1 headline</strong> matching the primary page topic.</td>
                  <td>Tells Google the definitive primary topic of that specific page.</td>
                </tr>
                <tr>
                  <td><strong>Image Alt Text (<code>alt="..."</code>)</strong></td>
                  <td>Descriptive text for every photo: <code>alt=\"Handcrafted chocolate chip cookies\"</code>.</td>
                  <td>Read aloud by screen readers for blind users, and indexed by Google Image Search!</td>
                </tr>
                <tr>
                  <td><strong>Mobile-First Design</strong></td>
                  <td>Must look and function flawlessly on smartphones.</td>
                  <td>Google uses <strong>Mobile-First Indexing</strong>: it ranks websites based on their mobile version, not the desktop version!</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- THE BLACK HAT CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! Can I Just Type 500 Popular Keywords in Hidden White Text at the Bottom of My Page to Rank #1?!"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                In the late 1990s, spammy websites used this trick: typing keywords in white font on a white background so human eyes couldn't see them, but search engines read them.
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                <strong>Do NOT do this! This is called \"Black Hat SEO\".</strong>
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                Today's search algorithms use advanced machine learning and computer vision. If Google detects hidden text, keyword stuffing, or deceptive link networks, it will issue an automatic or manual <strong>Google Penalty</strong>, completely de-indexing and banning your domain from search results permanently! True SEO is about creating genuinely helpful, fast, authoritative content that humans love.
              </p>
            </div>
          </div>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li>Search engines operate in 3 continuous loops: <strong>Crawl</strong> &rarr; <strong>Index</strong> &rarr; <strong>Rank</strong>.</li>
            <li>Craft unique, compelling <strong>Title Tags (&lt;60 chars)</strong> and <strong>Meta Descriptions (&lt;160 chars)</strong> for every page.</li>
            <li>Always provide descriptive <strong>Image Alt Text</strong> for accessibility and search ranking.</li>
            <li>Google evaluates websites on a <strong>Mobile-First</strong> basis; fast, responsive design is mandatory.</li>
          </ul>
`;

// Lesson 12.4: Web Performance, Mobile-First Design & Accessibility (a11y)
COURSE_DATA.modules[11].lessons[3].readTime = "20 min read";
COURSE_DATA.modules[11].lessons[3].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 4 • Week 16 • Lesson 12.4</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Spend 1 day learning web performance optimization, responsive design, and web accessibility.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Understand the business impact of page load speed: why a 1-second delay kills sales.</li>
              <li>Learn modern image optimization: WebP formats, responsive sizing, and lazy loading.</li>
              <li>Master Web Accessibility (a11y & WCAG standards): color contrast and keyboard navigation.</li>
              <li>Understand CSS Media Queries for fluid Mobile-First responsive layouts.</li>
            </ul>
          </div>

          <h3>Fast, Inclusive, Universal: Modern Web Standards</h3>
          <p>Building a website is not just about making it look pretty on your high-end desktop monitor. Over <strong>60% of all global web traffic originates from mobile smartphones</strong> connected to variable cellular networks, and over <strong>1 billion people worldwide live with disabilities</strong> (visual impairments, color blindness, motor limitations). A great website must be fast, mobile-friendly, and accessible to every human being.</p>

          <h4>Web Performance: The Business of Speed</h4>
          <p>Extensive studies by Amazon, Google, and Walmart show that <strong>every additional 1-second delay in page load time drops conversion rates and sales by 7%</strong>! If an e-commerce site earns $100,000 a day, a 1-second delay costs them $2.5 Million a year in lost sales!</p>

          <div class="steps-grid">
            <div class="step-card">
              <div class="step-num">1</div>
              <h5>1. Modern Image Formats (WebP / AVIF)</h5>
              <p>Convert heavy PNGs and JPEGs into modern <strong>WebP</strong> formats, cutting file sizes by 30% to 50% with zero quality loss.</p>
              <span class="step-example">Saves megabytes of mobile data.</span>
            </div>
            <div class="step-card">
              <div class="step-num">2</div>
              <h5>2. Lazy Loading (<code>loading=\"lazy\"</code>)</h5>
              <p>Add <code>loading=\"lazy\"</code> to image tags. The browser only downloads images as the user scrolls down to them, rather than loading 50 images upfront!</p>
              <span class="step-example">Instant initial page load.</span>
            </div>
            <div class="step-card">
              <div class="step-num">3</div>
              <h5>3. Minification</h5>
              <p>Minifiers strip all whitespace, comments, and empty lines from CSS and JavaScript files, reducing code size for faster transmission.</p>
              <span class="step-example">Reduces payload transfer time.</span>
            </div>
            <div class="step-card">
              <div class="step-num">4</div>
              <h5>4. Responsive CSS Media Queries</h5>
              <p>Use <code>@media (max-width: 768px)</code> to transform multi-column desktop grids into clean, single-column stacks on mobile phones.</p>
              <span class="step-example">Flawless responsive layouts across all devices.</span>
            </div>
          </div>

          <!-- THE ACCESSIBILITY CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! How Does a Blind Person Use the Internet? (Web Accessibility / a11y)"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                Visually impaired and blind users navigate the internet using specialized software called a <strong>Screen Reader</strong> (like NVDA, JAWS, or Apple VoiceOver).
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                The screen reader converts on-screen text into synthetic spoken speech or braille displays.
              </p>
              <ul class="styled-list">
                <li>If you build a website with proper semantic HTML (<code>&lt;button&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, and <code>alt=\"...\"</code> on images), the blind user can tab effortlessly through your site in seconds!</li>
                <li>If you use \"dumb\" clickable <code>&lt;div&gt;</code> elements with zero alt text, the screen reader literally announces: <em>\"Unlabeled graphic... Clickable unhandled item...\"</em> — locking millions of people out of your website!</li>
              </ul>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                Building accessible websites is not just ethical and legally required (ADA / WCAG); it also directly boosts your Google SEO ranking!
              </p>
            </div>
          </div>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li>Page speed directly drives user engagement and e-commerce conversions; optimize images with <strong>WebP</strong> and <strong>lazy loading</strong>.</li>
            <li>Design <strong>Mobile-First</strong> using CSS media queries so layouts adapt naturally to any screen size.</li>
            <li>Adhere to <strong>Web Accessibility (a11y)</strong> standards to ensure your website is welcoming to users with disabilities.</li>
          </ul>
`;

// Lesson 12.5: Graduation & The Path Forward: Choosing Your Tech Career Track
COURSE_DATA.modules[11].lessons[4].readTime = "22 min read";
COURSE_DATA.modules[11].lessons[4].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 4 • Week 16 • Lesson 12.5</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Celebrate your 4-month achievement and review the 5 major technology career tracks!</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Review the complete 4-month learning roadmap: from physical transistors to global web architecture.</li>
              <li>Explore the 5 major technology career pathways: IT Support, Cybersecurity, Web Development, Cloud DevOps, and Data/AI.</li>
              <li>Identify top industry certifications to jumpstart your career without a 4-year degree.</li>
              <li>Prepare for the 25-Question Official Masterclass Certification Exam!</li>
            </ul>
          </div>

          <h3>Congratulations! You Have Mastered the Fundamentals</h3>
          <p>Take a moment to look back at where you started 16 weeks ago in Module 1. You began with a humble bedroom light switch, learning how electricity turns into binary 1s and 0s. Today, you understand processor cache architectures, operating system kernels, packet routing across oceans, military cryptography, DNS records, full-stack web architecture, and how search engines index the world!</p>
          <p><strong>You are no longer an intimidated, passive consumer of technology. You understand how the digital world actually works!</strong></p>

          <h4>The 5 Major Technology Career Pathways</h4>
          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Career Track</th>
                  <th>What You Do Every Day</th>
                  <th>Key Skills & Tools</th>
                  <th>Top Entry Certifications</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>IT Support & Systems Administration</strong></td>
                  <td>Managing enterprise fleets of laptops, Windows/Mac deployment, configuring networks, and solving employee technical issues.</td>
                  <td>Active Directory, Windows Server, PowerShell, Hardware diagnostics, ticketing systems.</td>
                  <td><strong>CompTIA A+</strong>, <strong>CompTIA Network+</strong></td>
                </tr>
                <tr>
                  <td><strong>Cybersecurity & Defense</strong></td>
                  <td>Hunting network intruders, setting up firewalls, auditing vulnerabilities, defending companies against ransomware.</td>
                  <td>Wireshark, Linux, SIEM tools, penetration testing, security policies.</td>
                  <td><strong>CompTIA Security+</strong>, <strong>Certified Ethical Hacker (CEH)</strong></td>
                </tr>
                <tr>
                  <td><strong>Frontend & Web Development</strong></td>
                  <td>Building beautiful, responsive web applications, e-commerce stores, and software interfaces.</td>
                  <td>HTML5, CSS3, JavaScript, React, Next.js, Git, UI/UX design.</td>
                  <td>Portfolio of live web apps on GitHub & Vercel</td>
                </tr>
                <tr>
                  <td><strong>Cloud & DevOps Engineering</strong></td>
                  <td>Automating cloud infrastructure, deploying scalable server clusters, managing containerized apps.</td>
                  <td>Linux, Docker, Kubernetes, AWS, Azure, CI/CD pipelines.</td>
                  <td><strong>AWS Certified Cloud Practitioner</strong>, <strong>Linux LPIC-1</strong></td>
                </tr>
                <tr>
                  <td><strong>Data Analytics & AI</strong></td>
                  <td>Analyzing business trends, building predictive machine learning models, querying large databases.</td>
                  <td>Python, SQL, Pandas, Excel modeling, Tableau, Power BI.</td>
                  <td><strong>Google Data Analytics Certificate</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- THE DEGREE CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! Do I Need an Expensive 4-Year University Computer Science Degree to Work in Tech?!"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                The tech industry is one of the most meritocratic, skills-based industries in the global economy:
              </p>
              <ul class="styled-list">
                <li>Major tech giants (Google, Apple, Microsoft, IBM) have publicly dropped college degree requirements for software and IT roles.</li>
                <li>Hiring managers care about <strong>what you can actually build and solve</strong>: a live portfolio of working websites on GitHub, recognized industry certifications (like CompTIA or AWS), and a disciplined problem-solving mindset matter far more than a piece of paper from a university!</li>
              </ul>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                The knowledge you built in this masterclass gives you the rock-solid foundation to pursue any of these tracks with total confidence!
              </p>
            </div>
          </div>

          <h4>Your Final Milestone: The Official Certification Exam</h4>
          <p>You are now ready to prove your mastery! Click the <strong>🎓 Take Official Certification Exam</strong> button below or in the sidebar. The exam features <strong>25 comprehensive questions</strong> covering all 12 modules. Score 80% or higher to unlock your official, personalized, printable <strong>Certificate of Mastery</strong>!</p>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li>You have completed all 12 modules covering hardware, operating systems, networking, security, and web technologies.</li>
            <li>Tech career tracks reward demonstrated skills, portfolio projects, and practical problem-solving.</li>
            <li>Complete the final certification exam to earn your personalized diploma certificate!</li>
          </ul>
`;

console.log('Module 12 enriched!');

const updatedContent = 'const COURSE_DATA = ' + JSON.stringify(COURSE_DATA, null, 2) + ';\n';
fs.writeFileSync(courseDataPath, updatedContent, 'utf8');
console.log('Updated courseData.js successfully with Phase 4 enrichments!');
