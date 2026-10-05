// scripts/enrich-mod3.js
// Enriches Module 3 (Peripherals: Keyboards, Mice, Monitors, Audio & Printers - Lessons 3.1 to 3.4)
// with Lesson 1.2's signature deep, patient, step-by-step structure.

const fs = require('fs');
const path = require('path');

const courseDataPath = path.join(__dirname, '../js/courseData.js');
let fileContent = fs.readFileSync(courseDataPath, 'utf8');

eval(fileContent.replace('const COURSE_DATA', 'global.COURSE_DATA'));

console.log('Enriching Module 3: Peripherals...');

// -----------------------------------------------------------------------------
// Lesson 3.1: Human Input Devices: Keyboards, Mice & Ergonomics
// -----------------------------------------------------------------------------
COURSE_DATA.modules[2].lessons[0].readTime = "22 min read";
COURSE_DATA.modules[2].lessons[0].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 1 • Week 4 • Lesson 3.1</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Take 1-2 days to understand keyboard switch mechanics, optical sensors, and physical ergonomics.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Contrast standard membrane rubber dome keyboards with precision mechanical switch keyboards.</li>
              <li>Identify the 3 major mechanical switch types: Linear (Red), Tactile (Brown), and Clicky (Blue).</li>
              <li>Explain how optical mouse sensors take thousands of photos per second to track motion.</li>
              <li>Understand DPI (Dots Per Inch) sensitivity and mouse polling rate (Hz).</li>
              <li>Master the vital ergonomic standards that prevent Carpal Tunnel Syndrome and Repetitive Strain Injury (RSI).</li>
            </ul>
          </div>

          <h3>Human-to-Computer Translation: The Input Bridge</h3>
          <p>Everything inside the computer chassis is mathematical electrical pulses. But human beings do not communicate in binary voltages. We communicate through physical touch, finger keystrokes, spoken voice, hand gestures, and vision. <strong>Peripherals</strong> are the external hardware devices that bridge the gap between human biology and silicon circuits.</p>

          <h4>Keyboard Technologies: Membrane vs. Mechanical</h4>
          <p>Every keystroke you type sends an electrical pulse to your computer. But how does the physical key beneath your finger actually register?</p>

          <div class="comparison-grid">
            <div class="compare-card bad" style="background:var(--bg-surface-alt); border-color:var(--border-medium);">
              <h5 style="color:var(--primary);">Membrane Keyboards (Everyday Office Standard)</h5>
              <p>Found on 90% of office cubicle desks and built into standard laptops.</p>
              <ul class="styled-list">
                <li><strong>How It Works:</strong> Underneath the plastic keys lies a single, continuous rubber or silicone sheet with squishy dome bubbles over printed circuit layers.</li>
                <li><strong>Pros:</strong> Extremely cheap to manufacture, highly spill-resistant, and very quiet.</li>
                <li><strong>Cons:</strong> \"Mushy\" typing feel. You must press the key completely down to the bottom plastic plate (\"bottoming out\") to complete the circuit, which leads to finger fatigue and joint strain during long typing sessions.</li>
              </ul>
            </div>
            <div class="compare-card good">
              <h5>Mechanical Keyboards (Typist & Enthusiast Standard)</h5>
              <p>Each individual key contains its own dedicated, self-contained physical switch with a metal spring and copper contacts.</p>
              <ul class="styled-list">
                <li><strong>Actuation Point:</strong> Registers the keystroke halfway down (at 2mm travel instead of 4mm)! You do not need to slam the key down to the bottom plate.</li>
                <li><strong>Lifespan:</strong> Rated for 50 to 100 million keystrokes (compared to 5 million for rubber membrane domes).</li>
                <li><strong>Customization:</strong> Keycaps and switches can be individually swapped, lubricated, and personalized.</li>
              </ul>
            </div>
          </div>

          <!-- THE SIGNATURE CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! Why Do People Spend $100 to $200 on Mechanical Keyboards? Is It Just Loud Clicking Hype, or Is There Real Science Behind It?"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                It is not just hype — there is real orthopedic and ergonomic science behind it!
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                When you type on a cheap membrane keyboard, your fingers collide against hard plastic at the bottom of every keystroke hundreds of thousands of times a day. That impact force travels directly into your finger joints and tendons.
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                On a mechanical keyboard, the switch activates <em>halfway through the stroke</em>. With practice, typists learn to \"float\" their fingers lightly over the keys, generating less fatigue, fewer typos, and significantly faster words-per-minute (WPM).
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                Furthermore, mechanical switches come in 3 distinct colors to match your personal preference:
              </p>
              <ul class="styled-list">
                <li><strong>Red Switches (Linear):</strong> Smooth, silent glide straight down with zero bump. Beloved by PC gamers for rapid double-tapping.</li>
                <li><strong>Brown Switches (Tactile):</strong> A subtle physical bump halfway down that lets your fingertips feel the exact instant the letter registers. The #1 recommendation for office typists and programmers.</li>
                <li><strong>Blue Switches (Clicky):</strong> A sharp physical bump paired with a loud, crisp typewriter \"click\". Immensely satisfying to type on, but will quickly annoy your roommates or office coworkers!</li>
              </ul>
            </div>
          </div>

          <h4>The Optical Mouse: A High-Speed Camera in Your Palm</h4>
          <p>In the 1990s, computer mice had a heavy rubber ball underneath that rolled across the desk. The ball would gather dirt, hair, and dust, requiring you to constantly pop open the ring to scrape off grime. Modern mice are <strong>Optical Micro-Cameras</strong>:</p>

          <div class="steps-grid">
            <div class="step-card">
              <div class="step-num">1</div>
              <h5>1. Infrared / Red LED Flash</h5>
              <p>A tiny LED on the bottom illuminates the microscopic texture, ridges, and weave of your desk or mousepad.</p>
              <span class="step-example">Shines at an angle to cast tiny shadows.</span>
            </div>
            <div class="step-card">
              <div class="step-num">2</div>
              <h5>2. Taking 1,000+ Photos/Sec</h5>
              <p>A miniature digital sensor (Optoelectronic Sensor) snaps over <strong>1,000 to 8,000 photos every single second</strong>!</p>
              <span class="step-example">Microscopic resolution photos of desk fibers.</span>
            </div>
            <div class="step-card">
              <div class="step-num">3</div>
              <h5>3. Image Correlation Processor</h5>
              <p>A tiny built-in Digital Signal Processor (DSP) compares consecutive photos to calculate how many microscopic ridges moved.</p>
              <span class="step-example">Calculates X and Y coordinate delta values.</span>
            </div>
            <div class="step-card">
              <div class="step-num">4</div>
              <h5>4. Smooth Cursor Movement</h5>
              <p>The mouse sends coordinate updates to Windows across USB at 1,000 times a second (1000 Hz polling rate), moving your cursor flawlessly!</p>
              <span class="step-example">Zero lag, zero dirt, zero moving parts.</span>
            </div>
          </div>

          <h4>Demystifying DPI: Dots Per Inch</h4>
          <p><strong>DPI (Dots Per Inch)</strong> measures how far your cursor travels on screen when you physically move the mouse by 1 inch on your desk:</p>
          <ul class="styled-list">
            <li><strong>400–800 DPI (Low Sensitivity):</strong> Moving the mouse 1 physical inch moves the on-screen pointer 400–800 pixels. Preferred by competitive tactical gamers and graphic designers who need pixel-perfect precision when drawing.</li>
            <li><strong>1200–1600 DPI (Medium Sensitivity):</strong> The ideal sweet spot for everyday office productivity, spreadsheets, and web browsing.</li>
            <li><strong>3200+ DPI (High Sensitivity):</strong> A microscopic flick of your wrist sends the cursor flying all the way across dual 4K monitors!</li>
          </ul>

          <h4>Preventing Chronic Injury: The Golden Rules of Computer Ergonomics</h4>
          <p>Typing with poor posture for 8 hours a day can lead to debilitating chronic conditions like <strong>Carpal Tunnel Syndrome</strong>, <strong>Repetitive Strain Injury (RSI)</strong>, and cervical spine herniation. Adopt these healthy computing habits today:</p>

          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Ergonomic Element</th>
                  <th>Harmful Habit</th>
                  <th>Healthy Golden Standard</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Wrist Posture</strong></td>
                  <td>Wrists bent backwards resting heavily on sharp desk edges.</td>
                  <td><strong>Neutral Wrists:</strong> Wrists hover straight and flat in line with your forearms (90° elbow bend).</td>
                </tr>
                <tr>
                  <td><strong>Monitor Height</strong></td>
                  <td>Monitor placed too low, forcing your chin down toward your chest.</td>
                  <td>The <strong>top third of the monitor</strong> should be directly level with your horizontal eye gaze.</td>
                </tr>
                <tr>
                  <td><strong>Chair & Spine</strong></td>
                  <td>Slouching forward or hunching shoulders over keyboard.</td>
                  <td>Hips pushed fully back against lumbar support, feet flat on the floor or footrest.</td>
                </tr>
                <tr>
                  <td><strong>Eye Fatigue</strong></td>
                  <td>Staring unblinkingly at bright screens for 4 hours straight.</td>
                  <td><strong>The 20-20-20 Rule:</strong> Every 20 minutes, look at an object 20 feet away for 20 seconds to relax your eye muscles.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="callout tip">
            <span class="callout-icon">🎯</span>
            <div>
              <strong>Hands-On Ergonomic Posture Check:</strong><br>
              Check your physical setup right this second!
              <ol style="margin-top:6px; padding-left:18px;">
                <li>Sit upright in your chair. Look straight ahead without tilting your head. Is your eye level with the top third of your screen? If not, prop your monitor up on a book or riser!</li>
                <li>Rest your fingers on the keyboard. Are your wrists bent sharply upward? If so, lower your chair armrests or adjust your desk height so your elbows form a 90° angle.</li>
              </ol>
            </div>
          </div>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li><strong>Mechanical keyboards</strong> provide individual switches, customizable tactile feedback (Red/Brown/Blue), and prevent finger bottoming-out fatigue.</li>
            <li><strong>Optical mice</strong> use high-speed microscopic digital cameras taking thousands of frames per second to calculate movement.</li>
            <li><strong>DPI</strong> controls cursor sensitivity; higher DPI is not inherently "better", just faster.</li>
            <li>Maintain <strong>neutral wrist alignment</strong> and follow the <strong>20-20-20 rule</strong> to protect your body during long work sessions.</li>
          </ul>
