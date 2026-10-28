import { useEffect, useState } from "react";

function lagosNow() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Lagos",
    weekday: "short",
    hour: "numeric",
    hour12: false,
  }).formatToParts(new Date());
  const day = parts.find((p) => p.type === "weekday")?.value;
  const hour = Number(parts.find((p) => p.type === "hour")?.value);
  return { day, hour };
}

export function useLagosOpen() {
  const [state, setState] = useState(() => calc());
  useEffect(() => {
    const id = setInterval(() => setState(calc()), 60_000);
    return () => clearInterval(id);
  }, []);
  return state;
}

function calc() {
  const { day, hour } = lagosNow();
  const open = day !== "Sun" && hour >= 8 && hour < 17;
  return { open };
}
