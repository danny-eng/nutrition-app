# PROJECT NUTRIENT-MINDED

## OBJECTIVE
The intention of this project is to create a single-page application that allows users to search for nutritional information via the `USDA NDB API`. The user can create a profile page that stores information about foods they are interested in.

## FEATURES
- One third-party API distributed by the USDA.
- Token authentication attached to custom favorites API.
- User can use the search bar to query the USDA database for a food product.
- User can save selected food products into a list that can be viewed via their user profile.

## POSSIBLE FUTURE FEATURES
- Diet tracker.
- A database of products sold by markets near the user's location collected via crawler.

## TECHNOLOGY
### Front-End
- `React.js`

### Back-End
- `Ruby on Rails`

### Third-Party APIs
- `USDA NDB API` [(link)](https://ndb.nal.usda.gov/ndb/doc/index)

## USER STORIES
### CREATING A PROFILE
1. From any page, select the REGISTER button on the header bar.
2. Fill out and submit the form.

### LOGGING IN
1. From any page, select the LOGIN button on the header bar.
2. Fill out and submit the form.
3. You will be redirected to your profile if your credentials are correct.

### ACCESSING YOUR PROFILE
1. Log in.
2. From any page, select the PROFILE button on the header bar.

### SEARCHING FOR A FOOD PRODUCT
1. Type a search term into the search bar.
2. Search results will appear on the home page.
3. Use the nagivation buttons to search through the results.
4. Select an item to access its nutritional information.

### FAVORITING A FOOD PRODUCT
1. Press the SAVE button on the nutritional information screen of any food product.
2. You must be logged in to favorite a food. 
3. You cannot have a food favorited twice.

### ACCESSING YOUR FAVORITES LIST
1. Log in.
2. From any page, select the PROFILE button on the header bar.
3. Your favorites will be listed under the SAVED section.
4. You may view the nutritional information of a favorited food product by selecting it.

## WIREFRAMES
**HOME**
![HOME](https://i.imgur.com/naE6vBF.jpg)

**RESULTS**
![RESULT](https://i.imgur.com/JHnqsBX.jpg)

**FOOD**
![FOOD](https://i.imgur.com/0qXb0vQ.jpg)

**LOGIN**
![LOGIN](https://i.imgur.com/Vp3lC7b.jpg)

**REGISTER**
![REGISTER](https://i.imgur.com/Y1ngOWu.jpg)

**PROFILE**
![PROFILE](https://i.imgur.com/huS9ThV.jpg)

**FAVORITES**
![FAVORITES](https://i.imgur.com/cBne6is.jpg)

## TABLE STRUCTURE
### USERS
|**id**|**username**|**password_digest**|**first_name**|**last_name**|**email**|**auth_token**|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|

### FAVORITES
|**id**|**name**|**user_id**|**ndbno**|
|:-:|:-:|:-:|:-:|

## PROJECT BOARD
[Link.](https://github.com/danny-eng/nutrition-app/projects/1)


