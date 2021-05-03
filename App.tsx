import React, {useEffect} from 'react';
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading'
import * as Notifications from 'expo-notifications';

import Routes from './src/routes';
import { PlantProps } from './src/libs/storage';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  useEffect(() => {
    // Recuperar dados passados dentro da notificacao
    // const subscription = Notifications.addNotificationReceivedListener(
    //   async notification => {
    //     const data = notification.request.content.data.plant as PlantProps;
    //     console.log(data);
    //   });
    //   return () => subscription.remove();


    // Excluir todas as notificacoes
    // async function notifications() {
    //   await Notifications.cancelAllScheduledNotificationsAsync();
    //   const data = await Notifications.getAllScheduledNotificationsAsync();
    //   console.log("########################### Notificacoes agendadas ###############")
    //   console.log(data);
    // }
    // notifications();
  },[]);
  
  if(!fontsLoaded)
    return <AppLoading />

  return (
    <Routes />
  );
}
