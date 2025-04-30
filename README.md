# MonitorPerformance
Version: **v1.0.0** | Author: Juan90264 (library derivation author); Google Chrome Team (library author)

A simple tool to monitor **Web Vitals (LCP, FID, CLS)** directly on the page, with a fixed visual display in the corner of the screen. Ideal for developers to quickly test performance in production or locally.

Using the 'web-vitals' library, it is licensed under the Apache License 2.0, developed by the Google Chrome team. You can obtain a copy of the license at: http://www.apache.org/licenses/LICENSE-2.0

## 🔧 What are Web Vitals?

Web Vitals are essential user experience metrics recommended by Google:
- **LCP**: Largest Contentful Paint
- **FID**: First Input Delay
- **CLS**: Cumulative Layout Shift (visual stability)

## 🚀 How to use

### Recommended option: Using the [Custom Style Script](https://chromewebstore.google.com/detail/custom-style-script/ecjfaoeopefafjpdgnfcjnhinpbldjij) extension

1. Install the extension in Chrome.
2. Click on the extension icon and choose the domain where you want to run the script.
3. Paste the code from the `MonitorPerformance` tool's "script.js" file into the script field.
4. Save and reload the page.

> The dashboard will appear in the top left corner of the page, showing real-time metrics.

---

## ♻️ Reuse
You can reuse this script in a variety of ways:

As a bookmarklet (minimized version).

In browser extensions that support custom JavaScript.

Embedded directly into websites during development.

In testing environments for UX/performance.

## 🧪 Local usage example
Save an HTML page with the following content:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Test Web Vitals</title>
</head>
<body>
  <h1>Welcome to the Test</h1>
  <script>
    // Paste the complete code here
  </script>
</body>
</html>
```

## License
This project is free to use for educational and monitoring purposes. We do not collect or send any data — everything happens locally.

Distributed under the GNU General Public License v3.0 (GPL-3.0)
