import {  ConnectWallet, Web3Button, useContract, useContractRead } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import {abi} from "../constants/abi";
import {CA} from "../constants/address";
import { useState } from "react";

const Home: NextPage = () => {
   const { contract } = useContract(CA, abi);
   const [number, setNumber] = useState("");
   const { data, isLoading, error } = useContractRead(
     contract,
     "viewNumber",
     [],
   );

  // Read contract with arguments

  const getNum = () => {
    if (error) {
      console.error("failed to read contract", error);
    }
    console.log(data)
    setNumber(Number(data))
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.connect}>
            <ConnectWallet
             switchToActiveChain={true}
              dropdownPosition={{
                side: "bottom",
                align: "center",
              
              }}
            />
          </div>

        <div className={styles.header}>
          <h1 className={styles.title}>
            Welcome to{" "}
            <span className={styles.gradientText0}>
                my number dapp.
            </span>
          </h1>

          <span className={styles.last}>Number: {number}</span>

          
        </div>

        <div className={styles.functions}>
        <Web3Button onSuccess={() => alert("Number set succesfully!")} onError={() => alert("Something went wrong!")} contractAddress = {CA} contractAbi={abi} action={(contract) => contract.call("changeNumber", [23]) }>setNumber</Web3Button>
        <button className={styles.button} onClick={getNum}>reveal number</button>
        </div>




        
      </div>
    </main>
  );
};

export default Home;