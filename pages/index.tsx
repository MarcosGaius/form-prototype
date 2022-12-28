import Head from "next/head";
import { useContext } from "react";
import DataConfirmation from "../components/DataConfirmation";
import Form from "../components/Form";
import { FormContext } from "../providers/Form";

export default function Home() {
  const { currentFormStep } = useContext(FormContext);

  return (
    <>
      <Head>
        <title>Simple Form</title>
        <meta name="description" content="A form with three steps and final data visualization" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full min-h-screen py-12 flex items-center justify-center mainBackgroundGradient">
        {currentFormStep === "confirmation" ? <DataConfirmation /> : <Form />}
      </main>
    </>
  );
}
