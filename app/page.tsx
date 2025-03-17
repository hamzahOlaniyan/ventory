import Hero from "@/components/hero";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <h1>hello world</h1>
      <Link href='/auth/sign-up'>sign up</Link>
      <Link href='/auth/sign-in'>sign in</Link>
      <Link href='/auth/forgot-password'>forgot password</Link>
    </>
  );
}
