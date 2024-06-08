import { useCallback } from 'react';
import { useFonts } from 'expo-font';

export default function addFontes(){

  const [fontsLoaded] = useFonts({
    'FlameBold': require('../../assets/fonts/FlameBold.otf'),
    'Insanibc': require('../../assets/fonts/Insanibc.ttf'),
    'Insanibu': require('../../assets/fonts/Insanibu.ttf'),
    'UniformBlack': require('../../assets/fonts/UniformBlack.otf'),
    'UniformBold': require('../../assets/fonts/UniformBold.otf'),
    'UniformCondensedBlack': require('../../assets/fonts/UniformCondensedBlack.otf'),
    'UniformCondensedBold': require('../../assets/fonts/UniformCondensedBold.otf'),
    'UniformCondensedLight': require('../../assets/fonts/UniformCondensedLight.otf'),
    'UniformCondensedMedium': require('../../assets/fonts/UniformCondensedMedium.otf'),
    'UniformCondensed': require('../../assets/fonts/UniformCondensed.otf'),
    'UniformCondensedUltra': require('../../assets/fonts/UniformCondensedUltra.otf'),
    'UniformExtraCondensedBlack': require('../../assets/fonts/UniformExtraCondensedBlack.otf'),
    'UniformExtraCondensedBold': require('../../assets/fonts/UniformExtraCondensedBold.otf'),
    'UniformExtraCondensedLight': require('../../assets/fonts/UniformExtraCondensedLight.otf'),
    'UniformExtraCondensedMedium': require('../../assets/fonts/UniformExtraCondensedMedium.otf'),
    'UniformExtraCondensed': require('../../assets/fonts/UniformExtraCondensed.otf'),
    'UniformExtraCondensedUltra': require('../../assets/fonts/UniformExtraCondensedUltra.otf'),
    'UniformLight': require('../../assets/fonts/UniformLight.otf'),
    'UniformMedium': require('../../assets/fonts/UniformMedium.otf'),
    'Uniform': require('../../assets/fonts/Uniform.otf'),
    'UniformUltra': require('../../assets/fonts/UniformUltra.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

}