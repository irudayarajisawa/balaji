(function ($) {
  $(function () {

    if (!$.fn.DataTable) {
      console.error("❌ DataTables not loaded");
      return;
    }

    let intlTable, natTable;

    // International Journals table
    if ($('#intlTable').length) {
      intlTable = $('#intlTable').DataTable({
        pageLength: 10,
        lengthChange: false,
        searching: true,
        ordering: true,
        info: true,
        pagingType: "simple_numbers",
        dom: 'rt<"bottom"ip><"clear">' // ❌ removes default search
      });
    }

    // National Journals table
    if ($('#natTable').length) {
      natTable = $('#natTable').DataTable({
        pageLength: 10,
        lengthChange: false,
        searching: true,
        ordering: true,
        info: true,
        pagingType: "simple_numbers",
        dom: 'rt<"bottom"ip><"clear">' // ❌ removes default search
      });
    }

    // ✅ ONE COMMON SEARCH FOR BOTH TABLES
    $('#commonSearch').on('keyup', function () {
      const value = this.value;

      if (intlTable) intlTable.search(value).draw();
      if (natTable) natTable.search(value).draw();
    });

  });
})(jQuery);

