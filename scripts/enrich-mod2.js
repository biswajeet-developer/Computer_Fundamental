// scripts/enrich-mod2.js
// Enriches Module 2 (Computer Hardware: Inside the Box & Out - Lessons 2.1 to 2.5)
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

console.log('Enriching Module 2: Computer Hardware...');

// -----------------------------------------------------------------------------
// Lesson 2.1: The CPU (Cores, Threads & Clocks)
// -----------------------------------------------------------------------------
COURSE_DATA.modules[1].lessons[0].readTime = "22 min read";
COURSE_DATA.modules[1].lessons[0].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 1 • Week 3 • Lesson 2.1</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Spend 1-2 days studying processor architecture, clock cycles, and cooling physics.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Identify the physical role, anatomy, and socket location of the CPU inside a computer.</li>
              <li>Understand what Clock Speed (Gigahertz / GHz) actually measures at the electrical level.</li>
              <li>Differentiate between physical CPU Cores and logical Threads (Hyperthreading / SMT).</li>
              <li>Trace the 3-stage Fetch-Decode-Execute instruction cycle.</li>
              <li>Learn why cooling systems (thermal paste, heatsinks, fans) are vital to prevent Thermal Throttling.</li>
              <li>Solve the mystery: Is a 4.0 GHz 4-Core CPU faster than a 2.5 GHz 16-Core CPU?</li>
            </ul>
          </div>

          <h3>The Brain of the Machine: The Central Processing Unit (CPU)</h3>
          <p>If the entire computer were a human body, the <strong>CPU (Central Processing Unit)</strong> would be its conscious brain. It is a tiny, wafer-thin square slice of silicon about 1.5 inches wide, shielded by a nickel-plated copper heat spreader. Despite being smaller than a postage stamp, a modern CPU contains anywhere from <strong>5 billion to over 30 billion microscopic electrical transistors</strong> etched with nanometer precision!</p>

          <h4>What Does the CPU Actually Do? The Fetch-Decode-Execute Cycle</h4>
          <p>Every single millisecond you use your computer, the CPU executes billions of tiny instructions following an unwavering 3-step loop:</p>

          <div class="steps-grid">
            <div class="step-card">
              <div class="step-num">1</div>
              <h5>1. Fetch</h5>
              <p>The CPU retrieves the next instruction code from fast memory (L1/L2 Cache or RAM) and brings it into its internal instruction register.</p>
              <span class="step-example">Example: "Fetch instruction at memory address #04812"</span>
            </div>
            <div class="step-card">
              <div class="step-num">2</div>
              <h5>2. Decode</h5>
              <p>The Control Unit translates the binary 1s and 0s into electrical control signals, determining what operation is required.</p>
              <span class="step-example">Example: "Operation is ADD: Add the number in Register A to Register B"</span>
            </div>
            <div class="step-card">
              <div class="step-num">3</div>
              <h5>3. Execute</h5>
              <p>The Arithmetic Logic Unit (ALU) performs the actual math, comparison, or memory move, and saves the result to a register.</p>
              <span class="step-example">Example: 5 + 7 = 12 stored in output register. Done in 0.3 nanoseconds!</span>
            </div>
            <div class="step-card">
              <div class="step-num">4</div>
              <h5>Repeat Infinitely</h5>
              <p>The Program Counter increments by one, and the CPU immediately fetches the next instruction. It repeats this billions of times every second!</p>
              <span class="step-example">Billions of cycles per second without pause.</span>
            </div>
          </div>

          <h4>Decoding CPU Specifications: What Do the Numbers Mean?</h4>
          <p>When you shop for a laptop or desktop, you will see spec sheets with intimidating strings like <em>\"Intel Core i7-14700K 20-Core up to 5.6 GHz\"</em> or <em>\"AMD Ryzen 7 7800X3D 8-Core 16-Thread\"</em>. Let us translate every term into crystal-clear plain English:</p>

          <div class="component-cards-container">
            <div class="comp-box">
              <div class="comp-header">
                <span class="comp-badge">Speed Metric</span>
                <h4>Clock Speed (Gigahertz / GHz)</h4>
              </div>
              <p>Clock speed is the electrical heartbeat of the processor. Inside the computer is a tiny quartz crystal oscillator. When electricity flows through it, it vibrates at a rock-solid frequency, sending an electrical pulse (a \"clock tick\") across the silicon.</p>
              <ul class="styled-list">
                <li><strong>1 Hertz (Hz)</strong> = 1 cycle (tick) per second</li>
                <li><strong>1 Megahertz (MHz)</strong> = 1 million cycles per second</li>
                <li><strong>1 Gigahertz (GHz)</strong> = <strong>1 Billion cycles every single second!</strong></li>
              </ul>
              <p>A CPU running at <strong>4.0 GHz</strong> pulses 4,000,000,000 times per second! On each tick, the processor advances its instructions.</p>
            </div>

            <div class="comp-box">
              <div class="comp-header">
                <span class="comp-badge">Multitasking Metric</span>
                <h4>Cores & Threads: The Kitchen Analogy</h4>
              </div>
              <p>Imagine a busy commercial restaurant kitchen:</p>
              <ul class="styled-list">
                <li><strong>Single-Core CPU (Historical):</strong> 1 chef working alone. If they are baking a cake, they cannot chop onions until the cake is in the oven. Early computers could only do one task at a time!</li>
                <li><strong>Multi-Core CPU (Modern):</strong> Having <strong>8, 12, or 16 separate chefs</strong> inside the same kitchen! Chef 1 streams your music, Chef 2 renders a 3D game, and Chefs 3 through 8 manage background Windows processes.</li>
                <li><strong>Threads (Hyperthreading / SMT):</strong> Giving each chef <strong>two prep counters</strong>. While waiting for a pot of soup to boil on counter 1, the chef immediately chops carrots on counter 2, maximizing productivity!</li>
              </ul>
            </div>
          </div>

          <!-- THE SIGNATURE CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! Is a 4.0 GHz 4-Core CPU Faster Than a 2.5 GHz 16-Core CPU? Which One Should I Buy?!"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                This is the single most common dilemma people face when buying a computer. The answer depends entirely on <strong>what type of software you are running</strong>!
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                Think of it like vehicles:
              </p>
              <ul class="styled-list">
                <li><strong>The 4.0 GHz 4-Core CPU is a Ferrari:</strong> It has fewer seats (only 4 cores), but each seat moves at extreme top speed (4.0 GHz). It is phenomenal for tasks that can only be done in a straight single line — like video games, typing documents, or navigating web browsers.</li>
                <li><strong>The 2.5 GHz 16-Core CPU is a Heavy-Duty Freight Train:</strong> Each car moves slower (2.5 GHz), but it can carry 16 massive shipping containers simultaneously! It crushes tasks that can be divided into parallel chunks — like exporting a 4K YouTube video, rendering 3D animations in Blender, or compiling millions of lines of programming code.</li>
              </ul>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                For 90% of everyday users and gamers, higher single-core speed feels snappier. For professional creative workstations, more cores wins every time!
              </p>
            </div>
          </div>

          <h4>CPU Cache: The Ultra-Fast Secret Memory</h4>
          <p>Fetching data from standard RAM takes around 50 to 80 nanoseconds. To a CPU running at 4 billion cycles per second, 80 nanoseconds feels like waiting an eternity! To keep the CPU from sitting idle, engineers put microscopic pools of ultra-fast memory directly on the silicon chip itself called <strong>CPU Cache</strong>:</p>

          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Cache Level</th>
                  <th>Physical Location</th>
                  <th>Typical Size</th>
                  <th>Access Latency</th>
                  <th>Analogy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>L1 Cache</strong></td>
                  <td>Inside each individual core</td>
                  <td>32 KB to 64 KB per core</td>
                  <td><strong>~1 nanosecond</strong> (Instant!)</td>
                  <td>Notes written directly on your hand</td>
                </tr>
                <tr>
                  <td><strong>L2 Cache</strong></td>
                  <td>Dedicated to each core</td>
                  <td>512 KB to 2 MB per core</td>
                  <td><strong>~3 to 5 nanoseconds</strong></td>
                  <td>A piece of paper on your desk</td>
                </tr>
                <tr>
                  <td><strong>L3 Cache</strong></td>
                  <td>Shared across all cores</td>
                  <td>16 MB to 96 MB shared</td>
                  <td><strong>~10 to 15 nanoseconds</strong></td>
                  <td>A bookshelf directly behind your chair</td>
                </tr>
                <tr>
                  <td><strong>Main RAM</strong></td>
                  <td>External sticks on motherboard</td>
                  <td>16 GB to 64 GB</td>
                  <td><strong>~50 to 80 nanoseconds</strong></td>
                  <td>Walking down the hall to the library</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4>Heat, Thermal Paste & Thermal Throttling</h4>
          <p>Running billions of electrical pulses through microscopic silicon generates tremendous heat — easily reaching <strong>85°C to 95°C (185°F to 203°F)</strong>! If that heat is not pulled away instantly, the silicon chip will permanently destroy itself.</p>
          <p>To prevent destruction, modern CPUs have built-in temperature sensors. If temperature climbs too high, the CPU automatically reduces its clock speed (for example, dropping from 4.5 GHz down to 1.2 GHz) to cool off — a phenomenon called <strong>Thermal Throttling</strong>. This is why a dusty, overheating laptop suddenly lags and stutters!</p>

          <div class="steps-grid">
            <div class="step-card">
              <div class="step-num">1</div>
              <h5>1. The Silicon Die</h5>
              <p>Generates extreme concentrated heat in an area smaller than a coin.</p>
              <span class="step-example">Temperature: up to 90°C</span>
            </div>
            <div class="step-card">
              <div class="step-num">2</div>
              <h5>2. Thermal Paste</h5>
              <p>A silvery-grey compound spread between the CPU and metal cooler. Fills microscopic air pits in the metal so heat transfers 100x faster than air.</p>
              <span class="step-example">Crucial: Never run a PC without it!</span>
            </div>
            <div class="step-card">
              <div class="step-num">3</div>
              <h5>3. Copper Heat Pipes & Heatsink</h5>
              <p>Liquid inside copper vacuum pipes boils, travels to hundreds of aluminum fins, and condenses, pulling heat away from the chip.</p>
              <span class="step-example">Massive surface area for dissipation.</span>
            </div>
            <div class="step-card">
              <div class="step-num">4</div>
              <h5>4. Cooling Fan or Liquid AIO</h5>
              <p>High-static fans blow cool room air through the fins, exhausting hot air out the back of the computer case.</p>
              <span class="step-example">Keeps the CPU below 75°C under heavy loads.</span>
            </div>
          </div>

          <div class="callout tip">
            <span class="callout-icon">🎯</span>
            <div>
              <strong>Hands-On Diagnostic Activity:</strong><br>
              Inspect your own CPU right now!
              <ol style="margin-top:6px; padding-left:18px;">
                <li>Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Esc</kbd> to open <strong>Windows Task Manager</strong> (or open <em>Activity Monitor</em> on macOS).</li>
                <li>Click the <strong>Performance</strong> tab and select <strong>CPU</strong>.</li>
                <li>Notice your exact CPU model name, current speed in GHz, total Cores, and total logical Processors (Threads). Watch how the graph spikes when you open a new browser tab!</li>
              </ol>
            </div>
          </div>

          <h4>Common Beginner Confusion Cleared Up</h4>
          <ul class="styled-list">
            <li><strong>Myth:</strong> <em>"A 16-core CPU makes my computer 16 times faster."</em><br>
            <strong>Reality:</strong> Only if software is written to use all 16 cores at once! Everyday programs like web browsing or writing in Microsoft Word only use 1 or 2 cores; the other cores stay idle or handle background tasks.</li>
            <li><strong>Myth:</strong> <em>"Laptops and desktops with the same CPU name are identical."</em><br>
            <strong>Reality:</strong> A laptop CPU is throttled to use 15 to 45 Watts to preserve battery and prevent melting the thin chassis. A desktop CPU can consume 150 to 250 Watts with massive cooling, making it up to 2x faster!</li>
          </ul>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li>The CPU is the central brain executing instructions through the <strong>Fetch &rarr; Decode &rarr; Execute</strong> cycle.</li>
            <li><strong>Clock Speed (GHz):</strong> Measures how many billion cycles the chip completes per second.</li>
            <li><strong>Cores:</strong> Independent physical processing brains on one chip. <strong>Threads:</strong> Logical virtual pipelines per core.</li>
            <li><strong>Cache (L1/L2/L3):</strong> Microscopic ultra-fast on-die memory that keeps the CPU fed without waiting on slow RAM.</li>
            <li><strong>Thermal Throttling:</strong> An automatic survival mechanism that slows the CPU down if cooling is inadequate.</li>
          </ul>
`;

// -----------------------------------------------------------------------------
// Lesson 2.2: Memory (RAM) vs Permanent Storage (SSD / HDD)
// -----------------------------------------------------------------------------
COURSE_DATA.modules[1].lessons[1].readTime = "22 min read";
COURSE_DATA.modules[1].lessons[1].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 1 • Week 3 • Lesson 2.2</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Take 1-2 days to permanently master the critical difference between RAM and Storage.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Explain why RAM is volatile memory and Storage is non-volatile memory.</li>
              <li>Use the Working Desk vs. Filing Cabinet analogy to diagnose computer slowdowns.</li>
              <li>Understand what happens when RAM runs out: Virtual Memory, Paging, and Swap Space.</li>
              <li>Differentiate between DDR4 and DDR5 memory standards and Dual-Channel architecture.</li>
              <li>Determine exactly how much RAM your computer needs in 2026 for your specific workflow.</li>
            </ul>
          </div>

          <h3>The #1 Most Common Computer Confusion Explained</h3>
          <p>Ask ten everyday computer users the difference between \"Memory\" and \"Storage\", and at least eight of them will get confused. People often say: <em>\"My computer memory is full, so I can't save this photo!\"</em> (They mean Storage), or <em>\"I bought a 1 Terabyte laptop so I can run 50 apps at the same time!\"</em> (They mean RAM).</p>
          <p>Let us settle this confusion permanently right now with a vivid, unforgettable analogy.</p>

          <h4>The Office Analogy: The Working Desk vs. The Steel Filing Cabinet</h4>
          <div class="comparison-grid">
            <div class="compare-card good">
              <h5>RAM (Random Access Memory) = The Desk Surface</h5>
              <p>RAM consists of slim green or black circuit sticks clicked directly into your motherboard.</p>
              <ul class="styled-list">
                <li><strong>Purpose:</strong> Holds ONLY the files and applications you are actively working on <em>right this exact second</em>.</li>
                <li><strong>Speed:</strong> Blazingly fast (transferring 30,000 to 70,000 Megabytes per second!). Latency: ~50 nanoseconds.</li>
                <li><strong>Volatility:</strong> <strong>Volatile.</strong> Requires continuous electric power. The instant you turn off or unplug the computer, RAM wipes 100% clean!</li>
                <li><strong>Desk Analogy:</strong> A huge physical desk lets you spread out 5 open textbooks, your notebook, and a calculator side-by-side without any clutter.</li>
              </ul>
            </div>
            <div class="compare-card bad" style="background:var(--bg-surface-alt); border-color:var(--border-medium);">
              <h5 style="color:var(--primary);">Storage (SSD / Hard Drive) = The Filing Cabinet</h5>
              <p>Storage is your internal drive (NVMe SSD or Hard Drive) where all your files live permanently.</p>
              <ul class="styled-list">
                <li><strong>Purpose:</strong> Stores Windows, your photo library, games, school papers, and installed apps forever.</li>
                <li><strong>Speed:</strong> Slower than RAM, but modern SSDs are still remarkably fast. Latency: ~0.02 milliseconds.</li>
                <li><strong>Volatility:</strong> <strong>Non-Volatile.</strong> When you power off the computer, your files remain safely preserved for years.</li>
                <li><strong>Desk Analogy:</strong> A steel filing cabinet in the corner of your room with drawers holding thousands of folders.</li>
              </ul>
            </div>
          </div>

          <h4>What Happens When You Run Out of RAM? (Virtual Memory & Paging)</h4>
          <p>Imagine your desk is completely covered in papers, and someone hands you another giant stack of blueprints. What do you do? You are forced to pick up one of your open papers, walk over to the filing cabinet, file it away to make room on the desk, and then lay down the new blueprints.</p>
          <p>Your computer does the exact same thing! When your physical RAM fills up, Windows and macOS activate <strong>Virtual Memory (Paging File / Swap Space)</strong>:</p>

          <div class="steps-grid">
            <div class="step-card">
              <div class="step-num">1</div>
              <h5>1. RAM Reaches 95% Capacity</h5>
              <p>You have 30 Chrome tabs, Spotify, Zoom, and a video editor open on an 8 GB RAM laptop. The operating system realizes there is no free physical memory left.</p>
              <span class="step-example">Memory threshold reached.</span>
            </div>
            <div class="step-card">
              <div class="step-num">2</div>
              <h5>2. Dumping Inactive Apps to Disk</h5>
              <p>The OS identifies the 15 browser tabs you haven't clicked in 30 minutes, packages their data, and writes them into a hidden file on your SSD (<code>pagefile.sys</code> on Windows).</p>
              <span class="step-example">Frees up 2 GB of physical RAM.</span>
            </div>
            <div class="step-card">
              <div class="step-num">3</div>
              <h5>3. Page Fault & Thrashing</h5>
              <p>You click back onto one of those old tabs. The computer must freeze for 1–2 seconds while it reads that data back off the SSD and swaps something else out. This lag is called <strong>Thrashing</strong>!</p>
              <span class="step-example">The computer stutters and freezes temporarily.</span>
            </div>
            <div class="step-card">
              <div class="step-num">4</div>
              <h5>4. The Solution: More Physical RAM</h5>
              <p>If you upgrade your computer from 8 GB to 16 GB, all 30 tabs stay in instant physical RAM simultaneously. The freezing disappears completely!</p>
              <span class="step-example">Silky smooth multitasking restored.</span>
            </div>
          </div>

          <!-- THE SIGNATURE CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! If I Buy 64 GB of RAM, Will My Games Download Faster and Will My Computer Become Twice as Fast?"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                No! This is one of the most expensive mistakes beginners make.
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                Think of RAM like a dining room table:
              </p>
              <ul class="styled-list">
                <li>If you live alone and only eat one bowl of cereal, a table with 4 chairs is plenty.</li>
                <li>Buying a giant 20-seat banquet table will <strong>not</strong> make you eat your cereal any faster! It just means 19 seats sit completely empty and wasted.</li>
                <li>However, if you invite 15 guests over for Thanksgiving dinner (heavy 4K video editing, 3D modeling, virtual machines), that 20-seat table is essential so guests aren't eating on the floor!</li>
              </ul>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                RAM only speeds up your computer if you were previously running out of it. If your computer only uses 10 GB of RAM, having 16 GB or 64 GB will feel <strong>100% identical in speed</strong>. And your internet download speed is controlled by your Wi-Fi router and internet provider, not your RAM!
              </p>
            </div>
          </div>

          <!-- THE SECOND CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! Why Does Google Chrome Eat So Much RAM? Is High RAM Usage a Bad Thing?"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                You might open Task Manager and gasp: <em>\"Google Chrome is using 4 Gigabytes of RAM! Is Chrome a terrible virus?!\"</em>
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                Here is the secret: <strong>Chrome uses RAM deliberately for your safety and speed!</strong>
              </p>
              <ul class="styled-list">
                <li><strong>Process Isolation (Sandboxing):</strong> Chrome runs every single tab as its own isolated computer program. If a malicious script on a scam website crashes in Tab 3, Tabs 1 and 2 don't crash, and your bank account login in Tab 1 remains safe!</li>
                <li><strong>Unused RAM is Wasted RAM:</strong> You paid money for RAM! Leaving RAM empty does not save battery or electricity. Modern operating systems purposely cache recently viewed files into free RAM so that if you click them again, they open in 1 millisecond. If another big app needs the memory, the OS instantly frees it up!</li>
              </ul>
            </div>
          </div>

          <h4>How Much RAM Do You Actually Need in 2026?</h4>
          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>RAM Capacity</th>
                  <th>User Profile</th>
                  <th>What You Can Run Smoothly</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>8 GB</strong></td>
                  <td>Bare Minimum / Budget</td>
                  <td>Basic web browsing (5-10 tabs), checking email, Word documents, YouTube streaming. Slows down if you multitask.</td>
                </tr>
                <tr>
                  <td><strong>16 GB</strong></td>
                  <td>The Sweet Spot (Recommended for 85% of people)</td>
                  <td>Silky smooth everyday multitasking: 30+ browser tabs, Spotify, Zoom calls, office spreadsheets, and casual gaming simultaneously.</td>
                </tr>
                <tr>
                  <td><strong>32 GB</strong></td>
                  <td>Power Users & Creators</td>
                  <td>Modern AAA gaming, 4K video editing (Premiere / DaVinci), large Photoshop files with 50 layers, software development (Docker, Android Studio).</td>
                </tr>
                <tr>
                  <td><strong>64 GB+</strong></td>
                  <td>Workstation Professionals</td>
                  <td>8K RAW video production, 3D CGI rendering, training local AI language models, running multiple simultaneous virtual operating systems.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="callout tip">
            <span class="callout-icon">🎯</span>
            <div>
              <strong>Hands-On Memory Audit:</strong><br>
              Check your computer's RAM usage right now!
              <ol style="margin-top:6px; padding-left:18px;">
                <li>Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Esc</kbd> to open <strong>Task Manager</strong>.</li>
                <li>Click <strong>Performance</strong> &rarr; <strong>Memory</strong>.</li>
                <li>Look at: <strong>In use</strong> vs <strong>Available</strong>. How many GB are currently in use? Look below to see the <strong>Speed</strong> (e.g. 3200 MHz or 5600 MHz) and <strong>Slots used</strong> (e.g. 2 of 4).</li>
              </ol>
            </div>
          </div>

          <h4>Common Beginner Confusion Cleared Up</h4>
          <ul class="styled-list">
            <li><strong>Dual-Channel Rule:</strong> Two 8 GB sticks of RAM (16 GB total) are significantly faster than one single 16 GB stick! Two sticks allow the CPU to read across two 64-bit memory channels simultaneously, doubling memory bandwidth!</li>
            <li><strong>DDR4 vs DDR5:</strong> DDR5 is the newer standard with speeds exceeding 5600–7200 MHz compared to DDR4's 3200 MHz. The sticks have notches in different physical locations, so you cannot plug DDR5 into a DDR4 motherboard.</li>
          </ul>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li><strong>RAM</strong> is temporary, ultra-fast volatile working space; <strong>Storage</strong> is permanent, non-volatile filing.</li>
            <li>When RAM runs out, the OS dumps data to disk (Virtual Memory / Paging), which causes noticeable stuttering and lag.</li>
            <li>For 2026, <strong>16 GB of RAM</strong> is the ideal gold standard for general computing and multitasking.</li>
            <li>Unused RAM is wasted RAM — modern operating systems use free RAM to pre-cache apps for speed.</li>
          </ul>
`;

// -----------------------------------------------------------------------------
// Lesson 2.3: Storage Deep Dive: HDDs, SATA SSDs & NVMe M.2
// -----------------------------------------------------------------------------
COURSE_DATA.modules[1].lessons[2].readTime = "22 min read";
COURSE_DATA.modules[1].lessons[2].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 1 • Week 4 • Lesson 2.3</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Spend 1-2 days studying drive technologies, flash memory physics, and storage maintenance.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Contrast mechanical spinning hard drives (HDDs) with Solid State Drives (SSDs).</li>
              <li>Understand the speed differences between SATA SSDs (550 MB/s) and NVMe M.2 SSDs (7,000 MB/s).</li>
              <li>Learn how NAND flash memory traps electrons in microscopic gates without battery power.</li>
              <li>Understand drive lifespan metrics: TBW (Terabytes Written) and MTBF.</li>
              <li>Discover why you must NEVER defragment a Solid State Drive.</li>
            </ul>
          </div>

          <h3>The Storage Revolution: Moving Beyond Spinning Rust</h3>
          <p>For over 50 years, computer storage was mechanical. Inside the computer was a heavy metal enclosure containing magnetic glass or aluminum platters spinning at thousands of revolutions per minute. Over the past decade, a quiet revolution took place: mechanical spinning disks were completely replaced by microscopic silicon chips with zero moving parts.</p>

          <h4>1. Mechanical Hard Disk Drives (HDDs)</h4>
          <p>An HDD operates almost identically to a miniature, high-tech vinyl record player:</p>
          <ul class=\"styled-list\">
            <li>It contains circular aluminum or glass platters coated in magnetic material spinning at <strong>5,400 or 7,200 RPM</strong> (Revolutions Per Minute).</li>
            <li>A tiny mechanical read/write arm flies across the surface on a microscopic cushion of air just <strong>3 nanometers</strong> above the spinning platter!</li>
            <li>The tip of the arm magnetizes microscopic patches to represent 1s and 0s.</li>
            <li><strong>The Inherent Flaw: Physical Seek Latency.</strong> If the file you need is on the opposite side of the disk, the physical metal arm must swing across, and the disk must spin around. This takes <strong>10 to 15 milliseconds</strong>. That sounds fast to a human, but when Windows boots up, it must read over 50,000 tiny system files. Multiply 50,000 files by 12 milliseconds = <strong>over 2 to 3 minutes of waiting for your PC to boot!</strong></li>
          </ul>

          <h4>2. Solid State Drives (SSDs) & NAND Flash Silicon</h4>
          <p>An SSD has <strong>zero moving parts</strong>. Inside the drive is a circuit board with rows of black silicon microchips called <strong>NAND Flash Memory</strong>. Instead of magnetizing spinning disks, an SSD stores data by trapping electrons inside microscopic microscopic chambers called <strong>Floating Gate or 3D Charge-Trap Transistors</strong>.</p>

          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Drive Technology</th>
                  <th>Physical Form Factor</th>
                  <th>Sequential Read Speed</th>
                  <th>Random Access Latency</th>
                  <th>Vibration & Drop Resistance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Mechanical HDD</strong></td>
                  <td>3.5-inch or 2.5-inch heavy metal box</td>
                  <td>~120 to 180 MB/s</td>
                  <td>~12 milliseconds (Slow)</td>
                  <td><strong>Fragile:</strong> Dropping an active laptop can destroy the disk instantly!</td>
                </tr>
                <tr>
                  <td><strong>SATA SSD (2.5\")</strong></td>
                  <td>Slim 2.5-inch lightweight metal/plastic case</td>
                  <td>~550 MB/s (4x faster)</td>
                  <td>~0.05 milliseconds (Fast)</td>
                  <td>Immune to physical drops and vibrations.</td>
                </tr>
                <tr>
                  <td><strong>NVMe PCIe M.2 SSD</strong></td>
                  <td>Tiny circuit stick (size of a stick of chewing gum)</td>
                  <td><strong>3,500 to 7,500 MB/s (50x faster!)</strong></td>
                  <td><strong>~0.02 milliseconds (Instant!)</strong></td>
                  <td>Immune to physical drops and vibrations.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- THE SIGNATURE CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! How Can an SSD Remember My Photos for 10 Years Without Any Battery or Electric Power?!"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                In RAM, memory disappears the second power is cut because electric charge immediately leaks away. How does an SSD keep data frozen in place for a decade when sitting in a drawer?
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                The answer is <strong>Quantum Tunneling and Electrical Isolation Chambers</strong>:
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                Inside each microscopic NAND memory cell is a tiny chamber called a <em>Floating Gate</em>. This chamber is completely surrounded on all four sides by an impenetrable microscopic insulator layer made of silicon dioxide (glass).
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                When you save a file, the SSD applies a strong 20-volt electrical push that forces electrons to jump across the insulator into the chamber. Once inside, the voltage is removed. <strong>The electrons are physically trapped inside a microscopic glass prison!</strong> They have nowhere to leak out. Even with zero power, those trapped electrons remain preserved for years. When the computer reads the cell, the trapped charge blocks or allows electrical current, reading it as a 1 or a 0!
              </p>
            </div>
          </div>

          <h4>Why NVMe M.2 is Blazing Fast Compared to SATA</h4>
          <p>Early SSDs were forced to connect through older <strong>SATA (Serial ATA) cables</strong>, which were originally engineered for slow mechanical hard drives in the year 2000. SATA cables capped speeds at about 550 MB/s.</p>
          <p><strong>NVMe (Non-Volatile Memory Express)</strong> threw out the old cables completely. An NVMe SSD is a tiny bare circuit stick (form factor <strong>M.2 2280</strong>) that screws directly into the motherboard. It communicates across <strong>PCIe (Peripheral Component Interconnect Express) lanes</strong> directly to the CPU, unlocking staggering speeds of <strong>3,500 to 14,000 MB/s</strong>!</p>

          <!-- THE DEFRAG WARNING CALLOUT -->
          <div class="callout warning" style="margin: 24px 0; border-left: 4px solid #ef4444; background: rgba(239, 68, 68, 0.08);">
            <span class="callout-icon">⚠️</span>
            <div>
              <strong style="font-size: 1.08rem; color: #dc2626;">CRITICAL RULE: NEVER Defragment a Solid State Drive!</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                On old mechanical hard drives, files would get broken up into scattered clusters across the spinning disk (fragmentation). A utility called \"Disk Defragmenter\" would rearrange the files consecutively so the mechanical arm wouldn't have to jump around.
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                <strong>Why defragging kills an SSD:</strong>
              </p>
              <ul class="styled-list">
                <li>Because an SSD has zero moving parts, reading a file scattered across 5,000 different chips takes the <strong>exact same speed</strong> as reading contiguous data (0.02 milliseconds)! Defragmenting provides 0.0% speed gain.</li>
                <li>Each NAND flash cell can only be written to a finite number of times (typically 1,000 to 3,000 write cycles) before the microscopic insulator wears out. Defragmenting an SSD forces hundreds of gigabytes of unnecessary rewrites, wearing out your drive years ahead of its time!</li>
              </ul>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                Modern Windows handles SSDs using <strong>TRIM (Optimize Drives)</strong> instead, which tells the SSD which deleted blocks are empty so the drive can clean them up in the background.
              </p>
            </div>
          </div>

          <div class="callout tip">
            <span class="callout-icon">🎯</span>
            <div>
              <strong>Hands-On Storage Detective Activity:</strong><br>
              Find out if your computer is running on an HDD or SSD without opening the case!
              <ol style="margin-top:6px; padding-left:18px;">
                <li>Press <kbd>Win</kbd> + <kbd>S</kbd> to open Search, type <code>Defragment and Optimize Drives</code>, and press <kbd>Enter</kbd>.</li>
                <li>Look at the <strong>Media type</strong> column next to drive C:</li>
                <li>Does it say <strong>Solid state drive</strong> or <strong>Hard disk drive</strong>? Notice that Windows automatically runs TRIM optimization on SSDs!</li>
              </ol>
            </div>
          </div>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li><strong>HDDs</strong> use mechanical spinning magnetic disks; they are slow and vulnerable to physical shock, but offer cheap bulk storage.</li>
            <li><strong>SSDs</strong> use NAND flash memory with zero moving parts, delivering instant access and extreme shock resistance.</li>
            <li><strong>NVMe M.2 SSDs</strong> communicate directly over PCIe lanes, achieving speeds over 7,000 MB/s and booting Windows in 6 seconds.</li>
            <li><strong>Never defragment an SSD</strong>; modern systems use the TRIM command to manage flash memory health.</li>
          </ul>
`;

// -----------------------------------------------------------------------------
// Lesson 2.4: The Motherboard, Power Supply (PSU) & Graphics Cards (GPU)
// -----------------------------------------------------------------------------
COURSE_DATA.modules[1].lessons[3].readTime = "22 min read";
COURSE_DATA.modules[1].lessons[3].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 1 • Week 4 • Lesson 2.4</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Spend 1-2 days learning about motherboards, electrical safety, and graphics hardware.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Identify the motherboard as the central communications highway and nervous system.</li>
              <li>Understand the Power Supply Unit (PSU) and 80-Plus electrical efficiency ratings.</li>
              <li>Differentiate between Integrated Graphics (iGPU) and Dedicated Graphics Cards (dGPU).</li>
              <li>Learn what Video RAM (VRAM) is and why 3D gaming and Artificial Intelligence require it.</li>
              <li>Solve the mystery: What happens if you plug an 850W power supply into a 300W computer?</li>
            </ul>
          </div>

          <h3>The Supporting Powerhouse: The Other Essential Hardware</h3>
          <p>While the CPU and RAM get the lion's share of attention, they cannot operate in a vacuum. Three other critical hardware components make personal computing possible: the <strong>Motherboard</strong> that connects every part together, the <strong>Power Supply Unit (PSU)</strong> that feeds clean electricity, and the <strong>Graphics Card (GPU)</strong> that renders visual imagery on your monitor.</p>

          <h4>1. The Motherboard: The Highway & Nervous System</h4>
          <p>The motherboard (also known as the mainboard or logic board) is the large printed circuit board (PCB) anchored to the bottom or side of the computer chassis. If you look at its surface, you will see thousands of microscopic copper traces running across multiple fiberglass layers like superhighways. These are <strong>data buses</strong> carrying binary pulses at near the speed of light.</p>

          <div class="component-cards-container">
            <div class="comp-box">
              <div class="comp-header">
                <span class="comp-badge">Hardware Sockets</span>
                <h4>Key Motherboard Components</h4>
              </div>
              <ul class="styled-list">
                <li><strong>CPU Socket:</strong> The central clamping bracket with thousands of gold pins where the processor sits (e.g. Intel LGA1700 or AMD AM5).</li>
                <li><strong>RAM DIMM Slots:</strong> Spring-locked slots where memory sticks click into place.</li>
                <li><strong>PCIe x16 Slot:</strong> The reinforced long expansion slot where your heavy dedicated graphics card plugs in.</li>
                <li><strong>M.2 Slots:</strong> Ultra-compact slots with metal heat spreaders for NVMe SSDs.</li>
                <li><strong>VRMs (Voltage Regulator Modules):</strong> Powerful electronic circuitry that cleans wall electricity and steps it down into the gentle, precise 1.2V DC needed by the CPU.</li>
              </ul>
            </div>

            <div class="comp-box">
              <div class="comp-header">
                <span class="comp-badge">Electrical Engine</span>
                <h4>The Power Supply Unit (PSU)</h4>
              </div>
              <p>Your wall outlet provides 110V or 230V Alternating Current (AC). If you fed that raw wall power into a delicate computer microchip, it would instantly vaporize into smoke!</p>
              <p>The <strong>Power Supply Unit (PSU)</strong> is a heavy shielded metal enclosure that converts volatile wall AC power into clean, steady Direct Current (DC) at +12V (for CPU/GPU), +5V, and +3.3V (for chips and drives).</p>
            </div>
          </div>

          <!-- THE SIGNATURE CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! If My Computer Only Needs 350 Watts, What Happens If I Plug In an 850 Watt Power Supply? Will It Fry My Computer or Waste Expensive Electricity?!"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                The answer is: <strong>No! It is 100% safe, and will NOT waste electricity!</strong>
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                This comes down to a fundamental rule of electrical physics: <strong>Components PULL power; power supplies do not PUSH power!</strong>
              </p>
              <ul class="styled-list">
                <li>Think of your wall electrical socket in your living room. That wall socket can deliver 1,800 Watts of electricity.</li>
                <li>When you plug in a tiny 5-Watt nightlight, does the nightlight explode? No! The nightlight only pulls the 5 Watts it needs.</li>
              </ul>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                An \"850-Watt PSU\" simply means it has the <em>maximum capacity</em> to deliver up to 850W if demanded. If your PC only needs 300W while browsing the web, the PSU only draws ~330W from your wall. In fact, having extra headroom is great because power supplies run cooler and quieter when not stressed at 100% capacity!
              </p>
            </div>
          </div>

          <h4>Understanding the 80-Plus Efficiency Standard</h4>
          <p>When converting AC wall electricity to DC power, some energy is lost as heat. Cheap, uncertified power supplies waste up to 40% of your power as heat and can fail catastrophically during power surges, frying your motherboard!</p>
          <p>Always choose a power supply with an independent <strong>80-Plus Certification</strong> badge:</p>

          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Badge Rating</th>
                  <th>Minimum Efficiency at 50% Load</th>
                  <th>Electricity Wasted as Heat</th>
                  <th>Recommendation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>80-Plus White</strong></td>
                  <td>80%</td>
                  <td>20% wasted heat</td>
                  <td>Budget systems only</td>
                </tr>
                <tr>
                  <td><strong>80-Plus Bronze</strong></td>
                  <td>85%</td>
                  <td>15% wasted heat</td>
                  <td>Great standard for entry-level gaming & office PCs</td>
                </tr>
                <tr>
                  <td><strong>80-Plus Gold</strong></td>
                  <td><strong>90%</strong></td>
                  <td><strong>10% wasted heat</strong></td>
                  <td><strong>The Gold Standard:</strong> Best balance of price, durability, and low electric bills.</td>
                </tr>
                <tr>
                  <td><strong>80-Plus Platinum / Titanium</strong></td>
                  <td>92% to 94%+</td>
                  <td>Under 6% wasted heat</td>
                  <td>High-end workstations running 24/7 rendering or servers.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4>Integrated Graphics (iGPU) vs Dedicated Graphics (dGPU)</h4>
          <div class="comparison-grid">
            <div class="compare-card good">
              <h5>Integrated Graphics (iGPU)</h5>
              <p>The graphics processor is etched directly onto the main CPU chip (such as Intel UHD, Intel Iris Xe, or AMD Radeon 780M).</p>
              <ul class="styled-list">
                <li><strong>Cost & Power:</strong> Included for free with the CPU. Draws minimal battery power (5–15W) and generates almost no heat.</li>
                <li><strong>Memory:</strong> Has no memory of its own; it steals a portion of your main system RAM.</li>
                <li><strong>Ideal For:</strong> Thin laptops, office productivity, 4K YouTube streaming, Zoom calls, and everyday web apps.</li>
              </ul>
            </div>
            <div class="compare-card bad" style="background:var(--bg-surface-alt); border-color:var(--border-medium);">
              <h5 style="color:var(--primary);">Dedicated Graphics Card (dGPU)</h5>
              <p>A separate, massive expansion card with its own specialized processor chip (NVIDIA GeForce RTX or AMD Radeon RX).</p>
              <ul class="styled-list">
                <li><strong>Massive Parallel Power:</strong> Contains thousands of specialized calculation cores (ALUs) working simultaneously.</li>
                <li><strong>VRAM (Video RAM):</strong> Features 8 GB to 24 GB of ultra-fast dedicated GDDR6 memory to hold 3D textures, geometry, and AI neural weights.</li>
                <li><strong>Ideal For:</strong> High-FPS 3D gaming, professional 4K/8K video rendering, 3D modeling, and Artificial Intelligence (machine learning).</li>
              </ul>
            </div>
          </div>

          <h4>Walkthrough: How a GPU Renders One Frame in a 3D Game</h4>
          <div class="steps-grid">
            <div class="step-card">
              <div class="step-num">1</div>
              <h5>1. 3D Wireframe Mesh</h5>
              <p>The game engine constructs characters and buildings out of millions of microscopic 3D geometric triangles (polygons).</p>
              <span class="step-example">Mathematical 3D coordinates in space.</span>
            </div>
            <div class="step-card">
              <div class="step-num">2</div>
              <h5>2. Texture Mapping</h5>
              <p>The GPU wraps photorealistic 2D image skins (brick walls, character skin, leather jackets) from VRAM onto those triangles.</p>
              <span class="step-example">Textures fetched at 500 GB/sec from VRAM.</span>
            </div>
            <div class="step-card">
              <div class="step-num">3</div>
              <h5>3. Lighting & Ray Tracing</h5>
              <p>The GPU calculates how light rays bounce off metal, glass, and water puddles, casting realistic soft shadows.</p>
              <span class="step-example">Billions of ray calculations per second.</span>
            </div>
            <div class="step-card">
              <div class="step-num">4</div>
              <h5>4. Pixel Rasterization</h5>
              <p>The GPU converts that 3D world into a flat 2D grid of 2 million pixels (1080p) or 8 million pixels (4K) and sends it to your monitor!</p>
              <span class="step-example">Repeated 60 to 144 times every second!</span>
            </div>
          </div>

          <div class="callout tip">
            <span class="callout-icon">🎯</span>
            <div>
              <strong>Hands-On Inspection: Where Does Your Monitor Plug In?</strong><br>
              Look at the back of your desktop computer tower. There are two different places where video ports exist:
              <ol style="margin-top:6px; padding-left:18px;">
                <li><strong>The Motherboard Ports (High up on the back):</strong> These connect to your CPU's integrated graphics.</li>
                <li><strong>The Dedicated GPU Ports (Lower down, horizontal metal bracket):</strong> These connect to your powerful dedicated graphics card.</li>
                <li><strong>Classic Beginner Blunder:</strong> If you bought an expensive gaming PC with an RTX graphics card, but plugged your monitor cable into the top motherboard port, your games will run like slow slideshows because the expensive GPU is sitting completely unused! Always plug your monitor into the lower horizontal GPU ports!</li>
              </ol>
            </div>
          </div>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li>The <strong>Motherboard</strong> unites the CPU, RAM, storage, and expansion cards via high-speed PCIe and memory buses.</li>
            <li>The <strong>PSU</strong> safely transforms AC wall power into clean DC power; always prioritize 80-Plus Gold certification.</li>
            <li>Components pull power on demand; a higher wattage power supply does not push unnecessary electricity or cause damage.</li>
            <li><strong>iGPUs</strong> are efficient and built into the CPU; <strong>dGPUs</strong> are powerhouse dedicated cards with specialized VRAM for 3D and AI.</li>
          </ul>
`;

// -----------------------------------------------------------------------------
// Lesson 2.5: The Complete Visual Guide to Ports, Cables & Plugs
// -----------------------------------------------------------------------------
COURSE_DATA.modules[1].lessons[4].readTime = "22 min read";
COURSE_DATA.modules[1].lessons[4].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 1 • Week 4 • Lesson 2.5</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Take 1 day to inspect and identify all physical ports and cables on your computer and devices.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Identify every common physical port and connector found on modern computers.</li>
              <li>Differentiate between USB Type-A, Type-B, Micro-USB, and reversible USB Type-C.</li>
              <li>Understand the difference between standard USB-C and ultra-high-speed Thunderbolt 4.</li>
              <li>Compare HDMI and DisplayPort video standards for monitors and TVs.</li>
              <li>Explain why a wired Ethernet (RJ-45) cable always beats Wi-Fi for stability and gaming.</li>
              <li>Solve the mystery: Why do two identical-looking USB-C cables charge or transfer at wildly different speeds?</li>
            </ul>
          </div>

          <h3>The Outside World: Ports, Cables & Connectors</h3>
          <p>Look at the sides of your laptop or the back panel of your desktop computer. You will see a variety of rectangular, oval, and circular openings. Each of these ports is a precision-engineered physical interface designed to transfer data, high-definition video, multi-channel audio, or high-wattage electrical power between devices.</p>

          <h4>1. Universal Serial Bus (USB): The Universal Standard</h4>
          <p>Before USB was invented in 1996, the back of a computer was an intimidating maze of incompatible plugs: serial mouse ports, parallel printer ports, DIN keyboard plugs, and joystick gameports. USB unified them all under one standard.</p>

          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Port Type</th>
                  <th>Physical Shape</th>
                  <th>Transfer Speed</th>
                  <th>Key Characteristics</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>USB Type-A</strong></td>
                  <td>Classic rectangular slot</td>
                  <td>USB 2.0 (480 Mbps / black) or USB 3.0 (5 Gbps / blue)</td>
                  <td>Non-reversible (must insert the right way up). The most common connector for mice, keyboards, and flash drives.</td>
                </tr>
                <tr>
                  <td><strong>USB Type-C</strong></td>
                  <td>Slim oval pill shape</td>
                  <td>10 Gbps to 20 Gbps (USB 3.2 / USB4)</td>
                  <td><strong>Fully Reversible:</strong> Plugs in upside down or right side up! Can deliver up to 240 Watts of power to charge laptops and carry video!</td>
                </tr>
                <tr>
                  <td><strong>Thunderbolt 4 / 5</strong></td>
                  <td>Identical oval shape to USB-C (marked with a lightning bolt ⚡)</td>
                  <td><strong>40 Gbps to 80 Gbps!</strong></td>
                  <td>Direct PCIe extension cable connecting dual 4K/8K monitors, external desktop GPUs (eGPUs), and lightning-fast studio drive arrays.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- THE SIGNATURE CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! All USB-C Cables Look Identical on the Outside! Why Does One Cable Charge My Laptop in 45 Minutes While Another Takes 8 Hours, and Another Won't Show Video on My Monitor?!"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                This is the single biggest source of consumer frustration in modern technology.
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                <strong>USB-C is just the physical shape of the plastic and metal plug. What is hidden INSIDE the wire makes all the difference:</strong>
              </p>
              <ul class="styled-list">
                <li><strong>Cheap $3 Phone Cable:</strong> Contains only 4 thin copper wires. It only supports slow 10-Watt charging and ancient USB 2.0 data speeds (480 Mbps). It contains <strong>zero video wires</strong>, so plugging it into an external monitor will display a blank screen!</li>
                <li><strong>100W/240W Fast Charging Cable:</strong> Contains an internal computer microchip inside the plug called an <strong>E-Marker (Electronic Marker)</strong>. It safely negotiates with your laptop charger: <em>\"I am rated to safely carry 20 Volts at 5 Amps without catching fire!\"</em></li>
                <li><strong>Full-Featured Thunderbolt / USB4 Cable:</strong> Contains 24 micro-coaxial wires carrying power, high-speed data, and multiple DisplayPort video streams simultaneously.</li>
              </ul>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                <strong>Rule of thumb:</strong> Look for official wattage and speed labels (e.g. \"100W 40Gbps\") printed on the cable jacket or connector head!
              </p>
            </div>
          </div>

          <h4>2. Video Display Cables: HDMI vs. DisplayPort</h4>
          <div class="comparison-grid">
            <div class="compare-card good">
              <h5>HDMI (High-Definition Multimedia Interface)</h5>
              <p>The universal standard found on every television, game console (PlayStation, Xbox), soundbar, and laptop.</p>
              <ul class="styled-list">
                <li><strong>Plug Shape:</strong> Trapezoid with two chamfered bottom corners. Friction fit (no latch).</li>
                <li><strong>Audio & Video:</strong> Transmits uncompressed high-def video and multi-channel Dolby Atmos sound over a single cable.</li>
                <li><strong>HDMI 2.1:</strong> Supports up to 4K resolution at 120Hz or 8K at 60Hz. Features <strong>eARC (Enhanced Audio Return Channel)</strong> to send TV audio back to home theater receivers.</li>
              </ul>
            </div>
            <div class="compare-card bad" style="background:var(--bg-surface-alt); border-color:var(--border-medium);">
              <h5 style="color:var(--primary);">DisplayPort (DP)</h5>
              <p>The gold standard for computer desktop monitors, PC gamers, and multi-monitor productivity.</p>
              <ul class="styled-list">
                <li><strong>Plug Shape:</strong> Rectangular with one corner cut off. Features a <strong>physical locking latch</strong> so the cable cannot be yanked out by accident!</li>
                <li><strong>PC Features:</strong> Supports higher refresh rates (144Hz, 240Hz, 360Hz), variable refresh rate tech (NVIDIA G-Sync and AMD FreeSync), and <strong>Daisy-Chaining (MST)</strong> to connect two monitors with one cable!</li>
              </ul>
            </div>
          </div>

          <h4>3. Network & Audio Connectors</h4>
          <ul class="styled-list">
            <li><strong>Ethernet (RJ-45):</strong> The clear plastic modular connector that clicks into your router. Wired Ethernet cables (Cat 6 / Cat 6a) deliver guaranteed gigabit speeds, zero radio interference, and rock-solid 1ms latency that Wi-Fi can never match.</li>
            <li><strong>3.5mm Headphone Audio Jack:</strong> Look at the metal plug tip. If it has <strong>2 black insulator rings (TRS)</strong>, it carries left and right stereo audio only. If it has <strong>3 black insulator rings (TRRS)</strong>, the third ring carries your microphone voice signal!</li>
          </ul>

          <div class="callout tip">
            <span class="callout-icon">🎯</span>
            <div>
              <strong>Hands-On Cable Audit Activity:</strong><br>
              Look at the charging cable for your smartphone or laptop right now.
              <ol style="margin-top:6px; padding-left:18px;">
                <li>What connector does it have on both ends? (e.g. USB-A to USB-C, or USB-C to USB-C).</li>
                <li>Is there a lightning bolt icon ⚡ or wattage number printed on either plug?</li>
                <li>Inspect your headphone plug: does it have 2 black rings or 3 black rings?</li>
              </ol>
            </div>
          </div>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li><strong>USB-C</strong> is the modern universal reversible connector, but cable capabilities (power vs data vs video) vary based on internal wiring and E-Marker chips.</li>
            <li><strong>Thunderbolt 4</strong> uses the USB-C physical shape to deliver unmatched 40 Gbps bandwidth and dual-monitor support.</li>
            <li><strong>HDMI</strong> is the king of living room TVs and consoles; <strong>DisplayPort</strong> is the king of high-refresh desktop PC gaming monitors.</li>
            <li><strong>Wired Ethernet (Cat 6)</strong> provides the fastest, most reliable connection for online gaming, large downloads, and video calls.</li>
          </ul>
`;

console.log('Module 2 enriched!');

const updatedContent = 'const COURSE_DATA = ' + JSON.stringify(COURSE_DATA, null, 2) + ';\n';
fs.writeFileSync(courseDataPath, updatedContent, 'utf8');
console.log('Updated courseData.js successfully with Module 2 enrichments!');
