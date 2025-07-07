// import { SignIn } from "@clerk/nextjs";

// export default function Page() {
//   return <SignIn fallbackRedirectUrl="/onboarding" />;
// }
// import { SignIn } from "@clerk/nextjs";

// export default function Page() {
//   return <SignIn />;
// }

"use client";

import { SignIn } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/onboarding");
    }
  }, [isSignedIn]);

  if (isSignedIn) return null;

  // ✅ Use fallbackRedirectUrl instead of redirectUrl
  return <SignIn fallbackRedirectUrl="/onboarding" />;
}

