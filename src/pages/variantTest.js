import * as React from "react"
import TestVid from "../videos/miami.mp4"
import "./variantTest.scss"
import "@fontsource/montserrat"
import "../css/typography.css"
import { Layout } from "../components/layout.jsx"

export default function VariantTestPage() {
  return (
    <header className="video-header">
      <video autoPlay playsinline defaultMuted loop>
        <source src={TestVid} type="video/mp4" />
      </video>
      <Layout>
        <div className="viewport-header">
          <h1
            style={{ fontFamily: "Ailerons", color: "white", fontSize: "13vw" }}
          >
            Aviila
            <span
              style={{
                fontFamily: "Montserrat",
                fontSize: "5vw",
                // textTransform: "uppercase",
                display: "block",
              }}
            >
              Miami
            </span>
          </h1>
        </div>
      </Layout>
    </header>
  )
}
