import React, { useState } from 'react';
import { Navbar, Header, Featured, PropertyLists, FeatureProperties, MailList, Footer, ScrollToTop, Spinner } from '../../components'

export default function Home() {

    const [loading, setLoading] = useState(false)

    return (
        <div>
            {
                loading ? <Spinner /> : (
                    <>
                        <ScrollToTop />
                        <Navbar />
                        <Header />

                        <div className='w-screen flex flex-col justify-center gap-2 mx-auto mt-[50px]'>
                            <Featured />


                            <PropertyLists />
                            <FeatureProperties />
                            <MailList />
                            <Footer />
                        </div>
                    </>
                )
            }

        </div>
    );
}
