import React from 'react';
import Link from 'next/link';
import { Section } from './Section';
import { buttonVariants } from '@/components/ui/button';
import { GithubIcon } from './icons/GithubIcon';
import { cn } from '@/lib/utils';
import { FacebookIcon } from './icons/FacebookIcon';
import { WhatsappIcon } from './icons/WhatsappIcon';
import { TwitterIcon } from './icons/TwitterIcon';
import { InstagramIcon } from './icons/InstagramIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { Logo } from './logo';

export const Header = () => {
  return (
    <header className="sticky top-0 py-2">
      <Section className="flex items-baseline">

        <Link href="/" className="hover:text-cyan-100">
          <Logo />
        </Link>

        <div className="flex-1" />

        <ul className="flex-item-center gap-2">
          <Link
            href="https://github.com/bunduki1"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-6 p-0 m-0.5"
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon size={16} className="text-foreground" />
          </Link>
          <Link
            href="https://facebook.com/emil.debanyin"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-6 p-0 m-0.5"
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon size={16} className="text-foreground" />
          </Link>
          <Link
            href="https://wa.me/+243972177044"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-6 p-0 m-0.5"
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsappIcon size={16} className="text-foreground" />
          </Link>
          <Link
            href="https://instagram.com/emildebanyin"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-6 p-0 m-0.5"
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon size={16} className="text-foreground" />
          </Link>
          <Link
            href="https://x.com/bunduki1"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-6 p-0 m-0.5"
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon size={16} className="text-foreground" />
          </Link>
          <Link
            href="https://linkedin.com/in/emil.debanyin"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-6 p-0"
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon size={16} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
