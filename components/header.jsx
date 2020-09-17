import Head from 'next/head'
import { useEffect, useState } from 'react'

const changeTitle = (propsTitle) => {
  let title = null
  if (propsTitle === null) {
    title = process.env.APP_NAME
  } else {
    title = propsTitle + " - " + process.env.APP_NAME
  }

  return title
}

const Header = (props) => {
  let propsTitle = props.title
  let title = changeTitle(propsTitle)
  if (props.description === null) props.description = process.env.APP_DESCRIPTION;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={props.description}></meta>
      <meta name="robots" content="noindex, follow" />
    </Head>
  )
};

export default Header;