// Theme toggle: light by default, choice remembered on this device.
(function () {
  var root = document.documentElement;
  var button = document.getElementById('theme-toggle');

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    button.textContent = theme === 'dark' ? 'Light theme' : 'Dark theme';
    button.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
  }

  var saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  apply(saved === 'dark' ? 'dark' : 'light');

  button.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    apply(next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
})();

// Copy buttons on code blocks.
document.querySelectorAll('.code .copy').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var text = btn.parentElement.querySelector('pre').innerText;
    function done(ok) {
      btn.textContent = ok ? 'Copied!' : 'Press Ctrl+C';
      setTimeout(function () { btn.textContent = 'Copy'; }, 1800);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(false); });
    } else {
      var range = document.createRange();
      range.selectNodeContents(btn.parentElement.querySelector('pre'));
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      done(false);
    }
  });
});
