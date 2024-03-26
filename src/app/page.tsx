import Image from "next/image";
// import { UserReviewV1 } from "@/components/user-review-v1";
import { UserReviewV2 } from "@/components/user-review-v2";
export default function Home() {
  return (
    <main>
      <UserReviewV2 /> {/* Correct component usage */}
    </main>
  );
}
