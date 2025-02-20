"use client"

import { ExpandableCardArang } from "@/components/ExpandableCardArang";
import { Meteors } from "@/components/meteors";
import { ShimmerButton } from "@/components/shimmer-button";
// import { ShootingStars } from "@/components/shooting-stars";
import { StarsBackground } from "@/components/stars-background";
import { groupEvents, singleEvents } from "@/data/events";
import { useState } from "react";

export default function Arang() {

  const [mode, setMode] = useState(true);

  return (
    <section className="overflow-hidden w-full relative p-2 sm:p-10 md:p-20 bg-neutral-800 flex flex-col items-center justify-center">
      <h1 className="z-10 section-heading !text-center lg:!text-left mb-3 !text-primary w-full max-w-7xl">Arang</h1>
      <div className="z-10 my-2 w-full flex justify-center items-center">
        <ShimmerButton
          isActive = {mode}
          onClick={() => setMode(true)}
          borderRadius="0.675rem 0 0 0.675rem"
        >
          Individual Events
        </ShimmerButton>
        <ShimmerButton
          isActive = {!mode}
          onClick={() => setMode(false)}
          borderRadius="0 0.675rem 0.675rem 0"
        >
          Group Events
        </ShimmerButton>
      </div>
      {mode ? 
        <ExpandableCardArang events={singleEvents} />:
        <ExpandableCardArang events={groupEvents} />
      }
      <Meteors />
      {/* <ShootingStars /> */}
      <StarsBackground />
    </section>
  )
}
