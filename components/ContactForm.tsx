"use client";

// Flag para controlar la visibilidad del captcha en desarrollo
const ENABLE_CAPTCHA = false;

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";

// import { toast } from "@/components/hooks/use-toast";
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
import { Textarea } from "@/components/ui/textarea";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor ingrese un email válido.",
  }),
  phone: z.string().optional(),
  message: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }),
});

export default function ContactForm() {
  const [captchaValue, setCaptchaValue] = useState<string | null>(
    ENABLE_CAPTCHA ? null : "development"
  );
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    if (ENABLE_CAPTCHA && !captchaValue) {
      form.setError("root", {
        message: "Por favor, completa el captcha para enviar el formulario.",
      });
      return;
    }

    try {
      // Aquí iría la lógica para enviar el formulario
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulación de envío
      // toast({
      //   title: "¡Mensaje enviado!",
      //   description:
      //     "Gracias por contactarnos. Nos pondremos en contacto contigo pronto.",
      // });
      form.reset();
      if (ENABLE_CAPTCHA) {
        recaptchaRef.current?.reset();
        setCaptchaValue(null);
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      // toast({
      //   title: "Error",
      //   description:
      //     "Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.",
      //   variant: "destructive",
      // });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="Tu nombre" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="tu@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Teléfono</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="Tu teléfono" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensaje</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tu mensaje"
                  className="min-h-[100px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {ENABLE_CAPTCHA && (
          <div className="flex justify-center">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
              onChange={(value: string | null) => setCaptchaValue(value)}
            />
          </div>
        )}

        {form.formState.errors.root && (
          <p className="text-sm text-red-500">
            {form.formState.errors.root.message}
          </p>
        )}

        <Button
          type="submit"
          className="w-full"
          disabled={
            form.formState.isSubmitting || (ENABLE_CAPTCHA && !captchaValue)
          }
        >
          {form.formState.isSubmitting ? "Enviando..." : "Enviar Mensaje"}
        </Button>
      </form>
    </Form>
  );
}
