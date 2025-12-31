# 🌍 Travel Guru

Travel Guru is a full-featured travel booking web application where users can explore travel packages, book tours, make secure payments, and track their bookings.  
The platform also includes a powerful Admin Dashboard to manage users, packages, bookings, and payments efficiently.

---

## 🎯 Mission
To build a modern, user-friendly, and secure travel booking platform that makes trip planning easier, faster, and more accessible for everyone.

---

## 👁️ Vision
To create a scalable digital travel ecosystem that connects travelers with trusted tour services, ensuring a seamless travel experience through technology, automation, and well-structured management.

---

## ✨ Features

### 👤 User Features
- Browse and explore travel packages  
- Book travel packages easily  
- Secure online payments using Stripe  
- User authentication with Firebase Authentication + JWT  
- Write reviews and give ratings  
- Track booking history  
- Update profile and manage account  

### 🛠️ Admin Features
- Manage travel packages (add, edit, delete)  
- Manage users and roles  
- View and manage all bookings  
- Monitor payments and transactions  
- View analytics and user statistics  
- Respond to user inquiries and reviews  

---

## 🛠️ Technologies Used

### Frontend
- React.js  
- Tailwind CSS  
- Axios  

### Backend
- Node.js  
- Express.js  
- MongoDB  
- JWT (JSON Web Token)  

### Authentication
- Firebase Authentication  
- JWT Authorization  

### Payment Gateway
- Stripe  

### Tools & Utilities
- dotenv  
- Axios  
- MongoDB Atlas  

---

## 📂 Project Structure
```
travel-guru/
│
├── client/        # Frontend (React)
├── server/        # Backend (Node + Express)
├── README.md
└── .env
```

---

## 🔐 Environment Variables

### Server `.env`
```
PORT=5000
DB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### Client `.env`
```
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```
git clone https://github.com/Nadimmo/M9-Travel-Guru.git
cd travel-guru
```

### 2️⃣ Install Dependencies

#### Client
```
cd client
npm install
npm run dev
```

#### Server
```
cd server
npm install
npm run start
```

---

## 🔒 Security
- Firebase Authentication for secure login  
- JWT-based protected routes  
- Stripe-secured payment processing  
- Role-based access control (Admin & User)  

---

## 📊 Future Improvements
- Wishlist / favorite travel packages  
- Email notifications  
- Multi-language support  
- Advanced analytics dashboard  
- Mobile application  

---

## 🤝 Contribution
Contributions are welcome!  
Fork the repository and submit a pull request.

---

## 📄 License
This project is licensed under the MIT License.

---

## 🙌 Acknowledgements
- Firebase  
- Stripe  
- MongoDB  
- React Community  


## Live Site
-  https://travel-guru-zeta.vercel.app
---
## Presentation Preview
-  https://www.pi.inc/docs/397102235983726?share_token=3JWZMGNECPXKQ
