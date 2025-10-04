import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)', fontFamily: 'var(--font-primary)' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-unstuck" id="home">
        <div className="hero-overlay-two">
          <div className="hero-content container">
            <h1 className="hero-title">The Unstuck Woman</h1>
            <p className="hero-subtitle-two">
              You are not too much. You are not too late. You are exactly on time.
            </p>
            <Link href="#contact" className="btn-hero">Begin Your Journey</Link>
          </div>
        </div>
      </section>

      <div className="section-divider">
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 C720,100 720,0 1440,100 L1440,00 L0,0 Z" fill="#fff" />
        </svg>
      </div>

      <section className="external-links-section">
        <div className="container external-links-container">
          <p className="external-links-title">Featuring</p>
          <div className="external-links">
            <Link href="https://www.margaretmungai.com/" target="_blank" className="external-link">
              MargaretMungai.com
            </Link>
          </div>
        </div>
      </section>

      <section className="about-container-unstuck" id="about">
        <div className="container">
          <h2 className="section-title py-4 text-center">
            My Story: From Stuck to Unstoppable
          </h2>
          <div className="story-content">
            <p>
              For a long time, I looked strong on the outside, but inside—I was
              unraveling.
            </p>
            <p>I had moments where I questioned everything:</p>
            <ul>
              <li>Who am I?</li>
              <li>Why do I feel like I'm living someone else's life?</li>
              <li>
                Why can't I move forward, even though I know I was made for more?
              </li>
            </ul>
            <p>
              I was constantly shrinking myself, second-guessing my voice, and
              carrying pain I never paused to process. I was "functioning"... but
              far from free.
            </p>

            <blockquote>
              "I'm done surviving. I want to live aligned, whole, and powerful."
            </blockquote>

            <p>
              That decision led me into deep work—therapy, coaching, God, books,
              journaling, falling down, rising again. I started healing patterns I
              didn't even know were running my life. I started meeting my real
              self—and she was bold, brilliant, and deeply intuitive.
            </p>
            <p>Now, I help other women do the same.</p>

            <h3>Does This Sound Familiar?</h3>
            <ul>
              <li>"I feel like I'm the background character in my own life."</li>
              <li>"I'm tired of playing it small."</li>
              <li>"I'm stuck. I know there's something more."</li>
            </ul>

            <p>
              If any of this resonates, you're not alone—and you're in the right
              place.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider">
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 C720,100 720,0 1440,100 L1440,00 L0,0 Z" fill="#fff" />
        </svg>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-unstuck"></div>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div>
            <small className="hero-subtitle">Margaret Mungai</small>
            <h1 className="hero-title">
              You've Done Everything "Right"-Yet Something Still feels Off
            </h1>
            <p className="hero-text">
              Feeling stuck, quietly unfulfilled or disconnected from your
              purpose? Let's rewrite your story.
              <br />
            </p>
            <Link
              href="https://www.margaretmungai.com/"
              className="btn btn-outline-light"
            >
              Margaret Mungai.com <i className="fas fa-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider">
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 C720,100 720,0 1440,100 L1440,00 L0,0 Z" fill="#fff" />
        </svg>
      </div>

      <section id="brochures" className="brochure-section">
        <div className="container">
          <h2 className="section-title">Download Resources</h2>
          <div className="brochure-grid">
            <div className="brochure-card">
              <i className="fas fa-file-pdf brochure-icon"></i>
              <div>
                <h4>Coaching Programs Overview Brochure</h4>
                <Link
                  href="/brochures/mungaimargaretcoach_brochure.pdf"
                  className="btn-outline"
                >
                  Download PDF
                </Link>
              </div>
            </div>

            <div className="brochure-card">
              <i className="fas fa-file-pdf brochure-icon"></i>
              <div>
                <h4>Unstuck Woman Program Outline</h4>
                <Link
                  href="/brochures/UNSTUCK WOMAN PROGRAM OUTLINE.pdf"
                  className="btn-outline"
                >
                  Download PDF
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider">
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 C720,100 720,0 1440,100 L1440,00 L0,0 Z" fill="#fff" />
        </svg>
      </div>

      {/* Testimonials Section */}
      <section className="testimonials-section" id="testimonials">
        <div className="container">
          <h2 className="section-title">What Clients Are Saying</h2>
          <p className="section-subtitle">
            Heartfelt stories from women who've reset, reclaimed, and risen.
          </p>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="quote-icon"><i className="fas fa-quote-left"></i></div>
              <p>
                " Margaret is a fantastic and practical coach. She knows her
                content very well and makes it so real you feel like she is
                talking to you directly. Margaret will change generations.. one
                person at a time. Her coaching is timely and for such a season as
                this!!"
              </p>
              <span className="testimonial-name">Grace Muoria</span>
            </div>

            <div className="testimonial-card">
              <div className="quote-icon"><i className="fas fa-quote-left"></i></div>
              <p>
                "I felt heard and understood by coach Margaret and
                honestly,that's what kick started this journey"
              </p>
              <span className="testimonial-name">Eunice Wagoki </span>
            </div>

            <div className="testimonial-card">
              <div className="quote-icon"><i className="fas fa-quote-left"></i></div>
              <p>
                "Been a supper cool Kickstart with lots of knowledge gained.
                Thanks and looking forward to gaining more...."
              </p>
              <span className="testimonial-name">Verah Omollo</span>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider">
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 C720,100 720,0 1440,100 L1440,00 L0,0 Z" fill="#fff" />
        </svg>
      </div>

      <section id="blogs" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Latest Blogs</h2>
          <div className="row g-4">
            <div className="col-12 text-center">
              <Link href="/blog" className="btn btn-primary">
                View All Blogs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider">
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 C720,100 720,0 1440,100 L1440,00 L0,0 Z" fill="#fff" />
        </svg>
      </div>

      {/* Pictorial Section */}
      <section className="gallery-section" id="gallery">
        <div className="container">
          <h2 className="section-title">Program Moments</h2>

          {/* Filter Buttons */}
          <div className="gallery-filters">
            <button className="filter-btn active" data-filter="all">All</button>
            <button className="filter-btn" data-filter="retreats">Retreats</button>
            <button className="filter-btn" data-filter="teambuilding">
              Team Building
            </button>
            <button className="filter-btn" data-filter="forums">Forums</button>
          </div>

          {/* Gallery */}
          <div id="lightgallery" className="gallery-grid">
            {/* RETREATS */}
            <Link href="/images/retreat3.jpg" className="gallery-item retreats">
              <Image 
                src="/images/retreat3.jpg" 
                alt="Retreat" 
                width={300} 
                height={200} 
                className="img-fluid" 
              />
            </Link>
            <Link href="/images/retreat2.jpg" className="gallery-item retreats">
              <Image 
                src="/images/retreat2.jpg" 
                alt="Retreat" 
                width={300} 
                height={200} 
                className="img-fluid" 
              />
            </Link>
            <Link href="/images/retreat4.jpg" className="gallery-item retreats">
              <Image 
                src="/images/retreat4.jpg" 
                alt="Retreat" 
                width={300} 
                height={200} 
                className="img-fluid" 
              />
            </Link>
            <Link href="/images/retreat5.jpg" className="gallery-item retreats">
              <Image 
                src="/images/retreat5.jpg" 
                alt="Retreat" 
                width={300} 
                height={200} 
                className="img-fluid" 
              />
            </Link>

            {/* TEAM BUILDING */}
            <Link href="/images/team1.jpg" className="gallery-item teambuilding">
              <Image 
                src="/images/team1.jpg" 
                alt="Team Building" 
                width={300} 
                height={200} 
                className="img-fluid" 
              />
            </Link>
            <Link href="/images/team2.jpg" className="gallery-item teambuilding">
              <Image 
                src="/images/team2.jpg" 
                alt="Team Building" 
                width={300} 
                height={200} 
                className="img-fluid" 
              />
            </Link>
            <Link href="/images/team3.jpg" className="gallery-item teambuilding">
              <Image 
                src="/images/team3.jpg" 
                alt="Team Building" 
                width={300} 
                height={200} 
                className="img-fluid" 
              />
            </Link>

            {/* FORUMS */}
            <Link href="/images/forum1.jpg" className="gallery-item forums">
              <Image 
                src="/images/forum1.jpg" 
                alt="Forum" 
                width={300} 
                height={200} 
                className="img-fluid" 
              />
            </Link>
            <Link href="/images/forum2.jpg" className="gallery-item forums">
              <Image 
                src="/images/forum2.jpg" 
                alt="Forum" 
                width={300} 
                height={200} 
                className="img-fluid" 
              />
            </Link>
            <Link href="/images/forum3.jpg" className="gallery-item forums">
              <Image 
                src="/images/forum3.jpg" 
                alt="Forum" 
                width={300} 
                height={200} 
                className="img-fluid" 
              />
            </Link>
            <Link href="/images/forum4.jpg" className="gallery-item forums">
              <Image 
                src="/images/forum4.jpg" 
                alt="Forum" 
                width={300} 
                height={200} 
                className="img-fluid" 
              />
            </Link>
            <Link href="/images/forum5.jpg" className="gallery-item forums">
              <Image 
                src="/images/forum5.jpg" 
                alt="Forum" 
                width={300} 
                height={200} 
                className="img-fluid" 
              />
            </Link>
            <Link href="/images/forum6.jpg" className="gallery-item forums">
              <Image 
                src="/images/forum6.jpg" 
                alt="Forum" 
                width={300} 
                height={200} 
                className="img-fluid" 
              />
            </Link>
            <Link href="/images/forum7.jpg" className="gallery-item forums">
              <Image 
                src="/images/forum7.jpg" 
                alt="Forum" 
                width={300} 
                height={200} 
                className="img-fluid" 
              />
            </Link>
            <Link href="/images/forum8.jpg" className="gallery-item forums">
              <Image 
                src="/images/forum8.jpg" 
                alt="Forum" 
                width={300} 
                height={200} 
                className="img-fluid" 
              />
            </Link>
            <Link href="/images/forum9.jpg" className="gallery-item forums">
              <Image 
                src="/images/forum9.jpg" 
                alt="Forum" 
                width={300} 
                height={200} 
                className="img-fluid" 
              />
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider">
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 C720,100 720,0 1440,100 L1440,00 L0,0 Z" fill="#fff" />
        </svg>
      </div>

      {/* Contact / CTA */}
      <section className="contact-section" id="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Book a free clarity call, ask a question, or just say hello — I'd love
            to hear from you.
          </p>

          <div className="contact-wrapper">
            <form
              action="https://formspree.io/f/meokyzbe"
              method="POST"
              className="contact-form"
            >
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your Message..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary">
                Start Your Journey
              </button>
            </form>

            <div className="contact-details">
              <p>
                <strong>Email:</strong>
                <Link href="mailto:mungaicoach@gmail.com">mungaicoach@gmail.com</Link>
              </p>
              <p>
                <strong>Phone / WhatsApp:</strong>
                <Link href="https://wa.me/254716239006" target="_blank">
                  +254 716 239006
                </Link>
              </p>
              <p><strong>Follow:</strong></p>
              <div className="social-icons">
                <Link href="https://www.instagram.com/madgemungai" target="_blank">
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link href="https://www.facebook.com/madgemungai" target="_blank">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/mindsetcoachmargaretmungai"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in"></i>
                </Link>
                <Link href="https://www.tiktok.com/@madgemungai" target="_blank">
                  <i className="fab fa-tiktok"></i>
                </Link>
              </div>
              <Link
                href="https://calendly.com/mungaicoach/clarity-call"
                target="_blank"
              >
                <button type="submit" className="btn-primary mt-3">
                  Book A Clarity Call
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Link href="https://wa.me/254716239006" className="whatsapp-float" target="_blank">
        <i className="fab fa-whatsapp"></i>
      </Link>

      <Footer />
    </div>
  );
}
