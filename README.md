# 🧠 iNotebook — Your Personal Cloud Notebook

> ✨ A full-stack MERN app that lets you securely create, edit, delete, and organize personal notes — accessible anytime, anywhere!

---

<div align="center">

[![GitHub stars](https://img.shields.io/github/stars/sumitdwivedi01/iNotebook?style=for-the-badge&logo=github)](https://github.com/sumitdwivedi01/iNotebook/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/sumitdwivedi01/iNotebook?style=for-the-badge&logo=github)](https://github.com/sumitdwivedi01/iNotebook/network/members)
[![GitHub issues](https://img.shields.io/github/issues/sumitdwivedi01/iNotebook?style=for-the-badge)](https://github.com/sumitdwivedi01/iNotebook/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/sumitdwivedi01/iNotebook?style=for-the-badge)](https://github.com/sumitdwivedi01/iNotebook/pulls)

</div>

---

## 🌟 About the Project
**iNotebook** is a secure and responsive **MERN stack** web app that allows users to take notes in the cloud with authentication and privacy.  
Users can **sign up**, **log in**, and **manage their notes** (Create, Read, Update, Delete) with smooth React UI and MongoDB backend.

---

## 🚀 Features

✅ **User Authentication** — Secure login & signup using JWT  
✅ **Add, Edit & Delete Notes** — Real-time state updates via React  
✅ **Cloud Storage** — All notes saved in MongoDB Atlas  
✅ **Responsive UI** — Mobile & desktop friendly  
✅ **Private Routes** — User-specific data access only  
✅ **Smart Alerts** — Clean UI feedback system  
✅ **Secure Backend** — Token validation + password encryption  

---

## 🖼️ App Preview

> Add your screenshots inside `/assets` and replace below 👇

<div align="center">

<img src="./assets/dashboard.png" width="270" alt="Dashboard" />
<img src="./assets/editnote.png" width="270" alt="Edit Note" />
<img src="./assets/login.png" width="270" alt="Login Page" />

</div>

---

## 🌙 Technologies Used

<div align="center">

| React | Node.js | Express | MongoDB | Bootstrap |
|:------:|:--------:|:--------:|:--------:|:-----------:|
| ![React Badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) | ![Node Badge](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) | ![Express Badge](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) | ![Mongo Badge](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) | ![Bootstrap Badge](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white) |

</div>

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/sumitdwivedi01/iNotebook.git
cd iNotebook
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Configure environment variables
Create a .env file in the backend directory:

ini
Copy code
MONGO_URI = your_mongodb_connection_string
JWT_SECRET = your_secret_key
4️⃣ Run backend server
bash
Copy code
cd backend
npm start
5️⃣ Run frontend
bash
Copy code
cd ../frontend
npm run dev
✅ App will be live at → http://localhost:5173/

🗂️ Folder Structure
pgsql
Copy code
iNotebook/
│
├── backend/
│   ├── index.js
│   ├── routes/
│   ├── models/
│   └── middleware/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── App.js
│   └── package.json
│
└── assets/
    ├── dashboard.png
    ├── editnote.png
    └── login.png
🔮 Future Enhancements
✨ Dark mode toggle
✨ Categorized & searchable notes
✨ Rich text formatting (bold, highlight, lists)
✨ Share notes between users
✨ PWA support for offline access

👨‍💻 Author
Sumit Dwivedi
🎓 B.Tech CSE | MERN Developer | Lifelong Learner
🌐 GitHub • LinkedIn

💖 Support
If you found this project helpful, please ⭐ it on GitHub
and feel free to open an issue or pull request 🚀

<div align="center">
Made with ❤️ by Sumit Dwivedi

</div> ```