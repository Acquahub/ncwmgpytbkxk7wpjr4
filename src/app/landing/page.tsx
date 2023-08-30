import React from 'react';
import Link from 'next/link';
import styles from './landing.module.css';
import { Metadata } from "next";

import * as fonts from '../../agua/assets/fonts';
import Image from 'next/image';
import TextComponent from '../../agua/components/customCode/textComponent.jsx';



export const metadata: Metadata = {
                title: 'CodeWizard',
description: 'A CI/CD tool for teams',
keywords: 'ci,cd,automate',
creator: 'Agua',

}

function Landing() {
    const titleFont = fonts['metropolisextrabold'];
const bodyFontFamily = fonts['metropolisregular'];
const title2FontFamily = fonts['metropolisextrabold'];
const title3FontFamily = fonts['metropolisextrabold'];

    

    return(
        <div className={styles["Landing"]}>
            
<div id="banner-e9d526f00c404bcf92ea68e8687094f6" className={styles["banner-e9d526f00c404bcf92ea68e8687094f6"]}  >

<div className={""}>
    <div id="text-1-2ff96cdfce3443d6a7335e45ada83627" className={styles["text-1-2ff96cdfce3443d6a7335e45ada83627"]}  >
        We are changing our pricing.
    </div>
</div>

<div className={""}>
    <div id="text-2-404fd243282348909928ab105cf1a191" className={styles["text-2-404fd243282348909928ab105cf1a191"]}  >
        Read more
    </div>
</div>
</div>
<div id="header-cb97a198f35247b881e817d801354b5b" className={styles["header-cb97a198f35247b881e817d801354b5b"]+ ' header-cb97a198f35247b881e817d801354b5b-orientation'}  >
<div id="layer-4-9c8ff8533df24e0ba147c3317f834543" className={styles["layer-4-9c8ff8533df24e0ba147c3317f834543"]+ ' layer-4-9c8ff8533df24e0ba147c3317f834543-parentOrientationVariable'+ ' layer-4-9c8ff8533df24e0ba147c3317f834543-parentOrientationVariable'}  >
<div className={styles["imageview-1-e14f48970ed7443496b0c89f940697fb"]} >
    <Image id="imageview-1-e14f48970ed7443496b0c89f940697fb" style={{ objectFit: 'contain' }} fill={true} alt="imageview-1" src='/assets/real.png' />
</div>

<div className={titleFont.variable}>
    <div id="text-3-aea1ea4311a642dbaa395cc3b5990f51" className={styles["text-3-aea1ea4311a642dbaa395cc3b5990f51"]}  >
        Product
    </div>
</div>

<div className={titleFont.variable}>
    <div id="text-4-af9242311f9b437184eed2c8f7c9dff4" className={styles["text-4-af9242311f9b437184eed2c8f7c9dff4"]}  >
        Pricing
    </div>
</div>

<div className={titleFont.variable}>
    <div id="text-5-ebcf9317da6b46a8a538cf6c7a0362a6" className={styles["text-5-ebcf9317da6b46a8a538cf6c7a0362a6"]}  >
        Documentation
    </div>
</div>
</div>
<div id="layer-5-815b3c91c0104febb08df9587767c046" className={styles["layer-5-815b3c91c0104febb08df9587767c046"]+ ' layer-5-815b3c91c0104febb08df9587767c046-parentOrientationVariable'+ ' layer-5-815b3c91c0104febb08df9587767c046-parentOrientationVariable'}  >

<div className={titleFont.variable}>
    <div id="text-7-170d6fcc985d4247bdaf4f90c4c2517c" className={styles["text-7-170d6fcc985d4247bdaf4f90c4c2517c"]}  >
        Login
    </div>
</div>
<div id="layer-6-0e0db9f56df34dae970bc76b9b6ff27d" className={styles["layer-6-0e0db9f56df34dae970bc76b9b6ff27d"]}  >

<div className={titleFont.variable}>
    <div id="text-8-1062f5c03fb14f958b51cd015c250a5d" className={styles["text-8-1062f5c03fb14f958b51cd015c250a5d"]}  >
        Sign up
    </div>
</div>
</div>
</div>
</div>
<div id="title-9690cd4c563b43eca7261ffc42ebf8fa" className={styles["title-9690cd4c563b43eca7261ffc42ebf8fa"]+ ' title-9690cd4c563b43eca7261ffc42ebf8fa-orientation'}  >

<div className={titleFont.variable}>
    <div id="text-9-c2492aa602274ed0ae0855f2530e92c2" className={styles["text-9-c2492aa602274ed0ae0855f2530e92c2"]}  >
        CI/CD for
    </div>
</div>

<div className={titleFont.variable}>
    <div id="text-10-cbac7b4b7cfa4cb0b0741141371d0744" className={styles["text-10-cbac7b4b7cfa4cb0b0741141371d0744"]}  >
        mobile dev teams
    </div>
</div>
</div>

<div className={bodyFontFamily.variable}>
    <div id="subtitle1-f69c99accf104a3585f7cc44b02e638d" className={styles["subtitle1-f69c99accf104a3585f7cc44b02e638d"]}  >
        Best practices for automating app builds and releases.
    </div>
</div>

<div className={bodyFontFamily.variable}>
    <div id="subtitle2-7dc6b67e701f420f90baca548953050d" className={styles["subtitle2-7dc6b67e701f420f90baca548953050d"]}  >
        Easy to get started.
    </div>
</div>
<div id="getstarted-2af38d155c2744a780b5bccff0231b60" className={styles["getstarted-2af38d155c2744a780b5bccff0231b60"]}  >
<div id="getstartedinner-4f85a466c9f44d0887e91ec314e0246a" className={styles["getstartedinner-4f85a466c9f44d0887e91ec314e0246a"]}  >
<div id="email-eddf367cd62c493ca287e82286dbc3f7" className={styles["email-eddf367cd62c493ca287e82286dbc3f7"]}  >
<TextComponent   />
</div>
<div id="getstartedca-367c5aaf2a974bb49d581376e7639c0d" className={styles["getstartedca-367c5aaf2a974bb49d581376e7639c0d"]}  >

<div className={""}>
    <div id="catext-a5eeab86b1084fc588854c90d5315ba3" className={styles["catext-a5eeab86b1084fc588854c90d5315ba3"]}  >
        Get started
    </div>
</div>
<span id="43354ca4271a483a82295d20dbcba4d3" className={styles["icon-1-43354ca4271a483a82295d20dbcba4d3"]}  >arrow_right_alt</span>
</div>
</div>
</div>

<div className={bodyFontFamily.variable}>
    <div id="signuptext-459b2ebe81b74f7080db67da71d4dea9" className={styles["signuptext-459b2ebe81b74f7080db67da71d4dea9"]}  >
        Or sign up with an account
    </div>
</div>
<div id="integrationlayer-45dd8ad18b3a4e9a9945646b45feab2d" className={styles["integrationlayer-45dd8ad18b3a4e9a9945646b45feab2d"]}  >
<div className={styles["github-1e96a3e7fde341859c07ab6568bdce78"]} >
    <Image id="github-1e96a3e7fde341859c07ab6568bdce78" style={{ objectFit: 'contain' }} fill={true} alt="github" src='/assets/int1.png' />
</div>
<div className={styles["bitbucket-0aad63a9dcc8457480589b63220f9fb9"]} >
    <Image id="bitbucket-0aad63a9dcc8457480589b63220f9fb9" style={{ objectFit: 'contain' }} fill={true} alt="bitbucket" src='/assets/int2.png' />
</div>
<div className={styles["gitlab-4be34d2bc0bf40518e1a2c167a5af5db"]} >
    <Image id="gitlab-4be34d2bc0bf40518e1a2c167a5af5db" style={{ objectFit: 'contain' }} fill={true} alt="gitlab" src='/assets/int3.png' />
</div>
</div>

<div className={bodyFontFamily.variable}>
    <div id="clientstext-840a2600af38423c82eeb6ce2c77b240" className={styles["clientstext-840a2600af38423c82eeb6ce2c77b240"]}  >
        Trusted by 150,000+ developers
    </div>
</div>
<div id="clients-9399fce21d754cf187ec369dee0a51be" className={styles["clients-9399fce21d754cf187ec369dee0a51be"]}  >
<div id="layer-15-2a4abf2ceeb74014aacfc5be4706c6fa" className={styles["layer-15-2a4abf2ceeb74014aacfc5be4706c6fa"]}  >
<div className={styles["imageview-5-c843f23c503c473ca2a93e6ed9cc04f4"]} >
    <Image id="imageview-5-c843f23c503c473ca2a93e6ed9cc04f4" style={{ objectFit: 'contain' }} fill={true} alt="imageview-5" src='/assets/client1.png' />
</div>
<div className={styles["imageview-5-a79195b475ba414e8db8a2d924f4d51e"]} >
    <Image id="imageview-5-a79195b475ba414e8db8a2d924f4d51e" style={{ objectFit: 'contain' }} fill={true} alt="imageview-5" src='/assets/client2.png' />
</div>
<div className={styles["imageview-5-59f8c51f542a4dd1a887dfaed225beb6"]} >
    <Image id="imageview-5-59f8c51f542a4dd1a887dfaed225beb6" style={{ objectFit: 'contain' }} fill={true} alt="imageview-5" src='/assets/client3.png' />
</div>
<div className={styles["imageview-5-d53ebbb297fd431bbc33f59e7a2f382d"]} >
    <Image id="imageview-5-d53ebbb297fd431bbc33f59e7a2f382d" style={{ objectFit: 'contain' }} fill={true} alt="imageview-5" src='/assets/client4.png' />
</div>
<div className={styles["imageview-5-e7eab5a0cf4849cda98e0c4a80376eaf"]} >
    <Image id="imageview-5-e7eab5a0cf4849cda98e0c4a80376eaf" style={{ objectFit: 'contain' }} fill={true} alt="imageview-5" src='/assets/client5.png' />
</div>
<div className={styles["imageview-5-2e35a5739493438e8abf18cb0c98aa82"]} >
    <Image id="imageview-5-2e35a5739493438e8abf18cb0c98aa82" style={{ objectFit: 'contain' }} fill={true} alt="imageview-5" src='/assets/client6.png' />
</div>
</div>
<div id="layer-16-e507d985c8364fefbfd88096805fad10" className={styles["layer-16-e507d985c8364fefbfd88096805fad10"]}  >
<div className={styles["imageview-9-9b0f7f82cacc4f9aa014f63d6566c38c"]} >
    <Image id="imageview-9-9b0f7f82cacc4f9aa014f63d6566c38c" style={{ objectFit: 'contain' }} fill={true} alt="imageview-9" src='/assets/client7.png' />
</div>
<div className={styles["imageview-9-876cb6ef64c34c5fabacb163e7bbd9bc"]} >
    <Image id="imageview-9-876cb6ef64c34c5fabacb163e7bbd9bc" style={{ objectFit: 'contain' }} fill={true} alt="imageview-9" src='/assets/client8.png' />
</div>
<div className={styles["imageview-9-3d7246e8b3ce49e2b4097acb9023fd94"]} >
    <Image id="imageview-9-3d7246e8b3ce49e2b4097acb9023fd94" style={{ objectFit: 'contain' }} fill={true} alt="imageview-9" src='/assets/client9.png' />
</div>
<div className={styles["imageview-9-5e0ee9d5f94c43d5b83d8aa20e00fc0e"]} >
    <Image id="imageview-9-5e0ee9d5f94c43d5b83d8aa20e00fc0e" style={{ objectFit: 'contain' }} fill={true} alt="imageview-9" src='/assets/client10.png' />
</div>
<div className={styles["imageview-9-b0a9f0f0c8ea453cb2dcfbbef768175d"]} >
    <Image id="imageview-9-b0a9f0f0c8ea453cb2dcfbbef768175d" style={{ objectFit: 'contain' }} fill={true} alt="imageview-9" src='/assets/client11.png' />
</div>
<div className={styles["imageview-9-e5759ca7ae0f4b95bb0749e36d0ad71c"]} >
    <Image id="imageview-9-e5759ca7ae0f4b95bb0749e36d0ad71c" style={{ objectFit: 'contain' }} fill={true} alt="imageview-9" src='/assets/client12.png' />
</div>
</div>
</div>
<div id="title2-3519a2a84c514d3c89ac262a27f4ca9a" className={styles["title2-3519a2a84c514d3c89ac262a27f4ca9a"]}  >

<div className={title2FontFamily.variable}>
    <div id="text-16-615312194aed43a9879383e1efb95244" className={styles["text-16-615312194aed43a9879383e1efb95244"]}  >
        Product
    </div>
</div>

<div className={title2FontFamily.variable}>
    <div id="text-17-d1faf6d8cd23414dacb745f7ae55fb71" className={styles["text-17-d1faf6d8cd23414dacb745f7ae55fb71"]}  >
        features
    </div>
</div>
</div>

<div className={bodyFontFamily.variable}>
    <div id="text-18-5d3b81d8b3b7455282b588612339702b" className={styles["text-18-5d3b81d8b3b7455282b588612339702b"]}  >
        Codemagic CI/CD integrates with Azure DevOps, GitHub, GitLab, Bitbucket, and other self-hosted or cloud-based Git repositories. You push the code – and Codemagic takes care of building, testing, and distributing your app.
    </div>
</div>
<div id="features-0e914425fd5443f2b52742f94a70a11e" className={styles["features-0e914425fd5443f2b52742f94a70a11e"]}  >
<div id="layer-18-d8bf9e8ebb8143bbacc9384f151fba30" className={styles["layer-18-d8bf9e8ebb8143bbacc9384f151fba30"]}  >
<div className={styles["imageview-17-025b10f2ce14493bb2149d19ed73d063"]} >
    <Image id="imageview-17-025b10f2ce14493bb2149d19ed73d063" style={{ objectFit: 'contain' }} fill={true} alt="imageview-17" src='/assets/feature1.png' />
</div>

<div className={title3FontFamily.variable}>
    <div id="text-19-47d30c19ea6d4df2ae943b30a5d4f3af" className={styles["text-19-47d30c19ea6d4df2ae943b30a5d4f3af"]}  >
        Build for all platforms
    </div>
</div>

<div className={bodyFontFamily.variable}>
    <div id="text-20-8f850ac1d94f4b2ab2269b40bec9ae0e" className={styles["text-20-8f850ac1d94f4b2ab2269b40bec9ae0e"]}  >
        Use your preferred framework and target any platform with Codemagic – Android, iOS, web, or desktop.
    </div>
</div>
</div>
<div id="layer-18-a121160fe51047a4980ca32e485dd24b" className={styles["layer-18-a121160fe51047a4980ca32e485dd24b"]}  >
<div className={styles["imageview-17-036d0e77f49245d283db24b5310336b2"]} >
    <Image id="imageview-17-036d0e77f49245d283db24b5310336b2" style={{ objectFit: 'contain' }} fill={true} alt="imageview-17" src='/assets/feature2.png' />
</div>

<div className={title3FontFamily.variable}>
    <div id="text-19-acf42409e0084210a72c487855ff7625" className={styles["text-19-acf42409e0084210a72c487855ff7625"]}  >
        Automate with Codemagic
    </div>
</div>

<div className={bodyFontFamily.variable}>
    <div id="text-20-902a29b315764af08cd85a937495d433" className={styles["text-20-902a29b315764af08cd85a937495d433"]}  >
        Automate the most time-consuming app release steps, such as code signing, building and uploading new app versions, and setting changelogs.
    </div>
</div>
</div>
<div id="layer-18-02d14445afb844a4a49f4840b633f92e" className={styles["layer-18-02d14445afb844a4a49f4840b633f92e"]}  >
<div className={styles["imageview-17-c1cd1b010866406b9c8f3d559efc6ff2"]} >
    <Image id="imageview-17-c1cd1b010866406b9c8f3d559efc6ff2" style={{ objectFit: 'contain' }} fill={true} alt="imageview-17" src='/assets/feature3.png' />
</div>

<div className={title3FontFamily.variable}>
    <div id="text-19-77ae51e245ac47a7b8d9bfb4032e6465" className={styles["text-19-77ae51e245ac47a7b8d9bfb4032e6465"]}  >
        Fully hosted and maintained
    </div>
</div>

<div className={bodyFontFamily.variable}>
    <div id="text-20-2551a4127e044edc953a39ff369e3e01" className={styles["text-20-2551a4127e044edc953a39ff369e3e01"]}  >
        Get instant access to different hardware and software configurations with our cloud-based and fully maintained infrastructure.
    </div>
</div>
</div>
</div>
<div className={styles["imageview-20-ca1306b1e2f14b3da7e450b404b8b7c5"]} >
    <Image id="imageview-20-ca1306b1e2f14b3da7e450b404b8b7c5" style={{ objectFit: 'contain' }} fill={true} alt="imageview-20" src='/assets/flutter.png' />
</div>

<div className={bodyFontFamily.variable}>
    <div id="signuptext-2cf9cfee3c7e43e88dd539734ff0568b" className={styles["signuptext-2cf9cfee3c7e43e88dd539734ff0568b"]}  >
        Configuration as code / Flutter workflow editor
    </div>
</div>
<div id="techs-98f16bf563254cdea67190ff1da566df" className={styles["techs-98f16bf563254cdea67190ff1da566df"]}  >

<div className={title2FontFamily.variable}>
    <div id="text-26-2360c16ae00e479fa2ad34a7f12b0209" className={styles["text-26-2360c16ae00e479fa2ad34a7f12b0209"]}  >
        Get started with CI/CD for
    </div>
</div>
<div id="techscontainer-90f47b5493fe48fd916e6d1357cbf521" className={styles["techscontainer-90f47b5493fe48fd916e6d1357cbf521"]}  >
<div id="techcardsrow1-c05a629c4a52476c9569a34fd8c6cfd8" className={styles["techcardsrow1-c05a629c4a52476c9569a34fd8c6cfd8"]}  >
<div id="layer-25-dcf8f18ec7f1438dba7ace9494754a99" className={styles["layer-25-dcf8f18ec7f1438dba7ace9494754a99"]}  >
<div id="layer-29-67d77dacc8d64b1bb9cb72ab59d80ed7" className={styles["layer-29-67d77dacc8d64b1bb9cb72ab59d80ed7"]}  >
<div className={styles["imageview-21-fe9dd791db4f4099a157a4d590dc684e"]} >
    <Image id="imageview-21-fe9dd791db4f4099a157a4d590dc684e" style={{ objectFit: 'contain' }} fill={true} alt="imageview-21" src='/assets/fluttericon.png' />
</div>

<div className={titleFont.variable}>
    <div id="text-29-0854b0cd838348f39373e53bca54e55b" className={styles["text-29-0854b0cd838348f39373e53bca54e55b"]}  >
        Flutter
    </div>
</div>
</div>
<div id="layer-31-da5f5caad16a41a4acc3ca20b475f81b" className={styles["layer-31-da5f5caad16a41a4acc3ca20b475f81b"]}  >
<div className={styles["imageview-21-236cc7f03b8c4e1ba2a8608a8821f768"]} >
    <Image id="imageview-21-236cc7f03b8c4e1ba2a8608a8821f768" style={{ objectFit: 'contain' }} fill={true} alt="imageview-21" src='/assets/androidicon.png' />
</div>

<div className={titleFont.variable}>
    <div id="text-29-a72cca75dfc34574974c07a4e3deed06" className={styles["text-29-a72cca75dfc34574974c07a4e3deed06"]}  >
        Native Android
    </div>
</div>
</div>
</div>
<div id="layer-26-633d759dd1644be5ac4d25981389bbc5" className={styles["layer-26-633d759dd1644be5ac4d25981389bbc5"]}  >
<div id="layer-30-a6690884883f4d45a0c6bfce03dda566" className={styles["layer-30-a6690884883f4d45a0c6bfce03dda566"]}  >
<div className={styles["imageview-21-2bccd10e07664d00ab3693ec6042b055"]} >
    <Image id="imageview-21-2bccd10e07664d00ab3693ec6042b055" style={{ objectFit: 'contain' }} fill={true} alt="imageview-21" src='/assets/iosicon.png' />
</div>

<div className={titleFont.variable}>
    <div id="text-29-9f87c78d085e47feb8dd9162bfef17d6" className={styles["text-29-9f87c78d085e47feb8dd9162bfef17d6"]}  >
        iOS
    </div>
</div>
</div>
<div id="layer-32-a985606882a44a47a11a5bfd82140095" className={styles["layer-32-a985606882a44a47a11a5bfd82140095"]}  >
<div className={styles["imageview-21-df9bba34a0ad47069860ebb51d19d3e7"]} >
    <Image id="imageview-21-df9bba34a0ad47069860ebb51d19d3e7" style={{ objectFit: 'contain' }} fill={true} alt="imageview-21" src='/assets/reacticon.png' />
</div>

<div className={titleFont.variable}>
    <div id="text-29-252c4a40b89749b59a57424efe8b7ba9" className={styles["text-29-252c4a40b89749b59a57424efe8b7ba9"]}  >
        React Native
    </div>
</div>
</div>
</div>
</div>
<div id="techcardsrow2-1ad95755bf644bdf8c31e83bef875bd3" className={styles["techcardsrow2-1ad95755bf644bdf8c31e83bef875bd3"]}  >
<div id="layer-25-8c429381cebe4ddb941a9f30483e420a" className={styles["layer-25-8c429381cebe4ddb941a9f30483e420a"]}  >
<div id="layer-29-7df93a8fdd8744c58b3251f09b5abb74" className={styles["layer-29-7df93a8fdd8744c58b3251f09b5abb74"]}  >
<div className={styles["imageview-21-e22b77d0b1b74a23b83c63e6b7da57a1"]} >
    <Image id="imageview-21-e22b77d0b1b74a23b83c63e6b7da57a1" style={{ objectFit: 'contain' }} fill={true} alt="imageview-21" src='/assets/unityicon.png' />
</div>

<div className={titleFont.variable}>
    <div id="text-29-1c9de40581e646c091a2a4686264acef" className={styles["text-29-1c9de40581e646c091a2a4686264acef"]}  >
        Unity
    </div>
</div>
</div>
<div id="layer-31-df9aca64dca148b388d601dafdda8a93" className={styles["layer-31-df9aca64dca148b388d601dafdda8a93"]}  >
<div className={styles["imageview-21-03c58793dfbd4fea819995cc80bdd49b"]} >
    <Image id="imageview-21-03c58793dfbd4fea819995cc80bdd49b" style={{ objectFit: 'contain' }} fill={true} alt="imageview-21" src='/assets/ionicicon.png' />
</div>

<div className={titleFont.variable}>
    <div id="text-29-d6805efc33c04c82b4c989433b249984" className={styles["text-29-d6805efc33c04c82b4c989433b249984"]}  >
        Ionic
    </div>
</div>
</div>
</div>
<div id="layer-25-5a631e00762b4f3582699ffd75861e1c" className={styles["layer-25-5a631e00762b4f3582699ffd75861e1c"]}  >
<div id="layer-29-68889f178b9742d8b0d1e612b829f4d9" className={styles["layer-29-68889f178b9742d8b0d1e612b829f4d9"]}  >
<div className={styles["imageview-21-1d78b36460624ffbbe83d7abc704a066"]} >
    <Image id="imageview-21-1d78b36460624ffbbe83d7abc704a066" style={{ objectFit: 'contain' }} fill={true} alt="imageview-21" src='/assets/whiteicon.png' />
</div>

<div className={titleFont.variable}>
    <div id="text-29-7fe5b888894a41449b63f89f0f5253e4" className={styles["text-29-7fe5b888894a41449b63f89f0f5253e4"]}  >
        White label
    </div>
</div>
</div>
</div>
</div>
</div>
</div>
<div id="whychoose-f0c4408bbdcc44619d05db8922ae6be3" className={styles["whychoose-f0c4408bbdcc44619d05db8922ae6be3"]}  >
<div id="layer-38-5ff183b9d0124590b43567254e095ed1" className={styles["layer-38-5ff183b9d0124590b43567254e095ed1"]}  >

<div className={title2FontFamily.variable}>
    <div id="text-36-82c7aaca9c7549e28dc40c5aacddd5b1" className={styles["text-36-82c7aaca9c7549e28dc40c5aacddd5b1"]}  >
        Top reasons
    </div>
</div>

<div className={title2FontFamily.variable}>
    <div id="text-37-b73868804f6143689fd7e7852dcee260" className={styles["text-37-b73868804f6143689fd7e7852dcee260"]}  >
        for teams choosing
    </div>
</div>
</div>
<div id="layer-39-f3c88025fee743338a551374c2f2390c" className={styles["layer-39-f3c88025fee743338a551374c2f2390c"]}  >

<div className={title2FontFamily.variable}>
    <div id="text-35-388f7c94825c40688cc712a8d164926a" className={styles["text-35-388f7c94825c40688cc712a8d164926a"]}  >
        CodeWizard
    </div>
</div>
</div>
</div>
<div id="productfeature-275a727a04c743aaa2ac9c8bcc75e2ea" className={styles["productfeature-275a727a04c743aaa2ac9c8bcc75e2ea"]}  >
<div id="layer-41-ce7a4981c3114779ac3ae27bf6d25597" className={styles["layer-41-ce7a4981c3114779ac3ae27bf6d25597"]}  >

<div className={title3FontFamily.variable}>
    <div id="text-38-dd200d637ba346b19c88a54ce5c43074" className={styles["text-38-dd200d637ba346b19c88a54ce5c43074"]}  >
        Easy to set up
    </div>
</div>

<div className={bodyFontFamily.variable}>
    <div id="text-39-52fc3fa1c8fc41e9b43b019e030a0c26" className={styles["text-39-52fc3fa1c8fc41e9b43b019e030a0c26"]}  >
        The intuitive UI makes setting up Codemagic easy and onboarding is quick thanks to out-of-the-box support for the most popular tools like fastlane. We offer free onboarding assistance to help you get all set.
    </div>
</div>
</div>
<div id="separator-fe6cfb374f3f455989c0ce7c6bc7a459" className={styles["separator-fe6cfb374f3f455989c0ce7c6bc7a459"]}  >
<div id="lineabove-f079dedd08704f0497e0d6313d06401c" className={styles["lineabove-f079dedd08704f0497e0d6313d06401c"]}  ></div>
<div id="circle-ad055fa5e19a4095ae41fc4b8182dc01" className={styles["circle-ad055fa5e19a4095ae41fc4b8182dc01"]}  ></div>
<div id="linebelow-932f3d9c48bf4220b2c8ddbf7f82225d" className={styles["linebelow-932f3d9c48bf4220b2c8ddbf7f82225d"]}  ></div>
</div>
<div className={styles["imageview-30-86a29bb3feab41a5bcf840445a68ec4a"]} >
    <Image id="imageview-30-86a29bb3feab41a5bcf840445a68ec4a" style={{ objectFit: 'contain' }} fill={true} alt="imageview-30" src='/assets/prodfeature1.png' />
</div>
</div>
<div id="productfeature-f0b6f318c5654b0fadb649fb3ebf2237" className={styles["productfeature-f0b6f318c5654b0fadb649fb3ebf2237"]}  >
<div className={styles["imageview-30-e9a585760fff4266babc28bb3c6aa393"]} >
    <Image id="imageview-30-e9a585760fff4266babc28bb3c6aa393" style={{ objectFit: 'contain' }} fill={true} alt="imageview-30" src='/assets/prodfeature2.png' />
</div>
<div id="separator-626a069cdff04be78d926fa4796f7731" className={styles["separator-626a069cdff04be78d926fa4796f7731"]}  >
<div id="lineabove-48afd5f0a8a54c80a275da74ab5d3587" className={styles["lineabove-48afd5f0a8a54c80a275da74ab5d3587"]}  ></div>
<div id="circle-4632ef974df74a939f3bf821dd0ba08c" className={styles["circle-4632ef974df74a939f3bf821dd0ba08c"]}  ></div>
<div id="linebelow-8c872fa714584d75b6cc6dc51d4fa794" className={styles["linebelow-8c872fa714584d75b6cc6dc51d4fa794"]}  ></div>
</div>
<div id="layer-41-f6182646d8404e1f874d73a75e19eef3" className={styles["layer-41-f6182646d8404e1f874d73a75e19eef3"]}  >

<div className={title3FontFamily.variable}>
    <div id="text-38-12825f1dca574e12bb031fbcb6b16425" className={styles["text-38-12825f1dca574e12bb031fbcb6b16425"]}  >
        Flutter workflow editor or configuration as code
    </div>
</div>

<div className={bodyFontFamily.variable}>
    <div id="text-39-fba3c055d14d4550994cfca5f70a9df7" className={styles["text-39-fba3c055d14d4550994cfca5f70a9df7"]}  >
        Choose between an easy-to-use UI and automatic project configuration for Flutter projects or have more control over your workflows with codemagic.yaml.
    </div>
</div>
</div>
</div>
<div id="productfeature-f964c34c7a414f02b22572d09010f33a" className={styles["productfeature-f964c34c7a414f02b22572d09010f33a"]}  >
<div id="layer-41-2b38f280bb4f45a9b72d837cce5b0017" className={styles["layer-41-2b38f280bb4f45a9b72d837cce5b0017"]}  >

<div className={title3FontFamily.variable}>
    <div id="text-38-4714dae1a9c34f99a6f3dbbba51b63c1" className={styles["text-38-4714dae1a9c34f99a6f3dbbba51b63c1"]}  >
        First-class support for iOS
    </div>
</div>

<div className={bodyFontFamily.variable}>
    <div id="text-39-94284550b1ea4c1e8d710e56429049fc" className={styles["text-39-94284550b1ea4c1e8d710e56429049fc"]}  >
        Codemagic takes the pain out of code signing with built-in code signing identities management and the Apple Developer portal integration.
    </div>
</div>
</div>
<div id="separator-d0cac87a38fa42aa9394f67637b9c832" className={styles["separator-d0cac87a38fa42aa9394f67637b9c832"]}  >
<div id="lineabove-cf2dcbe9660441f9aa892640d6ba135f" className={styles["lineabove-cf2dcbe9660441f9aa892640d6ba135f"]}  ></div>
<div id="circle-9d6deabdb963437c87212b04710fdaab" className={styles["circle-9d6deabdb963437c87212b04710fdaab"]}  ></div>
<div id="linebelow-3b809ceb3d9f44f4b21cc9668ccbb341" className={styles["linebelow-3b809ceb3d9f44f4b21cc9668ccbb341"]}  ></div>
</div>
<div className={styles["imageview-30-c38e3f2f6e9c48839e0249bda60c0de0"]} >
    <Image id="imageview-30-c38e3f2f6e9c48839e0249bda60c0de0" style={{ objectFit: 'contain' }} fill={true} alt="imageview-30" src='/assets/prodfeature3.png' />
</div>
</div>
<div id="productfeature-49bd2aa2837144d3b1de47e938ec094e" className={styles["productfeature-49bd2aa2837144d3b1de47e938ec094e"]}  >
<div className={styles["imageview-30-7ef36f89f66e48a5be731dea3f00ab1f"]} >
    <Image id="imageview-30-7ef36f89f66e48a5be731dea3f00ab1f" style={{ objectFit: 'contain' }} fill={true} alt="imageview-30" src='/assets/prodfeature4.png' />
</div>
<div id="separator-20aff7fa8142409293cd59caa8519844" className={styles["separator-20aff7fa8142409293cd59caa8519844"]}  >
<div id="lineabove-906b1273bf884c25a17386b48026427e" className={styles["lineabove-906b1273bf884c25a17386b48026427e"]}  ></div>
<div id="circle-f422065124b842ea93ad3ce8dcc0a62a" className={styles["circle-f422065124b842ea93ad3ce8dcc0a62a"]}  ></div>
<div id="linebelow-15ebcd68133c44af85f185b84e9df68f" className={styles["linebelow-15ebcd68133c44af85f185b84e9df68f"]}  ></div>
</div>
<div id="layer-41-acca505ac23a4f3da048b198d2569a63" className={styles["layer-41-acca505ac23a4f3da048b198d2569a63"]}  >

<div className={title3FontFamily.variable}>
    <div id="text-38-6b7a7476bf5d4c25b93d99b3efd43640" className={styles["text-38-6b7a7476bf5d4c25b93d99b3efd43640"]}  >
        Integrates with third-party services
    </div>
</div>

<div className={bodyFontFamily.variable}>
    <div id="text-39-03fd65a124e64f1990cb14424a1d4b4b" className={styles["text-39-03fd65a124e64f1990cb14424a1d4b4b"]}  >
        Codemagic integrates with your tech stack so you can use the tools you love and automate the entire build, test, and release pipeline.
    </div>
</div>
</div>
</div>
<div id="productfeature-3d182e7e015a4caab93cc9ae584f01d8" className={styles["productfeature-3d182e7e015a4caab93cc9ae584f01d8"]}  >
<div id="layer-41-cce1dee4ae814975b42d3dc18fd869a4" className={styles["layer-41-cce1dee4ae814975b42d3dc18fd869a4"]}  >

<div className={title3FontFamily.variable}>
    <div id="text-38-a559d691bd684ffeb92d2881256d3373" className={styles["text-38-a559d691bd684ffeb92d2881256d3373"]}  >
        Predictable pricing
    </div>
</div>

<div className={bodyFontFamily.variable}>
    <div id="text-39-c7141bf6fb0240f9bc9392732669cd40" className={styles["text-39-c7141bf6fb0240f9bc9392732669cd40"]}  >
        Choose between usage-based or unlimited usage. Easily add more parallel builds as your team expands.
    </div>
</div>
</div>
<div id="separator-98eb5f2887ea4246a9027bfb72573842" className={styles["separator-98eb5f2887ea4246a9027bfb72573842"]}  >
<div id="lineabove-2188252730fd4dbd88a30837da7a41a8" className={styles["lineabove-2188252730fd4dbd88a30837da7a41a8"]}  ></div>
<div id="circle-d8777d6eba604f95927a68a31c16da5a" className={styles["circle-d8777d6eba604f95927a68a31c16da5a"]}  ></div>
<div id="linebelow-195a9550bdb2471490ed4c5bd07e9051" className={styles["linebelow-195a9550bdb2471490ed4c5bd07e9051"]}  ></div>
</div>
<div className={styles["imageview-30-f6fc2aebc2324049944733b22328ab5d"]} >
    <Image id="imageview-30-f6fc2aebc2324049944733b22328ab5d" style={{ objectFit: 'contain' }} fill={true} alt="imageview-30" src='/assets/prodfeature5.png' />
</div>
</div>
<div id="whychoose-cab2c5fa8e4b4ea684c50d96a13568e9" className={styles["whychoose-cab2c5fa8e4b4ea684c50d96a13568e9"]}  >
<div id="layer-38-a09b3132b506450b91bcaffd148303cc" className={styles["layer-38-a09b3132b506450b91bcaffd148303cc"]}  >

<div className={title2FontFamily.variable}>
    <div id="text-36-7613cfbaa4794922a355a10ca8d1e9c3" className={styles["text-36-7613cfbaa4794922a355a10ca8d1e9c3"]}  >
        Trusted by developers
    </div>
</div>

<div className={title2FontFamily.variable}>
    <div id="text-37-d7d123c0411b44fd82dc8d965cd11dff" className={styles["text-37-d7d123c0411b44fd82dc8d965cd11dff"]}  >
        and
    </div>
</div>
</div>
<div id="layer-39-3e904d736f334ef4ad3df0100d022c19" className={styles["layer-39-3e904d736f334ef4ad3df0100d022c19"]}  >

<div className={title2FontFamily.variable}>
    <div id="text-35-4725a9f10a064bf0900d6b4ca9cb0c59" className={styles["text-35-4725a9f10a064bf0900d6b4ca9cb0c59"]}  >
        industry leaders
    </div>
</div>
</div>
</div>
<div id="layer-74-917bdd58ad704167ac0833384ee4aa04" className={styles["layer-74-917bdd58ad704167ac0833384ee4aa04"]}  >
<div id="layer-75-aa34f8859a014c16b05803d3fae3bf06" className={styles["layer-75-aa34f8859a014c16b05803d3fae3bf06"]}  >
<div className={styles["imageview-35-f145649de8a841a7a4be19ab46261cef"]} >
    <Image id="imageview-35-f145649de8a841a7a4be19ab46261cef" style={{ objectFit: 'contain' }} fill={true} alt="imageview-35" src='/assets/trusted1.png' />
</div>

<div className={title2FontFamily.variable}>
    <div id="text-51-87d8db85f0a24bf7806b85deeec7831d" className={styles["text-51-87d8db85f0a24bf7806b85deeec7831d"]}  >
        84%
    </div>
</div>

<div className={bodyFontFamily.variable}>
    <div id="text-52-a27e40b66b624bc7a00142904637b64c" className={styles["text-52-a27e40b66b624bc7a00142904637b64c"]}  >
        Decrease in publication time
    </div>
</div>

<div className={titleFont.variable}>
    <div id="text-56-8e304bfca7d94ad6abfa288f10d2ec2b" className={styles["text-56-8e304bfca7d94ad6abfa288f10d2ec2b"]}  >
        Read the story
    </div>
</div>
</div>
<div id="layer-76-ad8f7c420b6d445ca4928423e6fe01c0" className={styles["layer-76-ad8f7c420b6d445ca4928423e6fe01c0"]}  >
<div className={styles["imageview-35-70a9856e703a4a868efe78f8cfcbb436"]} >
    <Image id="imageview-35-70a9856e703a4a868efe78f8cfcbb436" style={{ objectFit: 'contain' }} fill={true} alt="imageview-35" src='/assets/trusted4good.png' />
</div>

<div className={title2FontFamily.variable}>
    <div id="text-51-f5665e366377478c9ab93b847c70c0dd" className={styles["text-51-f5665e366377478c9ab93b847c70c0dd"]}  >
        1,200h
    </div>
</div>

<div className={bodyFontFamily.variable}>
    <div id="text-52-14de32c62f634a928215786a4c6474a2" className={styles["text-52-14de32c62f634a928215786a4c6474a2"]}  >
        Of developer work saved per year
    </div>
</div>

<div className={titleFont.variable}>
    <div id="text-56-9e365c6b7f2e498da48938909c08c208" className={styles["text-56-9e365c6b7f2e498da48938909c08c208"]}  >
        Read the story
    </div>
</div>
</div>
<div id="layer-77-e423fb76baad44e4a40eec839c5c0165" className={styles["layer-77-e423fb76baad44e4a40eec839c5c0165"]}  >
<div className={styles["imageview-35-dbdec56a919143f1875a218373ec901a"]} >
    <Image id="imageview-35-dbdec56a919143f1875a218373ec901a" style={{ objectFit: 'contain' }} fill={true} alt="imageview-35" src='/assets/trusted3.png' />
</div>

<div className={title2FontFamily.variable}>
    <div id="text-51-c55ab06f4e594a818dc77512bad4bdff" className={styles["text-51-c55ab06f4e594a818dc77512bad4bdff"]}  >
        15%
    </div>
</div>

<div className={bodyFontFamily.variable}>
    <div id="text-52-8f4ce2e8de654ffc9f87c83b5673fd99" className={styles["text-52-8f4ce2e8de654ffc9f87c83b5673fd99"]}  >
        Time saved each day
    </div>
</div>

<div className={titleFont.variable}>
    <div id="text-56-76260d251432424cbe278c2032f1da12" className={styles["text-56-76260d251432424cbe278c2032f1da12"]}  >
        Read the story
    </div>
</div>
</div>
</div>
<div id="cacard-aac96ff887a94a1c83731f693230943e" className={styles["cacard-aac96ff887a94a1c83731f693230943e"]}  >
<div id="layer-86-7cded0d8950d467eac4ecb709babe2da" className={styles["layer-86-7cded0d8950d467eac4ecb709babe2da"]}  >

<div className={titleFont.variable}>
    <div id="text-86-1a90db8a739c40368ceb283d8dc71087" className={styles["text-86-1a90db8a739c40368ceb283d8dc71087"]}  >
        Getting started is easy
    </div>
</div>

<div className={bodyFontFamily.variable}>
    <div id="text-87-e9dcc9b6fb324702b9dc0f6794c44e39" className={styles["text-87-e9dcc9b6fb324702b9dc0f6794c44e39"]}  >
        Sign up today and deliver your apps in record time
    </div>
</div>
<div id="layer-88-c1e278b4e2ab4ec988e04cf91d609b92" className={styles["layer-88-c1e278b4e2ab4ec988e04cf91d609b92"]}  >

<div className={titleFont.variable}>
    <div id="text-88-13b138f41d944eb788cde9c7b8a23648" className={styles["text-88-13b138f41d944eb788cde9c7b8a23648"]}  >
        Get started now
    </div>
</div>
<span id="7592ab9d9d734882ab58bc243d640fd8" className={styles["icon-2-7592ab9d9d734882ab58bc243d640fd8"]}  >arrow_right_alt</span>
</div>
</div>
<div id="layer-87-da1cd69637b2429cacbf32380c56878f" className={styles["layer-87-da1cd69637b2429cacbf32380c56878f"]}  >
<div className={styles["imageview-37-1d1e2c4297744f82abe57b69a763be5f"]} >
    <Image id="imageview-37-1d1e2c4297744f82abe57b69a763be5f" style={{ objectFit: 'contain' }} fill={true} alt="imageview-37" src='/assets/getStarted.png' />
</div>
</div>
</div>
<div id="footer-5e7db8c99fca4bac9782d88a720f0bfd" className={styles["footer-5e7db8c99fca4bac9782d88a720f0bfd"]}  >
<div id="layer-77-39e816f4863e41a6ae2ec236c6882eb0" className={styles["layer-77-39e816f4863e41a6ae2ec236c6882eb0"]}  >
<div id="productfooter-6eb15fe59d2d4e59841e003f56279f0b" className={styles["productfooter-6eb15fe59d2d4e59841e003f56279f0b"]}  >

<div className={titleFont.variable}>
    <div id="text-59-df79abc788824ba88c5edf087062d052" className={styles["text-59-df79abc788824ba88c5edf087062d052"]}  >
        Product
    </div>
</div>

<div className={bodyFontFamily.variable}>
    <div id="text-60-ec0e354a46104efda962689213d78cb8" className={styles["text-60-ec0e354a46104efda962689213d78cb8"]}  >
        Pricing
    </div>
</div>

<div className={bodyFontFamily.variable}>
    <div id="text-60-a81b440551924594af17dcef38e700e9" className={styles["text-60-a81b440551924594af17dcef38e700e9"]}  >
        Customer stories
    </div>
</div>

<div className={bodyFontFamily.variable}>
    <div id="text-60-5ee846d38e6246349e42cf041ef69bce" className={styles["text-60-5ee846d38e6246349e42cf041ef69bce"]}  >
        Terms
    </div>
</div>

<div className={bodyFontFamily.variable}>
    <div id="text-60-067f51fa8d3347aca1c356505ed04bc7" className={styles["text-60-067f51fa8d3347aca1c356505ed04bc7"]}  >
        Privacy Policy
    </div>
</div>

<div className={bodyFontFamily.variable}>
    <div id="text-60-79b43befe49f4907a9db838d8a990344" className={styles["text-60-79b43befe49f4907a9db838d8a990344"]}  >
        Security Statement
    </div>
</div>
</div>
<div id="comparefooter-910e15e780dc484e8a8445f559789ad6" className={styles["comparefooter-910e15e780dc484e8a8445f559789ad6"]}  >

<div className={titleFont.variable}>
    <div id="text-59-534ce541f602444a9e8bb9597f1860e6" className={styles["text-59-534ce541f602444a9e8bb9597f1860e6"]}  >
        Compare
    </div>
</div>

<div className={bodyFontFamily.variable}>
    <div id="text-60-12b34bd125e74ffebf36e81fba0f6de7" className={styles["text-60-12b34bd125e74ffebf36e81fba0f6de7"]}  >
        CodeWizard vs Bitrise
    </div>
</div>

<div className={bodyFontFamily.variable}>
    <div id="text-60-7968b1775f5542558cdbb07d3ff3cba1" className={styles["text-60-7968b1775f5542558cdbb07d3ff3cba1"]}  >
        CodeWizard vs Jenkins
    </div>
</div>

<div className={bodyFontFamily.variable}>
    <div id="text-60-c17d1e9870a742cb887942ad23f0b95e" className={styles["text-60-c17d1e9870a742cb887942ad23f0b95e"]}  >
        CodeWizard vs CircleCI
    </div>
</div>

<div className={bodyFontFamily.variable}>
    <div id="text-60-c7d940095dc64c858af31f3aa86c3b7d" className={styles["text-60-c7d940095dc64c858af31f3aa86c3b7d"]}  >
        CodeWizard vs GitHub Actions
    </div>
</div>
</div>
<div id="learnfooter-6206eec881304bec8f2f377f0acfa95d" className={styles["learnfooter-6206eec881304bec8f2f377f0acfa95d"]}  >

<div className={titleFont.variable}>
    <div id="text-59-aac6a63248a9402082e72b7106fd5e99" className={styles["text-59-aac6a63248a9402082e72b7106fd5e99"]}  >
        Learn
    </div>
</div>

<div className={bodyFontFamily.variable}>
    <div id="text-60-7d51e22cd69242289e0c5ef1882e06f5" className={styles["text-60-7d51e22cd69242289e0c5ef1882e06f5"]}  >
        Documentation
    </div>
</div>

<div className={bodyFontFamily.variable}>
    <div id="text-60-f209753b78a8480a9bab05ac72105ff0" className={styles["text-60-f209753b78a8480a9bab05ac72105ff0"]}  >
        Guides
    </div>
</div>

<div className={bodyFontFamily.variable}>
    <div id="text-60-222212f6198d4689a0532860118c8fbc" className={styles["text-60-222212f6198d4689a0532860118c8fbc"]}  >
        Blog
    </div>
</div>

<div className={bodyFontFamily.variable}>
    <div id="text-60-38c46af95bf74792a1acf88790c0cc67" className={styles["text-60-38c46af95bf74792a1acf88790c0cc67"]}  >
        Webinars
    </div>
</div>
</div>
<div id="supportfooter-48fc39e7ab0144c295a18c794fb337e5" className={styles["supportfooter-48fc39e7ab0144c295a18c794fb337e5"]}  >

<div className={titleFont.variable}>
    <div id="text-59-f89faac9ec214ac9ae2c3007ba0b6bbf" className={styles["text-59-f89faac9ec214ac9ae2c3007ba0b6bbf"]}  >
        Support
    </div>
</div>

<div className={bodyFontFamily.variable}>
    <div id="text-60-6253117046634c0584c497b86bb95fb5" className={styles["text-60-6253117046634c0584c497b86bb95fb5"]}  >
        Ask the Community
    </div>
</div>

<div className={bodyFontFamily.variable}>
    <div id="text-60-8459019b0d3747baa0f1ae5f2e6362e5" className={styles["text-60-8459019b0d3747baa0f1ae5f2e6362e5"]}  >
        For enterprise users
    </div>
</div>

<div className={bodyFontFamily.variable}>
    <div id="text-60-9bb59b73657b4ccb98ec7fcde40da748" className={styles["text-60-9bb59b73657b4ccb98ec7fcde40da748"]}  >
        Watch the Demo
    </div>
</div>

<div className={bodyFontFamily.variable}>
    <div id="text-60-fbea62cdd08a44ac844a2836937f43b5" className={styles["text-60-fbea62cdd08a44ac844a2836937f43b5"]}  >
        Onboarding assitance
    </div>
</div>
</div>
<div id="companyfooter-deac939939a44a3daedc724d0db267bd" className={styles["companyfooter-deac939939a44a3daedc724d0db267bd"]}  >

<div className={titleFont.variable}>
    <div id="text-59-67b72de52a3e41b797a1eb8770d00ffb" className={styles["text-59-67b72de52a3e41b797a1eb8770d00ffb"]}  >
        Company
    </div>
</div>

<div className={bodyFontFamily.variable}>
    <div id="text-60-766857375b574bbea021990e25baa1cf" className={styles["text-60-766857375b574bbea021990e25baa1cf"]}  >
        Contact
    </div>
</div>

<div className={bodyFontFamily.variable}>
    <div id="text-60-78c74a6648fa43bf9524547c3e358bc9" className={styles["text-60-78c74a6648fa43bf9524547c3e358bc9"]}  >
        About Us
    </div>
</div>

<div className={bodyFontFamily.variable}>
    <div id="text-60-cb6cfe9fd85b48aa939266f0a31577fd" className={styles["text-60-cb6cfe9fd85b48aa939266f0a31577fd"]}  >
        Careers
    </div>
</div>

<div className={bodyFontFamily.variable}>
    <div id="text-60-b03e655bbb3f4d9dbcc98e748933244c" className={styles["text-60-b03e655bbb3f4d9dbcc98e748933244c"]}  >
        Press kit
    </div>
</div>
</div>
</div>
<div id="logo-1124af6e045040a5b5eb1358a02619fa" className={styles["logo-1124af6e045040a5b5eb1358a02619fa"]}  >
<div className={styles["imageview-36-0dfd45c9818e49e0ab656782ceb100b8"]} >
    <Image id="imageview-36-0dfd45c9818e49e0ab656782ceb100b8" style={{ objectFit: 'contain' }} fill={true} alt="imageview-36" src='/assets/real.png' />
</div>
</div>
<div id="footerseparator-f08a9a9e0a964911bef6cb3c86cfc7cc" className={styles["footerseparator-f08a9a9e0a964911bef6cb3c86cfc7cc"]}  ></div>

<div className={""}>
    <div id="copyright-9f290a9b3ffd431bbdfdf14f6c1ec818" className={styles["copyright-9f290a9b3ffd431bbdfdf14f6c1ec818"]}  >
        © Nevercode Ltd. | All Rights Reserved | Codemagic is registered trademark of Nevercode Ltd.
    </div>
</div>
</div>
        </div>
    );
}

export default Landing;
            