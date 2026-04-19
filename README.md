# Café Fausse Web Application

This repository contains the complete, full-stack web application for Café Fausse, divided into a React/Vite frontend and a Flask/PostgreSQL backend.

## Solution and Design Overview

**Frontend (React + Vite)**
- **Architecture**: The user interface is built as a Single Page Application (SPA) using React, orchestrated by Vite for fast bundling and development. React Router is used to handle seamless page transitions without full reloads.
- **Styling**: We strictly utilized modern Vanilla CSS featuring CSS Variables, Flexbox, and CSS Grid. No generic frameworks like Tailwind or Bootstrap were used. This provides complete structural control, creating a truly premium, aesthetic Italian dark-themed ambiance as required.
- **User Experience**: The application incorporates subtle animations (e.g., `fade-in` transitions) and interactive micro-animations (e.g., hover scaling on image galleries) to deliver an unforgettable digital dining experience that mirrors the restaurant's quality.

**Backend (Flask + PostgreSQL)**
- **Architecture**: The REST API is implemented using Flask. The logic and data layers are cleanly separated into `app.py`, `routes.py`, `models.py`, and `config.py`.
- **Database Architecture**: Data is modeled and persisted using `Flask-SQLAlchemy`. The schema features rigorous relational bounding (`Customer`, `Reservation`, and `NewsletterSubscriber` tables).
- **Reservation Logic**: The `/api/reservations` endpoint evaluates current time slots against a max-capacity rule bounding reservations to a hard maximum of 30 physical tables per given slot, dynamically extracting occupied tables and resolving free tables autonomously to prevent double bookings.

---

## Local Setup and Execution

### Prerequisites
- Node.js (v18 or higher recommended)
- Python (v3.8 or higher recommended)
- PostgreSQL Server (Running locally or accessible remotely)

### 1. Database Configuration
1. Create a fresh PostgreSQL Database (e.g., `cafe_fausse_db`).
2. Navigate into the `backend/` directory.
3. Rather than exposing passwords, we use environment variables. In `backend/config.py`, either update the placeholder fallbacks directly, or export/provide these environment variables via a `.env` file in the `backend/` directory:
   - `DB_USER`
   - `DB_PASS`
   - `DB_HOST` (e.g. `localhost`)
   - `DB_PORT` (e.g. `5432`)
   - `DB_NAME` (e.g. `cafe_fausse_db`)

### 2. Booting the Backend API
1. Open a terminal and navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Create and activate a Python virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```
3. Install the required Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Initialize your database tables. You can do this by opening a Python interactive shell inside the environment and running:
   ```python
   from app import create_app
   from models import db
   app = create_app()
   with app.app_context():
       db.create_all()
   ```
5. Start the Flask server (it will run on port 5000):
   ```bash
   python app.py
   ```

### 3. Booting the Frontend Client
1. Open a new terminal and navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install npm dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development UI:
   ```bash
   npm run dev
   ```

### 4. Validating the System
Navigate to the provided Vite URL (typically `http://localhost:5173`). Test the email signup in the Footer or attempt booking a Reservation to verify that data properly flows from React into your PostgreSQL instance via the Flask architecture.