# 🌱 Plantation Inventory App

A Node.js + Express + MongoDB application for managing plantation data (plants, species, locations).  
Supports Docker & Kubernetes deployment out-of-the-box.

---

## 🚀 Features
- Add new plants  
- View all plants  
- Delete plants  
- MongoDB database integration  
- Docker support  
- Kubernetes production deployment  
- Clean folder architecture (MVC)

---

## 🛠️ Tech Stack
| Technology | Purpose |
|-----------|----------|
| Node.js / Express | Backend API |
| MongoDB | Database |
| Docker | Containerization |
| Kubernetes | Deployment |

---

## 📂 Project Structure
```
app/
 ├── src/
 ├── package.json
docker/
k8s/
docker-compose.yml
```

---

## 🐳 Run with Docker
```
docker-compose up --build
```
App URL:  
➡️ http://localhost:3000/api/plants

---

## ☸ Deploy on Kubernetes
```
kubectl apply -f k8s/
```

---

## 🔗 API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/plants | List plants |
| POST | /api/plants | Create plant |
| DELETE | /api/plants/:id | Delete plant |

---

## 📧 Author
**Vinod Kirne**
