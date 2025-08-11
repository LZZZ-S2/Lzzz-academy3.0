<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>LZZZ Academy</title>
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;600;800&display=swap" rel="stylesheet" />
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Nunito', sans-serif;
      background: url('logo-bg.jpg') no-repeat center center fixed;
      background-size: cover;
      color: #f0f0f0;
      line-height: 1.6;
      background-color: rgba(0, 0, 0, 0.6);
      background-blend-mode: darken;
      overflow-x: hidden;
    }

    header {
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.5) 100%);
      padding: 40px 20px;
      text-align: center;
      box-shadow: 0 4px 20px rgba(0, 255, 255, 0.2);
    }

    header h1 {
      font-size: 3rem;
      color: #00ffff;
      font-weight: 800;
      text-shadow: 0 0 10px rgba(0, 255, 255, 0.7);
    }

    header p {
      font-size: 1.2rem;
      color: #eee;
      margin-top: 10px;
      font-weight: 300;
    }

    section {
      background: rgba(0, 0, 0, 0.7);
      padding: 60px 20px;
      max-width: 900px;
      margin: 30px auto;
      border-radius: 15px;
      box-shadow: 0 8px 20px rgba(0, 255, 255, 0.1);
      backdrop-filter: blur(4px);
      animation: fadeIn 0.8s ease forwards;
    }

    section h2 {
      color: #00ffff;
      margin-bottom: 20px;
      text-align: center;
      text-shadow: 0 0 6px rgba(0, 255, 255, 0.7);
    }

    .courses {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .course-card {
      background: linear-gradient(145deg, rgba(40, 40, 40, 0.95), rgba(20, 20, 20, 0.95));
      padding: 20px;
      border-radius: 12px;
      border: 2px solid transparent;
      animation: glowBorder 3s infinite alternate;
      transition: transform 0.2s ease, box-shadow 0.3s ease;
    }

    .course-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 6px 20px rgba(0, 255, 255, 0.4);
    }

    .course-card h3 {
      color: #00ffff;
      margin-bottom: 10px;
    }

    @keyframes glowBorder {
      0% { border-color: rgba(0, 255, 255, 0.2); }
      50% { border-color: rgba(0, 255, 255, 0.6); }
      100% { border-color: rgba(0, 255, 255, 1); }
    }

    .social {
      text-align: center;
      margin-top: 40px;
    }

    .social p {
      font-size: 1.2rem;
      margin: 10px 0;
    }

    footer {
      text-align: center;
      padding: 20px;
      color: #ccc;
      font-size: 0.9rem;
      margin-top: 20px;
    }

    /* Animations */
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* Responsive */
    @media (max-width: 600px) {
      header h1 {
        font-size: 2rem;
      }
    }
  </style>
</head>
<body>

  <header>
    <h1>LZZZ Academy</h1>
    <p>Unlock your potential.</p>
  </header>

  <section id="about">
    <h2>About Us</h2>
    <p>
      Welcome to LZZZ Academy — the ultimate training ground for becoming a next-level human.
      Whether you're trying to dominate Rainbow Six Siege, master Rizzology, win with your Centrelink paycheck, cure brain cancer, or farm aura like a god — we got you.
      We don’t just teach — we transform.
    </p>
  </section>

  <section id="courses">
    <h2>Our Courses</h2>
    <div class="courses">
      <div class="course-card">
        <h3>R6 Classes</h3>
        <p>We turn controller-throwing bronze bots into callout-speaking, pixel-peeking champions.
Strategy, aim, and mindgames - all in one course.</p>
      </div>
      <div class="course-card">
        <h3>Rizzology</h3>
        <p>Tired of being left on delivered? We teach the ancient, forbidden art of Rizz - confidence, timing, and the perfect message. Become HIM.</p>
      </div>
      <div class="course-card">
        <h3>Professional Gambling</h3>
        <p>Stop losing your entire Centrelink paycheck on multis.
We'll show you how to actually bet smart, read odds, and gamble with style - responsibly (kinda).</p>
      </div>
    </div>
  </section>

  <section id="social">
    <h2>Connect With Us</h2>
    <div class="social">
      <p>🎮 PSN: <strong>LZZZ-S2</strong></p>
      <p>📱 TikTok: <strong>@LZZZ-S2</strong></p>
    </div>
  </section>

  <footer>
    &copy; 2025 LZZZ Academy. All rights reserved.
  </footer>

</body>
</html>
