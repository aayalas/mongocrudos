import TopicsList from "@/components/TopicsList";
import RefaccionesList from "@/components/RefaccionesList";


export default function Home() {
  console.log('uri:',process.env.MONGODB_URI)
  return (
    <>
      {/* <TopicsList/> */}
      <RefaccionesList/>

    </>
  
  );
}
