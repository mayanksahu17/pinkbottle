import { SignIn } from "@clerk/nextjs";
// import { dark, neobrutalism } from "@clerk/themes";
 
export default function Page() {
  return(
    <div className='flex items-center justify-center flex-col bg-white min-h-screen w-full'>
        <h1 className="text 4xl font-bold">Welcome Back</h1>
        <SignIn />
        </div>
  );
}