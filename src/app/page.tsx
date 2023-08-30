import Landing from './landing/page';
  import { Metadata } from "next";

  export const metadata: Metadata = {
                title: 'CodeWizard',
description: 'A CI/CD tool for teams',
keywords: 'ci,cd,automate',
creator: 'Agua',

}

  export default function Home() {
    return (
        <Landing />
    );
  }
  