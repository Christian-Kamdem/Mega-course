const {NavigationView,contentView,ScrollView,statusBar} = require('tabris');
const appBasicsInformations = require('./helpers/appBasicsInformations.js');
statusBar.displayMode = 'default';
//statusBar.background = '';
const mainPage = require('./views/mainPage.js')();
const navigation = new NavigationView({layoutData: 'stretch'});
mainPage.appendTo(navigation);
navigation.appendTo(contentView);
