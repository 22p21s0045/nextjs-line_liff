import Head from 'next/head';
import styles from '../styles/Home.module.css';
import liff from "@line/liff"
import { Main } from 'next/dist/pages/_document';
export default function Home() {
  async function main(){
    liff.ready.then(()=>{
      if(liff.getOS()=== "web"){
        console.log("You are log in with pc")
      }
    })
    await liff.init({liffId:"1657099369-78y1D9eA"})

  }
  main()
  return (
    <div >
      <h1> Hello index</h1>
      
    </div>
  );
}
