import { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import { getSortedPostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { useState } from 'react'
const siteTitle = "index root";


const Home = ({ allPostsData }: any) => {
  console.log("🚀 ~ file: index.tsx ~ line 10 ~ allPostsData", allPostsData)
  const [displayBasic, setDisplayBasic] = useState(false);
  const [displayBasic2, setDisplayBasic2] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);
  const [displayMaximizable, setDisplayMaximizable] = useState(false);
  const [displayPosition, setDisplayPosition] = useState(false);
  const [displayResponsive, setDisplayResponsive] = useState(false);
  const [position, setPosition] = useState('center');

  const dialogFuncMap = {
    'displayBasic': setDisplayBasic,
    'displayBasic2': setDisplayBasic2,
    'displayModal': setDisplayModal,
    'displayMaximizable': setDisplayMaximizable,
    'displayPosition': setDisplayPosition,
    'displayResponsive': setDisplayResponsive
  }

  const onClick = (name, position) => {
    dialogFuncMap[`${name}`](true);

    if (position) {
      setPosition(position);
    }
  }

  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  }

  return (
    <>
      <Layout home>
        {/* Keep the existing code here */}

        {/* Add this <section> tag below the existing <section> tag */}
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                {title}
                <br />
                {id}
                <br />
                {date}
              </li>
            ))}
          </ul>
        </section>
      </Layout>
 
    </>
  )
}

export default Home;
// static site generation
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  console.log("🚀 ~ file: index.tsx ~ line 30 ~ getStaticProps ~ allPostsData", allPostsData)
  return {
    props: {
      allPostsData
    }
  }
}