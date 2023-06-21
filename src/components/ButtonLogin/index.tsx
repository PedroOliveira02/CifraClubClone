import React from 'react';
import {  
  Text, 
  Image, 
  TouchableOpacity,  
  TouchableOpacityProps
} from 'react-native';
import { styles } from '../../screens/login/styles';

interface Props extends TouchableOpacityProps {
    text: string,
    styleText: object,
    icon?: any
}

export const ButtonLogin = ({
    text,
    styleText,
    icon, 
    ...rest
}: Props) => {
    return (
        <TouchableOpacity {...rest}>
            <Text style={styleText}>
                {icon &&
                    <Image source={icon} style={styles.iconImg}/>     
                }
                {icon &&
                    <Text>{'    '}</Text>
                }
                {text}
            </Text>
        </TouchableOpacity>
    )
}

