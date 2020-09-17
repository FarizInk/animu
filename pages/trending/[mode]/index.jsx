import { useContext, useEffect, useState } from 'react';
import { Context } from 'context/store'
import Header from 'components/header'
import Trending from 'components/page/trending'
import { useRouter } from 'next/router'

const TrendingMode = () => {
    const router = useRouter()
    const { mode } = router.query
    const context = useContext(Context)
    const [pageTitle, setPageTitle] = useState("Trending")
    useEffect(() => {
        context.dispatch("CHANGE_PAGE_TITLE", pageTitle)    
    }, [])

    useEffect(() => {
        if (mode !== undefined && (mode === 'anime' || mode === 'manga')) {
            setPageTitle("Trending " + mode.charAt(0).toUpperCase() + mode.slice(1))
            context.dispatch("CHANGE_PAGE_TITLE", pageTitle)
        }
    }, [mode]);

    return (
        <>
            <Header title={pageTitle} />
            <Trending mode={mode} />
        </>
    )
}

export default TrendingMode