---
layout: page
title:
permalink: /publications
---

<!-- =========================
     PAGE TITLE
========================= -->

<div class="row mb-5 mt-5">
  <div class="col-12 text-center">
    <h2 class="fw-bold text-uppercase">Publications</h2>
    <hr style="width:60px; height:3px; background:#c62828; margin:12px auto 0; border:none;">
  </div>
</div>

<!-- =========================
     DATATABLES CSS
========================= -->
<link rel="stylesheet" href="https://cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css">

<!-- =========================
     COMMON SEARCH BAR
========================= -->
<div class="row mb-4">
  <div class="col-md-6 ms-auto">
    <input
      type="text"
      id="commonSearch"
      class="form-control"
      placeholder="Search publications..."
    >
  </div>
</div>


<!-- =========================
     INTERNATIONAL JOURNALS
========================= -->
<h2 class="mb-3">International Journals</h2>

<div class="table-responsive">
<table id="intlTable" class="table table-bordered publication-table">
  <thead>
    <tr>
      <th style="width:60px;">S.No</th>
      <th>Name of the Authors</th>
      <th>Title of the Paper</th>
      <th>Name of the Journal</th>
    </tr>
  </thead>
  <tbody>
    {% for item in site.data.publications.international %}
    <tr>
      <td>{{ item.sno }}</td>
      <td>{{ item.authors }}</td>
      <td>{{ item.title }}</td>
      <td>{{ item.journal }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>
</div>

<hr class="my-5">

<!-- =========================
     NATIONAL JOURNALS
========================= -->
<h2 class="mb-3">National Journals</h2>

<div class="table-responsive">
<table id="natTable" class="table table-bordered publication-table">
  <thead>
    <tr>
      <th style="width:60px;">S.No</th>
      <th>Name of the Authors</th>
      <th>Title of the Paper</th>
      <th>Name of the Journal</th>
    </tr>
  </thead>
  <tbody>
    {% for item in site.data.publications.national %}
    <tr>
      <td>{{ item.sno }}</td>
      <td>{{ item.authors }}</td>
      <td>{{ item.title }}</td>
      <td>{{ item.journal }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>
</div>

<!-- =========================
     CUSTOM TABLE STYLES
========================= -->
<style>
.publication-table {
  width: 100%;
  font-size: 15px;
}

.publication-table th {
  background-color: #f5f5f5;
  font-weight: 600;
}

.publication-table th,
.publication-table td {
  padding: 10px 12px;
  vertical-align: top;
}

.publication-table tbody tr:hover {
  background-color: #fafafa;
}

/* Search box right aligned */
.dataTables_filter {
  float: right;
  margin-bottom: 12px;
}

.dataTables_filter input {
  margin-left: 6px;
  padding: 4px 8px;
  font-size: 14px;
}

/* Pagination spacing */
.dataTables_paginate {
  margin-top: 15px;
}
</style>

