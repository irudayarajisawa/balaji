---
layout: page
title:
permalink: /aboutme
---

<div class="row mb-5 mt-5">
  <div class="col-12 text-center">
    <h2 class="fw-bold text-uppercase">About Me</h2>
    <hr style="width:60px; height:3px; background:#c62828; margin:12px auto 0; border:none;">
  </div>
</div>

<div class="container">
  <div class="row g-4 align-items-start">

    <!-- LEFT PROFILE CARD -->
    <div class="col-lg-4">
      <div class="profile-card-dark">

        <div class="profile-avatar">
          <img src="assets/img/balaji.jpg" alt="Prof. C. Balaji">
        </div>

        <h3 class="mt-3">Prof. C. Balaji</h3>
        <p class="designation">
          Professor & Head<br>
          Department of Mechanical Engineering<br>
          IIT Madras
        </p>

        <div class="stats">
          <div>
            <strong>225+</strong>
            <span>Publications</span>
          </div>
          <div>
            <strong>30+</strong>
            <span>Years</span>
          </div>
          <div>
            <strong>20+</strong>
            <span>Awards</span>
          </div>
        </div>

        <a href="files/onepage.pdf" target="_blank" class="btn btn-danger w-100 mt-3">
          <i class="bi bi-download"></i> Download CV
        </a>

        <a href="contact.html" class="btn btn-outline-light w-100 mt-2">
          <i class="bi bi-envelope"></i> Contact
        </a>

      </div>
    </div>

    <!-- RIGHT CONTENT -->
    <div class="col-lg-8">

      <h2 class="main-title">
        Advancing Thermal Sciences & Research
      </h2>

     <p class="lead-text justify-text">
  Prof. C. Balaji is the T.T. Narendran Institute Chair Professor and
  Head of the Department of Mechanical Engineering at IIT Madras.
  He has over three decades of experience in teaching, research,
  and academic leadership.</p>

<p class="body-text justify-text">
  His areas of specialization include experimental and numerical
  heat transfer, radiative heat transfer, electronic cooling,
  satellite meteorology, numerical weather prediction, climate
  modeling, and inverse heat transfer problems.
</p>


      <!-- INFO GRID -->
      <div class="row g-3 mt-4">

        <div class="col-md-6">
          <div class="info-box">
            <i class="bi bi-briefcase"></i>
            <div>
              <span>Experience</span>
              <strong>30+ Years</strong>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="info-box">
            <i class="bi bi-mortarboard"></i>
            <div>
              <span>Highest Degree</span>
              <strong>Ph.D., IIT Madras</strong>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="info-box">
            <i class="bi bi-geo-alt"></i>
            <div>
              <span>Institution</span>
              <strong>IIT Madras</strong>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="info-box">
            <i class="bi bi-envelope"></i>
            <div>
              <span>Email</span>
              <strong>balaji@iitm.ac.in</strong>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="info-box">
            <i class="bi bi-phone"></i>
            <div>
              <span>Phone</span>
              <strong>044-2257-4689</strong>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="info-box">
            <i class="bi bi-calendar-check"></i>
            <div>
              <span>Availability</span>
              <strong>  Sponsored And Consultancy in Thermal Science , Atmospheric Science, Renewable Energy for Climate Change</strong>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</div>

<style>
/* ==========================================
   TEXT UTILITIES
========================================== */

.justify-text {
  text-align: justify;
  text-justify: inter-word;
  line-height: 1.7;
}


/* ==========================================
   PROFILE CARD
========================================== */

.profile-card-dark {
  background: #ffffff;
  border-radius: 16px;
  padding: 30px;
  text-align: center;
  color: #111410;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
}

.profile-avatar {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto;
}

.profile-avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 4px solid #ff4d4f;
  object-fit: cover;
}

.designation {
  font-size: 0.9rem;
  color: #111410;
  margin-top: 8px;
}


/* ==========================================
   STATS
========================================== */

.stats {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}

.stats strong {
  font-size: 1.1rem;
  color: #111410;
}

.stats span {
  font-size: 0.8rem;
  color: #111410;
}


/* ==========================================
   BUTTONS (FIXED VISIBILITY)
========================================== */

/* Download CV – unchanged */
.profile-card-dark .btn-danger {
  background-color: #dc3545;
  border-color: #dc3545;
}

/* Contact button – FIX */
.profile-card-dark .btn-outline-light {
  color: #111410;                /* visible text */
  border-color: #111410;         /* visible border */
  background-color: transparent;
}

.profile-card-dark .btn-outline-light:hover {
  background-color: #111410;
  color: #ffffff;
}


/* ==========================================
   RIGHT CONTENT
========================================== */

.main-title {
  font-size: 2.2rem;
  margin: 15px 0;
  color: #111410;
}

.lead-text {
  color: #111410;
  font-size: 1.05rem;
}

.body-text {
  color: #111410;
}


/* ==========================================
   INFO BOXES
========================================== */

.info-box {
  background: #dc3545;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 14px;
  color: #ffffff;
}

.info-box i {
  font-size: 1.5rem;
  color: #ffffff;
}

.info-box span {
  font-size: 0.8rem;
  color: #f8f9fa;
}

.info-box strong {
  font-size: 0.95rem;
  color: #ffffff;
}


/* ==========================================
   OPTIONAL: SMOOTH HOVER EFFECT
========================================== */

.info-box {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.info-box:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

</style>
