import {Stack} from 'expo-router';
import { useCallback } from 'react';
import {useFonts} from "expo-font";
import * as Splashscreen from 'expo-splash-screen';

Splashscreen.preventAutoHideAsync(); //this will load splash screen when the app is loading

const Layout = () => {

    const[fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if(fontsLoaded){ // show the home page if fonts are loaded
            await Splashscreen.hideAsync(); // hideasync function will call the preventAutoAsync() method
        }
    },[fontsLoaded])

    if(!fontsLoaded) return null;

    return <Stack onLayout={onLayoutRootView}/>
}

export default Layout;