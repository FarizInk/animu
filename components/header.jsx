import Head from 'next/head'

const Header = (props) => {
  let title = null
  if (props.title === null) {
    title = process.env.appName
  } else {
    title = props.title + " - " + process.env.appName
  }
  if (props.description === null) props.description = process.env.appDescription;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={props.description}></meta>
      <meta name="robots" content="noindex, follow" />
    </Head>
  )
};

export default Header;