// scripts/enrich-phase2.js
// Enriches Phase 2 (Month 2: Modules 4, 5, 6 - Lessons 4.1 to 6.4)
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

console.log('Enriching Phase 2: Operating Systems, File Systems & Productivity...');

// =============================================================================
// MODULE 4: Operating Systems: Windows, macOS & Linux
// =============================================================================

// Lesson 4.1: What an Operating System Actually Does Under the Hood
COURSE_DATA.modules[3].lessons[0].readTime = "22 min read";
COURSE_DATA.modules[3].lessons[0].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 2 • Week 5 • Lesson 4.1</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Spend 1-2 days learning how the operating system kernel coordinates hardware and software.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Define the Operating System (OS) and explain why bare hardware is useless without one.</li>
              <li>Differentiate between Kernel Space (Ring 0) and User Space (Ring 3) memory protection.</li>
              <li>Understand how Device Drivers translate generic software requests into hardware voltages.</li>
              <li>Explain Preemptive Multitasking: how a single CPU core juggles hundreds of open applications.</li>
              <li>Solve the mystery: What does a Blue Screen of Death (BSOD) or Mac Kernel Panic actually mean?</li>
            </ul>
          </div>

          <h3>The Invisible Maestro: What is an Operating System?</h3>
          <p>Imagine walking into a high-end luxury car that has a powerful V8 engine, four wheels, a steering column, and brakes — but no dashboard, no pedals, no steering wheel, and no computer wiring. To move the car, you would have to physically squirt gasoline into the engine cylinders with a syringe and manually connect electrical battery wires to spark plugs!</p>
          <p>That is what a computer would be like without an <strong>Operating System (OS)</strong>. Raw computer hardware (the CPU, RAM, SSD, and GPU) is just cold silicon and copper. The Operating System is the master software conductor that manages all physical hardware and provides a safe, beautiful environment for applications (like Chrome, Spotify, or Word) to run.</p>

          <h4>The Core Responsibilities of Every Operating System</h4>
          <p>Whether you are using Microsoft Windows 11, Apple macOS Sonoma, Google Android, iOS on an iPhone, or Ubuntu Linux, every modern OS performs four critical duties:</p>

          <div class="steps-grid">
            <div class="step-card">
              <div class="step-num">1</div>
              <h5>1. Hardware Abstraction (Device Drivers)</h5>
              <p>When Spotify wants to play music, it doesn't need to know whether your speaker is made by Sony, Bose, or Apple. The OS provides a universal sound interface, and a tiny program called a <strong>Device Driver</strong> translates the sound into exact electrical voltages for that specific speaker.</p>
              <span class="step-example">Universal translation between software and hardware.</span>
            </div>
            <div class="step-card">
              <div class="step-num">2</div>
              <h5>2. Process Scheduling (Multitasking)</h5>
              <p>You might have 80 browser tabs, Discord, Steam, and an antivirus scan open simultaneously. The OS scheduler assigns tiny microsecond slices of CPU time to each app, switching between them hundreds of times a second so everything feels smooth!</p>
              <span class="step-example">Preemptive multitasking: No single app can hog the CPU.</span>
            </div>
            <div class="step-card">
              <div class="step-num">3</div>
              <h5>3. Memory Management & Protection</h5>
              <p>The OS allocates isolated memory sandboxes in RAM for each running application. Tab 2 in Chrome is forbidden from reading passwords typed in Tab 1, and buggy apps are prevented from crashing the rest of your system.</p>
              <span class="step-example">Virtual memory sandboxing & safety shields.</span>
            </div>
            <div class="step-card">
              <div class="step-num">4</div>
              <h5>4. <code>F</code>ile System & Security Permissions</h5>
              <p>Controls who is allowed to read, write, modify, or delete files on your SSD. Prevents random downloaded files from modifying your core system files.</p>
              <span class="step-example">User account control (UAC) & security permissions.</span>
            </div>
          </div>

          <h4>Kernel Space (Ring 0) vs. User Space (Ring 3)</h4>
          <p>Modern operating systems use hardware-enforced protection rings built directly into CPU processors to prevent buggy programs from destroying your machine:</p>

          <div class="comparison-grid">
            <div class="compare-card bad" style="background:var(--bg-surface-alt); border-color:var(--border-medium);">
              <h5 style="color:var(--primary);">User Space (Ring 3) - The Sandbox</h5>
              <p>Where all your everyday applications live: Google Chrome, Discord, Microsoft Word, video games.</p>
              <ul class="styled-list">
                <li><strong>Safe Environment:</strong> Apps running in User Space have zero direct access to physical hardware chips or memory cables.</li>
                <li><strong>What Happens When an App Crashes?</strong> If a video game or browser tab has a bug and crashes, Windows simply pops up <em>\"Program has stopped responding\"</em> and closes it. Your other apps, documents, and the operating system remain 100% fine!</li>
              </ul>
            </div>
            <div class="compare-card good">
              <h5>Kernel Space (Ring 0) - The Inner Sanctum</h5>
              <p>The very heart and core of the operating system (the <strong>Kernel</strong>), alongside low-level device drivers.</p>
              <ul class="styled-list">
                <li><strong>Total Power:</strong> Ring 0 has unrestricted, god-mode access to every transistor, memory byte, and voltage line in the computer.</li>
                <li><strong>What Happens When Kernel Code Crashes?</strong> Because Ring 0 has total access, there is no safety net above it! If a faulty printer driver or graphics driver crashes inside Ring 0, the entire computer halts instantly to protect your hardware from corruption!</li>
              </ul>
            </div>
          </div>

          <!-- THE SIGNATURE CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! What Does a 'Blue Screen of Death' (BSOD) or Mac 'Kernel Panic' Actually Mean? Did My Computer Die?!"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                Everyone fears the dreaded blue screen with the sad face: <code>:( Your PC ran into a problem and needs to restart</code>.
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                Your computer did not die, and your hardware is almost certainly not broken!
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                <strong>A Blue Screen is actually a protective emergency brake!</strong>
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                Imagine you are driving a car and you suddenly realize the brake line has snapped. You immediately pull the emergency handbrake to stop the car before crashing. That is what a BSOD is! When a buggy device driver (such as a faulty graphics card update) or failing hardware tries to write bad data into protected kernel memory, the OS says: <em>\"If I keep running, I might overwrite the user's permanent family photos on the SSD with corrupted garbage! I must halt everything immediately to preserve data integrity!\"</em><br>
                Over 70% of all Blue Screens are caused by third-party graphics or peripheral device drivers, not Windows itself!
              </p>
            </div>
          </div>

          <div class="callout tip">
            <span class="callout-icon">🎯</span>
            <div>
              <strong>Hands-On Process Inspection Activity:</strong><br>
              See how many programs your operating system is juggling right now!
              <ol style="margin-top:6px; padding-left:18px;">
                <li>Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Esc</kbd> to launch <strong>Windows Task Manager</strong> (or open <em>Activity Monitor</em> on macOS).</li>
                <li>Look at the very bottom left status bar: notice the total number of <strong>Processes</strong> (typically 150 to 250!) and <strong>Threads</strong> (typically 2,000 to 4,000!).</li>
                <li>Even when you aren't touching the mouse, your OS is silently running background threads to manage network packets, audio buffers, security scans, and clock timers!</li>
              </ol>
            </div>
          </div>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li>The <strong>Operating System</strong> is the master software conductor managing hardware, memory, files, and running apps.</li>
            <li><strong>Device Drivers</strong> translate software commands into hardware-specific physical voltages.</li>
            <li><strong>User Space (Ring 3)</strong> sandboxes normal applications; if an app crashes, only that app dies.</li>
            <li><strong>Kernel Space (Ring 0)</strong> has absolute system power; errors here trigger a safety halt (Blue Screen / Kernel Panic).</li>
          </ul>
