import Head from "next/head";
import Articls from "../components/Articles";

export default function Home({ articls }) {
  console.log(articls);
  return (
    <div>
      <Head>
        <title>Next project</title>
        <meta name="keywords" content="webdeveloment,programing" />
      </Head>
      <h1>Hello to next js</h1>
      <Articls 
        articls={articls} 
      />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articls = await res.json();
  return {
    props: {
      articls,
    },
  };
};
