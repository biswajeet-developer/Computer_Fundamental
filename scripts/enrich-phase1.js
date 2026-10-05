// scripts/enrich-phase1.js
// Enriches Phase 1 (Modules 1, 2, 3) with Lesson 1.2's signature deep, patient, step-by-step structure:
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

// Load data into environment
eval(fileContent.replace('const COURSE_DATA', 'global.COURSE_DATA'));

console.log('Loaded COURSE_DATA. Total modules:', COURSE_DATA.modules.length);

// -----------------------------------------------------------------------------
// MODULE 1 ENRICHMENTS (Lessons 1.1, 1.3, 1.4) - 1.2 is already the benchmark!
// -----------------------------------------------------------------------------

// Lesson 1.1: What Exactly is a Computer? The IPO+S Engine
COURSE_DATA.modules[0].lessons[0].readTime = "18 min read";
COURSE_DATA.modules[0].lessons[0].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 1 • Week 1 • Lesson 1.1</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Take 1-2 days to absorb this foundation and complete the real-world reflection activity.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Define what a computer is at its most fundamental, physical and scientific level.</li>
              <li>Differentiate between raw Data and meaningful Information with everyday relatable examples.</li>
              <li>Master the 4 stages of the universal IPO+S cycle (Input, Processing, Output, Storage).</li>
              <li>Trace how an everyday ATM cash machine or microwave operates on the exact same principles as a supercomputer.</li>
              <li>Debunk the myth that computers possess "intelligence" or human-like common sense.</li>
            </ul>
          </div>

          <h3>Welcome to Computing: Starting from Absolute Ground Zero</h3>
          <p>If you have ever felt intimidated by technology or felt that everyone else understands computers while you were left behind, take a deep breath: <strong>you are in the exact right place</strong>. In this masterclass, we assume you know absolutely nothing about computers. We will never use technical jargon without first defining it in plain, simple English with relatable real-world analogies.</p>

          <h4>What is a Computer, Really?</h4>
          <p>Strip away the plastic casing, the glowing glass screens, the keyboards, and fancy brand names like Apple, Dell, or Microsoft. At its most fundamental scientific level:</p>
          <div class="callout note">
            <span class="callout-icon">📖</span>
            <div>
              <strong>The Universal Scientific Definition:</strong><br>
              A <strong>computer</strong> is an electronic machine that accepts raw facts and signals from the outside world (<strong>Input</strong>), follows a list of strict mathematical instructions to calculate and process those facts (<strong>Processing</strong>), delivers the useful result to you (<strong>Output</strong>), and remembers the result for later (<strong>Storage</strong>).
            </div>
          </div>

          <p>Notice something crucial: a computer cannot "think" creatively like a human. A computer does not possess emotions, intuition, common sense, or imagination. A computer is essentially an extraordinarily fast calculator that follows rules with absolute, unflinching precision. If you give it good instructions, it produces wonders. If you give it flawed instructions, it produces errors at the speed of light!</p>

          <h4>Data vs. Information: The Kitchen Food Analogy</h4>
          <p>To understand computing, you must first master the difference between two words that people constantly mix up in conversation: <strong>Data</strong> and <strong>Information</strong>.</p>

          <div class="comparison-grid">
            <div class="compare-card good">
              <h5>Raw Data (The Raw, Uncooked Ingredients)</h5>
              <p>Data consists of raw, unorganized, isolated facts and numbers with zero context.</p>
              <p><strong>Example:</strong> Imagine someone walks up to you and says three disconnected words: <code>104</code>, <code>Fever</code>, <code>Baby</code>.</p>
              <p>Those words are raw data. By themselves, they are disjointed pieces of a puzzle. Is 104 a room number? A highway? A pulse rate? You cannot take action yet.</p>
            </div>
            <div class="compare-card bad" style="background:var(--bg-surface-alt); border-color:var(--border-medium);">
              <h5 style="color:var(--primary);">Meaningful Information (The Prepared Meal)</h5>
              <p>Information is data that has been collected, processed, organized, and given meaning so humans can take decisive action.</p>
              <p><strong>Example:</strong> The hospital monitor analyzes the data and displays: <em>"Emergency: Patient Baby Emma has a severe body temperature of 104°F and requires immediate medical attention!"</em></p>
              <p>Now you have meaningful information that can save a human life!</p>
            </div>
          </div>

          <h4>The Universal 4-Step Cycle: IPO+S Architecture</h4>
          <p>Whether you are using a smartphone in your pocket, an ATM dispensing cash at your bank, a digital microwave in your kitchen, or a million-dollar supercomputer predicting hurricanes, <strong>every single computer follows the exact same 4-stage loop</strong>:</p>

          <div class="steps-grid">
            <div class="step-card">
              <div class="step-num">1</div>
              <h5>Stage 1: Input</h5>
              <p>The computer is blind and deaf until the outside world provides it with data. Input devices capture human actions (a keystroke, a finger tap, a spoken word) and translate them into tiny pulses of electricity.</p>
              <span class="step-example">Real Example: You press the letter "M" on your physical keyboard.</span>
            </div>
            <div class="step-card">
              <div class="step-num">2</div>
              <h5>Stage 2: Processing</h5>
              <p>The Central Processing Unit (CPU) receives the electrical pulses. It looks up what instruction corresponds to that action, calculates the math, and determines what must happen next.</p>
              <span class="step-example">Real Example: The CPU calculates which pixels on the screen must change color to draw the letter "M".</span>
            </div>
            <div class="step-card">
              <div class="step-num">3</div>
              <h5>Stage 3: Output</h5>
              <p>The computer translates its internal electrical calculations back into human-understandable physical phenomena: visible light on a display, sound waves from a speaker, or physical ink sprayed onto paper.</p>
              <span class="step-example">Real Example: The black letter "M" appears on your bright screen.</span>
            </div>
            <div class="step-card">
              <div class="step-num">4</div>
              <h5>Stage 4: Storage</h5>
              <p>If you turn off the computer right now, will your work vanish? Processing memory (RAM) forgets everything when power is cut. Therefore, the computer writes the data into permanent storage (SSD or Hard Disk) so it remains preserved forever.</p>
              <span class="step-example">Real Example: You click Save, writing your essay to your internal drive.</span>
            </div>
          </div>

          <!-- THE LESSON 1.2 SIGNATURE CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! Is My Digital Microwave or Modern Car Really a Computer? It Doesn't Have a Mouse or Windows!"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                Yes! Absolutely. This is one of the most common misunderstandings in technology. People think a computer must look like a laptop with a keyboard and screen.
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                In computer science, we divide computers into two categories:
              </p>
              <ul class="styled-list">
                <li><strong>General-Purpose Computers:</strong> Your laptop, desktop, iPad, or smartphone. You can install thousands of different programs on them to play games, write essays, or edit photos.</li>
                <li><strong>Embedded Computers (Microcontrollers):</strong> The tiny computing chip inside your microwave, washing machine, car anti-lock brakes (ABS), or digital elevator. It has only one dedicated job for its entire lifespan.</li>
              </ul>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                Look at your microwave through the IPO+S lens: You punch the buttons for <em>2:00 minutes</em> (<strong>Input</strong>). The chip counts down 120 seconds and monitors safety door sensors (<strong>Processing</strong>). The microwave turns on the magnetron to heat food, spins the glass platter, and emits a loud beep when done (<strong>Output</strong>). It remembers your favorite defrost settings in its internal chip (<strong>Storage</strong>). It is 100% a computer!
              </p>
            </div>
          </div>

          <h4>Walkthrough: How a Bank ATM Executes the 4 Steps</h4>
          <p>Next time you withdraw cash from a bank ATM, watch the 4 stages happen right before your eyes:</p>
          <div class="steps-grid">
            <div class="step-card">
              <div class="step-num">1</div>
              <h5>1. Input</h5>
              <p>You insert your plastic debit card into the slot. The chip reader reads your card account number, and you type your secret 4-digit PIN on the keypad.</p>
              <span class="step-example">Data captured: Account #48291, PIN: ****, Requested Amount: $100</span>
            </div>
            <div class="step-card">
              <div class="step-num">2</div>
              <h5>2. Processing</h5>
              <p>The ATM computer contacts the secure bank central server over encrypted wires. It calculates: <em>Does the PIN match? Does the account have at least $100? Is today's withdrawal limit exceeded?</em></p>
              <span class="step-example">Calculation: $850 balance &minus; $100 = $750 remaining balance. Approved!</span>
            </div>
            <div class="step-card">
              <div class="step-num">3</div>
              <h5>3. Output</h5>
              <p>The machine mechanically counts out five crisp $20 bills, opens the motorized cash shutter, displays a receipt on the screen, and prints a paper slip.</p>
              <span class="step-example">Physical phenomena: Cash dispensed, display updated, thermal paper printed.</span>
            </div>
            <div class="step-card">
              <div class="step-num">4</div>
              <h5>4. Storage</h5>
              <p>The ATM database writes an immutable permanent transaction log to its internal drive and updates the bank's central ledger so you cannot withdraw that same $100 twice!</p>
              <span class="step-example">Ledger updated: Transaction ID #90218 permanently recorded.</span>
            </div>
          </div>

          <div class="callout tip">
            <span class="callout-icon">🎯</span>
            <div>
              <strong>Hands-On Practice Activity for Lesson 1.1:</strong><br>
              Look around the room you are currently sitting in. Identify at least <strong>three different devices</strong> that contain an embedded computer (Hint: Look at your television, washing machine, microwave, car dashboard, or digital wristwatch). For each device, write down in your study notes:
              <ol style="margin-top:6px; padding-left:18px;">
                <li>What is its <strong>Input</strong>? (e.g. thermostat temperature dial or buttons).</li>
                <li>What is its <strong>Processing</strong>? (e.g. comparing current room temperature to desired target).</li>
                <li>What is its <strong>Output</strong>? (e.g. triggering the furnace relay switch to blow warm air).</li>
                <li>What is its <strong>Storage</strong>? (e.g. remembering your weekday morning schedule).</li>
              </ol>
            </div>
          </div>

          <h4>Common Beginner Pitfalls & Myths Debunked</h4>
          <ul class="styled-list">
            <li><strong>Myth:</strong> <em>"Computers are smart and can think on their own."</em><br>
            <strong>Reality:</strong> Computers are completely literal rule-followers. If a software programmer writes one tiny punctuation mistake (a missing semicolon or typo), the computer cannot "guess" what was meant and will crash.</li>
            <li><strong>Myth:</strong> <em>"Computers never make mistakes."</em><br>
            <strong>Reality:</strong> Hardware itself is astonishingly reliable, but computers execute human-written code. If human code contains logical flaws ("bugs"), the computer will execute those mistakes flawlessly and repeatedly at lightning speed.</li>
            <li><strong>Myth:</strong> <em>"Only desktop towers and laptops count as computers."</em><br>
            <strong>Reality:</strong> Modern automobiles contain over 100 individual embedded computers controlling everything from fuel injection to lane-assist sensors!</li>
          </ul>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li>A computer is an electronic rule-following machine that executes the 4-stage <strong>IPO+S</strong> loop: Input &rarr; Processing &rarr; Output &rarr; Storage.</li>
            <li><strong>Data</strong> is raw, unorganized facts; <strong>Information</strong> is processed data structured for human decision-making.</li>
            <li>Working memory (RAM) is temporary and forgets when power is cut; Storage (SSD / Hard Drive) is permanent long-term memory.</li>
          </ul>
