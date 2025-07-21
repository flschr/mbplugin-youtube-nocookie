const fs = require('fs');
const path = require('path');
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
const { JSDOM } = require('jsdom');

test('loadVideo runs once for clicked wrapper', () => {
  const templatePath = path.join(__dirname, '..', 'layouts', 'shortcodes', 'yt.html');
  const fileContent = fs.readFileSync(templatePath, 'utf8');
  const scriptMatch = fileContent.match(/<script>([\s\S]*?)<\/script>/);
  const script = scriptMatch ? scriptMatch[1] : '';

  const wrapper = `\n<div class="video-wrapper" data-video-id="abc123">\n  <img class="video-thumbnail" src="thumb.jpg" alt=""/>\n  <div class="video-overlay"></div>\n  <div class="video-play-button"></div>\n</div>`;

  // load two instances of the markup along with the original script
  const html = `${wrapper}${wrapper}<script>${script}</script>`;
  const dom = new JSDOM(html, { runScripts: 'dangerously' });
  const { document } = dom.window;

  const wrappers = document.querySelectorAll('.video-wrapper');
  expect(wrappers.length).toBe(2);

  const innerHTMLSpy = jest.spyOn(dom.window.Element.prototype, 'innerHTML', 'set');

  wrappers[0].dispatchEvent(new dom.window.Event('click', { bubbles: true }));

  expect(innerHTMLSpy).toHaveBeenCalledTimes(1);
  expect(wrappers[0].querySelector('iframe')).not.toBeNull();
  expect(wrappers[1].querySelector('iframe')).toBeNull();

  innerHTMLSpy.mockRestore();
});

