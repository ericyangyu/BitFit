/**
 * Stylesheet for the progress page.
 * 
 * Authors: ?
 */

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e7e7e7',
        marginTop: 0,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    backImage: {
        width: "100%",
        height: "25%",
        opacity: 1.8,
        position: "absolute"
    },
    header: {
        marginTop: "2.5%",
        fontSize: 65,
        color: 'white',
        textAlign: 'center',
        fontWeight: '100',
        marginBottom: "15%"
    },
    whiteBox1: {
        backgroundColor: 'white',
        width: "90%",
        borderRadius: 20,
        justifyContent: 'center',
        padding: 25
    },
    levelText: {
        width: "100%",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: 'center',
        fontWeight: '100',
    },
    whiteBox2: {
        backgroundColor: 'white',
        marginTop: "7.5%",
        marginBottom: "15%",
        width: "90%",
        borderRadius: 20,
        justifyContent: 'space-between',
        paddingTop: 20
    },
    progressText: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '100',
    },
    row: {
        height: 40
    },
    nav: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-around',
        width: "100%",
        backgroundColor: "#778899",
        height: "10%"
    },
    navText: {
        color: 'white',
        marginTop: "5%",
        textAlign: "center",
        width: "100%"
    }

/*
    progressbar: {
        marginTop: 13
    },
    imageStyle: {
        width: 65,
        height: 65,
        backgroundColor: 'white',
        borderRadius: 100
    },
    buttonStyle: {
        marginTop: 10,
        marginBottom: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#212143',
        borderRadius: 10,
        borderColor: '#fff',
    },
    buttonTextStyle: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '100',
        marginBottom: 0,
        color: '#fff'
    },
    headerStyle: {
        fontSize: 50,
        color: 'white',
        textAlign: 'center',
        fontWeight: '100',

    },
    textStyle: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '100',
        marginBottom: 0
    },
    textStyle2: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '100',
        marginBottom: 0, 
    },
    buttonView: {
        backgroundColor: '#e7e7e7',
        marginTop: 115,
        marginLeft: 0,
        marginRight: 0,
        alignItems: 'center'
    },
    text: {
        color: "#ffffff",
        textAlign: "center",
        height: 26,
        fontSize: 13,
        fontWeight: '100',
        paddingBottom: "30%"
    },
    disabled: {
        opacity: 0.4
    },
     buttonContainer: {
        width: "101%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#778899",
        borderColor: '#778899',
        paddingBottom: "50%",
        paddingTop: "15%",
        paddingVertical: 10,
        borderRadius: 0,
        borderWidth: StyleSheet.hairlineWidth,
    } */
});

/*
<Grid style={styles.container}>
<Row>
    <Col>
            <Image
                style={{ width: "100%", height: "100%", opacity: 1.8, position: 'absolute' }}
                source={blue}
            />
            <NavBar
                left={{ uri: `data:image/gif;base64,${this.state.avatar}` }}
                leftOnPress={this.goToProfile}>
            </NavBar>
            <Text style={styles.headerStyle}>Hi {this.state.fullname}!</Text>
    </Col>
</Row>
<Row>
    <View elevation={5} style={styles.whiteBox1}>
        <Text style={styles.textStyle2}>Overall Level: {this.state.overallLv} </Text>
    </View>

</Row>
<Row>
    <View elevation={5} style={styles.whiteBox2}>

        <Row>
            <Col><Text style={styles.textStyle}>Focus</Text></Col>
            <Col><Text style={styles.textStyle}>Progress</Text></Col>
            <Col><Text style={styles.textStyle}>Level</Text></Col>
        </Row>
        <Row>
            <Col>
                <Text style={styles.textStyle}>{this.state.body_parts[0]}</Text>
            </Col>
            <Col>
                <ProgressBarAnimated
                    useNativeDriver={true}
                    width={110}
                    value={this.state.progress[this.state.body_parts[0]].progressBar}
                    backgroundColorOnComplete="#6CC644"
                />
            </Col>
            <Col>
                <Text style={styles.textStyle}>{this.state.progress[this.state.body_parts[0]].level}</Text>
            </Col>
        </Row>

        <Row>
            <Col>
                <Text style={styles.textStyle}>{this.state.body_parts[1]}</Text>
            </Col>
            <Col>
                <ProgressBarAnimated
                    useNativeDriver={true}
                    width={110}
                    value={this.state.progress[this.state.body_parts[1]].progressBar}
                    backgroundColorOnComplete="#6CC644"
                />
            </Col>
            <Col>
                <Text style={styles.textStyle}>{this.state.progress[this.state.body_parts[1]].level}</Text>
            </Col>
        </Row>
        <Row>
            <Col>
                <Text style={styles.textStyle}>{this.state.body_parts[2]}</Text>
            </Col>
            <Col>
                <ProgressBarAnimated
                    useNativeDriver={true}
                    width={110}
                    value={this.state.progress[this.state.body_parts[2]].progressBar}
                    backgroundColorOnComplete="#6CC644"
                />
            </Col>
            <Col>
                <Text style={styles.textStyle}>{this.state.progress[this.state.body_parts[2]].level}</Text>
            </Col>
        </Row>
        <Row>
            <Col>
                <Text style={styles.textStyle}>{this.state.body_parts[3]}</Text>
            </Col>
            <Col>
                <ProgressBarAnimated
                    useNativeDriver={true}
                    width={110}
                    value={this.state.progress[this.state.body_parts[3]].progressBar}
                    backgroundColorOnComplete="#6CC644"
                />
            </Col>
            <Col>
                <Text style={styles.textStyle}>{this.state.progress[this.state.body_parts[3]].level}</Text>
            </Col>
        </Row><Row>
            <Col>
                <Text style={styles.textStyle}>{this.state.body_parts[4]}</Text>
            </Col>
            <Col>
                <ProgressBarAnimated
                    useNativeDriver={true}
                    width={110}
                    value={this.state.progress[this.state.body_parts[4]].progressBar}
                    backgroundColorOnComplete="#6CC644"
                />
            </Col>
            <Col>
                <Text style={styles.textStyle}>{this.state.progress[this.state.body_parts[4]].level}</Text>
            </Col>
        </Row>
    </View>
</Row>

<Row>
    <Col>
        <View style={styles.buttonView}>
        <TouchableOpacity style={styles.buttonContainer} onPress={this.goToMainFocus}>
            <Icon style={{marginTop: "5%"}} size="30%" color="#FFFFFF" name='timer' />
            <Text style={styles.text}>Workout</Text>
        </TouchableOpacity>
        </View>
    </Col>
    <Col>
        <View style={styles.buttonView}>
        <TouchableOpacity style={styles.buttonContainer} onPress={this.goToTrophy}>
            <Icon style={{marginTop: "5%"}} size="30%" color="#FFFFFF" name='lock' />
            <Text style={styles.text}>Trophy Case</Text>
            
        </TouchableOpacity>
        </View>
    </Col>
    <Col>
        <View style={styles.buttonView}>
        <TouchableOpacity style={styles.buttonContainer} onPress={this.goToActivityLog}>
            <Icon style={{marginTop: "5%"}} size="30%" color="#FFFFFF" name='assignment' />
            <Text style={styles.text}>Activity Log</Text>
        </TouchableOpacity>
        </View>
    </Col>
</Row>
</Grid> */