---
title: null
layout: page
permalink: "invitedlectures"
---

<!-- ================= TITLE ================= -->
<div class="row mb-5 mt-5">
  <div class="col-12 text-center">
    <h2 class="fw-bold text-uppercase">Invited & Keynote Lectures</h2>
    <hr style="width:60px; height:3px; background:#c62828; margin:12px auto 0; border:none;">
  </div>
</div>

<div class="container my-5">

  <!-- ================= SEARCH + FILTER ================= -->
  <div class="row mb-4">
    <div class="col-md-6 mb-2">
      <input type="text" id="globalSearch"
        class="form-control"
        placeholder="Search lectures (title, venue, date)...">
    </div>

    <div class="col-md-3 mb-2">
      <select id="regionFilter" class="form-select">
        <option value="all">All</option>
        <option value="abroad">Abroad</option>
        <option value="india">India</option>
      </select>
    </div>
  </div>


  <!-- ================= INVITED TABLE ================= -->
  <h4 class="fw-bold mb-3">Invited Lectures</h4>

  <div class="table-responsive">
    <table class="table table-bordered table-hover" id="invitedTable">
      <thead class="table-light">
        <tr>
          <th style="width:5%">S.No</th>
          <th style="width:45%">Title</th>
          <th style="width:30%">Venue</th>
          <th style="width:20%">Date</th>
        </tr>
      </thead>
      <tbody>

      <!-- Abroad -->
      <tr class="table-secondary">
        <td colspan="4"><strong>Abroad</strong></td>
      </tr>
      {% for lecture in site.data.invitedlectures.invited.abroad %}
      <tr class="invited-row abroad">
        <td>{{ lecture.id }}</td>
        <td>{{ lecture.title }}</td>
        <td>{{ lecture.venue }}</td>
        <td>{{ lecture.date }}</td>
      </tr>
      {% endfor %}

      <!-- India -->
      <tr class="table-secondary">
        <td colspan="4"><strong>India</strong></td>
      </tr>
      {% for lecture in site.data.invitedlectures.invited.india %}
      <tr class="invited-row india">
        <td>{{ lecture.id }}</td>
        <td>{{ lecture.title }}</td>
        <td>{{ lecture.venue }}</td>
        <td>{{ lecture.date }}</td>
      </tr>
      {% endfor %}

      </tbody>
    </table>
  </div>

  <div id="invitedPagination" class="text-center mt-3"></div>


  <!-- ================= KEYNOTE TABLE ================= -->
  <h4 class="fw-bold mt-5 mb-3">Keynote Lectures</h4>

  <div class="table-responsive">
    <table class="table table-bordered table-hover" id="keynoteTable">
      <thead class="table-light">
        <tr>
          <th style="width:5%">S.No</th>
          <th style="width:45%">Title</th>
          <th style="width:30%">Venue</th>
          <th style="width:20%">Date</th>
        </tr>
      </thead>
      <tbody>

      <!-- Abroad -->
      <tr class="table-secondary">
        <td colspan="4"><strong>Abroad</strong></td>
      </tr>
      {% for lecture in site.data.invitedlectures.keynote.abroad %}
      <tr class="keynote-row abroad">
        <td>{{ lecture.id }}</td>
        <td>{{ lecture.title }}</td>
        <td>{{ lecture.venue }}</td>
        <td>{{ lecture.date }}</td>
      </tr>
      {% endfor %}

      <!-- India -->
      <tr class="table-secondary">
        <td colspan="4"><strong>India</strong></td>
      </tr>
      {% for lecture in site.data.invitedlectures.keynote.india %}
      <tr class="keynote-row india">
        <td>{{ lecture.id }}</td>
        <td>{{ lecture.title }}</td>
        <td>{{ lecture.venue }}</td>
        <td>{{ lecture.date }}</td>
      </tr>
      {% endfor %}

      </tbody>
    </table>
  </div>

  <div id="keynotePagination" class="text-center mt-3"></div>

</div>


<!-- ================= SCRIPT ================= -->
<script>

let invitedRows, keynoteRows;
let invitedShowPage, keynoteShowPage;

function setupPagination(rows, paginationId, rowsPerPage = 10) {
  const pagination = document.getElementById(paginationId);
  let currentPage = 1;

  function showPage(page) {
    currentPage = page;

    let visibleRows = rows.filter(r => r.dataset.visible === "true");

    rows.forEach(r => r.style.display = "none");

    visibleRows.forEach((row, index) => {
      if (
        index >= (page - 1) * rowsPerPage &&
        index < page * rowsPerPage
      ) {
        row.style.display = "";
      }
    });

    renderPagination(visibleRows.length);
  }

  function renderPagination(totalVisible) {
    pagination.innerHTML = "";
    let totalPages = Math.ceil(totalVisible / rowsPerPage);

    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement("button");
      btn.innerText = i;
      btn.className = "btn btn-sm mx-1 " + (i === currentPage ? "btn-dark" : "btn-outline-dark");
      btn.onclick = () => showPage(i);
      pagination.appendChild(btn);
    }
  }

  return showPage;
}

function applyFilters() {
  const search = document.getElementById("globalSearch").value.toLowerCase();
  const filter = document.getElementById("regionFilter").value;

  [...invitedRows, ...keynoteRows].forEach(row => {
    const text = row.innerText.toLowerCase();

    const matchesSearch = text.includes(search);
    const matchesFilter =
      filter === "all" || row.classList.contains(filter);

    row.dataset.visible = (matchesSearch && matchesFilter) ? "true" : "false";
  });

  invitedShowPage(1);
  keynoteShowPage(1);
}

document.addEventListener("DOMContentLoaded", function () {

  invitedRows = Array.from(document.querySelectorAll(".invited-row"));
  keynoteRows = Array.from(document.querySelectorAll(".keynote-row"));

  [...invitedRows, ...keynoteRows].forEach(row => {
    row.dataset.visible = "true";
  });

  invitedShowPage = setupPagination(invitedRows, "invitedPagination", 10);
  keynoteShowPage = setupPagination(keynoteRows, "keynotePagination", 10);

  document.getElementById("globalSearch").addEventListener("keyup", applyFilters);
  document.getElementById("regionFilter").addEventListener("change", applyFilters);
});

</script>
