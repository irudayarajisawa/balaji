---
layout: page
title: 
permalink: /invitedlectures
---

<!-- =========================
     PAGE TITLE
========================= -->

<div class="row mb-5 mt-5">
  <div class="col-12 text-center">
    <h2 class="fw-bold text-uppercase">Invited Lectures</h2>
    <hr style="width:60px; height:3px; background:#c62828; margin:12px auto 0; border:none;">
  </div>
</div>


<div class="container my-5">


  <!-- SEARCH BAR -->
  <input
    type="text"
    id="lectureSearch"
    class="form-control mb-4"
    placeholder="Search by title, venue, or date...">

  <!-- TABLE -->
  <div class="table-responsive">
    <table class="table table-bordered table-hover" id="lectureTable">
      <thead class="table-light">
        <tr>
          <th style="width:5%">S.No</th>
          <th style="width:45%">Title</th>
          <th style="width:30%">Venue</th>
          <th style="width:20%">Date</th>
        </tr>
      </thead>
      <tbody>
        {% for lecture in site.data.invitedlectures %}
        <tr>
          <td>{{ lecture.id }}</td>
          <td>{{ lecture.title }}</td>
          <td>{{ lecture.venue }}</td>
          <td>{{ lecture.date }}</td>
        </tr>
        {% endfor %}
      </tbody>
    </table>
  </div>
</div>

<script>
document.getElementById("lectureSearch").addEventListener("keyup", function () {
  const value = this.value.toLowerCase();
  const rows = document.querySelectorAll("#lectureTable tbody tr");

  rows.forEach(row => {
    const text = row.innerText.toLowerCase();
    row.style.display = text.includes(value) ? "" : "none";
  });
});
</script>