`;

// Lesson 4.2: The Big Three: Windows, macOS & Linux Compared
COURSE_DATA.modules[3].lessons[1].readTime = "22 min read";
COURSE_DATA.modules[3].lessons[1].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 2 • Week 5 • Lesson 4.2</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Spend 1-2 days comparing the architecture, ecosystem, and philosophies of Windows, macOS, and Linux.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Contrast the design philosophies, strengths, and weaknesses of Windows, macOS, and Linux.</li>
              <li>Understand the Open Source revolution and how Linux powers the global internet and Android.</li>
              <li>Learn the architectural difference between Windows drive letters (<code>C:\\</code>) and UNIX root paths (<code>/</code>).</li>
              <li>Solve the mystery: If Linux is free and runs the internet, why doesn't everyone use it on their desktop?</li>
            </ul>
          </div>

          <h3>The Great Three Kingdoms of Computing</h3>
          <p>Whenever you purchase or build a computer, you must decide which operating system will govern your digital life. Today, three major operating system families dominate modern civilization: <strong>Microsoft Windows</strong>, <strong>Apple macOS</strong>, and <strong>Linux</strong>. None is universally \"better\" than the others — each was engineered with radically different philosophical goals for different human needs.</p>

          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Operating System</th>
                  <th>Core Philosophy</th>
                  <th>Biggest Strengths</th>
                  <th>Biggest Weaknesses</th>
                  <th>Market Share & Dominance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Microsoft Windows</strong></td>
                  <td><strong>Universal Compatibility & Open Hardware:</strong> Runs on millions of different laptops, desktops, and custom PC parts from hundreds of brands.</td>
                  <td>The undisputed king of PC gaming (DirectX), corporate enterprise software, backward compatibility (can run programs from 1998!).</td>
                  <td>Can suffer from bloatware, pre-installed ads, system telemetry, and inconsistent settings menus across updates.</td>
                  <td>~70% of all desktop and laptop computers worldwide.</td>
                </tr>
                <tr>
                  <td><strong>Apple macOS</strong></td>
                  <td><strong>Curated Walled Garden & Hardware-Software Harmony:</strong> Apple designs both the physical laptop/chip (Apple Silicon M-Series) and the operating system.</td>
                  <td>Extraordinary battery life (18+ hours), whisper-quiet laptops, gorgeous typography, flawless iPhone/iPad integration (AirDrop, iMessage, iCloud).</td>
                  <td>Locked to expensive Apple hardware, weak for AAA video gaming, limited hardware upgradeability (RAM/SSD soldered in).</td>
                  <td>~16% of desktops/laptops; massive dominance among designers, audio producers, and software developers.</td>
                </tr>
                <tr>
                  <td><strong>Linux (Ubuntu, <code>F</code>edora, Arch)</strong></td>
                  <td><strong><code>F</code>reedom, Open Source & Absolute User Control:</strong> <code>F</code>ree to download, zero telemetry/spying, 100% customizable from source code to desktop icons.</td>
                  <td>Zero license fees, bulletproof rock-solid stability, negligible resource usage, complete privacy. Powers 100% of top 500 supercomputers!</td>
                  <td>Steeper learning curve, cannot natively run Microsoft Office or Adobe Photoshop, requires terminal commands for advanced tweaks.</td>
                  <td>~4% of desktops, BUT powers <strong>95%+ of all cloud web servers</strong> and forms the core of <strong>3+ Billion Android smartphones</strong>!</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- THE SIGNATURE CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! If Linux is 100% <code>F</code>ree, Has Zero Viruses, and Runs Google and All Android Phones, Why Doesn't Everyone Use Linux on Their Laptops?!"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                You might wonder: <em>\"If Linux is so amazing, why do Dell and HP charge people money for Windows licenses instead of just installing free Linux on every laptop?\"</em>
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                The answer comes down to <strong>Commercial Software Compatibility and Peripheral Hardware Drivers</strong>:
              </p>
              <ul class="styled-list">
                <li><strong>The Software Monopoly:</strong> The vast majority of schools, businesses, and universities depend on proprietary software like <em>Microsoft Word, Excel, and Outlook</em> or <em>Adobe Premiere, Photoshop, and Illustrator</em>. Adobe and Microsoft do not make Linux versions! While free alternatives exist (like LibreOffice or GIMP), companies need exact 100% file compatibility.</li>
                <li><strong>Hardware Vendor Drivers:</strong> Thousands of peripheral manufacturers (like specialized Wi-<code>F</code>i dongles, biometric fingerprint scanners, audio mixing boards, or RGB keyboards) only write official drivers for Windows and Mac. In Linux, passionate volunteer open-source programmers often have to reverse-engineer drivers by hand!</li>
              </ul>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                However, Linux is experiencing a massive desktop renaissance thanks to Valve's <strong>Steam Deck</strong> handheld gaming console (which runs SteamOS Linux using the Proton translation layer to play Windows games flawlessly!).
              </p>
            </div>
          </div>

          <h4><code>F</code>ile Path Philosophy: Windows Drive Letters vs. UNIX Unified Root</h4>
          <p>One of the most noticeable differences between Windows and macOS/Linux is how they organize storage:</p>

          <div class="comparison-grid">
            <div class="compare-card bad" style="background:var(--bg-surface-alt); border-color:var(--border-medium);">
              <h5 style="color:var(--primary);">Windows: Separate Drive Letters (MS-DOS Legacy)</h5>
              <p>Every physical storage drive gets its own capital letter and backslash:</p>
              <code>C:\Users\Alex\Documents\Resume.pdf</code>
              <p style="margin-top:8px; font-size:0.88rem;">If you plug in a USB flash drive, it becomes drive <code>D:\</code>. Plug in another, it becomes <code>E:\</code>. Each drive is its own isolated tree.</p>
            </div>
            <div class="compare-card good">
              <h5>macOS & Linux: Single Unified Root Tree (UNIX Standard)</h5>
              <p>There are no drive letters. Everything begins at a single forward-slash root (<code>/</code>):</p>
              <code>/Users/alex/Documents/Resume.pdf</code>
              <p style="margin-top:8px; font-size:0.88rem;">When you plug in a USB flash drive, it is simply \"mounted\" as a regular folder inside the tree (e.g. <code>/Volumes/My<code>F</code>lashDrive</code> on Mac or <code>/media/usb</code> on Linux)!</p>
            </div>
          </div>

          <div class="callout tip">
            <span class="callout-icon">🎯</span>
            <div>
              <strong>Hands-On OS Discovery Activity:</strong><br>
              <code>F</code>ind out your exact operating system version and build number:
              <ol style="margin-top:6px; padding-left:18px;">
                <li><strong>Windows:</strong> Press <kbd>Win</kbd> + <kbd>R</kbd>, type <code>winver</code>, and press <kbd>Enter</kbd>. A window will display your exact Windows edition (Home vs Pro) and build number!</li>
                <li><strong>macOS:</strong> Click the <strong>Apple Logo ()</strong> in the top left corner &rarr; <strong>About This Mac</strong>.</li>
              </ol>
            </div>
          </div>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li><strong>Windows</strong> dominates PC gaming, enterprise software, and open hardware compatibility across thousands of PC makers.</li>
            <li><strong>macOS</strong> offers unmatched hardware-software battery efficiency and a tight ecosystem for creative pros.</li>
            <li><strong>Linux</strong> is the open-source powerhouse powering 95%+ of the global internet, cloud servers, supercomputers, and Android.</li>
            <li>Windows organizes files with drive letters (<code>C:\</code>); macOS and Linux use a unified UNIX tree starting from root (<code>/</code>).</li>
          </ul>
`;

