import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import { CreateContainer, Header, MainContainer } from './components';

const App = () => {
  return (
    <>
    <AnimatePresence exitBeforeEnter> {/*Exit before entering avoids toggle animations to start when the page loads*/}
        <div className="w-screen h-auto flex flex-col bg-gray-50">
            <Header />

            <main className="mt-16 md:mt-20 px-6 md:px-16 py-4 w-full">
                <Routes>
                    <Route path="/" element={<MainContainer />}/>
                    <Route path="/createItem" element={<CreateContainer />}/>
                </Routes>
            </main>
        </div>
    </AnimatePresence>
    </>
  )
}

export default App