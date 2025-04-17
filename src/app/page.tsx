'use client';

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import './page.css';


export default function Home() {
  return (
    <div className="eizo-mov">
      <div className="welcome-eizo-mov">
        <Link className="titte" href="/">Welcome to Eizo.mov</Link>
      </div>
      <div className="poetic-text">eizo.mov new release service</div>
      <div className="link">
        <a href="https://wikipedia-eizo.vercel.app/">- Wikipedia Eizo.mov</a><br />
        <a href="https://share-eizo.vercel.app/">- Share Eizo.mov</a><br />
        <a href="https://team.eizo.mov/">- Team Eizo.mov</a><br />
        <a href="https://plugin.eizo.mov/">- Plugin Eizo.mov</a><br />
        <a href="https://shadertoy.eizo.mov/">- Shadertoy Eizo.mov</a><br />
        <a href="https://PVSF.eizo.mov/">- PVSF Eizo.mov</a><br />
      </div>
    </div>
  );
}
