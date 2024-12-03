import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, createTheme } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import { Avatar, Text } from '@rneui/themed';
import SwitchTheme from './src/components/SwitchTheme';

import Story from './src/components/Story';
import { Button } from '@rneui/base';

export default function App() {
    const [checked, setChecked] = useState(false);

    const theme = createTheme({
        lightColors: {
            primary: '#ff6347',
            background: '#ffffff',
        },
        darkColors: {
            primary: '#1e90ff',
            background: '#121212',
        },
        mode: checked ? 'dark' : 'light',
    });

    return (
        <SafeAreaProvider>
            <ThemeProvider theme={theme}>
                <View >
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                        <Story checked={checked} />
                        <Story checked={checked} />
                        <Story checked={checked} />
                        <Story checked={checked} />
                        <Story checked={checked} />
                        <Story checked={checked} />
                        <Story checked={checked} />
                        <Story checked={checked} />
                    </ScrollView>


                    <ScrollView contentContainerStyle={[{ backgroundColor: checked ? '#121212' : '#ffffff', height: "100%" }]}>
                        <View style={[styles.feedContainer, { backgroundColor: checked ? '#121212' : '#ffffff', height: "100%" }]}>
                            <Text style={styles.text}>Feed do Instagram</Text>

                            <Button>
                                Esse é um botão do Native Wind!
                            </Button>


                            <Text>Esse é um switch para trocar o tema, teste-o!</Text>
                            <SwitchTheme value={checked} setChecked={setChecked} />
                        </View>
                    </ScrollView>
                </View>
            </ThemeProvider>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    gradientWrapper: {
        padding: 3,
        borderRadius: 50,
    },
    avatar: {
        backgroundColor: 'black',
    },
    feedContainer: {
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        flexGrow: 1,
    },
    text: {
        fontSize: 16,
        color: '#333',
    },
});
