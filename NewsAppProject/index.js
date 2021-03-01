/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
// import Login from './src/pages/Login';
import Router from './src/Router';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Router);