// Lesson 4.3: Windows 10 & 11 Navigation Mastery & Multitasking
COURSE_DATA.modules[3].lessons[2].readTime = "20 min read";
COURSE_DATA.modules[3].lessons[2].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 2 • Week 6 • Lesson 4.3</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Take 1 day to practice window snapping, virtual desktops, and power-user shortcut menus.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Master Windows Snap Layouts to organize 2, 3, or 4 application windows effortlessly.</li>
              <li>Create and switch between Virtual Desktops to separate School, Work, and Gaming.</li>
              <li>Use the hidden Windows Power-User Quick Link menu (<kbd>Win</kbd> + <kbd>X</kbd>).</li>
              <li>Understand the difference between Windows Settings and the legacy Control Panel.</li>
            </ul>
          </div>

          <h3>Multitasking Mastery: Stop Dragging Windows Manually</h3>
          <p>Watch an average computer user work, and you will see them waste dozens of hours every year manually dragging windows by their borders, resizing window edges with a microscopic cursor arrow, and constantly minimizing and maximizing windows just to compare two documents. <strong>Tech professionals never do this!</strong> Modern operating systems have built-in window snapping and virtual desktops that turn multitasking into an effortless superpower.</p>

          <h4>1. Window Snapping Mastery</h4>
          <p>Instead of manually resizing windows, use your keyboard and mouse gestures:</p>

          <div class="steps-grid">
            <div class="step-card">
              <div class="step-num">1</div>
              <h5>Split Screen 50/50 (<kbd>Win</kbd> + <kbd>&larr;</kbd> / <kbd>&rarr;</kbd>)</h5>
              <p>Click on any window and press <kbd>Win</kbd> + <kbd>Left Arrow</kbd>. It instantly snaps to the exact left half of your screen. Windows shows open apps on the right: click one to fill the other 50%!</p>
              <span class="step-example">Perfect for taking notes on the left while watching a lecture on the right.</span>
            </div>
            <div class="step-card">
              <div class="step-num">2</div>
              <h5>Quarter-Screen Corners (<kbd>Win</kbd> + Arrows)</h5>
              <p>Press <kbd>Win</kbd> + <kbd>Left</kbd>, then immediately press <kbd>Win</kbd> + <kbd>Up</kbd>. The window snaps into the top-left corner (25% of the screen), letting you view 4 documents simultaneously!</p>
              <span class="step-example">4-window dashboard on high-res monitors.</span>
            </div>
            <div class="step-card">
              <div class="step-num">3</div>
              <h5>Windows 11 Snap Layouts (<kbd>Win</kbd> + <kbd>Z</kbd>)</h5>
              <p>Hover your mouse pointer over the <strong>Maximize button</strong> (the square next to the X) at the top right of any window, or press <kbd>Win</kbd> + <kbd>Z</kbd>. A popup menu shows 4 different grid layouts!</p>
              <span class="step-example">Click any zone to snap your window instantly.</span>
            </div>
            <div class="step-card">
              <div class="step-num">4</div>
              <h5>Minimize Everything (<kbd>Win</kbd> + <kbd>D</kbd>)</h5>
              <p>Your screen is cluttered with 15 open apps and you need to see your desktop files? Press <kbd>Win</kbd> + <kbd>D</kbd> to minimize everything instantly. Press it again to bring them all back!</p>
              <span class="step-example">The universal "Show Desktop" toggle.</span>
            </div>
          </div>

          <!-- THE SIGNATURE CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! How Do Virtual Desktops Work? Why Would I Need More Than One Desktop on a Single Monitor?!"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                Imagine you are in the middle of researching a major term paper. You have 20 browser tabs open, 3 PD<code>F</code> research papers, and Microsoft Word. Suddenly, your boss sends an urgent work email requiring a spreadsheet, or you want to play a video game during lunch.
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                If you open the new apps on the same desktop, your screen becomes a chaotic mess, and you risk accidentally closing your term paper!
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                <strong>Virtual Desktops give you multiple clean workspaces on one single screen:</strong>
              </p>
              <ul class="styled-list">
                <li><strong>Desktop 1:</strong> Your term paper research, Word doc, and academic PD<code>F</code>s.</li>
                <li><strong>Desktop 2:</strong> Your work email, Zoom, and company spreadsheets.</li>
                <li><strong>Desktop 3:</strong> Spotify, Discord, and Steam games.</li>
              </ul>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                <strong>The Superpower Shortcut:</strong> Press <kbd>Ctrl</kbd> + <kbd>Win</kbd> + <kbd>&larr;</kbd> or <kbd>&rarr;</kbd> to slide seamlessly between your worlds in 0.2 seconds!
              </p>
            </div>
          </div>

          <h4>The Secret Power-User Menu: <kbd>Win</kbd> + <kbd>X</kbd></h4>
          <p>Don't waste time clicking through multiple menus to find system diagnostic utilities. Right-click the Windows Start Button, or simply press <strong><kbd>Win</kbd> + <kbd>X</kbd></strong>:</p>
          <ul class="styled-list">
            <li><strong>Device Manager:</strong> Check if hardware drivers have error icons.</li>
            <li><strong>Disk Management:</strong> View and format storage partitions.</li>
            <li><strong>Terminal / PowerShell:</strong> Instant command-line access.</li>
            <li><strong>Installed Apps:</strong> Clean uninstaller menu.</li>
            <li><strong>Task Manager:</strong> Instant process monitor.</li>
          </ul>

          <div class="callout tip">
            <span class="callout-icon">🎯</span>
            <div>
              <strong>Hands-On Multitasking Exercise:</strong><br>
              Create your very first Virtual Desktop right now!
              <ol style="margin-top:6px; padding-left:18px;">
                <li>Press <kbd>Win</kbd> + <kbd>Ctrl</kbd> + <kbd>D</kbd>. Notice that Windows instantly slides to a fresh, brand-new blank desktop!</li>
                <li>Open a browser tab or Notepad on this new desktop.</li>
                <li>Press <kbd>Ctrl</kbd> + <kbd>Win</kbd> + <kbd>Left Arrow</kbd> to slide back to your original desktop. Press <kbd>Ctrl</kbd> + <kbd>Win</kbd> + <kbd>Right Arrow</kbd> to slide back.</li>
                <li>To close the extra desktop when finished, press <kbd>Ctrl</kbd> + <kbd>Win</kbd> + <kbd><code>F</code>4</kbd>!</li>
              </ol>
            </div>
          </div>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li>Use <kbd>Win</kbd> + <kbd>Left/Right Arrow</kbd> to instantly snap windows 50/50 without manual dragging.</li>
            <li><strong>Virtual Desktops</strong> keep your school, work, and personal projects separated on a single monitor.</li>
            <li>Press <kbd>Win</kbd> + <kbd>X</kbd> for instant access to Windows administrative tools (Disk Management, Device Manager, Terminal).</li>
          </ul>
`;

// Lesson 4.4: Software Management: Installing, Updating & Uninstalling Cleanly
COURSE_DATA.modules[3].lessons[3].readTime = "20 min read";
COURSE_DATA.modules[3].lessons[3].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 2 • Week 6 • Lesson 4.4</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Take 1 day to audit your installed programs, disable startup bloatware, and learn clean uninstallation.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Understand how software installs onto your operating system (files, registry, services).</li>
              <li>Learn to spot sneaky bundled bloatware and PUPs (Potentially Unwanted Programs).</li>
              <li>Explain why dragging an app to the Recycle Bin does NOT uninstall it properly.</li>
              <li>Audit and disable hidden Startup Programs to double your computer's boot speed.</li>
            </ul>
          </div>

          <h3>Software Hygiene: Keeping Your Computer Lean and <code>F</code>ast</h3>
          <p>When you take a brand-new computer out of its box, it boots in 8 seconds and feels lightning fast. But two years later, that same computer takes 3 minutes to start up, constantly shows popup notifications, and fans spin loudly while idling. What happened? <strong>Software bloat and improper installation hygiene!</strong></p>

          <h4>What Actually Happens When You Install a Program?</h4>
          <p>Installing software is much more complex than copying a file onto your desktop:</p>

          <div class="steps-grid">
            <div class="step-card">
              <div class="step-num">1</div>
              <h5>1. Unpacking Executables & Libraries</h5>
              <p>The installer creates a dedicated folder inside <code>C:\\Program <code>F</code>iles</code> and unzips hundreds of executable binaries (<code>.exe</code>) and shared code libraries (<code>.dll</code>).</p>
              <span class="step-example">Core program files installed.</span>
            </div>
            <div class="step-card">
              <div class="step-num">2</div>
              <h5>2. Windows Registry Entries</h5>
              <p>The installer registers configuration settings, file associations (e.g. telling Windows to open <code>.psd</code> with Photoshop), and license keys in the Windows Registry database.</p>
              <span class="step-example">Registry keys created.</span>
            </div>
            <div class="step-card">
              <div class="step-num">3</div>
              <h5>3. Background Services & Drivers</h5>
              <p>Many programs install background services that run silently 24/7 (such as anti-cheat engines, auto-updaters, or cloud syncing daemons).</p>
              <span class="step-example">Background daemons registered.</span>
            </div>
            <div class="step-card">
              <div class="step-num">4</div>
              <h5>4. Startup Hooks</h5>
              <p>The app injects a hook telling Windows: <em>\"Every time the computer boots up, launch me automatically in the background!\"</em></p>
              <span class="step-example">Added to startup sequence.</span>
            </div>
          </div>

          <!-- THE SIGNATURE CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! If I Delete a Program's Desktop Shortcut or Drag It into the Recycle Bin, Does That Uninstall It?"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                <strong>NO! Absolutely not!</strong> This is one of the most widespread beginner mistakes in computing.
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                The icon sitting on your desktop is just a <strong>Shortcut link</strong> (a tiny 1-Kilobyte file with a little curved arrow on it).
              </p>
              <ul class="styled-list">
                <li>Think of a desktop shortcut like a business card with a restaurant's phone number on it.</li>
                <li>Tearing up the business card and throwing it in your kitchen trash can <strong>does not demolish the restaurant building!</strong></li>
              </ul>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                If you only delete the desktop icon, the actual 20 Gigabytes of program files, the background startup services, and the registry entries remain completely alive inside your computer! To properly remove software, you must run the official uninstaller: go to <strong>Settings &rarr; Installed Apps &rarr; Uninstall</strong>.
              </p>
            </div>
          </div>

          <h4>The Startup Programs Audit: Double Your PC Speed for <code>F</code>ree</h4>
          <p>The #1 reason computers become slow after a year of use is that every software you install (Spotify, Discord, Steam, Adobe Creative Cloud, Skype, printer utilities) greedily adds itself to your computer's <strong>Startup List</strong>. When you turn on your PC, Windows is forced to launch 25 apps simultaneously, pegging your CPU and RAM at 100%!</p>

          <div class="callout tip">
            <span class="callout-icon">🎯</span>
            <div>
              <strong>Hands-On Startup Speed Optimization:</strong><br>
              Clean your startup list right now in 60 seconds:
              <ol style="margin-top:6px; padding-left:18px;">
                <li>Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Esc</kbd> to open <strong>Task Manager</strong>.</li>
                <li>Click the <strong>Startup apps</strong> icon on the left (it looks like a small tachometer speedometer).</li>
                <li>Sort by <strong>Startup impact</strong> (High, Medium, Low).</li>
                <li>Look through the list. Do you really need Spotify, Steam, Discord, or Cortana launching automatically every single time your computer boots? Right-click any app you don't need immediately on boot and select <strong>Disable</strong>! (Don't worry — this doesn't uninstall the app; you can still open it whenever you want by clicking its icon).</li>
              </ol>
            </div>
          </div>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li>Deleting a desktop shortcut only deletes a pointer; always use <strong>Settings &rarr; Installed Apps</strong> to properly uninstall software.</li>
            <li>Beware of bundled software installers with pre-checked checkmarks trying to install unwanted adware toolbars.</li>
            <li>Disabling non-essential <strong>Startup Apps</strong> in Task Manager is the single most effective way to restore fast boot times.</li>
          </ul>
`;

