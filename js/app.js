// Complete Computer & Web Fundamentals Masterclass - Application Logic
// Features: Dark Mode, Mobile Native Drawer & Bottom Bar, Dynamic 12-Module Renderer,
// 4-Month Study Roadmap Filter, 6 Interactive Simulators, Student Personal Notes with Autosave,
// Study Journal Modal, Quizzes, 25-Question Final Exam & Verified Printable Certificate.

document.addEventListener("DOMContentLoaded", () => {
  // 1. State Management with LocalStorage
  const STATE = {
    currentView: "overview", // 'overview', 'lesson', 'quiz', 'final-exam', 'certificate'
    currentLessonId: null,
    currentQuizId: null,
    selectedPhase: "all", // 'all', '1', '2', '3', '4'
    completedLessons: JSON.parse(localStorage.getItem("cf_completed_lessons") || "[]"),
    quizScores: JSON.parse(localStorage.getItem("cf_quiz_scores") || "{}"),
    studentName: localStorage.getItem("cf_student_name") || "",
    finalExamPassed: localStorage.getItem("cf_final_exam_passed") === "true",
    certDate: localStorage.getItem("cf_cert_date") || new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    theme: localStorage.getItem("cf_theme") || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  };

  function saveState() {
    localStorage.setItem("cf_completed_lessons", JSON.stringify(STATE.completedLessons));
    localStorage.setItem("cf_quiz_scores", JSON.stringify(STATE.quizScores));
    localStorage.setItem("cf_student_name", STATE.studentName);
    localStorage.setItem("cf_final_exam_passed", STATE.finalExamPassed);
    localStorage.setItem("cf_cert_date", STATE.certDate);
    updateProgressUI();
  }

  // 2. DOM Elements
  const contentArea = document.getElementById("contentContainer");
  const navProgressBar = document.getElementById("navProgressBar");
  const navProgressText = document.getElementById("navProgressText");
  const studentNameDisplay = document.getElementById("studentNameDisplay");
  const sidebar = document.getElementById("courseSidebar");
  const sidebarBackdrop = document.getElementById("sidebarBackdrop");
  const sidebarToggle = document.getElementById("sidebarToggle");
  const sidebarCloseBtn = document.getElementById("sidebarCloseBtn");
  const toastElement = document.getElementById("toastNotice");
  const moduleListContainer = document.getElementById("moduleList");
  const searchInput = document.getElementById("courseSearchInput");
  const sidebarMetaDesc = document.getElementById("sidebarMetaDesc");
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const themeToggleIcon = document.getElementById("themeToggleIcon");
  const mobileNavThemeIcon = document.getElementById("mobileNavThemeIcon");

  // 3. Theme Management (Dark Mode)
  function applyTheme(theme) {
    STATE.theme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("cf_theme", theme);

    const icon = theme === "dark" ? "☀️" : "🌙";
    if (themeToggleIcon) themeToggleIcon.textContent = icon;
    if (mobileNavThemeIcon) mobileNavThemeIcon.textContent = icon;
    if (themeToggleBtn) {
      themeToggleBtn.setAttribute("title", theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode");
    }
  }

  function toggleTheme() {
    const nextTheme = STATE.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    showToast(`Switched to ${nextTheme === "dark" ? "Dark" : "Light"} mode`);
  }

  themeToggleBtn?.addEventListener("click", toggleTheme);
  document.getElementById("mobileNavTheme")?.addEventListener("click", toggleTheme);
  applyTheme(STATE.theme);

  // Prompt name modal on first visit if studentName is not set
  if (!STATE.studentName) {
    setTimeout(() => {
      const nameModal = document.getElementById("nameModal");
      const nameInput = document.getElementById("nameModalInput");
      if (nameModal) {
        nameModal.classList.add("open");
        if (nameInput) nameInput.focus();
      }
    }, 600);
  }
  function showToast(message) {
    if (!toastElement) return;
    toastElement.textContent = message;
    toastElement.classList.add("show");
    setTimeout(() => {
      toastElement.classList.remove("show");
    }, 3200);
  }

  // 5. Mobile Drawer Controls
  function openMobileSidebar() {
    if (sidebar) sidebar.classList.add("mobile-open");
    if (sidebarBackdrop) sidebarBackdrop.classList.add("mobile-open");
    document.body.style.overflow = "hidden";
  }

  function closeMobileSidebar() {
    if (sidebar) sidebar.classList.remove("mobile-open");
    if (sidebarBackdrop) sidebarBackdrop.classList.remove("mobile-open");
    document.body.style.overflow = "";
  }

  sidebarToggle?.addEventListener("click", openMobileSidebar);
  sidebarCloseBtn?.addEventListener("click", closeMobileSidebar);
  sidebarBackdrop?.addEventListener("click", closeMobileSidebar);

  // Mobile Bottom Bar Navigation
  document.getElementById("mobileNavMenu")?.addEventListener("click", openMobileSidebar);
  document.getElementById("mobileNavSearch")?.addEventListener("click", () => {
    openMobileSidebar();
    setTimeout(() => searchInput?.focus(), 300);
  });
  document.getElementById("mobileNavCheatSheet")?.addEventListener("click", openCheatSheet);
  document.getElementById("mobileNavExam")?.addEventListener("click", renderFinalExam);

  // 6. Progress Calculation & UI Update
  function calculateTotalLessons() {
    let count = 0;
    COURSE_DATA.modules.forEach(m => {
      count += m.lessons.length;
    });
    return count;
  }

  function updateProgressUI() {
    const total = calculateTotalLessons();
    const completed = STATE.completedLessons.length;
    const percent = Math.round((completed / (total || 1)) * 100);

    if (navProgressBar) {
      navProgressBar.style.width = `${percent}%`;
    }
    if (navProgressText) {
      navProgressText.textContent = `${completed}/${total} Lessons (${percent}%)`;
    }
    if (studentNameDisplay) {
      studentNameDisplay.textContent = STATE.studentName || "Student";
    }

    if (sidebarMetaDesc) {
      sidebarMetaDesc.textContent = `${COURSE_DATA.modules.length} Modules • ${total} Lessons • 4 Months`;
    }

    // Refresh completed checkmarks in sidebar
    document.querySelectorAll(".lesson-link").forEach(link => {
      const lesId = link.getAttribute("data-lesson-id");
      if (STATE.completedLessons.includes(lesId)) {
        link.classList.add("completed");
        const icon = link.querySelector(".lesson-status-icon");
        if (icon) icon.textContent = "✓";
      } else {
        link.classList.remove("completed");
        const icon = link.querySelector(".lesson-status-icon");
        if (icon) icon.textContent = "";
      }
    });
  }

  // 7. Dynamic Sidebar Builder with Search Filter & Month Tabs
  function renderSidebar(searchFilter = "") {
    if (!moduleListContainer) return;
    const filter = searchFilter.toLowerCase().trim();
    const activePhase = STATE.selectedPhase || "all";

    const filteredModules = COURSE_DATA.modules.filter(mod => {
      if (activePhase !== "all" && mod.phaseNumber !== parseInt(activePhase)) {
        return false;
      }
      return true;
    });

    moduleListContainer.innerHTML = filteredModules.map(mod => {
      const modMatches = mod.title.toLowerCase().includes(filter) || mod.description.toLowerCase().includes(filter);
      const matchingLessons = mod.lessons.filter(l => 
        l.title.toLowerCase().includes(filter) || 
        l.summary.toLowerCase().includes(filter) || 
        modMatches
      );

      if (filter && matchingLessons.length === 0) {
        return "";
      }

      const isOpen = filter ? true : (mod.number === 1 || activePhase !== "all");

      return `
        <li class="module-item ${isOpen ? 'open' : ''}" data-module-id="${mod.id}">
          <div class="module-header">
            <div class="module-header-title">
              <span class="module-badge-num">M${mod.number}</span>
              <span>${mod.title}</span>
            </div>
            <span class="module-chevron">▼</span>
          </div>

          <ul class="lesson-list">
            ${mod.lessons.map(les => {
              const isMatch = !filter || les.title.toLowerCase().includes(filter) || les.summary.toLowerCase().includes(filter);
              if (!isMatch) return "";
              const isDone = STATE.completedLessons.includes(les.id);
              const isActive = STATE.currentLessonId === les.id;

              return `
                <li>
                  <a href="#" class="lesson-link ${isDone ? 'completed' : ''} ${isActive ? 'active' : ''}" data-lesson-id="${les.id}">
                    <div class="lesson-left">
                      <span class="lesson-status-icon">${isDone ? '✓' : ''}</span>
                      <span title="${les.title}">${les.title}</span>
                    </div>
                  </a>
                </li>
              `;
            }).join('')}

            ${mod.quiz ? `
              <li>
                <div class="quiz-link-item" data-quiz-id="${mod.quiz.id}">
                  <span>📝 Module ${mod.number} Checkpoint Quiz</span>
                  <span>→</span>
                </div>
              </li>
            ` : ''}
          </ul>
        </li>
      `;
    }).join('');

    attachSidebarListeners();
  }

  function attachSidebarListeners() {
    // Module Accordion toggles
    document.querySelectorAll(".module-header").forEach(header => {
      header.addEventListener("click", () => {
        header.closest(".module-item").classList.toggle("open");
      });
    });

    // Lesson click
    document.querySelectorAll(".lesson-link").forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const lessonId = link.getAttribute("data-lesson-id");
        renderLesson(lessonId);
        closeMobileSidebar();
      });
    });

    // Quiz links
    document.querySelectorAll(".quiz-link-item").forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const quizId = link.getAttribute("data-quiz-id");
        renderQuiz(quizId);
        closeMobileSidebar();
      });
    });
  }

  // Hook Search Input
  searchInput?.addEventListener("input", (e) => {
    renderSidebar(e.target.value);
  });

  // Hook Sidebar Phase Filter Buttons
  document.querySelectorAll("#sidebarPhaseFilter .phase-filter-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#sidebarPhaseFilter .phase-filter-pill").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      STATE.selectedPhase = btn.getAttribute("data-phase");
      renderSidebar(searchInput?.value || "");
    });
  });

  // Final exam button in sidebar
  document.getElementById("sidebarFinalExamBtn")?.addEventListener("click", () => {
    renderFinalExam();
    closeMobileSidebar();
  });

  // Helper to find lesson and module
  function findLessonAndModule(lessonId) {
    for (let mIdx = 0; mIdx < COURSE_DATA.modules.length; mIdx++) {
      const mod = COURSE_DATA.modules[mIdx];
      for (let lIdx = 0; lIdx < mod.lessons.length; lIdx++) {
        if (mod.lessons[lIdx].id === lessonId) {
          let prev = null;
          if (lIdx > 0) {
            prev = mod.lessons[lIdx - 1];
          } else if (mIdx > 0) {
            const prevMod = COURSE_DATA.modules[mIdx - 1];
            prev = prevMod.lessons[prevMod.lessons.length - 1];
          }

          let next = null;
          if (lIdx < mod.lessons.length - 1) {
            next = mod.lessons[lIdx + 1];
          } else if (mIdx < COURSE_DATA.modules.length - 1) {
            next = COURSE_DATA.modules[mIdx + 1].lessons[0];
          }

          return {
            module: mod,
            lesson: mod.lessons[lIdx],
            index: lIdx,
            prevLesson: prev,
            nextLesson: next
          };
        }
      }
    }
    return null;
  }

  // 8. View: Course Overview
  function renderOverview() {
    STATE.currentView = "overview";
    STATE.currentLessonId = null;
    window.scrollTo({ top: 0, behavior: "smooth" });

    const totalLessons = calculateTotalLessons();
    const completedCount = STATE.completedLessons.length;
    const activePhase = STATE.selectedPhase || "all";

    const filteredModules = COURSE_DATA.modules.filter(mod => {
      if (activePhase !== "all" && mod.phaseNumber !== parseInt(activePhase)) {
        return false;
      }
      return true;
    });

    contentArea.innerHTML = `
      <div class="course-overview-banner">
        <div class="course-meta-tags">
          <span class="tag-badge primary">4-Month Comprehensive Diploma</span>
          <span class="tag-badge">Beginner to Advanced Digital Literacy</span>
          <span class="tag-badge">Web & SEO Fundamentals</span>
          <span class="tag-badge">Free Graduation Certificate</span>
        </div>

        <h1 class="course-main-title">${COURSE_DATA.title}</h1>
        <p class="course-subtitle">${COURSE_DATA.subtitle}</p>

        <div class="quick-stats-row">
          <div class="stat-item-box">
            <span class="stat-val">${COURSE_DATA.modules.length} Modules</span>
            <span class="stat-lbl">16-Week Roadmap</span>
          </div>
          <div class="stat-item-box">
            <span class="stat-val">${totalLessons} Lessons</span>
            <span class="stat-lbl">Textbook Guides</span>
          </div>
          <div class="stat-item-box">
            <span class="stat-val">6 Simulators</span>
            <span class="stat-lbl">Interactive Practice</span>
          </div>
          <div class="stat-item-box">
            <span class="stat-val">100% Free</span>
            <span class="stat-lbl">Official Certificate</span>
          </div>
        </div>

        <div class="course-start-actions">
          <button id="btnStartCourse" class="btn-primary">
            <span>🚀</span> ${completedCount > 0 ? "Continue Learning" : "Start Course (Lesson 1.1)"}
          </button>
          
          <button id="btnOpenJournalHero" class="btn-secondary">
            <span>📓</span> My Study Journal
          </button>

          <button id="btnOpenCheatSheetHero" class="btn-secondary">
            <span>📋</span> Quick Cheat Sheet
          </button>

          ${STATE.finalExamPassed ? `
            <button id="btnViewCertificateTop" class="btn-secondary" style="border-color: #16a34a; color: #15803d;">
              <span>🎓</span> View Your Certificate
            </button>
          ` : ''}
        </div>
      </div>

      <div class="overview-curriculum-section">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; margin-bottom: 20px;">
          <div>
            <h3 style="font-size: 1.35rem; font-weight: 700; margin: 0;">Comprehensive 4-Month Study Roadmap</h3>
            <p style="font-size: 0.88rem; color: var(--text-muted); margin: 3px 0 0 0;">Take your time. Study 1 to 2 lessons per week without rushing.</p>
          </div>

          <div style="display: flex; gap: 6px; flex-wrap: wrap;" id="overviewPhaseFilterPills">
            <button class="phase-filter-pill ${activePhase === 'all' ? 'active' : ''}" data-phase="all">All 4 Months</button>
            <button class="phase-filter-pill ${activePhase === '1' ? 'active' : ''}" data-phase="1">Month 1: Hardware</button>
            <button class="phase-filter-pill ${activePhase === '2' ? 'active' : ''}" data-phase="2">Month 2: OS & Files</button>
            <button class="phase-filter-pill ${activePhase === '3' ? 'active' : ''}" data-phase="3">Month 3: Networks</button>
            <button class="phase-filter-pill ${activePhase === '4' ? 'active' : ''}" data-phase="4">Month 4: Web & Code</button>
          </div>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 14px;" id="overviewModuleCardList">
          ${filteredModules.map(mod => `
            <div style="background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-md); padding: 20px 24px; display: flex; align-items: center; justify-content: space-between; gap: 16px; box-shadow: var(--shadow-sm); flex-wrap: wrap;">
              <div style="flex: 1; min-width: 240px;">
                <span style="font-size: 0.75rem; font-weight: 700; color: var(--primary); text-transform: uppercase;">Month ${mod.phaseNumber} • Module ${mod.number} • ${mod.lessons.length} Lessons</span>
                <h4 style="font-size: 1.15rem; margin: 3px 0 6px 0;">${mod.title}</h4>
                <p style="font-size: 0.88rem; color: var(--text-muted); margin: 0;">${mod.description}</p>
              </div>
              <button class="btn-secondary start-mod-btn" data-first-lesson="${mod.lessons[0].id}" style="padding: 10px 18px; font-size: 0.88rem; flex-shrink: 0;">
                Start Module →
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Overview phase filter pill handlers
    document.querySelectorAll("#overviewPhaseFilterPills .phase-filter-pill").forEach(btn => {
      btn.addEventListener("click", () => {
        const ph = btn.getAttribute("data-phase");
        STATE.selectedPhase = ph;
        
        // sync sidebar pill
        document.querySelectorAll("#sidebarPhaseFilter .phase-filter-pill").forEach(b => {
          if (b.getAttribute("data-phase") === ph) b.classList.add("active");
          else b.classList.remove("active");
        });

        renderSidebar(searchInput?.value || "");
        renderOverview();
      });
    });

    document.getElementById("btnStartCourse")?.addEventListener("click", () => {
      let targetLesson = COURSE_DATA.modules[0].lessons[0].id;
      let foundIncomplete = false;
      for (const m of COURSE_DATA.modules) {
        for (const l of m.lessons) {
          if (!STATE.completedLessons.includes(l.id)) {
            targetLesson = l.id;
            foundIncomplete = true;
            break;
          }
        }
        if (foundIncomplete) break;
      }
      renderLesson(targetLesson);
    });

    document.querySelectorAll(".start-mod-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const lessonId = btn.getAttribute("data-first-lesson");
        renderLesson(lessonId);
      });
    });

    document.getElementById("btnOpenJournalHero")?.addEventListener("click", openJournal);
    document.getElementById("btnOpenCheatSheetHero")?.addEventListener("click", openCheatSheet);
    document.getElementById("btnViewCertificateTop")?.addEventListener("click", renderCertificate);

    highlightActiveSidebarLink(null);
  }

  // 9. View: Lesson Renderer
  function renderLesson(lessonId) {
    const data = findLessonAndModule(lessonId);
    if (!data) return;

    STATE.currentView = "lesson";
    STATE.currentLessonId = lessonId;
    window.scrollTo({ top: 0, behavior: "smooth" });

    const { module, lesson, prevLesson, nextLesson } = data;
    const isCompleted = STATE.completedLessons.includes(lesson.id);

    const modItem = document.querySelector(`.module-item[data-module-id="${module.id}"]`);
    if (modItem) modItem.classList.add("open");

    highlightActiveSidebarLink(lesson.id);

    contentArea.innerHTML = `
      <div class="lesson-header">
        <div class="lesson-breadcrumbs">
          <a href="#" id="breadcrumbOverview" style="color: var(--text-subtle); text-decoration: none;">Computer Fundamentals</a>
          <span>›</span>
          <span>Month ${module.phaseNumber} • Module ${module.number}: ${module.title}</span>
        </div>
        <h1 class="lesson-main-title">${lesson.title}</h1>
        <div class="lesson-meta">
          <span>⏱️ ${lesson.readTime}</span>
          <span>•</span>
          <span>${lesson.summary}</span>
        </div>
      </div>

      <div class="lesson-body">
        ${lesson.content}
        
        <div id="interactiveLabContainer"></div>

        <!-- Student Personal Study Notes Widget -->
        <div class="student-notes-widget" id="studentNotesWidget">
          <div class="notes-header">
            <div class="notes-title">
              <span>📝</span> My Study Notes & Personal Reflections
            </div>
            <div class="notes-status-badge" id="notesStatusBadge">
              ✓ Ready
            </div>
          </div>
          <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 12px;">
            Take your time. Explain what you learned in your own words, write down key questions, or note exercises you tried on your computer. Notes autosave to your browser:
          </p>
          <textarea id="lessonNotesTextarea" class="notes-textarea" placeholder="Type your personal takeaways, questions, and reflections for ${lesson.title}..."></textarea>
          <div class="notes-footer-actions">
            <span style="font-size: 0.8rem; color: var(--text-subtle);" id="notesCharCounter">0 characters</span>
            <div style="display: flex; gap: 8px;">
              <button id="btnCopyNote" class="btn-secondary" style="padding: 6px 12px; font-size: 0.82rem;">📋 Copy</button>
              <button id="btnClearNote" class="btn-secondary" style="padding: 6px 12px; font-size: 0.82rem; color: var(--danger);">🗑️ Clear</button>
              <button id="btnSaveNote" class="btn-primary" style="padding: 6px 14px; font-size: 0.82rem;">💾 Save Note</button>
            </div>
          </div>
        </div>
      </div>

      <div class="lesson-footer-nav">
        <div>
          ${prevLesson ? `
            <button id="btnPrevLesson" class="btn-secondary">
              ← Previous: ${prevLesson.title}
            </button>
          ` : `
            <button id="btnBackToOverview" class="btn-secondary">
              ← Course Overview
            </button>
          `}
        </div>

        <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
          <button id="btnToggleComplete" class="complete-lesson-btn ${isCompleted ? 'is-completed' : ''}">
            <span>${isCompleted ? '✓ Completed' : 'Mark as Complete'}</span>
          </button>

          ${nextLesson ? `
            <button id="btnNextLesson" class="btn-primary">
              Next Lesson →
            </button>
          ` : `
            <button id="btnTakeModuleQuiz" class="btn-primary" style="background: #16a34a;">
              Take Module ${module.number} Quiz →
            </button>
          `}
        </div>
      </div>
    `;

    // Initialize Notes Logic
    const notesKey = `cf_notes_${lesson.id}`;
    const textarea = document.getElementById("lessonNotesTextarea");
    const statusBadge = document.getElementById("notesStatusBadge");
    const charCounter = document.getElementById("notesCharCounter");

    if (textarea) {
      const savedNote = localStorage.getItem(notesKey) || "";
      textarea.value = savedNote;
      if (charCounter) charCounter.textContent = `${savedNote.length} characters`;

      let debounceTimer;
      textarea.addEventListener("input", () => {
        if (statusBadge) statusBadge.textContent = "⏳ Saving...";
        if (charCounter) charCounter.textContent = `${textarea.value.length} characters`;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          localStorage.setItem(notesKey, textarea.value);
          if (statusBadge) statusBadge.textContent = "✓ Autosaved to browser";
        }, 600);
      });

      document.getElementById("btnSaveNote")?.addEventListener("click", () => {
        localStorage.setItem(notesKey, textarea.value);
        if (statusBadge) statusBadge.textContent = "✓ Saved just now";
        showToast("Personal study note saved! 📝");
      });

      document.getElementById("btnCopyNote")?.addEventListener("click", () => {
        if (!textarea.value.trim()) {
          showToast("Note is empty");
          return;
        }
        navigator.clipboard.writeText(textarea.value).then(() => {
          showToast("Notes copied to clipboard! 📋");
        });
      });

      document.getElementById("btnClearNote")?.addEventListener("click", () => {
        if (confirm("Are you sure you want to clear your notes for this lesson?")) {
          textarea.value = "";
          localStorage.removeItem(notesKey);
          if (statusBadge) statusBadge.textContent = "Cleared";
          if (charCounter) charCounter.textContent = "0 characters";
          showToast("Notes cleared");
        }
      });
    }

    if (lesson.interactiveType) {
      mountInteractiveLab(lesson.interactiveType);
    }

    document.getElementById("breadcrumbOverview")?.addEventListener("click", (e) => {
      e.preventDefault();
      renderOverview();
    });

    document.getElementById("btnToggleComplete")?.addEventListener("click", () => {
      if (STATE.completedLessons.includes(lesson.id)) {
        STATE.completedLessons = STATE.completedLessons.filter(id => id !== lesson.id);
        showToast("Marked as incomplete");
      } else {
        STATE.completedLessons.push(lesson.id);
        showToast("Lesson completed! 🎉");
      }
      saveState();
      renderLesson(lesson.id);
    });

    document.getElementById("btnPrevLesson")?.addEventListener("click", () => {
      renderLesson(prevLesson.id);
    });

    document.getElementById("btnBackToOverview")?.addEventListener("click", () => {
      renderOverview();
    });

    document.getElementById("btnNextLesson")?.addEventListener("click", () => {
      if (!STATE.completedLessons.includes(lesson.id)) {
        STATE.completedLessons.push(lesson.id);
        saveState();
      }
      renderLesson(nextLesson.id);
    });

    document.getElementById("btnTakeModuleQuiz")?.addEventListener("click", () => {
      if (!STATE.completedLessons.includes(lesson.id)) {
        STATE.completedLessons.push(lesson.id);
        saveState();
      }
      if (module.quiz) {
        renderQuiz(module.quiz.id);
      } else {
        renderFinalExam();
      }
    });
  }

  function highlightActiveSidebarLink(activeId) {
    document.querySelectorAll(".lesson-link").forEach(link => {
      if (link.getAttribute("data-lesson-id") === activeId) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  // 10. Interactive Simulators Mounter (6 Handcrafted Labs)
  function mountInteractiveLab(type) {
    const labBox = document.getElementById("interactiveLabContainer");
    if (!labBox) return;

    // 1. IPO+S Machine Simulator
    if (type === "ipos-simulator") {
      labBox.innerHTML = `
        <div class="interactive-lab-container">
          <div class="lab-header">
            <div class="lab-title-group">
              <span class="lab-tag">Interactive Lab</span>
              <span class="lab-title">The Hands-on IPO+S Machine Simulator</span>
            </div>
            <span style="font-size: 0.8rem; color: var(--text-subtle);">Try it yourself</span>
          </div>
          <div class="lab-content">
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 16px;">
              See the 4 steps of a computer in real-time. Type any math problem or message below and click <strong>"Run Process"</strong>:
            </p>
            
            <div class="ipo-simulator">
              <div class="ipo-controls">
                <input type="text" id="ipoInputField" class="ipo-input-field" placeholder="Try: 25 * 4, or Hello World, or 100 - 35" value="25 * 4">
                <button id="ipoRunBtn" class="btn-primary" style="padding: 10px 20px;">
                  ⚡ Run Process
                </button>
              </div>

              <div class="ipo-pipeline">
                <div class="ipo-node" id="nodeInput">
                  <h6>1. Input</h6>
                  <p id="descInput">Waiting for keyboard data...</p>
                </div>
                <div class="ipo-node" id="nodeProcess">
                  <h6>2. Processing (CPU)</h6>
                  <p id="descProcess">Idle</p>
                </div>
                <div class="ipo-node" id="nodeOutput">
                  <h6>3. Output</h6>
                  <p id="descOutput">Waiting for display</p>
                </div>
                <div class="ipo-node" id="nodeStorage">
                  <h6>4. Storage</h6>
                  <p id="descStorage">Ready to save</p>
                </div>
              </div>

              <div class="ipo-result-screen" id="ipoScreen">
                > System ready. Type an input above to begin the cycle.
              </div>
            </div>
          </div>
        </div>
      `;

      const runBtn = document.getElementById("ipoRunBtn");
      const inputField = document.getElementById("ipoInputField");
      const screen = document.getElementById("ipoScreen");
      const nIn = document.getElementById("nodeInput");
      const nProc = document.getElementById("nodeProcess");
      const nOut = document.getElementById("nodeOutput");
      const nStore = document.getElementById("nodeStorage");

      runBtn?.addEventListener("click", () => {
        const val = inputField.value.trim() || "5 + 5";
        
        [nIn, nProc, nOut, nStore].forEach(n => n.classList.remove("active"));
        
        nIn.classList.add("active");
        document.getElementById("descInput").textContent = `Received: "${val}"`;
        screen.innerHTML = `> [INPUT DETECTED]: Received user input: "${val}"`;

        setTimeout(() => {
          nIn.classList.remove("active");
          nProc.classList.add("active");
          document.getElementById("descProcess").textContent = "CPU calculating instructions...";
          screen.innerHTML += `<br>> [CPU PROCESSING]: Decoding instruction in ALU...`;

          setTimeout(() => {
            nProc.classList.remove("active");
            nOut.classList.add("active");

            let result;
            try {
              if (/^[\d\s\+\-\*\/\(\)\.]+$/.test(val)) {
                result = Function(`'use strict'; return (${val})`)();
              } else {
                result = `"${val.toUpperCase()}" (Processed Text String)`;
              }
            } catch(e) {
              result = val;
            }

            document.getElementById("descOutput").textContent = `Rendered: ${result}`;
            screen.innerHTML += `<br>> [OUTPUT SHOWN]: ${result}`;

            setTimeout(() => {
              nOut.classList.remove("active");
              nStore.classList.add("active");
              document.getElementById("descStorage").textContent = "Saved to storage cache!";
              screen.innerHTML += `<br>> [STORAGE]: Saved result "${result}" to local disk file. Cycle complete!`;
            }, 700);

          }, 700);

        }, 500);
      });
    }

    // 2. Binary & ASCII Light Switch Simulator
    else if (type === "binary-translator") {
      let bits = [0, 0, 0, 0, 0, 0, 0, 0];
      const bitWeights = [128, 64, 32, 16, 8, 4, 2, 1];

      function updateBinaryUI() {
        const sum = bits.reduce((acc, bit, idx) => acc + (bit ? bitWeights[idx] : 0), 0);
        let char = (sum >= 32 && sum <= 126) ? String.fromCharCode(sum) : (sum === 0 ? "NULL (0)" : `Code ${sum}`);
        
        bits.forEach((b, idx) => {
          const btn = document.getElementById(`bitBtn${idx}`);
          if (btn) {
            btn.textContent = b ? "1" : "0";
            if (b) btn.classList.add("active");
            else btn.classList.remove("active");
          }
        });

        const sumVal = document.getElementById("binarySumVal");
        const charVal = document.getElementById("binaryCharVal");
        const hexVal = document.getElementById("binaryHexVal");
        const equationVal = document.getElementById("binaryEquationVal");
        
        if (sumVal) sumVal.textContent = sum;
        if (charVal) charVal.textContent = char;
        if (hexVal) hexVal.textContent = "0x" + sum.toString(16).toUpperCase().padStart(2, '0');

        if (equationVal) {
          const activeWeights = [];
          bits.forEach((b, idx) => {
            if (b) activeWeights.push(bitWeights[idx]);
          });
          if (activeWeights.length === 0) {
            equationVal.innerHTML = `<span style="color:var(--text-subtle);">All switches are OFF &rarr; Total = <strong>0</strong> points</span>`;
          } else {
            equationVal.innerHTML = `<span style="color:var(--primary);">Math: ${activeWeights.join(' + ')} = <strong>${sum}</strong> points!</span>`;
          }
        }
      }

      function setBinaryNumber(num) {
        for (let i = 0; i < 8; i++) {
          bits[i] = (num & bitWeights[i]) ? 1 : 0;
        }
        updateBinaryUI();
      }

      labBox.innerHTML = `
        <div class="interactive-lab-container">
          <div class="lab-header">
            <div class="lab-title-group">
              <span class="lab-tag">Interactive Hardware Simulator</span>
              <span class="lab-title">8-Bit Binary & ASCII Light Switch Bank</span>
            </div>
            <span style="font-size: 0.8rem; color: var(--text-subtle);">Click any switch to toggle 1 / 0</span>
          </div>
          <div class="lab-content">
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">
              Click the 8 switches below to turn electricity <strong>ON (1)</strong> or <strong>OFF (0)</strong>. Watch how each switch adds its points together in real-time:
            </p>

            <div class="binary-sim-container">
              <div class="binary-switch-grid">
                ${bitWeights.map((w, i) => `
                  <div class="binary-switch-col">
                    <span class="switch-val-lbl">+${w}</span>
                    <button class="binary-toggle-btn" id="bitBtn${i}" data-index="${i}">0</button>
                    <span style="font-size: 0.72rem; color: var(--text-subtle);">Bit ${7 - i}</span>
                  </div>
                `).join('')}
              </div>

              <!-- Live Math Addition Breakdown -->
              <div id="binaryEquationVal" style="text-align: center; margin: 12px 0; font-family: var(--font-mono); font-size: 0.96rem; font-weight: 600; padding: 8px 12px; background: var(--bg-surface-alt); border-radius: var(--radius-sm); border: 1px dashed var(--border-medium);">
                All switches are OFF &rarr; Total = 0 points
              </div>

              <div class="binary-results-row">
                <div class="binary-result-box">
                  <div class="binary-result-val" id="binarySumVal">0</div>
                  <div class="binary-result-lbl">Decimal Number</div>
                </div>
                <div class="binary-result-box">
                  <div class="binary-result-val" id="binaryCharVal" style="color: #10b981;">NULL (0)</div>
                  <div class="binary-result-lbl">ASCII Character / Symbol</div>
                </div>
                <div class="binary-result-box">
                  <div class="binary-result-val" id="binaryHexVal" style="color: #8b5cf6;">0x00</div>
                  <div class="binary-result-lbl">Hexadecimal</div>
                </div>
              </div>

              <!-- One-click Beginner Presets from Lesson 1.2 -->
              <div style="margin-top: 14px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                <span style="font-size: 0.85rem; font-weight: 600; color: var(--text-muted);">Quick Lesson Practice:</span>
                <button type="button" class="btn-subtle" id="preset13Btn" style="padding: 4px 10px; font-size: 0.82rem;">🎯 Test 13 (8+4+1)</button>
                <button type="button" class="btn-subtle" id="preset42Btn" style="padding: 4px 10px; font-size: 0.82rem;">🎯 Test 42 (32+8+2)</button>
                <button type="button" class="btn-subtle" id="presetABtn" style="padding: 4px 10px; font-size: 0.82rem;">🔤 Test Letter 'A' (65)</button>
                <button type="button" class="btn-subtle" id="preset255Btn" style="padding: 4px 10px; font-size: 0.82rem;">🌟 All ON (255)</button>
                <button type="button" class="btn-subtle" id="preset456Btn" style="padding: 4px 10px; font-size: 0.82rem; background: rgba(245, 158, 11, 0.15); border-color: #f59e0b; color: var(--text-main);">🤔 What About 456? (16-Bit)</button>
                <button type="button" class="btn-subtle" id="presetResetBtn" style="padding: 4px 10px; font-size: 0.82rem;">🔄 Reset to 0</button>
              </div>

              <!-- 16-Bit 456 Explainer Card -->
              <div id="binary16BitExplainer" style="display: none; margin-top: 14px; padding: 14px; background: rgba(245, 158, 11, 0.08); border: 1px solid #f59e0b; border-radius: var(--radius-sm);">
                <strong style="color: #d97706; font-size: 0.95rem;">💡 How a Computer Makes 456 Using 16 Switches (2 Bytes):</strong>
                <p style="margin: 6px 0; font-size: 0.88rem; color: var(--text-main); line-height: 1.5;">
                  Since 8 switches max out at 255, the computer connects <strong>two 8-bit Bytes</strong> together into 16 switches!
                </p>
                <div style="padding: 8px 12px; background: var(--bg-surface); border-radius: 6px; font-family: var(--font-mono); font-size: 0.9rem; margin-top: 6px; border: 1px solid var(--border-medium);">
                  <span style="color: #8b5cf6; font-weight: 700;">[Upper Byte]:</span> 256 switch is ON (+256)<br>
                  <span style="color: #10b981; font-weight: 700;">[Lower Byte]:</span> 128 + 64 + 8 switches are ON (+200)<br>
                  <span style="color: var(--primary); font-weight: 700;">&rarr; Total: 256 + 200 = 456!</span>
                </div>
                <p style="margin: 6px 0 0 0; font-size: 0.82rem; color: var(--text-muted);">
                  The 8 switches below are now showing the Lower Byte: <code>11001000</code> (+200)!
                </p>
              </div>

              <div style="margin-top: 14px; display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
                <label style="font-size: 0.88rem; color: var(--text-muted); font-weight: 600;">Or type any keyboard letter:</label>
                <input type="text" id="binaryCharInput" maxlength="1" placeholder="e.g. A" style="width: 70px; padding: 6px 10px; font-family: var(--font-mono); font-size: 1.1rem; text-align: center; border: 1px solid var(--border-medium); border-radius: var(--radius-sm); background: var(--bg-surface); color: var(--text-main);">
                <span style="font-size: 0.82rem; color: var(--text-subtle);">(Try typing 'B', '!', or 'z' to see their byte switch pattern)</span>
              </div>
            </div>
          </div>
        </div>
      `;

      bitWeights.forEach((_, idx) => {
        document.getElementById(`bitBtn${idx}`)?.addEventListener("click", () => {
          bits[idx] = bits[idx] ? 0 : 1;
          const explainer = document.getElementById("binary16BitExplainer");
          if (explainer) explainer.style.display = "none";
          updateBinaryUI();
        });
      });

      document.getElementById("preset13Btn")?.addEventListener("click", () => {
        const explainer = document.getElementById("binary16BitExplainer");
        if (explainer) explainer.style.display = "none";
        setBinaryNumber(13);
      });
      document.getElementById("preset42Btn")?.addEventListener("click", () => {
        const explainer = document.getElementById("binary16BitExplainer");
        if (explainer) explainer.style.display = "none";
        setBinaryNumber(42);
      });
      document.getElementById("presetABtn")?.addEventListener("click", () => {
        const explainer = document.getElementById("binary16BitExplainer");
        if (explainer) explainer.style.display = "none";
        setBinaryNumber(65);
      });
      document.getElementById("preset255Btn")?.addEventListener("click", () => {
        const explainer = document.getElementById("binary16BitExplainer");
        if (explainer) explainer.style.display = "none";
        setBinaryNumber(255);
      });
      document.getElementById("presetResetBtn")?.addEventListener("click", () => {
        const explainer = document.getElementById("binary16BitExplainer");
        if (explainer) explainer.style.display = "none";
        setBinaryNumber(0);
      });

      document.getElementById("preset456Btn")?.addEventListener("click", () => {
        // Lower byte for 456 is 456 - 256 = 200 (128 + 64 + 8)
        setBinaryNumber(200);
        const explainer = document.getElementById("binary16BitExplainer");
        if (explainer) explainer.style.display = "block";
        const sumVal = document.getElementById("binarySumVal");
        if (sumVal) sumVal.innerHTML = `<span style="font-size:0.85em; color:#d97706;">456</span> <small style="font-size:0.5em; color:var(--text-subtle);">(16-bit: 256+200)</small>`;
        const eqVal = document.getElementById("binaryEquationVal");
        if (eqVal) eqVal.innerHTML = `<span style="color:#d97706;">16-Bit Math: 256 (Upper Byte) + 128 + 64 + 8 (Lower Byte) = <strong>456</strong> points!</span>`;
      });

      document.getElementById("binaryCharInput")?.addEventListener("input", (e) => {
        const val = e.target.value;
        if (val) {
          const code = val.charCodeAt(0);
          setBinaryNumber(code);
        }
      });

      updateBinaryUI();
    }

    // 3. Hardware Inspector Simulator
    else if (type === "hardware-explorer") {
      labBox.innerHTML = `
        <div class="interactive-lab-container">
          <div class="lab-header">
            <div class="lab-title-group">
              <span class="lab-tag">Interactive Lab</span>
              <span class="lab-title">Computer Hardware Inspector</span>
            </div>
            <span style="font-size: 0.8rem; color: var(--text-subtle);">Click any component</span>
          </div>
          <div class="lab-content">
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 16px;">
              Click each component below to see its real-world analogy, what it looks like, and why your PC needs it:
            </p>

            <div class="hardware-explorer">
              <div class="hw-schematic">
                <button class="hw-click-button active" data-hw="cpu">
                  <div>
                    <div class="hw-btn-name">🧠 CPU (Processor)</div>
                    <div class="hw-btn-analogy">Analogy: The Thinking Worker</div>
                  </div>
                  <span>→</span>
                </button>

                <button class="hw-click-button" data-hw="ram">
                  <div>
                    <div class="hw-btn-name">📋 RAM (Memory Sticks)</div>
                    <div class="hw-btn-analogy">Analogy: The Desk Surface</div>
                  </div>
                  <span>→</span>
                </button>

                <button class="hw-click-button" data-hw="ssd">
                  <div>
                    <div class="hw-btn-name">💾 SSD / Hard Drive</div>
                    <div class="hw-btn-analogy">Analogy: The Filing Cabinet</div>
                  </div>
                  <span>→</span>
                </button>

                <button class="hw-click-button" data-hw="motherboard">
                  <div>
                    <div class="hw-btn-name">🔌 Motherboard</div>
                    <div class="hw-btn-analogy">Analogy: The Nervous System / Highways</div>
                  </div>
                  <span>→</span>
                </button>

                <button class="hw-click-button" data-hw="psu">
                  <div>
                    <div class="hw-btn-name">⚡ Power Supply (PSU)</div>
                    <div class="hw-btn-analogy">Analogy: The Beating Heart</div>
                  </div>
                  <span>→</span>
                </button>
              </div>

              <div class="hw-detail-panel" id="hwDetailPanel"></div>
            </div>
          </div>
        </div>
      `;

      const HW_DETAILS = {
        cpu: {
          title: "Central Processing Unit (CPU)",
          analogy: "The Head Chef in the Kitchen or Worker at the Desk",
          description: "The CPU is a 1-inch square silicon chip with billions of microscopic transistors. Every time you move your mouse, type a letter, or open an app, the CPU calculates the math. Famous brands include Intel (Core i3, i5, i7) and AMD (Ryzen 3, 5, 7)."
        },
        ram: {
          title: "Random Access Memory (RAM)",
          analogy: "The Size of your Physical Work Desk",
          description: "RAM is high-speed temporary memory. If your desk is tiny (4GB RAM), you can only have one book open before things get cramped and slow. If you have a huge desk (16GB RAM), you can keep 30 browser tabs, Spotify, and Word open simultaneously without any lag!"
        },
        ssd: {
          title: "Solid State Drive (SSD Storage)",
          analogy: "The Steel Filing Cabinet in the Corner",
          description: "This is where all your photos, school files, and Windows live forever. Even when you unplug the PC for 5 years, your files stay safe. Modern SSDs have no moving parts and load Windows in 8 seconds, compared to old HDDs which took 2 minutes!"
        },
        motherboard: {
          title: "The Motherboard (Mainboard)",
          analogy: "The Highway System and Nervous System",
          description: "The large circuit board that anchors every part inside the computer. It provides electric tracks (called buses) so the CPU can talk to the RAM and your USB mouse instantly."
        },
        psu: {
          title: "Power Supply Unit (PSU)",
          analogy: "The Beating Heart Pumping Blood",
          description: "Converts high-voltage alternating current (AC) from your home's wall outlet into steady, gentle direct current (DC) that delicate computer microchips can safely consume."
        }
      };

      function showHwDetail(key) {
        const item = HW_DETAILS[key];
        const panel = document.getElementById("hwDetailPanel");
        if (!panel || !item) return;

        panel.innerHTML = `
          <div class="hw-detail-title">${item.title}</div>
          <div class="hw-detail-analogy-box">
            <strong>💡 Everyday Analogy:</strong> ${item.analogy}
          </div>
          <p class="hw-detail-desc">${item.description}</p>
        `;
      }

      showHwDetail("cpu");

      document.querySelectorAll(".hw-click-button").forEach(btn => {
        btn.addEventListener("click", () => {
          document.querySelectorAll(".hw-click-button").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          showHwDetail(btn.getAttribute("data-hw"));
        });
      });
    }

    // 4. Virtual File Explorer Sandbox
    else if (type === "file-simulator") {
      let simFiles = [
        { name: "Resume_Final.docx", type: "doc", size: "24 KB" },
        { name: "Family_Vacation.jpg", type: "img", size: "2.4 MB" },
        { name: "Monthly_Budget.xlsx", type: "xls", size: "48 KB" },
        { name: "Course_Syllabus.pdf", type: "pdf", size: "112 KB" }
      ];

      function renderSimFiles() {
        const grid = document.getElementById("fileSimGrid");
        if (!grid) return;

        grid.innerHTML = simFiles.map((f, i) => {
          let icon = "📄";
          if (f.type === "folder") icon = "📁";
          else if (f.type === "doc") icon = "📝";
          else if (f.type === "pdf") icon = "📕";
          else if (f.type === "xls") icon = "📊";
          else if (f.type === "img") icon = "🖼️";

          return `
            <div class="file-sim-item" data-index="${i}">
              <div class="file-sim-icon">${icon}</div>
              <div class="file-sim-name">${f.name}</div>
              <div class="file-sim-meta">${f.size || 'Folder'}</div>
            </div>
          `;
        }).join('');

        document.querySelectorAll(".file-sim-item").forEach(item => {
          item.addEventListener("click", () => {
            const idx = item.getAttribute("data-index");
            const file = simFiles[idx];
            showToast(`Selected "${file.name}" (${file.type.toUpperCase()})`);
          });
        });
      }

      labBox.innerHTML = `
        <div class="interactive-lab-container">
          <div class="lab-header">
            <div class="lab-title-group">
              <span class="lab-tag">Interactive Lab</span>
              <span class="lab-title">Virtual File Explorer Practice</span>
            </div>
            <span style="font-size: 0.8rem; color: var(--text-subtle);">Practice organizing files</span>
          </div>
          <div class="lab-content">
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 16px;">
              Practice creating folders, adding files, and seeing how file extensions work:
            </p>

            <div class="file-sim-window">
              <div class="file-sim-toolbar">
                <span class="file-sim-path">📁 C: \\ Users \\ Student \\ Documents</span>
                <div class="file-sim-buttons">
                  <button class="file-sim-btn" id="btnSimNewFolder">➕ New Folder</button>
                  <button class="file-sim-btn" id="btnSimNewDoc">📝 New Word Doc (.docx)</button>
                  <button class="file-sim-btn" id="btnSimNewPdf">📕 New PDF (.pdf)</button>
                  <button class="file-sim-btn" id="btnSimReset">🔄 Reset</button>
                </div>
              </div>

              <div class="file-sim-grid" id="fileSimGrid"></div>
            </div>
          </div>
        </div>
      `;

      renderSimFiles();

      document.getElementById("btnSimNewFolder")?.addEventListener("click", () => {
        const name = prompt("Enter folder name:", "My Projects");
        if (name) {
          simFiles.push({ name: name, type: "folder", size: "0 files" });
          renderSimFiles();
          showToast(`Created folder "${name}"!`);
        }
      });

      document.getElementById("btnSimNewDoc")?.addEventListener("click", () => {
        const name = prompt("Enter document name:", "Homework_Essay");
        if (name) {
          simFiles.push({ name: `${name.replace(/\\.docx$/, '')}.docx`, type: "doc", size: "18 KB" });
          renderSimFiles();
          showToast(`Created Word document!`);
        }
      });

      document.getElementById("btnSimNewPdf")?.addEventListener("click", () => {
        const name = prompt("Enter PDF name:", "Receipt");
        if (name) {
          simFiles.push({ name: `${name.replace(/\\.pdf$/, '')}.pdf`, type: "pdf", size: "85 KB" });
          renderSimFiles();
          showToast(`Created PDF file!`);
        }
      });

      document.getElementById("btnSimReset")?.addEventListener("click", () => {
        simFiles = [
          { name: "Resume_Final.docx", type: "doc", size: "24 KB" },
          { name: "Family_Vacation.jpg", type: "img", size: "2.4 MB" },
          { name: "Monthly_Budget.xlsx", type: "xls", size: "48 KB" },
          { name: "Course_Syllabus.pdf", type: "pdf", size: "112 KB" }
        ];
        renderSimFiles();
        showToast("Reset file explorer to defaults");
      });
    }

    // 5. Keyboard Shortcut Trainer Simulator
    else if (type === "shortcut-trainer") {
      const SHORTCUT_TASKS = [
        {
          keys: "Ctrl + C",
          desc: "Task 1 of 4: Press 'Ctrl + C' to COPY this highlighted sentence",
          targetText: "The quick brown fox jumps over the lazy dog.",
          check: (e) => (e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'C')
        },
        {
          keys: "Ctrl + V",
          desc: "Task 2 of 4: Now press 'Ctrl + V' to PASTE the copied sentence",
          targetText: "[Press Ctrl + V to paste here]",
          check: (e) => (e.ctrlKey || e.metaKey) && (e.key === 'v' || e.key === 'V')
        },
        {
          keys: "Ctrl + Z",
          desc: "Task 3 of 4: Uh oh! A mistake was made. Press 'Ctrl + Z' to UNDO it!",
          targetText: "Accidental deletion happened!",
          check: (e) => (e.ctrlKey || e.metaKey) && (e.key === 'z' || e.key === 'Z')
        },
        {
          keys: "Alt + Tab",
          desc: "Task 4 of 4: Switch applications! Press 'Alt + Tab' (or click the button)",
          targetText: "Switching from Browser to Microsoft Word...",
          check: (e) => e.altKey && e.key === 'Tab'
        }
      ];

      let taskIdx = 0;

      function renderTrainer() {
        const task = SHORTCUT_TASKS[taskIdx];
        labBox.innerHTML = `
          <div class="interactive-lab-container">
            <div class="lab-header">
              <div class="lab-title-group">
                <span class="lab-tag">Interactive Practice</span>
                <span class="lab-title">Universal Keyboard Shortcut Trainer</span>
              </div>
              <span style="font-size: 0.8rem; color: var(--text-subtle);">Test your muscle memory</span>
            </div>
            <div class="lab-content">
              <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 16px;">
                ${task.desc}:
              </p>

              <div class="shortcut-task-card">
                <div class="shortcut-key-badge">${task.keys}</div>
                <div class="shortcut-demo-text" id="shortcutTargetText">${task.targetText}</div>
                
                <div class="shortcut-feedback" id="shortcutFeedback">
                  Waiting for you to press the keys on your keyboard...
                </div>

                <div style="margin-top: 16px; display: flex; gap: 10px;">
                  <button id="btnSimulateKey" class="btn-secondary" style="font-size: 0.82rem;">
                    (Click to Simulate If On Mobile Phone)
                  </button>
                  <button id="btnNextTask" class="btn-primary" style="display: none; padding: 8px 18px;">
                    Next Task →
                  </button>
                </div>
              </div>
            </div>
          </div>
        `;

        function succeedTask() {
          const feedback = document.getElementById("shortcutFeedback");
          const nextBtn = document.getElementById("btnNextTask");
          const simBtn = document.getElementById("btnSimulateKey");

          if (feedback) {
            feedback.innerHTML = `🎉 <strong>Success! You executed ${task.keys} perfectly!</strong>`;
            feedback.className = "shortcut-feedback success";
          }
          if (simBtn) simBtn.style.display = "none";
          if (nextBtn) nextBtn.style.display = "inline-block";
        }

        const keyHandler = (e) => {
          if (task.check(e)) {
            e.preventDefault();
            succeedTask();
            window.removeEventListener("keydown", keyHandler);
          }
        };
        window.addEventListener("keydown", keyHandler);

        document.getElementById("btnSimulateKey")?.addEventListener("click", () => {
          succeedTask();
          window.removeEventListener("keydown", keyHandler);
        });

        document.getElementById("btnNextTask")?.addEventListener("click", () => {
          window.removeEventListener("keydown", keyHandler);
          taskIdx = (taskIdx + 1) % SHORTCUT_TASKS.length;
          renderTrainer();
        });
      }

      renderTrainer();
    }

    // 6. Interactive Spreadsheet Formula Sandbox
    else if (type === "spreadsheet-sandbox") {
      let grid = {
        A1: 85, A2: 92, A3: 78, A4: 95, A5: 88,
        B1: 120, B2: 240, B3: 180, B4: 310, B5: 95
      };

      function evaluateFormula(expr) {
        expr = expr.trim();
        if (!expr.startsWith('=')) {
          return "Error: Formula must start with =";
        }
        const formula = expr.substring(1).toUpperCase();

        // Match SUM(X1:X5)
        const matchRange = formula.match(/^([A-Z]+)\(([A-Z][0-9]):([A-Z][0-9])\)$/);
        if (matchRange) {
          const fn = matchRange[1];
          const startCol = matchRange[2].charAt(0);
          const startRow = parseInt(matchRange[2].substring(1));
          const endCol = matchRange[3].charAt(0);
          const endRow = parseInt(matchRange[3].substring(1));

          const vals = [];
          if (startCol === endCol) {
            for (let r = startRow; r <= endRow; r++) {
              const k = `${startCol}${r}`;
              vals.push(parseFloat(grid[k]) || 0);
            }
          }

          if (fn === "SUM") return vals.reduce((a, b) => a + b, 0);
          if (fn === "AVERAGE") return (vals.reduce((a, b) => a + b, 0) / (vals.length || 1)).toFixed(2);
          if (fn === "COUNT") return vals.length;
          if (fn === "MAX") return Math.max(...vals);
          if (fn === "MIN") return Math.min(...vals);
        }

        // Match IF(A1>=50, "Pass", "Fail")
        const matchIf = formula.match(/^IF\(([A-Z][0-9])\s*([><=]+)\s*([0-9]+)\s*,\s*"?([^",\)]+)"?\s*,\s*"?([^",\)]+)"?\)$/);
        if (matchIf) {
          const cellVal = parseFloat(grid[matchIf[1]]) || 0;
          const op = matchIf[2];
          const threshold = parseFloat(matchIf[3]);
          const trueVal = matchIf[4].trim();
          const falseVal = matchIf[5].trim();

          let condition = false;
          if (op === ">=") condition = cellVal >= threshold;
          else if (op === "<=") condition = cellVal <= threshold;
          else if (op === ">") condition = cellVal > threshold;
          else if (op === "<") condition = cellVal < threshold;
          else if (op === "=" || op === "==") condition = cellVal === threshold;

          return condition ? trueVal : falseVal;
        }

        return "Try: =SUM(A1:A5) or =AVERAGE(B1:B5)";
      }

      function renderSheetUI() {
        const input = document.getElementById("sheetFormulaInput");
        const resBox = document.getElementById("sheetResultDisplay");
        if (input && resBox) {
          const res = evaluateFormula(input.value);
          resBox.textContent = res;
        }
      }

      labBox.innerHTML = `
        <div class="interactive-lab-container">
          <div class="lab-header">
            <div class="lab-title-group">
              <span class="lab-tag">Interactive Workplace Lab</span>
              <span class="lab-title">Live Spreadsheet Formula Sandbox</span>
            </div>
            <span style="font-size: 0.8rem; color: var(--text-subtle);">Edit numbers & type formulas</span>
          </div>
          <div class="lab-content">
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">
              Enter any numbers in cells A1:B5. Click formula presets or type your own formula in the bar:
            </p>

            <div class="spreadsheet-sim-container">
              <div class="formula-bar-box">
                <span class="formula-fx">fx</span>
                <input type="text" id="sheetFormulaInput" class="formula-input" value="=SUM(A1:A5)">
                <div style="font-family: var(--font-mono); font-weight: 700; color: #10b981; font-size: 1.1rem; padding: 0 10px;" id="sheetResultDisplay">438</div>
              </div>

              <table class="sheet-table">
                <thead>
                  <tr>
                    <th style="width: 50px;">#</th>
                    <th>A (Exam Scores)</th>
                    <th>B (Monthly Sales $)</th>
                  </tr>
                </thead>
                <tbody>
                  ${[1, 2, 3, 4, 5].map(r => `
                    <tr>
                      <th style="background: var(--bg-surface-alt);">${r}</th>
                      <td><input type="number" class="sheet-cell-input" data-cell="A${r}" value="${grid['A' + r]}"></td>
                      <td><input type="number" class="sheet-cell-input" data-cell="B${r}" value="${grid['B' + r]}"></td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>

              <div class="formula-preset-chips">
                <span style="font-size: 0.8rem; color: var(--text-subtle); align-self: center;">Try Presets:</span>
                <button class="preset-chip" data-formula="=SUM(A1:A5)">=SUM(A1:A5)</button>
                <button class="preset-chip" data-formula="=AVERAGE(A1:A5)">=AVERAGE(A1:A5)</button>
                <button class="preset-chip" data-formula="=SUM(B1:B5)">=SUM(B1:B5)</button>
                <button class="preset-chip" data-formula="=AVERAGE(B1:B5)">=AVERAGE(B1:B5)</button>
                <button class="preset-chip" data-formula="=MAX(A1:A5)">=MAX(A1:A5)</button>
                <button class="preset-chip" data-formula="=MIN(B1:B5)">=MIN(B1:B5)</button>
                <button class="preset-chip" data-formula='=IF(A1>=90, "Pass", "Fail")'>=IF(A1>=90, "Pass", "Fail")</button>
              </div>
            </div>
          </div>
        </div>
      `;

      document.querySelectorAll(".sheet-cell-input").forEach(cellInp => {
        cellInp.addEventListener("input", (e) => {
          const cellId = cellInp.getAttribute("data-cell");
          grid[cellId] = parseFloat(e.target.value) || 0;
          renderSheetUI();
        });
      });

      const formulaInput = document.getElementById("sheetFormulaInput");
      formulaInput?.addEventListener("input", renderSheetUI);

      document.querySelectorAll(".preset-chip").forEach(btn => {
        btn.addEventListener("click", () => {
          if (formulaInput) {
            formulaInput.value = btn.getAttribute("data-formula");
            renderSheetUI();
          }
        });
      });

      renderSheetUI();
    }

    // 7. Live Web Request Lifecycle Simulator
    else if (type === "website-lifecycle-simulator") {
      labBox.innerHTML = `
        <div class="interactive-lab-container">
          <div class="lab-header">
            <div class="lab-title-group">
              <span class="lab-tag">Interactive Web Lab</span>
              <span class="lab-title">Live "How a Website Loads" Simulator</span>
            </div>
            <span style="font-size: 0.8rem; color: var(--text-subtle);">Watch the 250ms web request lifecycle</span>
          </div>
          <div class="lab-content">
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 16px;">
              Enter a website URL below and click <strong>"🚀 Request Website"</strong> to watch DNS lookup, the TCP/TLS handshake, the HTTP GET response, and browser rendering in action:
            </p>

            <div class="ipo-simulator">
              <div class="ipo-controls">
                <input type="text" id="webUrlInput" class="ipo-input-field" value="https://www.learncomputer.org" placeholder="https://example.com">
                <button id="webRequestBtn" class="btn-primary" style="padding: 10px 22px;">
                  🚀 Request Website
                </button>
              </div>

              <div class="ipo-pipeline" style="grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));">
                <div class="ipo-node" id="webStepDns">
                  <h6>1. DNS Lookup</h6>
                  <p id="descDns">Waiting...</p>
                </div>
                <div class="ipo-node" id="webStepHandshake">
                  <h6>2. TCP + TLS</h6>
                  <p id="descHandshake">Idle</p>
                </div>
                <div class="ipo-node" id="webStepHttp">
                  <h6>3. HTTP GET</h6>
                  <p id="descHttp">Awaiting request</p>
                </div>
                <div class="ipo-node" id="webStepDom">
                  <h6>4. DOM & CSSOM</h6>
                  <p id="descDom">Awaiting HTML</p>
                </div>
                <div class="ipo-node" id="webStepPaint">
                  <h6>5. Screen Paint</h6>
                  <p id="descPaint">Ready</p>
                </div>
              </div>

              <div class="ipo-result-screen" id="webConsoleLog" style="min-height: 90px;">
                > Ready. Enter a URL above and click "Request Website" to simulate the network request.
              </div>
            </div>
          </div>
        </div>
      `;

      const reqBtn = document.getElementById("webRequestBtn");
      const urlInput = document.getElementById("webUrlInput");
      const consoleLog = document.getElementById("webConsoleLog");
      const sDns = document.getElementById("webStepDns");
      const sHandshake = document.getElementById("webStepHandshake");
      const sHttp = document.getElementById("webStepHttp");
      const sDom = document.getElementById("webStepDom");
      const sPaint = document.getElementById("webStepPaint");

      reqBtn?.addEventListener("click", () => {
        const url = urlInput.value.trim() || "https://www.learncomputer.org";
        const domain = url.replace(/^https?:\/\//, '').split('/')[0];
        const nodes = [sDns, sHandshake, sHttp, sDom, sPaint];
        nodes.forEach(n => n.classList.remove("active"));

        // Step 1: DNS Lookup
        sDns.classList.add("active");
        document.getElementById("descDns").textContent = `Querying DNS for ${domain}...`;
        consoleLog.innerHTML = `> [DNS]: Asking ISP resolver: "What IP address belongs to ${domain}?"`;

        setTimeout(() => {
          document.getElementById("descDns").textContent = `Resolved: 104.21.48.12`;
          consoleLog.innerHTML += `<br>> [DNS SUCCESS]: Resolved ${domain} → 104.21.48.12 (in 18ms)`;

          // Step 2: TCP + TLS
          sDns.classList.remove("active");
          sHandshake.classList.add("active");
          document.getElementById("descHandshake").textContent = `SYN → SYN-ACK → ACK`;
          consoleLog.innerHTML += `<br>> [TCP/TLS]: Connecting to port 443. Exchanging TLS cryptographic keys. Verified SSL Certificate.`;

          setTimeout(() => {
            document.getElementById("descHandshake").textContent = `Encrypted HTTPS (TLS 1.3)`;

            // Step 3: HTTP GET
            sHandshake.classList.remove("active");
            sHttp.classList.add("active");
            document.getElementById("descHttp").textContent = `Sending: GET / HTTP/2`;
            consoleLog.innerHTML += `<br>> [HTTP GET]: Browser sent request headers. Server returned: 200 OK (Content-Type: text/html, Size: 18 KB)`;

            setTimeout(() => {
              document.getElementById("descHttp").textContent = `200 OK (Received HTML)`;

              // Step 4: DOM & CSSOM
              sHttp.classList.remove("active");
              sDom.classList.add("active");
              document.getElementById("descDom").textContent = `Constructing DOM Tree`;
              consoleLog.innerHTML += `<br>> [PARSING]: Browser engine parsing HTML tags, fetching style.css (CSSOM), calculating layout geometry reflow...`;

              setTimeout(() => {
                document.getElementById("descDom").textContent = `Render Tree Ready`;

                // Step 5: Screen Paint
                sDom.classList.remove("active");
                sPaint.classList.add("active");
                document.getElementById("descPaint").textContent = `Painted in 160ms!`;
                consoleLog.innerHTML += `<br>> [PAINT COMPLETE]: GPU rasterized pixels! First Contentful Paint: 185ms. Page interactive! 🎉`;
              }, 600);

            }, 600);

          }, 600);

        }, 500);
      });
    }
  }

  // 11. View: Checkpoint Quiz Renderer
  function renderQuiz(quizId) {
    let mod = null;
    for (const m of COURSE_DATA.modules) {
      if (m.quiz && m.quiz.id === quizId) {
        mod = m;
        break;
      }
    }
    if (!mod) return;

    STATE.currentView = "quiz";
    STATE.currentQuizId = quizId;
    window.scrollTo({ top: 0, behavior: "smooth" });

    const quiz = mod.quiz;
    let userAnswers = {};
    let isGraded = false;

    contentArea.innerHTML = `
      <div class="quiz-container">
        <div class="quiz-header">
          <span class="quiz-badge">Module ${mod.number} Checkpoint Quiz</span>
          <h1 class="quiz-title">${quiz.title}</h1>
          <p style="color: var(--text-muted); font-size: 0.95rem;">
            ${quiz.description}
          </p>
        </div>

        <div id="quizQuestionsContainer"></div>

        <div style="margin-top: 32px; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-light); padding-top: 20px; flex-wrap: wrap; gap: 12px;">
          <button id="btnReturnToLesson" class="btn-secondary">
            ← Review Module ${mod.number} Lessons
          </button>
          <button id="btnGradeQuiz" class="btn-primary" style="padding: 12px 30px;">
            Grade My Quiz
          </button>
        </div>
      </div>
    `;

    function renderQuestions() {
      const container = document.getElementById("quizQuestionsContainer");
      if (!container) return;

      container.innerHTML = quiz.questions.map((q, qIndex) => `
        <div class="quiz-question-card" data-q-index="${qIndex}">
          <div class="quiz-question-number">Question ${qIndex + 1} of ${quiz.questions.length}</div>
          <div class="quiz-question-text">${q.question}</div>
          
          <div class="quiz-options-list">
            ${q.options.map((opt, optIndex) => `
              <button class="quiz-option-item ${userAnswers[qIndex] === optIndex ? 'selected' : ''}" data-q="${qIndex}" data-opt="${optIndex}">
                <div class="quiz-option-marker">${String.fromCharCode(65 + optIndex)}</div>
                <div>${opt}</div>
              </button>
            `).join('')}
          </div>

          <div class="quiz-explanation-box" id="quiz-exp-${qIndex}"></div>
        </div>
      `).join('');

      document.querySelectorAll(".quiz-option-item").forEach(item => {
        item.addEventListener("click", () => {
          if (isGraded) return;
          const qIdx = parseInt(item.getAttribute("data-q"));
          const optIdx = parseInt(item.getAttribute("data-opt"));
          userAnswers[qIdx] = optIdx;

          document.querySelectorAll(`.quiz-option-item[data-q="${qIdx}"]`).forEach(btn => {
            btn.classList.remove("selected");
          });
          item.classList.add("selected");
        });
      });

      document.getElementById("btnGradeQuiz")?.addEventListener("click", () => {
        if (Object.keys(userAnswers).length < quiz.questions.length) {
          alert("Please answer all questions before submitting!");
          return;
        }

        isGraded = true;
        let score = 0;

        quiz.questions.forEach((q, qIdx) => {
          const selected = userAnswers[qIdx];
          const isCorrect = selected === q.correct;
          if (isCorrect) score++;

          const expBox = document.getElementById(`quiz-exp-${qIdx}`);
          if (expBox) {
            expBox.classList.add("show");
            if (isCorrect) {
              expBox.className = "quiz-explanation-box show correct";
              expBox.innerHTML = `<strong>✅ Correct!</strong> ${q.explanation}`;
            } else {
              expBox.className = "quiz-explanation-box show wrong";
              expBox.innerHTML = `<strong>❌ Not quite.</strong> ${q.explanation}`;
            }
          }

          document.querySelectorAll(`.quiz-option-item[data-q="${qIdx}"]`).forEach(btn => {
            const optIdx = parseInt(btn.getAttribute("data-opt"));
            btn.classList.add("disabled");
            if (optIdx === q.correct) {
              btn.classList.add("correct");
            } else if (optIdx === selected) {
              btn.classList.add("wrong");
            }
          });
        });

        STATE.quizScores[quiz.id] = Math.round((score / quiz.questions.length) * 100);
        saveState();

        const submitBtn = document.getElementById("btnGradeQuiz");
        if (submitBtn) {
          submitBtn.textContent = `Score: ${score}/${quiz.questions.length} (${STATE.quizScores[quiz.id]}%) - Continue →`;
          submitBtn.style.background = "#16a34a";
          submitBtn.onclick = () => {
            const nextMod = COURSE_DATA.modules.find(m => m.number === mod.number + 1);
            if (nextMod) {
              renderLesson(nextMod.lessons[0].id);
            } else {
              renderFinalExam();
            }
          };
        }
      });

      document.getElementById("btnReturnToLesson")?.addEventListener("click", () => {
        renderLesson(mod.lessons[0].id);
      });
    }

    renderQuestions();
  }

  // 12. View: Final Certification Exam (25 Questions)
  function renderFinalExam() {
    STATE.currentView = "final-exam";
    window.scrollTo({ top: 0, behavior: "smooth" });

    const exam = COURSE_DATA.finalExam;
    let userAnswers = {};
    let isGraded = false;

    contentArea.innerHTML = `
      <div class="quiz-container">
        <div class="quiz-header">
          <span class="quiz-badge" style="background: #e0e7ff; color: #3730a3;">Official Graduation Exam</span>
          <h1 class="quiz-title">${exam.title}</h1>
          <p style="color: var(--text-muted); font-size: 0.95rem;">
            Answer all ${exam.questions.length} comprehensive questions covering hardware, operating systems, networking, cybersecurity, web architecture, and SEO. Score <strong>80% (${Math.ceil(exam.questions.length * 0.8)}/${exam.questions.length})</strong> or higher to graduate and claim your official, verified <strong>Diploma Certificate of Completion</strong>!
          </p>
        </div>

        <div id="examQuestionsContainer">
          ${exam.questions.map((q, qIndex) => `
            <div class="quiz-question-card" data-q-index="${qIndex}">
              <div class="quiz-question-number">Question ${qIndex + 1} of ${exam.questions.length}</div>
              <div class="quiz-question-text">${q.question}</div>
              
              <div class="quiz-options-list">
                ${q.options.map((opt, optIndex) => `
                  <button class="quiz-option-item ${userAnswers[qIndex] === optIndex ? 'selected' : ''}" data-q="${qIndex}" data-opt="${optIndex}">
                    <div class="quiz-option-marker">${String.fromCharCode(65 + optIndex)}</div>
                    <div>${opt}</div>
                  </button>
                `).join('')}
              </div>

              <div class="quiz-explanation-box" id="exam-exp-${qIndex}"></div>
            </div>
          `).join('')}
        </div>

        <div style="margin-top: 32px; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-light); padding-top: 20px; flex-wrap: wrap; gap: 12px;">
          <button id="btnReturnOverview" class="btn-secondary">
            ← Course Overview
          </button>
          <button id="btnSubmitFinalExam" class="btn-primary" style="padding: 12px 32px; background: #1e3a8a;">
            Submit Final Exam
          </button>
        </div>
      </div>
    `;

    document.querySelectorAll(".quiz-option-item").forEach(item => {
      item.addEventListener("click", () => {
        if (isGraded) return;
        const qIdx = parseInt(item.getAttribute("data-q"));
        const optIdx = parseInt(item.getAttribute("data-opt"));
        userAnswers[qIdx] = optIdx;

        document.querySelectorAll(`.quiz-option-item[data-q="${qIdx}"]`).forEach(btn => {
          btn.classList.remove("selected");
        });
        item.classList.add("selected");
      });
    });

    document.getElementById("btnReturnOverview")?.addEventListener("click", () => {
      renderOverview();
    });

    document.getElementById("btnSubmitFinalExam")?.addEventListener("click", () => {
      if (Object.keys(userAnswers).length < exam.questions.length) {
        alert(`Please complete all ${exam.questions.length} questions before submitting!`);
        return;
      }

      isGraded = true;
      let score = 0;

      exam.questions.forEach((q, qIdx) => {
        const selected = userAnswers[qIdx];
        const isCorrect = selected === q.correct;
        if (isCorrect) score++;

        const expBox = document.getElementById(`exam-exp-${qIdx}`);
        if (expBox) {
          expBox.classList.add("show");
          if (isCorrect) {
            expBox.className = "quiz-explanation-box show correct";
            expBox.innerHTML = `<strong>✅ Correct!</strong> ${q.explanation}`;
          } else {
            expBox.className = "quiz-explanation-box show wrong";
            expBox.innerHTML = `<strong>❌ Not quite.</strong> ${q.explanation}`;
          }
        }

        document.querySelectorAll(`.quiz-option-item[data-q="${qIdx}"]`).forEach(btn => {
          const optIdx = parseInt(btn.getAttribute("data-opt"));
          btn.classList.add("disabled");
          if (optIdx === q.correct) {
            btn.classList.add("correct");
          } else if (optIdx === selected) {
            btn.classList.add("wrong");
          }
        });
      });

      const percent = Math.round((score / exam.questions.length) * 100);
      const passed = percent >= exam.passingScore;

      STATE.finalExamPassed = passed;
      if (passed) {
        STATE.certDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
      }
      saveState();

      const submitBtn = document.getElementById("btnSubmitFinalExam");
      if (submitBtn) {
        if (passed) {
          submitBtn.textContent = `Passed with ${percent}%! Claim Certificate 🎓`;
          submitBtn.style.background = "#16a34a";
          submitBtn.onclick = () => renderCertificate();
        } else {
          submitBtn.textContent = `Score: ${percent}%. Need 80% to pass. Click to Retry 🔄`;
          submitBtn.style.background = "#dc2626";
          submitBtn.onclick = () => renderFinalExam();
        }
      }
    });
  }

  // 13. View: Verified Certificate of Completion
  function renderCertificate() {
    STATE.currentView = "certificate";
    window.scrollTo({ top: 0, behavior: "smooth" });

    contentArea.innerHTML = `
      <div class="cert-container">
        <div class="cert-banner">
          <div>
            <h3 style="margin: 0; font-size: 1.25rem;">🎓 Official Graduation Diploma</h3>
            <p style="margin: 4px 0 0 0; font-size: 0.88rem; color: #bbf7d0;">
              Congratulations on mastering all 12 modules and passing the comprehensive examination.
            </p>
          </div>
          <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            <button id="btnChangeName" class="btn-secondary" style="background: white; color: #166534; border: none;">
              ✏️ Edit Name
            </button>
            <button id="btnPrintCert" class="btn-primary" style="background: #15803d;">
              🖨️ Print / Save as PDF
            </button>
            <button id="btnCertBack" class="btn-secondary" style="background: rgba(255,255,255,0.2); color: white; border: none;">
              ← Overview
            </button>
          </div>
        </div>

        <div class="cert-card" id="printableCertCard">
          <div class="cert-inner-border">
            <div class="cert-org-title">ByteCraft Digital Skills Academy</div>
            <h2 class="cert-heading">Certificate of Completion</h2>

            <p class="cert-recipient-intro">This is proudly presented to</p>
            <div class="cert-student-name" id="certStudentName">${STATE.studentName}</div>

            <p class="cert-achievement-text">
              for successfully completing the comprehensive 12-module masterclass in
              <br><strong style="color: #1e3a8a; font-size: 1.15rem;">Complete Computer & Web Fundamentals</strong>
              <br>demonstrating verified competence in Computer Hardware Architecture, Operating Systems, File Management, Keyboard Productivity, Computer Networking, Cybersecurity Defense, IT Troubleshooting, Workplace Productivity, Web Technologies, and Search Engine Optimization (SEO).
            </p>

            <div class="cert-footer-row">
              <div class="cert-sign-block">
                <div class="cert-sign-line">Marcus Vance</div>
                <div class="cert-sign-title">Academic Director</div>
              </div>

              <div class="cert-seal">
                <span>OFFICIAL</span>
                <span>VERIFIED</span>
                <span>HONOR</span>
              </div>

              <div class="cert-sign-block" style="text-align: right;">
                <div style="font-weight: 600; font-size: 0.95rem; color: #1e3a8a;">${STATE.certDate}</div>
                <div class="cert-sign-title">Date of Graduation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    document.getElementById("btnCertBack")?.addEventListener("click", renderOverview);
    document.getElementById("btnPrintCert")?.addEventListener("click", () => window.print());
    document.getElementById("btnChangeName")?.addEventListener("click", openNameModal);
  }

  // 14. Student Name Modal
  const nameModal = document.getElementById("nameModal");
  const nameInput = document.getElementById("nameModalInput");
  const saveNameBtn = document.getElementById("saveNameBtn");
  const cancelNameBtn = document.getElementById("cancelNameBtn");

  function openNameModal() {
    if (!nameModal) return;
    nameInput.value = STATE.studentName;
    nameModal.classList.add("open");
    nameInput.focus();
  }

  function closeNameModal() {
    if (!nameModal) return;
    nameModal.classList.remove("open");
  }

  saveNameBtn?.addEventListener("click", () => {
    const val = nameInput.value.trim();
    if (val) {
      STATE.studentName = val;
      saveState();
      const certName = document.getElementById("certStudentName");
      if (certName) certName.textContent = val;
      closeNameModal();
      showToast("Name updated successfully!");
    }
  });

  cancelNameBtn?.addEventListener("click", closeNameModal);
  document.getElementById("studentBadgeBtn")?.addEventListener("click", openNameModal);

  // 15. Cheat Sheet Modal
  const cheatSheetModal = document.getElementById("cheatSheetModal");
  const openCheatSheetBtn = document.getElementById("openCheatSheetBtn");
  const closeCheatSheetBtn = document.getElementById("closeCheatSheetBtn");

  function openCheatSheet() {
    if (cheatSheetModal) cheatSheetModal.classList.add("open");
  }

  function closeCheatSheet() {
    if (cheatSheetModal) cheatSheetModal.classList.remove("open");
  }

  openCheatSheetBtn?.addEventListener("click", openCheatSheet);
  closeCheatSheetBtn?.addEventListener("click", closeCheatSheet);

  cheatSheetModal?.addEventListener("click", (e) => {
    if (e.target === cheatSheetModal) closeCheatSheet();
  });

  // 16. Study Journal Modal
  const journalModal = document.getElementById("journalModal");
  const closeJournalBtn = document.getElementById("closeJournalBtn");
  const journalEntriesContainer = document.getElementById("journalEntriesContainer");
  const openJournalBtn = document.getElementById("openJournalBtn");
  const mobileNavJournal = document.getElementById("mobileNavJournal");
  const copyAllNotesBtn = document.getElementById("copyAllNotesBtn");
  const printJournalBtn = document.getElementById("printJournalBtn");

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function openJournal(e) {
    if (e) e.preventDefault();
    if (!journalModal || !journalEntriesContainer) return;

    let entries = [];
    COURSE_DATA.modules.forEach(mod => {
      mod.lessons.forEach(les => {
        const note = localStorage.getItem(`cf_notes_${les.id}`);
        if (note && note.trim().length > 0) {
          entries.push({
            moduleNum: mod.number,
            moduleTitle: mod.title,
            lessonId: les.id,
            lessonTitle: les.title,
            noteText: note.trim()
          });
        }
      });
    });

    if (entries.length === 0) {
      journalEntriesContainer.innerHTML = `
        <div style="text-align: center; padding: 40px 20px; color: var(--text-subtle);">
          <div style="font-size: 2.5rem; margin-bottom: 12px;">📓</div>
          <h4 style="font-size: 1.15rem; color: var(--text-main); margin-bottom: 6px;">Your Study Journal is Fresh & Clean</h4>
          <p style="font-size: 0.9rem; max-width: 440px; margin: 0 auto;">
            As you study through the 12 modules, use the <strong>"My Study Notes & Personal Reflections"</strong> box at the bottom of each lesson to write your own takeaways and reflections. All your notes will automatically compile here into your personal master study journal!
          </p>
        </div>
      `;
    } else {
      journalEntriesContainer.innerHTML = entries.map(ent => `
        <div class="journal-entry-card">
          <div class="journal-entry-meta">
            <span>Module ${ent.moduleNum} • ${ent.lessonTitle}</span>
            <span>${ent.noteText.length} chars</span>
          </div>
          <div class="journal-entry-text">${escapeHtml(ent.noteText)}</div>
        </div>
      `).join('');
    }

    journalModal.classList.add("open");
  }

  function closeJournal(e) {
    if (e) e.preventDefault();
    journalModal?.classList.remove("open");
  }

  openJournalBtn?.addEventListener("click", openJournal);
  mobileNavJournal?.addEventListener("click", openJournal);
  closeJournalBtn?.addEventListener("click", closeJournal);
  journalModal?.addEventListener("click", (e) => {
    if (e.target === journalModal) closeJournal();
  });

  copyAllNotesBtn?.addEventListener("click", () => {
    let fullText = `# My Complete Computer & Web Fundamentals Study Journal\nStudent: ${STATE.studentName}\n\n`;
    let count = 0;
    COURSE_DATA.modules.forEach(mod => {
      mod.lessons.forEach(les => {
        const note = localStorage.getItem(`cf_notes_${les.id}`);
        if (note && note.trim().length > 0) {
          fullText += `## [Module ${mod.number}] ${les.title}\n${note.trim()}\n\n---\n\n`;
          count++;
        }
      });
    });

    if (count === 0) {
      showToast("No notes to copy yet!");
      return;
    }

    navigator.clipboard.writeText(fullText).then(() => {
      showToast(`Copied notes from ${count} lessons to clipboard! 📋`);
    });
  });

  printJournalBtn?.addEventListener("click", () => {
    window.print();
  });

  // Top header "Overview" brand link
  document.getElementById("navBrandLink")?.addEventListener("click", (e) => {
    e.preventDefault();
    renderOverview();
  });

  // Initialize
  renderSidebar();
  updateProgressUI();
  renderOverview();
});
