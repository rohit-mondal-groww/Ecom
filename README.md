# What does this app do?

A simple e-commerce app that displays a list of products from a dummy app and gives the ability to add the products to cart and also to favorites.

## Technologies used

- React Native
- Redux (Proper structural usage with the help of separate reducers for different functionalities)
- Redux Saga (For async api calls)
- Typescript for type safety
- Shopify's Flashlist for optimised flatlist performance
- Animated Library of React Native for animated fading out of item from cart



The entire app is powered through redux; whether it be showing the products, or adding them to cart or favorites.

### Improvements possible

- SearchBar functionality with the help of local fuzzy search
- Animated Scrolling up of the header when scrolling through list (Implemented this but something might have been wrong because of which it wasn't working. Will fix it later when I have time)
- Driving user details through store
- Persisting of data if needed
