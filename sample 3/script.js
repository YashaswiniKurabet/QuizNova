

(function () {
    'use strict';

    // ---------- Question bank ----------
    const QUESTION_BANK = {
        Science: [
            { q: 'What is the chemical symbol for gold?', options: ['Go','Gd','Au','Ag'], correct: 2, difficulty: 'Easy' },
            { q: 'Which planet is known as the Red Planet?', options: ['Venus','Mars','Jupiter','Saturn'], correct: 1, difficulty: 'Easy' },
            { q: 'How many bones are in the adult human body?', options: ['196','206','216','226'], correct: 1, difficulty: 'Medium' },
            { q: 'What gas do plants absorb from the atmosphere?', options: ['Oxygen','Nitrogen','Carbon Dioxide','Hydrogen'], correct: 2, difficulty: 'Easy' },
            { q: 'What is the speed of light in a vacuum (approx)?', options: ['300,000 km/s','150,000 km/s','1,080,000 km/s','30,000 km/s'], correct: 0, difficulty: 'Medium' },
            { q: 'Which particle has no electric charge?', options: ['Proton','Electron','Neutron','Positron'], correct: 2, difficulty: 'Medium' },
            { q: 'What is the hardest natural substance on Earth?', options: ['Gold','Iron','Diamond','Quartz'], correct: 2, difficulty: 'Easy' },
            { q: 'The mitochondria is known as the ____ of the cell.', options: ['Brain','Powerhouse','Factory','Storage'], correct: 1, difficulty: 'Easy' },
            { q: 'Which element has atomic number 1?', options: ['Helium','Hydrogen','Oxygen','Carbon'], correct: 1, difficulty: 'Easy' },
            { q: 'What force keeps planets in orbit around the Sun?', options: ['Magnetism','Friction','Gravity','Inertia'], correct: 2, difficulty: 'Easy' },
            { q: 'Who proposed the theory of general relativity?', options: ['Newton','Einstein','Hawking','Tesla'], correct: 1, difficulty: 'Medium' },
            { q: 'What is the pH value of pure water?', options: ['5','6','7','8'], correct: 2, difficulty: 'Medium' },
        ],
        Technology: [
            { q: 'What does "HTTP" stand for?', options: ['HyperText Transfer Protocol','High Transfer Text Protocol','HyperText Transmission Process','Hyper Tool Transfer Protocol'], correct: 0, difficulty: 'Easy' },
            { q: 'Who is the co-founder of Apple Inc.?', options: ['Bill Gates','Steve Jobs','Elon Musk','Mark Zuckerberg'], correct: 1, difficulty: 'Easy' },
            { q: 'Which language runs natively in web browsers?', options: ['Python','Java','JavaScript','C++'], correct: 2, difficulty: 'Easy' },
            { q: 'What does "CSS" stand for?', options: ['Cascading Style Sheets','Computer Style System','Creative Styling Syntax','Coded Style Scripts'], correct: 0, difficulty: 'Easy' },
            { q: 'Which company developed the Android OS?', options: ['Apple','Microsoft','Google','Samsung'], correct: 2, difficulty: 'Easy' },
            { q: 'What year was ChatGPT publicly launched?', options: ['2020','2021','2022','2023'], correct: 2, difficulty: 'Medium' },
            { q: 'What does "GPU" stand for?', options: ['General Purpose Unit','Graphics Processing Unit','Global Power Unit','Grand Processor Utility'], correct: 1, difficulty: 'Easy' },
            { q: 'Which protocol is used for secure web browsing?', options: ['HTTP','FTP','HTTPS','SMTP'], correct: 2, difficulty: 'Easy' },
            { q: 'Who founded SpaceX?', options: ['Jeff Bezos','Elon Musk','Richard Branson','Larry Page'], correct: 1, difficulty: 'Easy' },
            { q: 'What is the primary function of RAM?', options: ['Long-term storage','Short-term memory','Cooling','Display'], correct: 1, difficulty: 'Medium' },
            { q: 'What does "API" stand for?', options: ['Application Program Interface','Application Programming Interface','Advanced Program Integration','Automated Programming Input'], correct: 1, difficulty: 'Medium' },
            { q: 'Which is NOT a JavaScript framework?', options: ['React','Vue','Django','Angular'], correct: 2, difficulty: 'Medium' },
        ],
        History: [
            { q: 'In which year did World War II end?', options: ['1943','1944','1945','1946'], correct: 2, difficulty: 'Easy' },
            { q: 'Who was the first President of the United States?', options: ['Thomas Jefferson','John Adams','George Washington','Benjamin Franklin'], correct: 2, difficulty: 'Easy' },
            { q: 'The Great Wall is located in which country?', options: ['Japan','China','Korea','Mongolia'], correct: 1, difficulty: 'Easy' },
            { q: 'Who painted the Mona Lisa?', options: ['Michelangelo','Van Gogh','Leonardo da Vinci','Picasso'], correct: 2, difficulty: 'Easy' },
            { q: 'The Roman Empire fell in which year (Western)?', options: ['376 AD','410 AD','476 AD','527 AD'], correct: 2, difficulty: 'Hard' },
            { q: 'Who was known as the "Iron Lady"?', options: ['Angela Merkel','Margaret Thatcher','Indira Gandhi','Golda Meir'], correct: 1, difficulty: 'Medium' },
            { q: 'The Titanic sank in which year?', options: ['1910','1911','1912','1913'], correct: 2, difficulty: 'Medium' },
            { q: 'Which ancient civilization built the pyramids of Giza?', options: ['Romans','Greeks','Egyptians','Mayans'], correct: 2, difficulty: 'Easy' },
            { q: 'Who discovered America in 1492?', options: ['Vasco da Gama','Columbus','Magellan','Cortez'], correct: 1, difficulty: 'Easy' },
            { q: 'The Berlin Wall fell in which year?', options: ['1987','1988','1989','1991'], correct: 2, difficulty: 'Medium' },
            { q: 'Who wrote "The Communist Manifesto"?', options: ['Lenin','Marx & Engels','Stalin','Trotsky'], correct: 1, difficulty: 'Medium' },
            { q: 'In which year did India gain independence?', options: ['1945','1946','1947','1950'], correct: 2, difficulty: 'Easy' },
        ],
        Sports: [
            { q: 'How many players are on a soccer team on the field?', options: ['9','10','11','12'], correct: 2, difficulty: 'Easy' },
            { q: 'In which sport is the term "home run" used?', options: ['Cricket','Baseball','Tennis','Golf'], correct: 1, difficulty: 'Easy' },
            { q: 'How often are the Summer Olympic Games held?', options: ['Every 2 years','Every 3 years','Every 4 years','Every 5 years'], correct: 2, difficulty: 'Easy' },
            { q: 'Michael Jordan played for which NBA team mostly?', options: ['Lakers','Celtics','Bulls','Heat'], correct: 2, difficulty: 'Easy' },
            { q: 'In tennis, what is a score of zero called?', options: ['Nil','Zip','Love','Null'], correct: 2, difficulty: 'Easy' },
            { q: 'Which country won the 2022 FIFA World Cup?', options: ['France','Brazil','Argentina','Germany'], correct: 2, difficulty: 'Medium' },
            { q: 'How many holes are played in a standard round of golf?', options: ['9','12','18','24'], correct: 2, difficulty: 'Easy' },
            { q: 'Usain Bolt is from which country?', options: ['USA','Jamaica','Kenya','Ethiopia'], correct: 1, difficulty: 'Easy' },
            { q: "The America's Cup is a trophy in which sport?", options: ['Rowing','Sailing','Surfing','Swimming'], correct: 1, difficulty: 'Medium' },
            { q: 'In cricket, how many players are in a team?', options: ['9','10','11','12'], correct: 2, difficulty: 'Easy' },
            { q: 'Who holds the record for most Grand Slam titles (men)?', options: ['Federer','Nadal','Djokovic','Sampras'], correct: 2, difficulty: 'Medium' },
            { q: 'F1 Grand Prix of Monaco takes place in which city?', options: ['Nice','Monaco','Cannes','Marseille'], correct: 1, difficulty: 'Medium' },
        ],
        Movies: [
            { q: 'Who directed the movie "Inception"?', options: ['Spielberg','Nolan','Cameron','Scorsese'], correct: 1, difficulty: 'Medium' },
            { q: 'Which movie features the character Jack Dawson?', options: ['Gladiator','Titanic','Avatar','Braveheart'], correct: 1, difficulty: 'Easy' },
            { q: '"May the Force be with you" is from which franchise?', options: ['Star Trek','Star Wars','Matrix','Marvel'], correct: 1, difficulty: 'Easy' },
            { q: 'Who played the Joker in "The Dark Knight" (2008)?', options: ['Joaquin Phoenix','Jack Nicholson','Heath Ledger','Jared Leto'], correct: 2, difficulty: 'Easy' },
            { q: 'Which film won Best Picture at the 2020 Oscars?', options: ['1917','Joker','Parasite','Once Upon a Time'], correct: 2, difficulty: 'Medium' },
            { q: '"Avatar" (2009) was directed by?', options: ['James Cameron','Peter Jackson','Ridley Scott','Michael Bay'], correct: 0, difficulty: 'Easy' },
            { q: 'In "The Matrix", what color pill does Neo take?', options: ['Blue','Red','Green','White'], correct: 1, difficulty: 'Easy' },
            { q: 'Which studio produces the Marvel Cinematic Universe?', options: ['Warner Bros','Marvel Studios','Sony','Paramount'], correct: 1, difficulty: 'Easy' },
            { q: 'Who plays Iron Man in the MCU?', options: ['Chris Evans','Robert Downey Jr.','Chris Hemsworth','Mark Ruffalo'], correct: 1, difficulty: 'Easy' },
            { q: '"Forrest Gump" was released in which year?', options: ['1992','1993','1994','1995'], correct: 2, difficulty: 'Medium' },
            { q: 'Which movie features Hogwarts?', options: ['Lord of the Rings','Harry Potter','Narnia','Percy Jackson'], correct: 1, difficulty: 'Easy' },
            { q: 'Who directed "Pulp Fiction"?', options: ['Tarantino','Coppola','Kubrick','Scorsese'], correct: 0, difficulty: 'Medium' },
        ],
        Geography: [
            { q: 'What is the capital of Australia?', options: ['Sydney','Melbourne','Canberra','Perth'], correct: 2, difficulty: 'Medium' },
            { q: 'The Sahara Desert is on which continent?', options: ['Asia','Africa','Australia','S. America'], correct: 1, difficulty: 'Easy' },
            { q: 'Which is the longest river in the world?', options: ['Amazon','Nile','Yangtze','Mississippi'], correct: 1, difficulty: 'Medium' },
            { q: 'Mount Everest is located in which range?', options: ['Andes','Rockies','Himalayas','Alps'], correct: 2, difficulty: 'Easy' },
            { q: 'Which country has the largest population?', options: ['USA','China','India','Russia'], correct: 2, difficulty: 'Medium' },
            { q: 'Tokyo is the capital of?', options: ['China','Japan','Korea','Thailand'], correct: 1, difficulty: 'Easy' },
            { q: 'Which ocean is the largest?', options: ['Atlantic','Indian','Pacific','Arctic'], correct: 2, difficulty: 'Easy' },
            { q: 'The Eiffel Tower is in which city?', options: ['London','Rome','Paris','Berlin'], correct: 2, difficulty: 'Easy' },
            { q: 'How many continents are there?', options: ['5','6','7','8'], correct: 2, difficulty: 'Easy' },
            { q: 'Which is the smallest country in the world?', options: ['Monaco','Vatican City','San Marino','Nauru'], correct: 1, difficulty: 'Medium' },
            { q: 'The Amazon rainforest is primarily in which country?', options: ['Peru','Colombia','Brazil','Venezuela'], correct: 2, difficulty: 'Easy' },
            { q: 'Which country is shaped like a boot?', options: ['Spain','Italy','Greece','Portugal'], correct: 1, difficulty: 'Easy' },
        ],
        General: [
            { q: 'How many colors are in a rainbow?', options: ['5','6','7','8'], correct: 2, difficulty: 'Easy' },
            { q: 'Which language has the most native speakers?', options: ['English','Spanish','Mandarin','Hindi'], correct: 2, difficulty: 'Medium' },
            { q: 'What is the national animal of China?', options: ['Tiger','Dragon','Panda','Crane'], correct: 2, difficulty: 'Easy' },
            { q: 'How many sides does a hexagon have?', options: ['5','6','7','8'], correct: 1, difficulty: 'Easy' },
            { q: 'Which vitamin does the sun help produce in our skin?', options: ['Vitamin A','Vitamin B','Vitamin C','Vitamin D'], correct: 3, difficulty: 'Easy' },
            { q: 'Who wrote "Romeo and Juliet"?', options: ['Dickens','Shakespeare','Austen','Hemingway'], correct: 1, difficulty: 'Easy' },
            { q: 'What is the currency of Japan?', options: ['Won','Yen','Yuan','Rupee'], correct: 1, difficulty: 'Easy' },
            { q: 'Which blood type is the universal donor?', options: ['A+','B+','O-','AB+'], correct: 2, difficulty: 'Medium' },
            { q: 'What does "www" stand for?', options: ['World Web Wire','World Wide Web','Web World Wide','Wide Web World'], correct: 1, difficulty: 'Easy' },
            { q: 'How many minutes are in a full day?', options: ['720','1440','1800','2400'], correct: 1, difficulty: 'Medium' },
            { q: 'The freezing point of water in Celsius is?', options: ['-10°','0°','10°','32°'], correct: 1, difficulty: 'Easy' },
            { q: 'Which instrument has 88 keys?', options: ['Guitar','Violin','Piano','Harp'], correct: 2, difficulty: 'Easy' },
        ],
    };

    const DIFFICULTY_CONFIG = { Easy: { time: 20 }, Medium: { time: 15 }, Hard: { time: 10 } };
    const QUESTIONS_PER_QUIZ = 5;
    const STORAGE_KEY = 'neural_quiz_state';

    // ---------- helpers ----------
    const $ = (id) => document.getElementById(id);

    function shuffle(arr) {
        const a = arr.slice();
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    function pickQuestions(topicKey, difficulty) {
        const bank = QUESTION_BANK[topicKey] || [];
        let pool = bank.filter((q) => q.difficulty === difficulty);
        if (pool.length < QUESTIONS_PER_QUIZ) pool = bank;
        if (pool.length < QUESTIONS_PER_QUIZ) pool = Object.values(QUESTION_BANK).flat();
        return shuffle(pool).slice(0, QUESTIONS_PER_QUIZ);
    }

    function resolveTopicKey(userTopic) {
        if (!userTopic) return 'General';
        const normalized = userTopic.trim().toLowerCase();
        const keys = Object.keys(QUESTION_BANK);
        const exact = keys.find((k) => k.toLowerCase() === normalized);
        if (exact) return exact;
        const partial = keys.find((k) => normalized.includes(k.toLowerCase()) || k.toLowerCase().includes(normalized));
        if (partial) return partial;
        return 'General';
    }

    function saveState(state) {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }
    function loadState() {
        try { return JSON.parse(sessionStorage.getItem(STORAGE_KEY)); }
        catch (e) { return null; }
    }

    function escapeHtml(str) {
        return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
    }

    // ============================================================
    // HOME PAGE
    // ============================================================
    function initHome() {
        const topicInput    = $('topic-input');
        const difficultySel = $('difficulty-select');
        const generateBtn   = $('generate-btn');
        const metaTimer     = $('meta-timer');
        if (!topicInput || !generateBtn) return;

        document.querySelectorAll('.chip').forEach((chip) => {
            chip.addEventListener('click', () => {
                document.querySelectorAll('.chip').forEach((c) => c.classList.remove('active'));
                chip.classList.add('active');
                topicInput.value = chip.dataset.topic;
            });
        });

        function syncMetaTimer() {
            metaTimer.textContent = `${DIFFICULTY_CONFIG[difficultySel.value].time}s`;
        }
        difficultySel.addEventListener('change', syncMetaTimer);
        syncMetaTimer();

        generateBtn.addEventListener('click', () => {
            const topic = (topicInput.value || '').trim() || 'General';
            const difficulty = difficultySel.value;
            const topicKey = resolveTopicKey(topic);
            const questions = pickQuestions(topicKey, difficulty);

            saveState({
                topic, topicKey, difficulty,
                timePerQ: DIFFICULTY_CONFIG[difficulty].time,
                questions,
                selectedAnswers: new Array(questions.length).fill(-1),
                currentIndex: 0,
            });

            window.location.href = 'quiz.html';
        });

        topicInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') generateBtn.click();
        });
    }

    // ============================================================
    // QUIZ PAGE
    // ============================================================
    function initQuiz() {
        const questionEl  = $('question-text');
        if (!questionEl) return;

        const state = loadState();
        if (!state || !state.questions || !state.questions.length) {
            window.location.href = 'index.html';
            return;
        }

        const optionsGrid  = $('options-grid');
        const progressFill = $('progress-fill');
        const currentQNum  = $('current-q-num');
        const totalQNum    = $('total-q-num');
        const timerValue   = $('timer-value');
        const timerRingFg  = $('timer-ring-fg');
        const timerBox     = $('timer-box');
        const topicTag     = $('quiz-topic-tag');
        const skipBtn      = $('skip-btn');

        totalQNum.textContent = state.questions.length;
        topicTag.textContent = state.topicKey.toUpperCase();

        const RING_CIRC = 2 * Math.PI * 30;
        let timerId = null;
        let timeLeft = state.timePerQ;
        let locked = false;

        function render() {
            locked = false;
            const idx = state.currentIndex;
            const q = state.questions[idx];
            currentQNum.textContent = idx + 1;

            questionEl.style.opacity = '0';
            questionEl.style.transform = 'translateY(8px)';
            setTimeout(() => {
                questionEl.textContent = q.q;
                questionEl.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
                questionEl.style.opacity = '1';
                questionEl.style.transform = 'translateY(0)';
            }, 40);

            optionsGrid.innerHTML = '';
            const letters = ['A','B','C','D'];
            q.options.forEach((opt, i) => {
                const btn = document.createElement('button');
                btn.className = 'option-card';
                btn.type = 'button';
                btn.style.animation = `page-in 0.4s ${0.05 * i}s both`;
                btn.innerHTML = `<span class="option-letter">${letters[i]}</span><span class="option-text">${escapeHtml(opt)}</span>`;
                btn.addEventListener('mousemove', (e) => {
                    const r = btn.getBoundingClientRect();
                    btn.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
                    btn.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
                });
                btn.addEventListener('click', () => handleAnswer(i));
                optionsGrid.appendChild(btn);
            });

            progressFill.style.width = ((idx) / state.questions.length) * 100 + '%';
            startTimer();
        }

        function handleAnswer(optionIdx) {
            if (locked) return;
            locked = true;
            state.selectedAnswers[state.currentIndex] = optionIdx;
            optionsGrid.querySelectorAll('.option-card').forEach((el, i) => {
                if (i === optionIdx) el.classList.add('selected');
                el.style.pointerEvents = 'none';
            });
            stopTimer();
            setTimeout(advance, 550);
        }

        function advance() {
            const next = state.currentIndex + 1;
            if (next >= state.questions.length) {
                saveState(state);
                window.location.href = 'result.html';
            } else {
                state.currentIndex = next;
                saveState(state);
                render();
            }
        }

        skipBtn.addEventListener('click', () => {
            if (locked) return;
            locked = true;
            stopTimer();
            advance();
        });

        function startTimer() {
            stopTimer();
            timeLeft = state.timePerQ;
            updateTimerUI();
            timerBox.classList.remove('low');
            timerId = setInterval(() => {
                timeLeft -= 1;
                updateTimerUI();
                if (timeLeft <= 5) timerBox.classList.add('low');
                if (timeLeft <= 0) {
                    stopTimer();
                    if (!locked) {
                        locked = true;
                        setTimeout(advance, 300);
                    }
                }
            }, 1000);
        }
        function stopTimer() { if (timerId) { clearInterval(timerId); timerId = null; } }
        function updateTimerUI() {
            timerValue.textContent = timeLeft;
            const ratio = Math.max(0, timeLeft) / state.timePerQ;
            timerRingFg.style.strokeDashoffset = RING_CIRC * (1 - ratio);
        }

        render();
    }

    // ============================================================
    // RESULT PAGE
    // ============================================================
    function initResult() {
        const scoreValue = $('score-value');
        if (!scoreValue) return;

        const state = loadState();
        if (!state || !state.questions) {
            window.location.href = 'index.html';
            return;
        }

        let correct = 0, wrong = 0, skipped = 0;
        state.questions.forEach((q, i) => {
            const ans = state.selectedAnswers[i];
            if (ans === -1) skipped++;
            else if (ans === q.correct) correct++;
            else wrong++;
        });

        scoreValue.textContent = correct;
        $('score-total').textContent = '/' + state.questions.length;
        $('stat-correct').textContent = correct;
        $('stat-wrong').textContent = wrong;
        $('stat-skipped').textContent = skipped;

        const scoreRatio = correct / state.questions.length;
        const scoreCirc = 2 * Math.PI * 78;
        const ringEl = $('score-ring-fg');
        setTimeout(() => { ringEl.style.strokeDashoffset = scoreCirc * (1 - scoreRatio); }, 220);

        if (scoreRatio >= 0.8)      ringEl.style.stroke = '#22c55e';
        else if (scoreRatio >= 0.5) ringEl.style.stroke = '#22d3ee';
        else                        ringEl.style.stroke = '#ef4444';

        const msg = $('result-message');
        if      (scoreRatio === 1)    msg.textContent = 'Flawless. The neural net bows to you. ';
        else if (scoreRatio >= 0.8)   msg.textContent = 'Outstanding — your brain is on fire.';
        else if (scoreRatio >= 0.6)   msg.textContent = "Solid run. A few more reps and you'll dominate.";
        else if (scoreRatio >= 0.4)   msg.textContent = "Not bad — there's sharper steel in you yet.";
        else if (scoreRatio > 0)      msg.textContent = 'Rough patch. Reboot and try again, champion.';
        else                          msg.textContent = 'Oof. The machine believes in you — try again.';

        const reviewList = $('review-list');
        reviewList.innerHTML = '';
        state.questions.forEach((q, i) => {
            const ans = state.selectedAnswers[i];
            const isSkipped = ans === -1;
            const isCorrect = !isSkipped && ans === q.correct;
            const statusClass = isSkipped ? 'skipped' : isCorrect ? 'correct' : 'wrong';
            const statusLabel = isSkipped ? 'SKIPPED' : isCorrect ? 'CORRECT' : 'WRONG';
            const itemClass = isSkipped ? 'skipped-item' : isCorrect ? 'correct-item' : 'wrong-item';
            const yourAnswer = isSkipped ? '— (no answer)' : q.options[ans];
            const correctAnswer = q.options[q.correct];

            const item = document.createElement('div');
            item.className = `review-item ${itemClass}`;
            item.style.animationDelay = (i * 0.08) + 's';
            item.innerHTML = `
                <div class="review-item-head">
                    <span>Q${i + 1}</span>
                    <span class="review-status ${statusClass}">${statusLabel}</span>
                </div>
                <div class="review-q">${escapeHtml(q.q)}</div>
                <div class="review-ans">
                    <span class="your"><b>Your answer:</b> ${escapeHtml(yourAnswer)}</span>
                    <span class="right"><b>Correct:</b> ${escapeHtml(correctAnswer)}</span>
                </div>`;
            reviewList.appendChild(item);
        });

        $('try-again-btn').addEventListener('click', () => {
            // regenerate a fresh set of questions with the same topic/difficulty
            const questions = pickQuestions(state.topicKey, state.difficulty);
            saveState({
                topic: state.topic,
                topicKey: state.topicKey,
                difficulty: state.difficulty,
                timePerQ: state.timePerQ,
                questions,
                selectedAnswers: new Array(questions.length).fill(-1),
                currentIndex: 0,
            });
            window.location.href = 'quiz.html';
        });

        $('new-topic-btn').addEventListener('click', () => {
            sessionStorage.removeItem(STORAGE_KEY);
            window.location.href = 'index.html';
        });
    }

    // ============================================================
    // PARTICLES BACKGROUND (runs on every page)
    // ============================================================
    function initParticles() {
        const canvas = document.getElementById('particles');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let w, h, particles;

        function resize() {
            w = canvas.width = window.innerWidth * window.devicePixelRatio;
            h = canvas.height = window.innerHeight * window.devicePixelRatio;
            canvas.style.width = window.innerWidth + 'px';
            canvas.style.height = window.innerHeight + 'px';
        }
        function init() {
            resize();
            const count = Math.min(70, Math.floor((window.innerWidth * window.innerHeight) / 22000));
            particles = Array.from({ length: count }, () => ({
                x: Math.random() * w, y: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.25 * window.devicePixelRatio,
                vy: (Math.random() - 0.5) * 0.25 * window.devicePixelRatio,
                r: (Math.random() * 1.6 + 0.4) * window.devicePixelRatio,
                hue: Math.random() < 0.5 ? 190 : 270,
                a: Math.random() * 0.5 + 0.25,
            }));
        }
        function draw() {
            ctx.clearRect(0, 0, w, h);
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                for (let j = i + 1; j < particles.length; j++) {
                    const q = particles[j];
                    const dx = p.x - q.x, dy = p.y - q.y;
                    const d = Math.sqrt(dx * dx + dy * dy);
                    const max = 140 * window.devicePixelRatio;
                    if (d < max) {
                        ctx.strokeStyle = `hsla(${(p.hue + q.hue) / 2}, 90%, 65%, ${0.08 * (1 - d / max)})`;
                        ctx.lineWidth = 1 * window.devicePixelRatio;
                        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
                    }
                }
            }
            particles.forEach((p) => {
                p.x += p.vx; p.y += p.vy;
                if (p.x < 0 || p.x > w) p.vx *= -1;
                if (p.y < 0 || p.y > h) p.vy *= -1;
                ctx.fillStyle = `hsla(${p.hue}, 95%, 70%, ${p.a})`;
                ctx.shadowBlur = 10 * window.devicePixelRatio;
                ctx.shadowColor = `hsla(${p.hue}, 95%, 65%, 0.9)`;
                ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
                ctx.shadowBlur = 0;
            });
            requestAnimationFrame(draw);
        }
        window.addEventListener('resize', init);
        init(); draw();
    }

    // ============================================================
    // BOOT — detect current page by which elements exist
    // ============================================================
    document.addEventListener('DOMContentLoaded', () => {
        initParticles();
        initHome();
        initQuiz();
        initResult();
    });
})();