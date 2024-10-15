// A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user. They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest.
// Think about the following; you may need to make assumptions or decisions about the prompt and how the feature should behave:
// What should happen if the cart is empty?
// What needs to be shown to the user at each step of check out?
// What behaviors of this feature does the prompt miss or gloss over?
// Hint: Observe the shopping cart and checkout features of some popular websites to get some ideas!

//Homepage Access
//Landing Page: Users arrive on the homepage.
//Navigation: Clear options to browse products, login, or continue as a guest.
//Product Categories: Users can browse through categories or use the search bar.
//Add to Cart Button: Each product has an "Add to Cart" button.
//For Non-Account Holders:
//Item added to cart.
//A prompt appears: “Continue Shopping” or “View Cart”.
//For Logged-in Users
//item added to cart.
//The cart icon updates with item count.
//Cart Icon: Clickable icon displays item count
//Cart Page:
//Shows a list of added items with quantities and prices.
//Options to update quantities, remove items, or clear the cart.
//Empty Cart Message: If no items are in the cart, display a message like “Your cart is empty. Start shopping!” with links to products.
//Checkout Button: Prominently displayed on the cart page
//Login Prompt
//If the user is not logged in, prompt to either log in or continue as a guest.
//Provide “Login” and “Continue as Guest” buttons.
//For Logged-in Users:
//Redirect directly to the checkout page.
//For Guest Users
//Collect necessary information: email address, shipping address, payment details.
//Step 1: Shipping Information:
//Step 2: Payment Information
//Step 3: Review Order
//Step 4: Confirm Order
//Post-Checkout Confirmation
//Order Confirmation Page:
//Account Creation Option (for Guests)
//Summary of Conditions
//Empty Cart: Users are encouraged to shop.
