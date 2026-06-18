'use client'

import React from 'react'

/**
 * @author: @emerald-ui
 * @description: Stacked article cards that expand on click with smooth transitions
 * @version: 1.1.0
 * @date: 2026-02-17
 * @license: MIT
 * @website: https://emerald-ui.com
 */
import { MouseEventHandler, useState } from 'react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'
function cn(...inputs: any[]) { return twMerge(clsx(inputs)) }

const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: string; size?: string }>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(
      "inline-flex items-center justify-center rounded-md text-base font-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      variant === "outline" ? "border border-input bg-background hover:bg-accent hover:text-accent-foreground" :
      variant === "ghost" ? "hover:bg-accent hover:text-accent-foreground" :
      variant === "link" ? "text-primary underline-offset-4 hover:underline" :
      variant === "secondary" ? "bg-white/10 text-white hover:bg-white/20 border border-white/10" :
      "bg-primary text-primary-foreground hover:bg-primary/90",
      size === "sm" ? "h-9 px-3" : size === "lg" ? "h-11 px-8" : size === "icon" ? "h-10 w-10" : "h-10 px-4 py-2",
      className
    )} {...props} />
  )
);
Button.displayName = "Button";

interface ArticleItem {
  url: string
  title: string
  subTitle: string
  iconSrc: string
}

const DefaultArticleItems: ArticleItem[] = [
  {
    url: 'https://www.linkedin.com/in/srikhanth-m',
    title: 'LinkedIn',
    subTitle: 'LinkedIn — Let\'s connect professionally',
    iconSrc: '/linkedin-svgrepo-com.svg',
  },
  {
    url: 'https://github.com/Srikhanth0',
    title: 'GitHub',
    subTitle: 'GitHub — Explore my open source projects',
    iconSrc: '/github-142-svgrepo-com.svg',
  },
  {
    url: 'https://leetcode.com/u/srikhanth',
    title: 'LeetCode',
    subTitle: 'LeetCode — Problem solving & DSA',
    iconSrc: '/leetcode-svgrepo-com.svg',
  },
]

/** Stacked top offset when collapsed (cards peek behind each other) */
const COLLAPSED_OFFSETS = [
  'top-6',
  'top-[calc(1.5rem+0.75rem)]',
  'top-[calc(1.5rem+1.5rem)]',
]

/** Spread top offset when expanded */
const EXPANDED_OFFSETS = [
  'top-6',
  'top-[calc(1.5rem+112px+1rem)]',
  'top-[calc(1.5rem+224px+2rem)]',
]

interface StackedArticleCardsProps {
  items?: ArticleItem[]
  className?: string
}

export default function StackedArticleCards({
  items = DefaultArticleItems,
  className,
}: StackedArticleCardsProps) {
  const [isActive, setIsActive] = useState(false)

  const handleExpand = () => {
    setIsActive(true)
  }

  const handleCollapse: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation()
    setIsActive(false)
  }

  return (
    <div
      className={cn('relative min-h-150 w-full max-w-md', className)}
      onClick={handleExpand}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            'absolute right-6 flex h-28 w-96 cursor-pointer items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/5 backdrop-blur-xl transition-all duration-1000 ease-[cubic-bezier(0.075,0.82,0.165,1)] hover:bg-white/10 max-md:w-72 dark:border-white/5 dark:bg-white/3 dark:hover:bg-white/[0.07]',
            isActive ? EXPANDED_OFFSETS[index] : COLLAPSED_OFFSETS[index]
          )}
        >
          <a
            href={item.url}
            target='_blank'
            rel='noopener noreferrer'
            className={cn(
              'flex w-full items-center gap-4 no-underline',
              isActive ? 'pointer-events-auto' : 'pointer-events-none'
            )}
          >
            <div className='size-16 shrink-0 flex items-center justify-center rounded-xl bg-white p-3 shadow-md'>
              <Image
                src={item.iconSrc}
                alt={item.title}
                width={40}
                height={40}
                className='w-full h-full object-contain transition-transform duration-500 hover:scale-110'
              />
            </div>
            <div className='min-w-0 flex-1'>
              <p className='text-foreground mb-1 truncate text-lg font-light'>
                {item.title}
              </p>
              <p className='text-white/90 line-clamp-2 text-base leading-relaxed'>
                {item.subTitle}
              </p>
            </div>
          </a>
        </div>
      ))}

      {/* Show less toggle */}
      <div
        className={cn(
          'absolute top-[calc(1.5rem+336px+3rem)] right-6 transition-all duration-300 ease-in-out',
          isActive
            ? 'pointer-events-auto visible opacity-100'
            : 'pointer-events-none invisible opacity-0'
        )}
        onClick={handleCollapse}
      >
        <Button variant={'secondary'} size='sm'>
          Show less
        </Button>
      </div>
    </div>
  )
}
