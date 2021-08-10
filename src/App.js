import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 
import NavBar from './components/NavBar'
import Grid from './components/Grid'
import Footer from './components/Footer'
import './App.css';
//changes to imports 
import SecurityIcon from '@material-ui/icons/Security';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import WcIcon from '@material-ui/icons/Wc';
//import EventNoteIcon from '@material-ui/icons/EventNote';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import WatchIcon from '@material-ui/icons/Watch';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import ComputerIcon from '@material-ui/icons/Computer';
import HttpIcon from '@material-ui/icons/Http';
import BookIcon from '@material-ui/icons/Book';

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})

function App() {
  const classes = styles(); 

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar/>
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
            HEY! Welcome to Crafty la :)
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
          Online Sale - Get UP TO 60% off on top beauty, skin care & personal care brands
Excited about getting your hands on new and exclusive beauty product launches — the need to have trendiest makeup and skincare essentials is never-ending and at Nykaa we bring you the best of makeup products and brands of all time at discounted prices. As someone who literally can't get enough of beauty and skin care products and is always on the lookout for dreamy face masks, pigment-packed lipsticks, exquisite fragrances, shimmery blushes or glowiest of glow highlighters, Crafty la has some great discounts on best-selling international cosmetics and makeup products. 
          </Typography>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
        <Grid icon={<TrendingUpIcon style={{fill: "#D05B2D", height:"125", width:"125"}}/>}  title="Trends" btnTitle="Show me More"/>
          <Grid icon={<WcIcon style={{fill: "#449A76", height:"125", width:"125"}}/>} title="Men and Women" btnTitle="Show me More"/>
          <Grid icon={<ChildFriendlyIcon style={{fill: "#2EA09D", height:"125", width:"125"}}/>} title="Kids Wear" btnTitle="Show me More"/>
        </div>
        <div className={`${classes.grid} ${classes.littleSpace}`}>  
        
          <Grid icon={<WatchIcon style={{fill: "#5EA780", height:"125", width:"125"}}/>}  title="Accessories" btnTitle="Show me More"/>
          <Grid icon={<ComputerIcon style={{fill: "#E69426", height:"125", width:"125"}}/>}  title="Gadgets" btnTitle="Show me More"/>
          <Grid icon={<BookIcon style={{fill: "#4360A6", height:"125", width:"125"}}/>}  title="Books" btnTitle="Show me More" />
         
        </div>
        <div className={classes.bigSpace}>
          <Footer/>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;