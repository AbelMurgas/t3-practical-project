import SearchInput from "./SearchInput/SearchInput";
import { useSession } from "next-auth/react";

const Content: React.FC = () => {
  const { data: sessionData } = useSession();
  return (
    <>
      {sessionData ? (
        <div className="flex flex-col items-center gap-2">
          {/* Your content goes here */}
          <SearchInput />
        </div>
      ) : (
        <div role="alert">
          <div className="rounded-t bg-red-500 px-4 py-2 font-bold text-white">
            Uknwon User
          </div>
          <div className="rounded-b border border-t-0 border-red-400 bg-red-100 px-4 py-3 text-red-700">
            <p>Please first Sign in, to access to the content</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Content;
