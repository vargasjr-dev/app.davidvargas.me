export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "li"; text: string }
  | { type: "img"; src: string };
