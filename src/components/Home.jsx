import React from 'react'
import Navbar from "./Navbar";



function Home() {
    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className='homeCard'>
                    <h1>BlockChain</h1>
                    <a href="https://en.wikipedia.org/wiki/Blockchain" className='info'><h2>
                    is a growing list of records, called blocks, that are linked using cryptography. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data (generally represented as a Merkle tree).
                    </h2></a>
                </div>
             </div>   
        </div>
    )
}

export default Home
