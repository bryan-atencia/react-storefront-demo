import React from 'react'
import { makeStyles, Grid, Typography, CardMedia } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  homePageVideoBannerRoot: {
    width:"100%",
    height:"375px",
    '& img': {
      height: 'auto',
      width: '100%'
    }
  },
  homePageVideoBannerTextGrid: {
    [theme.breakpoints.down('sm')]: {
      marginTop: '30px'
    }
  },
  homePageVideoBannerHeaderLevelOne: {
    ...theme.typography.h2Alt,
    margin: '25px 0 0px'
  },
  homePageVideoBannerHeaderLevelTwo: {
    ...theme.typography.h2AltLight,
    margin: '0 0 25px'
  },
  homePageVideoBannerActionText: {
    ...theme.links.ctaLink,
    margin: '0 auto',
    padding: '3px 0'
  }
}))
export default (props) => {

    const { classData, data  } = props
    const classes = useStyles(props)

    return <Grid className={classData.homePage} container>
            <Grid container item xs={12} sm={12} md={8} justify="center">
              <CardMedia component="iframe"
                         height={350}
                         width={500}
                         onClick={() => home.videoBannerClicked(data)}
                         classes={{ root: classes.homePageVideoBannerRoot, media: "homePageMedia" }}
                         alt="Behind the Shoot"
                         title="Behind the Shoot"
                         src={data.mediaurl} />
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={12}
              md={4}
              justify="center"
              align="center"
              className={classes.homePageVideoBannerTextGrid}
            >
              <Grid container direction="column" justify="center">
                <Typography
                  align="center"
                  variant="h4"
                >
                  {data.title}
                </Typography>
                <Typography
                  align="center"
                  component="h2"
                  className={classes.homePageVideoBannerHeaderLevelOne}
                >
                  {data.header_level_one}
                </Typography>
                <Typography
                  align="center"
                  component="h2"
                  className={classes.homePageVideoBannerHeaderLevelTwo}
                >
                  {data.header_level_two}
                </Typography>
                <Typography
                  align="center"
                  variant="h4"
                  className={classes.homePageVideoBannerActionText}
                >
                    {data.actiontext}
                  </Typography>
              </Grid>
            </Grid>
          </Grid>

}
