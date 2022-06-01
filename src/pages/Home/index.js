import { useState, useEffect } from 'react'
import { useConnection, useWallet, useAnchorWallet } from "@solana/wallet-adapter-react";
import {
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import './index.css';

function HomePage() {
  const walletState = useWallet()
  //const wallet = useAnchorWallet()

  //const { connection } = useConnection()

  const [showBtn, setShowBtn] = useState(true)

  useEffect(() => {
    if(walletState.connected || walletState.autoConnect) {
      window.dragon.walletConnect(walletState.publicKey)
    }
    // console.log("walletState: ", walletState)
  }, [walletState])

  window.dragon.ShowConnectBtn = function (data) {
    setShowBtn(data)
  }

  return (
    <div className="main">
      {
        showBtn &&
          <div className="container">
            <WalletMultiButton className='wallet-btn' />
          </div>
      }
    </div>
  )
}

export default HomePage;
