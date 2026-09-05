window.DISCUSSION_QTYPES = [
  { key: "fact", label: "Fact", hat: "hat-fact" },
  { key: "opinion", label: "Opinion", hat: "hat-opinion" },
  { key: "pros", label: "Pros", hat: "hat-pros" },
  { key: "cons", label: "Cons", hat: "hat-cons" },
  { key: "how", label: "How", hat: "hat-how" },
  { key: "whatif", label: "What-if", hat: "hat-whatif" }
];

window.renderDiscussionTopic = function (data, mainEl) {
  if (!data || !mainEl) return;

  var html = "";
  if (data.category) {
    html += '<p class="topic">' + escapeHtml(data.category) + "</p>";
  }
  html += "<h2>" + escapeHtml(data.title) + "</h2>";
  if (data.intro) {
    html += '<p class="intro">' + escapeHtml(data.intro) + "</p>";
  }

  (data.sets || []).forEach(function (set, setIdx) {
    html += '<section class="set" id="set-' + (set.id || setIdx) + '">';
    html += '<h3 class="branch">' + escapeHtml(set.branch) + "</h3>";

    html += '<div class="text">';
    (set.text || []).forEach(function (p) {
      html += "<p>" + escapeHtml(p) + "</p>";
    });
    html += "</div>";

    if (set.vocab && set.vocab.length) {
      html += '<div class="vocab"><h4>New vocab</h4><ul>';
      set.vocab.forEach(function (v) {
        html +=
          "<li><span class=\"en\">" +
          escapeHtml(v.en) +
          "</span> <span class=\"yue\">" +
          escapeHtml(v.yue || "") +
          '</span><span class="def">' +
          escapeHtml(v.def || "") +
          "</span></li>";
      });
      html += "</ul></div>";
    }

    html += '<div class="discuss"><h4>Discuss</h4>';
    window.DISCUSSION_QTYPES.forEach(function (qt) {
      var q = (set.questions && set.questions[qt.key]) || {};
      html +=
        '<div class="q"><span class="hat ' +
        qt.hat +
        '">' +
        qt.label +
        "</span>";
      if (q.en) html += "<p>" + escapeHtml(q.en) + "</p>";
      if (q.yue) html += '<p class="prompt-yue">' + escapeHtml(q.yue) + "</p>";
      html +=
        '<textarea class="notes" rows="2" placeholder="Notes…" aria-label="' +
        qt.label +
        " notes — " +
        escapeHtml(set.branch) +
        '"></textarea></div>';
    });
    html += "</div></section>";
  });

  mainEl.innerHTML = html;

  function escapeHtml(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
};