`;

// -----------------------------------------------------------------------------
// Lesson 3.2: Display Technologies: IPS vs VA vs OLED, Refresh Rates & Resolutions
// -----------------------------------------------------------------------------
COURSE_DATA.modules[2].lessons[1].readTime = "22 min read";
COURSE_DATA.modules[2].lessons[1].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 1 • Week 4 • Lesson 3.2</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Spend 1-2 days learning how screens draw pixels, contrast ratios, and refresh rates.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Understand screen resolution numbers (1080p, 1440p, 4K) and Pixel Density (PPI).</li>
              <li>Contrast the 3 primary display panel technologies: IPS, VA, and self-lit OLED.</li>
              <li>Explain what Refresh Rate (Hertz / Hz) is and why 120Hz feels so silky smooth.</li>
              <li>Understand aspect ratios: 16:9 widescreen vs 16:10 productivity vs 21:9 ultrawide.</li>
              <li>Solve the mystery: What is OLED Burn-In, and should you worry about it?</li>
            </ul>
          </div>

          <h3>The Window to the Machine: Display Science</h3>
          <p>You stare at monitors, laptop displays, tablets, and smartphone screens for thousands of hours every year. But what makes one screen look washed out, grey, and blurry, while another screen looks like a vibrant, razor-sharp window into another world? Let's peel back the glass and explore screen resolutions, panel physics, and refresh rates.</p>

          <h4>1. Screen Resolution: Counting the Pixels</h4>
          <p>Resolution refers to the total number of horizontal and vertical colored pixel dots that construct your visual desktop:</p>

          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Resolution Name</th>
                  <th>Grid Dimensions (Width &times; Height)</th>
                  <th>Total Pixel Count</th>
                  <th>Recommended Screen Size</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1080p (Full HD / FHD)</strong></td>
                  <td>1,920 &times; 1,080</td>
                  <td><strong>~2.07 Million pixels</strong></td>
                  <td>Best on 21.5\" to 24\" monitors and laptops</td>
                </tr>
                <tr>
                  <td><strong>1440p (QHD / 2K)</strong></td>
                  <td>2,560 &times; 1,440</td>
                  <td><strong>~3.68 Million pixels (+77% more area!)</strong></td>
                  <td>The sweet spot for 27\" desktop monitors</td>
                </tr>
                <tr>
                  <td><strong>4K UHD (Ultra HD)</strong></td>
                  <td>3,840 &times; 2,160</td>
                  <td><strong>~8.29 Million pixels (4x 1080p!)</strong></td>
                  <td>Ideal for 32\"+ monitors, TVs, and creative media work</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- THE SIGNATURE CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! Why Does a 24-inch 1080p Monitor Look Crystal Clear, But a 65-inch 1080p Living Room TV Look Pixelated Up Close?!"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                Because resolution by itself only tells half the story! The critical metric is <strong>Pixel Density (PPI - Pixels Per Inch)</strong>.
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                Both screens have the exact same 2,073,600 dots:
              </p>
              <ul class="styled-list">
                <li>On the <strong>24-inch monitor</strong>, those 2 million dots are squeezed into a tiny frame (92 PPI). The dots are so small your eye cannot distinguish them from 2 feet away.</li>
                <li>On the <strong>65-inch television</strong>, those same 2 million dots are stretched across a massive 5-foot piece of glass (only 34 PPI)! Each individual pixel is the size of a grain of rice. TVs are designed to be viewed from 10 feet away on a sofa, where your eyes naturally blend the dots together!</li>
              </ul>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                Your smartphone has over <strong>400+ PPI</strong>, which is why iPhone \"Retina\" displays look sharper than high-end paper print!
              </p>
            </div>
          </div>

          <h4>2. Panel Technologies: IPS vs. VA vs. OLED</h4>
          <p>How does the screen actually light up pixels? The technology behind the glass determines color accuracy, viewing angles, and contrast:</p>

          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Panel Type</th>
                  <th>How It Works</th>
                  <th>Color & Viewing Angles</th>
                  <th>Contrast & Black Levels</th>
                  <th>Best Used For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>IPS (In-Plane Switching)</strong></td>
                  <td>Liquid crystals rotate horizontally; illuminated by a continuous LED backlight sheet.</td>
                  <td><strong>Superb Color Accuracy.</strong> Wide 178° viewing angles (colors do not shift when viewed from sides).</td>
                  <td>Decent blacks (~1000:1 contrast). Shows slight grey \"IPS glow\" in pitch-dark rooms.</td>
                  <td>Graphic design, video editing, everyday office laptops, photo color grading.</td>
                </tr>
                <tr>
                  <td><strong>VA (Vertical Alignment)</strong></td>
                  <td>Liquid crystals align vertically; blocks light more effectively when closed.</td>
                  <td>Good colors, but slight color washing if viewed from an extreme angle.</td>
                  <td><strong>Deep, inky blacks</strong> (3000:1 to 4000:1 contrast).</td>
                  <td>Watching movies in dark rooms, curved immersive monitors, budget smart TVs.</td>
                </tr>
                <tr>
                  <td><strong>OLED (Organic LED)</strong></td>
                  <td><strong>ZERO backlight!</strong> Every single one of the 8 million pixels is its own microscopic self-lit organic bulb that turns completely OFF!</td>
                  <td><strong>Breathtaking vibrant colors</strong> and instantaneous 0.03ms pixel response times.</td>
                  <td><strong>Infinite Contrast ($\infty:1$)</strong> and true pitch-black darkness.</td>
                  <td>Premium smartphones (iPhone/Galaxy), high-end TVs, cinematic gaming.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- THE OLED BURN-IN CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! What is OLED Burn-In? Can Leaving My Screen on Pause Permanently Ruin My Monitor?!"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                Because OLED pixels are made of organic carbon compounds that generate light, they physically degrade with heat and brightness over thousands of hours of continuous use.
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                If you leave a bright, static image (like the CNN news logo banner or the Windows taskbar) shining at 100% brightness in the exact same spot 10 hours a day for 2 years, those specific subpixels age faster than the pixels around them. This leaves a faint, permanent ghost silhouette called <strong>\"Burn-In\"</strong>.
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                <strong>Modern OLED Protections:</strong> Today's displays have built-in survival features like <em>Pixel Shifting</em> (silently moving the picture 2 pixels every few minutes), <em>Logo Dimming</em>, and <em>Pixel Cleaning Refreshers</em> that run when the screen is asleep. For normal movie watching, browsing, and gaming, burn-in is virtually a non-issue!
              </p>
            </div>
          </div>

          <h4>3. Refresh Rate (Hertz / Hz): The Secret to Silky Smoothness</h4>
          <p>A monitor does not show continuous real motion; it flashes still pictures in rapid succession like a flipbook. <strong>Refresh rate</strong> is the number of times per second your monitor draws a completely new image:</p>
          <ul class=\"styled-list\">
            <li><strong>60 Hz (Baseline):</strong> The screen updates 60 times a second (16.6 milliseconds per frame). Perfect for writing essays, spreadsheets, and watching movies (shot at 24 frames/sec).</li>
            <li><strong>120 Hz / 144 Hz (High Refresh):</strong> The screen updates twice as fast (8.3 milliseconds per frame). Moving your mouse pointer, scrolling down long articles, and playing games feels buttery smooth with zero motion blur!</li>
            <li><strong>240 Hz to 360 Hz (Esports Standard):</strong> Updates every 4.1 milliseconds, giving competitive gamers a split-second reaction advantage in fast-paced shooters.</li>
          </ul>

          <div class="callout tip">
            <span class="callout-icon">🎯</span>
            <div>
              <strong>Hands-On Display Test:</strong><br>
              Check your monitor's actual refresh rate right now!
              <ol style="margin-top:6px; padding-left:18px;">
                <li>On Windows, right-click any blank spot on your desktop and choose <strong>Display settings</strong>.</li>
                <li>Scroll down and click <strong>Advanced display</strong>.</li>
                <li>Look at <strong>Choose a refresh rate</strong>. Many laptops ship with 120Hz or 144Hz screens, but Windows defaults to 60Hz to save battery! If 120Hz is listed, click it and watch how smooth your mouse cursor becomes instantly!</li>
              </ol>
            </div>
          </div>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li><strong>Resolution</strong> measures total pixel count (1080p = 2M, 1440p = 3.7M, 4K = 8.3M); <strong>PPI</strong> determines perceived sharpness.</li>
            <li><strong>IPS panels</strong> are king for color accuracy; <strong>VA panels</strong> provide deep contrast; <strong>OLED</strong> delivers infinite contrast with true pitch blacks.</li>
            <li><strong>120Hz+ refresh rates</strong> drastically reduce eye fatigue and make scrolling and gaming feel fluid and responsive.</li>
          </ul>
`;

