import Link from "next/link";

export const metadata = {
  title: "Predictions — david vargas",
};

const PREDICTIONS_2025 = [
  "Chiefs will win Super Bowl",
  "Bitcoin will go down by end of year",
  "AI VC funding falls YoY",
  "Nvidia market cap flat",
  "No Trump Tariffs on Mexico & Canada",
  "2 Unicorn Devin AI competitors",
  "TikTok will be banned in the US",
  "Stripe goes Public",
  "S&P will be up 5%",
  "Swift Kelce Engagement",
  "Claude 4 Released",
  "US Deficit hits $1.95T",
  "Trump is Inaugurated",
  "Trudeau is ousted",
  "Thunder win the Finals",
  "OpenAI becomes for profit",
  "Trump Musk Bromance will end",
  "Apple announces Vision Pro 2",
  "Train Your Dragon wins Box Office",
  "Bluesky goes under",
  "No Ceasefire in Gaza",
  "Solar increases to 7% of energy",
  "Google Search Rev Falls Q3/4 QoQ",
  "Mets win the World Series",
  "Ceasefire in Ukraine",
];

export default function Predictions() {
  return (
    <div>
      <h1 className="page-title">Predictions</h1>
      <p>The set of Bingo Board Predictions I&apos;ve made:</p>
      <ul className="post-list">
        <li>
          <Link href="/predictions/2025">2025</Link>
        </li>
      </ul>
      <h2>2025</h2>
      <ul>
        {PREDICTIONS_2025.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