`;

// Lesson 1.3: How Letters, Numbers, Audio & Images Become Numbers
COURSE_DATA.modules[0].lessons[2].readTime = "22 min read";
COURSE_DATA.modules[0].lessons[2].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 1 • Week 2 • Lesson 1.3</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Take 1-2 days to understand how the real physical world is converted into digital numbers.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Understand standard character encoding tables: ASCII and Unicode UTF-8.</li>
              <li>Explain how RGB (Red, Green, Blue) pixels construct over 16.7 million colors on your monitor.</li>
              <li>Learn how analog sound waves in the air are converted into numbers through digital audio sampling (PCM).</li>
              <li>Master the digital storage measurement ladder from single Bytes up to Terabytes.</li>
              <li>Solve the mystery of why a 1 Terabyte hard drive only shows 931 GB in Windows.</li>
            </ul>
          </div>

          <h3>The Great Translation: Turning Real Life into Numbers</h3>
          <p>In Lesson 1.2, you discovered the biggest secret in computing: <strong>computers only understand binary switches (1s and 0s)</strong>. But when you look at your screen right now, you are reading English letters, admiring colorful icons, and perhaps listening to your favorite song through headphones. How does a machine that can only flip light switches create this rich, colorful, musical human reality?</p>
          <p>The answer is simple: <strong>Through standard lookup tables, matrices of numbers, and mathematical sampling!</strong></p>

          <h4>1. How Text is Stored: ASCII & Unicode</h4>
          <p>A computer chip has no physical concept of the letter "A" or the word "Apple". It only knows numbers. Early computer scientists realized that if everyone agreed on a standardized catalog or "codebook", computers could exchange text without confusion.</p>

          <div class="component-cards-container">
            <div class="comp-box">
              <div class="comp-header">
                <span class="comp-badge">Historical Standard</span>
                <h4>ASCII (American Standard Code for Information Interchange)</h4>
              </div>
              <p>Created in 1963 for early telegraphs and mechanical teletypes. It assigned a number from 0 to 127 to English letters, numbers, and symbols:</p>
              <ul class="styled-list">
                <li>Capital Letter <strong>'A'</strong> is number <code>65</code> (binary: <code>01000001</code>)</li>
                <li>Capital Letter <strong>'B'</strong> is number <code>66</code> (binary: <code>01000010</code>)</li>
                <li>Lowercase Letter <strong>'a'</strong> is number <code>97</code> (binary: <code>01100001</code>)</li>
                <li>Spacebar character is number <code>32</code> (binary: <code>00100000</code>)</li>
                <li>The exclamation point <strong>'!'</strong> is number <code>33</code></li>
              </ul>
              <p>When you press the key 'A', the keyboard sends the number 65. The computer looks up number 65 in its font table and paints the letter 'A' on your screen!</p>
            </div>

            <div class="comp-box">
              <div class="comp-header">
                <span class="comp-badge">Modern Universal Standard</span>
                <h4>Unicode & UTF-8 (The Global Standard)</h4>
              </div>
              <p>English only has 26 letters, but humanity speaks thousands of languages! In the 1990s, ASCII ran out of room. Unicode was born to give every written language on Earth its own universal number catalog:</p>
              <ul class="styled-list">
                <li>Covers Arabic, Chinese, Japanese Kanji, Hindi, Greek, Hebrew, Cyrillic, and ancient Egyptian Hieroglyphs!</li>
                <li>Includes over <strong>3,600 modern emojis</strong>!</li>
                <li>When you send a text with the 😂 laughing emoji, your phone is actually sending Unicode number <code>128514</code>.</li>
                <li>Today, over 98% of the entire World Wide Web uses <strong>UTF-8</strong> encoding.</li>
              </ul>
            </div>
          </div>

          <h4>2. How Images are Stored: The Pixel Grid & RGB Physics</h4>
          <p>If you take a magnifying glass and hold it up to your computer monitor or smartphone, you will see something astonishing: the entire screen is an enormous rectangular grid made of millions of tiny microscopic colored dots called <strong>pixels</strong> (short for <em>Picture Elements</em>).</p>
          <p>A standard high-definition 1080p display contains <strong>1,920 columns</strong> and <strong>1,080 rows</strong> of pixels. Multiply those together: $1920 \times 1080 =$ <strong>2,073,600 individual microscopic dots</strong>!</p>
          <p>Each individual pixel contains 3 tiny sub-lights:</p>
          <ul class=\"styled-list\">
            <li>A <strong>Red (R)</strong> sub-light</li>
            <li>A <strong>Green (G)</strong> sub-light</li>
            <li>A <strong>Blue (B)</strong> sub-light</li>
          </ul>
          <p>By adjusting the brightness of each of these 3 sub-lights on a scale from <strong>0 (completely OFF)</strong> to <strong>255 (maximum brightness)</strong>, the computer can create over <strong>16.7 million distinct colors</strong> ($256 \times 256 \times 256 = 16,777,216$)!</p>

          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Color Name</th>
                  <th>Red Value (0-255)</th>
                  <th>Green Value (0-255)</th>
                  <th>Blue Value (0-255)</th>
                  <th>Resulting Pixel Appearance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Pitch Black</strong></td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>All 3 sub-lights are turned completely off.</td>
                </tr>
                <tr>
                  <td><strong>Pure White</strong></td>
                  <td>255</td>
                  <td>255</td>
                  <td>255</td>
                  <td>All 3 sub-lights shine at maximum power simultaneously.</td>
                </tr>
                <tr>
                  <td><strong>Vibrant Red</strong></td>
                  <td>255</td>
                  <td>0</td>
                  <td>0</td>
                  <td>Only the red sub-light shines.</td>
                </tr>
                <tr>
                  <td><strong>Electric Yellow</strong></td>
                  <td>255</td>
                  <td>255</td>
                  <td>0</td>
                  <td>Red light and Green light blend into vivid Yellow!</td>
                </tr>
                <tr>
                  <td><strong>Deep Sky Blue</strong></td>
                  <td>0</td>
                  <td>150</td>
                  <td>255</td>
                  <td>Medium Green blended with full Blue.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- THE SIGNATURE CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! If a 4K Movie Has 8.3 Million Pixels Changing 60 Times Every Second, That Is 1.5 Gigabytes Every Single Second! Why Doesn't My Internet Crash?"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                You just discovered one of the greatest engineering problems in computing!
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                Let's do the raw math: A 4K screen has 8,294,400 pixels. Each pixel needs 3 bytes for RGB ($8.3 \text{ million} \times 3 = 24.9 \text{ Megabytes}$ per single frame). At 60 frames per second, raw uncompressed 4K video consumes <strong>1,500 Megabytes (1.5 GB) EVERY SECOND</strong>. A 2-hour movie would take over 10,000 Gigabytes! No internet connection on Earth could stream that.
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                How does Netflix stream 4K using only 25 Megabits per second? <strong>Video Compression Algorithms (like MP4, H.264, and AV1)!</strong>
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                Instead of sending all 8 million pixels 60 times a second, the computer looks at two consecutive frames. If a news anchor is talking in front of a blue wall, <em>the blue wall didn't move!</em> The computer only sends the tiny patch of pixels around the anchor's lips moving, and tells your screen: <em>"Keep the blue background exactly the same as last frame!"</em> This shrinks file sizes by over 99% without your eyes noticing!
              </p>
            </div>
          </div>

          <h4>3. How Sound is Stored: Digital Audio Sampling (PCM)</h4>
          <p>Real-world sound is an <strong>analog vibration wave</strong> traveling through physical air molecules. When someone sings or plays guitar, air molecules compress and expand. A microphone diaphragm catches those vibrations and converts them into an undulating continuous electrical wave.</p>
          <p>Because computers cannot store wavy continuous curves, a computer sound card performs <strong>Sampling (Pulse Code Modulation / PCM)</strong>:</p>

          <div class="steps-grid">
            <div class="step-card">
              <div class="step-num">1</div>
              <h5>1. The Sound Wave Hits</h5>
              <p>Your vocal cords push air. The microphone diaphragm vibrates, generating a fluctuating electrical voltage wave.</p>
              <span class="step-example">Analog physical phenomenon in the room.</span>
            </div>
            <div class="step-card">
              <div class="step-num">2</div>
              <h5>2. Taking Rapid Snapshots (Sampling)</h5>
              <p>An Analog-to-Digital Converter (ADC) chip measures the height (voltage) of that wave thousands of times per second.</p>
              <span class="step-example">Standard CD Quality: <strong>44,100 measurements every second (44.1 kHz)</strong>!</span>
            </div>
            <div class="step-card">
              <div class="step-num">3</div>
              <h5>3. Quantizing to Binary Numbers</h5>
              <p>Each measurement is assigned an exact digital number (16-bit precision = values from -32,768 to +32,767).</p>
              <span class="step-example">The wave is now a long list of digital integers stored on disk.</span>
            </div>
            <div class="step-card">
              <div class="step-num">4</div>
              <h5>4. Reversing into Sound Waves</h5>
              <p>When you click Play, your headphones reverse the process: they convert those 44,100 numbers back into voltage pulses that move the speaker magnet, vibrating the air into your eardrums!</p>
              <span class="step-example">Digital numbers become physical acoustic music!</span>
            </div>
          </div>

          <h4>The Digital Measurement Ladder: From Bytes to Terabytes</h4>
          <p>Because computers count in powers of 2, each step up the ladder multiplies by <strong>1,024</strong> (which is $2^{10}$):</p>

          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Unit</th>
                  <th>Exact Size</th>
                  <th>Real-Life Everyday Equivalent</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1 Byte (B)</strong></td>
                  <td>8 bits</td>
                  <td>Exactly one typed letter on your screen (e.g. 'A')</td>
                </tr>
                <tr>
                  <td><strong>1 Kilobyte (KB)</strong></td>
                  <td>1,024 Bytes</td>
                  <td>A 1-page essay in plain text format (~500 words)</td>
                </tr>
                <tr>
                  <td><strong>1 Megabyte (MB)</strong></td>
                  <td>1,024 KB (~1 Million Bytes)</td>
                  <td>One high-resolution smartphone photo or 1 minute of MP3 music</td>
                </tr>
                <tr>
                  <td><strong>1 Gigabyte (GB)</strong></td>
                  <td>1,024 MB (~1 Billion Bytes)</td>
                  <td>About 1 hour of streaming HD movie video, or 300 MP3 songs</td>
                </tr>
                <tr>
                  <td><strong>1 Terabyte (TB)</strong></td>
                  <td>1,024 GB (~1 Trillion Bytes)</td>
                  <td>A modern computer SSD storing ~250,000 photos or 500 hours of video</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- THE 931 GB CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! Why Does My Brand-New 1 Terabyte SSD Show Only 931 GB in Windows? Did the Store Cheat Me?!"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                Almost everyone who buys their first external drive or laptop panics when they plug it in: <em>"Where did 70 Gigabytes of my hard drive go?!"</em>
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                The manufacturer did not cheat you, and your drive is not broken! The mismatch happens because <strong>human drive manufacturers count in powers of 10, but computer operating systems count in powers of 2</strong>:
              </p>
              <ul class="styled-list">
                <li><strong>Drive Manufacturers (Decimal Metric):</strong> Define 1 Terabyte as $1,000 \times 1,000 \times 1,000 \times 1,000 =$ <strong>1,000,000,000,000 Bytes</strong>.</li>
                <li><strong>Windows (Binary System):</strong> Defines 1 Gigabyte as $1,024 \times 1,024 \times 1,024 =$ <strong>1,073,741,824 Bytes</strong>.</li>
              </ul>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                Now divide the manufacturer's bytes by the computer's bytes:<br>
                <code>1,000,000,000,000 ÷ 1,073,741,824 = 931.32 Gigabytes!</code><br>
                Every single byte is there physically; Windows is simply measuring using binary 1,024 increments!
              </p>
            </div>
          </div>

          <div class="callout tip">
            <span class="callout-icon">🎯</span>
            <div>
              <strong>Hands-On Memory Practice Exercise:</strong><br>
              Take your full name (for example, <em>"Alex Rivera"</em>). Count every letter and don't forget the space in the middle!
              <ul style="margin-top:6px; padding-left:18px;">
                <li>Alex Rivera has 11 characters.</li>
                <li>Since 1 character = 1 Byte = 8 bits:</li>
                <li>Your name takes <strong>11 Bytes of memory</strong>, which is exactly <strong>88 binary switches (bits)</strong>!</li>
              </ul>
            </div>
          </div>

          <h4>Common Beginner Confusion Cleared Up</h4>
          <ul class="styled-list">
            <li><strong>Bit (b) vs Byte (B):</strong> Always check the capitalization! Lowercase 'b' means bits (used for internet speeds: 100 Mbps). Uppercase 'B' means Bytes (used for file sizes: 100 MB). Since 1 Byte = 8 bits, divide internet speed by 8 to know your real download speed!</li>
            <li><strong>Emojis are just text:</strong> An emoji is not a JPEG picture file; it is just a 4-byte Unicode number. Your phone's operating system draws the graphic!</li>
          </ul>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li>Text is mapped to numbers using ASCII (historical English) and Unicode UTF-8 (universal global characters & emojis).</li>
            <li>Images are rectangular grids of millions of pixels. Each pixel blends 3 colors: Red, Green, and Blue (0 to 255 brightness).</li>
            <li>Sound is digitized by measuring (sampling) acoustic vibration heights 44,100 times every second.</li>
            <li>Digital storage steps up in multiples of 1,024: Byte &rarr; Kilobyte &rarr; Megabyte &rarr; Gigabyte &rarr; Terabyte.</li>
          </ul>
`;