console.log('Module 4 enriched!');

// =============================================================================
// MODULE 5: <code>F</code>ile Systems, Directories & <code>F</code>ormats
// =============================================================================

// Lesson 5.1: The Directory Tree: Drives, Paths & <code>F</code>olders
COURSE_DATA.modules[4].lessons[0].readTime = "20 min read";
COURSE_DATA.modules[4].lessons[0].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 2 • Week 7 • Lesson 5.1</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Spend 1-2 days mastering directory paths, folder structures, and file navigation.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Understand the Directory Tree: Root, Parent folders, Child subfolders, and Leaves.</li>
              <li>Differentiate between Absolute <code>F</code>ile Paths and Relative <code>F</code>ile Paths.</li>
              <li>Master the standard Windows user directories (Documents, Downloads, Desktop, AppData).</li>
              <li>Solve the mystery: What actually happens when you empty the Recycle Bin? Can files be recovered?</li>
            </ul>
          </div>

          <h3>The Great Digital Library: <code>F</code>ile Systems Explained</h3>
          <p>A modern 1 Terabyte SSD contains hundreds of thousands of individual files. If all those files were dumped into one giant, flat pile, finding a specific document would be as impossible as finding a single needle in an ocean. The <strong><code>F</code>ile System</strong> is the cataloging architecture that organizes your storage into a structured hierarchy of folders and paths.</p>

          <h4>The Inverted Tree Structure: Root, Trunks, and Leaves</h4>
          <p>In computer science, folder structures are modeled as an upside-down tree:</p>

          <div class="steps-grid">
            <div class="step-card">
              <div class="step-num">1</div>
              <h5>1. The Root (Drive Letter)</h5>
              <p>The very top of the tree. In Windows, this is your primary drive: <code>C:\\</code> (or <code>/</code> on Mac/Linux).</p>
              <span class="step-example">Root directory: C:\\</span>
            </div>
            <div class="step-card">
              <div class="step-num">2</div>
              <h5>2. Parent Branches (Directories)</h5>
              <p>Major trunks branching off the root: <code>C:\\Users</code>, <code>C:\\Program <code>F</code>iles</code>, <code>C:\\Windows</code>.</p>
              <span class="step-example">Top-level system folders.</span>
            </div>
            <div class="step-card">
              <div class="step-num">3</div>
              <h5>3. Child Subfolders</h5>
              <p><code>F</code>olders inside parent folders: <code>C:\\Users\\Alex\\Documents\\Tax2026\\</code>.</p>
              <span class="step-example">Nested organizational hierarchy.</span>
            </div>
            <div class="step-card">
              <div class="step-num">4</div>
              <h5>4. The Leaves (<code>F</code>iles)</h5>
              <p>Individual files that contain actual data (like <code>receipt.pdf</code>). <code>F</code>iles cannot contain other files.</p>
              <span class="step-example">The endpoints of the tree.</span>
            </div>
          </div>

          <h4>Absolute vs. Relative <code>F</code>ile Paths</h4>
          <div class="comparison-grid">
            <div class="compare-card good">
              <h5>Absolute Path (The <code>F</code>ull GPS Address)</h5>
              <p>Specifies the complete, unambiguous location of a file starting from the root drive letter:</p>
              <code>C:\Users\Alex\Documents\Projects\Web\index.html</code>
              <p style="margin-top:8px; font-size:0.88rem;">No matter where you are currently located on the computer, an absolute path always points to the exact same file.</p>
            </div>
            <div class="compare-card bad" style="background:var(--bg-surface-alt); border-color:var(--border-medium);">
              <h5 style="color:var(--primary);">Relative Path (Directions from Where You Stand)</h5>
              <p>Specifies a location relative to your current working folder:</p>
              <code>./images/logo.png</code> &nbsp;or&nbsp; <code>../parent_file.txt</code>
              <ul class="styled-list" style="margin-top:8px;">
                <li><code>.</code> (Single Dot) = \"Look inside my current folder\"</li>
                <li><code>..</code> (Double Dots) = \"Go up one level to the parent folder\"</li>
              </ul>
              <p style="font-size:0.88rem;">Essential for web development so links work when you move your website to a web server!</p>
            </div>
          </div>

          <!-- THE SIGNATURE CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! When I Delete a <code>F</code>ile and Empty the Recycle Bin, Is It Gone <code>F</code>orever? Can Hackers or the <code>F</code>BI Still Recover It?!"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                The answer will shock most beginners: <strong>When you empty the Recycle Bin, the file is NOT erased from your drive!</strong>
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                Think of your drive like a 1,000-page book with an <strong>Index Table of Contents</strong> at the front:
              </p>
              <ul class="styled-list">
                <li>When you click \"Empty Recycle Bin\", Windows does not spend 5 minutes magnetically erasing millions of 1s and 0s across the drive. That would be slow and wear out the drive.</li>
                <li>Instead, Windows simply takes an eraser and <strong>scratches out the line in the Index Table of Contents</strong>! It marks those memory blocks as <em>\"<code>F</code>ree space available for new files\"</em>.</li>
                <li>The actual data remains physically sitting on the flash silicon untouched until months later when you save new videos that overwrite those specific blocks!</li>
              </ul>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                Anyone with a free data-recovery app (like Recuva) can recover files you deleted minutes ago. If you are selling or giving away an old computer, you must perform a <strong>Cryptographic Secure Wipe</strong> to actually overwrite every sector with zeroes!
              </p>
            </div>
          </div>

          <div class="callout tip">
            <span class="callout-icon">🎯</span>
            <div>
              <strong>Hands-On Path Copying Ninja Trick:</strong><br>
              Copy any file's exact absolute path in 1 click:
              <ol style="margin-top:6px; padding-left:18px;">
                <li>Open <code>F</code>ile Explorer and navigate to any file.</li>
                <li>Hold down the <kbd>Shift</kbd> key on your keyboard and <strong>Right-Click</strong> the file.</li>
                <li>Notice a secret power-user option: <strong>Copy as path</strong>! Click it.</li>
                <li>Paste it into Notepad: you will have the complete, perfectly formatted absolute path with quotes!</li>
              </ol>
            </div>
          </div>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li><code>F</code>ile systems use an inverted tree: <strong>Root</strong> (<code>C:\</code>) &rarr; <strong>Parent folders</strong> &rarr; <strong>Child subfolders</strong> &rarr; <strong><code>F</code>iles</strong>.</li>
            <li><strong>Absolute paths</strong> provide the complete address from the root; <strong>Relative paths</strong> point to files relative to your current folder.</li>
            <li>Emptying the Recycle Bin only removes the index pointer; data remains recoverable until overwritten by new files.</li>
          </ul>
