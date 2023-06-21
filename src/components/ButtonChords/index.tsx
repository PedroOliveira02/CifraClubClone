import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from '../../screens/home/styles';

type Props = {
    showMoreSongs: boolean,
    setShowMoreSongs: (showMoreSongs: boolean) => void,
    text1: string,
    text2: string,
    styleTouch: object,
    styleText: object
}

export const ButtonChords = (
    { showMoreSongs, setShowMoreSongs, text1='', text2='', styleTouch={}, styleText={} }: Props
  ) => {
    
    const handleViewMoreChords = () => {
        if (!showMoreSongs) {
            setShowMoreSongs(true)
        } else {
            setShowMoreSongs(false)
        }
    }

    return (
        <View  style={styles.btnTopChords}>
            {!showMoreSongs &&
                <View>
                    <TouchableOpacity onPress={handleViewMoreChords} style={styleTouch}>
                        <Text style={styleText}>{text1}</Text>
                    </TouchableOpacity>
                </View>
            }
            {showMoreSongs && 
                <View>
                    <TouchableOpacity onPress={handleViewMoreChords} style={styleTouch}>
                        <Text style={styleText}>{text2}</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
    )

}