// -----------------------------------------------------------------------------
// Lesson 3.3: Sound, Microphones, Audio Interfaces & Webcams
// -----------------------------------------------------------------------------
COURSE_DATA.modules[2].lessons[2].readTime = "20 min read";
COURSE_DATA.modules[2].lessons[2].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 1 • Week 4 • Lesson 3.3</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Take 1 day to understand microphone physics, audio interfaces, and webcam optics.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Differentiate between Dynamic microphones and Studio Condenser microphones.</li>
              <li>Understand the role of a dedicated USB Audio Interface and high-end preamps.</li>
              <li>Learn why microphone proximity and room acoustics matter 10x more than expensive gear.</li>
              <li>Explain why webcam sensor size and lighting trump marketing "4K" labels every time.</li>
            </ul>
          </div>

          <h3>Audio & Video: Capturing Human Voice and Presence</h3>
          <p>Whether you are participating in a remote job interview over Zoom, recording a podcast, or catching up with family over FaceTime, audio and video peripherals are how your voice and face enter the digital realm. But why do some people sound like warm, intimate radio hosts, while others sound like they are shouting inside a metal trash can? Let us break down audio science and webcam optics.</p>

          <h4>Microphone Physics: Dynamic vs. Condenser</h4>
          <div class="comparison-grid">
            <div class="compare-card good">
              <h5>Dynamic Microphones (The Rugged Workhorse)</h5>
              <p>Examples: Shure SM58, Shure SM7B, Audio-Technica ATR2100x.</p>
              <ul class="styled-list">
                <li><strong>How It Works:</strong> Sound waves hit a heavy diaphragm attached to a copper wire coil wrapped around a magnet, generating a tiny electrical voltage.</li>
                <li><strong>Superpower: Background Noise Rejection!</strong> Because the diaphragm is heavier, it requires you to speak close to it. It naturally ignores loud keyboard clicks, air conditioners, barking dogs, and room echoes.</li>
                <li><strong>Best For:</strong> Untreated bedrooms, loud offices, live concerts, and podcasts.</li>
              </ul>
            </div>
            <div class="compare-card bad" style="background:var(--bg-surface-alt); border-color:var(--border-medium);">
              <h5 style="color:var(--primary);">Condenser Microphones (The Studio Instrument)</h5>
              <p>Examples: Blue Yeti, Rode NT1, Audio-Technica AT2020.</p>
              <ul class="styled-list">
                <li><strong>How It Works:</strong> An ultra-thin, microscopic gold-sputtered foil membrane rests next to a backplate, requiring <strong>+48V Phantom Power</strong>.</li>
                <li><strong>Superpower: Extreme Detail & Warmth!</strong> Captures every subtle nuance, breath, and high-frequency sparkle of your voice.</li>
                <li><strong>The Catch:</strong> It is so sensitive that it will pick up your refrigerator humming down the hall and the echo of bare hardwood floors!</li>
                <li><strong>Best For:</strong> Soundproofed recording studios, voiceover narration, and acoustic music.</li>
              </ul>
            </div>
          </div>

          <!-- THE SIGNATURE CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! Why Does My Voice on Zoom Sound Like I'm in an Echoey Bathroom, While Radio Podcasters Sound Warm and Intimate?"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                The secret is not a $1,000 microphone — it is a law of physics called the <strong>Inverse-Square Law of Acoustics</strong>!
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                Most people make the mistake of leaving their microphone 2 to 3 feet away sitting next to their laptop keyboard. When you do that:
              </p>
              <ul class="styled-list">
                <li>Your voice travels through 3 feet of air, bouncing off the hard plaster walls, windows, and wooden desk, arriving at the mic mixed with 50% room echo!</li>
                <li>Meanwhile, professional podcasters keep the microphone <strong>just 3 to 5 inches from their lips</strong>! At that distance, your direct voice is 10 times louder than any room reflection. The microphone captures deep, rich bass tones (the <em>Proximity Effect</em>) and sounds broadcast-ready!</li>
              </ul>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                <strong>Free Pro-Tip:</strong> Move your microphone closer to your mouth and throw a soft blanket or rug down in your room to absorb echoes. Your audio quality will instantly 10x for free!
              </p>
            </div>
          </div>

          <h4>Webcam Optics: Why Lighting Beats "4K" Marketing</h4>
          <p>Manufacturers love slapping \"4K Ultra-HD\" stickers on tiny $40 webcams. Yet when you turn it on in your bedroom, the video looks grainy, noisy, and dark. Why?</p>
          <ul class="styled-list">
            <li><strong>Sensor Size:</strong> A webcam lens is smaller than an apple seed. Its tiny image sensor cannot physically capture enough photons of light in a dimly lit room.</li>
            <li><strong>Digital Noise:</strong> When light is low, the camera chip digitally boosts sensitivity (\"gain\"), which creates distracting buzzing colored dots (noise) all over your face.</li>
            <li><strong>The Secret Weapon: Face Lighting!</strong> A simple $20 soft desk lamp or ring light placed right in front of your face will make a $30 1080p webcam look better than an expensive 4K camera sitting in a dark cave!</li>
          </ul>

          <div class="callout tip">
            <span class="callout-icon">🎯</span>
            <div>
              <strong>Hands-On Audio Test:</strong><br>
              Test your microphone input in Windows!
              <ol style="margin-top:6px; padding-left:18px;">
                <li>Open <strong>Settings</strong> &rarr; <strong>System</strong> &rarr; <strong>Sound</strong>.</li>
                <li>Under <strong>Input</strong>, select your microphone and speak into it.</li>
                <li>Watch the volume bar. Speak at normal volume: the blue bar should comfortably bounce between <strong>60% and 80%</strong>. If it slams into 100%, your microphone is \"clipping\" (distorting like a broken speaker); turn the input volume down!</li>
              </ol>
            </div>
          </div>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li><strong>Dynamic microphones</strong> excel in normal untreated rooms by rejecting background noises and typing sounds.</li>
            <li><strong>Condenser microphones</strong> capture delicate studio nuances but pick up room reflections and ambient street noise.</li>
            <li>Keeping the microphone <strong>3–5 inches from your mouth</strong> completely eliminates the hollow \"bathroom echo\" effect.</li>
            <li>Good face lighting is 10 times more important for webcam image clarity than megapixels or 4K resolution.</li>
          </ul>
`;

// -----------------------------------------------------------------------------
// Lesson 3.4: Printers, Scanners & Paperless Document Workflows
// -----------------------------------------------------------------------------
COURSE_DATA.modules[2].lessons[3].readTime = "20 min read";
COURSE_DATA.modules[2].lessons[3].content = `
          <div class="study-pace-banner">
            <span class="pace-badge">🗓️ Month 1 • Week 4 • Lesson 3.4</span>
            <span class="pace-recommendation">⏱️ Suggested Pace: Take 1 day to understand printer technologies, document digitization, and paperless PDF workflows.</span>
          </div>

          <div class="learning-objectives-card">
            <h5>🎯 Lesson Learning Objectives</h5>
            <ul>
              <li>Contrast liquid Inkjet printers with dry electrostatic Laser printers.</li>
              <li>Understand the total cost of ownership: ink cartridges vs laser toner cartridges.</li>
              <li>Learn how flatbed scanners and OCR (Optical Character Recognition) digitize paper.</li>
              <li>Master the paperless office workflow: digital signatures, PDF/A archival, and cloud storage.</li>
            </ul>
          </div>

          <h3>The Physical-Digital Bridge: Printers & Scanners</h3>
          <p>Even in our modern digital society, physical paper contracts, legal documents, tax forms, and shipping labels remain a fact of life. <strong>Printers</strong> translate digital bits into physical ink and toner on paper, while <strong>Scanners and Optical Character Recognition (OCR)</strong> do the reverse: converting physical ink into searchable digital documents.</p>

          <h4>Inkjet vs. Laser: The Two Great Printing Technologies</h4>
          <div class="comparison-grid">
            <div class="compare-card bad" style="background:var(--bg-surface-alt); border-color:var(--border-medium);">
              <h5 style="color:var(--primary);">Inkjet Printers (Liquid Droplets)</h5>
              <p>Found in most home electronics aisles for $50 to $100.</p>
              <ul class="styled-list">
                <li><strong>How It Works:</strong> Microscopic thermal or piezoelectric nozzles spray millions of tiny liquid ink droplets directly onto paper fibers.</li>
                <li><strong>Pros:</strong> Outstanding for printing rich, glossy full-color family photos and art prints.</li>
                <li><strong>The Trap: Cartridge Costs!</strong> Replacement ink cartridges cost $40 to $70. If you don't print for 3 weeks, liquid ink dries inside the printhead nozzles, clogging them and wasting expensive ink on \"cleaning cycles\". Cost per page: <strong>$0.15 to $0.25!</strong></li>
              </ul>
            </div>
            <div class="compare-card good">
              <h5>Laser Printers (Dry Electrostatic Powder)</h5>
              <p>The standard in corporate offices, law firms, and smart home offices.</p>
              <ul class="styled-list">
                <li><strong>How It Works:</strong> A laser beam draws an electrostatic charge on a rotating drum. Dry plastic toner powder sticks to the charge, transfers to the paper, and is melted permanently into the fibers by a 200°C heated fuser roller!</li>
                <li><strong>Pros:</strong> Razor-sharp black text that never smudges (even if water drops on it). Prints 30 to 50 pages per minute!</li>
                <li><strong>Toner Never Dries Out!</strong> Because toner is dry powder, you can leave a laser printer sitting in a closet for 2 years, turn it on, and it will print page 1 instantly! Cost per page: <strong>$0.01 to $0.02!</strong></li>
              </ul>
            </div>
          </div>

          <!-- THE SIGNATURE CALLOUT -->
          <div class="callout tip" style="margin: 24px 0; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
            <span class="callout-icon">🤔</span>
            <div>
              <strong style="font-size: 1.08rem; color: #d97706;">"Wait! Why Does Printer Ink Cost More per Ounce Than Expensive French Perfume or Vintage Champagne?!"</strong>
              <p style="margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                You might buy a color inkjet printer for only $49 at a department store, only to find out 6 months later that buying replacement black and color cartridges costs $65!
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                This is a classic predatory business model called the <strong>Razor-and-Blades Strategy</strong>:
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6;">
                Printer companies sell the physical printer machine at a financial loss. They make 90% of their company profits by selling micro-cartridges of liquid ink at marked-up prices exceeding <strong>$8,000 per gallon</strong>!
              </p>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                <strong>How to Beat the Trap:</strong>
              </p>
              <ul class="styled-list">
                <li>If you print text documents, essays, contracts, and shipping labels: <strong>Buy a Monochrome Laser Printer</strong> (such as Brother). A single $40 toner cartridge prints 2,000+ pages and never dries out!</li>
                <li>If you must print color photos: Buy a <strong>Refillable EcoTank / MegaTank Printer</strong>. Instead of tiny plastic cartridges, you pour large $15 liquid bottles directly into tanks, cutting ink costs by 90%!</li>
              </ul>
            </div>
          </div>

          <h4>Digitization & OCR: Turning Paper into Searchable Text</h4>
          <p>When you scan a physical piece of paper using a flatbed scanner or your phone camera, the computer initially only has a \"dumb\" grid of pixels (a JPEG or flat PDF). It cannot search the document or highlight words.</p>
          <p><strong>OCR (Optical Character Recognition)</strong> uses computer vision neural networks to analyze the pixels, recognize character shapes (like crossbars for 't' and loops for 'o'), and inject a layer of real, searchable text behind the image!</p>

          <div class="steps-grid">
            <div class="step-card">
              <div class="step-num">1</div>
              <h5>1. Optical Scan</h5>
              <p>Light bar sweeps across paper; sensors capture high-resolution pixel matrix (300 DPI).</p>
              <span class="step-example">Produces raw image bitmap.</span>
            </div>
            <div class="step-card">
              <div class="step-num">2</div>
              <h5>2. Binarization & Skew Fix</h5>
              <p>The software deskews crooked paper angles and converts grey shadows into crisp black and white contrast.</p>
              <span class="step-example">Clean shape separation.</span>
            </div>
            <div class="step-card">
              <div class="step-num">3</div>
              <h5>3. Pattern & Glyph Recognition</h5>
              <p>OCR algorithms compare letter shapes against known font libraries to identify letters and numbers.</p>
              <span class="step-example">Identifies: "Invoice #10492"</span>
            </div>
            <div class="step-card">
              <div class="step-num">4</div>
              <h5>4. Searchable PDF Created</h5>
              <p>The computer embeds real Unicode text directly underneath the picture. You can now press <kbd>Ctrl</kbd> + <kbd>F</kbd> to search!</p>
              <span class="step-example">Instant keyword searchability.</span>
            </div>
          </div>

          <div class="callout tip">
            <span class="callout-icon">🎯</span>
            <div>
              <strong>Hands-On Paperless Secret: Free Phone Scanner!</strong><br>
              You don't need a heavy plastic scanner to digitize documents!
              <ol style="margin-top:6px; padding-left:18px;">
                <li><strong>iPhone:</strong> Open the built-in <strong>Notes app</strong>, create a new note, tap the Camera icon, and select <strong>Scan Documents</strong>. Point your camera at a page; it automatically crops the corners and creates a clean PDF!</li>
                <li><strong>Android:</strong> Open the <strong>Google Drive app</strong>, tap the <strong>+</strong> button, and tap <strong>Scan</strong>. It automatically saves a searchable OCR PDF directly into your cloud!</li>
              </ol>
            </div>
          </div>

          <h4>Key Takeaways</h4>
          <ul class="styled-list">
            <li><strong>Inkjet printers</strong> spray liquid droplets; great for photos, but cartridges are expensive and nozzles clog if unused.</li>
            <li><strong>Laser printers</strong> fuse dry toner powder; toner never dries out, prints faster, and costs pennies per page.</li>
            <li><strong>OCR (Optical Character Recognition)</strong> turns scanned photos into searchable, copyable digital text.</li>
            <li>Smartphone camera scanner tools allow you to operate a completely paperless document workflow from your pocket.</li>
          </ul>
`;

console.log('Module 3 enriched!');

const updatedContent = 'const COURSE_DATA = ' + JSON.stringify(COURSE_DATA, null, 2) + ';\n';
fs.writeFileSync(courseDataPath, updatedContent, 'utf8');
console.log('Updated courseData.js successfully with Module 3 enrichments!');