`;

// Lesson 5.2: <code>F</code>ile Extensions, <code>F</code>ormats & Default Applications
COURSE_DATA.modules[4].lessons[1].readTime = "22 min read";
COURSE_DATA.modules[4].lessons[1].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 2 • Week 7 • Lesson 5.2</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Spend 1-2 days learning about file signatures, common extensions, and dangerous malware spoofing.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Understand what a <code>F</code>ile Extension is and how the OS maps extensions to Default Apps.</li>
              <li>Master the most common file formats: Documents, Images, Audio, Video, and Archives.</li>
              <li>Differentiate between Lossless (PNG) and Lossy (<code>J</code>PEG) image compression.</li>
              <li>Uncover the dangerous security risk of Windows' default "Hide extensions for known file types".</li>
            </ul>
          </div>

          <h3>The Identity Tag: What is a <code>F</code>ile Extension?</h3>
          <p>Every file name is divided into two distinct parts separated by a dot: <code>report.docx</code>. The first part (<code>report</code>) is the human name you chose. The second part (<code>.docx</code>) is the <strong><code>F</code>ile Extension</strong> — a 2-to-4 letter identifier that tells the operating system what type of data is packed inside and which program should open it.</p>

          <h4>Common Universal <code>F</code>ile <code>F</code>ormats at a Glance</h4>
          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Extension</th>
                  <th><code>F</code>ull <code>F</code>ormat Name</th>
                  <th>Best Used <code>F</code>or</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Documents</strong></td>
                  <td><code>.pdf</code></td>
                  <td>Portable Document <code>F</code>ormat</td>
                  <td>Universal contracts, resumes, printable forms. Looks identical on every device.</td>
                </tr>
                <tr>
                  <td><strong>Documents</strong></td>
                  <td><code>.docx</code> / <code>.xlsx</code></td>
                  <td>Microsoft Office XML</td>
                  <td>Editable word processor documents and mathematical spreadsheets.</td>
                </tr>
                <tr>
                  <td><strong>Images</strong></td>
                  <td><code>.png</code></td>
                  <td>Portable Network Graphics</td>
                  <td><strong>Lossless</strong> with transparent backgrounds. Ideal for logos, icons, and screenshots with crisp text.</td>
                </tr>
                <tr>
                  <td><strong>Images</strong></td>
                  <td><code>.jpg</code> / <code>.jpeg</code></td>
                  <td><code>J</code>oint Photographic Experts Group</td>
                  <td><strong>Lossy</strong> compression. Ideal for rich photographic photos where tiny color details can be discarded to shrink file size by 90%!</td>
                </tr>
                <tr>
                  <td><strong>Images</strong></td>
                  <td><code>.svg</code></td>
                  <td>Scalable Vector Graphics</td>
                  <td>Mathematical vectors (lines and curves). Can be scaled to the size of a billboard with zero pixelation or blur!</td>
                </tr>
                <tr>
                  <td><strong>Executables</strong></td>
                  <td><code>.exe</code> / <code>.msi</code></td>
                  <td>Executable Application</td>
                  <td>Real program code that runs on your computer. <strong>High security risk if from unknown sources!</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- THE DANGEROUS EXTENSION CALLOUT -->
          <div class="callout warning" style="margin: 24px 0; border-left: 4px solid #ef4444; background: rgba(239, 68, 68, 0.08);">
            <span class="callout-icon">⚠️</span>
            <div>
              <strong style="font-size: 1.08rem; color: #dc2626;">SECURITY ALERT: Why Windows' Default "Hide <code>F</code>ile Extensions" Setting is Dangerous!</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                By default, Microsoft Windows ships with a dangerous setting enabled: <strong>\"Hide extensions for known file types\"</strong>. Windows hides the <code>.pdf</code>, <code>.docx</code>, and <code>.exe</code> at the end of filenames to make things look \"cleaner\".
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                <strong>How cybercriminals weaponize this against beginners:</strong>
              </p>
              <ul class="styled-list">
                <li>A scammer sends you an email with an attachment named: <code>Salary_Bonus_List.pdf.exe</code>.</li>
                <li>Because Windows hides known extensions, it hides the <code>.exe</code> at the end!</li>
                <li>On your screen, the file literally looks like: <code>Salary_Bonus_List.pdf</code>!</li>
                <li>You think you are opening an innocent PD<code>F</code> document, but you are actually executing a dangerous malware Trojan virus that takes over your computer!</li>
              </ul>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                <strong><code>F</code>ix it immediately:</strong> In Windows <code>F</code>ile Explorer, click <strong>View &rarr; Show &rarr; Check \"<code>F</code>ile name extensions\"</strong>!
              </p>
            </div>
          </div>

          <h4>Default Apps: Changing Which Program Opens a <code>F</code>ile</h4>
          <p>Have you ever double-clicked a PD<code>F</code> and were annoyed that it opened in the web browser instead of Adobe Acrobat? Or double-clicked a photo and it opened in the wrong app?</p>
          <p><strong>To set your preferred default app forever:</strong> Right-click the file &rarr; select <strong>Open with</strong> &rarr; click <strong>Choose another app</strong> &rarr; select your preferred program &rarr; check <strong>\"Always use this app to open files\"</strong>!</p>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li><code>F</code>ile extensions (<code>.pdf</code>, <code>.jpg</code>, <code>.docx</code>) tell the OS which application is responsible for decoding the file.</li>
            <li><strong>PNG</strong> is lossless and supports transparency; <strong><code>J</code>PEG</strong> is lossy and best for photographs.</li>
            <li><strong>Always enable file extensions</strong> in Windows <code>F</code>ile Explorer to protect yourself against disguised <code>.exe</code> malware viruses.</li>
          </ul>
`;

// Lesson 5.3: <code>F</code>ile Compression & Archives: How ZIP Works
COURSE_DATA.modules[4].lessons[2].readTime = "22 min read";
COURSE_DATA.modules[4].lessons[2].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 2 • Week 7 • Lesson 5.3</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Spend 1-2 days learning compression mathematics, lossless algorithms, and archive packaging.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Understand the mathematical difference between Lossless Compression and Lossy Compression.</li>
              <li>Learn how Run-Length Encoding (RLE) and Dictionary Encoding (Huffman Trees) shrink text.</li>
              <li>Understand why sending a single ZIP folder is 100x easier than emailing 50 loose files.</li>
              <li>Solve the mystery: Why doesn't zipping an MP4 movie or <code>J</code>PEG photo make it any smaller?</li>
            </ul>
          </div>

          <h3>The Magic Shrink Ray: How <code>F</code>ile Compression Works</h3>
          <p>Imagine you are packing a suitcase for a trip. If you toss your winter coats and puffy pillows in loosely, they fill the entire bag. But if you put them into a vacuum-seal storage bag and suck the air out, they shrink down to 20% of their original size! When you arrive at your hotel and open the seal, the air rushes back in, and your coats return to their exact original fluffy shape with zero damage.</p>
          <p>That is exactly what a <strong>ZIP file</strong> does for digital data! But how can math shrink a 50 Megabyte document down to 5 Megabytes without losing a single letter or number?</p>

          <h4>Lossless Compression: Run-Length Encoding (RLE)</h4>
          <p>Computers contain vast amounts of repetitive data. Consider this line of uncompressed text:</p>
          <p style="font-family:'<code>J</code>etBrains Mono', monospace; font-size:1.1rem; color:var(--primary); background:var(--bg-surface-alt); padding:10px; border-radius:6px; text-align:center;">
            AAAAAAAAAABBBBBCCCCCCCCCCCC
          </p>
          <p>That string contains 10 'A's, 5 'B's, and 12 'C's (total: <strong>27 bytes</strong>). Instead of writing every letter out, a compression algorithm records the count and the character:</p>
          <p style="font-family:'<code>J</code>etBrains Mono', monospace; font-size:1.1rem; color:#10b981; background:var(--bg-surface-alt); padding:10px; border-radius:6px; text-align:center;">
            10A 5B 12C
          </p>
          <p>That takes only <strong>6 bytes</strong>! We just compressed the data by <strong>78%</strong>, and when the recipient decompresses it, they get back the exact identical 27 letters with 0.0% loss!</p>

          <h4>Dictionary Encoding (LZW & Huffman Trees)</h4>
          <p>In normal English text (like a legal contract), words like <em>\"Agreement\"</em>, <em>\"the\"</em>, <em>\"Corporation\"</em>, and <em>\"hereinafter\"</em> appear hundreds of times. A ZIP compressor creates a temporary internal dictionary table:</p>

          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Original Repeated Word</th>
                  <th>Compressed Shorthand Symbol</th>
                  <th>Memory Saved</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>\"United States of America\" (24 bytes)</td>
                  <td><code>$1</code> (2 bytes)</td>
                  <td>Saves 22 bytes every single time the phrase appears!</td>
                </tr>
                <tr>
                  <td>\"Confidential Agreement\" (22 bytes)</td>
                  <td><code>$2</code> (2 bytes)</td>
                  <td>Saves 20 bytes on every mention!</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- THE SIGNATURE CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! Why Doesn't Zipping a Video (MP4) or Song (MP3) Make It Any Smaller?!"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                You might take a 2 Gigabyte MP4 movie file, right-click it, choose \"Compress to ZIP file\", and discover the resulting ZIP is... <strong>1.99 Gigabytes!</strong>
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                You might wonder: <em>\"Is my ZIP program broken?! Why didn't it shrink?!\"</em>
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                Here is the scientific reason: <strong>MP4 videos, MP3 songs, and <code>J</code>PEG photos are ALREADY aggressively compressed!</strong>
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                All obvious patterns, repetitive pixels, and empty air have already been squeezed out by their own codecs. A compressed file has very high randomness (high entropy). You cannot compress already compressed data twice, just like you cannot squeeze water out of an already dried sponge! People still put videos into ZIP files not to shrink them, but to <strong>bundle 20 separate clips into 1 single downloadable file</strong>!
              </p>
            </div>
          </div>

          <h4>Lossless vs. Lossy: The Two <code>F</code>undamental Philosophies</h4>
          <div class="comparison-grid">
            <div class="compare-card good">
              <h5>Lossless Compression (ZIP, PNG, <code>F</code>LAC, DOCX)</h5>
              <p>Every single bit and byte is 100% mathematically preserved. When unzipped, the file is identical down to the last transistor.</p>
              <p><strong>Mandatory <code>F</code>or:</strong> Text essays, executable programs, financial spreadsheets, medical records, and legal contracts where losing a single character could change $1,000,000 to $100!</p>
            </div>
            <div class="compare-card bad" style="background:var(--bg-surface-alt); border-color:var(--border-medium);">
              <h5 style="color:var(--primary);">Lossy Compression (<code>J</code>PEG, MP3, MP4)</h5>
              <p>Cleverly deletes information that human eyes and ears cannot easily detect!</p>
              <ul class="styled-list">
                <li><strong>MP3 Audio:</strong> Discards ultra-high frequencies that human ears cannot hear, shrinking songs by 90%!</li>
                <li><strong><code>J</code>PEG Images:</strong> Discards microscopic subtle color shifts while keeping sharp edges, shrinking 30MB RAW photos down to 3MB!</li>
              </ul>
            </div>
          </div>

          <div class="callout tip">
            <span class="callout-icon">🎯</span>
            <div>
              <strong>Hands-On Archiving Mastery:</strong><br>
              How to ZIP any folder in Windows:
              <ol style="margin-top:6px; padding-left:18px;">
                <li>Select the files or folder you want to share.</li>
                <li>Right-click &rarr; select <strong>Compress to ZIP file</strong>.</li>
                <li>Windows instantly creates a single <code>.zip</code> archive package with a zipper icon! You can now easily attach that single file to any email.</li>
              </ol>
            </div>
          </div>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li><strong>Lossless compression (ZIP)</strong> shrinks files by replacing repeated patterns with dictionary codes; zero data is lost.</li>
            <li><strong>Lossy compression (<code>J</code>PEG, MP3)</strong> permanently discards subtle data human senses can't detect to achieve 90% size reductions.</li>
            <li>Already-compressed formats (MP4, <code>J</code>PEG) will not shrink when zipped, but zipping bundles multiple files into one convenient package.</li>
          </ul>
