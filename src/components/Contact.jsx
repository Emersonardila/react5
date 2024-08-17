import styles from "./contact.module.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Contact Us</h1>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://tse3.mm.bing.net/th?id=OIP.Hl3ptmc2d0Rnx-cITunXCwHaGY&pid=Api&P=0&h=180"
        title="telefono"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          CONTACTOS
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Comunicate con nosotros
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
  )
}
