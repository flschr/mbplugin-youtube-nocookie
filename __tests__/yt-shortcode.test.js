const fs = require('fs');
const path = require('path');

describe('YouTube shortcode behavior', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="video-wrapper" role="button" tabindex="0" aria-label="Play YouTube video" data-video-id="3jrxuctMYLY" data-thumb="https://fischr.org/uploads/2025/bob-der-hase.webp">
        <img
          class="video-thumbnail"
          src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1280 720'%3E%3Crect width='100%25' height='100%25' fill='%23000'/%3E%3C/svg%3E"
          alt="YouTube Thumbnail">
        <div class="video-play-button"></div>
      </div>`;
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  function runScript() {
    const shortcodePath = path.join(__dirname, '..', 'layouts', 'shortcodes', 'yt.html');
    const contents = fs.readFileSync(shortcodePath, 'utf8');
    const match = contents.match(/<script>([\s\S]*?)<\/script>/);
    if (!match) {
      throw new Error('Unable to locate inline script in shortcode template');
    }
    const script = match[1];
    // eslint-disable-next-line no-eval
    eval(script);
  }

  test('keeps the provided custom thumbnail when it loads successfully', () => {
    const thumbnail = document.querySelector('.video-thumbnail');
    expect(thumbnail).not.toBeNull();
    expect(thumbnail.src.startsWith('data:image/svg+xml')).toBe(true);

    runScript();

    expect(thumbnail.src).toBe('https://fischr.org/uploads/2025/bob-der-hase.webp');

    // simulate a successful load to ensure no fallback handlers run
    thumbnail.dispatchEvent(new Event('load'));

    expect(thumbnail.src).toBe('https://fischr.org/uploads/2025/bob-der-hase.webp');
  });

  test('falls back to YouTube thumbnails when the custom image fails', () => {
    const thumbnail = document.querySelector('.video-thumbnail');
    expect(thumbnail).not.toBeNull();
    expect(thumbnail.src.startsWith('data:image/svg+xml')).toBe(true);

    runScript();

    expect(thumbnail.src).toBe('https://fischr.org/uploads/2025/bob-der-hase.webp');

    // simulate the custom thumbnail failing to load
    thumbnail.onerror();
    expect(thumbnail.src).toBe('https://img.youtube.com/vi/3jrxuctMYLY/maxresdefault.jpg');

    // simulate the high-res thumbnail failing as well to ensure we hit the fallback
    thumbnail.onerror();
    expect(thumbnail.src).toBe('https://img.youtube.com/vi/3jrxuctMYLY/0.jpg');
  });
});
