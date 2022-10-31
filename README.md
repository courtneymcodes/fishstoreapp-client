The Fish Shop is a MERN stack application of a sample ecommerce fish store. 

The front end is deployed here: https://fishshopapp.netlify.app/

The backend is deployed here: https://thefishshop.up.railway.app/

The home page contains a welcome page which includes an image that takes you to a collection of items when clicked.

![welcome](https://user-images.githubusercontent.com/63630567/198900229-e7a75620-5e97-4263-bf09-30036b47e7ff.png)

The shop page displays the collection of aquarium fish and supplies that can be added to the cart.

![shopall](https://user-images.githubusercontent.com/63630567/198900781-5358ec01-284e-4d04-bd48-2ef3017f2abc.png)

Each item contains a details page which will display when an items picture is clicked on. Items can also be added to the cart from this page.

![details](https://user-images.githubusercontent.com/63630567/198900145-f0e1904e-ef64-4f12-9dbb-0338dd1f7c88.png)

All pages have an image of a shopping cart in the upper right hand corner of the page. The number beside the cart image changes when an item is added to the cart to display the total number of items that are in the cart.

![cartimg](https://user-images.githubusercontent.com/63630567/198900498-72b3a97a-3cae-435c-a801-4f7ea313b4de.png)

Users can click on the shopping cart image to view their cart. If the user is signed into an account, their name will display at the top.

![usercart](https://user-images.githubusercontent.com/63630567/198901048-722a595c-44d2-4bf6-9e6f-025feafbec9b.png)

When a user clicks on the checkout button, they will be directed to sign in if they are not signed in. If they do not have an account they can click on sign up to sign up for an account.

![signin](https://user-images.githubusercontent.com/63630567/198901153-b2de2205-0611-4963-a294-0508faa55a20.png)

Once the user is signed in, they can click on the checkout button and be taken to their order summary. After placing their order, they are shown a message thanking them for their order. They can log out by clicking on the logout button next to the shopping cart image in the upper right hand corner.

![summary](https://user-images.githubusercontent.com/63630567/198925674-099dbb89-74e8-4863-9bc9-821a1f2bb496.png)

![thanks](https://user-images.githubusercontent.com/63630567/198925719-4e93ef7f-1d04-4588-86e7-9b1053a37c81.png)

Completed orders are stored to mongoDB and can be viewed by visiting the order history link.

This site also contians a customer reviews page that displays customer reviews. Users can write a new review by clicking on the write a review button. Reviews are saved to MongoDb and immediately added to the page when submitted.

![reviewslist](https://user-images.githubusercontent.com/63630567/198899855-422464d4-0c4c-4c0c-b3b7-3b26bed0a2cd.png)

![writereview](https://user-images.githubusercontent.com/63630567/198899738-9ca59c27-947e-47f7-a904-bb868bc21d8f.png)