// Lesson 1.4: How a Computer Boots Up: BIOS, UEFI & Power States
COURSE_DATA.modules[0].lessons[3].readTime = "20 min read";
COURSE_DATA.modules[0].lessons[3].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 1 • Week 2 • Lesson 1.4</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Take 1 day to understand the startup sequence, motherboard firmware, and proper power management.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Trace what happens inside the computer during every second of the startup boot sequence.</li>
              <li>Differentiate between legacy BIOS and modern graphical UEFI firmware.</li>
              <li>Understand the Power-On Self-Test (POST) and what motherboard beep codes mean.</li>
              <li>Master the difference between Sleep, Hibernate, Full Shut Down, and Restart.</li>
              <li>Discover why Windows 11 "Shut Down" doesn't actually restart your computer (Fast Startup).</li>
            </ul>
          </div>

          <h3>The 10-Second Miracle: Pushing the Power Button</h3>
          <p>You walk up to your computer, press the physical power button, and within 10 to 15 seconds, your desktop appears with all your apps ready to use. It seems instantaneous, but behind the scenes, your computer executes millions of diagnostic checks and instructions before handing control over to you. Let's trace this journey step-by-step.</p>

          <h4>Step 1: Electricity Arrives at the Motherboard</h4>
          <p>When you press the power button, a small circuit connects, signaling the Power Supply Unit (PSU) to wake up. The PSU converts wall electricity into steady +12V, +5V, and +3.3V DC power. Once voltages stabilize, the PSU sends a "Power Good" signal to the motherboard. The CPU resets its internal counters and prepares to read its very first instruction.</p>

          <h4>Step 2: Firmware Takes Over (BIOS vs. UEFI)</h4>
          <p>Here is a fundamental computing dilemma: The CPU cannot run Windows, macOS, or Linux yet, because those massive operating systems are stored as cold files on the hard drive or SSD. And the computer doesn't yet know how to read the SSD! How does a computer start when it doesn't even know what hardware it has?</p>
          <p>The answer is <strong>Firmware</strong> — a tiny, permanent computer program burned into a dedicated read-only chip directly on the motherboard.</p>

          <div class="comparison-grid">
            <div class="compare-card bad" style="background:var(--bg-surface-alt); border-color:var(--border-medium);">
              <h5 style="color:var(--primary);">Legacy BIOS (1975–2010)</h5>
              <p><strong>Basic Input/Output System (BIOS):</strong> Old blue-screen text menus. Limited to 16-bit processor mode, slow boot times, and could only recognize hard drives up to 2 Terabytes.</p>
            </div>
            <div class="compare-card good">
              <h5>Modern UEFI (2010–Present)</h5>
              <p><strong>Unified Extensible Firmware Interface (UEFI):</strong> Sleek graphical interface with mouse support. Boots in seconds, supports drives up to 9.4 Zettabytes, and includes <strong>Secure Boot</strong> to block rootkit malware from hijacking the startup process.</p>
            </div>
          </div>

          <!-- THE SIGNATURE CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! What Does 'Bricking' a Computer Mean? Why Do Technicians Warn: NEVER Turn Off Your PC During a BIOS Update?"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                If your Windows or Mac operating system crashes or gets corrupted, you can easily reinstall it using a USB flash drive.
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                However, <strong>UEFI/BIOS firmware is the brain that knows how to read the USB drive in the first place!</strong> If you are updating the motherboard BIOS and the power cuts out halfway through, the firmware chip is left with half-written, garbled code.
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                When you push the power button, the CPU looks for its boot instructions and finds total gibberish. The computer cannot turn on, cannot show an error on screen, and cannot read a USB repair stick. It has literally become as useless as an expensive ceramic brick! (That is where the term <strong>\"bricked\"</strong> comes from). Modern premium motherboards now include a \"BIOS Flashback\" emergency recovery button or dual-BIOS chips to prevent this catastrophe.
              </p>
            </div>
          </div>

          <h4>Step 3: The Power-On Self-Test (POST)</h4>
          <p>Before loading any operating system, the UEFI firmware conducts a rapid health check called <strong>POST (Power-On Self-Test)</strong>:</p>
          <div class="steps-grid">
            <div class="step-card">
              <div class="step-num">1</div>
              <h5>Check 1: CPU Health</h5>
              <p>Is the processor alive, seated properly in its socket, and receiving stable regulated voltage?</p>
              <span class="step-example">Status: OK</span>
            </div>
            <div class="step-card">
              <div class="step-num">2</div>
              <h5>Check 2: RAM Memory</h5>
              <p>Are the memory sticks clicked in securely? Can the memory controller read and write test bits without parity errors?</p>
              <span class="step-example">Status: OK (16 GB Detected)</span>
            </div>
            <div class="step-card">
              <div class="step-num">3</div>
              <h5>Check 3: Video Display</h5>
              <p>Is there a graphics card (GPU) or display output detected so the user can see what is happening?</p>
              <span class="step-example">Status: OK (Display connected)</span>
            </div>
            <div class="step-card">
              <div class="step-num">4</div>
              <h5>Check 4: Storage Drives</h5>
              <p>Are the SSD and keyboard attached? Which drive contains the operating system bootloader?</p>
              <span class="step-example">Status: Bootloader found on NVMe SSD</span>
            </div>
          </div>

          <p>If any test fails (for example, if a stick of RAM came loose during shipping), the computer halts immediately and alerts you:</p>
          <ul class="styled-list">
            <li><strong>Beep Codes:</strong> Older desktops use an internal tiny buzzer (e.g. 1 short beep = All tests passed! 3 short beeps = RAM failure; continuous siren = CPU overheating).</li>
            <li><strong>Diagnostic LEDs:</strong> Modern motherboards have 4 tiny labeled lights (CPU, DRAM, VGA, BOOT). Whichever light stays red tells you which part is broken!</li>
          </ul>

          <h4>Understanding Power States: Sleep vs. Hibernate vs. Shut Down vs. Restart</h4>
          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Power Mode</th>
                  <th>Where is Your Open Work Kept?</th>
                  <th>Power Consumption</th>
                  <th>Wake-Up Speed</th>
                  <th>Best Used For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Sleep Mode</strong></td>
                  <td>Kept in RAM memory</td>
                  <td>Tiny trickle (~1 Watt)</td>
                  <td>Instant (1–2 seconds)</td>
                  <td>Stepping away for lunch, coffee, or between meetings.</td>
                </tr>
                <tr>
                  <td><strong>Hibernate</strong></td>
                  <td>Saved as a file to SSD, then powers completely OFF</td>
                  <td>Zero power (0W)</td>
                  <td>Fast (8–15 seconds)</td>
                  <td>Laptops traveling in backpacks so the battery does not drain overnight.</td>
                </tr>
                <tr>
                  <td><strong>Full Shut Down</strong></td>
                  <td>Erased. All apps closed.</td>
                  <td>Zero power (0W)</td>
                  <td>Full boot (10–20 sec)</td>
                  <td>When moving the PC, cleaning dust, or performing hardware upgrades.</td>
                </tr>
                <tr>
                  <td><strong>Restart</strong></td>
                  <td><strong>Completely flushes RAM and reloads kernel fresh</strong></td>
                  <td>Continuous power</td>
                  <td>Full reboot cycle</td>
                  <td><strong>CRITICAL:</strong> When your PC feels slow, frozen, or after updates. Fixes 90% of computer glitches!</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- THE FAST STARTUP SECRET CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! Why Does Windows 11 'Shut Down' Not Actually Restart My Computer? (The Fast Startup Secret)"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                Have you ever shut down your Windows computer at night, turned it on the next morning, opened Task Manager, and saw: <strong>\"Up Time: 14 Days, 6 Hours\"</strong>?
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                You might wonder: <em>\"Wait, I shut it down every single night! Why does Windows think it has been running for two weeks straight?!\"</em>
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                By default, Windows uses a feature called <strong>Fast Startup</strong>. When you click \"Shut Down\", Windows doesn't actually shut down cleanly. It closes your open apps, but takes the core operating system kernel and hibernates it to your SSD! When you turn it back on, it quickly loads that saved state so your PC boots in 6 seconds.<br>
                <strong>The catch:</strong> Any memory leaks or software bugs from days ago stay frozen in that hibernated state! That is why <strong>clicking \"Restart\" is fundamentally different from clicking \"Shut Down\"</strong>. Restart completely purges RAM and starts Windows completely fresh from scratch!
              </p>
            </div>
          </div>

          <div class="callout tip">
            <span class="callout-icon">🎯</span>
            <div>
              <strong>Hands-On Diagnostic Activity:</strong><br>
              Check your computer's real uptime right now!
              <ol style="margin-top:6px; padding-left:18px;">
                <li>Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Esc</kbd> to launch <strong>Windows Task Manager</strong> (or open <em>Activity Monitor</em> on Mac).</li>
                <li>Click on the <strong>Performance</strong> tab on the left, then click <strong>CPU</strong>.</li>
                <li>Look at the bottom for <strong>Up time (Days:Hours:Minutes)</strong>. Are you surprised by how long your computer has actually been awake?</li>
              </ol>
            </div>
          </div>

          <h4>Common Beginner Confusion Cleared Up</h4>
          <ul class="styled-list">
            <li><strong>Restarting is the ultimate medicine:</strong> Tech support pros always say <em>\"Have you tried turning it off and on again?\"</em> not because they are lazy, but because restarting purges corrupted temporary memory states and re-initializes every device driver cleanly.</li>
            <li><strong>Don't force power off with the button:</strong> Holding the physical power button down cuts power instantly without giving Windows time to save open registry files. Only do this if the computer is 100% frozen!</li>
          </ul>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li>The boot sequence begins with electrical stabilization &rarr; UEFI firmware &rarr; POST diagnostics &rarr; OS bootloader handoff.</li>
            <li>Modern UEFI replaces legacy BIOS with fast boot times, mouse support, and Secure Boot malware protection.</li>
            <li>POST tests CPU, RAM, GPU, and drives before loading Windows; errors produce beep codes or motherboard diagnostic LEDs.</li>
            <li>Sleep keeps data in RAM (instant wake); Hibernate saves data to disk (zero power); Restart fully refreshes the system.</li>
          </ul>
`;

console.log('Module 1 enriched!');

// Save progress to courseData.js
const updatedContent = 'const COURSE_DATA = ' + JSON.stringify(COURSE_DATA, null, 2) + ';\n';
fs.writeFileSync(courseDataPath, updatedContent, 'utf8');
console.log('Updated courseData.js successfully with Module 1 enrichments!');
