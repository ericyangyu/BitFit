# BitFit Style Guide

## General Notes
- Please add your name to the file header as an author if you wrote code in that file.
- Please comment your code. Use multi line comments for code that is more complex than at first glance.
- Please use consistency in your naming (camelCase or splitting with _)
- Please try to use consistency with your file structure such as ordering functions in a class.
- Please try to keep the code free of commented code.
- Please try to remove imports that are no longer used.
- Please try to think of the other programmers that will be looking at your code in the future so that you comment with that in mind.

## File Headers
```
/**
 * The Progress page displays the current state of the user's progress. It allows
 * the user to view and edit their profile information. It allows the user to start a new workout
 * or choose to see their trophy case.
 *
 * TODO: (Optional)
 * NOTES: (Optional)
 * 
 * Authors: Imran, Sharan, Nour
 */
 ```

## Sort Imports by Group
```
// library imports
import React, { useState, Component } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Actions } from 'react-native-router-flux';

// Component imports
import Input from "../components/Input";
import Button from "../components/Button";
import TextField from "../components/Text";

// Resource imports
import profilePhoto from "../resources/profile.png";
```

## Function Headers
- Do not use functions to export classes.
```
/**
 * This function does what it is supposed to.
 */
function MainFocusPage() {}
```

## Class Instantiation
- Use `export default class` during class creation.
- Only one class per page.
```
export default class Progress extends Component {}
```

## Class Headers
- Please try to make the class header explain at highlevel what the class does.
```
/**
 * Class that returns the Progress page with correct components and API calls.
 */
export default class Progress extends Component {}
```

## Method Headers
- Please try to make the method headers explain what that method is doing.
```
// Route to the profile page when the profile button is pressed
goToProfile = () => {};
```

## Stylesheets
- Contain all styles in the Stylesheet at the bottom of the file.
- One style sheet per file.
```
// Style for this page
const styles = StyleSheet.create({
    // Style the container for the components on the page
    container: {
        backgroundColor: '#f3ebe1',
        marginTop: 0,
        alignItems: 'center'
    }
};)
```