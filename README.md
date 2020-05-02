BitFit
Mac Instructions
Hi Guys! Here are instructions on how to set up the front-end for our app. This is the hardest part you'll have to do and then you can chill with your dope ass setup writing frontend like a G in Javascript. I know it's a lot of steps but you will likely have a lot of these things already downloaded!

Setting Up your environment:

I HIGHLY reccomend using Visual Studio Code as your environment for this project because your life will be so much easier. To download VS Code (if you don't have it already), use this link: https://code.visualstudio.com/download

You are going to need to download a plugin for Visual Studio Code that will let you run an android phone emulator directly from using VS Code. Again, this will make your life much, much easier as you won't have to open up android studio over and over again to run the phone emulator. Here is the link for that: https://marketplace.visualstudio.com/items?itemName=DiemasMichiels.emulate

Once the plugin is loaded you will see a phone icon on the top right of your VS Code screen. Once you click on it, select "View Android Emulators" and make sure you see some android device emulator there. If you don't see one, it's probably because you didn't add a device when setting up Android Studio (but I'm sure you'll see one because we did the Android Studio lab).

Installing Dependencies:

[These are taken from https://reactnative.dev/docs/environment-setup if you want to look there (but I will simplify these instructions to only ones you might need). NOTE: If you do look at the site, do everything up to "Creating a new application"]

** You will need Homebrew (a super cool tool that will help you forever), please install if you do not have it (for MacOs & Linux: https://brew.sh/) **

Install Node, Watchman, and npx using Homebrew. Run the following commands in a Terminal after installing Homebrew (if you don't have it already):

brew install node
brew install watchman
brew install npx
Install JDK using Homebrew (if you don't have it already) Run the following commands in a Terminal after installing Homebrew:

brew cask install adoptopenjdk/openjdk/adoptopenjdk8
Add this shit to your $HOME/.bash_profile or $HOME/.bashrc config file (or you will spend hours like me wondering why the fuck your project won't build): NOTE: Only works for linux and mac systems. also depends on where you installed these things. so make sure they are correct.

export ANDROID_HOME=$HOME/Library/Android/sdk export PATH=$PATH:$ANDROID_HOME/emulator export PATH=$PATH:$ANDROID_HOME/tools export PATH=$PATH:$ANDROID_HOME/tools/bin export PATH=$PATH:$ANDROID_HOME/platform-tools

Install one last thing to make life easier (This will help you check and make sure your emulator works):

brew cask install android-platform-tools
Set up SDK Manager (You only have to do this once)

Open Android Studio
Go to Tools > Android SDK Manager
Click the "SDK Tools" tab
Check the "Show Package Details" box at the bottom right
Check the 28.0.3 option under "Android SDK Build-Tools"
Click Apply and accept the license.
Running the actual Project:

We almost there y'all!

Open up your terminal, clone the code from Github, and cd into the directory that has your project.

Open the code up on VS Code so you can edit the files on there. Open up your emulator by clicking the phone icon on the top-right of your VS Code project.

9.1 (Extra Step) To verify that your emulator is connected, type "adb devices" into the terminal and you will see a list of emulators attached. If you see an emulator there, you are set.

Type "npx react-native run-android" in your terminal to run your app! A separate terminal will pop up that connects the emulator to the code. This way you can directly make changes to your files and you will the changes RIGHT AWAY on the emulator instead of having to build and run over and over again (biggg time saver).

You know it all went well if you see a page that says "Hello World" :-)

Here are some solutions to common problems:

if doesn't work in general: verify that ANDROID_HOME has been added to your path by running "echo $PATH"
If you're still getting installDebug error, try this: https://github.com/facebook/react-native/issues/24715
If your emulator is stuck in loading screen, try this: https://stackoverflow.com/questions/36753354/avd-emulator-stuck-on-loading-screen-in-android-studio
Windows Instruction
Install JDK 8 https://www.oracle.com/java/technologies/javase-jdk8-downloads.html

Install npm and Node https://nodejs.org/en/

Install Watchman: https://github.com/facebook/watchman/actions/runs/32012692

Click on "watchman" under Artifacts.
Go to C:\Users<YOUR USERNAME>\AppData\Local\ and make a directory "watchman". You can actually make this directory anywhere just change things accordingly.
Move the content of the bin folder from the installed watchman zip file and put it into C:\Users<YOUR_USERNAME>\AppData\Local\watchman or wherever you created your watchman directory.
Add it to path. Go to your "system environment variables". Control Panel > System and Security > System > Advanced system settings > Environment Variables
Under system variables find "Path" and click edit.
Add the directory where watchman was installed for example: C:\Users<YOUR_USERNAME>\AppData\Local\watchman
Click OK
Install Gradle 6.3 https://gradle.org/install/#manually

Download the complete version and follow the instructions under "Microsoft Windows users" for adding gradle to your path, similar to what you did for watchman.
Download settings.zip https://drive.google.com/file/d/10v9BbrzefCpikOtBaMKXmq987s6QbuXy/view?usp=sharing

Open Android Studio and go to File > Import Settings and select the settings.zip file

If JDK 8 is not automatically found you may need to specify the path to it in Android Studio

Likely path: C:\Program Files\Java\jdk1.8.0_251
Set up SDK Manager (You only have to do this once)

Open Android Studio
Go to Tools > Android SDK Manager
Click the "SDK Tools" tab
Check the "Show Package Details" box at the bottom right
Check the 28.0.3 option under "Android SDK Build-Tools"
Click Apply and accept the license.
Go here https://reactnative.dev/docs/environment-setup and go to the tab "React Native CLI Quickstart". Make sure you're on the Windows tab.

Skip to step 3.
Configure the ANDROID_HOME environment variable under system variables. The path should be similar to the example provided.
Step 4: Add platform-tools to the Path variable. It's likely already installed under "C:\Users<YOUR_USERNAME>\AppData\Local\Android\Sdk\platform-tools" (verify this in your terminal). If you can't find it you can download it here: https://developer.android.com/studio/releases/platform-tools.
Install Python for Windows. https://www.python.org/downloads/release/python-382/ if you don't have it already.

Make sure when going through the installer you check the box that'll have it automatically register python in your environment variables. It should be checked by default.
Bring up your command prompt and go to the BitFit directory (assuming you've already cloned it, if not clone the directory now). Run "npx react-native run-android". The emulator should be running now.

If you don't have an emulator installed let me know and I'll add the instructions for that to the readme also, but you should have a working emulator from the 110 lab.
Make a post in the group chat if you're still having errors.

FRONT-END DEV
Use grids: https://www.npmjs.com/package/react-native-easy-grid
