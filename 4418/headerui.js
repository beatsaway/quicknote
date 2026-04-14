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
          '<option value="" disabled>──────────</option>' +
          '<option value="finalreportv5e.html">Final report (v5) English — Approach 2 ⭐</option>' +
          '<option value="finalreportv5s.html">Final report (v5s) English (easy) — Approach 2</option>' +
          '<option value="finalreportv5c.html">Final report (v5c) 粵語易讀版 — Approach 2</option>' +
          '<option value="finalreportv4e.html">Final report (v4) English — Approach 1</option>' +
          '<option value="finalreportv4s.html">Final report (v4s) English (easy) — Approach 1</option>' +
          '<option value="finalreportv4c.html">Final report (v4c) 粵語易讀版</option>' +
          '<option value="finalreportv3e.html">Final report (v3) English</option>' +
          '<option value="finalreportv3c.html">Final report (v3) 粵語版</option>' +
          '<option value="finalreportv2.html">Final report (v2) English</option>' +
          '<option value="finalreportv2c.html">Final report (v2) 粵語版</option>' +
          '<option value="progress-report-draft.html">Progress report – draft</option>' +
          '<option value="progressreport1.html">Progress report (v1)</option>' +
          '<option value="progressreport2.html">Progress report (v2) ⭐</option>' +
          '<option value="progressreport2c.html">Progress report (v2) 粵語版</option>' +
          '<option value="final-report-outline.html">Final report outline</option>' +
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

