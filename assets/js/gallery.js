(function () {
  var groups = Array.prototype.slice.call(document.querySelectorAll('.shots'));
  if (!groups.length) return;

  var overlay, figure, image, bar, counter, btnPrev, btnNext, btnClose;
  var shots = [], index = 0, opener = null;

  function build() {
    overlay = document.createElement('div');
    overlay.className = 'lightbox';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Screenshot viewer');
    overlay.hidden = true;

    figure = document.createElement('figure');
    image = document.createElement('img');
    figure.appendChild(image);

    btnPrev = button('lightbox-nav', 'Previous screenshot', 'M15 5l-7 7 7 7');
    btnNext = button('lightbox-nav', 'Next screenshot', 'M9 5l7 7-7 7');
    btnClose = button('lightbox-close', 'Close', 'M6 6l12 12M18 6L6 18');
    counter = document.createElement('span');
    counter.className = 'lightbox-count';

    bar = document.createElement('div');
    bar.className = 'lightbox-bar';
    bar.appendChild(btnPrev);
    bar.appendChild(counter);
    bar.appendChild(btnNext);

    overlay.appendChild(figure);
    overlay.appendChild(bar);
    overlay.appendChild(btnClose);
    document.body.appendChild(overlay);

    btnPrev.addEventListener('click', function () { step(-1); });
    btnNext.addEventListener('click', function () { step(1); });
    btnClose.addEventListener('click', close);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay || e.target === figure) close();
    });
  }

  function button(cls, label, path) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = cls;
    b.setAttribute('aria-label', label);
    b.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
                  '<path d="' + path + '"/></svg>';
    return b;
  }

  function show(i) {
    index = (i + shots.length) % shots.length;
    var link = shots[index];
    var thumb = link.querySelector('img');
    image.src = link.getAttribute('href');
    image.alt = thumb ? thumb.getAttribute('alt') : '';
    counter.textContent = (index + 1) + ' / ' + shots.length;
    bar.hidden = shots.length < 2;
  }

  function step(delta) { show(index + delta); }

  function open(list, i, trigger) {
    shots = list;
    opener = trigger;
    var scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.overflow = 'hidden';
    if (scrollbar > 0) document.documentElement.style.paddingRight = scrollbar + 'px';
    overlay.hidden = false;
    show(i);
    btnClose.focus();
    document.addEventListener('keydown', onKey);
  }

  function close() {
    overlay.hidden = true;
    image.removeAttribute('src');
    document.documentElement.style.overflow = '';
    document.documentElement.style.paddingRight = '';
    document.removeEventListener('keydown', onKey);
    if (opener) { opener.focus(); opener = null; }
  }

  function trap(e) {
    var items = Array.prototype.slice.call(overlay.querySelectorAll('button'))
      .filter(function (b) { return b.getClientRects().length > 0; });
    if (!items.length) return;
    var first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    } else if (items.indexOf(document.activeElement) === -1) {
      e.preventDefault();
      first.focus();
    }
  }

  function onKey(e) {
    if (e.key === 'Escape') { close(); return; }
    if (e.key === 'Tab') { trap(e); return; }
    if (shots.length < 2) return;
    if (e.key === 'ArrowLeft') { step(-1); }
    if (e.key === 'ArrowRight') { step(1); }
  }

  build();

  groups.forEach(function (group) {
    var links = Array.prototype.slice.call(group.querySelectorAll('a.shot'));
    links.forEach(function (link, i) {
      link.addEventListener('click', function (e) {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        e.preventDefault();
        open(links, i, link);
      });
    });
  });
})();
