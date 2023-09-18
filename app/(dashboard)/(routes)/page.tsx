import { UserButton } from "@clerk/nextjs";

const Homepage = () => {
  return (
    <div className="text-3xl font-medium text-sky-500">
      <h1>
        <UserButton afterSignOutUrl="/" />
      </h1>
    </div>
  );
};

export default Homepage;
