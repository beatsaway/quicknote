document.addEventListener("DOMContentLoaded", function () {
  var body = document.body;
  if (!body) return;

  // Avoid inserting twice
  if (document.querySelector("header.topbar")) return;

  var header = document.createElement("header");
  header.className = "topbar";
  header.innerHTML =
    '<div class="topbar-inner">' +
      '<div class="topbar-title">BHMS4418 Project Hub</div>' +
      '<nav class="nav" aria-label="Site navigation">' +
        '<select id="navSelect" aria-label="Go to page">' +
          '<option value="" selected>Go to…</option>' +
          '<option value="index.html">Home / Hub</option>' +
          '<option value="plan.html">Project plan</option>' +
          '<option value="progress-report-draft.html">Progress report – draft</option>' +
          '<option value="progressreport1.html">Progress report – final</option>' +
          '<option value="final-report-outline.html">Final report outline</option>' +
          '<option value="versionC.html">Final report – long draft</option>' +
          '<option value="finalreport.html">Final report – clean version</option>' +
          '<option value="cantonese_guide.html">Cantonese guide</option>' +
        '</select>' +
      '</nav>' +
    '</div>';

  body.insertBefore(header, body.firstChild);

  var sel = document.getElementById("navSelect");
  if (!sel) return;
  sel.addEventListener("change", function () {
    if (sel.value) {
      window.location.href = sel.value;
    }
  });
});

