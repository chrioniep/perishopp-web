# Perishopp-web

Perishop-web" is an ecommerce website with an integrated dashboard that allows for the management of content displayed on the website, such as products, categories, galleries, etc.

## Table of Contents

- [Project Description](#project-description)
- [Major Functions and Features](#major-functions-and-features)
- [Dependencies](#dependencies)
- [Project setup](#project-setup)
- [Usage](#usage)
- [Deployment](#deployment)

## Project Description

"Perishop-web" is a powerful and user-friendly ecommerce website designed to streamline the management of online stores. With an integrated dashboard, this platform empowers businesses to efficiently control and showcase their products, categories, galleries, and more, all in one centralized location.

Purpose and Problem Statement:
The purpose of "Perishop-web" is to address the challenges faced by online businesses in managing their ecommerce platforms effectively. As businesses grow and expand their product offerings, handling content updates and maintaining a seamless shopping experience for customers becomes increasingly complex. "Perishop-web" aims to simplify these processes by providing a comprehensive solution that allows businesses to easily manage and organize their online store's content.

## Major Functions and Features

1. **Seamless Order Placement:** Users can conveniently place their orders directly via WhatsApp or Telegram. By integrating popular messaging platforms, we simplify the purchasing process, allowing customers to interact with the app using familiar and user-friendly interfaces.

2. **Centralized Content Management:** Our app provides an integrated dashboard that empowers website administrators to efficiently manage all site content. From product listings to categories and sub-categories, the dashboard offers a centralized hub for content updates, ensuring a seamless and consistent user experience.

3. **Secure Authentication System:** To safeguard sensitive data and maintain control over the app's content, we have implemented a robust authentication system. The authentication feature restricts access to the dashboard, allowing only authorized personnel to make changes to the site's content, thereby enhancing security and data integrity.

4. **Effortless Product Image Upload:** In response to the growing importance of visual content in ecommerce, our app enables users to upload multiple images for a single product. This feature ensures that businesses can showcase their products from various angles, providing customers with a comprehensive understanding of each item.

5. **Categorization and Sub-Categorization:** Our app allows for seamless categorization and sub-categorization of products, promoting a well-organized and user-friendly browsing experience. Administrators can easily link products to relevant categories, and further subdivide them into sub-categories, ensuring customers can find what they need efficiently.

---

By incorporating these major functions and features, our app revolutionizes the way businesses manage their ecommerce platforms. From simplified order placements to robust content management and secure authentication, our platform empowers businesses to enhance their online presence and deliver an exceptional shopping experience to customers.

---

## Dependencies

To run "Perishopp-web," you will need the following dependencies and libraries:

- core-js - Version 3.8.3
- firebase - Version 8.10.0
- vue - Version 3.2.13
- vue-loading-overlay - Version 5.0.3
- vue-router - Version 4.0.3
- vue-social-sharing - Version 4.0.0-alpha4
- vue-sweetalert2 - Version 5.0.5
- vuex - Version 4.0.0

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

## Usage

Follow the steps below to effectively use "Perishopp-web" and accomplish tasks in the app:

1. **Installation:**

   Before getting started, ensure you have Node.js and npm (Node Package Manager) installed on your system.

   ```
   npm install
   ```

2. **Running the App:**

   To run the app locally in development mode, use the following command:

   ```
   npm run serve
   ```

   This will start a development server, and you can access the app by visiting the specified URL in your web browser.

3. **Accessing the Dashboard:**

   To access the integrated dashboard for content management, you need to authenticate with valid credentials. The authentication system restricts access to authorized personnel only. the credentials is username: _admin_ and password: _azerty_

4. **Placing Orders:**

   Customers can place orders directly via WhatsApp or Telegram. They can simply message the store and interact with the app through these messaging platforms. Ensure that the app's integration with WhatsApp and Telegram is set up and functioning correctly.

5. **Managing Content:**

   Administrators can use the dashboard to manage various aspects of the ecommerce store. Here are some common tasks and their corresponding commands:

   - **Adding Products:**
     Use the dashboard's product management interface to add new products, specifying details like name, price, description, and images.

   - **Linking Categories and Sub-Categories:**
     To organize products effectively, link them to relevant categories and further subdivide them into sub-categories. Use the dashboard's category and sub-category management features.

   - **Uploading Images:**
     When adding products, you can upload multiple images for a single product to showcase it from various angles. Use the appropriate option in the product management interface.

6. **Development Mode:**

   During development, you can use the following command to build the app:

   ```
   npm run build
   ```

   This will create a production-ready build that you can deploy to a hosting platform.

## Deployment

**Using Firebase as the Backend:**

"Perishopp-web" leverages Firebase as its robust backend solution. We take advantage of several Firebase services to ensure seamless functionality and an efficient user experience:

1. **Firebase Hosting:**
   We utilize Firebase Hosting to deploy and host our frontend application. Firebase Hosting provides a secure and reliable environment for serving our app to users globally. With automatic scaling and fast content delivery through a global content delivery network (CDN), users can access the app quickly, regardless of their geographic location.

2. **Firebase Storage:**
   To efficiently manage and store product images and other media assets, we utilize Firebase Storage. This service provides a scalable and cost-effective solution for storing and serving images to users. By offloading media storage to Firebase Storage, we ensure that the app remains responsive and that users can access images with minimal latency.

3. **Firestore:**
   Our app benefits from Firestore, Firebase's real-time NoSQL database, for handling data related to products, categories, and user orders. Firestore allows us to store and synchronize data in real-time across all clients, ensuring that users see the most up-to-date information without the need for manual refreshing. This dynamic data synchronization contributes to a smooth and engaging user experience.

By harnessing the power of Firebase Hosting, Firebase Storage, and Firestore, "Perishopp-web" achieves high performance, scalability, and real-time data synchronization. This combination of Firebase services enhances our app's functionality and enables users to interact with a fast, reliable, and feature-rich ecommerce platform.

**Deployment on Firebase Hosting:**

To deploy the "Perishopp-web" app on Firebase Hosting, follow these simple steps:

1. **Build the App:**
   Before deployment, ensure that you have all the necessary dependencies installed by running:

   ```
   npm install
   ```

   Next, build the production-ready app using the following command:

   ```
   npm run build
   ```

   This command will create a production build of the app, optimizing it for performance and efficiency.

2. **Firebase Deployment:**
   After successfully building the app, use the Firebase CLI to deploy it to Firebase Hosting. If you haven't installed the Firebase CLI yet, you can do so globally with the following command:

   ```
   npm install -g firebase-tools
   ```

   Once the Firebase CLI is installed, log in to your Firebase account by running:

   ```
   firebase login
   ```

   Follow the instructions to authenticate with your Firebase account.

3. **Final Deployment:**
   With the Firebase CLI set up and authenticated, navigate to the root directory of your project and deploy the app to Firebase Hosting:

   ```
   firebase deploy
   ```

   The deployment process will start, and you'll see a progress indicator as the app is uploaded to Firebase Hosting.

4. **Deployment Success:**
   Once the deployment is complete, Firebase will provide you with a hosting URL where your app is now live and accessible to users. You can share this URL with your audience, and they can start using your "Perishopp-web" app immediately.

---
