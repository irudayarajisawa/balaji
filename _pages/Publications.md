---
title: null
layout: page
permalink: "/publications"
---

<div class="row mb-5 mt-5">
  <div class="col-12 text-center">
    <h2 class="fw-bold text-uppercase">Publications</h2>
    <hr style="width:60px; height:3px; background:#c62828; margin:12px auto 0; border:none;">
  </div>
</div>

<!-- DataTables CSS -->
<link rel="stylesheet" href="https://cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css">

<!-- Search -->
<div class="row mb-4">
  <div class="col-md-6 ms-auto">
    <input type="text" id="commonSearch" class="form-control" placeholder="Search publications...">
  </div>
</div>

<!-- ================= INTERNATIONAL ================= -->
<h2>International Journals</h2>
<div class="table-responsive">
<table id="intlTable" class="table table-bordered publication-table">
<thead>
<tr>
<th>S.No</th><th>Authors</th><th>Title</th><th>Journal</th>
</tr>
</thead>
<tbody>
{% for item in site.data.publications.international %}
<tr>
<td>{{ item.sno }}</td>
<td>{{ item.authors | escape }}</td>
<td>{{ item.title | escape }}</td>
<td>{{ item.journal | escape }}</td>
</tr>
{% endfor %}
</tbody>
</table>
</div>

<hr>

<!-- ================= NATIONAL ================= -->
<h2>National Journals</h2>
<div class="table-responsive">
<table id="natTable" class="table table-bordered publication-table">
<thead>
<tr>
<th>S.No</th><th>Authors</th><th>Title</th><th>Journal</th>
</tr>
</thead>
<tbody>
{% for item in site.data.publications.national %}
<tr>
<td>{{ item.sno }}</td>
<td>{{ item.authors | escape }}</td>
<td>{{ item.title | escape }}</td>
<td>{{ item.journal | escape }}</td>
</tr>
{% endfor %}
</tbody>
</table>
</div>

<hr>

<!-- ================= CONFERENCE ================= -->
<h2>Conference Publications</h2>
<div class="table-responsive">
<table id="confTable" class="table table-bordered publication-table">
<thead>
<tr>
<th>S.No</th><th>Authors</th><th>Title</th><th>Conference</th>
</tr>
</thead>
<tbody>
{% for item in site.data.publications.conference %}
<tr>
<td>{{ item.sno }}</td>
<td>{{ item.authors | strip | escape }}</td>
<td>{{ item.title | strip | escape }}</td>
<td>{{ item.conference | strip | escape }}</td>
</tr>
{% endfor %}
</tbody>
</table>
</div>

<!-- ================= STYLES ================= -->
<style>
.publication-table {
  font-size: 15px;
}

.publication-table th {
  background: #f5f5f5;
}

#confTable td {
  white-space: normal !important;
  word-break: break-word;
}

/* Pagination */
.dataTables_paginate {
  text-align: center !important;
  margin-top: 20px !important;
}

.dataTables_paginate .paginate_button.current {
  background: #5b5b5b !important;
  color: #fff !important;
}
</style>

<!-- ================= DATATABLES JS ================= -->
<script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>

<script>
document.addEventListener("DOMContentLoaded", function () {

  function safeInit(id) {
    const table = document.querySelector(id);
    if (!table) return null;

    // Prevent reinitialisation
    if ($.fn.DataTable.isDataTable(id)) {
      return $(id).DataTable();
    }

    return $(id).DataTable({
      paging: true,
      pageLength: 10,
      lengthMenu: [5, 10, 25, 50],
      ordering: false,
      autoWidth: false
    });
  }

  // 🔥 CRITICAL: initialize AFTER full render cycle
  setTimeout(function () {
    const intl = safeInit('#intlTable');
    const nat  = safeInit('#natTable');
    const conf = safeInit('#confTable');

    // Search
    document.getElementById('commonSearch').addEventListener('keyup', function () {
      let val = this.value;
      if (intl) intl.search(val).draw();
      if (nat)  nat.search(val).draw();
      if (conf) conf.search(val).draw();
    });

  }, 500); // 🔥 THIS FIXES YOUR 3rd TABLE

});
</script>
