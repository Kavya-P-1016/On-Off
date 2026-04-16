"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function AddToBagButton() {
  const [msg, setMsg] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-2">
      <Button
        type="button"
        onClick={() =>
          setMsg("Connect your storefront checkout. This is a UI preview.")
        }
      >
        Add to bag
      </Button>
      {msg ? (
        <p className="text-xs text-ink-muted" role="status">
          {msg}
        </p>
      ) : null}
    </div>
  );
}
