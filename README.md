# Holidaze Accommodation Application

![image](https://user-images.githubusercontent.com/52622303/164316813-4b12d99f-aeb7-4069-85cf-e72b3a50ac99.png)

Holidaze is an accommodation booking platform that offers a seamless experience for both users wanting to book a venue and venue managers wanting to manage their listings.

## Description

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

## Built With

- [React.js](https://reactjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [Next.js-13](https://nextjs.org/blog/next-13)
- [Shadcn](https://ui.shadcn.com/)

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

## Contributing

If you would like to contribute to the project, please follow these steps:

1. Fork the repository on GitHub.
2. Clone your forked repository to your local machine.
3. Create a new branch to work on your feature or bug fix.
4. Make your changes and commit them with descriptive commit messages.
5. Push your changes to your forked repository.
6. Open a pull request to the original repository.

## Contact

[My LinkedIn page](https://www.linkedin.com/in/bj%C3%B8rn-magnus-fromreide-18b1a1170/)
