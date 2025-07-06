import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import {ImageListItem, Typography} from "@mui/material";
import ImageList from "@mui/material/ImageList"
import {styled} from "@mui/material/styles";
import {GitHub} from "@mui/icons-material";

const olympiaImages = ["projects/olympia/olympia-01.jpg", "projects/olympia/olympia-02.jpg", "projects/olympia/olympia-03.jpg"];


const LinkList = styled("ul")(({ theme }) => ({
    listStyle: 'none',
    padding:0,
    textAlign:'right',
}))

const Steam= styled("img")(({ theme }) => ({
    width: 20,
    height:20,
}))

export const SectionProjects = () => (
        <Grid container spacing={2}>
            <Typography typography="h2">Shipped Projects</Typography>
            <Grid container spacing={2}>
                    <Paper sx={{p:2}}>
                        <Grid container spacing={2}>
                            <Grid size={{xs: 12, md: 5}}>
                                <Typography typography="h3">Olympia: Festival of the Gods</Typography>
                                <Typography typography="body1">Solo-Developed by Tim Poliquin</Typography>
                                <LinkList>
                                    <li><GitHub fontSize="small" /> <Link href="https://github.com/TimPoliquin/unity-olympia-festival-of-the-gods">View it on GitHub</Link></li>
                                    <li><Steam src="steam.png" alt="steam logo"/> <Link href="https://store.steampowered.com/app/3316450/Olympia_Festival_of_the_Gods/">View it on Steam</Link></li>
                                </LinkList>
                            </Grid>
                            <Grid size={{xs:12, lg: 7}}>
                                <iframe title="Olympia Steam Embedd" src="https://store.steampowered.com/widget/3316450/" frameBorder="0" width="646" height="190" />
                            </Grid>
                            <Grid size={12}>
                                <ImageList cols={3} rowHeight={256} gap={16}>
                                    {olympiaImages.map(image => (
                                        <ImageListItem key={image}><img src={image} alt="olympia gameplay" loading="lazy" style={{borderRadius: 4}}/></ImageListItem>
                                    ))}
                                </ImageList>
                            </Grid>
                        </Grid>
                    </Paper>
            </Grid>
        </Grid>
)