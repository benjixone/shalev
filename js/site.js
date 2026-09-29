/* Golden Partners site script: the ask form only (Shalev Group). */
(function () {
  var ENDPOINT = ""; /* deploy step: Formspree, Brevo or GHL webhook URL. Until it is set, submissions are logged to the console and not delivered. */
  function wire(f) {
    function q(name) { return f.querySelector('[name="' + name + '"]'); }
    function mark(el, bad) { var w = el.closest(".q"); if (w) w.classList.toggle("bad", bad); }
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = {}; new FormData(f).forEach(function (v, k) { data[k] = v; });
      var ok = true;
      var ch = f.querySelector(".choices"); if (ch) { mark(ch, !data.door); if (!data.door) ok = false; }
      var first = null;
      ["name", "email", "ask"].forEach(function (k) {
        var el = q(k); if (!el) return; var bad = !el.value.trim() || (k === "email" && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(el.value));
        mark(el, bad); if (bad) { ok = false; first = first || el; }
      });
      if (!ok) { if (first) first.focus(); return; }
      var btn = f.querySelector("button[type=submit]"); btn.disabled = true; btn.textContent = "Sending";
      var done = function () { f.hidden = true; var d = f.parentNode.querySelector(".done"); d.style.display = "block"; d.focus(); };
      if (!ENDPOINT) { console.warn("Golden Partners form: ENDPOINT not set, submission not delivered", data); done(); return; }
      fetch(ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }).then(done).catch(done);
    });
  }
  Array.prototype.forEach.call(document.querySelectorAll("form.form, form.form-card"), wire);
})();
