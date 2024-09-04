"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import emailjs from "@emailjs/browser";
import { error } from "console";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "The First Name must be at least 1 character.",
  }),
  email: z.coerce
    .string()
    .email({ message: "please enter a valid email address" })
    .min(1, { message: "Please provide an email address" }),
  message: z.string().min(1, {
    message: "Message cannot be empty",
  }),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    emailjs
      .send("service_s4sgj7i", "template_p6h6gpl", values, {
        publicKey: "23DTnpy6reZkyOGVQ",
      })
      .then(
        () => {
          form.reset();
        },
        (error) => {
          console.log(error);
        }
      );
    console.log(values);
  }

  return (
    <div className="w-full px-3">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mobilesS:space-y-5"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="text-white w-full">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input
                    className="bg-gray-950 text-white border-transparent"
                    placeholder="Enter Here"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="text-white">
                <FormLabel>Work Email</FormLabel>
                <FormControl>
                  <Input
                    className=" bg-gray-950 text-white border-transparent"
                    placeholder="Enter Here"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="text-white">
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    className=" text-wrap h-32 bg-gray-950 text-white border-transparent"
                    placeholder="Enter Here"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="bg-transparent border-2 border-white"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
