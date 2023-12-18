import { Box, Typography, Grid, CardMedia, CardContent, CardActions, Container, Button, Card, createTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import Header from "../header/Header";

const theme = createTheme();

theme.typography.h1 = {
    fontSize: '3rem',
};

const HeroSearch = (props) => {

    const { heroData } = props;
    const { t, i18n } = useTranslation();
    const lang = i18n.language;
    return (
        <main>
            <Header />
            <Container
                sx={{
                    bgcolor: 'grey.300',
                    pt: 8,
                    pb: 6,
                }}
            >
                <Container maxWidth="sm">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        {t("search.listTitle")}
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        {t("search.listDescription")}
                    </Typography>
                </Container>
            </Container>
            <Container
                sx={{
                    py: 8,
                    bgcolor: 'grey.300',
                }}
            >
                <Grid container spacing={4}>
                    {heroData.map((hero) => (
                        <Grid item key={hero} xs={12} sm={6} md={4}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <CardMedia
                                    component="div"
                                    sx={{
                                        // 16:9
                                        pt: '56.25%',
                                    }}
                                    image={hero.photo.src}
                                    alt={hero.photo.alt}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {hero.name.get(lang)}
                                    </Typography>
                                    <Typography>
                                        {hero.inf.get(lang)}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        href={`#/hero/${hero.id_Hero}`}
                                        size="small">{t("search.seeMoreButton")}</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </main>
    );
}
export default HeroSearch;