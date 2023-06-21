import React, { useState } from 'react';
import {  
    View,
    Text, 
    Image, 
    TouchableOpacity, 
    ScrollView
  } from 'react-native';
import { styles } from '../../screens/home/styles';
import { ButtonChords } from '../ButtonChords';

type Props = {
    btnViewChords: boolean,
}

export const PopMusic = ({ btnViewChords }: Props) => {

    const [showMoreSongs, setShowMoreSongs] = useState(false)

    return (
        <View>
            <ScrollView horizontal={true} style={styles.areaImgBand}>
                <Image style={styles.imgBand} source={require('../../../assets/aurora.jpg')} />
                <Image style={styles.imgBand} source={require('../../../assets/lorde.jpg')} />
            </ScrollView>
            <ButtonChords
                showMoreSongs={showMoreSongs}
                setShowMoreSongs={setShowMoreSongs}
                text1='View top chords'
                text2="Close top chords"
                styleText={styles.textChords}
                styleTouch={{}}
            />
            <View style={styles.areaSongs}>
                <TouchableOpacity style={styles.btnSongs}>
                    <Image style={styles.miniImgBand} source={require('../../../assets/aurora.jpg')} />
                    <Text style={styles.numberSong}>1</Text>
                    <View style={styles.areaTitleBand}>
                        <View style={styles.areaNameCheck}>
                            <Text style={styles.nameSong}>Daydreamer</Text>
                            <Image source={require('../../../assets/check.png')} style={styles.check} />
                        </View>
                        <Text style={styles.nameBand}>AURORA</Text>
                    </View>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.btnSongs}>
                    <Image style={styles.miniImgBand} source={require('../../../assets/aurora.jpg')} />
                    <Text style={styles.numberSong}>2</Text>
                    <View style={styles.areaTitleBand}>
                        <View style={styles.areaNameCheck}>
                            <Text style={styles.nameSong}>All Is Soft Inside</Text>
                            <Image source={require('../../../assets/check.png')} style={styles.check} />
                        </View>
                        <Text style={styles.nameBand}>AURORA</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnSongs}>
                    <Image style={styles.miniImgBand} source={require('../../../assets/lorde.jpg')} />
                    <Text style={styles.numberSong}>3</Text>
                    <View style={styles.areaTitleBand}>
                        <View style={styles.areaNameCheck}>
                            <Text style={styles.nameSong}>Team</Text>
                            <Image source={require('../../../assets/check.png')} style={styles.check} />
                        </View>
                        <Text style={styles.nameBand}>Lorde</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnSongs}>
                    <Image style={styles.miniImgBand} source={require('../../../assets/lorde.jpg')} />
                    <Text style={styles.numberSong}>4</Text>
                    <View style={styles.areaTitleBand}>
                        <View style={styles.areaNameCheck}>
                            <Text style={styles.nameSong}>Sober</Text>
                            <Image source={require('../../../assets/check.png')} style={styles.check} />
                        </View>
                        <Text style={styles.nameBand}>Lorde</Text>
                    </View>
                </TouchableOpacity>
                <ButtonChords
                    showMoreSongs={showMoreSongs}
                    setShowMoreSongs={setShowMoreSongs}
                    text1='View more chords'
                    text2="Close more chords"
                    styleText={styles.textViewChords}
                    styleTouch={btnViewChords ? styles.btnViewChords2 : styles.btnViewChords}
                />
            </View>
        </View>
    )
}