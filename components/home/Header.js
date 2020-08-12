import React from "react"
import Link from 'next/link'

import { Grid, Typography, Button } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  homePageHeaderRootGrid: {
    '& .quickGrid_0': {
      '& .quickShopTagClass': {
        [theme.breakpoints.down('xl')]: {
          top: '45% !important',
          left: '12% !important'
        },
        [theme.breakpoints.down('lg')]: {
          top: '45% !important',
          left: '12% !important'
        },
        [theme.breakpoints.down('md')]: {
          top: '45% !important',
          left: '12% !important'
        },
        [theme.breakpoints.down('sm')]: {
          top: '68% !important',
          left: '14% !important'
        },
        [theme.breakpoints.down('xs')]: {
          top: '32% !important',
          left: '14% !important'
        }
      }
    },
    '& .quickGrid_1': {
      '& .quickShopTagClass': {
        [theme.breakpoints.down('xl')]: {
          top: '32% !important',
          left: '82% !important'
        },
        [theme.breakpoints.down('lg')]: {
          top: '32% !important',
          left: '82% !important'
        },
        [theme.breakpoints.down('md')]: {
          top: '32% !important',
          left: '82% !important'
        },
        [theme.breakpoints.down('sm')]: {
          top: '46% !important',
          left: '87% !important'
        },
        [theme.breakpoints.down('xs')]: {
          top: '26% !important',
          left: '86% !important'
        }
      }
    },
    [theme.breakpoints.up("md")]: {
      minHeight: "440px",
    },
    [theme.breakpoints.up("lg")]: {
      minHeight: "440px",
    },
    [theme.breakpoints.up("xl")]: {
      minHeight: "733px",
    },
  },
  homePageHeaderGrid: {
    maxHeight: '578px',
    [theme.breakpoints.between('sm', 'sm')]: {
      overflow: 'hidden'
    },
    [theme.breakpoints.up('lg')]: {
      maxHeight: '100%'
    },
    '& amp-img': {
      minWidth: '100%'
    }
  },
  heroImage: {
    width: '100%'
  },
  homePageHeaderTextGrid: {
    [theme.breakpoints.up('md')]: {
      maxWidth: '570px',
      textAlign: 'right',
      justifyContent: 'flex-end'
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }
  },
  homePageHeaderLevelOne: {
    ...theme.typography.h1Alt,
    color: theme.palette.primary.light,
    maxHeight: '116px'
  },
  homePageSubHeader: {
    textShadow: ' -1px 1px 0 #5b6770',
    maxHeight: '70px',
    marginBottom: '20px',
    color: theme.palette.primary.light
  },
  homePageHeaderButton: {
    ...theme.buttons.lightButtonHover,
    margin: 'initial'
  },
  homePageHeaderOuterGrid: {
    maxWidth: '1180px',
    position: 'absolute',
    top: '48%',
    left: '50%',
    padding: '0',
    transform: 'translateX(-50%)',
    [theme.breakpoints.down('md')]: {
      top: '40%',
      padding: '0 40px'
    },
    [theme.breakpoints.down('sm')]: {
      top: '50%',
      padding: 0
    },
    [theme.breakpoints.down('xs')]: {
      top: '40%',
      padding: 0
    }
  }
}))

export default (props) => {

  const { data: { fields: data }, classData } = props

  const classes = useStyles(props)

  return <Grid style={{ position: 'relative' }} className={classes.homePageHeaderRootGrid}>
              <Grid className={classes.homePageHeaderGrid}>
                  <picture className={classes.heroImage}>
                    <source
                      srcSet={ data.mobileurl }
                      media="(max-width: 400px)"
                    />
                    <source
                      srcSet={ data.mobileurl }
                      media="(min-width: 401px) and (max-width: 414px)"
                    />
                    <source
                      srcSet={ data.mobileurl }
                      media="(min-width: 415px) and (max-width: 800px)"
                    />
                    <source
                      srcSet={ data.mediaurl }
                      media="(min-width: 801px) and (max-width: 1400px)"
                    />
                    <source
                      srcSet={ data.mediaurl }
                      media="(min-width: 1401px) and (max-width: 1600px)"
                    />
                    <source
                      srcSet={ data.mediaurl }
                      media="(min-width: 1601px) and (max-width: 1919px)"
                    />
                    <source
                      srcSet={ data.mediaurl }
                      media="(min-width: 1920px)"
                    />
                    <img
                      src={ data.mobileurl }
                      alt={data.actiontext}
                      className={classes.heroImage}
                    />
                  </picture>
                <Grid container justify="flex-end" className={classes.homePageHeaderOuterGrid}>
                  <Grid container className={`${classes.homePageHeaderTextGrid}`} item xs={12}>
                    <Typography component="h1" className={classes.homePageHeaderLevelOne}>
                      {data.header_level_one}
                    </Typography>
                    <Typography variant="h3" className={classes.homePageSubHeader}>
                      {' '}
                      {data.subheader}{' '}
                    </Typography>
                    <Link href="/clothing">
                      <Button className={classes.homePageHeaderButton}>
                        <Typography variant="button">{data.actiontext}</Typography>
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            {
              data.quicklinks && data.quicklinks.map((x, y) => (
                <div className={`quickGrid_${y}`} key={y}>
                  {/* <QuickShopTag
                    key={y}
                    data={x}
                    hover={true}
                    category={'HomePageHero'}
                    label={x.actionSku}
                  /> */}
                </div>
              ))}
      </Grid>
}
