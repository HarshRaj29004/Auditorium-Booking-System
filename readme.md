# Full-Stack Auditorium Booking System

## Description

This project is a full-stack web application designed to manage auditorium bookings. It provides functionalities for users to request bookings, administrators to approve or decline requests, and a public view of booked slots. The system features role-based authentication and utilizes cloud storage for handling related documents.

## Features

*   **User Authentication:** Secure login and registration for different user roles (User, Sub-Admin, Super-Admin) using JWT.
*   **Role-Based Access Control:** Different levels of access and functionality based on user roles.
*   **Booking Requests:** Users can submit requests for auditorium bookings with details like date, time, event description, and upload necessary documents (PDFs).
*   **Admin Dashboard:** Administrators can view, manage, and filter booking requests by status (Pending, Booked, Declined).
*   **Booking Approval Workflow:** Sub-Admins and Super-Admins can approve or decline booking requests. Sub-Admins can also forward requests to Super-Admins.
*   **Real-time Booking Information:** Display of booked time slots on a calendar for users.
*   **Document Upload and Storage:** Secure uploading and storage of PDF documents related to bookings using Cloudinary.

## Technologies Used

*   **Frontend:** React (with hooks and modern practices)
*   **Backend:** FastAPI (Python)
*   **Database:** MongoDB
*   **Authentication:** JWT (JSON Web Tokens)
*   **API Communication:** Axios
*   **Cloud Storage:** Cloudinary
*   **UI Components:** Material UI (for some components like calendar and select)
*   **Styling:** Tailwind CSS

## Setup/Installation

To set up and run this project locally, follow these steps:

### Backend Setup

1.  **Clone the repository:**
    
```
bash
    git clone <repository_url>
    cd <repository_name>/backend
    
```
2.  **Create a virtual environment:**
```
bash
    python -m venv venv
    source venv/bin/activate # On Windows use `venv\Scripts\activate`
    
```
3.  **Install dependencies:**
```
bash
    pip install -r requirements.txt
    
```
4.  **Configure environment variables:**
    Create a `.env` file in the `backend` directory with the following variables:
```
env
    MONGO_URL=<your_mongodb_connection_string>
    DB=<your_database_name>
    SECRET_KEY=<a_secret_key_for_JWT>
    CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
    CLOUDINARY_API_KEY=<your_cloudinary_api_key>
    CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
    FRONTEND_URL=<your_frontend_url_e.g._http://localhost:5173>
    # Optional: Define initial admin emails and passwords (for initial setup)
    # SUPERADMINS=[["email@example.com", "password"]]
    # SUBADMINS=[["subadmin@example.com", "password"]]
    
```
*   Replace `<your_mongodb_connection_string>` with your MongoDB connection string.
    *   Replace `<your_database_name>` with the name you want for your database.
    *   Replace `<a_secret_key_for_JWT>` with a strong, random secret key.
    *   Obtain Cloudinary credentials from your Cloudinary account.
    *   Set `FRONTEND_URL` to the URL where your frontend will be running.
5.  **Run the FastAPI application:**
```
bash
    uvicorn main:app --reload
    
```
The backend will run on `http://localhost:8000` by default.

### Frontend Setup

1.  **Navigate to the frontend directory:**
```
bash
    cd ../frontend
    
```
2.  **Install dependencies:**
```
bash
    npm install
    
```
3.  **Configure environment variables:**
    Create a `.env` file in the `frontend` directory with the following variable:
```
env
    VITE_BACKEND=<your_backend_url_e.g._http://localhost:8000>
    
```
*   Replace `<your_backend_url_e.g._http://localhost:8000>` with the URL where your backend is running.
4.  **Run the React application:**
```
bash
    npm run dev
    
```
The frontend will typically run on `http://localhost:5173`.

## Usage

1.  Access the frontend application in your web browser (e.g., `http://localhost:5173`).
2.  Users can view the calendar to see booked slots.
3.  Users can register and log in to submit booking requests.
4.  Admins (Sub-Admins and Super-Admins) can log in to the admin dashboard (`/viewrequest`) to manage booking requests.

