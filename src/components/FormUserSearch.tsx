import SearchIcon from "@/components/icons/SearchIcon";
import { useState } from "react";

interface Props {
  getUser: (username: string) => Promise<void>;
}

function FormUserSearch({ getUser }: Props) {
  const [username, setUsername] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (!username) return;
    await getUser(username);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="dark:bg-[#1f2a48] bg-white rounded-lg flex items-center justify-between p-2"
    >
      <SearchIcon className="fill-[#056ad9] h-8 md:h-10 md:ml-4" />
      <input
        onChange={(e) => setUsername(e.target.value)}
        name="username"
        type="text"
        placeholder="Search GitHub username..."
        className="bg-inherit placeholder:text-gray-500 dark:placeholder:text-white p-2 text-gray-500 dark:text-white w-full mx-2"
      />
      <button className="p-2 bg-[#056ad9] rounded-md text-white">Search</button>
    </form>
  );
}
export default FormUserSearch;
