import Image from "next/image"
import { Section } from "./Section"
import Link from 'next/link';
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { GithubIcon } from './icons/GithubIcon';

export const Hero = () => {
    return (
        <Section className="flex max-lg:flex-col items-start">
            <div className="flex-[2] mt-5">
                <h2 className="text-2xl pb-2 mr-2 text-teal-800 max-w-text-center">Innove BUNDUKI</h2>
                <h4 className="text-1xl text-primary">
                    Software Engineer and website conceptor.
                    <br /> <br />
                </h4>
                <p>
                    Finance Assistant at <Link
                        href="https://ghovodidrc.org"
                        className={cn(
                            buttonVariants({ variant: "outline" }),
                            "pl-2 pr-2 pt-[2] pb-[2] text-teal-600 m-0.5"
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                    > GHOVODI
                    </Link> &&  
                    <Link
                        href="https://innove-bunduki.vercel.app"
                        className={cn(
                            buttonVariants({ variant: "outline" }),
                            "flex-1 pl-2 pr-2 pt-[2] pb-[2] text-teal-600 m-0.5"
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                    > <GithubIcon /> job
                    </Link>  
                    CEO Founder of 
                    <span translate="no" className="font-mono text-indigo-400"> Go Innove Consulting </span>
                  
                </p>
                <p className="font-serif italic text-gray-500 text-xs">
                    Coding is my job. The world is driven by technology. Even medicine and laws have their main fate inside a keyboard, a mouse, and a PC screen, all controlled by a person sitting alone.
                </p>
                <p className="normal text-xs text-gray-500">
                    My job is to serve the world with all its needs by coding websites and professional software. I can also become a private software manager. Here we are for every need.
                </p>
            </div>
            <div className="m-auto pt-5 relative w-full max-w-sm" style={{ height: "180px" }}>
                <Image
                    src="https://innovatech-inc.netlify.app/Profile.png"
                    alt="Innove-Bunduki-profile-picture"
                    fill
                    className="object-contain"
                />
            </div>
        </Section>
    )
}
