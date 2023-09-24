import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { Layout } from "~/application/widgets/layout";
import { NextPageWithLayout } from "~/pages/_app";
import { api } from "~/utils/api";
import { ReactElement } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPropsContext } from "next";

const PAGE_NAME = "signup";

const Page: NextPageWithLayout = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <div className="bg-white"></div>
    </>
  );
};

Page.getLayout = function getLayout(page) {
  return <Layout page={`${PAGE_NAME}`}>{page}</Layout>;
};

function AuthShowcase() {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  return (
    <div className="">
      <p className="">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  locale = locale || "ru";

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", PAGE_NAME])),
    },
  };
}

export default Page;
