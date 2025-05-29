# mbplugin-youtube-nocookie

A **Micro.blog plugin** for embedding YouTube videos using the **privacy-enhanced mode** (`www.youtube-nocookie.com`).  
This helps reduce tracking and aligns better with privacy regulations like GDPR.

This plugin is a fork of [mbplugin-youtube](https://github.com/fmaida/mbplugin-youtube) and builds upon:

- Steve Layton’s [Bandcamp Micro.blog plugin](https://github.com/shindakun/mbplugin-bandcamp)
- Techniques from [embedresponsively.com](http://embedresponsively.com)

---

## ✅ Features
- Embeds YouTube videos using `youtube-nocookie.com`
- No JavaScript required
- Fully responsive design
- Optional privacy notice above the embedded video

---

## 📦 Installation
Go to the **Micro.blog plugin directory** and click install.

---

## 📝 Usage
Use the shortcode in your blog posts as follows:
{{< yt "YOUTUBE_VIDEO_ID" >}}

**Example:**
{{< yt "7UOrJTsYyls" >}}

This will embed the YouTube video in privacy-enhanced mode.

---

## ⚙️ Plugin Settings

This plugin offers the following optional settings:
- Custom CSS Class – Adds a custom class to the video container for styling.
- Privacy notice on/off – Decide whether you want to show short privacy disclaimer
- Privacy notice text – Allows you to customize the disclaimer text (defaults to a YouTube privacy message).

All settings can be configured in the Micro.blog plugin settings panel.

---

## 🙏 Credits

- [fmaida/mbplugin-youtube](https://github.com/fmaida/mbplugin-youtube)
- [shindakun/mbplugin-bandcamp](https://github.com/shindakun/mbplugin-bandcamp)
- [embedresponsively.com](http://embedresponsively.com)
