# Privacy friendly YouTube embeds for Micro.blog

<img src="logo.png" alt="YouTube Nocookie Plugin Logo">

This **Micro.blog plugin** renders a thumbnail preview with an overlay and only loads the actual YouTube iframe once the user clicks it. After the click on the thumbnail, the video is loaded in the **privacy-enhanced mode** using (`www.youtube-nocookie.com`). This helps reduce tracking and aligns better with privacy regulations like GDPR.

This plugin is forked by [René Fischer](https://fischr.org) from [mbplugin-youtube](https://github.com/fmaida/mbplugin-youtube).

## ✅ Features
- Embeds YouTube videos using `youtube-nocookie.com`
- Supports embedding YouTube videos and playlists by ID (auto-detection)
- Videos are **not loaded automatically** (click-to-play behavior)
- Uses **YouTube hq thumbnail preview** (with fallback to /0.jpg if no hq is available)
- Allows to **add a custom thumbnail** instead for a embedded video
- Includes a **custom CSS-based YouTube-style play button**
- Optional and customizable **privacy notice as overlay**
- Fully responsive design
- No external JavaScript required

## 📦 Installation
Go to the **Micro.blog plugin directory** and install the plugin from there.

## 📝 Usage
Use the shortcode in your blog posts to embed YouTube videos or playlists. The shortcode automatically detects whether you’ve entered a single video or a playlist ID.

Examples:
- Video by ID: `{{< yt "7UOrJTsYyls" >}}`
- Playlist by ID: `{{< yt "OLAK5uy_kdjEovCQlPXN09ictIKnHL-W4kJh0raQM" >}}`
- Playlist with custom thumbnail: `{{< yt "OLAK5uy_kdjEovCQlPXN09ictIKnHL-W4kJh0raQM" "https://example.com/thumb.jpg" >}}`

All embeds use YouTube’s privacy-enhanced domain (`youtube-nocookie.com`).
Example page to [see the plugin in action](https://fischr.org/2018/08/26/gardasee-again/).

## ⚙️ Plugin Settings

This plugin offers the following optional settings:
- Custom CSS Class – Adds a custom class to the video container for styling
- Privacy notice on/off – Decide whether you want to show the privacy disclaimer
- Privacy notice text – Allows you to customize the disclaimer text
- Rounded thumbnail corners – Display video previews with rounded edges

All settings can be configured in the Micro.blog plugin settings panel.

## 🙏 Credits

- [fmaida/mbplugin-youtube](https://github.com/fmaida/mbplugin-youtube)
- [shindakun/mbplugin-bandcamp](https://github.com/shindakun/mbplugin-bandcamp)
- [embedresponsively.com](http://embedresponsively.com)

## Changelog

### 1.3.5
- Remove support for embedding full YouTube URLs to avoid instability when rendering with Hugo.

### 1.3.4
- Always honor custom thumbnails for videos and playlists before falling back to YouTube defaults.

### 1.3.2
- Improve accessibility of embeds with keyboard/focus support and iframe titles
- Ensure shortcode assets (CSS/JS) are injected only once per page

### 1.3.1
- Added support for Playlists and YouTube URLs
- Added option to use a custom thumbnail

### 1.3.0
- Added option to enable rounded corners for video thumbnails
