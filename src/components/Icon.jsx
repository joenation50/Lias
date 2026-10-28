import * as P from "@phosphor-icons/react";

export default function Icon({ name, className = "", weight = "regular", size = 24 }) {
  const Cmp = P[name] ?? P.Circle;
  return <Cmp weight={weight} size={size} className={className} aria-hidden="true" />;
}
