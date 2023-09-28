"use client"

import React from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link"

interface ImageDictionary {
  [key: string]: string;
}

export default function Icons() {

  function ImageGallery({ images }: { images: ImageDictionary }) {
    return (
      <div>
        {Object.entries(images).map(([key, value], index) => (
          <img key={index} src={value} alt={`Image ${index}`} />
        ))}
      </div>
    );
  }

  return (
    <main className="flex flex-col min-h-screen items-center">
      <div className="pt-5">
        <NavigationMenu>
          <NavigationMenuList>
          <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="https://github.com/lathorne/ios-clean" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Info
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div>
        <h1 className="text-l tracking-tight text-muted-foreground py-6">Icons with a white background will have black logos.</h1>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-4 px-20">
        <img className="h-auto max-w-full rounded-lg" src="icons/airbnb.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/apple-fitness.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/apple-photos.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/amazon.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/email.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/gmail.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/chatgpt.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/messages.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/settings.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/phone.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/gdrive.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/whatsapp.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/wechat.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/artifact.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/reddit.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/discord.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/tesla.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/x.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/threads.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/facebook.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/instagram.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/youtube.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/substack.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/safari.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/chrome.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/twitch.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/telegram.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/pokemon-go.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/apple-notes.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/netflix.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/home.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/steam.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/spotify.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/apple-music.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/weather.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/google-photos.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/google-news.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/app-store.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/linkedin.png" alt=""/>
        <img className="h-auto max-w-full rounded-lg" src="icons/files.png" alt=""/>
      </div>
      <div>
        <h1 className="text-l tracking-tight text-muted-foreground py-6">See the list of all 86 icons <a className="underline" href="https://github.com/lathorne/ios-clean">here</a>.</h1>
      </div>
      <footer className="container flex flex-col text-center fixed bottom-0 items-center content-center justify-center gap-4 md:h-24">
        <p className="text-sm text-muted-foreground">
          Built by <a href="https://x.com/loganthorneloe" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">loganthorneloe</a>. The source code is available on <a href="https://github.com/lathorne/ios-clean" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">GitHub</a>. Icons sources from <a href="https://icons8.com/icons" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">Icons8</a> and <a href="https://fontawesome.com/search" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">FontAwesome</a>.
        </p>
      </footer>
    </main>
  )
}