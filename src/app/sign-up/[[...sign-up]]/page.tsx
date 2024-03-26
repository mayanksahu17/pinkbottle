import { SignUp } from "@clerk/nextjs";
// import { neobrutalism } from "@clerk/themes";
 
export default function Page() {
  return(
    <div className='flex items-center justify-center flex-col gap-10 bg-white min-h-screen w-full'>
        <h1 className="text-2xl font-bold text-center white">
</h1>
    <SignUp />
    </div>
  ); 
}