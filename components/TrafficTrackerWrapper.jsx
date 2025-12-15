import { Suspense } from "react";
import TrafficTracker from "./TrafficTracker";

export default function TrafficTrackerWrapper() {
  return (
    <Suspense fallback={null}>
      <TrafficTracker />
    </Suspense>
  );
}
