import styles from "./about.module.css";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>
      About Us
      </h1>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://tse2.mm.bing.net/th?id=OIP.fPduymtIMXqDuUgxmFD68gHaHa&pid=Api&P=0&h=180"
        title="lupa"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         NOSOTROS
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Mi primera card con material
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
