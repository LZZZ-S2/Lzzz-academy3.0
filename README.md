<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>LZZZ Academy</title>

  <!-- Google Font -->
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;600;800&display=swap" rel="stylesheet">

  <style>
    :root{
      --neon: #00ffff;
      --neon-strong: rgba(0,255,255,1);
      --bg-dark: #0b0b0c;
      --panel: rgba(10,10,10,0.65);
      --muted: #cfcfcf;
      --glass-blur: 6px;
      --radius-lg: 14px;
    }

    /* ---------- Reset ---------- */
    *{box-sizing:border-box;margin:0;padding:0}
    html,body{height:100%}
    body{
      font-family: 'Nunito', sans-serif;
      color: #f3f3f3;
      line-height:1.6;
      background: linear-gradient(180deg, rgba(0,0,0,0.65), rgba(0,0,0,0.25));
      overflow-x:hidden;
      -webkit-font-smoothing:antialiased;
    }

    /* ---------- particle background canvas ---------- */
    #particle-canvas{
      position:fixed;left:0;top:0;width:100%;height:100%;z-index:0;pointer-events:none;
      mix-blend-mode:screen;opacity:0.6;
    }

    /* ---------- page container ---------- */
    .wrap{
      position:relative;z-index:2;
      max-width:1100px;margin:0 auto;padding:28px;
    }

    /* ---------- header / nav ---------- */
    header{
      background: linear-gradient(180deg, rgba(0,0,0,0.85), rgba(0,0,0,0.55));
      padding:28px;border-radius:12px;
      box-shadow:0 8px 30px rgba(0,0,0,0.6), inset 0 -1px 0 rgba(255,255,255,0.02);
      display:flex;align-items:center;gap:20px;justify-content:space-between;
      position:sticky;top:18px;backdrop-filter: blur(6px);
      transition:box-shadow .25s ease;
    }
    header.sticky{
      box-shadow:0 12px 40px rgba(0,0,0,0.75);
    }

    /* logo/title */
    .brand{
      cursor:pointer;display:flex;align-items:center;gap:12px;
      user-select:none;
    }
    .brand .logo{
      width:56px;height:56px;border-radius:10px;
      background: linear-gradient(135deg,#052025, rgba(0,255,255,0.06));
      display:flex;align-items:center;justify-content:center;
      border:2px solid rgba(0,255,255,0.08);
      box-shadow:0 6px 18px rgba(0,255,255,0.04);
      transition:transform .18s ease, box-shadow .25s ease;
    }
    .brand h1{
      font-size:1.6rem;color:var(--neon);font-weight:800;
      text-shadow:0 0 8px rgba(0,255,255,0.18);
      transition:text-shadow .18s ease;
    }
    .brand p{
      font-size:0.85rem;color:var(--muted);margin-top:2px;font-weight:300;
    }

    /* nav links */
    nav.primary{
      display:flex;gap:12px;align-items:center;
    }
    nav.primary a{
      color:#e9ffff;padding:8px 14px;border-radius:28px;text-decoration:none;
      font-weight:700;background:transparent;border:1px solid rgba(255,255,255,0.03);
      transition:all .18s ease;box-shadow:0 4px 10px rgba(0,0,0,0.35);
    }
    nav.primary a:hover, nav.primary a:focus{
      transform:translateY(-3px);outline:none;
      box-shadow:0 8px 22px rgba(0,255,255,0.12);
      border-color: rgba(0,255,255,0.14);
    }

    /* main sections style */
    section{
      margin-top:22px;background:var(--panel);padding:40px;border-radius:var(--radius-lg);
      box-shadow: 0 10px 30px rgba(0,0,0,0.6);
      border:1px solid rgba(255,255,255,0.02);
      backdrop-filter: blur(var(--glass-blur));
      opacity:0;transform: translateY(18px);transition:all .7s cubic-bezier(.16,.9,.3,1);
    }
    section.visible{opacity:1;transform:none}

    h2{
      color:var(--neon);text-align:center;margin-bottom:18px;font-size:1.4rem;
      text-shadow:0 0 6px rgba(0,255,255,0.12);
    }

    /* neon divider */
    .neon-divider{
      height:4px;border-radius:2px;margin:20px auto 24px;
      background: linear-gradient(90deg, transparent, rgba(0,255,255,0.12), transparent);
      box-shadow: 0 0 18px rgba(0,255,255,0.06);
      width:60%;
    }

    /* about text */
    #about p{
      color:#ececec;font-size:1rem;max-width:100%;white-space:pre-line;
      word-wrap:break-word;
    }

    /* courses: grid two-column on desktop */
    .courses{
      display:grid;grid-template-columns: repeat(1,1fr);gap:18px;
      align-items:stretch;
    }
    @media(min-width:860px){
      .courses{grid-template-columns: repeat(2, 1fr);}
    }

    .course-card{
      position:relative;padding:18px;border-radius:12px;background:
        linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.15));
      overflow:hidden;
      border:2px solid rgba(0,255,255,0.06);
      transition:transform .22s ease, box-shadow .22s ease;
      min-height:110px;
      display:flex;flex-direction:column;justify-content:center;gap:8px;
    }

    /* animated neon border */
    .course-card::before{
      content:"";position:absolute;inset:-2px;border-radius:14px;padding:2px;
      background:linear-gradient(90deg, rgba(0,255,255,0.06), rgba(0,255,255,0.18));
      mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
      -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
      pointer-events:none;opacity:0.9;mix-blend-mode:screen;
      transition:filter .4s ease, transform .4s ease;
      box-shadow:0 6px 22px rgba(0,255,255,0.04);
    }
    .course-card:hover{
      transform: translateY(-6px);
      box-shadow:0 18px 40px rgba(0,255,255,0.08);
    }
    .course-card:hover::before{
      transform:scale(1.03);
      filter: blur(6px);
    }

    .course-card h3{color:var(--neon);font-size:1.05rem;margin-bottom:4px}
    .course-card p{color:#e9e9e9;font-size:0.96rem;line-height:1.45;white-space:pre-line}

    /* hover icon that appears on the right */
    .hover-icon{
      position:absolute;right:14px;top:14px;font-size:1.6rem;opacity:0;transform:translateY(-6px);
      transition:opacity .2s ease, transform .2s ease;
      filter: drop-shadow(0 6px 12px rgba(0,255,255,0.08));
      pointer-events:none;
    }
    .course-card:hover .hover-icon{opacity:1;transform:none}

    /* social section */
    .social-list{display:flex;flex-direction:column;gap:8px;align-items:center}
    .social-list p{font-size:1.05rem;color:#fff}
    .social-list a{color:#fff;text-decoration:none;font-weight:800;border-radius:8px;padding:6px 8px}
    .social-list a.tiktok{
      display:inline-block;position:relative;
      transition:transform .18s ease;
    }
    /* sparkle effect on hover */
    .social-list a.tiktok::after{
      content:"";position:absolute;left:-8px;right:-8px;top:-10px;height:26px;border-radius:8px;
      background: linear-gradient(90deg, rgba(255,255,255,0.04), rgba(0,255,255,0.06));
      opacity:0;transform:scaleX(.6);transition:all .28s ease;pointer-events:none;
    }
    .social-list a.tiktok:hover::after{opacity:1;transform:scaleX(1)}
    .social-list a.tiktok:hover{transform:translateY(-3px)}

    /* footer */
    footer{
      margin-top:20px;padding:18px;text-align:center;color:#cfcfcf;font-size:0.9rem;
    }
    .footer-links{display:flex;gap:14px;justify-content:center;margin-bottom:8px;flex-wrap:wrap}
    .footer-links a{text-decoration:none;color:#ddd;padding:6px 10px;border-radius:8px;border:1px solid rgba(255,255,255,0.02)}
    .footer-links a:hover{box-shadow:0 8px 24px rgba(0,255,255,0.06);transform:translateY(-3px)}

    /* tiny flash animation for header when clicked */
    .flash{
      animation: headerFlash .7s ease;
    }
    @keyframes headerFlash{
      0%{text-shadow:0 0 6px rgba(0,255,255,0.25)}
      50%{transform:scale(1.02);text-shadow:0 0 28px rgba(0,255,255,0.95)}
      100%{transform:none;text-shadow:0 0 8px rgba(0,255,255,0.22)}
    }

    /* smooth scroll behavior */
    html { scroll-behavior: smooth; }

    /* responsive tweaks */
    @media (max-width:520px){
      header{flex-direction:column;align-items:flex-start;gap:8px;padding:18px}
      .brand p{font-size:0.75rem}
      nav.primary{width:100%;justify-content:space-between}
    }

    /* hidden (used for login/signup - present but not visible/interactive) */
    .hidden-offscreen{display:none !important;visibility:hidden !important;pointer-events:none !important;opacity:0 !important}
  </style>
</head>
<body>

  <!-- Particle canvas (subtle floating dots) -->
  <canvas id="particle-canvas" aria-hidden="true"></canvas>

  <div class="wrap" id="topWrap">

    <!-- Header / Sticky nav -->
    <header id="siteHeader">
      <div class="brand" id="brandClick" role="button" tabindex="0" aria-label="LZZZ Academy - click me">
        <div class="logo" aria-hidden="true">
          <!-- decorative cube-ish mark -->
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="4" fill="url(#g)"/>
            <defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#002627"/><stop offset="1" stop-color="#003737"/></linearGradient></defs>
          </svg>
        </div>
        <div>
          <h1>LZZZ Academy</h1>
          <p>Unlock your potential.</p>
        </div>
      </div>

      <nav class="primary" aria-label="Primary navigation">
        <a href="#about">About</a>
        <a href="#courses">Our Courses</a>
        <a href="#social">Connect</a>
      </nav>
    </header>

    <!-- About -->
    <section id="about" aria-labelledby="aboutTitle">
      <h2 id="aboutTitle">About Us</h2>
      <div class="neon-divider" aria-hidden="true"></div>
      <p>
        Welcome to LZZZ Academy — the ultimate training ground for becoming a next-level human.
        Whether you're trying to dominate Rainbow Six Siege, master Rizzology, win with your Centrelink paycheck, cure brain cancer, or farm aura like a god — we got you.
        We don’t just teach — we transform.
      </p>
    </section>

    <!-- Courses -->
    <section id="courses" aria-labelledby="coursesTitle">
      <h2 id="coursesTitle">Our Courses</h2>
      <div class="neon-divider" aria-hidden="true"></div>

      <div class="courses" id="courseGrid">
        <article class="course-card" tabindex="0" aria-labelledby="c1">
          <div class="hover-icon" aria-hidden="true">🎯</div>
          <h3 id="c1">R6 Classes</h3>
          <p>We turn controller-throwing bronze bots into callout-speaking, pixel-peeking champions.
Strategy, aim, and mindgames - all in one course.</p>
        </article>

        <article class="course-card" tabindex="0" aria-labelledby="c2">
          <div class="hover-icon" aria-hidden="true">💬</div>
          <h3 id="c2">Rizzology</h3>
          <p>Tired of being left on delivered? We teach the ancient, forbidden art of Rizz - confidence, timing, and the perfect message. Become HIM.</p>
        </article>

        <article class="course-card" tabindex="0" aria-labelledby="c3">
          <div class="hover-icon" aria-hidden="true">🎲</div>
          <h3 id="c3">Professional Gambling</h3>
          <p>Stop losing your entire Centrelink paycheck on multis.
We'll show you how to actually bet smart, read odds, and gamble with style - responsibly (kinda).</p>
        </article>

        <!-- Placeholder for future courses (keeps layout balanced) -->
        <article class="course-card" tabindex="0" aria-hidden="true" style="opacity:0.0;pointer-events:none">
          <div class="hover-icon" aria-hidden="true">✨</div>
          <h3>&nbsp;</h3>
          <p>&nbsp;</p>
        </article>

      </div>
    </section>

    <!-- Socials -->
    <section id="social" aria-labelledby="socialTitle">
      <h2 id="socialTitle">Connect With Us</h2>
      <div class="neon-divider" aria-hidden="true"></div>

      <div class="social-list">
        <p>🎮 PSN: <strong>LZZZ-S2</strong></p>
        <p>📱 TikTok: <strong>
          <!-- Visible text remains EXACTLY as you wrote; link goes to the provided lowercase handle -->
          <a class="tiktok" href="https://www.tiktok.com/@lzzz_s2" target="_blank" rel="noopener noreferrer" aria-label="Open TikTok profile">@LZZZ-S2</a>
        </strong></p>
      </div>
    </section>

    <footer role="contentinfo">
      <div class="footer-links" aria-hidden="true">
        <a href="#about">About</a>
        <a href="#courses">Courses</a>
        <a href="#social">Connect</a>
      </div>
      <div>&copy; 2025 LZZZ Academy. All rights reserved.</div>
    </footer>

  </div> <!-- /.wrap -->

  <!-- ---------------- Hidden login/signup kept in DOM but non-interactive ----------------
       They are intentionally hidden with the class "hidden-offscreen". This preserves the markup
       for later reactivation but prevents any interaction on the live site now.
  -->
  <div class="hidden-offscreen" aria-hidden="true">
    <!-- Login Modal (hidden) -->
    <div id="loginModal" role="dialog" aria-modal="true" aria-hidden="true" tabindex="-1">
      <div class="modal-content">
        <h3 id="loginTitle">Login</h3>
        <label for="loginUser">Username</label>
        <input type="text" placeholder="Username" id="loginUser" autocomplete="username" />
        <label for="loginPass">Password</label>
        <div class="password-wrapper">
          <input type="password" placeholder="Password" id="loginPass" autocomplete="current-password" />
        </div>
        <label><input type="checkbox" id="loginRemember" /> Remember Me</label>
        <button>Login</button>
      </div>
    </div>

    <!-- Signup Modal (hidden) -->
    <div id="signupModal" role="dialog" aria-modal="true" aria-hidden="true" tabindex="-1">
      <div class="modal-content">
        <h3 id="signupTitle">Sign Up</h3>
        <label for="signupUser">Username</label>
        <input type="text" placeholder="Username" id="signupUser" autocomplete="username" />
        <label for="signupPass">Password</label>
        <div class="password-wrapper">
          <input type="password" placeholder="Password" id="signupPass" autocomplete="new-password" />
        </div>
        <label><input type="checkbox" id="signupRemember" /> Remember Me</label>
        <button>Sign Up</button>
      </div>
    </div>
  </div>

  <!-- ---------------- Scripts ---------------- -->
  <script>
    /* ===== Sticky header visual tweak ===== */
    const header = document.getElementById('siteHeader');
    window.addEventListener('scroll', () => {
      if(window.scrollY > 18) header.classList.add('sticky');
      else header.classList.remove('sticky');
    });

    /* ===== Section reveal on scroll (simple intersection) ===== */
    const sections = document.querySelectorAll('section');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if(e.isIntersecting) e.target.classList.add('visible');
      });
    }, {threshold: 0.15});
    sections.forEach(s => io.observe(s));

    /* ===== Header flash easter egg ===== */
    const brand = document.getElementById('brandClick');
    brand.addEventListener('click', () => {
      const h = brand.querySelector('h1');
      h.classList.remove('flash');
      // retrigger
      void h.offsetWidth;
      h.classList.add('flash');
    });
    brand.addEventListener('keydown', (ev) => {
      if(ev.key === 'Enter' || ev.key === ' ') brand.click();
    });

    /* ===== particles (subtle drifting dots) ===== */
    (function(){
      const canvas = document.getElementById('particle-canvas');
      const ctx = canvas.getContext('2d');
      let w = canvas.width = innerWidth;
      let h = canvas.height = innerHeight;
      const count = Math.round((w*h)/90000); // density
      const particles = [];
      function rand(min,max){return Math.random()*(max-min)+min}
      class P{
        constructor(){ this.reset(true) }
        reset(init){
          this.x = rand(0,w);
          this.y = rand(0,h);
          this.vx = rand(-0.15,0.15);
          this.vy = rand(-0.05,0.05);
          this.r = rand(0.6,1.8);
          this.alpha = rand(0.08,0.28);
          if(!init){ // if reset after leaving
            if(Math.random()>0.5) this.x = Math.random()>0.5 ? -10 : w+10;
            else this.y = Math.random()>0.5 ? -10 : h+10;
          }
        }
        step(){
          this.x += this.vx; this.y += this.vy;
          if(this.x < -20 || this.x > w+20 || this.y < -20 || this.y > h+20) this.reset();
        }
        draw(){
          ctx.beginPath();
          ctx.fillStyle = 'rgba(0,255,255,'+this.alpha+')';
          ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
          ctx.fill();
        }
      }
      function init(){
        particles.length = 0;
        for(let i=0;i<Math.max(6,count);i++) particles.push(new P());
      }
      function resize(){ w = canvas.width = innerWidth; h = canvas.height = innerHeight; init(); }
      window.addEventListener('resize', resize);
      init();
      function loop(){
        ctx.clearRect(0,0,w,h);
        for(let p of particles){ p.step(); p.draw(); }
        requestAnimationFrame(loop);
      }
      loop();
    })();

    /* ===== keyboard accessible course focus outlines ===== */
    document.addEventListener('keydown', (e) => {
      if(e.key === 'Tab') document.documentElement.classList.add('show-focus-outline');
    });

    /* ===== Make hover-icon emoji correspond to the course (already set in DOM) ===== */
    // nothing to do — emojis are inline. This placeholder allows future dynamic icons.

    /* ===== Prevent any accidental interaction with hidden modals ===== */
    // All modals are inside .hidden-offscreen which has display:none so they'll be inert already.

    /* ===== Small accessibility improvement: ensure links open in new tab get a hint ===== */
    const tiktok = document.querySelector('a.tiktok');
    if(tiktok){
      tiktok.addEventListener('click', () => {
        // small visual pop on click
        tiktok.style.transform = 'scale(0.98)';
        setTimeout(()=> tiktok.style.transform = '', 160);
      });
    }
  </script>
</body>
</html>
