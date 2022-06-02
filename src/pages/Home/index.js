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
   
  }, [walletState])

  window.dragon.ShowConnectBtn = function (data) {
    setShowBtn(data)
  }

  window.dragon.getSignMessage = async function () {
    const message = `Welcome to PACVerse Game.`;
    const encodedMessage = new TextEncoder().encode(message);
    const signedMessage = await window.solana.request({
      method: "signMessage",
      params: {
        message: encodedMessage,
        display: "hex",
      },
    });

    window.dragon.signedMsg = signedMessage.signature
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
