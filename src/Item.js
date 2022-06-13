import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

export default Item = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.taskContainer}>
                <Text style={styles.task}>{props.task}</Text>
                <TouchableOpacity onPress={() => props.deleteTask()}>
                    <AntDesign style={styles.delete} name="checkcircleo" size={24} color="#FF5B00" />
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 20,
       
    },
    indexContainer: {
        backgroundColor: '#fff',
        borderRadius: 12,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        
    },
   
    taskContainer: {
        backgroundColor: '#fff',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        minHeight: 50,
    },
    task: {
        color: '#3E3364',
        width: '90%',
        fontSize: 16,
    },
    delete: {
        marginLeft: 10,
    },
});