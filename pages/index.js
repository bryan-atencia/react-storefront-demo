import React, { useContext } from 'react'
import { Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import useLazyState from 'react-storefront/hooks/useLazyState'
import CmsSlot from 'react-storefront/CmsSlot'
import LoadMask from 'react-storefront/LoadMask'
import Head from 'next/head'
import createLazyProps from 'react-storefront/props/createLazyProps'
import fetchFromAPI from 'react-storefront/props/fetchFromAPI'

import Header from "../components/home/Header.js"

const useStyles = makeStyles(theme => ({
  main: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    margin: theme.spacing(10, 0, 0, 0),
  },
}))

export default function Index(lazyProps) {
  const classes = useStyles()
  const [state] = useLazyState(lazyProps)

  console.log('props', useLazyState(lazyProps))
  const { homebanner } = useLazyState(lazyProps)[0]

  return <div>
          <Header data={ homebanner } />
         </div>
}

Index.getInitialProps = createLazyProps(options => {
  const { res } = options
  if (res) res.setHeader('Cache-Control', 'max-age=99999');
  return fetchFromAPI(options)
})
