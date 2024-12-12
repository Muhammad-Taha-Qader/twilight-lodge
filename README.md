# Twilight Lodge - Airbnb Clone

Twilight Lodge is a modern, full-stack web application inspired by Airbnb. It allows users to browse and book vacation listings, manage their profiles, and interact with dedicated panels for hosts and administrators. The application is built using Next.js, TypeScript, Tailwind CSS, and MongoDB for dynamic data management.

## Project Overview

### Features

- **User Authentication:** Secure sign-up and sign-in functionalities using JSON Web Tokens (JWT).
- **Dynamic Listings:** Users can view property listings, filter using search, and view details for specific listings.
- **Booking System:** Users can book listings, view their booking history.
- **Admin Panel:** Admins can manage listings and bookings of anyone.
- **Host Panel:** Hosts can manage their property listings and monitor their bookings and bookings made on their listings by other users.
- **Profile Management:** Users can view and update their profile details.
- **Responsive Design:** Tailwind CSS ensures a seamless experience across devices.
- **Search Functionality:** Users can filter listings based on various criteria.

---

## Project Structure

```
Twilight-Lodge/
├── app/
│   ├── auth/
│   │   ├── signin/page.tsx
│   │   ├── signup/page.tsx
│   ├── book/[id]/page.tsx
│   ├── profile/page.tsx         // Protected Profile Page
│   ├── admin/page.tsx           // Protected Admin Panel
│   ├── host/page.tsx            // Protected Host Panel
│   ├── listings/[id]/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
├── components/
│   ├── Card/
│   ├── Footer/
│   ├── ListingsList/
│   ├── Navbar/
│   ├── Auth/
│   ├── Admin/
│   ├── Host/
├── data/
├── lib/
├── migrations/
├── models/
├── pages/api/
│   ├── profile.js
│   ├── bookings/
│   ├── listings/
│   ├── auth/
│   ├── admin/
│   ├── host/
├── public/
├── types/
├── .env.local
├── package.json
└── README.md
```

---

## Setup Instructions

### Prerequisites

- Node.js (v16+)
- MongoDB (local or cloud-based)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/twilight-lodge.git
   cd twilight-lodge
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the `.env.local` file with the following variables:
   ```env
   MONGODB_URI=your_mongo_uri
   JWT_SECRET=your_jwt_secret
   ```

4. Run database migrations (if any):
   ```bash
   npm run migrate
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Access the application at `http://localhost:3000`.

---

## API Endpoints

### Authentication

#### Sign In
- **Endpoint:** `POST /api/auth/signIn`
- **Payload:**
  ```json
  {
    "email": "user@example.com",
    "password": "securepassword"
  }
  ```
- **Response:**
  ```json
  {
    "token": "jwt_token"
  }
  ```

#### Sign Up
- **Endpoint:** `POST /api/auth/signUp`
- **Payload:**
  ```json
  {
    "name": "User Name",
    "email": "user@example.com",
    "password": "securepassword"
  }
  ```

### User Profile

#### Get Profile
- **Endpoint:** `GET /api/profile`
- **Headers:** `Authorization: Bearer <token>`
- **Response:**
  ```json
  {
    "name": "User Name",
    "email": "user@example.com",
    "bookings": []
  }
  ```

### Listings

#### Get All Listings
- **Endpoint:** `GET /api/listings`
- **Query Parameters:** (optional)
  - `search` (string)

#### Get Listing by ID
- **Endpoint:** `GET /api/listings/[id]`
- **Response:**
  ```json
  {
    "id": "123",
    "title": "Listing Title",
    "description": "Details here."
  }
  ```

#### Create Listing (Admin/Host only)
- **Endpoint:** `POST /api/admin/listings`
- **Payload:**
  ```json
  {
    "title": "New Listing",
    "price": 100,
    "location": "City, Country"
  }
  ```

### Bookings

#### Get Bookings
- **Endpoint:** `GET /api/bookings`
- **Headers:** `Authorization: Bearer <token>`

#### Create Booking
- **Endpoint:** `POST /api/bookings`
- **Payload:**
  ```json
  {
    "listingId": "123",
    "dates": ["2024-01-01", "2024-01-07"]
  }
  ```

### Admin Panel

- **Endpoint:** `/admin`
- Access protected; requires admin privileges.
- Features:
  - Manage listings
  - View all bookings

### Host Panel

- **Endpoint:** `/host`
- Access protected; requires host privileges.
- Features:
  - Manage hosted properties
  - View booking requests

---

## Technologies Used

- **Frontend:** Next.js, Tailwind CSS
- **Backend:** Node.js, MongoDB
- **Authentication:** JSON Web Tokens (JWT)
- **Styling:** Tailwind CSS
- **Database Management:** Mongoose

---

## Contribution Guidelines

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes with clear messages.
4. Create a pull request to the main branch.

---

## License

This project is licensed under the MIT License. For more information, refer to the LICENSE file.
