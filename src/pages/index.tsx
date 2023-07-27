import { Connections } from "@/components/organisms/Connections";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Loading from "@/components/atoms/Loading/Loading";

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    const redirectPage = async () => {
      await router.push("/connections");
    };
    redirectPage();
  }, []);
  return <Loading />;
};

export default Home;
