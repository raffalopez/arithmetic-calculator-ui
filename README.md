# Calculator Web Platform
This project is a Web platform that provides simple calculator functionality (addition, subtraction, multiplication, division, square root, and a random string generation) with separate costs per request. Each user has a starting credit/balance that will be deducted for each request. If the user's balance is not enough to cover the request cost, the request will be denied. The UI includes login, new operation request form, user records table with pagination, sorting, filtering, and delete option.

## Instructions 🚀

To use this project, follow these steps:

Clone this repository using the following command:

```
git clone https://github.com/raffalopez/calculator-web-platform.git
```

Create a .env file in the root directory of your project with the following environment variables:

```
REACT_APP_API_URL=http://localhost:5000/api/v1
```

Install dependencies using the following command:

```
npm install
```

Start the development server using the following command:

```
npm run start
```
Open your browser and go to http://localhost:3000 to access the application.

### How to Use 💡
Login using your username and password.
On the "New Operation" page, fill in the fields for the operation you want to perform and click the "Submit" button.
On the "User Records" page, you can view all your operation records, search for a specific record, sort the table, change the number of records displayed per page, and delete a record.

## Deploy 📦
I've decided to use Vercel because it has a simple Installation and Configuration flow. Vercel allows us that on every commit into `main` a new deploy runs upgrading the Site page.

- Live demo on: <https://arithmetic-calculator-j5qxrhb9u-raffalopez.vercel.app/>

## Build-with 🛠️
React
TypeScript
Redux
Tailwind
Axios

## Author 👨🏻‍💻

- **Rafael Lopez** - [raffalopez](https://github.com/raffalopez)