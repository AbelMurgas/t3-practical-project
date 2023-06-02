import { signIn, signOut, useSession } from "next-auth/react";

const AuthShowCase: React.FC = () => {
  const { data: sessionData } = useSession();
  return (
    <div className="flex flex-row items-center justify-center gap-4">
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline hover:bg-white/20 transition duration-300 ease-in-out"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
      </p>
    </div>
  );
};

export default AuthShowCase;