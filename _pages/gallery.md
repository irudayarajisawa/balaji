---
layout: page
title:
permalink: /gallery
---

<!-- PAGE TITLE -->
<div class="row mb-5 mt-5">
  <div class="col-12 text-center">
    <h2 class="fw-bold text-uppercase">Gallery</h2>
    <hr style="width:60px; height:3px; background:#c62828; margin:12px auto 0; border:none;">
  </div>
</div>

<!-- SINGLE IMAGE VIEW (from footer click) -->
<div class="container py-5">
  <div id="singleGalleryImage" class="text-center"></div>
</div>

<!-- FULL GALLERY GRID -->
<div class="container" id="fullGallery">
  <div class="gallery-grid">
    {% for image in site.data.gallery.images %}
      <img src="{{ image.src }}" alt="{{ image.alt }}">
    {% endfor %}
  </div>
</div>

<!-- LOGIC -->
<script>
  const params = new URLSearchParams(window.location.search);
  const imgSrc = params.get("img");

  const singleImage = document.getElementById("singleGalleryImage");
  const fullGallery = document.getElementById("fullGallery");

  if (imgSrc) {
    singleImage.innerHTML = `
      <img src="${imgSrc}" class="img-fluid rounded shadow" alt="Gallery Image">
    `;
    fullGallery.style.display = "none";
  }
</script>

<!-- STYLES -->
<style>
/* ===============================
   GALLERY GRID
================================ */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.gallery-grid img {
  width: 100%;
  height: 450px;
  object-fit: cover;
  border-radius: 6px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.08);
  transition: transform 0.3s ease;
}

.gallery-grid img:hover {
  transform: scale(1.03);
}

/* ===============================
   SINGLE IMAGE VIEW
================================ */
#singleGalleryImage img {
  max-width: 90%;
  margin: auto;
}
</style>

