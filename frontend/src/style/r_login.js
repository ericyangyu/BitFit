/**
 * Stylesheet for the login page.
 * 
 * Authors: ?
 */

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e7e7e7",
        alignItems: "center",
        justifyContent: "space-between"
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 0.8
    },
    logo: {
        flex: 1,
        width: "65%",
        resizeMode: "contain",
        alignSelf: "center",
        marginBottom: "5%",
        marginTop: "10%"
    },
    buttonTextStyle: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '100',
        color: '#778899',
    },
    form: {
        justifyContent: "center",
        backgroundColor: 'white',
        width: '100%',
        padding: 20,
        borderRadius: 15,
        marginBottom: "10%"
    }
});
/*
<View style={styles.container}>
<Image style={styles.backgroundImage} source={blue} />
<TouchableOpacity onPress={this._pickImage}>
    <Image
        style={styles.photoStyle}
        resizeMode='cover'
        source={{ uri: `data:image/gif;base64,${this.state.avatar}` }}
    />
</TouchableOpacity>
<KeyboardAvoidingView
    behavior={Platform.OS == "ios" ? "padding" : "height"}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.form}>
            <Input
                value={this.state.username}
                onChangeText={this.handleUserNameChange}
                placeholder={"Username..."}
            />
            <Input
                value={this.state.fullname}
                onChangeText={this.handleFullNameChange}
                placeholder={"Full name..."}
            />
            <Input
                value={this.state.email}
                onChangeText={this.handleEmailChange}
                placeholder={"Email..."}
            />
            <Input
                value={this.state.password}
                onChangeText={this.handlePasswordChange}
                placeholder={"Password..."}
            />
            <Button
                label={"Sign Up"}
                onPress={this.handleSignUpPress}
                disabled={!this.state.username || !this.state.fullname || !this.state.email || !this.state.password}

            />
            <TouchableOpacity onPress={this.goToLogIn} >
                <Text style={styles.buttonTextStyle}>
                    Already have an account? Login here.
        </Text>
            </TouchableOpacity>
        </View>
    </TouchableWithoutFeedback>
</KeyboardAvoidingView>
</View> */