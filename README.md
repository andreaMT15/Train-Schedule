## Train Schedule App

**Developer: Andrea Minhas**

**Technologies Used: HTML, CSS, Javascript, JQuery, Firebase, Moment.js**

For this application I created a train schedule application that utilizes Firebase to host train data including: first train time, frequency of train, train name and destination. The user is able to add new train information to the current schedule. Once the user submits the information it will store the information in Firebase and update the table accordingly. The application retrieves and manipulates the date and time information with Moment.js. 

## How It Works:

The user submits the following information:
- Train Line Name
- Destination
- First Train Time (in military time)
- Frequency (in minutes)

<img width="1134" alt="screen shot 2019-02-20 at 4 00 43 pm" src="https://user-images.githubusercontent.com/44379703/53128121-b948d480-3529-11e9-928d-638f12de95e8.png">

The app will then calcualate when the next train will arrive relative to the current time. It will then store these values into the Firebase database and make them available for any user viewing the table.

<img width="1133" alt="screen shot 2019-02-20 at 4 00 34 pm" src="https://user-images.githubusercontent.com/44379703/53128118-b64de400-3529-11e9-9fa7-f01fdc6d75a5.png">


