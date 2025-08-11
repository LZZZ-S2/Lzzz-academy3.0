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
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.5) 100%);
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

    nav {
      text-align: center;
      margin: 15px 0;
    }

    nav button {
      margin: 0 10px;
      padding: 10px 20px;
      background: #00ffff;
      border: none;
      color: #111;
      font-weight: 600;
      border-radius: 25px;
      cursor: pointer;
      transition: transform 0.2s ease, background-color 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0 4px 10px rgba(0, 255, 255, 0.3);
    }

    nav button:hover,
    nav button:focus {
      background-color: #00cccc;
      transform: translateY(-3px);
      box-shadow: 0 6px 15px rgba(0, 255, 255, 0.5);
      outline: none;
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
      border: 1px solid rgba(0, 255, 255, 0.1);
      transition: transform 0.2s ease, box-shadow 0.3s ease;
    }

    .course-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 6px 15px rgba(0, 255, 255, 0.3);
    }

    .course-card h3 {
      color: #00ffff;
      margin-bottom: 10px;
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

    /* Modal styles */
    .modal {
      display: none;
      position: fixed;
      z-index: 999;
      left: 0; top: 0;
      width: 100%; height: 100%;
      background: rgba(0, 0, 0, 0.85);
      justify-content: center;
      align-items: center;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
    }

    .modal.show {
      display: flex;
      opacity: 1;
      pointer-events: auto;
      animation: fadeIn 0.3s ease;
    }

    .modal-content {
      background: #1f1f1f;
      padding: 30px 30px 40px 30px;
      border-radius: 15px;
      max-width: 400px;
      width: 100%;
      color: white;
      position: relative;
      box-shadow: 0 0 25px rgba(0, 255, 255, 0.5);
      animation: popUp 0.3s ease;
    }

    .modal-content label {
      color: #00ffff;
    }

    .modal-content input[type="text"],
    .modal-content input[type="password"] {
      background: #111;
      border: 1px solid #333;
      border-radius: 5px;
      color: white;
    }

    .modal-content button {
      background: #00ffff;
      border-radius: 25px;
      transition: background-color 0.3s ease, transform 0.2s ease;
    }

    .modal-content button:hover {
      background-color: #00cccc;
      transform: translateY(-2px);
    }

    .close {
      color: #aaa;
    }

    .close:hover {
      color: #00ffff;
    }

    /* Animations */
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes popUp {
      from { transform: scale(0.95); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }

    /* Responsive */
    @media (max-width: 600px) {
      header h1 {
        font-size: 2rem;
      }
      nav button {
        margin: 5px 0;
        width: 80%;
      }
    }
  </style>
</head>
<body>
  <!-- Body content remains unchanged -->
</body>
</html>
