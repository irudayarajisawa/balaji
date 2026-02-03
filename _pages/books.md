---
layout: page
title:
permalink: /books
---

<!-- PAGE TITLE -->
<div class="row mb-5 mt-5">
  <div class="col-12 text-center">
    <h2 class="fw-bold text-uppercase">Books</h2>
    <hr style="width:60px; height:3px; background:#c62828; margin:12px auto 0; border:none;">
  </div>
</div>

<!-- TABS -->
<div class="text-center my-4">
  <div class="btn-group book-tabs">
    <button class="btn active" onclick="filterBooks('all', this)">All</button>
    <button class="btn" onclick="filterBooks('technical', this)">Technical</button>
    <button class="btn" onclick="filterBooks('nontechnical', this)">Non-Technical</button>
    <button class="btn" onclick="filterBooks('tamil', this)">Tamil</button>
  </div>
</div>

<!-- BOOK GRID -->
<div class="container">
  <div class="row g-4 justify-content-center" id="booksGrid">

    <!-- ================= TECHNICAL ================= -->
    <div class="col-lg-3 col-md-4 col-sm-6 book-item technical">
      <div class="book-card">
        <img src="assets/img/books/all1.jpg" alt="">
        <div class="book-overlay">Essentials of Thermal System Design and Optimization</div>
      </div>
    </div>

    <div class="col-lg-3 col-md-4 col-sm-6 book-item technical">
      <div class="book-card">
        <img src="assets/img/books/all2.jpg" alt="">
        <div class="book-overlay">Essentials of Radiation Heat Transfer</div>
      </div>
    </div>

    <div class="col-lg-3 col-md-4 col-sm-6 book-item technical">
      <div class="book-card">
        <img src="assets/img/books/all3.png" alt="">
        <div class="book-overlay">Thermal System Design and Optimization</div>
      </div>
    </div>

    <div class="col-lg-3 col-md-4 col-sm-6 book-item technical">
      <div class="book-card">
        <img src="assets/img/books/all4.jpg" alt="">
        <div class="book-overlay">Thermal Management of Electronics – Volume I</div>
      </div>
    </div>

    <div class="col-lg-3 col-md-4 col-sm-6 book-item technical">
      <div class="book-card">
        <img src="assets/img/books/all5.jpg" alt="">
        <div class="book-overlay">Thermal Management of Electronics – Volume II</div>
      </div>
    </div>

    <div class="col-lg-3 col-md-4 col-sm-6 book-item technical">
      <div class="book-card">
        <img src="assets/img/books/all6.jpg" alt="">
        <div class="book-overlay">Heat Transfer Engineering – Fundamentals and Techniques</div>
      </div>
    </div>

    <div class="col-lg-3 col-md-4 col-sm-6 book-item technical">
      <div class="book-card">
        <img src="assets/img/books/all7.jpeg" alt="">
        <div class="book-overlay">Essentials of Radiation Heat Transfer</div>
      </div>
    </div>

    <div class="col-lg-3 col-md-4 col-sm-6 book-item technical">
      <div class="book-card">
        <img src="assets/img/books/all8.jpg" alt="">
        <div class="book-overlay">Phase Change Material-Based Heat Sinks</div>
      </div>
    </div>

    <div class="col-lg-3 col-md-4 col-sm-6 book-item technical">
      <div class="book-card">
        <img src="assets/img/books/all9.jpg" alt="">
        <div class="book-overlay">Radiative Heat Transfer in Participating Media</div>
      </div>
    </div>

    <div class="col-lg-3 col-md-4 col-sm-6 book-item technical">
      <div class="book-card">
        <img src="assets/img/books/all10.jpg" alt="">
        <div class="book-overlay">Fine-Tuning Extreme Rainfall Predictions</div>
      </div>
    </div>

    <!-- ================= NON-TECHNICAL ================= -->
    <div class="col-lg-3 col-md-4 col-sm-6 book-item nontechnical">
      <div class="book-card">
        <img src="assets/img/books/nt1.jpg" alt="">
        <div class="book-overlay">The Joy of Teaching</div>
      </div>
    </div>

    <div class="col-lg-3 col-md-4 col-sm-6 book-item nontechnical">
      <div class="book-card">
        <img src="assets/img/books/nt2.jpg" alt="">
        <div class="book-overlay">The Joy of Research</div>
      </div>
    </div>

    <div class="col-lg-3 col-md-4 col-sm-6 book-item nontechnical">
      <div class="book-card">
        <img src="assets/img/books/nt3.jpg" alt="">
        <div class="book-overlay">The Joy of Teaching – 2nd Edition</div>
      </div>
    </div>

    <!-- ================= TAMIL ================= -->
    <div class="col-lg-3 col-md-4 col-sm-6 book-item tamil">
      <div class="book-card">
        <img src="assets/img/books/t1.jpg" alt="">
        <div class="book-overlay">கற்பித்தல் ஆனந்தமே</div>
      </div>
    </div>

    <div class="col-lg-3 col-md-4 col-sm-6 book-item tamil">
      <div class="book-card">
        <img src="assets/img/books/t2.jpg" alt="">
        <div class="book-overlay">ஆராய்ச்சி என்றும் ஆனந்தம்</div>
      </div>
    </div>

  </div>
</div>

<!-- SCRIPT -->
<script>
function filterBooks(category, btn) {
  const items = document.querySelectorAll('.book-item');
  const buttons = document.querySelectorAll('.book-tabs .btn');

  buttons.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  items.forEach(item => {
    item.style.display =
      category === 'all' || item.classList.contains(category)
        ? 'block'
        : 'none';
  });
}
</script>

<!-- STYLES -->
<style>
/* ================= BOOK TABS ================= */
.book-tabs {
  display: inline-flex;
  background: #eee;
  border-radius: 6px;
  padding: 4px;
}

.book-tabs .btn {
  border: none;
  background: transparent;
  padding: 8px 18px;
  font-weight: 600;
  color: #555;
  cursor: pointer;
}

.book-tabs .btn.active {
  background: #e53935;
  color: #fff;
  border-radius: 4px;
}

/* ================= BOOK CARD ================= */
.book-card {
  position: relative;
  width: 240px;
  height: 260px;
  margin: 0 auto;
  background: #fff;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
  transition: transform 0.25s ease;
}

.book-card:hover {
  transform: translateY(-4px);
}

/* ================= BOOK IMAGE ================= */
.book-card img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 10px;
}

/* ================= BOTTOM OVERLAY ================= */
.book-overlay {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(0,0,0,0.65);
  color: #fff;
  padding: 12px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  line-height: 1.4;
}

.book-card:hover .book-overlay {
  background: rgba(0,0,0,0.75);
}
</style>

