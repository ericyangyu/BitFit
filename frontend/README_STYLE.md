# BitFit Frontend Style Guide

## General Notes
- Please add your name to the file header as an author if you wrote code in that 
  file.
- Please comment your code. Use multi line comments for code that is more
  complex than at first glance.
- Please use consistency in your naming (camelCase or splitting with _)
- Please try to use consistency with your file structure such as ordering 
  functions in a class.
- Please try to keep the code free of commented code.
- Please try to remove imports that are no longer used.
- Please try to think of the other programmers that will be looking at your 
  code in the future so that you comment with that in mind.

## Indentation
- Use four spaces

## File Headers
```
/**
 * The Progress page displays the current state of the user's progress. It 
 * allows the user to view and edit their profile information. It allows the 
 * user to start a new workout or choose to see their trophy case.
 *
 * TODO: (Optional)
 * NOTES: (Optional)
 * 
 * Authors: Imran, Sharan, Nour
 */
 ```

## Sort Imports by Group
```
// External imports
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';

// Internal imports

// Stylesheet
import styles from '../style/r_progress';

// Images
import profile_photo from '../images/profile_photo.png'
```

## Function Headers
- Do not use functions to export classes.
```
/**
 * This function does what it is supposed to.
 * Author: (if different from page author)
 */
function MainFocusPage() {}
```

## Class Method Headers
- Please try to make the method headers explain what that method is doing.
```
// Route to the profile page when the profile button is pressed
goToProfile = () => {};
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
  * Author: (if different from page author)
 */
export default class Progress extends Component {}
```

## Stylesheets
- Each route and component should have a corresponding stylesheet in the 
  src/style folder
- Route stylesheets should be named r_[ROUTE NAME].js and component stylesheets
  should be name c_[COMPONENT NAME].js
```
/**
 * Stylesheet for the Text Field component.
 * 
 * Authors: ?
 */

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    // Style the TextField component
    textField: {
        height: 30,
        color: "#434343",
        textAlign: "center"
    }
});
```