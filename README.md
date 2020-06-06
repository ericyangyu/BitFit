# BitFit

BitFit was created as a project for the UCSD course CSE 110 "Software Engineering" taught by Professor Gary Gillespie during Spring Quarter 2020.


## Introduction
BitFit is a gamified iOS exercise app to assist users in achieving their fitness goals. During the time of COVID-19, exercising is extremely difficult without the motivation of friends and teammates to continue pushing your limits. In general, it is difficult to be motivated about exercising. BitFit is a fun and effective solution for users to conquer the obstacles they face when exercising. In the app, a user can select a target body part and BitFit will provide the user with a list of effective exercises for that body part! Once a user begins completing exercises, they will gain progress for specific body parts and also earn trophies for their hard work. Users can easily reflect on all of their previous exercises in the activity log as well. We believe that everyone is capable of achieving their fitness goals, and BitFit is the right tool to help you do that!


## Login Credentials
We have provided the following tester accounts for testing purposes.

* New Account:
    * Username: testuser@gmail.com
    * Password: 123456789
* Mature Account:
    * Username: mature@gmail.com
    * Password: 123456789


## Requirements
* macOS Catalina Version: 10.15.4
* Docker Desktop Version: 2.3.0.3 or latest
* Homebrew Version: latest
* Xcode Version: 11.4.1 or latest
* Xcode Command Line Tools Version: 11.4.1 or latest
* Simulator Version: 11.4.1 or latest
* iPhone 11 iOS 13.4 Simulator


## How to Install
1. Clone the BitFit repository on GitHub.
2. Download and install [Docker](https://www.docker.com/products/docker-desktop).
3. Download and install [Homebrew](https://brew.sh/).
4. Follow Steps 1 and 2 in this [guide](https://docs.expo.io/workflow/ios-simulator/) to install your iOS simulator.
5. Execute the following command to install node.
    ```
    brew install node
    ```
6. Navigate to the following directory.
    ```
    cd BitFit/frontend
    ```
7. Execute the following command to install the app's dependencies.
    ```
    rm -rf node_modules && npm install
    ```

8. Execute the following command to install Expo.
    ```
    npm install -g expo-cli
    ```

## How to Run
1. Make sure you start Docker and it is running.

2. Navigate to the following directory.
    ```
    cd BitFit/backend
    ```

3. Execute the following commands to run the docker container for the backend.
    ```
    docker-compose up --build -d 
    ```

4. Navigate to the following directory.
    ```
    cd BitFit/frontend
    ``` 

5. Execute the following command to start Expo.
    ```
    expo start
    ```

6. In the Expo Developer Tool that opens in your browser, press `Run on iOS simulator`.

7. Click `Open` if there is a popup to open Expo that says `Open in "Expo"?`.

8. In the `Simulator` menu at the top of the screen, press `File -> Open Device -> iOS 13.5 -> iPhone 11`.


## Known Bugs
* On all pages, the transition between pages is sometimes slow. For example, when you are on the Signup page and press the “Signup” button, it will take a couple of seconds for the screen to either alert you of invalid credentials or navigate you to the next screen. To handle this please only press buttons ONCE and then wait for at least 5 seconds before pressing it again.


## Troubleshooting
* To reload the app, in the simulator press ‘CMD-D’ and that will open a developer window in the simulator. Click reload to reload the app and this will take you back to the login page.
* To reopen the simulator, close the simulator first. Then open Expo Developer tools if it is not already open in your browser by pressing ‘SHIFT-d’ in the terminal where you ran ‘expo start’. Next click on ‘Run on iOS simulator.’ 
* If the app stops responding and closes on you, you will be taken to the iPhone home screen. Open the Expo app and click on BitFit in the Recently Opened tab.


## Team Members
* Eric Yu - Project Manager
* Jeremy Luong - Quality Assurance Lead
* Emily Ferguson, Jeffrey Ha - Software Development Leads
* Steven Tsan - Algorithm Specialist	
* Imran Matin - Database Specialist
* Samay Gandhi - User Interface Specialist
* Jaz Gill - Business Analyst
* Sharan Singh - Senior System Analyst
* Nour Yehia - Software Architect
 

