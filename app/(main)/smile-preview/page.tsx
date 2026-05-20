import type { Metadata } from "next";
import SmilePreviewHero from "@/components/smile-preview/SmilePreviewHero";
import SmilePreviewForm from "@/components/smile-preview/SmilePreviewForm";

export const metadata: Metadata = {
  title: "AI Smile Preview",
  description:
    "Upload a selfie for a clinician-reviewed AI smile visualisation. Not a guarantee — honest composite bonding in London.",
};

export default function SmilePreviewPage() {
  return (
    <div className="mx-auto w-full max-w-[37.5rem] px-5 sm:px-8 py-14 sm:py-20">
      <SmilePreviewHero />
      <div className="mt-12 sm:mt-14">
        <SmilePreviewForm />
      </div>
    </div>
  );
}
