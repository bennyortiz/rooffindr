'use client';

import { BlogLayout } from '@/components/layout/BlogLayout';
import { blogPosts } from '@/data/blog';
import { StructuredData } from '@/components/seo';
import { siteConfig } from '@/lib/config/site';

export default function RoofingGlossaryPage() {
  const post = blogPosts.find(post => post.slug === 'roofing-glossary');

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <StructuredData
        type="Article"
        data={{
          headline: post.title,
          description: post.excerpt,
          image: post.coverImage,
          datePublished: new Date(post.date).toISOString(),
          dateModified: new Date(post.date).toISOString(),
          author: {
            '@type': 'Person',
            name: post.author.name,
          },
          publisher: {
            '@type': 'Organization',
            name: siteConfig.name,
            logo: {
              '@type': 'ImageObject',
              url: `${siteConfig.url}/logo.png`,
            },
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${siteConfig.url}/blog/roofing-glossary`,
          },
        }}
      />

      <BlogLayout
        title={post.title}
        description={post.excerpt}
        coverImage={post.coverImage}
        date={post.date}
        author={post.author}
        readingTime={post.readingTime}
        tags={post.tags}
      >
        <h2>Introduction to Roofing Terminology</h2>
        <p>
          Understanding roofing terminology can be overwhelming, especially when you're facing repairs or a full replacement. This comprehensive glossary will help Texas homeowners navigate conversations with contractors and make informed decisions about their roofing projects.
        </p>

        <h2>Roofing Materials</h2>
        
        <h3>Asphalt Shingles</h3>
        <p>
          The most common roofing material in the United States, made from fiberglass or organic mat base, coated with asphalt and covered with ceramic granules. There are three main types:
        </p>
        <ul>
          <li><strong>3-Tab Shingles:</strong> Traditional flat shingles with three tabs per strip.</li>
          <li><strong>Architectural/Dimensional Shingles:</strong> Multi-layered shingles that create a dimensional appearance and better durability.</li>
          <li><strong>Premium/Designer Shingles:</strong> High-end shingles that mimic the look of natural materials like slate or wood.</li>
        </ul>

        <h3>Metal Roofing</h3>
        <p>
          Roofing system made from metal panels or tiles. Common types include:
        </p>
        <ul>
          <li><strong>Standing Seam:</strong> Panels with raised seams that interlock to create a weather-tight seal.</li>
          <li><strong>Metal Shingles:</strong> Individual metal pieces designed to look like traditional shingles, slate, or tile.</li>
          <li><strong>Corrugated Metal:</strong> Ridged metal panels often used on agricultural or industrial buildings.</li>
        </ul>

        <h3>Clay and Concrete Tiles</h3>
        <p>
          Durable, heavy roofing tiles made from either natural clay or concrete. Popular styles include:
        </p>
        <ul>
          <li><strong>Spanish Tile:</strong> S-shaped profiles that create a rolling pattern.</li>
          <li><strong>Mission Tile:</strong> Half-cylinder shaped tiles installed in alternating concave and convex patterns.</li>
          <li><strong>Flat Tile:</strong> Rectangular tiles that can mimic slate.</li>
        </ul>

        <h3>Slate</h3>
        <p>
          Natural stone cut into thin tiles for roofing. Known for its beauty and exceptional longevity.
        </p>

        <h3>Wood Shakes and Shingles</h3>
        <p>
          <strong>Wood Shingles:</strong> Machine-cut wood pieces with smooth surfaces and precise edges.
        </p>
        <p>
          <strong>Wood Shakes:</strong> Hand-split wood pieces with a more rustic, textured appearance.
        </p>

        <h3>Synthetic/Composite Roofing</h3>
        <p>
          Engineered products made to look like natural materials (slate, wood, etc.) but with improved durability and lower weight. Typically made from rubber, plastic, or polymer materials.
        </p>

        <h2>Roof Components and Structure</h2>

        <h3>Decking/Sheathing</h3>
        <p>
          The wood boards (typically plywood or oriented strand board/OSB) that form the foundation of the roof, attached to the rafters or trusses.
        </p>

        <h3>Underlayment</h3>
        <p>
          Water-resistant or waterproof material installed directly on the roof deck beneath the roofing material. Types include:
        </p>
        <ul>
          <li><strong>Felt Underlayment:</strong> Traditional asphalt-saturated paper (#15 or #30 felt).</li>
          <li><strong>Synthetic Underlayment:</strong> Modern, lightweight plastic-based alternative to felt.</li>
          <li><strong>Rubberized Asphalt:</strong> Self-adhering, waterproof membrane often used in vulnerable areas.</li>
        </ul>

        <h3>Ice and Water Shield</h3>
        <p>
          Self-adhering waterproof membrane installed in vulnerable areas (eaves, valleys, penetrations) to prevent water infiltration from ice dams or wind-driven rain.
        </p>

        <h3>Flashing</h3>
        <p>
          Metal pieces installed at roof joints, transitions, and penetrations to prevent water infiltration. Common types:
        </p>
        <ul>
          <li><strong>Step Flashing:</strong> L-shaped pieces used where a roof meets a wall.</li>
          <li><strong>Valley Flashing:</strong> Used in roof valleys where two roof planes meet.</li>
          <li><strong>Drip Edge:</strong> Installed along roof edges to direct water away from the fascia.</li>
          <li><strong>Vent Pipe Flashing:</strong> Used around plumbing vent pipes that penetrate the roof.</li>
          <li><strong>Chimney Flashing:</strong> Multiple pieces that waterproof the junction between chimney and roof.</li>
        </ul>

        <h3>Roof Structure Terms</h3>
        <ul>
          <li><strong>Rafters:</strong> Sloped structural members that extend from the ridge to the wall plate.</li>
          <li><strong>Trusses:</strong> Engineered structural frames that support the roof.</li>
          <li><strong>Ridge:</strong> The highest point of the roof where two sloping sides meet.</li>
          <li><strong>Hip:</strong> The inclined external angle formed by the intersection of two sloping roof planes.</li>
          <li><strong>Valley:</strong> The internal angle formed by the intersection of two sloping roof planes.</li>
          <li><strong>Eave:</strong> The lower edge of the roof that typically overhangs the wall.</li>
          <li><strong>Rake:</strong> The inclined edge of a gabled roof that extends from the eave to the ridge.</li>
          <li><strong>Fascia:</strong> Vertical finishing edge connected to the ends of rafters, trusses, or the area where gutters are attached.</li>
          <li><strong>Soffit:</strong> The underside of the eaves, enclosing the area between the siding and the roofline.</li>
        </ul>

        <h2>Roof Ventilation Terms</h2>

        <h3>Attic Ventilation</h3>
        <p>
          System that allows air to circulate through the attic/roof space to reduce heat and moisture. A properly ventilated roof requires balanced intake and exhaust vents.
        </p>

        <h3>Intake Vents</h3>
        <ul>
          <li><strong>Soffit Vents:</strong> Installed in the soffit/under-eave area to allow fresh air intake.</li>
          <li><strong>Fascia Vents:</strong> Installed in the fascia board.</li>
          <li><strong>Drip Edge Vents:</strong> Integrated into the drip edge flashing.</li>
        </ul>

        <h3>Exhaust Vents</h3>
        <ul>
          <li><strong>Ridge Vents:</strong> Installed along the peak of the roof to allow hot air to escape.</li>
          <li><strong>Static Vents:</strong> Box-shaped vents installed near the ridge.</li>
          <li><strong>Turbine Vents:</strong> Wind-powered spinning vents that create suction to pull air out of the attic.</li>
          <li><strong>Power Vents:</strong> Motorized vents that actively expel hot air.</li>
          <li><strong>Gable Vents:</strong> Installed in the gable end walls of the attic.</li>
        </ul>

        <h2>Roofing Measurements and Specifications</h2>

        <h3>Square</h3>
        <p>
          A roofing unit of measurement equal to 100 square feet. Roofing materials are often sold by the square.
        </p>

        <h3>Pitch/Slope</h3>
        <p>
          The steepness of a roof, typically expressed as a ratio of vertical rise to horizontal run (e.g., 6:12 means the roof rises 6 inches for every 12 inches of horizontal distance).
        </p>

        <h3>Exposure</h3>
        <p>
          The portion of a roofing material that is exposed to the weather after installation (not overlapped by the course above).
        </p>

        <h3>Gauge</h3>
        <p>
          The thickness of metal roofing. Lower gauge numbers indicate thicker metal (e.g., 24-gauge is thicker than 29-gauge).
        </p>

        <h2>Roofing Problems and Repairs</h2>

        <h3>Common Roofing Issues</h3>
        <ul>
          <li><strong>Leaks:</strong> Water infiltration into the building.</li>
          <li><strong>Ponding Water:</strong> Standing water that remains on a flat roof for more than 48 hours.</li>
          <li><strong>Blistering:</strong> Bubbles in the roofing material caused by moisture or air trapped beneath.</li>
          <li><strong>Buckling:</strong> Waviness or ripples in roofing materials.</li>
          <li><strong>Curling/Cupping:</strong> Edges of shingles turning upward.</li>
          <li><strong>Splitting:</strong> Cracks or tears in roofing materials.</li>
          <li><strong>Granule Loss:</strong> Wearing away of the protective mineral granules on asphalt shingles.</li>
          <li><strong>Moss and Algae:</strong> Organic growth that can damage roofing materials over time.</li>
          <li><strong>Ice Dams:</strong> Buildup of ice at the roof edge that prevents proper drainage.</li>
        </ul>

        <h3>Repair Terms</h3>
        <ul>
          <li><strong>Tear-off:</strong> Complete removal of existing roofing materials down to the deck.</li>
          <li><strong>Overlay/Recover:</strong> Installing new roofing materials over existing ones.</li>
          <li><strong>Patching:</strong> Repairing a small damaged area rather than replacing the entire roof.</li>
          <li><strong>Flashing Cement:</strong> Waterproof sealant used to seal flashing or small leaks.</li>
          <li><strong>Roof Cement:</strong> Asphalt-based sealant used for various repairs.</li>
        </ul>

        <h2>Roofing Project and Installation Terms</h2>

        <h3>Estimate</h3>
        <p>
          A contractor's projection of project costs, often provided free of charge before work begins.
        </p>

        <h3>Bid</h3>
        <p>
          A formal offer to complete a roofing project for a specified price.
        </p>

        <h3>Scope of Work</h3>
        <p>
          Detailed description of all work to be performed as part of a roofing project.
        </p>

        <h3>Building Code</h3>
        <p>
          Local regulations that specify minimum standards for construction, including roofing.
        </p>

        <h3>Warranty</h3>
        <ul>
          <li><strong>Manufacturer's Warranty:</strong> Covers defects in the roofing materials, typically 20-50 years depending on the product.</li>
          <li><strong>Workmanship Warranty:</strong> Provided by the contractor to cover installation errors, typically 2-10 years.</li>
          <li><strong>Extended Warranty:</strong> Additional coverage available for purchase that may extend protection.</li>
        </ul>

        <h2>Energy Efficiency and Sustainable Roofing</h2>

        <h3>Cool Roof</h3>
        <p>
          Roofing system designed to reflect more sunlight and absorb less heat, reducing building cooling costs.
        </p>

        <h3>Solar Reflectance Index (SRI)</h3>
        <p>
          A measure of a roof's ability to reject solar heat, expressed as a value from 0 to 100 (higher values indicate greater reflectivity).
        </p>

        <h3>Green Roof</h3>
        <p>
          A roof partially or completely covered with vegetation planted over a waterproof membrane.
        </p>

        <h3>Solar Roof</h3>
        <p>
          Roofing system that integrates solar energy production, either through solar panels mounted on the roof or solar shingles/tiles that replace conventional roofing materials.
        </p>

        <h2>Texas-Specific Roofing Terms</h2>

        <h3>Windstorm Certification</h3>
        <p>
          In coastal areas of Texas, certification that a roof meets windstorm building code requirements, often necessary for insurance.
        </p>

        <h3>Impact Resistance Rating</h3>
        <p>
          Classification system (Class 1-4) that rates how well roofing materials withstand impact from hail or debris. Class 4 offers the highest protection and may qualify for insurance discounts in hail-prone areas of Texas.
        </p>

        <h3>FORTIFIED Roof™</h3>
        <p>
          A designation from the Insurance Institute for Business & Home Safety indicating that a roof exceeds building codes for resilience against severe weather, which can be particularly valuable in Texas.
        </p>

        <h2>Conclusion</h2>
        <p>
          Understanding roofing terminology helps you communicate effectively with contractors and make informed decisions about your roof. Whether you're planning a new installation, facing repairs, or simply wanting to maintain your current roof, this glossary provides a foundation of knowledge for Texas homeowners.
        </p>
        <p>
          For professional roofing assistance, RoofFindr can connect you with qualified local contractors who understand the unique roofing needs of Texas homes.
        </p>
      </BlogLayout>
    </>
  );
} 