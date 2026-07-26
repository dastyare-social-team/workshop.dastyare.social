"use client";

import { Button } from "@/components/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/dialog";
import { Field, FieldGroup } from "@/components/field";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Input } from "@/components/input";

const RegistrationForm = ({ primary_cta }: { primary_cta: string }) => {
  const [name, set_name] = useState("");
  const [email, set_email] = useState("");
  const [phone, set_phone] = useState("");
  const [show_phone_input, set_show_phone_input] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Handle "Continue" click – validate email and reveal password
  const handleContinue = () => {
    if (!name.trim() || !email.trim()) {
      setError("Name & Email are required");
      return;
    }
    setError(null);
    set_show_phone_input(true);
  };

  // Handle Enter key on inputs
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (show_phone_input) {
        // handleSignIn();
      } else {
        handleContinue();
      }
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <Button>{primary_cta}</Button>
        </div>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col justify-center items-center gap-y-2.5 py-6 px-6 w-[350px] border border-secondary/5 rounded-3xl bg-background/50 backdrop-blur-3xl">
          <div className="flex flex-col gap-y-2">
            <div className="text-[25px] leading-8">
              Lock In <span className="text-primary">Your Spot</span> for
              Wednesday <span className="text-primary">— Don't Lose</span> Your
              Seat
            </div>
            <div className="text-[20px] opacity-80">
              — registration closes when this week's session starts. Miss it,
              and you're waiting for the next one
            </div>
          </div>

          <FieldGroup
            className={cn(
              "w-full gap-y-1.5 mt-2.5",
              show_phone_input && "gap-y-3.5",
            )}
          >
            {/* —— EMAIL ADDRESS INPUT —— */}
            <Field className="flex flex-col gap-y-0.5">
              <div className="pl-5 text-sm tracking-[-0.8px] text-secondary/60">
                name —
              </div>
              <Input
                id="fieldgroup-name"
                type="name"
                placeholder="Omid Shabab"
                value={name}
                onChange={(e) => set_name(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={loading}
                autoFocus
              />
            </Field>

            {/* —— EMAIL ADDRESS INPUT —— */}
            <Field className="flex flex-col gap-y-0.5">
              <div className="pl-5 text-sm tracking-[-0.8px] text-secondary/60">
                email address —
              </div>
              <Input
                id="fieldgroup-email"
                type="email"
                placeholder="hey@omidshabab.com"
                value={email}
                onChange={(e) => set_email(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={loading}
                autoFocus
              />
            </Field>

            {/* —— PHONE INPUT with FADE-IN —— */}
            <div
              className={`
                transition-all duration-300 ease-in-out
                overflow-hidden
                ${show_phone_input ? "opacity-100 translate-y-0" : "max-h-0 opacity-0 translate-y-2"}
              `}
            >
              <Field className="flex flex-col gap-y-0.5">
                <div className="pl-5 text-sm tracking-[-0.8px] text-secondary/60">
                  phone (optional) —
                </div>
                <Input
                  id="fieldgroup-phone"
                  type="phone"
                  placeholder="+1 ***"
                  value={phone}
                  onChange={(e) => set_phone(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={loading}
                />
              </Field>
            </div>

            {error && (
              <div className="text-sm tracking-[-0.8px] text-primary pl-5 -mt-2">
                {error}
              </div>
            )}

            <Field orientation="horizontal">
              <Button
                type="submit"
                variant="primary"
                disabled={loading}
                onClick={() => {
                  if (show_phone_input) {
                    // handleSignIn();
                  } else {
                    handleContinue();
                  }
                }}
                className={cn("w-full mt-2.5", show_phone_input && "mt-5")}
              >
                {show_phone_input ? "Save My Seat — Now" : "continue —"}
              </Button>
            </Field>
          </FieldGroup>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationForm;
