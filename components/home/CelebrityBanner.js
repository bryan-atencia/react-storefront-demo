import React from 'react'
import { makeStyles, Grid, Typography, Hidden } from '@material-ui/core'
import classnames from 'classnames'

// import QuickShopTag from '../components/QuickShopTag'

const useStyles = makeStyles((theme) => ({
   hideSmall: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  homePageMainGrid: {
    [theme.breakpoints.down('sm')]: {
      width: '95%'
    }
  },
  homePageCelebrityRoot: {
    height:"100%",
    width:"100%",
    '& img': {
      width: '100%',
      height:"100%",
      [theme.breakpoints.down('xs')]: {
        height: 'auto',
        width: '100%'
      }
    }
  },
  homePageCelebrityBannerTiles: {
    maxWidth: '49%',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100%',
      margin:"0 0 20px 0"
    }
  },
  homePageCelebrityHeaderLevelTwo: {
    fontFamily: theme.fonts.futuraPTBook,
    marginBottom:"18px"
  },
  homePageCelebrityHeaderActionText: {
    ...theme.links.ctaLink,
    float: 'right'
  },
  homePageCelebrityHeaderActionTextAlt: {
    ...theme.links.ctaLink,
    margin: '0px auto'
  },
  celebrityFirstTile: {
    width: '100%',
    height: '100%',
    position: 'relative',
    [theme.breakpoints.down("xs")]: {
      height:"450px",
      margin:"20px 0"
    }
  },
  celebrityBannerTextGrid: {
    position:'absolute',
    bottom:"20px",
    zIndex:7,
    right:"50px",
    [theme.breakpoints.down("sm")]: {
      right:"25px",
      bottom:"0px"
    }
  }
}))
export default (props) => {
    const { data, classData } = props
    const classes = useStyles(props)

    return <Grid
            container
            className={`${classData.homePage} ${classes.homePageMainGrid}`}
            justify="space-between">
              {data.map((x, y) => {
                return (
                  <Grid
                    key={y}
                    container
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    justify="center"
                    style={{ maxHeight: '804px' }}
                    className={classes.homePageCelebrityBannerTiles}
                  >
                      <Grid container style={{ position:"relative" }}>
                        <Grid
                          style={{ width: '100%', marginBottom: '30px' }}
                          item
                          xs={12}
                          className={classnames({
                            [classes.hideSmall]: y === 1,
                            [classes.celebrityBannerTextGrid]: y === 0
                          })}
                        >
                          <Typography align="right" variant="h4">
                            {' '}
                            {x.header_level_one}{' '}
                          </Typography>
                          <Typography
                            align="right"
                            variant="h5"
                            className={classes.homePageCelebrityHeaderLevelTwo}
                          >
                            {' '}
                            {x.header_level_two}{' '}
                          </Typography>
                            <Typography
                              align="right"
                              variant="h4"
                              className={classes.homePageCelebrityHeaderActionText}
                            >
                              {x.actiontext}
                            </Typography>
                        </Grid>
                        <Grid container item xs={12} justify="center">
                            <img
                              src={ x.mediaurl }
                              className={ classes.homePageCelebrityRoot }
                            />
                          <Hidden mdUp implementation="css" xsUp={ y === 0 } >
                              <Grid
                              style={{ width: '100%', marginTop: '20px'}}
                              item
                              xs={12}
                            >
                              <Typography align="center" variant="h4">
                                {' '}
                                {x.header_level_one}{' '}
                              </Typography>
                              <Typography
                                align="center"
                                variant="h5"
                                className={classes.homePageCelebrityHeaderLevelTwo}
                              >
                                {' '}
                                {x.header_level_two}{' '}
                              </Typography>
                                <Typography
                                  align="center"
                                  variant="h4"
                                  className={classes.homePageCelebrityHeaderActionTextAlt}
                                >
                                  {x.actiontext}
                                </Typography>
                            </Grid>
                          </Hidden>
                          {/* x.quickLinks &&
                            x.quickLinks.map((x) => (
                              <QuickShopTag
                                key={y}
                                data={x}
                                hover={true}
                                app={app}
                                category={'HomePageCelebrity'}
                                label={x.actionsku}
                              />
                            )) */}
                        </Grid>
                      </Grid>
                  </Grid>
                )
              })}
            </Grid>
}
