module.exports = ()=>{
  const {Page,ScrollView,Picker,TextInput,Date,
    Composite,ImageView,Button,TextView} = require('tabris');
  const mainPage = new Page({title:'Connexion',
/*image:'./src/icons/menu.png'*/});
  const dataToSend = {};
  const scrollView = new ScrollView({
    top:0,
    bottom:0,
    left:0,
    right:0
  }).appendTo(mainPage);
  const imageComposite = new Composite({
    top:15,
    left:50,
    right:50,
    height:150
  }).appendTo(scrollView);
  const image = new ImageView({
    scaleMode:'fit',
    top:0,
    left:0,
    right:0,
    image:'./src/images/cheval-cavalier.jpeg'
  }).appendTo(imageComposite);
  const formComposite = new Composite({
    top:180,
    left:30,
    right:30,
    height:350,
    background:'#ffffff',
    elevation:2
  }).appendTo(scrollView);
  const welcomeMessage = new TextView({
    text:'MEGA COURSE',
    centerX:0,
    font:'20px roboto medium'
    top:5
  }).appendTo(formComposite);
  const items = ['Mega 3','Mega 4'];
  const select = new Picker({
    message:'Choix du Mega',
    top:50,
    left: 16,
    right: 16,
    itemCount: items.length,
    itemText: index => items[index]
  }).appendTo(formComposite);
  const validation = new TextInput({
    left: 16, right: 16,top:110,
    message: 'Validation'
    }).appendTo(formComposite);
  const numeroTel = new TextInput({
    left: 16, right: 16,top:170,
    message: 'Telephone'
  }).appendTo(formComposite);
  const Reset = new Button({
    left: 16,bottom:15,
    text: 'Annuller',
    textColor:'black',
    background:'#e5e5e5'
  }).appendTo(formComposite);
  const Confirmer = new Button({
    right: 16,bottom:15,
    text: 'Confirmer'
  }).appendTo(formComposite);
  return mainPage;
};
