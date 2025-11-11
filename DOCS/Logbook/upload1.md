# How the Web Works: Simple Guide

## 1. URL Anatomy
When you type `https://agoddamncrowbar.github.io/my-project/index.html`:
- `https://` = secure connection
- `agoddamncrowbar.github.io` = website address
- `/my-project/index.html` = specific file path

## 2. DNS Resolution (Finding the Server)
- Your browser asks "Where is agoddamncrowbar.github.io?"
- DNS (like a phone book) returns the IP address: `185.199.108.153` (not actual ip address)
- Now browser knows where to connect

## 3. TCP/TLS Connection
- **TCP**: Browser and server do a "handshake" to connect
- **TLS**: They set up encryption for security (the "S" in HTTPS)
- Connection is now secure and ready

## 4. HTTP Request
Browser asks the server:
```
GET /my-project/index.html
Host: agoddamncrowbar.github.io
```
Translation: "Please send me this HTML file"

## 5. HTTP Response
Server replies:
```
200 OK
Content-Type: text/html

<!DOCTYPE html>
<html>
  <body>Hello World</body>
</html>
```
- `200 OK` = success
- `404` = file not found

## 6. Loading More Files
Browser reads HTML and requests:
- CSS files (`style.css`)
- JavaScript files (`script.js`)
- Images (`logo.png`)

Each file = new request

## 7. Caching
Browser saves files locally:
- First visit: downloads everything
- Next visit: uses saved copies (faster!)
- Checks if files changed before downloading again

## 8. Rendering
Browser displays the page:
1. Reads HTML
2. Applies CSS styling
3. Runs JavaScript
4. Shows page on screen

## GitHub Pages Note
- Only serves HTML, CSS, and JS files
- No backend code (PHP, Python, etc.)
- All files are static
- JavaScript runs in your browser, not on server

## Simple Flow
```
Type URL → Find Server (DNS) → Connect (TCP/TLS) 
→ Request File (HTTP) → Get File → Load CSS/JS/Images 
→ Cache Files → Display Page
```