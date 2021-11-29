import Layout from '../../components/Layout/Layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }:any) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  )
}

export async function getStaticProps({ params }) {

  const postData = getPostData(params.id)
  console.log("🚀 ~ file: [id].tsx ~ line 18 ~ getStaticProps ~ postData", postData)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}