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

export const ReggeaMusic = ({ btnViewChords }: Props) => {

    const [showMoreSongs, setShowMoreSongs] = useState(false)

    return (
        <View>
            <ScrollView horizontal={true} style={styles.areaImgBand}>
                <Image style={styles.imgBand} source={require('../../../assets/manuChao.jpg')} />
                <Image style={styles.imgBand} source={require('../../../assets/fortunateYouth.jpg')} />
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
                    <Image style={styles.miniImgBand} source={require('../../../assets/manuChao.jpg')} />
                    <Text style={styles.numberSong}>1</Text>
                    <View style={styles.areaTitleBand}>
                        <View style={styles.areaNameCheck}>
                            <Text style={styles.nameSong}>Me Gustas Tu</Text>
                            <Image source={require('../../../assets/check.png')} style={styles.check} />
                        </View>
                        <Text style={styles.nameBand}>Manu Chao</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnSongs}>
                    <Image style={styles.miniImgBand} source={require('../../../assets/manuChao.jpg')} />
                    <Text style={styles.numberSong}>2</Text>
                    <View style={styles.areaTitleBand}>
                        <View style={styles.areaNameCheck}>
                            <Text style={styles.nameSong}>Mr. Bobby</Text>
                            <Image source={require('../../../assets/check.png')} style={styles.check} />
                        </View>
                        <Text style={styles.nameBand}>Manu Chao</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnSongs}>
                    <Image style={styles.miniImgBand} source={require('../../../assets/fortunateYouth.jpg')} />
                    <Text style={styles.numberSong}>3</Text>
                    <View style={styles.areaTitleBand}>
                        <View style={styles.areaNameCheck}>
                            <Text style={styles.nameSong}>Sweet Sensi</Text>
                            <Image source={require('../../../assets/check.png')} style={styles.check} />
                        </View>
                        <Text style={styles.nameBand}>Fortunate Youth</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnSongs}>
                    <Image style={styles.miniImgBand} source={require('../../../assets/fortunateYouth.jpg')} />
                    <Text style={styles.numberSong}>4</Text>
                    <View style={styles.areaTitleBand}>
                        <View style={styles.areaNameCheck}>
                            <Text style={styles.nameSong}>Burn One</Text>
                            <Image source={require('../../../assets/check.png')} style={styles.check} />
                        </View>
                        <Text style={styles.nameBand}>Fortunate Youth</Text>
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