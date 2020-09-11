import Head from 'next/head'

const Header = (props) => {
  let title = null
  if (props.title === null) {
    title = process.env.APP_NAME
  } else {
    title = props.title + " - " + process.env.APP_NAME
  }
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