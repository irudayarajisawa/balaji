---
layout: page
permalink: "projects"
---

<h2 class="mb-4">a. Projects Undertaken</h2>

<div class="table-responsive">
<table id="projectsTable" class="table table-bordered table-striped">
<thead class="table-dark">
<tr>
  <th>Sl No.</th>
  <th>Project Title</th>
  <th>Duration</th>
  <th>Organisation</th>
</tr>
</thead>
<tbody>

{% for project in site.data.projects.projects %}
<tr>
  <td>{{ project.sno }}</td>
  <td>{{ project.title }}</td>
  <td>{{ project.duration }}</td>
  <td>{{ project.organisation }}</td>
</tr>
{% endfor %}

</tbody>
</table>
</div>

<!-- Pagination -->
<div class="d-flex justify-content-center mt-3">
  <div id="pagination"></div>
</div>

<hr>

<h2 class="mt-5 mb-3">Leadership Roles</h2>

<ul class="list-group">
{% for role in site.data.projects.leadership %}
  <li class="list-group-item">{{ role }}</li>
{% endfor %}
</ul>

<!-- =========================
     PAGINATION SCRIPT
========================= -->
<script>
document.addEventListener("DOMContentLoaded", function () {

  const rowsPerPage = 5; // 🔥 change to 10 if needed
  const table = document.getElementById("projectsTable");
  const tbody = table.querySelector("tbody");
  const rows = tbody.querySelectorAll("tr");
  const totalRows = rows.length;
  const pageCount = Math.ceil(totalRows / rowsPerPage);
  const pagination = document.getElementById("pagination");

  let currentPage = 1;

  function displayPage(page) {
    currentPage = page;

    rows.forEach((row, index) => {
      row.style.display =
        index >= (page - 1) * rowsPerPage &&
        index < page * rowsPerPage
          ? ""
          : "none";
    });

    renderPagination();
  }

  function renderPagination() {
    pagination.innerHTML = "";

    // Previous Button
    const prevBtn = document.createElement("button");
    prevBtn.innerText = "« Prev";
    prevBtn.className = "btn btn-sm btn-outline-primary me-2";
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => displayPage(currentPage - 1);
    pagination.appendChild(prevBtn);

    // Page Numbers
    for (let i = 1; i <= pageCount; i++) {
      const btn = document.createElement("button");
      btn.innerText = i;
      btn.className =
        "btn btn-sm " +
        (i === currentPage ? "btn-primary" : "btn-outline-primary");
      btn.style.margin = "2px";
      btn.onclick = () => displayPage(i);
      pagination.appendChild(btn);
    }

    // Next Button
    const nextBtn = document.createElement("button");
    nextBtn.innerText = "Next »";
    nextBtn.className = "btn btn-sm btn-outline-primary ms-2";
    nextBtn.disabled = currentPage === pageCount;
    nextBtn.onclick = () => displayPage(currentPage + 1);
    pagination.appendChild(nextBtn);

    // Info Text
    const info = document.createElement("div");
    info.className = "mt-2 text-muted small text-center w-100";
    const start = (currentPage - 1) * rowsPerPage + 1;
    const end = Math.min(currentPage * rowsPerPage, totalRows);
    info.innerText = `Showing ${start} - ${end} of ${totalRows} projects`;
    pagination.appendChild(info);
  }

  displayPage(1);
});
</script>
