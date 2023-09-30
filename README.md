## Holidaze Accommodation Application
Holidaze is an accommodation booking platform that offers a seamless experience for both users wanting to book a venue and venue managers wanting to manage their listings.

User Stories
General Users:

- View a list of Venues.
- View a specific Venue page by id.
- Search for a specific Venue.
- View a calendar with available dates for a Venue.

  

- Register as a customer using a stud.noroff.no email.
- View their upcoming bookings.
- Login.
- Update their avatar.
- Logout.
- Create a booking at a Venue.
- Venue Managers:

- Register as a Venue manager using a stud.noroff.no email.
- Create a Venue.
- Update a Venue they manage.
- Delete a Venue they manage.
- View bookings for a Venue they manage.

### Setup and installation

To run this project locally: 

- Ensure you have Node.js and npm installed

#### Steps

1. Clone the repository:
```bash
git clone https://github.com/[YourUsername]/holidaze.git
```
2. Navigate to the project directory:
```bash
cd holidaze
```
3. Install the dependencies:
```bash
npm install
```
4. To make authentication work, create a '.env.local' file in the root directory and add the following variables:
```bash
NEXTAUTH_SECRET=your_secret_key_here
NEXTAUTH_URL=http://localhost:3000
```
Replace your_secret_key_here with a secure random string. This is used to encrypt the session data.

5. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Hosted

This application is hosted at: https://fed-2-exam.vercel.app/


