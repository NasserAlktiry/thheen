"use strict";

document.addEventListener("DOMContentLoaded", () => {
  /* =========================
   1) STATE
  ========================= */
  const state = {
    loggedIn: false,
    teams: [],
    numTeams: 0,
    currentTeamIndex: 0,

    selectedCategory: null,
    selectedDifficulty: null,
    currentQuestion: null,
    currentCorrect: null,
    currentPoints: 0,

    timer: { intervalId: null, timeLeft: 0, totalTime: 0 },

    rounds: { mode: "unlimited", total: null, current: 1 },

    featureUI: { selectedKey: null, targetIndex: null },
  };

  /* =========================
   2) DOM
  ========================= */
  const flashEl = document.getElementById("flash");

  // Screens
  const loginScreen = document.getElementById("login-screen");
  const teamsSetupScreen = document.getElementById("teams-setup-screen");
  const teamNamesScreen = document.getElementById("team-names-screen");
  const teamsConfirmScreen = document.getElementById("teams-confirm-screen");
  const roundsScreen = document.getElementById("rounds-screen");
  const categoriesScreen = document.getElementById("categories-screen");
  const questionScreen = document.getElementById("question-screen");
  const resultsScreen = document.getElementById("results-screen");
  const storeScreen = document.getElementById("store-screen");
  const featuresScreen = document.getElementById("features-screen");

  // Leaderboard
  const leaderboardEl = document.getElementById("leaderboard");
  const leaderboardListEl = document.getElementById("leaderboard-list");

  // Login
  const loginForm = document.getElementById("login-form");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const loginError = document.getElementById("login-error");

  // Teams setup
  const teamsSetupForm = document.getElementById("teams-setup-form");
  const numTeamsInput = document.getElementById("num-teams");

  // Team names
  const teamNamesForm = document.getElementById("team-names-form");
  const teamNamesContainer = document.getElementById("team-names-container");
  const teamsCountLabel = document.getElementById("teams-count-label");

  // Confirm
  const teamsListEl = document.getElementById("teams-list");
  const startGameBtn = document.getElementById("start-game-btn");

  // Rounds
  const roundsForm = document.getElementById("rounds-form");
  const roundsCustomInput = document.getElementById("rounds-custom");

  // Categories
  const categoriesGrid = document.getElementById("categories-grid");
  const currentTeamTitle = document.getElementById("current-team-title");
  const showResultsBtn = document.getElementById("show-results-btn");
  const endGameBtn = document.getElementById("end-game-btn");

  // Question
  const questionTeamTitle = document.getElementById("question-team-title");
  const questionMeta = document.getElementById("question-meta");
  const questionText = document.getElementById("question-text");
  const answersForm = document.getElementById("answers-form");
  const choiceAText = document.getElementById("choice-A-text");
  const choiceBText = document.getElementById("choice-B-text");
  const choiceCText = document.getElementById("choice-C-text");
  const choiceDText = document.getElementById("choice-D-text");
  const feedbackEl = document.getElementById("feedback");
  const nextQuestionBtn = document.getElementById("next-question-btn");

  // Timer
  const timerLabel = document.getElementById("timer-label");
  const timerBar = document.getElementById("timer-bar");

  // Powerups (3)
  const puRemove2Btn = document.getElementById("pu-remove2");
  const puFreezeBtn = document.getElementById("pu-freeze");
  const puSkipBtn = document.getElementById("pu-skip");

  // Store/Features buttons
  const storeBtn = document.getElementById("store-btn");
  const featuresBtn = document.getElementById("features-btn");
  const backFromStore = document.getElementById("back-from-store");
  const backFromFeatures = document.getElementById("back-from-features");

  // Store UI
  const storeTeamInfo = document.getElementById("store-team-info");
  const storeGrid = document.getElementById("store-grid");

  // Features UI (advanced)
  const featuresTeamInfo = document.getElementById("features-team-info");
  const featuresBar = document.getElementById("features-bar");
  const featurePanel = document.getElementById("feature-panel");
  const selectedFeatureTitle = document.getElementById(
    "selected-feature-title"
  );
  const selectedFeatureDesc = document.getElementById("selected-feature-desc");
  const targetsWrap = document.getElementById("targets-wrap");
  const targetsList = document.getElementById("targets-list");
  const activateFeatureBtn = document.getElementById("activate-feature-btn");
  const featureLimitNote = document.getElementById("feature-limit-note");

  // Results
  const backToLoginBtn = document.getElementById("back-to-login-btn");
  const resultsListEl = document.getElementById("results-list");

  /* =========================
   3) DATA
  ========================= */
  const CATEGORIES_META = [
    { name: "تاريخية", icon: "🏺", color: "#d4a373" },
    { name: "ثقافة عامة", icon: "📚", color: "#4ea8de" },
    { name: "رياضية", icon: "➗", color: "#52b788" },
    { name: "جغرافية", icon: "🗺️", color: "#1d3557" },
    { name: "علمية", icon: "🔬", color: "#00b4d8" },
    { name: "دينية", icon: "🕌", color: "#718355" },
    { name: "أدبية", icon: "✒️", color: "#9d4edd" },
    { name: "قران", icon: "📖", color: "#2d6a4f" },
    { name: "تقنية", icon: "💻", color: "#495057" },
    { name: "ألغاز", icon: "🧩", color: "#ffba08" },
    { name: "ذكاء", icon: "🧠", color: "#f48c06" },
    { name: "سيرة وحديث", icon: "📜", color: "#74c69d" },
    { name: "حيوانات", icon: "🐾", color: "#bc6c25" },
    { name: "متنوعة", icon: "🎲", color: "#6c757d" },
    { name: "لغة ومعاجم", icon: "🔤", color: "#b5179e" },
    { name: "طب وصحّة", icon: "🩺", color: "#ff8fa3" },
  ];

  const SHOP_ITEMS = [
    {
      key: "electricity",
      title: "⚡ كهرباء",
      price: 250,
      desc: "تخصم 100 نقطة من فريق",
    },
    {
      key: "shield",
      title: "🕊️ حمامة",
      price: 200,
      desc: "حماية من هجمات الخصوم (مرة لكل حمامة)",
    },
    {
      key: "pit",
      title: "🕳️ حفرة",
      price: 220,
      desc: 'تجبر الخصم يختار "صعب فقط" لمدة جولتين',
    },
    {
      key: "ban",
      title: "⛔ حظر",
      price: 300,
      desc: "منع فريق من الجولة القادمة",
    },
  ];

  // ✅ مهم: كان ناقص عندك ويسبب شاشة المميزات فاضية
  const FEATURE_META = {
    electricity: {
      title: "⚡ كهرباء",
      desc: "تخصم 100 نقطة من فريق",
      needsTarget: true,
    },
    pit: {
      title: "🕳️ حفرة",
      desc: 'تجبر الخصم يختار "صعب فقط" لمدة جولتين',
      needsTarget: true,
    },
    ban: {
      title: "⛔ حظر",
      desc: "منع فريق من الجولة القادمة",
      needsTarget: true,
    },
    shield: {
      title: "🕊️ حمامة",
      desc: "حماية من هجمات الخصوم (مرة لكل حمامة)",
      needsTarget: false,
    },
  };

  /* =========================
   4) HELPERS
  ========================= */
  function currentTeam() {
    return state.teams[state.currentTeamIndex];
  }

  function showFlash(message) {
    if (!flashEl) return;
    if (!message) {
      flashEl.classList.add("hidden");
      flashEl.textContent = "";
      return;
    }
    flashEl.textContent = message;
    flashEl.classList.remove("hidden");
    setTimeout(() => flashEl.classList.add("hidden"), 2500);
  }

  function hideAllScreens() {
    [
      loginScreen,
      teamsSetupScreen,
      teamNamesScreen,
      teamsConfirmScreen,
      roundsScreen,
      categoriesScreen,
      questionScreen,
      resultsScreen,
      storeScreen,
      featuresScreen,
    ].forEach((s) => s && s.classList.add("hidden"));
  }

  /* =========================
   5) LEADERBOARD + UI
  ========================= */
  function updateLeaderboard() {
    if (!leaderboardEl || !leaderboardListEl) return;

    if (!state.teams.length) {
      leaderboardEl.classList.add("hidden");
      leaderboardListEl.innerHTML = "";
      return;
    }

    leaderboardEl.classList.remove("hidden");

    const sorted = [...state.teams].sort((a, b) => b.score - a.score);
    const highlightFirst =
      sorted.length > 1 && sorted[0].score > sorted[1].score;

    leaderboardListEl.innerHTML = "";
    sorted.forEach((team, index) => {
      const li = document.createElement("li");
      li.className = "leaderboard-item";
      if (index === 0 && highlightFirst) li.classList.add("first");
      li.textContent = `${index + 1}. ${team.name} - ${team.score} نقطة`;
      leaderboardListEl.appendChild(li);
    });
  }

  function updateScoreUI() {
    updateLeaderboard();
    const t = currentTeam();
    if (currentTeamTitle && t) {
      const roundsText =
        state.rounds.mode === "fixed"
          ? `الجولة ${state.rounds.current} / ${state.rounds.total}`
          : `الجولة ${state.rounds.current} (مفتوح)`;
      currentTeamTitle.textContent = `دور الفريق: ${t.name} — ${roundsText}`;
    }
  }

  // ✅ الباور أبس: تغيير لون + خط
  function setPuBtnState(btn, count) {
    if (!btn) return;
    const empty = (count || 0) <= 0;
    btn.disabled = empty;
    btn.classList.toggle("used", empty);
  }

  function updateInventoryUI() {
    const team = currentTeam();
    if (!team) return;
    setPuBtnState(puRemove2Btn, team.inventory.remove2);
    setPuBtnState(puFreezeBtn, team.inventory.freeze);
    setPuBtnState(puSkipBtn, team.inventory.skip);
  }

  /* =========================
   6) NAVIGATION
  ========================= */
  function goToLoginScreen() {
    hideAllScreens();
    showFlash("");
    if (loginError) loginError.textContent = "";
    if (loginScreen) loginScreen.classList.remove("hidden");
    if (leaderboardEl) leaderboardEl.classList.add("hidden");
    if (leaderboardListEl) leaderboardListEl.innerHTML = "";
  }

  function goToTeamsSetupScreen() {
    hideAllScreens();
    showFlash("");
    teamsSetupScreen?.classList.remove("hidden");
  }

  function goToTeamNamesScreen() {
    hideAllScreens();
    showFlash("");
    teamNamesScreen?.classList.remove("hidden");
  }

  function goToTeamsConfirmScreen() {
    hideAllScreens();
    showFlash("");
    teamsConfirmScreen?.classList.remove("hidden");
  }

  function goToRoundsScreen() {
    hideAllScreens();
    showFlash("");
    roundsScreen?.classList.remove("hidden");
  }

  function goToCategoriesScreen() {
    hideAllScreens();
    showFlash("");
    categoriesScreen?.classList.remove("hidden");
    updateScoreUI();

    const t = currentTeam();
    if (t && t.pitTurnsLeft > 0) {
      showFlash(
        `🕳️ ${t.name} تحت تأثير الحفرة: مجبور على "صعب" لمدة ${t.pitTurnsLeft} دور`
      );
    }
  }

  // ✅ نسخة واحدة فقط (كانت عندك مكررة)
  function goToQuestionScreen() {
    hideAllScreens();
    showFlash("");
    questionScreen?.classList.remove("hidden");
    updateScoreUI();
    updateInventoryUI(); // ✅ مهم
  }

  function goToResultsScreen() {
    hideAllScreens();
    showFlash("");
    resultsScreen?.classList.remove("hidden");
    leaderboardEl?.classList.add("hidden");

    if (!resultsListEl) return;
    const sorted = [...state.teams].sort((a, b) => b.score - a.score);
    resultsListEl.innerHTML = "";
    sorted.forEach((team, index) => {
      const li = document.createElement("li");
      li.textContent = `${index + 1}. ${team.name} - ${team.score} نقطة`;
      resultsListEl.appendChild(li);
    });
  }

  /* =========================
   7) LOGIN + TEAMS
  ========================= */
  loginForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = (usernameInput?.value || "").trim();
    const pass = (passwordInput?.value || "").trim();

    if (user === "admin" && pass === "1234") {
      state.loggedIn = true;
      state.teams = [];
      state.numTeams = 0;
      state.currentTeamIndex = 0;
      usernameInput && (usernameInput.value = "");
      passwordInput && (passwordInput.value = "");
      loginError && (loginError.textContent = "");
      goToTeamsSetupScreen();
    } else {
      loginError &&
        (loginError.textContent = "❌ اسم المستخدم أو كلمة المرور غير صحيحة");
    }
  });

  teamsSetupForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    let n = parseInt(numTeamsInput?.value || "1", 10);
    if (isNaN(n)) n = 1;
    n = Math.max(1, Math.min(6, n));
    state.numTeams = n;

    teamNamesContainer && (teamNamesContainer.innerHTML = "");
    teamsCountLabel &&
      (teamsCountLabel.textContent = `عدد الفرق: ${state.numTeams}`);

    for (let i = 1; i <= state.numTeams; i++) {
      const label = document.createElement("label");
      label.textContent = `اسم الفريق ${i}:`;
      const input = document.createElement("input");
      input.type = "text";
      input.required = true;
      input.id = `team-name-${i}`;
      teamNamesContainer?.appendChild(label);
      teamNamesContainer?.appendChild(input);
    }

    goToTeamNamesScreen();
  });

  teamNamesForm?.addEventListener("submit", (e) => {
    e.preventDefault();

    const teams = [];
    for (let i = 1; i <= state.numTeams; i++) {
      const input = document.getElementById(`team-name-${i}`);
      const name = (input?.value || "").trim();
      if (!name) return showFlash(`❌ يرجى إدخال اسم الفريق ${i}`);

      teams.push({
        name,
        score: 0,
        streak: 0,

        inventory: {
          remove2: 1,
          freeze: 1,
          skip: 1,
          electricity: 0,
          shield: 0,
          ban: 0,
          pit: 0,
        },

        activeShield: 0,
        bannedRounds: 0,
        pitTurnsLeft: 0, // ✅ الحفرة (دورين)
        usedFeatureThisRound: false, // ✅ ميزة واحدة لكل جولة
      });
    }

    state.teams = teams;
    state.currentTeamIndex = 0;

    if (teamsListEl) {
      teamsListEl.innerHTML = "";
      state.teams.forEach((t) => {
        const li = document.createElement("li");
        li.textContent = `• ${t.name}`;
        teamsListEl.appendChild(li);
      });
    }

    goToTeamsConfirmScreen();
  });

  /* =========================
   8) ROUNDS SCREEN
  ========================= */
  function resetRounds() {
    state.rounds.mode = "unlimited";
    state.rounds.total = null;
    state.rounds.current = 1;
  }

  function startGameAfterRounds() {
    state.currentTeamIndex = 0;
    state.rounds.current = 1;
    state.teams.forEach((t) => (t.usedFeatureThisRound = false));
    buildCategoriesGrid();
    goToCategoriesScreen();
  }

  startGameBtn?.addEventListener("click", () => {
    resetRounds();
    goToRoundsScreen();
  });

  roundsForm?.addEventListener("submit", (e) => {
    e.preventDefault();

    const selected = document.querySelector('input[name="roundsMode"]:checked');
    const modeVal = selected ? selected.value : "unlimited";

    if (modeVal === "unlimited") {
      state.rounds.mode = "unlimited";
      state.rounds.total = null;
    } else if (modeVal === "custom") {
      let n = parseInt(roundsCustomInput?.value || "0", 10);
      if (isNaN(n) || n <= 0) return showFlash("❌ اكتب عدد صحيح للجولات");
      state.rounds.mode = "fixed";
      state.rounds.total = n;
    } else {
      const n = parseInt(modeVal, 10);
      state.rounds.mode = "fixed";
      state.rounds.total = n;
    }

    startGameAfterRounds();
  });

  /* =========================
   9) CATEGORIES GRID
  ========================= */
  function buildCategoriesGrid() {
    if (!categoriesGrid) return;
    categoriesGrid.innerHTML = "";

    CATEGORIES_META.forEach((cat) => {
      const div = document.createElement("div");
      div.className = "card cat-card";
      div.style.setProperty("--cat-color", cat.color);

      div.innerHTML = `
        <div class="cat-content">
          <div class="cat-icon">${cat.icon}</div>
          <div class="cat-name">${cat.name}</div>
        </div>
        <div class="difficulty-overlay hidden">
          <button class="difficulty-btn" data-level="سهل">سهل</button>
          <button class="difficulty-btn" data-level="متوسط">متوسط</button>
          <button class="difficulty-btn" data-level="صعب">صعب</button>
        </div>
      `;

      const overlay = div.querySelector(".difficulty-overlay");
      const difficultyButtons = div.querySelectorAll(".difficulty-btn");

      div.addEventListener("mouseenter", () => {
        div.classList.add("blur-category");
        overlay.classList.remove("hidden");
      });

      div.addEventListener("mouseleave", () => {
        div.classList.remove("blur-category");
        overlay.classList.add("hidden");
      });

      difficultyButtons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();

          const team = currentTeam();
          state.selectedCategory = cat.name;

          let level = btn.dataset.level;
          if (team && team.pitTurnsLeft > 0) {
            level = "صعب";
            showFlash(`🕳️ الحفرة تمنع ${team.name}: مجبور على "صعب"`);
          }

          state.selectedDifficulty = level;
          startQuestionFlow(level);
        });
      });

      categoriesGrid.appendChild(div);
    });
  }

  showResultsBtn?.addEventListener("click", goToResultsScreen);

  endGameBtn?.addEventListener("click", () => {
    showFlash("تم إنهاء اللعبة يدويًا ✅");
    goToResultsScreen();
  });

  /* =========================
   10) QUESTIONS BANK
  ========================= */
  function getQuestionsBank() {
    const bank =
      window.questions || (typeof questions !== "undefined" ? questions : null);
    return Array.isArray(bank) ? bank : [];
  }

  function pickRandomQuestion(category, difficulty) {
    const bank = getQuestionsBank();
    if (!bank.length) {
      console.warn("🚨 بنك الأسئلة غير مربوط أو فاضي");
      showFlash("🚨 بنك الأسئلة غير مربوط (questions.js) أو فاضي");
      return null;
    }

    const filtered = bank.filter(
      (q) => q.category === category && q.difficulty === difficulty
    );
    if (!filtered.length) return null;

    return filtered[Math.floor(Math.random() * filtered.length)];
  }

  function getTimeAndPoints(difficulty) {
    if (difficulty === "سهل") return { totalTime: 15, basePoints: 100 };
    if (difficulty === "متوسط") return { totalTime: 20, basePoints: 200 };
    return { totalTime: 30, basePoints: 300 };
  }

  function startQuestionFlow(chosenDifficulty) {
    const team = currentTeam();
    if (!team) return;

    const level = chosenDifficulty || "سهل";
    state.selectedDifficulty = level;

    const { totalTime, basePoints } = getTimeAndPoints(level);
    const q = pickRandomQuestion(state.selectedCategory, level);

    if (!q) {
      showFlash(
        `لا يوجد سؤال للتصنيف ${state.selectedCategory} بالمستوى ${level}`
      );
      goToCategoriesScreen();
      return;
    }

    const hasChoices =
      q.choices &&
      typeof q.choices === "object" &&
      ["A", "B", "C", "D"].every((k) => typeof q.choices[k] === "string");
    const hasCorrect = ["A", "B", "C", "D"].includes(q.correct);

    if (!q.question || !hasChoices || !hasCorrect) {
      console.error("🚨 صيغة سؤال غير صحيحة:", q);
      showFlash("🚨 صيغة سؤال غير صحيحة في questions.js (راجع Console)");
      goToCategoriesScreen();
      return;
    }

    const isGolden = level === "صعب" && Math.random() < 0.1;
    const points = isGolden ? basePoints + 200 : basePoints;

    state.currentQuestion = { ...q, isGolden };
    state.currentCorrect = q.correct;
    state.currentPoints = points;

    state.timer.totalTime = totalTime;
    state.timer.timeLeft = totalTime;

    renderQuestionScreen();
    startTimer();
  }

  function renderQuestionScreen() {
    const team = currentTeam();
    if (!team) return;

    questionTeamTitle &&
      (questionTeamTitle.textContent = `الفريق: ${team.name}`);

    if (questionMeta) {
      const g = state.currentQuestion.isGolden ? " | سؤال ذهبي ✨" : "";
      questionMeta.textContent = `التصنيف: ${state.selectedCategory} | المستوى: ${state.selectedDifficulty} | النقاط: ${state.currentPoints}${g}`;
    }

    questionText && (questionText.textContent = state.currentQuestion.question);

    choiceAText &&
      (choiceAText.textContent = `A) ${state.currentQuestion.choices.A}`);
    choiceBText &&
      (choiceBText.textContent = `B) ${state.currentQuestion.choices.B}`);
    choiceCText &&
      (choiceCText.textContent = `C) ${state.currentQuestion.choices.C}`);
    choiceDText &&
      (choiceDText.textContent = `D) ${state.currentQuestion.choices.D}`);

    if (answersForm) {
      answersForm.reset();
      answersForm.querySelectorAll(".answer-option").forEach((lbl) => {
        lbl.classList.remove("disabled-option");
        const input = lbl.querySelector("input[type='radio']");
        if (input) input.disabled = false;
      });
    }

    if (feedbackEl) {
      feedbackEl.textContent = "";
      feedbackEl.className = "feedback";
    }
    nextQuestionBtn?.classList.add("hidden");

    goToQuestionScreen();
  }

  /* =========================
   11) TIMER
  ========================= */
  function startTimer() {
    if (!timerLabel || !timerBar) return;

    if (state.timer.intervalId) clearInterval(state.timer.intervalId);

    timerBar.style.width = "100%";
    timerLabel.textContent = `الوقت المتبقي: ${state.timer.timeLeft} ثانية`;

    state.timer.intervalId = setInterval(() => {
      state.timer.timeLeft--;

      if (state.timer.timeLeft <= 0) {
        state.timer.timeLeft = 0;
        timerLabel.textContent = "انتهى الوقت!";
        timerBar.style.width = "0%";
        clearInterval(state.timer.intervalId);
        state.timer.intervalId = null;
        handleTurnEnd(false, true);
        return;
      }

      timerLabel.textContent = `الوقت المتبقي: ${state.timer.timeLeft} ثانية`;
      timerBar.style.width =
        (state.timer.timeLeft / state.timer.totalTime) * 100 + "%";
    }, 1000);
  }

  /* =========================
   12) POWERUPS (3)
  ========================= */
  function removeTwoOptions() {
    if (!answersForm) return;
    const correct = state.currentCorrect;
    const wrongOptions = ["A", "B", "C", "D"].filter((o) => o !== correct);

    for (let i = wrongOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [wrongOptions[i], wrongOptions[j]] = [wrongOptions[j], wrongOptions[i]];
    }

    wrongOptions.slice(0, 2).forEach((o) => {
      const input = answersForm.querySelector(
        `input[name="choice"][value="${o}"]`
      );
      if (input) {
        input.disabled = true;
        input.parentElement?.classList.add("disabled-option");
      }
    });

    showFlash("تم حذف خيارين خاطئين 🗑️");
  }

  function freezeTime() {
    if (state.timer.intervalId) clearInterval(state.timer.intervalId);
    state.timer.intervalId = null;
    showFlash("تم تجميد الوقت 5 ثوانٍ ❄️");
    setTimeout(() => startTimer(), 5000);
  }

  function skipQuestion() {
    if (state.timer.intervalId) clearInterval(state.timer.intervalId);
    state.timer.intervalId = null;
    showFlash("تم تغيير السؤال 🔄");
    startQuestionFlow(state.selectedDifficulty);
  }

  // ✅ EventListeners مرة وحدة فقط
  puRemove2Btn?.addEventListener("click", () => {
    const t = currentTeam();
    if (!t || t.inventory.remove2 <= 0) return;
    t.inventory.remove2 -= 1;
    removeTwoOptions();
    updateInventoryUI();
  });

  puFreezeBtn?.addEventListener("click", () => {
    const t = currentTeam();
    if (!t || t.inventory.freeze <= 0) return;
    t.inventory.freeze -= 1;
    freezeTime();
    updateInventoryUI();
  });

  puSkipBtn?.addEventListener("click", () => {
    const t = currentTeam();
    if (!t || t.inventory.skip <= 0) return;
    t.inventory.skip -= 1;
    skipQuestion();
    updateInventoryUI();
  });

  /* =========================
   13) TURN END + ROUNDS
  ========================= */
  function handleTurnEnd(isCorrect, isTimeUp = false) {
    const team = currentTeam();
    if (!team) return;

    if (isTimeUp) {
      feedbackEl &&
        (feedbackEl.textContent = "انتهى الوقت! تُحسب إجابة خاطئة ❌");
      feedbackEl?.classList.add("bad");
      team.streak = 0;
    } else if (isCorrect) {
      feedbackEl && (feedbackEl.textContent = "صح ✔️ إجابة صحيحة!");
      feedbackEl?.classList.add("good");
      team.score += state.currentPoints;
      team.streak = (team.streak || 0) + 1;
    } else {
      feedbackEl && (feedbackEl.textContent = "خطأ ❌ إجابة غير صحيحة");
      feedbackEl?.classList.add("bad");
      team.streak = 0;
    }

    // تقليل تأثير الحفرة
    if (team.pitTurnsLeft > 0) {
      team.pitTurnsLeft -= 1;
      if (team.pitTurnsLeft === 0)
        showFlash(`✅ انتهى تأثير الحفرة على ${team.name}`);
    }

    updateScoreUI();

    const prevIndex = state.currentTeamIndex;
    state.currentTeamIndex = (state.currentTeamIndex + 1) % state.teams.length;

    // نهاية لفة = جولة
    if (prevIndex === state.teams.length - 1) {
      state.rounds.current += 1;
      state.teams.forEach((t) => (t.usedFeatureThisRound = false));

      if (state.rounds.mode === "fixed" && state.rounds.total !== null) {
        if (state.rounds.current > state.rounds.total) {
          showFlash("🏁 انتهت الجولات! عرض النتائج...");
          setTimeout(() => goToResultsScreen(), 600);
          return;
        }
      }
    }

    nextQuestionBtn?.classList.remove("hidden");
  }

  answersForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (state.timer.intervalId) {
      clearInterval(state.timer.intervalId);
      state.timer.intervalId = null;
    }

    const choiceInput = answersForm.querySelector(
      "input[name='choice']:checked"
    );
    if (!choiceInput) return;

    const isCorrect = choiceInput.value === state.currentCorrect;
    handleTurnEnd(isCorrect, false);
  });

  nextQuestionBtn?.addEventListener("click", goToCategoriesScreen);

  /* =========================
   14) STORE (WORKING)
  ========================= */
  function goToStoreScreen() {
    hideAllScreens();
    showFlash("");
    storeScreen?.classList.remove("hidden");
    renderStore();
  }
  function renderStore() {
    if (!storeGrid) {
      console.warn("❌ store-grid not found");
      return;
    }

    const team = currentTeam();
    if (!team) return;

    if (storeTeamInfo) {
      storeTeamInfo.textContent = `الفريق: ${team.name} | نقاطك: ${team.score}`;
    }

    storeGrid.innerHTML = "";

    SHOP_ITEMS.forEach((item) => {
      const canBuy = team.score >= item.price;
      const owned = team.inventory[item.key] || 0;

      const card = document.createElement("div");
      card.className = "shop-card";

      card.innerHTML = `
      <div class="title">${item.title}</div>
      <div class="meta">${item.desc}</div>

      <div class="shop-row">
        <div class="price">السعر: <b>${item.price}</b> نقطة</div>
        <div class="owned">تملك: <b>${owned}</b></div>
      </div>

      <button class="pill-btn" ${canBuy ? "" : "disabled"} data-buy="${
        item.key
      }">
        ${canBuy ? "شراء" : "نقاطك غير كافية"}
      </button>
    `;

      storeGrid.appendChild(card);
    });

    console.log("Store cards:", storeGrid.children.length); // ✅ لازم تكون 4

    storeGrid.querySelectorAll("[data-buy]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const key = btn.dataset.buy;
        const item = SHOP_ITEMS.find((x) => x.key === key);
        const t = currentTeam();
        if (!t || !item) return;

        if (t.score < item.price) {
          showFlash("نقاطك ما تكفي ❌");
          return;
        }

        t.score -= item.price;
        t.inventory[key] = (t.inventory[key] || 0) + 1;

        showFlash(`✅ تم شراء ${item.title}`);
        updateScoreUI();
        renderStore();
        if (typeof renderFeatures === "function") renderFeatures();
      });
    });
  }

  /* =========================
   15) FEATURES (WORKING)
  ========================= */
  function goToFeaturesScreen() {
    hideAllScreens();
    showFlash("");
    featuresScreen?.classList.remove("hidden");

    // تنظيف اختيار قديم
    state.featureUI.selectedKey = null;
    state.featureUI.targetIndex = null;

    renderFeatures();
  }

  function renderFeatures() {
    const team = currentTeam();
    if (!team) return;
    if (!featuresBar) return console.warn("❌ features-bar not found");

    if (featuresTeamInfo) {
      featuresTeamInfo.textContent = `الفريق: ${team.name} | نقاطك: ${
        team.score
      } | ${
        team.usedFeatureThisRound
          ? "تم استخدام ميزة بهذه الجولة"
          : "لم تستخدم ميزة بهذه الجولة"
      }`;
    }

    if (featureLimitNote) {
      featureLimitNote.textContent = team.usedFeatureThisRound
        ? "⚠️ مسموح تفعيل ميزة واحدة فقط في كل جولة."
        : "مسموح تفعيل ميزة واحدة في هذه الجولة.";
    }

    const keys = ["electricity", "pit", "ban", "shield"];
    featuresBar.innerHTML = "";

    keys.forEach((key) => {
      const count = team.inventory[key] || 0;
      const meta = FEATURE_META[key];

      const b = document.createElement("button");
      b.type = "button";
      b.className = "feature-chip";
      b.innerHTML = `<span>${meta.title}</span><b>${count}</b>`;

      if (count <= 0 || team.usedFeatureThisRound) b.classList.add("disabled");

      b.addEventListener("click", () => {
        if (team.usedFeatureThisRound)
          return showFlash("❌ مسموح ميزة واحدة فقط في كل جولة");
        if (count <= 0) return showFlash("❌ ما عندك هذه الميزة");

        state.featureUI.selectedKey = key;
        state.featureUI.targetIndex = null;
        renderFeaturePanel();
      });

      featuresBar.appendChild(b);
    });

    if (!state.featureUI.selectedKey) featurePanel?.classList.add("hidden");
    else renderFeaturePanel();
  }

  function renderFeaturePanel() {
    const attacker = currentTeam();
    const key = state.featureUI.selectedKey;
    if (!attacker || !key || !featurePanel) return;

    const meta = FEATURE_META[key];
    featurePanel.classList.remove("hidden");

    selectedFeatureTitle && (selectedFeatureTitle.textContent = meta.title);
    selectedFeatureDesc && (selectedFeatureDesc.textContent = meta.desc);

    if (meta.needsTarget) {
      targetsWrap?.classList.remove("hidden");
      renderTargetsList();
    } else {
      targetsWrap?.classList.add("hidden");
      targetsList && (targetsList.innerHTML = "");
      state.featureUI.targetIndex = null;
    }

    if (activateFeatureBtn) {
      const hasCount = (attacker.inventory[key] || 0) > 0;
      const canActivate =
        hasCount &&
        !attacker.usedFeatureThisRound &&
        (!meta.needsTarget || state.featureUI.targetIndex !== null);

      activateFeatureBtn.disabled = !canActivate;
      activateFeatureBtn.onclick = () => applyFeature(key);
    }
  }

  function renderTargetsList() {
    const attacker = currentTeam();
    if (!attacker || !targetsList) return;

    targetsList.innerHTML = "";
    state.teams.forEach((t, idx) => {
      if (idx === state.currentTeamIndex) return;

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "pill-btn";
      btn.textContent = `${idx + 1}) ${t.name} — ${t.score} نقطة`;

      if (state.featureUI.targetIndex === idx) btn.classList.add("selected");

      btn.addEventListener("click", () => {
        state.featureUI.targetIndex = idx;
        renderFeaturePanel();
      });

      targetsList.appendChild(btn);
    });
  }

  function applyFeature(key) {
    const attacker = currentTeam();
    if (!attacker) return;

    if (attacker.usedFeatureThisRound)
      return showFlash("❌ مسموح ميزة واحدة فقط في كل جولة");
    if ((attacker.inventory[key] || 0) <= 0)
      return showFlash("❌ لا تملك هذه الميزة");

    const meta = FEATURE_META[key];

    let target = null;
    if (meta.needsTarget) {
      const idx = state.featureUI.targetIndex;
      if (idx === null || idx === undefined)
        return showFlash("❌ اختر فريق مستهدف");
      target = state.teams[idx];
      if (!target) return;
    }

    attacker.inventory[key] -= 1;

    if (key === "shield") {
      attacker.activeShield = (attacker.activeShield || 0) + 1;
      showFlash(`🕊️ تم تفعيل حمامة حماية للفريق ${attacker.name}`);
    }

    if (key === "electricity") {
      if (target.activeShield > 0) {
        target.activeShield -= 1;
        showFlash(`🕊️ حمامة ${target.name} منعت الكهرباء!`);
      } else {
        target.score = Math.max(0, target.score - 100);
        showFlash(`⚡ تم خصم 100 نقطة من ${target.name}`);
      }
    }

    if (key === "ban") {
      if (target.activeShield > 0) {
        target.activeShield -= 1;
        showFlash(`🕊️ حمامة ${target.name} منعت الحظر!`);
      } else {
        target.bannedRounds = (target.bannedRounds || 0) + 1;
        showFlash(`⛔ تم حظر ${target.name} من الجولة القادمة`);
      }
    }

    if (key === "pit") {
      if (target.activeShield > 0) {
        target.activeShield -= 1;
        showFlash(`🕊️ حمامة ${target.name} أنقذته من الحفرة!`);
      } else {
        target.pitTurnsLeft = Math.max(target.pitTurnsLeft || 0, 2);
        showFlash(`🕳️ تم تفعيل الحفرة على ${target.name}: (صعب فقط) لدورين`);
      }
    }

    attacker.usedFeatureThisRound = true;

    state.featureUI.selectedKey = null;
    state.featureUI.targetIndex = null;
    featurePanel?.classList.add("hidden");

    updateScoreUI();
    renderFeatures();
  }

  /* =========================
   16) STORE/FEATURES BUTTONS (مرة وحدة فقط)
  ========================= */
  storeBtn?.addEventListener("click", goToStoreScreen);
  featuresBtn?.addEventListener("click", goToFeaturesScreen);
  backFromStore?.addEventListener("click", goToCategoriesScreen);
  backFromFeatures?.addEventListener("click", goToCategoriesScreen);

  // =========================
  // Simple Back Buttons
  // =========================
  document.getElementById("back-to-login")?.addEventListener("click", () => {
    goToLoginScreen();
  });

  document
    .getElementById("back-to-teams-setup")
    ?.addEventListener("click", () => {
      goToTeamsSetupScreen();
    });

  document
    .getElementById("back-to-team-names")
    ?.addEventListener("click", () => {
      goToTeamNamesScreen();
    });

  document.getElementById("back-to-confirm")?.addEventListener("click", () => {
    goToTeamsConfirmScreen();
  });

  /* =========================
   17) RESULTS -> BACK
  ========================= */
  backToLoginBtn?.addEventListener("click", () => {
    state.loggedIn = false;
    state.teams = [];
    state.numTeams = 0;
    state.currentTeamIndex = 0;
    state.selectedCategory = null;
    state.selectedDifficulty = null;
    state.currentQuestion = null;
    state.currentCorrect = null;
    state.currentPoints = 0;

    if (state.timer.intervalId) {
      clearInterval(state.timer.intervalId);
      state.timer.intervalId = null;
    }

    goToLoginScreen();
  });

  /* =========================
   18) START
  ========================= */
  goToLoginScreen();
});
