import { useWindowSize } from "../hooks/Window";
import { getTitlePosY } from "./PianoFrame";
import SocialLinks from "./SocialLinks";

const Brief = () => {
  const linePos = useWindowSize();
  return (
    <div
      style={{
        position: "absolute",
        width: linePos.x2 / 2,
        top: getTitlePosY(linePos),
        left: linePos.x2 / 15,
        textAlign: "center",
      }}
    >
      <p
        style={{
          paddingTop: 0,
          fontSize: 0.04 * linePos.x2,
          color: "black",
        }}
      >
        <span>Linzan</span>&nbsp;
        <span style={{ fontWeight: "lighter" }}>Ye</span>
      </p>
      <p
        className="pb-5"
        style={{
          color: "black",
          paddingTop: linePos.x2 * 0.1,
          paddingLeft: 0.06 * linePos.x2,
          paddingRight: 0.06 * linePos.x2,
          display: "grid",
        }}
      >
        <span style={{ fontSize: 0.012 * linePos.x2 }}>Hello! I'm Linzan.</span>
        <span style={{ fontSize: 0.013 * linePos.x2 }}>
          I am obsessed about music.
        </span>
        <span style={{ fontSize: 0.015 * linePos.x2 }}>
          I am also an engineer and researcher.
        </span>
        <span style={{ fontSize: 0.017 * linePos.x2 }}>
          <i>"Music as moments of transcendence"</i>
        </span>
      </p>
      <SocialLinks
        twitterUrl="https://x.com/0Kurono_0"
        githubUrl="https://github.com/lynnzye/"
        emailAddress="kurono_s@outlook.com"
      />
    </div>
  );
};

export default Brief;
