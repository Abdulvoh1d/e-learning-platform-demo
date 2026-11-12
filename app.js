(() => {
  "use strict";

  const STORAGE_KEY = "learnwell-demo-progress-v1";
  const courses = [
    {
      id: "creative-writing", title: "Writing with clarity", category: "Creative skills", level: "Beginner", duration: "1 hr 20 min", lessons: 3,
      description: "Find your voice, shape a strong opening, and make every sentence earn its place.", instructor: "Maya Chen", symbol: "Aa", art: "#dce9cf", accent: "#f1a66c",
      lessonsList: [
        { title: "Start with one clear idea", duration: "12 min", text: "A clear piece of writing begins with a clear intention. In this sample lesson, practice naming the one thing you want your reader to remember, then use it to guide the details you keep." },
        { title: "Build a memorable opening", duration: "16 min", text: "An opening is an invitation. Try beginning with a vivid detail, a useful question, or a small moment of change. Keep the promise of that first line in view as you continue." },
        { title: "Edit for a smoother rhythm", duration: "14 min", text: "Read a draft aloud to notice where the rhythm stumbles. In this demo exercise, remove repeated ideas, vary sentence length, and replace vague words with concrete ones." }
      ],
      quiz: [
        { question: "What is a useful first step before drafting?", options: ["Choose one main idea", "Add as many details as possible", "Write the conclusion first every time"], answer: 0 },
        { question: "Which edit most often improves clarity?", options: ["Use longer words", "Remove repeated ideas", "Add extra adjectives"], answer: 1 },
        { question: "What can reading aloud help you notice?", options: ["Sentence rhythm", "The reader's private thoughts", "The final page count"], answer: 0 }
      ]
    },
    {
      id: "everyday-design", title: "Everyday visual design", category: "Design", level: "Beginner", duration: "1 hr 45 min", lessons: 3,
      description: "Use spacing, color, and hierarchy to make everyday layouts easier to understand.", instructor: "Jordan Reyes", symbol: "◒", art: "#f4dfce", accent: "#6f9b82",
      lessonsList: [
        { title: "Give your layout room", duration: "15 min", text: "Whitespace is an active design choice. This sample lesson explores how consistent spacing groups related information and gives a page a calmer, more legible feel." },
        { title: "Create a clear visual order", duration: "18 min", text: "A strong hierarchy helps people know where to look first. Compare scale, position, and contrast to make the most useful information easiest to find." },
        { title: "Choose a small color palette", duration: "13 min", text: "A compact palette can make a design feel cohesive. Start with a neutral base, add one dependable color, and reserve a brighter accent for moments that need attention." }
      ],
      quiz: [
        { question: "What does visual hierarchy help someone do?", options: ["Know where to look first", "Print without ink", "Make every element identical"], answer: 0 },
        { question: "What is whitespace in a layout?", options: ["Unused design space", "A color filter", "A type of image file"], answer: 0 },
        { question: "A compact palette is useful because it can…", options: ["Support a cohesive look", "Remove the need for contrast", "Make text impossible to change"], answer: 0 }
      ]
    },
    {
      id: "calm-focus", title: "A calmer focus routine", category: "Wellbeing", level: "All levels", duration: "55 min", lessons: 3,
      description: "Build a practical, flexible routine for protecting attention during a busy day.", instructor: "Avery Patel", symbol: "☼", art: "#d5e9e5", accent: "#e7a170",
      lessonsList: [
        { title: "Notice your attention patterns", duration: "11 min", text: "A routine works best when it fits real life. This sample lesson invites you to notice when focus comes easily, what tends to interrupt it, and which tasks deserve your clearest attention." },
        { title: "Plan a small focus block", duration: "12 min", text: "Start with a manageable stretch of focused work and a clear stopping point. Write down the next action before you begin, and give yourself a short reset between blocks." },
        { title: "Make breaks work for you", duration: "10 min", text: "A useful break is a deliberate change of pace. Step away from the task, move a little, or rest your eyes; then decide what you will return to next." }
      ],
      quiz: [
        { question: "What makes a focus routine more practical?", options: ["Fitting it to your real patterns", "Making it identical every day", "Scheduling without breaks"], answer: 0 },
        { question: "What is helpful before a focus block?", options: ["Choose a clear next action", "Open every notification", "Skip deciding what matters"], answer: 0 },
        { question: "A deliberate break can help you…", options: ["Reset before returning", "Guarantee perfect concentration", "Avoid planning altogether"], answer: 0 }
      ]
    },
    {
      id: "smart-budgeting", title: "Budgeting, made simple", category: "Everyday skills", level: "Beginner", duration: "1 hr 10 min", lessons: 3,
      description: "Create a flexible monthly plan and build habits that make money decisions feel clearer.", instructor: "Sam Bennett", symbol: "$", art: "#e5e0f0", accent: "#efa774",
      lessonsList: [
        { title: "Map your monthly picture", duration: "14 min", text: "A budget is a planning tool, not a judgment. In this fictional demo lesson, group regular income and expenses, then leave room for costs that vary from month to month." },
        { title: "Set goals that feel doable", duration: "12 min", text: "Choose a goal you can describe clearly, set a realistic time frame, and identify one small recurring action that supports it. Adjust the plan when your circumstances change." },
        { title: "Review and adjust your plan", duration: "13 min", text: "A quick monthly check-in helps a plan stay useful. Compare what you expected with what happened, notice patterns, and make one practical adjustment for the next month." }
      ],
      quiz: [
        { question: "What is a helpful way to think about a budget?", options: ["A flexible planning tool", "A promise that nothing will change", "A list that cannot be adjusted"], answer: 0 },
        { question: "A doable goal is easier to act on when it is…", options: ["Clear and realistic", "Kept secret from yourself", "Changed every hour"], answer: 0 },
        { question: "Why review a plan regularly?", options: ["To make useful adjustments", "To guarantee a specific outcome", "To avoid noticing patterns"], answer: 0 }
      ]
    },
    {
      id: "photo-composition", title: "Photo composition basics", category: "Creative skills", level: "Beginner", duration: "1 hr 30 min", lessons: 3,
      description: "Make more intentional photos by noticing light, framing, and the story in a scene.", instructor: "Nico Flores", symbol: "◉", art: "#f3e8bf", accent: "#d18455",
      lessonsList: [
        { title: "Look for the light", duration: "13 min", text: "Light changes the mood of a photograph. Observe its direction and softness, and notice how it shapes the subject before deciding where to stand." },
        { title: "Frame with intention", duration: "15 min", text: "Before taking a picture, scan the edges of the frame. A small shift in angle can simplify the background and help the subject feel more deliberate." },
        { title: "Find the story in a scene", duration: "12 min", text: "A photograph can suggest a moment without explaining everything. Look for gestures, relationships, and details that help a viewer imagine what is happening." }
      ],
      quiz: [
        { question: "What can observing light help you do?", options: ["Notice mood and shape", "Change the subject's history", "Guarantee a sharp image"], answer: 0 },
        { question: "Why scan the edges of the frame?", options: ["To simplify distractions", "To change the camera brand", "To remove all shadows"], answer: 0 },
        { question: "A photograph can suggest a story through…", options: ["Gestures and details", "Only a long caption", "The file size"], answer: 0 }
      ]
    },
    {
      id: "better-meetings", title: "Better meetings, together", category: "Everyday skills", level: "All levels", duration: "50 min", lessons: 3,
      description: "Make group conversations more focused, inclusive, and useful for everyone involved.", instructor: "Taylor Morgan", symbol: "↗", art: "#dce3ed", accent: "#e2a36e",
      lessonsList: [
        { title: "Start with a shared purpose", duration: "10 min", text: "A meeting is easier to navigate when people know why they are there. State the intended outcome and share a short agenda before the conversation begins." },
        { title: "Make room for more voices", duration: "12 min", text: "Facilitation can make participation easier. Pause between topics, invite different perspectives, and offer more than one way for people to contribute." },
        { title: "Close with clear next steps", duration: "9 min", text: "End by reviewing decisions, owners, and timelines. A concise recap gives everyone a shared reference point after the meeting is over." }
      ],
      quiz: [
        { question: "What helps people arrive prepared?", options: ["A clear purpose and agenda", "An unannounced topic change", "A longer calendar title"], answer: 0 },
        { question: "How can a facilitator support participation?", options: ["Invite different perspectives", "Only ask the fastest speaker", "Skip pauses between topics"], answer: 0 },
        { question: "What is useful to confirm at the end?", options: ["Decisions and next steps", "Everyone's private notes", "A new meeting with no purpose"], answer: 0 }
      ]
    }
  ];

  const app = document.getElementById("app");
  const navButtons = Array.from(document.querySelectorAll("[data-nav]"));
  let progress = loadProgress();
  let currentView = "library";
  let activeCourseId = null;
  let activeLessonIndex = 0;
  let activeQuizSubmitted = false;
  let libraryMode = "library";
  let searchText = "";
  let selectedCategory = "all";

  function loadProgress() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      return parsed && typeof parsed === "object" ? parsed : {};
    } catch (_) { return {}; }
  }
  function saveProgress() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); }
    catch (_) { announce("Progress could not be saved in this browser. You can still use the demo during this visit."); }
  }
  function announce(message) {
    const live = document.getElementById("app");
    if (live) live.setAttribute("aria-label", message);
  }
  function getProgress(courseId) {
    const value = progress[courseId];
    return value && typeof value === "object" ? value : { completed: [], score: null, started: false };
  }
  function setProgress(courseId, updates) {
    const old = getProgress(courseId);
    progress[courseId] = Object.assign({}, old, updates);
    saveProgress();
  }
  function currentCourse() { return courses.find((course) => course.id === activeCourseId); }
  function lessonPercent(course, record) { return Math.round(((record.completed || []).length / course.lessonsList.length) * 100); }
  function addText(parent, tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = text;
    parent.appendChild(node);
    return node;
  }
  function makeButton(text, className, action, attrs = {}) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = className || "button";
    button.textContent = text;
    Object.entries(attrs).forEach(([key, value]) => button.setAttribute(key, value));
    if (action) button.addEventListener("click", action);
    return button;
  }
  function createArt(className, course) {
    const art = document.createElement("div");
    art.className = className;
    art.style.setProperty("--art-bg", course.art);
    art.style.setProperty("--art-accent", course.accent);
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("class", "art-illustration");
    svg.setAttribute("viewBox", "0 0 360 190");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    const scenes = {
      "creative-writing": [
        ["rect", { x: 121, y: 28, width: 132, height: 118, rx: 11, fill: "#fffdf8", transform: "rotate(-7 187 87)" }],
        ["path", { d: "M148 63h70M145 80h61M143 97h72M141 114h43", stroke: "#52658c", "stroke-width": 4, "stroke-linecap": "round", opacity: ".65" }],
        ["path", { d: "m231 42 12 5-34 83-13 9 1-16z", fill: "#3156b8" }],
        ["circle", { cx: 109, cy: 125, r: 19, fill: "#efaa70" }]
      ],
      "everyday-design": [
        ["rect", { x: 109, y: 37, width: 99, height: 112, rx: 10, fill: "#fffdf8", transform: "rotate(-8 158 93)" }],
        ["rect", { x: 160, y: 27, width: 98, height: 116, rx: 10, fill: "#3156b8", transform: "rotate(7 209 85)" }],
        ["circle", { cx: 209, cy: 69, r: 22, fill: "#f1a66c" }],
        ["path", { d: "M181 105h53M181 117h36", stroke: "#fffdf8", "stroke-width": 5, "stroke-linecap": "round", opacity: ".85" }]
      ],
      "calm-focus": [
        ["circle", { cx: 186, cy: 91, r: 62, fill: "#fffdf8", opacity: ".72" }],
        ["circle", { cx: 186, cy: 91, r: 43, fill: "#3156b8" }],
        ["circle", { cx: 186, cy: 91, r: 28, fill: "#dcece5" }],
        ["path", { d: "M186 55v36l24 18", fill: "none", stroke: "#3156b8", "stroke-width": 5, "stroke-linecap": "round", "stroke-linejoin": "round" }],
        ["circle", { cx: 271, cy: 46, r: 10, fill: "#f1a66c" }]
      ],
      "smart-budgeting": [
        ["rect", { x: 105, y: 44, width: 150, height: 94, rx: 15, fill: "#3156b8", transform: "rotate(-5 180 91)" }],
        ["rect", { x: 117, y: 59, width: 128, height: 19, rx: 5, fill: "#fffdf8", opacity: ".92" }],
        ["circle", { cx: 202, cy: 105, r: 22, fill: "#f1a66c" }],
        ["path", { d: "M202 93v24m8-18c0-5-16-7-16 0 0 9 17 4 17 13 0 7-18 8-19 0", fill: "none", stroke: "#fffdf8", "stroke-width": 3, "stroke-linecap": "round" }]
      ],
      "photo-composition": [
        ["rect", { x: 107, y: 43, width: 151, height: 100, rx: 16, fill: "#fffdf8", transform: "rotate(4 182 93)" }],
        ["path", { d: "M129 68h35l9-12h28l9 12h28v57h-109z", fill: "#3156b8" }],
        ["circle", { cx: 183, cy: 96, r: 24, fill: "#f1a66c" }],
        ["circle", { cx: 183, cy: 96, r: 12, fill: "#fffdf8" }],
        ["circle", { cx: 234, cy: 77, r: 4, fill: "#fffdf8" }]
      ],
      "better-meetings": [
        ["rect", { x: 112, y: 34, width: 114, height: 72, rx: 18, fill: "#3156b8", transform: "rotate(-5 169 70)" }],
        ["path", { d: "m137 104-2 19 24-18", fill: "#3156b8" }],
        ["rect", { x: 167, y: 81, width: 101, height: 65, rx: 17, fill: "#fffdf8", transform: "rotate(5 218 113)" }],
        ["path", { d: "m244 139 9 14-22-10", fill: "#fffdf8" }],
        ["circle", { cx: 151, cy: 68, r: 5, fill: "#f1a66c" }],
        ["circle", { cx: 168, cy: 68, r: 5, fill: "#fffdf8" }],
        ["circle", { cx: 185, cy: 68, r: 5, fill: "#dcece5" }],
        ["path", { d: "M190 108h47M190 121h32", stroke: "#52658c", "stroke-width": 4, "stroke-linecap": "round", opacity: ".7" }]
      ]
    };
    (scenes[course.id] || scenes["creative-writing"]).forEach(([tag, attributes]) => {
      const shape = document.createElementNS(svgNS, tag);
      Object.entries(attributes).forEach(([name, value]) => shape.setAttribute(name, value));
      svg.appendChild(shape);
    });
    art.appendChild(svg);
    const sun = document.createElement("span"); sun.className = "art-sun"; sun.setAttribute("aria-hidden", "true"); art.appendChild(sun);
    const symbol = document.createElement("span"); symbol.className = "art-symbol"; symbol.setAttribute("aria-hidden", "true"); symbol.textContent = course.symbol; art.appendChild(symbol);
    return art;
  }
  function updateNav(mode) {
    navButtons.forEach((button) => {
      const active = button.dataset.nav === mode;
      button.classList.toggle("is-active", active);
      if (active) button.setAttribute("aria-current", "page"); else button.removeAttribute("aria-current");
    });
  }
  function showLibrary(mode = "library") {
    currentView = "library";
    libraryMode = mode;
    updateNav(mode);
    renderLibrary();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function openCourse(courseId) {
    activeCourseId = courseId;
    currentView = "course";
    updateNav("library");
    renderCourse();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function openLesson(index) {
    const course = currentCourse();
    if (!course) return;
    activeLessonIndex = Math.max(0, Math.min(index, course.lessonsList.length - 1));
    currentView = "lesson";
    setProgress(course.id, { started: true });
    renderLesson();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function openQuiz() {
    const course = currentCourse();
    if (!course) return;
    currentView = "quiz";
    activeQuizSubmitted = false;
    renderQuiz();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function renderLibrary() {
    app.replaceChildren();
    const container = addText(app, "div", "container");
    const hero = addText(container, "section", "hero");
    const heroCopy = addText(hero, "div");
    addText(heroCopy, "p", "eyebrow", "A little time for you");
    addText(heroCopy, "h1", "", libraryMode === "learning" ? "Your learning, in progress." : "Good things to learn, at your pace.");
    addText(heroCopy, "p", "hero-copy", libraryMode === "learning" ? "Pick up where you left off, or explore a course that fits the day you have." : "Explore friendly, bite-sized courses made for curious minds. Choose a topic, make a little progress, and come back whenever you like.");
    const aside = addText(hero, "aside", "hero-aside");
    const top = addText(aside, "div", "aside-top");
    addText(top, "span", "", "Your learning snapshot");
    addText(top, "strong", "aside-count", `${courses.length}`);
    const line = addText(aside, "div", "aside-line");
    const lineFill = document.createElement("span"); line.appendChild(lineFill);
    const doneTotal = courses.reduce((sum, course) => sum + (getProgress(course.id).completed || []).length, 0);
    const allLessons = courses.reduce((sum, course) => sum + course.lessonsList.length, 0);
    lineFill.style.width = `${allLessons ? Math.round(doneTotal / allLessons * 100) : 0}%`;
    addText(aside, "p", "aside-caption", `${doneTotal} of ${allLessons} demo lessons completed`);

    const toolbar = addText(container, "div", "toolbar");
    const searchWrap = addText(toolbar, "div", "search-wrap");
    addText(searchWrap, "span", "search-icon", "⌕").setAttribute("aria-hidden", "true");
    const search = document.createElement("input");
    search.type = "search"; search.className = "search-input"; search.id = "course-search"; search.placeholder = "Search courses or topics"; search.setAttribute("aria-label", "Search courses or topics"); search.value = searchText;
    search.addEventListener("input", () => { searchText = search.value; renderCourseGrid(grid, count); });
    searchWrap.appendChild(search);
    const select = document.createElement("select"); select.className = "category-select"; select.id = "category-filter"; select.setAttribute("aria-label", "Filter by course category");
    const categories = ["all", ...new Set(courses.map((course) => course.category))];
    categories.forEach((category) => { const option = document.createElement("option"); option.value = category; option.textContent = category === "all" ? "All categories" : category; select.appendChild(option); });
    select.value = selectedCategory;
    select.addEventListener("change", () => { selectedCategory = select.value; renderCourseGrid(grid, count); });
    toolbar.appendChild(select);
    const count = addText(toolbar, "div", "course-count", "");
    const heading = addText(container, "div", "section-heading");
    addText(heading, "h2", "", libraryMode === "learning" ? "Your courses" : "Find your next favorite");
    addText(heading, "p", "", "Sample courses · progress stays in this browser");
    const grid = addText(container, "section", "course-grid");
    grid.setAttribute("aria-label", "Available sample courses");
    renderCourseGrid(grid, count);
  }
  function renderCourseGrid(grid, count) {
    grid.replaceChildren();
    const query = searchText.trim().toLowerCase();
    const matches = courses.filter((course) => {
      const record = getProgress(course.id);
      const text = `${course.title} ${course.category} ${course.description} ${course.instructor}`.toLowerCase();
      const inSearch = !query || text.includes(query);
      const inCategory = selectedCategory === "all" || course.category === selectedCategory;
      const inLearning = libraryMode !== "learning" || record.started || (record.completed || []).length > 0;
      return inSearch && inCategory && inLearning;
    });
    count.textContent = `${matches.length} ${matches.length === 1 ? "course" : "courses"}`;
    if (!matches.length) {
      const empty = addText(grid, "div", "empty-state"); empty.style.gridColumn = "1 / -1";
      addText(empty, "div", "empty-icon", libraryMode === "learning" && !query ? "↗" : "⌕");
      addText(empty, "h3", "", libraryMode === "learning" && !query ? "Your learning list is ready when you are" : "No courses found");
      addText(empty, "p", "", libraryMode === "learning" && !query ? "Start any course to see it here and keep track of your progress." : "Try a different search or choose another category.");
      if (libraryMode === "learning" && !query) empty.appendChild(makeButton("Explore courses", "button", () => showLibrary("library")));
      return;
    }
    matches.forEach((course) => {
      const record = getProgress(course.id);
      const card = addText(grid, "article", "course-card");
      const art = createArt("course-art", course); addText(art, "span", "course-art-label", "A sample course"); card.appendChild(art);
      const body = addText(card, "div", "card-body");
      const topline = addText(body, "div", "card-topline"); addText(topline, "span", "category-label", course.category); addText(topline, "span", "level-label", course.level);
      addText(body, "h3", "", course.title);
      addText(body, "p", "course-summary", course.description);
      const meta = addText(body, "div", "card-meta"); const left = addText(meta, "div", "meta-left"); addText(left, "span", "", `${course.lessonsList.length} lessons`); addText(left, "span", "", course.duration); addText(meta, "span", "", `By ${course.instructor}`);
      const footer = addText(body, "div", "card-footer");
      const progressBox = addText(footer, "div", "mini-progress"); const progTop = addText(progressBox, "div", "progress-topline"); addText(progTop, "span", "", "Lesson progress"); addText(progTop, "span", "", `${lessonPercent(course, record)}%`);
      const track = addText(progressBox, "div", "progress-track"); track.setAttribute("role", "progressbar"); track.setAttribute("aria-label", `${course.title} lesson progress`); track.setAttribute("aria-valuemin", "0"); track.setAttribute("aria-valuemax", "100"); track.setAttribute("aria-valuenow", `${lessonPercent(course, record)}`);
      const fill = addText(track, "div", "progress-fill"); fill.style.width = `${lessonPercent(course, record)}%`;
      footer.appendChild(makeButton("View course", "button tertiary card-action", () => openCourse(course.id), { "aria-label": `View ${course.title} course details` }));
      if (record.score !== null && record.score !== undefined) addText(body, "p", "quiz-score-note", `Latest demo quiz score: ${record.score}%`);
    });
  }
  function addBackButton(parent, label, callback) { parent.appendChild(makeButton(`← ${label}`, "back-link", callback)); }
  function renderCourse() {
    const course = currentCourse(); if (!course) return showLibrary("library");
    const record = getProgress(course.id);
    app.replaceChildren(); const wrap = addText(app, "div", "workspace");
    addBackButton(wrap, "All courses", () => showLibrary("library"));
    const hero = addText(wrap, "section", "detail-hero"); const copy = addText(hero, "div", "detail-copy");
    addText(copy, "p", "eyebrow", `${course.category} · ${course.level}`);
    addText(copy, "h1", "", course.title);
    addText(copy, "p", "hero-copy", course.description);
    const metadata = addText(copy, "div", "detail-metadata"); addText(metadata, "span", "", `◷ ${course.duration}`); addText(metadata, "span", "", `▣ ${course.lessonsList.length} lessons + a quiz`); addText(metadata, "span", "", `✦ ${course.instructor}`);
    const actions = addText(copy, "div", "detail-actions");
    const nextIndex = Math.min((record.completed || []).length, course.lessonsList.length - 1);
    actions.appendChild(makeButton(record.started ? "Continue learning" : "Start this course", "button", () => openLesson(nextIndex)));
    actions.appendChild(makeButton("Take the demo quiz", "button secondary", openQuiz));
    const art = createArt("detail-art", course); addText(art, "span", "course-art-label", "Sample course artwork"); hero.appendChild(art);
    const note = addText(wrap, "div", "demo-note"); addText(note, "strong", "", "Demo content:"); addText(note, "span", "", "Course descriptions, instructors, lesson text, and visuals are illustrative sample material. No real video is streamed.");
    const columns = addText(wrap, "div", "detail-columns");
    const listPanel = addText(columns, "section", "panel panel-pad"); addText(listPanel, "h2", "", "What you'll learn");
    course.lessonsList.forEach((lesson, index) => {
      const row = addText(listPanel, "div", `lesson-row ${(record.completed || []).includes(index) ? "is-done" : ""}`);
      addText(row, "span", "lesson-index", (record.completed || []).includes(index) ? "✓" : `${index + 1}`);
      const text = addText(row, "div", "lesson-row-copy"); addText(text, "strong", "", lesson.title); addText(text, "span", "", `Demo lesson · ${lesson.duration}`);
      row.appendChild(makeButton("Preview", "button tertiary", () => openLesson(index), { "aria-label": `Open lesson ${index + 1}: ${lesson.title}` }));
    });
    const aside = addText(columns, "aside", "progress-card"); addText(aside, "h3", "", "Your progress"); addText(aside, "p", "", "Progress is saved only in this browser on this device.");
    const prog = addText(aside, "div", "progress-big"); addText(prog, "span", "", `${(record.completed || []).length} of ${course.lessonsList.length} lessons`); addText(prog, "strong", "", `${lessonPercent(course, record)}%`);
    const track = addText(aside, "div", "progress-track"); track.setAttribute("role", "progressbar"); track.setAttribute("aria-label", `${course.title} lesson progress`); track.setAttribute("aria-valuemin", "0"); track.setAttribute("aria-valuemax", "100"); track.setAttribute("aria-valuenow", `${lessonPercent(course, record)}`); const fill = addText(track, "div", "progress-fill"); fill.style.width = `${lessonPercent(course, record)}%`;
    if (record.score !== null && record.score !== undefined) addText(aside, "div", "quiz-score-note", `Latest demo quiz score: ${record.score}%`);
    else addText(aside, "div", "quiz-score-note", "Demo quiz not taken yet.");
  }
  function renderLesson() {
    const course = currentCourse(); if (!course) return showLibrary("library");
    const lesson = course.lessonsList[activeLessonIndex]; const record = getProgress(course.id); const done = (record.completed || []).includes(activeLessonIndex);
    app.replaceChildren(); const wrap = addText(app, "div", "workspace");
    addBackButton(wrap, course.title, () => openCourse(course.id));
    const columns = addText(wrap, "div", "learning-shell"); const main = addText(columns, "section", "");
    const heading = addText(main, "div", "lesson-heading"); addText(heading, "p", "eyebrow", `Lesson ${activeLessonIndex + 1} of ${course.lessonsList.length} · ${course.category}`); addText(heading, "h1", "", lesson.title); addText(heading, "p", "", `${course.title} · ${lesson.duration} · Demo lesson material`);
    const player = addText(main, "div", "lesson-player"); player.setAttribute("aria-label", "Illustrative lesson placeholder, not a video player"); const content = addText(player, "div", "player-content"); addText(content, "div", "play-mark", "▶").setAttribute("aria-hidden", "true"); addText(content, "h2", "", "Lesson preview"); addText(content, "p", "", "This is an illustrative demo screen. No video file is loaded or streamed."); addText(content, "span", "player-pill", "Demo material · No video");
    const textPanel = addText(main, "section", "panel lesson-content"); addText(textPanel, "h2", "", "In this lesson"); addText(textPanel, "p", "", lesson.text);
    const controls = addText(main, "div", "lesson-controls"); const left = addText(controls, "div", "control-left"); left.appendChild(makeButton("← Course overview", "button secondary", () => openCourse(course.id)));
    const right = addText(controls, "div", "control-right");
    if (done) addText(right, "span", "quiz-feedback pass", "Lesson completed");
    right.appendChild(makeButton(done ? "Completed ✓" : "Mark lesson complete", "button", () => completeLesson(activeLessonIndex), { "aria-pressed": done ? "true" : "false" }));
    if (activeLessonIndex < course.lessonsList.length - 1) right.appendChild(makeButton("Next lesson →", "button secondary", () => openLesson(activeLessonIndex + 1)));
    else right.appendChild(makeButton("Take the demo quiz →", "button secondary", openQuiz));
    const sidebar = addText(columns, "aside", "panel lesson-sidebar"); addText(sidebar, "h2", "", "Course lessons"); const sProg = addText(sidebar, "div", "sidebar-progress", `${(record.completed || []).length} of ${course.lessonsList.length} lessons completed`);
    const track = addText(sidebar, "div", "progress-track"); track.setAttribute("role", "progressbar"); track.setAttribute("aria-label", "Course lesson progress"); track.setAttribute("aria-valuemin", "0"); track.setAttribute("aria-valuemax", "100"); track.setAttribute("aria-valuenow", `${lessonPercent(course, record)}`); const fill = addText(track, "div", "progress-fill"); fill.style.width = `${lessonPercent(course, record)}%`;
    course.lessonsList.forEach((item, index) => {
      const button = document.createElement("button"); button.type = "button"; button.className = "sidebar-lesson"; button.setAttribute("aria-current", index === activeLessonIndex ? "step" : "false"); button.addEventListener("click", () => openLesson(index));
      addText(button, "span", "sidebar-lesson-num", (record.completed || []).includes(index) ? "✓" : `${index + 1}`);
      const text = addText(button, "span", "sidebar-lesson-copy"); addText(text, "strong", "", item.title); addText(text, "span", "", (record.completed || []).includes(index) ? "Completed" : `Demo lesson · ${item.duration}`); sidebar.appendChild(button);
    });
    sidebar.appendChild(makeButton("Open course quiz", "button tertiary", openQuiz, { "style": "width:100%; margin-top:13px" }));
  }
  function completeLesson(index) {
    const course = currentCourse(); if (!course) return;
    const record = getProgress(course.id); const completed = Array.isArray(record.completed) ? record.completed.slice() : [];
    if (!completed.includes(index)) completed.push(index);
    completed.sort((a, b) => a - b);
    setProgress(course.id, { completed, started: true });
    renderLesson();
  }
  function renderQuiz() {
    const course = currentCourse(); if (!course) return showLibrary("library");
    app.replaceChildren(); const wrap = addText(app, "div", "workspace quiz-shell");
    addBackButton(wrap, "Course overview", () => openCourse(course.id));
    const top = addText(wrap, "div", "quiz-top"); addText(top, "p", "eyebrow", `${course.category} · Quick knowledge check`); addText(top, "h1", "", `A quick check-in.`); addText(top, "p", "", `Answer these sample questions about “${course.title}.” Your score is saved in this browser.`);
    const card = addText(wrap, "form", "panel quiz-card"); card.addEventListener("submit", (event) => { event.preventDefault(); submitQuiz(course); });
    const intro = addText(card, "div", "quiz-intro"); const introCopy = addText(intro, "div"); addText(introCopy, "h2", "", "Course quiz"); addText(introCopy, "p", "", "Choose one answer for each question. This is a practice quiz with sample content."); addText(intro, "span", "quiz-badge", `${course.quiz.length} QUESTIONS`);
    course.quiz.forEach((question, qi) => {
      const field = document.createElement("fieldset"); field.className = "question"; const legend = document.createElement("legend"); const qn = document.createElement("span"); qn.className = "question-number"; qn.textContent = `0${qi + 1}`; legend.appendChild(qn); legend.appendChild(document.createTextNode(question.question)); field.appendChild(legend);
      question.options.forEach((option, oi) => {
        const label = addText(field, "label", "answer-option"); const input = document.createElement("input"); input.type = "radio"; input.name = `question-${qi}`; input.value = `${oi}`; input.required = true; label.appendChild(input); addText(label, "span", "", option);
      });
      card.appendChild(field);
    });
    const row = addText(card, "div", "quiz-submit-row"); const submit = document.createElement("button"); submit.type = "submit"; submit.className = "button"; submit.textContent = "Check my answers"; row.appendChild(submit);
    const feedback = addText(row, "div", "quiz-feedback"); feedback.id = "quiz-feedback"; feedback.setAttribute("role", "status");
    const previous = getProgress(course.id).score;
    if (previous !== null && previous !== undefined) addText(card, "p", "quiz-score-note", `Previous demo quiz score: ${previous}%`);
  }
  function submitQuiz(course) {
    if (activeQuizSubmitted) return;
    const data = new FormData(app.querySelector("form"));
    let scoreCount = 0;
    for (let index = 0; index < course.quiz.length; index += 1) {
      const answer = data.get(`question-${index}`);
      if (answer === null) { const firstMissing = app.querySelector(`input[name="question-${index}"]`); if (firstMissing) firstMissing.focus(); const feedback = document.getElementById("quiz-feedback"); feedback.textContent = "Please answer each question before checking."; feedback.className = "quiz-feedback retry"; return; }
      if (Number(answer) === course.quiz[index].answer) scoreCount += 1;
    }
    activeQuizSubmitted = true;
    const score = Math.round((scoreCount / course.quiz.length) * 100);
    setProgress(course.id, { score, started: true });
    app.querySelectorAll("input[type=radio]").forEach((input) => { input.disabled = true; });
    const feedback = document.getElementById("quiz-feedback"); feedback.textContent = `You scored ${score}% (${scoreCount} of ${course.quiz.length}). ${scoreCount === course.quiz.length ? "Excellent work!" : "Nice practice — review any lesson and try again."}`; feedback.className = `quiz-feedback ${scoreCount === course.quiz.length ? "pass" : "retry"}`;
    const button = app.querySelector("form button[type=submit]"); button.textContent = "Score saved"; button.disabled = true;
    const card = app.querySelector(".quiz-card"); addText(card, "p", "quiz-score-note", "Latest score saved in this browser only.");
  }
  navButtons.forEach((button) => button.addEventListener("click", () => showLibrary(button.dataset.nav)));
  document.querySelector(".brand").addEventListener("click", (event) => { event.preventDefault(); showLibrary("library"); });
  renderLibrary();
})();
