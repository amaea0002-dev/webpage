import ReferenceInteractions from "@/components/reference/ReferenceInteractions";
/* Approved mockup page; preserve copy and story order. */
import { pageMetadata } from "@/lib/metadata";
import ProductCaptures from "@/components/reference/ProductCaptures";
import FeatureChapters from "@/components/reference/FeatureChapters";
import TeamAccess from "@/components/reference/TeamAccess";

export const metadata = pageMetadata(
  "Amaea features | Every client, every review, every document",
  "Explore seven Amaea workflows: client journeys, firm overview, insights, AI, Horizon, reports and integrations.",
  "/features",
);

export default function Page() {
  return (
    <>
      <h1 className="sr-only">
        {"Every client, every review, every document | Amaea features"}
      </h1>
      <FeatureChapters />
      <TeamAccess />
      <ProductCaptures />
      <ReferenceInteractions />
    </>
  );
}
