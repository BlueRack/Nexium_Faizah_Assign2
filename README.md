# 🧠 AI Blog Summariser

An intelligent blog summarisation tool that scrapes blog posts, generates AI-style summaries, translates them into Urdu, and stores results in Supabase — all wrapped in a beautiful ShadCN UI and deployed on Vercel.

---

## 🚀 Features

- 🔗 Enter any blog URL
- 📄 Scrapes the blog content (Cheerio)
- 🧠 Generates static summary using custom scoring
- 🌐 Translates summary to Urdu using MyMemory API
- ☁️ Stores:
  - Summary in Supabase
  - (Coming soon) Full content in MongoDB
- 💅 Beautiful UI built with:
  - Next.js 14 (App Router)
  - TypeScript
  - Tailwind CSS + ShadCN UI
  - Framer Motion animations
- 🧾 View all past summaries
- ✨ Gradient UI with glowing buttons

---

## 📂 Tech Stack

| Frontend      | Backend          | AI/Utils         | Storage        |
|---------------|------------------|------------------|----------------|
| Next.js 14    | API Routes       | Custom Summary   | Supabase       |
| React + TS    | Cheerio Scraper  | MyMemory API     | (Optional) MongoDB |
| Tailwind CSS  | Server Components | Urdu Translator |               |

---

## 🛠 How It Works

1. **User enters blog URL**
2. **Scrapes content** using Cheerio
3. **Summarises** text via scoring algorithm
4. **Translates** to Urdu (real-time)
5. **Saves** summary to Supabase
6. **Displays** result on summary page

---

## 📸 Screenshots

> Add UI screenshots here if you’d like  
> You can use `![screenshot](./public/ss.png)` format

---

## 🌐 Live Site

> Coming soon – hosted on Vercel!

---

## 📦 Setup Instructions

```bash
# Clone the repo
git clone https://github.com/BlueRack/Nexium_Faizah_Assign2
cd Nexium_Faizah_Assign2

# Install dependencies
pnpm install

# Run locally
pnpm dev

👩‍💻 Author
Faizah Azeem
AI Engineer | Data Scientist | ML Enthusiast