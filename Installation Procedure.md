# BitFit Installation Procedure

1. Open yor terminal and clone the [BitFit Github Repo](https://github.com/e3tran/BitFit.git).

2. Download and install [Docker](https://www.docker.com/products/docker-desktop).

3. Download and install [Homebrew](https://brew.sh/).

4. Execute the following command to install node.
    ```
    brew install node
    ```

5. Navigate to the following directory.
    ```
    cd BitFit/frontend
    ```

6. Execute the following command to install the app's dependencies.
    ```
    rm -rf node_modules && npm install
    ```

7. Make sure you start Docker and it is running.

8. Navigate to the following directory.
    ```
    cd BitFit/backend
    ```

9. Execute the following commands to run the docker container for the backend.
    ```
    docker-compose up --build -d 
    ```

10. Navigate to the following directory.
    ```
    cd BitFit/frontend
    ```

11. Execute the following command to install Expo.
    ```
    npm install -g expo-cli
    ```

12. Follow Steps 1 and 2 in this [guide](https://docs.expo.io/workflow/ios-simulator/) to install your iOS simulator.

13. Execute the following command.
    ```
    cd BitFit/frontend
    expo start
    ```

14. In the Expo Developer Tool that opens in your browser, press `Run on iOS simulator`.

15. Click `Open` if there is a popup to open Expo that says `Open in "Expo"?`.

16. In the `Simulator` menu at the top of the screen, press `File -> Open Device -> iOS 13.5 -> iPhone 11`.