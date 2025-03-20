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
                <h2 className=" text-2xl pb-2 mr-2 text-teal-800 max-w-text-center">Innove BUNDUKI</h2>
                <h4 className="text-1xl text-primary">
                    Software Engineer and website creator.
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
                    </Link> && Senior CEO of
                    <Link
                        href="https://innove.vercel.app"
                        className={cn(
                            buttonVariants({ variant: "outline" }),
                            "flex-1 pl-2 pr-2 pt-[2] pb-[2] text-teal-600 m-0.5"
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                    > <GithubIcon /><span translate="no" className="font-mono text-indigo-400">  Go Innove Consulting</span>
                    </Link>

                </p>
                <p className="font-serif italic text-gray-500 text-xs">
                    Fundig by coding your app is my job. World is either made by tech. Even medecin and laws, tech has it main fate inside a keyboard, a mouse and a PC screen. All behind a man siting on his own forfeit.
                </p>
                <p className="normal text-xs text-gray-500">
                    My job is to serve world with all thy need, by coding thy website and thy professional Software. Can become too private software manager. Here we are for every need.
                </p>
            </div>
            <div className="m-auto pt-5 relative w-full max-w-sm" style={{ height: "180px" }}>
                <Image
                    src="http://localhost/affiliates/assets/uploads/innove.png"
                    alt="Innove-Bunduki"
                    fill
                    className="object-contain"
                />
            </div>
        </Section>
    )
}
