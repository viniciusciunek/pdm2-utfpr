import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';
import { Avatar } from '@rneui/themed';

interface StoryProps {
    checked: boolean;
}

export default function Story({ checked }: StoryProps) {
    return (
        <LinearGradient
            colors={['#feda75', '#fa7e1e', '#d62976', '#962fbf', '#4f5bd5']}
            style={styles.gradientWrapper} >
            <Avatar
                size={80}
                rounded
                source={{ uri: 'https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png' }}
                containerStyle={[styles.avatar, { backgroundColor: checked ? '#121212' : '#ffffff' }]}
            />
        </LinearGradient>
    )
}


const styles = StyleSheet.create({
    avatar: {
        backgroundColor: 'black',
    },
    gradientWrapper: {
        padding: 3,
        margin: 2,
        height: 86,
        borderRadius: 50,
        marginTop: 32
    },
});
