# B2C
[Click here](https://warm-oasis-26556.herokuapp.com/#/) to get a live view of this project.

## Summary
B2C, or Buinsess 2 Consumer, is an application with the goal of connecting vendors with their customers. A vendor is able to see valuable information, such as when their busy times are, and a customer is able to see which restaurants they frequent. This was created as a collaboration between classmates during my time at the Full-Stack Bootcamp. The main technologies used for this project were Vue for the front-end and Sequelize for the back-end.

## How-To
There are two sides to this application. If you intend to use the business side of the application please read below in the buinsess section. If you are a customer please read the customer section below.

### Business
Upon opening the application you will be greeted with the home page. Using the navigation bar at the top, click on **Vendor**. Once on the Vendor page, there will be a login screen. Please select **New Vendor** to create an account. Fill out the necessary information to create an account and then click **Register**. After clicking register, you will be taken back to the login screen where you will enter your **Username** and **Password** for the account you just created.

Once logging in, you will see  information regarding when consumers have 'checked-in' to your business. If you do not see any information, that means no one has checked in. If you would like to create a few check-ins in order to test the application, please read below to the customer section.

*Please note that the graph on the Vendor page after logging in does not display any relevant data. We were not able to complete that portion of our project within our timeframe.*

### Customer
Upon opening the application you will be greeted with the home page. Using the navigation bar at the top, click on **Customer**. Once on the Vendor page, there will be a login screen. Please select **New Customer** to create an account. Fill out the necessary information to create an account and then click **Register**. After clicking register, you will be taken back to the login screen where you will enter your **Username** and **Password** for the account you just created.

After logging in, you will be taken to the customer page. This page allows you to check-in to businesses and also gives you information about your most recent check-in and your total amount of check-ins at the top.

In order to check-in to a restaurant please click on the drop down menu to see all available restaurants. The options in the dropdown menu are listings created on the Vendor side of the application. Once you have selected a location, click **Check-In To (vendor)** to check-in. This gives the Vendor your name as well as the date you checked in. After checking in, you will see your check-ins begin to populate below.

## Conclusion
In conclusion, this application was a good learning experience. I was primarily focused on creating the back-end structure and it was my first foray into using Vue and Sequelize together after previously using Sequelize on only jQuery applications. If given more time I would like to pull more information from the database as well as assist in completing that graph on the Vendor page.
