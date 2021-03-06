import React from 'react';
import { StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card, Text, Avatar, IconButton } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 


// Scroll View??
// Add onPress event for save
// TO DO: Add onPress events to navigate to respective pages for each card 

export default class PetitionCards extends React.Component{
    
    onPress = () => {
    }

    render () {
        return (
            <ScrollView style={styles.container}>
                <View style = {styles.cardContainer}>
                    <TouchableOpacity style={styles.touchArea}> 
                        <View style={styles.cardView}>
                            <Card style={styles.cards}>
                            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                <Text>    </Text>
                                <Icon name="pencil" size={24} color="#8390FA"></Icon>
                                <Text>  </Text>
                                <Text style= {styles.title}>Stand with Breonna Taylor</Text>
                                            
                            </View>
                                <Card.Content style={styles.cardInfo}>
                                    <Text>Breonna Taylor was an award-winning EMT and model citizen. She loved her family and community, working at two hospitals as an... </Text>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <Text></Text>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                            <AntDesign name="upcircleo" size={14} color="black" /> 
                                            <Text> 24 </Text>
                                            <AntDesign name="downcircleo" size={14} color="black" />
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                            <AntDesign name="exclamationcircleo" size={14} color="black" > report  </AntDesign>
                                            <AntDesign name="sharealt" size={14} color="black" > share  </AntDesign>
                                            <AntDesign name="hearto" size={14} color="black" > save  </AntDesign>  

                                        </View>

                                    </View>
                                </Card.Content>
                            </Card>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {styles.cardContainer}>
                <TouchableOpacity style={styles.touchArea}> 
                        <View style={styles.cardView}>
                            <Card style={styles.cards}>
                            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                <Text>    </Text>
                                <Icon name="pencil" size={24} color="#8390FA"></Icon>
                                <Text>  </Text>
                                <Text style= {styles.title}>Defund The Police</Text>
                                            
                            </View>
                                <Card.Content style={styles.cardInfo}>
                                    <Text>Join this movement, under the Black Lives Matter movement, which aims to defund law enforcement and redirect funds to invest in Black communities...</Text>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <Text></Text>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                            <AntDesign name="upcircleo" size={14} color="black" /> 
                                            <Text> 20 </Text>
                                            <AntDesign name="downcircleo" size={14} color="black" />
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                            <AntDesign name="exclamationcircleo" size={14} color="black" > report  </AntDesign>
                                            <AntDesign name="sharealt" size={14} color="black" > share  </AntDesign>
                                            <AntDesign name="hearto" size={14} color="black" > save  </AntDesign>  

                                        </View>

                                    </View>
                                </Card.Content>
                            </Card>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {styles.cardContainer}>
                <TouchableOpacity style={styles.touchArea}> 
                        <View style={styles.cardView}>
                            <Card style={styles.cards}>
                            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                <Text>    </Text>
                                <Icon name="pencil" size={24} color="#8390FA"></Icon>
                                <Text>  </Text>
                                <Text style= {styles.title}>Justice for Ahmaud Arbery</Text>
                                            
                            </View>
                                <Card.Content style={styles.cardInfo}>
                                    <Text>In honor of Ahmaud Arbery, who was killed while jogging—unarmed—in Georgia... </Text>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <Text></Text>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                            <AntDesign name="upcircleo" size={14} color="black" /> 
                                            <Text> 16 </Text>
                                            <AntDesign name="downcircleo" size={14} color="black" />
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                            <AntDesign name="exclamationcircleo" size={14} color="black" > report  </AntDesign>
                                            <AntDesign name="sharealt" size={14} color="black" > share  </AntDesign>
                                            <AntDesign name="hearto" size={14} color="black" > save  </AntDesign>  

                                        </View>

                                    </View>
                                </Card.Content>
                            </Card>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {styles.cardContainer}>
                <TouchableOpacity style={styles.touchArea}> 
                        <View style={styles.cardView}>
                            <Card style={styles.cards}>
                            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                <Text>    </Text>
                                <Icon name="pencil" size={24} color="#8390FA"></Icon>
                                <Text>  </Text>
                                <Text style= {styles.title}>Hands Up Act</Text>
                                            
                            </View>
                                <Card.Content style={styles.cardInfo}>
                                    <Text>Sign this petetion in support of the Hands Up Act which proposes punishment for police officers shooting unarmed citizens... </Text>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <Text></Text>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                            <AntDesign name="upcircleo" size={14} color="black" /> 
                                            <Text> 12 </Text>
                                            <AntDesign name="downcircleo" size={14} color="black" />
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                            <AntDesign name="exclamationcircleo" size={14} color="black" > report  </AntDesign>
                                            <AntDesign name="sharealt" size={14} color="black" > share  </AntDesign>
                                            <AntDesign name="hearto" size={14} color="black" > save  </AntDesign>  

                                        </View>

                                    </View>
                                </Card.Content>
                            </Card>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    cardContainer: {
      flexDirection: 'row',
      paddingTop: '0%',
    },
    cardView: {
      alignItems: 'center',  
    },
    touchArea: {
      width: '100%',
      paddingTop: '1%',
    },
    container: {
      flex: 2,
      backgroundColor: 'gainsboro', 
    },

    cardRows: {
      paddingTop: '2%',  
    },
    cards: {
      width: '100%',
      marginTop: '0%',
      paddingTop: '0%'
    },
    pageContainer: {
      paddingTop: '0%',
    },
    title: {  
        fontSize: 16,
        color: "#8390FA",
        fontWeight: 'bold',
        marginBottom: '2%',
        marginTop: '4%',
    },
    cardInfo: {
        width: '100%',
        marginTop: "0%",
    
    },
  });