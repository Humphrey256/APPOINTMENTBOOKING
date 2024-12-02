
<<<<<<< HEAD

=======
import React from 'react'
>>>>>>> bfee5f250fffeb4e5d8be21b911feedbe1ecbad3
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Routers from '../routes/Routers'




const layout = () => {
    return <>
        <Header />
        <main>
            <Routers />
        </main>
        <Footer />
    </>
};

export default layout