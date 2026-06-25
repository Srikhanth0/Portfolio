"use client";
/**
 * RadialOrbitalTimeline Component
 * 
 * @description Renders an interactive, 3D-like orbital timeline of events or skills.
 * 
 * Architecture & Performance:
 * - Uses requestAnimationFrame for performant continuous rotation instead of setInterval, syncing with the display refresh rate.
 * - Hardware-accelerated CSS transforms (translate, rotate) for node positioning to prevent layout thrashing.
 * 
 * @interviewNotes 
 * Q: Why use requestAnimationFrame over setInterval for the rotation?
 * A: requestAnimationFrame guarantees the callback runs before the next repaint, ensuring smoother animations. It also automatically pauses when the browser tab is inactive, saving CPU and battery life.
 * 
 * Q: What is the complexity of calculateNodePosition?
 * A: O(1) time complexity per node. It calculates Cartesian coordinates from Polar angles using Math.cos and Math.sin, which are constant time operations.
 */
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useDevice } from "@/hooks/useDevice";
import Image from "next/image";

export interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon?: React.ElementType;
  iconSrc?: string;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

export interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const { isMobile } = useDevice();
  const [isMounted, setIsMounted] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {}
  );
  const [viewMode, setViewMode] = useState<"orbital">("orbital");
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [centerOffset, setCenterOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    setIsMounted(true);
    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (time: number) => {
      if (autoRotate && viewMode === "orbital") {
        const deltaTime = time - lastTime;
        if (deltaTime >= 50) {
          setRotationAngle((prev) => Number(((prev + 0.3) % 360).toFixed(3)));
          lastTime = time;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [autoRotate, viewMode]);

  if (!isMounted) {
    return <div className="w-full h-[600px]"></div>;
  }

  const centerViewOnNode = (nodeId: number) => {
    if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = isMobile ? 120 : 200;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacityBase = isMobile ? 0.2 : 0.4;
    const opacityMultiplier = isMobile ? 0.4 : 0.6;
    const opacity = Math.max(
      opacityBase,
      Math.min(1, opacityBase + opacityMultiplier * ((1 + Math.sin(radian)) / 2))
    );

    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const getStatusStyles = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed":
        return "text-white bg-[#121212] border-white";
      case "in-progress":
        return "text-[#121212] bg-white border-[#121212]";
      case "pending":
        return "text-white bg-[#121212]/40 border-white/50";
      default:
        return "text-white bg-[#121212]/40 border-white/50";
    }
  };

  return (
    <div
      className={`w-full ${isMobile ? "h-[400px]" : "h-[600px]"} flex flex-col items-center justify-center overflow-visible`}
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center -mt-16 md:-mt-20">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500 animate-pulse flex items-center justify-center z-10">
            <div className="absolute w-20 h-20 rounded-full border border-white/20 animate-ping opacity-70"></div>
            <div
              className="absolute w-24 h-24 rounded-full border border-white/10 animate-ping opacity-50"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-md"></div>
          </div>

          <div 
            className="absolute rounded-full border border-white/10"
            style={{ width: isMobile ? '240px' : '400px', height: isMobile ? '240px' : '400px' }}
          ></div>

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;
            const hasImageIcon = !!item.iconSrc;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
              transformOrigin: "center",
              willChange: "transform",
            };

            return (
              <div
                key={item.id}
                ref={(el) => { nodeRefs.current[item.id] = el; }}
                className="absolute transition-all duration-700 cursor-pointer"
                style={nodeStyle}
                role="button"
                tabIndex={0}
                aria-label={`View details for ${item.title}`}
                aria-expanded={isExpanded}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleItem(item.id);
                  }
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                <div
                  className={`absolute rounded-full -inset-1 ${
                    isPulsing ? "animate-pulse duration-1000" : ""
                  }`}
                  style={{
                    background: `radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)`,
                    width: `${item.energy * (isMobile ? 0.3 : 0.5) + (isMobile ? 30 : 40)}px`,
                    height: `${item.energy * (isMobile ? 0.3 : 0.5) + (isMobile ? 30 : 40)}px`,
                    left: `-${(item.energy * (isMobile ? 0.3 : 0.5) + (isMobile ? 30 : 40) - 40) / 2}px`,
                    top: `-${(item.energy * (isMobile ? 0.3 : 0.5) + (isMobile ? 30 : 40) - 40) / 2}px`,
                  }}
                ></div>

                <div
                  className={`
                  w-16 h-16 rounded-full flex items-center justify-center
                  ${
                    isExpanded
                      ? "bg-white text-black"
                      : isRelated
                      ? "bg-white/50 text-black"
                      : "bg-[#1A1A1A] text-white"
                  }
                  border-2 
                  ${
                    isExpanded
                      ? "border-white shadow-lg shadow-white/30"
                      : isRelated
                      ? "border-white animate-pulse"
                      : "border-white/40"
                  }
                  transition-all duration-300 transform
                  ${isExpanded ? "scale-110" : ""}
                `}
                >
                  {hasImageIcon ? (
                    <Image src={item.iconSrc!} alt={item.title} width={36} height={36} className="object-contain" />
                  ) : Icon ? (
                    <Icon size={30} />
                  ) : null}
                </div>

                <div
                  className={`
                  absolute top-12  whitespace-nowrap
                  text-sm font-light tracking-wider
                  transition-all duration-300
                  ${isExpanded ? "text-white scale-125" : "text-white"}
                `}
                >
                  {item.title}
                </div>

                {isExpanded && (
                  <Card className="absolute top-20 left-1/2 -translate-x-1/2 w-64 bg-[#1A1A1A]/95 backdrop-blur-lg border-white/30 shadow-xl shadow-white/10 overflow-visible text-left">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-white/50"></div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <Badge
                          className={`px-2 text-sm ${getStatusStyles(
                            item.status
                          )}`}
                        >
                          {item.status === "completed"
                            ? "ADVANCED"
                            : item.status === "in-progress"
                            ? "INTERMEDIATE"
                            : "BEGINNER"}
                        </Badge>
                        <span className="text-sm font-light font-mono text-white/90">
                          {item.date}
                        </span>
                      </div>
                      <CardTitle className="text-base mt-2 text-white">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-white/90">
                      <p>{item.content}</p>

                      <div className="mt-4 pt-3 border-t border-white/10">
                        <div className="flex justify-between items-center text-sm mb-1">
                          <span className="flex items-center text-white/90">
                            <Zap size={10} className="mr-1" />
                            Proficiency Level
                          </span>
                          <span className="font-mono text-white/90">{item.energy}%</span>
                        </div>
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                            style={{ width: `${item.energy}%` }}
                          ></div>
                        </div>
                      </div>

                      {item.relatedIds.length > 0 && (
                        <div className="mt-4 pt-3 border-t border-white/10">
                          <div className="flex items-center mb-2">
                            <Link size={10} className="text-white/90 mr-1" />
                            <h4 className="text-sm uppercase tracking-wider font-light text-white/90">
                              Related Skills
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find(
                                (i) => i.id === relatedId
                              );
                              return (
                                <Button
                                  key={relatedId}
                                  variant="outline"
                                  size="sm"
                                  className="flex items-center h-8 px-3 py-1 text-sm rounded-none border-white/20 bg-transparent hover:bg-white/10 text-white/80 hover:text-white transition-all"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(relatedId);
                                  }}
                                >
                                  {relatedItem?.title}
                                    <ArrowRight
                                      size={8}
                                      className="ml-1 text-white/80"
                                    />
                                </Button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
