"use client"

import { ExpandableCardArang } from "@/components/ExpandableCardArang";
import { ShimmerButton } from "@/components/shimmer-button";
import { groupEvents, singleEvents } from "@/data/events";
import { useState } from "react";

export default function Arang() {

  const [mode, setMode] = useState(true);

  return (
    <section className="p-20 bg-neutral-800 flex flex-col items-center justify-center">
        <h1 className=" section-heading !text-primary w-full max-w-7xl">Arang</h1>
        <div className="my-2 w-full flex justify-center items-center">
          <ShimmerButton
            isActive = {mode}
            onClick={() => setMode(true)}
            borderRadius="0.675rem 0 0 0.675rem"
          >
            Single Events
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
    </section>
  )
}
