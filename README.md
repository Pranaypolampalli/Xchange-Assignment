# Nearby Products

A responsive web application to display product details along with nearby product recommendations based on location. Built with React, Material-UI, and React Router.

### Features
Home Page: Displays a list of available products with details.
Product Details: View detailed information about a product, including location, price, and description.
Nearby Products: Dynamically fetch and display products located within a specified distance of the selected product.
Navigation: Fixed app bar with a clickable title to return to the home page.
Responsive Design: Ensures usability across all devices, including desktops, tablets, and mobile devices.

### Tech Stack 
Frontend: React, React Router
UI Library: Material-UI (MUI) for consistent and modern design
Geolocation Utility: Custom calculateDistance function to determine nearby products based on latitude and longitude
Data: Mock product data stored locally in products.js

### Setup and Installation
1 . Clone the repository:
```
git clone https://github.com/your-username/nearby-products.git
cd nearby-products
```
2. Install dependencies:
```

npm install
```
3. Start the development server:
```
npm start
```
4. Open the application in your browser:
```
http://localhost:5173
```
### File Structure
```
src/
├── components/
│   ├── ProductCard.js         # Card component for individual product display
│   ├── ProductDetail.js       # Component for product details and nearby recommendations
│   ├── SearchAppBar.js        # App bar component with navigation
├── data/
│   ├── products.js            # Mock product data with location coordinates
├── pages/
│   ├── ProductDetailPage.js   # Page displaying the ProductDetail component
├── utils/
│   ├── geolocation.js         # Utility to calculate distances between coordinates
├── App.js                     # Main app component with routing
├── index.js                   # Entry point for the React app
```



