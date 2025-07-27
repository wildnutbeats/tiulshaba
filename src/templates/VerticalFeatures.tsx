import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Built for creators, marketers & founders"
    description="Skip the grind. Generate carousels, reels, captions & posts in seconds — from trending news or your own ideas."
  >
    <VerticalFeatureRow
      title="Turn news links into carousels"
      description="Paste any news link. Get a polished, 7-slide Instagram or LinkedIn carousel — fully editable in Canva."
      image="/assets/images/feature.svg"
      imageAlt="Auto carousel from link"
    />
    <VerticalFeatureRow
      title="Auto-post to Instagram & LinkedIn"
      description="Schedule or auto-publish your carousels with captions directly to your socials, without leaving the dashboard."
      image="/assets/images/feature2.svg"
      imageAlt="Social media automation"
      reverse
    />
    <VerticalFeatureRow
      title="Use your own Canva template"
      description="No boring AI designs. Bring your own Canva brand template and our engine fills it perfectly."
      image="/assets/images/feature3.svg"
      imageAlt="Use your own Canva design"
    />
  </Section>
);

export { VerticalFeatures };