`;

// Lesson 5.4: Storage Drive <code>F</code>ormatting (NT<code>F</code>S vs ex<code>F</code>AT vs <code>F</code>AT32) & The 3-2-1 Backup Rule
COURSE_DATA.modules[4].lessons[3].readTime = "22 min read";
COURSE_DATA.modules[4].lessons[3].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 2 • Week 8 • Lesson 5.4</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Spend 1-2 days learning storage drive file systems, partition formats, and the 3-2-1 backup defense.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Contrast the 3 primary drive formatting systems: <code>F</code>AT32, NT<code>F</code>S, and ex<code>F</code>AT.</li>
              <li>Explain why ex<code>F</code>AT is the universal champion for external USB flash drives and SD cards.</li>
              <li>Understand the dreaded 4 GB single-file limit on older <code>F</code>AT32 drives.</li>
              <li>Master the industry-standard 3-2-1 Backup Rule to make your data immune to theft, fire, and ransomware.</li>
            </ul>
          </div>

          <h3><code>F</code>ormatting Storage: Choosing the Right <code>F</code>ile System</h3>
          <p>Whenever you purchase a brand-new external USB drive, SD memory card, or internal SSD, you must \"format\" it. <code>F</code>ormatting creates the file allocation ledger on the drive. But choosing the wrong format can result in your drive refusing to work on Mac, or erroring out when saving large movie files!</p>

          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th><code>F</code>ile System</th>
                  <th>Compatibility</th>
                  <th>Maximum Single <code>F</code>ile Size</th>
                  <th>Best Used <code>F</code>or</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong><code>F</code>AT32 (Legacy)</strong></td>
                  <td>Universal (Windows, Mac, Linux, PlayStation, Car Stereos, Cameras)</td>
                  <td><strong>Strict 4 Gigabyte Limit!</strong> Cannot store any file larger than 4GB!</td>
                  <td>Old car dashboard USBs, retro gaming consoles, Nintendo 3DS.</td>
                </tr>
                <tr>
                  <td><strong>NT<code>F</code>S (Windows Standard)</strong></td>
                  <td>Windows native. (<strong>Mac can read it, but CANNOT write/save to it!</strong>)</td>
                  <td>Virtually infinite (16 Terabytes+)</td>
                  <td>Internal Windows boot drives (supports file encryption, permissions, and crash journaling).</td>
                </tr>
                <tr>
                  <td><strong>ex<code>F</code>AT (Modern Champion)</strong></td>
                  <td><strong>Universal:</strong> <code>F</code>ull Read & Write on Windows, macOS, Linux, and Android!</td>
                  <td>Virtually infinite (16 Exabytes)</td>
                  <td><strong>The #1 Best Choice for all external USB drives, thumb drives, and camera SD cards!</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- THE SIGNATURE CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! Why Did My USB <code>F</code>lash Drive Say '<code>F</code>ile is too large for the destination file system' When I Have 50 GB of <code>F</code>ree Space?!"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                You plug in a 64 GB flash drive with 55 GB of empty free space. You try to copy an 8 GB high-definition family video file onto it, and Windows abruptly throws an error: <em>\"The file is too large for the destination file system\"</em>!
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                You might shout: <em>\"I have 55 GB of empty space! How can an 8 GB file be too large?!\"</em>
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                Because your flash drive is formatted in ancient <strong><code>F</code>AT32</strong>! In <code>F</code>AT32 (created in 1996), the file size counter was limited to a 32-bit integer, which caps out at exactly <strong>4,294,967,295 bytes (4.00 Gigabytes)</strong>. It is mathematically incapable of storing any single file larger than 4GB, regardless of how many empty gigabytes remain on the drive!<br>
                <strong>The <code>F</code>ix:</strong> Copy your files off, right-click the drive in <code>F</code>ile Explorer, click <strong><code>F</code>ormat</strong>, change the dropdown to <strong>ex<code>F</code>AT</strong>, and click Start!
              </p>
            </div>
          </div>

          <h4>Disaster Prevention: The Universal 3-2-1 Backup Rule</h4>
          <p>Every single hard drive and SSD on Earth will eventually die. Water spills happen, laptops get stolen in coffee shops, and ransomware can encrypt your life's work in 30 seconds. Tech professionals never lose data because they strictly follow the <strong>3-2-1 Backup Rule</strong>:</p>

          <div class="steps-grid">
            <div class="step-card">
              <div class="step-num">3</div>
              <h5>3 Copies of Your Data</h5>
              <p>Keep your original working files plus at least <strong>two complete backup copies</strong>.</p>
              <span class="step-example">Original on laptop + Backup 1 + Backup 2.</span>
            </div>
            <div class="step-card">
              <div class="step-num">2</div>
              <h5>2 Different Media Types</h5>
              <p>Store your backups on two different physical media (for example: your internal NVMe SSD and a disconnected external USB drive).</p>
              <span class="step-example">Protects against specific drive hardware failure.</span>
            </div>
            <div class="step-card">
              <div class="step-num">1</div>
              <h5>1 Off-Site Cloud Copy</h5>
              <p>Keep at least one copy in a different physical building (e.g. encrypted cloud storage like OneDrive, Google Drive, Backblaze, or iCloud).</p>
              <span class="step-example">Protects against house fire, flood, or home burglary.</span>
            </div>
          </div>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li><code>F</code>ormat external USB drives and SD cards as <strong>ex<code>F</code>AT</strong> for full cross-platform compatibility between Windows and Mac without 4GB limits.</li>
            <li>Use <strong>NT<code>F</code>S</strong> for internal Windows drives for journaling stability and security permissions.</li>
            <li><code>F</code>ollow the <strong>3-2-1 Backup Rule</strong>: 3 copies, 2 different media formats, 1 off-site cloud copy.</li>
          </ul>
`;

console.log('Module 5 enriched!');

// =============================================================================
// MODULE 6: Keyboard Shortcuts & Mouse Superpowers
// =============================================================================

