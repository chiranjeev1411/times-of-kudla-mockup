/* Times of Kudla design demo: simple front-end password gate (stops casual visitors only). */
(function () {
  var H = '34fbbe35449e90ef554dd2026e901025cdb0491a7106f6800f5d430cf404a622';
  var KEY = 'tok-demo-ok';
  try { if (localStorage.getItem(KEY) === H) return; } catch (e) {}
  document.documentElement.classList.add('locked');
  function hex(buf) { return Array.prototype.map.call(new Uint8Array(buf), function (b) { return ('0' + b.toString(16)).slice(-2); }).join(''); }
  function sha(txt) { return crypto.subtle.digest('SHA-256', new TextEncoder().encode(txt)).then(hex); }
  function build() {
    var d = document.createElement('div');
    d.id = 'gate';
    d.style.cssText = 'position:fixed;left:0;top:0;right:0;bottom:0;z-index:99999;background:#0c2347;color:#fff;display:flex;align-items:center;justify-content:center;font-family:Segoe UI,Arial,sans-serif;visibility:visible;padding:20px';
    d.innerHTML = '<form id="gateform" style="max-width:360px;width:100%;text-align:center">' +
      '<div style="font-size:13px;letter-spacing:.12em;text-transform:uppercase;color:#e3b23c;margin-bottom:10px">Times of Kudla</div>' +
      '<h2 style="font-size:22px;margin-bottom:8px">Design demo is private</h2>' +
      '<p style="font-size:14px;opacity:.85;margin-bottom:16px">Enter the password you were given to view this preview.</p>' +
      '<input id="gatepw" type="password" autocomplete="off" placeholder="Password" style="width:100%;padding:12px;border-radius:8px;border:0;font-size:16px;margin-bottom:10px">' +
      '<button type="submit" style="width:100%;padding:12px;border-radius:8px;border:0;background:#e3b23c;color:#2d2100;font-weight:700;font-size:15px;cursor:pointer">Open demo</button>' +
      '<div id="gateerr" style="color:#ffb4ab;font-size:13px;margin-top:10px;min-height:18px"></div></form>';
    document.body.appendChild(d);
    var form = d.querySelector('#gateform');
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var v = d.querySelector('#gatepw').value;
      sha(v).then(function (h) {
        if (h === H) {
          try { localStorage.setItem(KEY, H); } catch (e) {}
          document.documentElement.classList.remove('locked');
          d.parentNode.removeChild(d);
        } else {
          d.querySelector('#gateerr').textContent = 'Incorrect password. Please try again.';
        }
      });
    });
    var inp = d.querySelector('#gatepw'); if (inp && inp.focus) inp.focus();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build); else build();
})();
