$(document).ready(function () {

  const tableOptions = {
    paging: true,
    searching: true,
    info: true,
    lengthChange: false,
    pageLength: 10,
    dom: 'rtip' // 🔥 removes individual search boxes
  };

  const ongoingPhdTable = $('#ongoingPhdTable').DataTable(tableOptions);
  const ongoingMsTable  = $('#ongoingMsTable').DataTable(tableOptions);
  const phdTable        = $('#phdTable').DataTable(tableOptions);
  const msTable         = $('#msTable').DataTable(tableOptions);
  const mtechTable      = $('#mtechTable').DataTable(tableOptions);

  // =========================
  // ONE GLOBAL SEARCH
  // =========================
  $('#globalSearch').on('keyup', function () {
    const value = this.value;

    ongoingPhdTable.search(value).draw();
    ongoingMsTable.search(value).draw();
    phdTable.search(value).draw();
    msTable.search(value).draw();
    mtechTable.search(value).draw();
  });

});