// Lesson 6.1: The Universal Keyboard Shortcuts Encyclopedia
COURSE_DATA.modules[5].lessons[0].readTime = "22 min read";
COURSE_DATA.modules[5].lessons[0].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 2 • Week 8 • Lesson 6.1</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Practice these 10 universal shortcuts until your fingers execute them without conscious thought.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Master the Top 10 Universal Keyboard Shortcuts that work across all operating systems.</li>
              <li>Unlock the superpower of Windows Clipboard History (<kbd>Win</kbd> + <kbd>V</kbd>).</li>
              <li>Learn how shortcuts eliminate mouse hand fatigue and multiply typing productivity.</li>
              <li>Differentiate between <kbd>Ctrl</kbd> on Windows and <kbd>Command (⌘)</kbd> on Mac.</li>
            </ul>
          </div>

          <h3>Keyboard Muscle Memory: Becoming a Digital Ninja</h3>
          <p>Every time your hand leaves the keyboard, grabs the mouse, navigates the pointer across the screen, clicks a menu, finds an option, and returns your fingers back to the home row, you lose approximately <strong>2 to 4 seconds</strong>. Do that 200 times a day, and you waste hundreds of hours every year doing mundane physical navigation! <strong>Keyboard shortcuts</strong> allow your brain to issue commands directly to the machine at the speed of thought.</p>

          <h4>The Universal Top 10 Keyboard Shortcuts</h4>
          <p>These 10 shortcuts work identically in virtually every program on Earth (Microsoft Word, Google Docs, Chrome, Photoshop, Excel):</p>

          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Windows / Linux Shortcut</th>
                  <th>Mac Equivalent</th>
                  <th>Action</th>
                  <th>Why You Must Use It</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><kbd>Ctrl</kbd> + <kbd>C</kbd></td>
                  <td><kbd>⌘ Cmd</kbd> + <kbd>C</kbd></td>
                  <td><strong>Copy</strong></td>
                  <td>Duplicates selected text or files into temporary memory clipboard.</td>
                </tr>
                <tr>
                  <td><kbd>Ctrl</kbd> + <kbd>V</kbd></td>
                  <td><kbd>⌘ Cmd</kbd> + <kbd>V</kbd></td>
                  <td><strong>Paste</strong></td>
                  <td>Pastes clipboard contents at the cursor location.</td>
                </tr>
                <tr>
                  <td><kbd>Ctrl</kbd> + <kbd>X</kbd></td>
                  <td><kbd>⌘ Cmd</kbd> + <kbd>X</kbd></td>
                  <td><strong>Cut</strong></td>
                  <td>Copies selection and immediately deletes it from original spot.</td>
                </tr>
                <tr>
                  <td><kbd>Ctrl</kbd> + <kbd>Z</kbd></td>
                  <td><kbd>⌘ Cmd</kbd> + <kbd>Z</kbd></td>
                  <td><strong>Undo</strong></td>
                  <td><strong>The Time Machine:</strong> Reverses your last action or mistake instantly!</td>
                </tr>
                <tr>
                  <td><kbd>Ctrl</kbd> + <kbd>Y</kbd></td>
                  <td><kbd>⌘ Cmd</kbd> + <kbd>Y</kbd></td>
                  <td><strong>Redo</strong></td>
                  <td>Re-applies an action you accidentally undid.</td>
                </tr>
                <tr>
                  <td><kbd>Ctrl</kbd> + <kbd>S</kbd></td>
                  <td><kbd>⌘ Cmd</kbd> + <kbd>S</kbd></td>
                  <td><strong>Save</strong></td>
                  <td><strong>The Lifesaver:</strong> Commits open changes to disk so work is never lost.</td>
                </tr>
                <tr>
                  <td><kbd>Ctrl</kbd> + <kbd>A</kbd></td>
                  <td><kbd>⌘ Cmd</kbd> + <kbd>A</kbd></td>
                  <td><strong>Select All</strong></td>
                  <td>Highlights every single item or line of text in the window.</td>
                </tr>
                <tr>
                  <td><kbd>Ctrl</kbd> + <kbd><code>F</code></kbd></td>
                  <td><kbd>⌘ Cmd</kbd> + <kbd><code>F</code></kbd></td>
                  <td><strong><code>F</code>ind in Page</strong></td>
                  <td>Search for any specific keyword inside a 50-page document or webpage.</td>
                </tr>
                <tr>
                  <td><kbd>Ctrl</kbd> + <kbd>P</kbd></td>
                  <td><kbd>⌘ Cmd</kbd> + <kbd>P</kbd></td>
                  <td><strong>Print</strong></td>
                  <td>Opens print dialog (or save as PD<code>F</code>).</td>
                </tr>
                <tr>
                  <td><kbd>Ctrl</kbd> + <kbd>W</kbd></td>
                  <td><kbd>⌘ Cmd</kbd> + <kbd>W</kbd></td>
                  <td><strong>Close Tab</strong></td>
                  <td>Closes the active tab or window in 0.1 seconds.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- THE CLIPBOARD HISTORY CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! If I Copy Something New, Does My Old Copied Text Disappear <code>F</code>orever? (The Win+V Secret!)"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                <code>F</code>or decades, the computer clipboard was a \"single-item memory\". If you copied someone's phone number, and then copied an address, the phone number was overwritten and lost!
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                Windows 10 and 11 solved this with a secret superpower: <strong>Clipboard History (<kbd>Win</kbd> + <kbd>V</kbd>)</strong>!
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                Press <strong><kbd>Win</kbd> + <kbd>V</kbd></strong> on your keyboard. A floating card opens up showing the last <strong>25 items you copied</strong> (including text, links, and screenshots!). You can click any previous item to paste it, and even \"pin\" your favorite email address or zoom link so it stays saved forever!
              </p>
            </div>
          </div>

          <h4>The Browser Emergency Undo: <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>T</kbd></h4>
          <p>Have you ever had an important web page open, reached up to close another tab, and accidentally clicked the X on your research tab? <strong>Do not panic!</strong></p>
          <p>Press <strong><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>T</kbd></strong> (or <kbd>⌘</kbd> + <kbd>Shift</kbd> + <kbd>T</kbd> on Mac). Your browser will instantly resurrect the closed tab right where you left off, preserving your scroll position and typed forms!</p>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li>Universal shortcuts (<kbd>Ctrl</kbd> + <kbd>C</kbd>, <kbd>V</kbd>, <kbd>Z</kbd>, <kbd>S</kbd>, <kbd><code>F</code></kbd>) save hundreds of hours of mundane mouse hunting.</li>
            <li>Press <kbd>Win</kbd> + <kbd>V</kbd> to unlock <strong>Clipboard History</strong> and access your last 25 copied items.</li>
            <li>Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>T</kbd> to immediately resurrect accidentally closed browser tabs.</li>
          </ul>
`;

// Lesson 6.2: System & Window Navigation Shortcuts
COURSE_DATA.modules[5].lessons[1].readTime = "20 min read";
COURSE_DATA.modules[5].lessons[1].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 2 • Week 8 • Lesson 6.2</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Practice application switching, screenshot snipping, and security locking.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Switch between running applications in 0.1 seconds with <kbd>Alt</kbd> + <kbd>Tab</kbd>.</li>
              <li>Capture precision regional screenshots with the Snipping Shortcut (<kbd>Win</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd>).</li>
              <li>Lock your workstation in half a second whenever stepping away (<kbd>Win</kbd> + <kbd>L</kbd>).</li>
              <li>Master the <code>F</code>ile Explorer shortcut (<kbd>Win</kbd> + <kbd>E</kbd>) and Run dialog (<kbd>Win</kbd> + <kbd>R</kbd>).</li>
            </ul>
          </div>

          <h3>System Superpowers: Navigating Windows Without the Mouse</h3>
          <p>Navigating the operating system itself can be done almost entirely from the keyboard. The <strong>Windows Key (<kbd>Win</kbd>)</strong> (located between Ctrl and Alt at the bottom left) is your command bridge.</p>

          <div class="steps-grid">
            <div class="step-card">
              <div class="step-num">1</div>
              <h5>App Switching: <kbd>Alt</kbd> + <kbd>Tab</kbd></h5>
              <p>Hold down <kbd>Alt</kbd> and tap <kbd>Tab</kbd>. A grid of all open windows appears. Tap Tab to cycle through them, and release Alt to jump to that app instantly!</p>
              <span class="step-example">Switch between Word and Chrome in 0.1s.</span>
            </div>
            <div class="step-card">
              <div class="step-num">2</div>
              <h5>Snippet Screenshot: <kbd>Win</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd></h5>
              <p>The screen dims, and your cursor becomes a crosshair. Drag a box over any part of your screen: it is instantly copied to your clipboard ready to paste into Discord or email!</p>
              <span class="step-example">No more blurry smartphone photos of your monitor!</span>
            </div>
            <div class="step-card">
              <div class="step-num">3</div>
              <h5>Instant Lock: <kbd>Win</kbd> + <kbd>L</kbd></h5>
              <p>Stepping away to grab coffee or use the restroom? Press <kbd>Win</kbd> + <kbd>L</kbd>. Windows locks your screen instantly, requiring your password to resume!</p>
              <span class="step-example">Essential office privacy & cybersecurity habit.</span>
            </div>
            <div class="step-card">
              <div class="step-num">4</div>
              <h5>Open <code>F</code>ile Explorer: <kbd>Win</kbd> + <kbd>E</kbd></h5>
              <p>Need to find a downloaded file or USB drive? Press <kbd>Win</kbd> + <kbd>E</kbd> to spawn a new <code>F</code>ile Explorer folder window immediately.</p>
              <span class="step-example">Instant folder access anywhere.</span>
            </div>
          </div>

          <!-- THE SIGNATURE CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! Please Stop Taking Blurry Cell Phone Photos of Your Computer Screen!"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                Nothing screams \"amateur\" more than holding your physical smartphone up to your computer monitor, taking a crooked, glare-filled photo of an error message with wavy moiré lines, and texting it to tech support!
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                Press <strong><kbd>Win</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd></strong> (or <kbd>⌘</kbd> + <kbd>Shift</kbd> + <kbd>4</kbd> on Mac). Drag a neat box around the exact error message. Open your email or chat and press <kbd>Ctrl</kbd> + <kbd>V</kbd>. You will send a razor-sharp, crystal-clear pixel-perfect screenshot every single time!
              </p>
            </div>
          </div>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li><kbd>Alt</kbd> + <kbd>Tab</kbd> provides instantaneous app multitasking.</li>
            <li><kbd>Win</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd> captures clean, high-resolution regional screenshots.</li>
            <li><kbd>Win</kbd> + <kbd>L</kbd> locks your workstation instantly to protect your privacy.</li>
          </ul>
`;

