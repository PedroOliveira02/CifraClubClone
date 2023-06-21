import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from '../../screens/home/styles';
import { AllTypeMusic } from '../AllTypeMusic';
import { ReggeaMusic } from '../ReggeaMusic';
import { RockMusic } from '../RockMusic';
import { PopMusic } from '../PopMusic';

export const ButtonSelectionType = () => {

    const [all, setAll] = useState(true);
    const [rock, setRock] = useState(false);  
    const [pop, setPop] = useState(false);  
    const [reggea, setReggea] = useState(false); 
    const [btnTypeAll2, setBtnTypeAll2] = useState<object[]>([ styles.btnType2 ]);
    const [btnTypeTextAll2, setBtnTypeTextAll2] = useState<object[]>([ styles.btnTypeText2 ]);
    const [btnTypeRock, setBtnTypeRock] = useState<object[]>([ styles.btnType ]);
    const [btnTypeTextRock, setBtnTypeTextRock] = useState<object[]>([ styles.btnTypeText ]);
    const [btnTypePop, setBtnTypePop] = useState<object[]>([ styles.btnType ]);
    const [btnTypeTextPop, setBtnTypeTextPop] = useState<object[]>([ styles.btnTypeText ]);
    const [btnTypeReggea, setBtnTypeReggea] = useState<object[]>([ styles.btnType ]);
    const [btnTypeTextReggea, setBtnTypeTextReggea] = useState<object[]>([ styles.btnTypeText ]);
    const [btnViewChords, setBtnViewChords] = useState(false)


    const handleAll = () => {
        setAll(true)
        setRock(false)
        setPop(false)
        setReggea(false)
        setBtnTypeAll2([styles.btnType2])
        setBtnTypeTextAll2([styles.btnTypeText2])
        setBtnTypeRock([styles.btnType])
        setBtnTypeTextRock([styles.btnTypeText])
        setBtnTypePop([styles.btnType]) 
        setBtnTypeTextPop([styles.btnTypeText]) 
        setBtnTypeReggea([styles.btnType]) 
        setBtnTypeTextReggea([styles.btnTypeText])
        setBtnViewChords(false)  
    }

    const handleRock = () => {
        setRock(true)
        setAll(false)
        setPop(false)
        setReggea(false)
        setBtnTypeRock([styles.btnType2])
        setBtnTypeTextRock([styles.btnTypeText2])
        setBtnTypeAll2([styles.btnType])
        setBtnTypeTextAll2([styles.btnTypeText])
        setBtnTypePop([styles.btnType])
        setBtnTypeTextPop([styles.btnTypeText])
        setBtnTypeReggea([styles.btnType])
        setBtnTypeTextReggea([styles.btnTypeText])
        setBtnViewChords(true)
    }

    const handlePop = () => {
        setPop(true)
        setAll(false)
        setRock(false)
        setReggea(false)
        setBtnTypePop([styles.btnType2])
        setBtnTypeTextPop([styles.btnTypeText2])
        setBtnTypeAll2([styles.btnType])
        setBtnTypeTextAll2([styles.btnTypeText])
        setBtnTypeRock([styles.btnType])
        setBtnTypeTextRock([styles.btnTypeText])
        setBtnTypeReggea([styles.btnType])
        setBtnTypeTextReggea([styles.btnTypeText])
        setBtnViewChords(true)
    }

    const handleReggea = () => {
        setReggea(true)
        setAll(false)
        setRock(false)
        setPop(false)
        setBtnTypeReggea([styles.btnType2])
        setBtnTypeTextReggea([styles.btnTypeText2])
        setBtnTypeAll2([styles.btnType])
        setBtnTypeTextAll2([styles.btnTypeText])
        setBtnTypeRock([styles.btnType])
        setBtnTypeTextRock([styles.btnTypeText])
        setBtnTypePop([styles.btnType])
        setBtnTypeTextPop([styles.btnTypeText]) 
        setBtnViewChords(true)  
    }

    return (
        <><View style={styles.areaBtnType}>
            <TouchableOpacity style={btnTypeAll2} onPress={handleAll}>
                <Text style={btnTypeTextAll2}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={btnTypeRock} onPress={handleRock}>
                <Text style={btnTypeTextRock}>Rock</Text>
            </TouchableOpacity>
            <TouchableOpacity style={btnTypePop} onPress={handlePop}>
                <Text style={btnTypeTextPop}>Pop</Text>
            </TouchableOpacity>
            <TouchableOpacity style={btnTypeReggea} onPress={handleReggea}>
                <Text style={btnTypeTextReggea}>Reggea</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnType}>
                <Text style={styles.btnTypeText}>More</Text>
            </TouchableOpacity>
        </View>
        <View>
            {all &&
                <AllTypeMusic 
                    btnViewChords={btnViewChords}
                />}
            {rock &&
                <RockMusic
                    btnViewChords={btnViewChords}
                />}
            {pop &&
                <PopMusic 
                    btnViewChords={btnViewChords}
                />}
            {reggea &&
                <ReggeaMusic 
                    btnViewChords={btnViewChords}
                />}
        </View></>   
    )
}