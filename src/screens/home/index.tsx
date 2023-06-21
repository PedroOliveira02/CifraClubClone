import React from "react";
import { 
  SafeAreaView, 
  ScrollView, 
  View, 
  Text, 
  Image,  
  TouchableWithoutFeedback
} from 'react-native';
import { styles } from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ButtonSelectionType } from "../../components/ButtonSelectionType";

const Home = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const email = (route.params as { emailField: string })?.emailField || '';

    const handleLoginClick = () => {
        navigation.navigate('Login' as never);
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView 
                contentContainerStyle={{ flexGrow: 1 }} 
                showsVerticalScrollIndicator={false} 
                stickyHeaderIndices={[0]} 
                overScrollMode="never"
            >
                <View>
                    <View style={styles.top}>
                        <Image 
                            style={styles.logo}
                            source={require('../../../assets/LogoCifraClub.png')}
                        />
                        {email == 'pedro@123.com' && 
                            <TouchableWithoutFeedback 
                                style={styles.btnLogin}
                                onPress={handleLoginClick}
                            >
                                <Image source={require('../../../assets/Pidy.jpg')} style={styles.ImgBtnLogin}/>
                            </TouchableWithoutFeedback>
                        }
                        {email != 'pedro@123.com' &&
                            <TouchableWithoutFeedback 
                                style={styles.btnLogin}
                                onPress={handleLoginClick}
                            >
                                <Text style={styles.textBtnLogin}>Log In</Text>
                            </TouchableWithoutFeedback>
                        }
                    </View>
                </View>
                <ButtonSelectionType />   
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;