import './App.css';
import { Typography,AppBar,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container,Button } from '@material-ui/core';
import {PhotoCamera} from '@material-ui/icons';
import useStyles from './style';

function App() {
  const classes = useStyles();
  const cards = [1,2,3,4,5,6,7,8,9];
  return (
    <>
        <CssBaseline /> 
        <AppBar position='relative'>
          <Toolbar>
            <PhotoCamera className={classes.icon}/>
            <Typography variant='h6'>Photo Album</Typography>
          </Toolbar>
        </AppBar>
        <main>
          <div>
            <Container maxWidth='sm' className={classes.container}>
              <Typography variant="h2" align="center" color="textPrimary" 
              dutterBottom>
                Photo Album
              </Typography>

              <Typography variant="h5" align="center" color="textSecondary" 
              paragraph>
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a.
              </Typography>
              <div className={classes.buttons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained"
                    color="primary">See My Photo</Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined"
                    color="primary">Other</Button>
                  </Grid>

                </Grid>
              </div>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth='md'>
            <Grid container spacing={4}>
              {cards.map((card)=>(
                <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title='image title'/>
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        Heading
                    </Typography>
                    <Typography>
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.
                    </Typography>
                  </CardContent>
                  <CardActions>
                      <Button size="small" color="primery">View</Button>
                      <Button size="small" color="primery">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>

              ))}
              
            </Grid>
          </Container>
        </main>
        <footer className={classes.footer}>
          <Typography varient='h6' align='center' gutterBottom>
              Footer
          </Typography>
          <Typography varient='subtitle1' align='center' color='textSecondory'gutterBottom>
              Footer In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a.
          </Typography>
        </footer>

    </>




    // <div className="App">
    //   <Typography variant="h1">Hello World!</Typography>
    //   <Typography variant="h2">Hello World!</Typography>
    //   <Typography variant="h3">Hello World!</Typography>
    //   <Typography variant="h4">Hello World!</Typography>
    //   <Typography variant="p">Hello World!</Typography>
    //   <h1>Hello World!</h1>
    // </div>
  );
}

export default App;
