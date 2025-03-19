'use client';

import { LegalPageLayout } from '@/components/layout/LegalPageLayout';

export default function AccessibilityPage() {
  return (
    <LegalPageLayout
      title="Accessibility Statement"
      subtitle="Our commitment to digital accessibility"
      lastUpdated="May 10, 2024"
    >
      <h2 id="our-commitment" data-toc-heading>Our Commitment</h2>
      <p>
        RoofFindr is committed to ensuring digital accessibility for people with disabilities. We are 
        continually improving the user experience for everyone, and applying the relevant accessibility 
        standards to achieve this.
      </p>

      <h2 id="conformance-status" data-toc-heading>Conformance Status</h2>
      <p>
        The Web Content Accessibility Guidelines (WCAG) define requirements for designers and developers 
        to improve accessibility for people with disabilities. It defines three levels of conformance: 
        Level A, Level AA, and Level AAA.
      </p>
      <p>
        RoofFindr strives to conform to WCAG 2.1 Level AA. We have taken the following measures to achieve this:
      </p>
      <ul>
        <li>Inclusion of ARIA attributes</li>
        <li>Use of semantic HTML</li>
        <li>Consistent navigation structure</li>
        <li>Color contrast compliance</li>
        <li>Keyboard accessibility</li>
        <li>Text alternatives for non-text content</li>
        <li>Clear headings and labels</li>
        <li>Resizable text without loss of content or functionality</li>
      </ul>

      <h2 id="technologies-used" data-toc-heading>Technologies Used</h2>
      <p>
        RoofFindr relies on the following technologies to work with the particular combinations of web 
        browsers and any assistive technologies or plugins installed on your computer:
      </p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>WAI-ARIA</li>
        <li>SVG</li>
      </ul>
      <p>
        These technologies are relied upon for conformance with the accessibility standards used.
      </p>

      <h2 id="assessment-methods" data-toc-heading>Assessment Methods</h2>
      <p>
        RoofFindr assesses the accessibility of our website in the following ways:
      </p>
      <ul>
        <li>Self-evaluation</li>
        <li>External evaluation</li>
        <li>User testing with assistive technologies</li>
        <li>Automated testing tools</li>
      </ul>

      <h2 id="feedback" data-toc-heading>Feedback</h2>
      <p>
        We welcome your feedback on the accessibility of RoofFindr. Please let us know if you encounter 
        accessibility barriers on our website:
      </p>
      <ul>
        <li>Email: <a href="mailto:accessibility@rooffindr.com">accessibility@rooffindr.com</a></li>
        <li>Phone: (555) 123-4567</li>
      </ul>
      <p>
        We try to respond to feedback within 5 business days.
      </p>

      <h2 id="compatibility" data-toc-heading>Compatibility with Browsers and Assistive Technology</h2>
      <p>
        RoofFindr is designed to be compatible with the following assistive technologies:
      </p>
      <ul>
        <li>Screen readers (including JAWS, NVDA, VoiceOver, and TalkBack)</li>
        <li>Screen magnifiers</li>
        <li>Speech recognition software</li>
        <li>Keyboard-only navigation</li>
      </ul>
      <p>
        RoofFindr is compatible with recent versions of major browsers including:
      </p>
      <ul>
        <li>Google Chrome</li>
        <li>Mozilla Firefox</li>
        <li>Apple Safari</li>
        <li>Microsoft Edge</li>
      </ul>

      <h2 id="limitations" data-toc-heading>Limitations and Alternatives</h2>
      <p>
        Despite our best efforts to ensure the accessibility of RoofFindr, there may be some limitations. 
        Below is a description of known limitations, and potential solutions. Please contact us if you 
        observe an issue not listed below.
      </p>
      <ul>
        <li>
          <strong>User-uploaded images:</strong> User-uploaded images may not have text alternatives because we 
          cannot control what users upload. We encourage users to provide descriptive text when uploading images.
        </li>
        <li>
          <strong>Third-party content:</strong> Some content on our website comes from third-party sources and 
          may not be fully accessible. We work with our partners to improve the accessibility of this content.
        </li>
        <li>
          <strong>PDF documents:</strong> Some older PDF documents may not be fully accessible. We are working 
          to remediate these documents or provide the information in alternative formats upon request.
        </li>
      </ul>

      <h2 id="ongoing-improvements" data-toc-heading>Ongoing Improvements</h2>
      <p>
        RoofFindr is committed to ongoing improvements to accessibility. We are:
      </p>
      <ul>
        <li>Conducting regular accessibility audits</li>
        <li>Providing accessibility training to our staff</li>
        <li>Assigning clear accessibility goals and responsibilities</li>
        <li>Employing formal accessibility quality assurance methods</li>
      </ul>
      <p>
        This statement was created on May 10, 2024, using the W3C Accessibility Statement Generator Tool.
      </p>
    </LegalPageLayout>
  );
} 