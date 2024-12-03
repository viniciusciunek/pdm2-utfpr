import React from 'react';
import { Switch, Icon } from '@rneui/themed';
import { View, StyleSheet } from 'react-native';

interface SwitchThemeProps {
    value: boolean;
    setChecked: (value: boolean) => void;
}

export default function SwitchTheme({ value, setChecked }: SwitchThemeProps) {
    return (
        <View style={styles.container}>
            <Icon
                name="moon"
                type="feather"
                size={24}
                color={value ? 'grey' : 'black'}
                style={styles.icon}
            />

            <Switch
                thumbColor={value ? 'yellow' : 'grey'}
                color="orange"
                value={value}
                onValueChange={(value) => setChecked(value)}
            />

            <Icon
                name="sun"
                type="feather"
                size={24}
                color={value ? 'yellow' : 'grey'}
                style={styles.icon}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    icon: {
        marginHorizontal: 5,
    },
});
