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

export const AllTypeMusic = ({ btnViewChords }: Props) => {

  const [showMoreSongs, setShowMoreSongs] = useState(false)

  return (
    <View>
      <ScrollView horizontal={true} style={styles.areaImgBand}>
        <Image style={styles.imgBand} source={require('../../../assets/manuChao.jpg')} />
        <Image style={styles.imgBand} source={require('../../../assets/kasabian.jpg')} />
        <Image style={styles.imgBand} source={require('../../../assets/aurora.jpg')} />
        <Image style={styles.imgBand} source={require('../../../assets/idles.jpg')} />
        <Image style={styles.imgBand} source={require('../../../assets/fortunateYouth.jpg')} />
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
              <Image style={styles.miniImgBand} source={require('../../../assets/kasabian.jpg')} />
              <Text style={styles.numberSong}>1</Text>
              <View style={styles.areaTitleBand}>
                <View style={styles.areaNameCheck}>
                  <Text style={styles.nameSong}>Fire</Text>
                  <Image source={require('../../../assets/check.png')} style={styles.check} />
                </View>
                <Text style={styles.nameBand}>Kasabian</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSongs}>
              <Image style={styles.miniImgBand} source={require('../../../assets/fortunateYouth.jpg')} />
              <Text style={styles.numberSong}>2</Text>
              <View style={styles.areaTitleBand}>
                <View style={styles.areaNameCheck}>
                  <Text style={styles.nameSong}>Burn One</Text>
                  <Image source={require('../../../assets/check.png')} style={styles.check} />
                </View>
                <Text style={styles.nameBand}>Fortunate Youth</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSongs}>
              <Image style={styles.miniImgBand} source={require('../../../assets/manuChao.jpg')} />
              <Text style={styles.numberSong}>3</Text>
              <View style={styles.areaTitleBand}>
                <View style={styles.areaNameCheck}>
                  <Text style={styles.nameSong}>Me Gustas Tu</Text>
                  <Image source={require('../../../assets/check.png')} style={styles.check} />
                </View>
                <Text style={styles.nameBand}>Manu Chao</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSongs}>
              <Image style={styles.miniImgBand} source={require('../../../assets/aurora.jpg')} />
              <Text style={styles.numberSong}>4</Text>
              <View style={styles.areaTitleBand}>
                <View style={styles.areaNameCheck}>
                  <Text style={styles.nameSong}>Daydreamer</Text>
                  <Image source={require('../../../assets/check.png')} style={styles.check} />
                </View>
                <Text style={styles.nameBand}>AURORA</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSongs}>
            <Image style={styles.miniImgBand} source={require('../../../assets/idles.jpg')} />
            <Text style={styles.numberSong}>5</Text>
            <View style={styles.areaTitleBand}>
              <View style={styles.areaNameCheck}>
                <Text style={styles.nameSong}>Never Fight A Man With A Perm</Text>
                <Image source={require('../../../assets/check.png')} style={styles.check} />
              </View>
              <Text style={styles.nameBand}>Idles</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSongs}>
            <Image style={styles.miniImgBand} source={require('../../../assets/lorde.jpg')} />
            <Text style={styles.numberSong}>6</Text>
            <View style={styles.areaTitleBand}>
              <View style={styles.areaNameCheck}>
                <Text style={styles.nameSong}>Team</Text>
                <Image source={require('../../../assets/check.png')} style={styles.check} />
              </View>
              <Text style={styles.nameBand}>Lorde</Text>
            </View>
          </TouchableOpacity>
        {showMoreSongs &&
          <View>
            <TouchableOpacity style={styles.btnSongs}>
              <Image style={styles.miniImgBand} source={require('../../../assets/fortunateYouth.jpg')} />
              <Text style={styles.numberSong}>7</Text>
              <View style={styles.areaTitleBand}>
                <View style={styles.areaNameCheck}>
                  <Text style={styles.nameSong}>Sweet Sensi</Text>
                  <Image source={require('../../../assets/check.png')} style={styles.check} />
                </View>
                <Text style={styles.nameBand}>Fortunate Youth</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSongs}>
              <Image style={styles.miniImgBand} source={require('../../../assets/aurora.jpg')} />
              <Text style={styles.numberSong}>8</Text>
              <View style={styles.areaTitleBand}>
                <View style={styles.areaNameCheck}>
                  <Text style={styles.nameSong}>All Is Soft Inside</Text>
                  <Image source={require('../../../assets/check.png')} style={styles.check} />
                </View>
                <Text style={styles.nameBand}>AURORA</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSongs}>
              <Image style={styles.miniImgBand} source={require('../../../assets/manuChao.jpg')} />
              <Text style={styles.numberSong}>9</Text>
              <View style={styles.areaTitleBand}>
                <View style={styles.areaNameCheck}>
                  <Text style={styles.nameSong}>Mr. Bobby</Text>
                  <Image source={require('../../../assets/check.png')} style={styles.check} />
                </View>
                <Text style={styles.nameBand}>Manu Chao</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSongs}>
              <Image style={styles.miniImgBand} source={require('../../../assets/kasabian.jpg')} />
              <Text style={styles.numberSong2}>10</Text>
              <View style={styles.areaTitleBand}>
                <View style={styles.areaNameCheck}>
                  <Text style={styles.nameSong}>Vlad The Impaler</Text>
                  <Image source={require('../../../assets/check.png')} style={styles.check} />
                </View>
                <Text style={styles.nameBand}>Kasabian</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSongs}>
              <Image style={styles.miniImgBand} source={require('../../../assets/idles.jpg')} />
              <Text style={styles.numberSong2}>11</Text>
              <View style={styles.areaTitleBand}>
                <View style={styles.areaNameCheck}>
                  <Text style={styles.nameSong}>Mother</Text>
                  <Image source={require('../../../assets/check.png')} style={styles.check} />
                </View>
                <Text style={styles.nameBand}>Idles</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSongs}>
              <Image style={styles.miniImgBand} source={require('../../../assets/lorde.jpg')} />
              <Text style={styles.numberSong2}>12</Text>
              <View style={styles.areaTitleBand}>
                <View style={styles.areaNameCheck}>
                  <Text style={styles.nameSong}>Sober</Text>
                  <Image source={require('../../../assets/check.png')} style={styles.check} />
                </View>
                <Text style={styles.nameBand}>Lorde</Text>
              </View>
            </TouchableOpacity>
          </View>    
        }
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