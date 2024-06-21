"use client";

import { FOOTER_DOWNLOAD, FOOTER_ITEMS, FOOTER_MEDIA } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { useWindowSize } from "@/hooks/useWindowSize";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "./ui/separator";

const FormSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
});

const Footer = () => {
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const windowSize = useWindowSize();
  const width = windowSize[0];

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsSubscribed(true);
  }

  return (
    <footer className="flex-grow-0 bg-black text-white">
      <section className="bg-primary">
        <MaxWidthWrapper className="py-20 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="w-full text-center lg:text-left">
              <div className="text-xl">
                Subscribe to the newsletter and stay up to date.
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                Get great offers, news and trends – free of charge in your
                mailbox.
              </div>
            </div>

            <div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted">
                          Email adress
                        </FormLabel>

                        <div className="flex flex-col gap-2 lg:flex-row">
                          <div className="w-full">
                            <FormControl>
                              <Input
                                placeholder="email@example.com"
                                {...field}
                                autoComplete="off"
                                disabled={isSubscribed && true}
                                className="my-1 bg-black py-6 text-muted-foreground"
                              />
                            </FormControl>

                            <FormMessage />
                          </div>

                          <div className="my-1">
                            <Button
                              variant="secondary"
                              type="submit"
                              disabled={isSubscribed && true}
                              className="w-full p-6"
                            >
                              {isSubscribed ? "Subscribed" : "Subscribe"}
                            </Button>
                          </div>
                        </div>
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <Separator className="h-[1px] bg-muted-foreground" />

      <section>
        <MaxWidthWrapper className="py-20 lg:px-12">
          <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-48 xl:gap-24">
            <Link href="/">
              <Image
                src="/images/bike.svg"
                width={80}
                height={80}
                alt="logo-footer"
                className="min-w-20 rounded-md bg-white p-2"
              />
            </Link>

            {width >= 1024 && (
              <div className="grid w-full grid-cols-2 gap-8 xl:grid-cols-4">
                {FOOTER_ITEMS.map((footer_item, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-4 pb-12 xl:pb-0"
                  >
                    <div className="pb-4">{footer_item.title}</div>

                    {footer_item.items.map((item, index) => (
                      <div key={index}>
                        <Link
                          href={item.href}
                          className="font-extralight underline-offset-8 hover:underline"
                        >
                          {item.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {width < 1024 && (
              <Accordion type="single" collapsible className="w-full">
                {FOOTER_ITEMS.map((footer_item, index) => (
                  <AccordionItem key={index} value={footer_item.title}>
                    <AccordionTrigger className="my-1 rounded-md bg-primary px-4 py-6 font-normal">
                      {footer_item.title}
                    </AccordionTrigger>
                    <AccordionContent className="mt-1 grid grid-cols-1 gap-2 md:grid-cols-2">
                      {footer_item.items.map((item, index) => (
                        <Link key={index} href={item.href}>
                          <div
                            className="rounded-md border-[1px] border-primary px-4 py-6 
                        transition-all hover:border-muted-foreground"
                          >
                            {item.title}
                          </div>
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            )}
          </div>
        </MaxWidthWrapper>
      </section>

      <Separator className="h-[1px] bg-muted-foreground" />

      <section>
        <MaxWidthWrapper className="pb-20 pt-20 text-white lg:px-12 lg:pb-0 lg:pt-20">
          <div className="grid grid-cols-2 items-center">
            <div className="flex h-full flex-col gap-4">
              <div>Follow us</div>
              <div className="flex gap-2">
                {FOOTER_MEDIA.map((item, index) => (
                  <div
                    key={index}
                    className="justify-center] flex items-center 
                  rounded-full border-[1px] p-2 hover:bg-muted-foreground"
                  >
                    {item.icon}
                  </div>
                ))}
              </div>
            </div>

            {width >= 1024 && (
              <div className="flex flex-col gap-4">
                <div>Download</div>
                <div className="flex -translate-y-12 gap-2">
                  {FOOTER_DOWNLOAD.map((item, index) => (
                    <div key={index}>
                      <Image
                        priority
                        src={item.image}
                        alt={`${item.name}-image`}
                        width={140}
                        height={50}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </MaxWidthWrapper>
      </section>
    </footer>
  );
};

export default Footer;
