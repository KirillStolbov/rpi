import { Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import React from 'react';
import Header from './../header/Header'
import { useTranslation } from "react-i18next";

const Home = (props) => {
    const { heroData } = props;
    const { t, i18n } = useTranslation();
    const lang = i18n.language;
    const today = new Date();
    const pos = today.getDate() % heroData.length;
    const hero = heroData.at(pos);
    const createTypography = (text, variant) => (
        <Typography
            component={variant}
            variant={variant}
            sx={{
                pt: 3
            }}
            textAlign="center" >
            {t("home." + text)}
        </Typography>
    );
    return (
        <main>
            <Header />
            <Container
                sx={{
                    bgcolor: '#e3dfdf',
                    p: 5
                }}
            >
                {createTypography("portalTitle", "h1")}
                {createTypography("portalDesription", "h5")}
            </Container>
            <Container maxWidth="lg"
                sx={{
                    bgcolor: 'grey.300',
                    p: 5
                }}
            >
                {createTypography("heroOfTheDay", "h3")}
                <Card
                    sx={{ display: 'flex', flexDirection: 'row', mt: 5 }} >
                    <Box sx={{ width: 500, padding: 3 }} alignSelf="center" >
                        <CardMedia component="img" image={hero.photo.src} />
                    </Box>
                    <Box>
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="h4">
                                {hero.name.get(lang)}
                            </Typography>
                            <Typography>
                                {hero.inf.get(lang)}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                href={`#/hero/${hero.id_Hero}`}
                                size="large">
                                {t("home.seeMoreButton")}
                            </Button>
                        </CardActions>
                    </Box>
                </Card>
            </Container>
            <Container maxWidth="lg"
                sx={{
                    bgcolor: 'grey.300',
                    p: 5
                }}
            >
                {createTypography("devsTitle", "h3")}
                <Grid container direction="row" justifyContent="space-around" spacing={4} sx={{ pt: 10 }}>
                    <DeveloperCard name="KirillStolbov" avatarSrc="116667638?v=4" />
                    <DeveloperCard name="afanofrafa" avatarSrc="146372888?s=400&v=4" />
                    <DeveloperCard name="KopVZakone" avatarSrc="109739214?v=4" />
                </Grid>
            </Container>
        </main>
    )
};

const BASE_GITHUB_URL = "https://github.com/";
const DeveloperCard = ({ name, avatarSrc }) => {
    const githubLink = BASE_GITHUB_URL + name;
    const centerStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    };
    const generateLinkProps = (url) => ({
        href: url,
        target: "_blank",
        rel: "noopener noreferrer"
    });
    return (
        <Grid item sx={{ minWidth: '150px' }}>
            <Card sm={6} md={4} square>
                <CardMedia sx={centerStyles}>
                    <a {...generateLinkProps(githubLink)}>
                        <Avatar alt="logo" src={"https://avatars.githubusercontent.com/u/" + avatarSrc} sx={{ width: 100, height: 100 }} />
                    </a>
                </CardMedia>
                <CardContent sx={centerStyles}>
                    <Box>
                        <a {...generateLinkProps(githubLink)} style={{ textDecoration: 'none', color: 'black' }}>
                            <Typography>{name}</Typography>
                        </a>
                    </Box>
                    <Box>
                        <a {...generateLinkProps(githubLink)} style={{ textDecoration: 'none', color: 'black' }}>
                            <Typography>{githubLink}</Typography>
                        </a>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    );
};
export default Home;