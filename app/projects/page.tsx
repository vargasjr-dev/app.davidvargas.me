export const metadata = {
  title: "Projects — david vargas",
};

export default function Projects() {
  return (
    <div>
      <h1 className="page-title">Projects</h1>
      <p>
        Each project in my portfolio represents a separate business entity under
        my name. They are all built completely open source.
      </p>
      <h2>Portfolio</h2>
      <ul className="post-list">
        <li>
          <a href="https://samepage.network/" target="_blank" rel="noreferrer">
            SamePage
          </a>
          <p style={{ margin: "4px 0 0" }}>
            The web is filled with tools that attempt to be all in one
            platforms, which then leads to disparate data networks in silos.
            SamePage is a protocol that allows applications to read and write
            data across these silos through a shared formal knowledge graph.
          </p>
        </li>
        <li>
          <a href="/projects">
            Vargas Ventures
          </a>
          <p style={{ margin: "4px 0 0" }}>
            I started this LLC when I agreed to an ISA contract with Jonathan
            Hillis to fund a project to build a decentralized application.
            Since then, it&apos;s grown to be the umbrella entity for all of my
            independent open source work.
          </p>
        </li>
      </ul>
    </div>
  );
}