// Lesson 6.3: Text Editing & Cursor Ninjutsu
COURSE_DATA.modules[5].lessons[2].readTime = "20 min read";
COURSE_DATA.modules[5].lessons[2].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 2 • Week 8 • Lesson 6.3</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Practice cursor movement shortcuts while writing emails, essays, and code.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Navigate text word-by-word with the <kbd>Ctrl</kbd> modifier.</li>
              <li>Select entire words and paragraphs without touching the mouse.</li>
              <li>Delete whole words in a single stroke with <kbd>Ctrl</kbd> + <kbd>Backspace</kbd>.</li>
              <li><code>J</code>ump instantly to the start or end of lines with <kbd>Home</kbd> and <kbd>End</kbd>.</li>
            </ul>
          </div>

          <h3>Cursor Ninjutsu: Stop Clicking Inside Words</h3>
          <p>Watch an inexperienced typist edit an essay: when they make a typo 4 words back, they stop typing, lift their hand, grab the mouse, squint to aim the microscopic cursor line between two tiny letters, click, miss by one letter, click again, and backspace. <strong>Professional writers and programmers edit text at lightning speed without ever lifting their wrists from the keyboard!</strong></p>

          <h4>The Core Rules of Cursor Navigation</h4>
          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Shortcut</th>
                  <th>Action</th>
                  <th>How It Works</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><kbd>Ctrl</kbd> + <kbd>&larr;</kbd> / <kbd>&rarr;</kbd></td>
                  <td><strong><code>J</code>ump Word by Word</strong></td>
                  <td>Instead of crawling letter-by-letter, the cursor leaps across entire words in 1 tap!</td>
                </tr>
                <tr>
                  <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>&larr;</kbd> / <kbd>&rarr;</kbd></td>
                  <td><strong>Highlight Word by Word</strong></td>
                  <td>Selects whole words rapidly so you can replace or delete them.</td>
                </tr>
                <tr>
                  <td><kbd>Ctrl</kbd> + <kbd>Backspace</kbd></td>
                  <td><strong>Delete Entire Previous Word</strong></td>
                  <td>Made a mistake on the word you just typed? One tap vaporizes the entire word instead of tapping backspace 10 times!</td>
                </tr>
                <tr>
                  <td><kbd>Home</kbd> / <kbd>End</kbd></td>
                  <td><strong><code>J</code>ump to Line Start / Line End</strong></td>
                  <td>Teleports cursor instantly to the very beginning or very end of the current line.</td>
                </tr>
                <tr>
                  <td><kbd>Ctrl</kbd> + <kbd>Home</kbd> / <kbd>End</kbd></td>
                  <td><strong><code>J</code>ump to Document Start / End</strong></td>
                  <td>Teleports cursor to page 1 line 1, or to the very bottom of a 200-page document!</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- THE SIGNATURE CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! What is the Golden Rule of Cursor Modifiers?"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                Memorize this simple mathematical formula and you will master text editing in every application for the rest of your life:
              </p>
              <ul class="styled-list">
                <li><strong>Arrow Keys:</strong> Move by <em>1 single character</em>.</li>
                <li><strong>Hold <kbd>Ctrl</kbd>:</strong> Multiplies movement to <em>1 entire word</em>!</li>
                <li><strong>Hold <kbd>Shift</kbd>:</strong> Turns on <em>Selection / Highlighting</em>!</li>
                <li><strong>Hold <kbd>Ctrl</kbd> + <kbd>Shift</kbd> together:</strong> <em>Highlights entire words at a time</em>!</li>
              </ul>
            </div>
          </div>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li>Use <kbd>Ctrl</kbd> + Arrows to leap across text word-by-word instead of crawling letter-by-letter.</li>
            <li>Use <kbd>Ctrl</kbd> + <kbd>Backspace</kbd> to delete entire misspelled words in a single instant.</li>
            <li>Use <kbd>Home</kbd> and <kbd>End</kbd> to navigate to the beginning or end of sentences effortlessly.</li>
          </ul>
`;

// Lesson 6.4: Touch Typing <code>F</code>undamentals: Training Your <code>F</code>ingers
COURSE_DATA.modules[5].lessons[3].readTime = "20 min read";
COURSE_DATA.modules[5].lessons[3].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 2 • Week 8 • Lesson 6.4</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Spend 15 minutes every day for 2 weeks practicing home-row muscle memory.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Understand the Home Row finger positions (<code>ASDF</code> and <code>JKL;</code>).</li>
              <li>Locate the secret physical orientation bumps on the <code>F</code> and <code>J</code> keys.</li>
              <li>Transition from "Hunt-and-Peck" two-finger typing (25 WPM) to 10-finger muscle memory (70+ WPM).</li>
              <li>Discover free online touch typing training tools.</li>
            </ul>
          </div>

          <h3>Touch Typing: Connecting Muscle Memory to the Screen</h3>
          <p>If you have to look down at your physical keyboard while typing, your brain is operating with a severe bottleneck: you think of a thought &rarr; look down at your fingers &rarr; search for the letter 'P' with your eyes &rarr; press it with your index finger &rarr; look up at the screen to check for errors &rarr; look back down. This is called <strong>\"Hunt-and-Peck\"</strong>, and it caps human typing speed at about 25 to 35 Words Per Minute (WPM).</p>
          <p><strong>Touch Typing</strong> trains your 10 fingers to remember the exact physical position of every key through subconscious tactile muscle memory. When you master touch typing, thoughts flow directly from your mind onto the screen at <strong>70 to 100+ WPM</strong> without your eyes ever leaving the monitor!</p>

          <h4>The Secret Orientation Bumps: The <code>F</code> and <code>J</code> Anchors</h4>
          <p>Look at your keyboard right now. Gently run your index fingers over the <strong><code>F</code> key</strong> and the <strong><code>J</code> key</strong>. Do you feel a tiny raised plastic ridge or bump on both keys?</p>
          <p>Those bumps are not manufacturing defects — they are the universal tactile anchor points! They allow your fingers to find the home row in pitch darkness without ever looking down.</p>

          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Hand</th>
                  <th>Pinky</th>
                  <th>Ring Finger</th>
                  <th>Middle Finger</th>
                  <th>Index Finger</th>
                  <th>Thumbs</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Left Hand</strong></td>
                  <td><strong>A</strong></td>
                  <td><strong>S</strong></td>
                  <td><strong>D</strong></td>
                  <td><strong>F</strong> (on the bump!)</td>
                  <td>Spacebar</td>
                </tr>
                <tr>
                  <td><strong>Right Hand</strong></td>
                  <td><strong>; (Semicolon)</strong></td>
                  <td><strong>L</strong></td>
                  <td><strong>K</strong></td>
                  <td><strong>J</strong> (on the bump!)</td>
                  <td>Spacebar</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- THE SIGNATURE CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! Why Are Keyboard Letters Arranged in Such a Bizarre Order (QWERTY) Instead of ABCDEF?!"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                In 1873, Christopher Latham Sholes invented the modern mechanical typewriter.
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                Early typewriters had metal arms with letters on the end. When a typist pressed a key, the metal arm swung up and struck an inked ribbon. When letters were arranged alphabetically (ABCDEF), common letter pairs (like 'T' and 'H' or 'S' and 'T') were right next to each other. When typists typed fast, the metal arms physically collided and jammed into a mangled clump!
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                Sholes rearranged the keyboard layout (<strong>QWERTY</strong>) to separate commonly paired letters so the mechanical arms wouldn't jam. Even though modern computers have zero mechanical arms, QWERTY remains the global standard because billions of people have already memorized it!
              </p>
            </div>
          </div>

          <div class="callout tip">
            <span class="callout-icon">🎯</span>
            <div>
              <strong>Recommended Free Training Websites:</strong><br>
              Spend 15 minutes a day practicing on these fun, gamified typing tutors:
              <ul style="margin-top:6px; padding-left:18px;">
                <li><strong>Keybr.com:</strong> Generates targeted practice words based on whichever specific letter your fingers hesitate on!</li>
                <li><strong>Monkeytype.com:</strong> Clean, aesthetic speed test with customizable themes and live WPM graphs.</li>
                <li><strong>Nitro Type:</strong> Race virtual sports cars against other learners by typing sentences accurately!</li>
              </ul>
            </div>
          </div>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li>The <strong>Home Row</strong> (<code>ASDF</code> and <code>JKL;</code>) is the foundational home base for all 10 fingers.</li>
            <li>Use the physical tactile bumps on the <strong><code>F</code></strong> and <strong><code>J</code></strong> keys to position your hands without looking down.</li>
            <li>Practice 15 minutes daily on free tools like <em>Keybr</em> or <em>Monkeytype</em> to double your typing speed.</li>
          </ul>
`;

console.log('Module 6 enriched!');

const updatedContent = 'const COURSE_DATA = ' + JSON.stringify(COURSE_DATA, null, 2) + ';\n';
fs.writeFileSync(courseDataPath, updatedContent, 'utf8');
console.log('Updated courseData.js successfully with Phase 2 enrichments!');
