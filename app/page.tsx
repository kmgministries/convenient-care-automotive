import Image from "next/image";

const services = [
  {
    number: "01",
    title: "Oil Changes & Maintenance",
    description:
      "Routine care that helps your vehicle run smoothly, stay dependable, and avoid preventable problems.",
    items: ["Oil and filter changes", "Fluid and filter checks", "Preventive maintenance"],
  },
  {
    number: "02",
    title: "Brakes & Suspension",
    description:
      "Careful inspection and repair for the systems that help your vehicle stop, steer, and ride safely.",
    items: ["Brake inspections", "Brake service", "Suspension checks"],
  },
  {
    number: "03",
    title: "Diagnostics & Repairs",
    description:
      "Straightforward troubleshooting to identify the issue and help you understand the next step.",
    items: ["Warning-light diagnostics", "Mechanical troubleshooting", "General repairs"],
  },
];

export default function Home() {
  return (
    <main>
      <header className="neo-header">
        <a className="neo-brand" href="#top" aria-label="Convenient Care Automotive home">
          <span className="neo-brand-logo">
            <Image
              src="/convenient-care-logo.webp"
              alt="Convenient Care Automotive logo"
              width={56}
              height={56}
              priority
              unoptimized
            />
          </span>
          <span>
            <strong>Convenient Care</strong>
            <small>Automotive // Service OS</small>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#services"><span>01</span> Services</a>
          <a href="#process"><span>02</span> Process</a>
          <a href="#contact"><span>03</span> Contact</a>
        </nav>
        <div className="neo-header-ase" aria-label="ASE Certified Mechanic">
          <Image src="/ase-official-logo.png" alt="Official ASE logo" width={42} height={42} unoptimized />
          <span><strong>ASE Certified</strong><small>Mechanic</small></span>
        </div>
        <a className="neo-header-cta" href="#contact">
          <span>Initialize request</span><b aria-hidden="true">↗</b>
        </a>
      </header>

      <section className="neo-hero" id="top">
        <div className="neo-ambient neo-ambient-one" />
        <div className="neo-ambient neo-ambient-two" />
        <div className="neo-grid">
          <div className="neo-copy">
            <div className="neo-status neo-status-credential">
              <strong>Professional Automotive Care</strong>
              <span>Online</span>
            </div>
            <p className="eyebrow"><span /> CCA Automotive Service Intelligence</p>
            <h1>
              Automotive<br />care. <em>Upgraded.</em>
            </h1>
            <p className="neo-lede">
              Professional expertise meets a smarter service experience. Maintenance, brakes, diagnostics, and repairs—engineered around clear answers and convenient next steps.
            </p>
            <div className="neo-actions">
              <a className="neo-button neo-button-primary" href="#contact">
                Launch service request <span aria-hidden="true">↗</span>
              </a>
              <a className="neo-button neo-button-ghost" href="#services">
                Explore service modules <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="neo-trust" aria-label="Service approach">
              <div><b>01</b><span>Professional<br />expertise</span></div>
              <div><b>02</b><span>Transparent<br />next steps</span></div>
              <div><b>03</b><span>Convenience<br />built in</span></div>
            </div>
          </div>

          <div className="neo-visual" aria-label="Convenient Care Automotive service command display">
            <div className="neo-orbit neo-orbit-one" />
            <div className="neo-orbit neo-orbit-two" />
            <div className="neo-orbit-dot" />
            <div className="neo-logo-frame">
              <div className="neo-frame-top"><span>CCA // Command Interface</span><span>SYS 01.26</span></div>
              <div className="neo-logo-stage">
                <span className="neo-target neo-target-one" />
                <span className="neo-target neo-target-two" />
                <span className="neo-logo-scan" />
                <Image
                  src="/convenient-care-logo.webp"
                  alt="Convenient Care Automotive"
                  width={720}
                  height={720}
                  priority
                  unoptimized
                />
              </div>
              <div className="neo-module-readout">
                <div><span>Maintenance</span><i><b style={{ width: "92%" }} /></i><strong>Ready</strong></div>
                <div><span>Brake system</span><i><b style={{ width: "86%" }} /></i><strong>Ready</strong></div>
                <div><span>Diagnostics</span><i><b style={{ width: "96%" }} /></i><strong>Ready</strong></div>
              </div>
              <div className="neo-frame-bottom"><span><i /> Service network online</span><span>Quality focused</span></div>
            </div>
            <div className="neo-float-card neo-float-card-one neo-float-credential">
              <small>Service standard</small><strong>PRO</strong><span>Experienced care</span>
            </div>
            <div className="neo-float-card neo-float-card-two">
              <small>Service protocol</small><strong>03 / 03</strong><span>All modules ready</span>
            </div>
            <span className="neo-axis neo-axis-x">X // 042.8</span>
            <span className="neo-axis neo-axis-y">Y // 117.4</span>
          </div>
        </div>
      </section>

      <div className="neo-ticker" aria-label="Convenient Care Automotive services">
        <div>
          <span>Oil changes & maintenance</span><b>✦</b><span>Brakes & suspension</span><b>✦</b><span>Diagnostics & repairs</span><b>✦</b>
          <span aria-hidden="true">Oil changes & maintenance</span><b aria-hidden="true">✦</b><span aria-hidden="true">Brakes & suspension</span><b aria-hidden="true">✦</b><span aria-hidden="true">Diagnostics & repairs</span><b aria-hidden="true">✦</b>
        </div>
      </div>

      <section className="neo-section neo-services" id="services">
        <div className="neo-section-head">
          <div>
            <span className="neo-section-index">01 // Service architecture</span>
            <h2>Three systems.<br /><em>One clear interface.</em></h2>
          </div>
          <div className="neo-section-aside">
            <span>Core service modules</span>
            <p>Everything you need for routine care, critical systems, and deeper troubleshooting—organized into three focused automotive service modules.</p>
            <div className="neo-credential-proof"><div><strong>Professional Automotive Care</strong><small>Clear service and experienced attention</small></div></div>
          </div>
        </div>

        <div className="neo-service-grid">
          {services.map((service, index) => (
            <article className={`neo-service-card neo-service-card-${index + 1}`} key={service.title}>
              <div className="neo-service-top">
                <span className="neo-service-number">{service.number}</span>
                <span className="neo-service-tag">{`Module ${service.number} // Ready`}</span>
              </div>
              <div className="neo-service-symbol" aria-hidden="true"><i /><i /><i /></div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.items.map((item) => <li key={item}><span>✓</span>{item}</li>)}
              </ul>
              <a href="#contact">Start a request <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>

        <div className="neo-care-strip">
          <div><span>01</span><strong>Professional care</strong><small>Experienced automotive attention behind your service.</small></div>
          <div><span>02</span><strong>Convenient request</strong><small>Start with an appointment, quote, call, or text.</small></div>
          <div><span>03</span><strong>Vehicle-first focus</strong><small>Share the details that help explain what is happening.</small></div>
        </div>
      </section>

      <section className="neo-process" id="process">
        <div className="neo-process-visual" aria-label="Service process display">
          <div className="neo-console-head"><span>CCA // Diagnostic pipeline</span><b><i /> Online</b></div>
          <div className="neo-gauge">
            <div className="neo-gauge-ring"><strong>CCA</strong><span>Service intelligence active</span></div>
          </div>
          <div className="neo-console-data">
            <div><small>Request</small><strong>01</strong></div>
            <div><small>Review</small><strong>02</strong></div>
            <div><small>Next step</small><strong>03</strong></div>
          </div>
          <span className="neo-scan-line" />
        </div>

        <div className="neo-process-copy">
          <span className="neo-section-index neo-section-index-light">02 // Service protocol</span>
          <h2>From signal to <em>solution.</em></h2>
          <p>Start with what you know. Our request system organizes the important vehicle details so your service conversation can begin with a clearer picture.</p>
          <ol>
            <li><b>01</b><div><strong>Tell us about the vehicle</strong><span>Share the year, make, model, mileage, and what you have noticed.</span></div></li>
            <li><b>02</b><div><strong>Choose your request type</strong><span>Ask for an appointment, prepare a quote request, or call and text.</span></div></li>
            <li><b>03</b><div><strong>Get a clear next step</strong><span>Move forward with a more organized service conversation.</span></div></li>
          </ol>
        </div>
      </section>

      <section className="neo-contact" id="contact">
        <div className="neo-contact-glow" />
        <div className="neo-contact-head">
          <span className="neo-section-index neo-section-index-light">03 // Request console</span>
          <h2>Initialize your<br /><em>next service.</em></h2>
          <p>Choose an appointment or quote request and send the vehicle details directly to the Convenient Care Automotive inbox.</p>
        </div>

        <div className="neo-contact-options" aria-label="Ways to contact Convenient Care Automotive">
          <a href="#request-form"><span>01</span><strong>Appointment</strong><small>Choose a preferred date</small><b aria-hidden="true">↗</b></a>
          <a href="#request-form"><span>02</span><strong>Quote request</strong><small>Describe the work needed</small><b aria-hidden="true">↗</b></a>
          <div aria-disabled="true"><span>03</span><strong>Call or text</strong><small>Number coming soon</small><b aria-hidden="true">—</b></div>
        </div>

        <div className="neo-request" id="request-form">
          <div className="neo-request-intro">
            <span className="neo-request-label"><i /> Guided request interface</span>
            <h3>Tell us what the vehicle is doing.</h3>
            <p>Choose an appointment or quote request, add the vehicle details, and transmit everything directly to the service inbox.</p>
            <div className="neo-detail-tip"><b>Helpful details</b><span>Year, make, model, mileage, warning lights, noises, and when the problem began.</span></div>
          </div>

          <form
            className="neo-form"
            aria-label="Automotive service request"
            action="https://formsubmit.co/joshuatybarra91@icloud.com"
            method="POST"
          >
            <input type="hidden" name="_subject" value="New Convenient Care Automotive service request" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://kmgministries.github.io/convenient-care-automotive/#request-form" />
            <fieldset>
              <legend>Request type</legend>
              <label><input type="radio" name="Request type" value="Appointment request" defaultChecked /><span>Appointment</span></label>
              <label><input type="radio" name="Request type" value="Quote request" /><span>Quote</span></label>
            </fieldset>
            <div className="neo-field-row">
              <label>Your name<input type="text" name="Customer name" placeholder="Full name" autoComplete="name" required /></label>
              <label>Phone or email<input type="text" name="Contact information" placeholder="Best way to reach you" autoComplete="tel" required /></label>
            </div>
            <div className="neo-field-row">
              <label>Vehicle<input type="text" name="Vehicle" placeholder="Year, make and model" required /></label>
              <label>Service<select name="Service needed" defaultValue="" required><option value="" disabled>Select a service</option><option>Oil changes and maintenance</option><option>Brakes and suspension</option><option>Diagnostics and repairs</option><option>Not sure yet</option></select></label>
            </div>
            <label>What’s going on?<textarea name="Request details" rows={4} placeholder="Describe the service you need or what your vehicle is doing" required /></label>
            <button type="submit">Transmit service request <span>→</span></button>
            <p>Appointment and quote requests are delivered to the service inbox.</p>
          </form>
        </div>
      </section>

      <footer className="neo-footer">
        <div className="neo-footer-brand"><span className="neo-brand-mark">CC</span><span><strong>Convenient Care Automotive</strong><small>Modern care. Clear answers.</small></span></div>
        <div className="neo-footer-ase" aria-label="ASE Certified Mechanic">
          <Image src="/ase-official-logo.png" alt="Official ASE logo" width={50} height={50} unoptimized />
          <span><strong>ASE Certified Mechanic</strong><small>Professional automotive expertise</small></span>
        </div>
        <a href="#top">Back to top <span>↑</span></a>
        <p className="neo-footer-copyright">© 2026 Convenient Care Automotive. All rights reserved.</p>
      </footer>
    </main>
  );
}
