"use client";

import { useDevice } from "@/hooks/useDevice";
import SplashCursor from "./SplashCursor";

export default function SplashCursorWrapper() {
  const { isDesktop } = useDevice();

  if (!isDesktop) return null;

  return (
    <SplashCursor
      SIM_RESOLUTION={192}
      DYE_RESOLUTION={1920}
      DENSITY_DISSIPATION={3.5}
      VELOCITY_DISSIPATION={2}
      PRESSURE={0.3}
      CURL={10}
      SPLAT_RADIUS={0.2}
      SPLAT_FORCE={8000}
      COLOR_UPDATE_SPEED={17}
      RAINBOW_MODE={true}
      TRANSPARENT={true}
    />
  );
}
