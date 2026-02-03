---
layout: page
title:
permalink: /students
---

<!-- =========================
     PAGE TITLE
========================= -->
<div class="row mb-5 mt-5">
  <div class="col-12 text-center">
    <h2 class="fw-bold text-uppercase">Students</h2>
    <hr style="width:60px; height:3px; background:#c62828; margin:12px auto 0; border:none;">
  </div>
</div>

<!-- =========================
     GLOBAL SEARCH
========================= -->
<div class="row mb-5">
  <div class="col-md-4 ms-auto">
    <input
      type="text"
      id="globalSearch"
      class="form-control"
      placeholder="Search students..."
    >
  </div>
</div>

<!-- =========================
     ONGOING STUDENTS
========================= -->
<h3 class="mb-3">Ongoing PhD Students</h3>

<table id="ongoingPhdTable" class="table table-bordered publication-table">
  <thead>
    <tr>
      <th>S.No</th>
      <th>Name</th>
      <th>Thesis Title</th>
      <th>Designation</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    {% for s in site.data.students.ongoing.phd %}
    <tr>
      <td>{{ forloop.index }}</td>
      <td>{{ s.name }}</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    {% endfor %}
  </tbody>
</table>

<h3 class="mb-3 mt-5">Ongoing MS Students</h3>

<table id="ongoingMsTable" class="table table-bordered publication-table">
  <thead>
    <tr>
      <th>S.No</th>
      <th>Name</th>
      <th>Thesis Title</th>
      <th>Designation</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    {% for s in site.data.students.ongoing.ms %}
    <tr>
      <td>{{ forloop.index }}</td>
      <td>{{ s.name }}</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    {% endfor %}
  </tbody>

  {% if site.data.students.ongoing.ms.size == 0 %}
  <tbody>
    <tr>
      
    </tr>
  </tbody>
  {% endif %}
</table>

<!-- =========================
     PhD COMPLETED
========================= -->
<h3 class="mb-3">PhD Completed</h3>

<table id="phdTable" class="table table-bordered publication-table">
  <thead>
    <tr>
      <th>S.No</th>
      <th>Name</th>
      <th>Thesis Title</th>
      <th>Designation</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    {% for s in site.data.students.completed.phd %}
    <tr>
      <td>{{ s.sno }}</td>
      <td>{{ s.name }}</td>
      <td>{{ s.title }}</td>
      <td>{{ s.designation }}</td>
      <td>{{ s.year }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>

<hr class="my-5">

<!-- =========================
     MS COMPLETED
========================= -->
<h3 class="mb-3">MS Completed</h3>

<table id="msTable" class="table table-bordered publication-table">
  <thead>
    <tr>
      <th>S.No</th>
      <th>Name</th>
      <th>Thesis Title</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    {% for s in site.data.students.completed.ms %}
    <tr>
      <td>{{ s.sno }}</td>
      <td>{{ s.name }}</td>
      <td>{{ s.title }}</td>
      <td>{{ s.year }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>

<hr class="my-5">

<!-- =========================
     MTECH COMPLETED
========================= -->
<h3 class="mb-3">M.Tech Completed</h3>

<table id="mtechTable" class="table table-bordered publication-table">
  <thead>
    <tr>
      <th>S.No</th>
      <th>Name</th>
      <th>Thesis Title</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    {% for s in site.data.students.completed.mtech %}
    <tr>
      <td>{{ s.sno }}</td>
      <td>{{ s.name }}</td>
      <td>{{ s.title }}</td>
      <td>{{ s.year }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>

<!-- =========================
     DATATABLE FIX
========================= -->
<style>
.dataTables_wrapper {
  width: 100%;
  overflow: visible !important;
}

.dataTables_paginate {
  display: flex !important;
  justify-content: flex-end;
  margin-top: 15px;
}

.dataTables_info {
  margin-top: 10px;
}
</style>



