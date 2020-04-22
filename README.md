# BitFit

Hi Guys! Here are instructions on how to set up the front-end for our app. This is the hardest part you'll have to do and then
you can chill with your dope ass setup writing frontend like a G in Javascript. I know it's a lot of steps but you will
likely have a lot of these things already downloaded!

Setting Up your environment:

1. I HIGHLY reccomend using Visual Studio Code as your environment for this project because your life will be so much easier. 
To download VS Code (if you don't have it already), use this link: https://code.visualstudio.com/download

2. You are going to need to download a plugin for Visual Studio Code that will let you run an android phone emulator directly from 
using VS Code. Again, this will make your life much, much easier as you won't have to open up android studio over and over again to run
the phone emulator. Here is the link for that: https://marketplace.visualstudio.com/items?itemName=DiemasMichiels.emulate

3. Once the plugin is loaded you will see a phone icon on the top right of your VS Code screen. Once you click on it, select 
"View Android Emulators" and make sure you see some android device emulator there. If you don't see one, it's
probably because you didn't add a device when setting up Android Studio (but I'm sure you'll see one because we did the 
Android Studio lab). 


Installing Dependencies:

[These are taken from https://reactnative.dev/docs/environment-setup if you want to look there (but I will simplify these
instructions to only ones you might need). NOTE: If you do look at the site, do everything up to "Creating a new application"]

** You will need Homebrew (a super cool tool that will help you forever), please install if you do not 
have it (for MacOs & Linux: https://brew.sh/) ** 

4. Install Node, Watchman, and npx using Homebrew. Run the following commands in a Terminal after installing Homebrew (if you don't have 
it already):

      * brew install node
      * brew install watchman
      * brew install npx 
      
5. Install JDK using Homebrew (if you don't have it already)
   Run the following commands in a Terminal after installing Homebrew:

      * brew cask install adoptopenjdk/openjdk/adoptopenjdk8
      
6. Add this shit to your $HOME/.bash_profile or $HOME/.bashrc config file (or you will spend hours like me wondering why the
fuck your project won't build):

     export ANDROID_HOME=$HOME/Library/Android/sdk
     export PATH=$PATH:$ANDROID_HOME/emulator
     export PATH=$PATH:$ANDROID_HOME/tools
     export PATH=$PATH:$ANDROID_HOME/tools/bin
     export PATH=$PATH:$ANDROID_HOME/platform-tools
     
7. Type "source $HOME/.bash_profile" to load the config into your current shell. 
Verify that ANDROID_HOME has been added to your path by running "echo $PATH"

8. Install one last thing to make life easier (This will help you check and make sure your emulator works):

    * brew cask install android-platform-tools
    

Running the actual Project:

We almost there y'all! 

8. Open up your terminal and cd into the directory that has your project.

9. Open up your emulator by clicking the phone icon on the top-right of your VS Code project.

9.1 (Extra Step) To verify that your emulator is connected, type "adb devices" into the terminal and you will see a list of emulators attached.
If you see an emulator there, you are set.

10. Type "npx react-native run-android" in your terminal to run your app! A separate terminal will pop up that connects the emulator to the code. 
This way you can directly make changes to your files and you will the changes RIGHT AWAY on the emulator instead of having to build 
and run over and over again (biggg time saver). 

11. You know it all went well if you see a page that says "Hello World" :-)


