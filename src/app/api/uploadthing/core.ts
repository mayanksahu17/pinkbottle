import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
 
const f = createUploadthing();
 
const auth = (req: Request) => ({ id: "fakeId" }); // Fake auth function
 
// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  mediaPost: f({
    pdf: {maxFileSize :"2MB", maxFileCount: 1},
    "application/msword":{maxFileCount:1, maxFileSize: "2MB"}
  })
    .middleware(({ req }) => auth(req))
    .onUploadComplete((data) => console.log("file", data)),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;