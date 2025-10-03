# UPI QR Generator - Rupesh Verma

A small React + Vite + Tailwind + Bootstrap PWA that generates UPI QR codes with pre-filled amount & note.

## Features
- Generate `upi://pay` URL and QR code
- Pre-fill amount and transaction note
- Download QR as PNG, print, copy UPI URL
- Dark modern UI
- PWA manifest + simple service worker
- Footer with "All rights reserved Rupesh Verma"

## How to run
1. Make sure Node.js (>=18) and npm are installed.
2. In project root:
```bash
npm install
npm run dev
```
3. Open the app at `http://localhost:5173` (or the port shown).

## Notes
- This project only generates UPI URLs and QR codes locally. No server or UPI APIs required.
- For production, add proper icons, HTTPS, and enhance service worker logic.

