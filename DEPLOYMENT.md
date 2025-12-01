# Mniam Landing Page Deployment Guide

This guide will help you deploy your new landing page to the web using **Vercel** (free) and connect your **Strato** domain.

## 1. Push Code to GitHub
Since I cannot access your personal GitHub account, you need to push the code manually.

1.  **Create a new Repository on GitHub**
    *   Go to [github.com/new](https://github.com/new).
    *   Name it `mniam-landing`.
    *   Make it **Public** (or Private, Vercel supports both).
    *   **Do not** initialize with README, .gitignore, or License (we already have them).
    *   Click **Create repository**.

2.  **Push the code**
    Open your terminal (or ask me to run these commands if you provide the URL):
    ```bash
    cd /Users/kamil/Plate/mniam-landing
    git remote add origin https://github.com/YOUR_USERNAME/mniam-landing.git
    git branch -M main
    git push -u origin main
    ```
    *(Replace `YOUR_USERNAME` with your actual GitHub username)*

    **Already pushed?** If you made changes (like the countdown update), run:
    ```bash
    git add .
    git commit -m "Update site"
    git push
    ```

## 2. Deploy on Vercel
1.  Go to [vercel.com](https://vercel.com) and Sign Up / Login (you can use your GitHub account).
2.  Click **"Add New..."** -> **"Project"**.
3.  Import the `mniam-landing` repository you just created.
4.  **Configure Project:**
    *   **Framework Preset:** Next.js (should be auto-detected).
    *   **Root Directory:** `./` (default).
    *   **Build Command:** `next build` (default).
    *   Click **Deploy**.
5.  Wait ~1 minute. Your site will be live at `mniam-landing.vercel.app`!

## 3. Connect Your Domain (Strato)
1.  In your Vercel Project Dashboard, go to **Settings** -> **Domains**.
2.  Enter `mniam.app` and click **Add**.
3.  Vercel will show you the **DNS Records** you need to add to Strato.
    *   **Type:** A Record
    *   **Value:** `76.76.21.21` (Vercel's IP)
    *   *OR* CNAME `cname.vercel-dns.com` (follow Vercel's specific instruction).

4.  **Log in to Strato:**
    *   Go to your Domain Management.
    *   Find DNS Settings for `mniam.app`.
    *   Update the **A Record** to point to Vercel's IP.
    *   Save changes.

It may take up to 24-48 hours for the domain to propagate, but usually it works within an hour! 🚀
