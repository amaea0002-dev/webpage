import LegalPage from '@/components/LegalPage'

export const metadata = { title: 'Terms · Amaea' }

export default function TermsPage() {
  return (
    <LegalPage title="Terms of service." eyebrow="Legal · Master services" lastUpdated="10 September 2026">
      {/* TODO: approve legal entity, contract, pricing, DPA, retention, liability and governing-law terms before publication. */}
      <p className="body-large" style={{ marginBottom: 28 }}>Draft terms, subject to legal and commercial approval.</p>
      <h2 className="h-section" style={{ marginBottom: 16 }}>1. The contract</h2>
      <p className="body-large" style={{ marginBottom: 28 }}>
        These Terms govern your use of the Amaea platform. They form a binding contract between
        your firm (the &ldquo;Customer&rdquo;) and Amaea Ltd. By using the platform you accept these Terms.
      </p>

      <h2 className="h-section" style={{ marginBottom: 16 }}>2. Subscription &amp; payment</h2>
      <p className="body-large" style={{ marginBottom: 28 }}>
        Subscriptions are monthly or annual at your option. Founders programme members
        receive a 20% discount off published rates for the lifetime of their subscription
        following the rate schedule disclosed at onboarding.
      </p>

      <h2 className="h-section" style={{ marginBottom: 16 }}>3. Acceptable use</h2>
      <p className="body-large" style={{ marginBottom: 28 }}>
        The platform is for use by FCA-authorised firms in the conduct of FCA-regulated retail
        mediation. You may not use the platform to provide regulated advice to anyone other
        than your own clients. You may not export the FCA-handbook RAG corpus for commercial
        redistribution.
      </p>

      <p className="body-large" style={{ marginBottom: 28 }}>
        Amaea produces findings and drafts for qualified compliance staff to review and sign off.
        Its output is not a compliance determination or regulated advice.
      </p>
      <h2 className="h-section" style={{ marginBottom: 16 }}>4. Data ownership</h2>
      <p className="body-large" style={{ marginBottom: 28 }}>
        Customer firm data remains the property of the Customer at all times. We process it
        as data processor under a DPA. We do not use Customer data to train AI models. We do
        not aggregate Customer data across firms for any commercial purpose other than
        anonymised, aggregate platform-health metrics.
      </p>

      <h2 className="h-section" style={{ marginBottom: 16 }}>5. SLA &amp; uptime</h2>
      <p className="body-large" style={{ marginBottom: 28 }}>
        TODO: verify any service-level commitments, measurement period, exclusions,
        service credits and maintenance notice. No uptime percentage is confirmed here.
      </p>

      <h2 className="h-section" style={{ marginBottom: 16 }}>6. Termination &amp; data export</h2>
      <p className="body-large" style={{ marginBottom: 28 }}>
        Either party may terminate on 30 days&apos; notice. On termination we provide a
        full export of your firm data (JSON + PDFs of source documents) within 14 days. Data
        is permanently deleted 30 days after termination, with written confirmation provided.
      </p>

      <h2 className="h-section" style={{ marginBottom: 16 }}>7. Liability</h2>
      <p className="body-large" style={{ marginBottom: 28 }}>
        Our liability is capped at the fees paid in the 12 months preceding the claim. We
        exclude liability for consequential losses and for FCA actions taken against the
        Customer in respect of advice provided by the Customer to its clients (whether or
        not using the platform).
      </p>

      <h2 className="h-section" style={{ marginBottom: 16 }}>8. Governing law</h2>
      <p className="body-large">
        England &amp; Wales. Disputes subject to the exclusive jurisdiction of the courts
        of England and Wales.
      </p>
    </LegalPage>
  )
}
